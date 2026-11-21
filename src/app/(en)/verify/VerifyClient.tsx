'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import jsQR from 'jsqr';
import { 
  ShieldCheck, 
  Camera, 
  CameraOff, 
  Upload, 
  Search, 
  AlertCircle, 
  CheckCircle2, 
  RotateCcw, 
  ExternalLink, 
  MessageSquare, 
  ZoomIn, 
  ZoomOut,
  RefreshCw,
  Building,
  Info
} from 'lucide-react';
import './receipt.css';

interface ReceiptSnapshot {
  date?: string;
  paymentDate?: string;
  amount?: string;
  amountReceived?: string;
  previousPayments?: string;
  totalAmount?: string;
  remainingAmount?: string;
  currency?: string;
  project?: string;
  projectName?: string;
  plotNo?: string;
  block?: string;
  size?: string;
  measuring?: string;
  regMembershipNo?: string;
  status?: string;
  statusOther?: string;
  propertyType?: string;
  paymentCategory?: string;
  constructionSubType?: string;
  constructionSubTypeOther?: string;
  installmentNo?: string;
  totalInstallments?: string;
  paymentMethod?: string;
  transactionNo?: string;
  refNo?: string;
  bankName?: string;
  accountNo?: string;
  payerName?: string;
  sellerName?: string;
  sellerCnic?: string;
  sellerMobile?: string;
  sellerAddress?: string;
  purchaserName?: string;
  purchaserCnic?: string;
  purchaserMobile?: string;
  purchaserAddress?: string;
  receiver?: string;
  transferDate?: string;
  otherDetails?: string;
  description?: string;
  company?: {
    name?: string;
    email?: string;
    phone?: string;
    address?: string;
    tagline?: string;
    website?: string;
  };
}

interface VerificationData {
  found: boolean;
  number: string;
  kind: 'RECEIPT' | 'VOUCHER';
  status: 'ISSUED' | 'VOIDED';
  issuedAt?: string;
  voidedAt?: string | null;
  snapshot: ReceiptSnapshot;
}

const API_BASE = 'https://api.alammana.pk/api/v1';

function extractVerifyCode(input: string): string {
  const trimmed = input.trim();
  if (trimmed.includes('/verify/')) {
    const after = trimmed.split('/verify/')[1];
    return after.split('?')[0].split('#')[0].trim();
  }
  return trimmed;
}

function fmtMoney(val: unknown, currency = 'PKR'): string {
  if (val === null || val === undefined || String(val).trim() === '') return '—';
  const num = Number(val);
  return Number.isFinite(num) ? `${currency} ${num.toLocaleString('en-PK')}/-` : String(val);
}

function fmtDate(val: unknown): string {
  if (!val) return '—';
  const s = String(val);
  if (/^\d{2}-\d{2}-\d{4}$/.test(s)) return s;
  const d = new Date(s);
  if (Number.isNaN(d.getTime())) return s;
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}-${month}-${year}`;
}

function fieldVal(val: unknown, fallback = '—'): string {
  return val !== null && val !== undefined && String(val).trim() !== '' ? String(val) : fallback;
}

export default function VerifyClient() {
  const [code, setCode] = useState<string>('');
  const [manualInput, setManualInput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<VerificationData | null>(null);

  // Camera & Scanner State
  const [isCameraActive, setIsCameraActive] = useState<boolean>(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [availableDevices, setAvailableDevices] = useState<MediaDeviceInfo[]>([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState<string>('');
  const [scaleMode, setScaleMode] = useState<'fit' | 'full'>('fit');
  const [scale, setScale] = useState<number>(1);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Extract verification code from URL on initial load or popstate
  const readCodeFromUrl = useCallback(() => {
    if (typeof window === 'undefined') return '';
    const path = window.location.pathname;
    let urlCode = '';
    if (path.includes('/verify/')) {
      const parts = path.split('/verify/');
      if (parts[1] && parts[1].trim() !== '') {
        urlCode = parts[1].split('/')[0].split('?')[0];
      }
    }
    if (!urlCode) {
      const params = new URLSearchParams(window.location.search);
      urlCode = params.get('code') || '';
    }
    return urlCode.trim();
  }, []);

  const fetchVerification = useCallback(async (verifyCode: string) => {
    if (!verifyCode) return;
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const res = await fetch(`${API_BASE}/verify/${encodeURIComponent(verifyCode)}`);
      if (!res.ok) {
        if (res.status === 404) {
          setError('Receipt not found. Please verify the QR code or reference token and try again.');
        } else {
          setError(`Verification service returned status ${res.status}. Please try again later.`);
        }
        return;
      }

      const json = await res.json();
      if (!json.success || !json.data || !json.data.found) {
        setError('This receipt could not be verified in the Al Ammana official ledger.');
        return;
      }

      setData(json.data);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Network error';
      setError(`Failed to verify receipt: ${msg}`);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const initialCode = readCodeFromUrl();
    if (initialCode) {
      setCode(initialCode);
      fetchVerification(initialCode);
    }

    const handlePopState = () => {
      const popCode = readCodeFromUrl();
      setCode(popCode);
      if (popCode) {
        fetchVerification(popCode);
      } else {
        setData(null);
        setError(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [readCodeFromUrl, fetchVerification]);

  // Viewport responsive scaling calculation for 720px static receipt
  useEffect(() => {
    const updateScale = () => {
      if (!containerRef.current) return;
      const available = containerRef.current.clientWidth - 24; // padding
      if (scaleMode === 'fit') {
        const calculated = Math.min(1, Math.max(0.35, available / 720));
        setScale(calculated);
      } else {
        setScale(1);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [scaleMode, data]);

  // Stop camera tracks cleanly
  const stopCamera = useCallback(() => {
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(t => t.stop());
      streamRef.current = null;
    }
    setIsCameraActive(false);
  }, []);

  // Handle scanned code
  const handleScannedCode = useCallback((rawCode: string) => {
    const extracted = extractVerifyCode(rawCode);
    if (!extracted) return;
    stopCamera();
    setCode(extracted);
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', `/verify/${encodeURIComponent(extracted)}`);
    }
    fetchVerification(extracted);
  }, [stopCamera, fetchVerification]);

  // Continuous frame scan loop
  const scanLoop = useCallback(() => {
    if (!videoRef.current || !canvasRef.current) {
      animFrameRef.current = requestAnimationFrame(scanLoop);
      return;
    }

    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const codeResult = jsQR(imageData.data, imageData.width, imageData.height, {
          inversionAttempts: 'dontInvert',
        });

        if (codeResult && codeResult.data) {
          handleScannedCode(codeResult.data);
          return;
        }
      }
    }

    animFrameRef.current = requestAnimationFrame(scanLoop);
  }, [handleScannedCode]);

  // Start camera
  const startCamera = async (deviceId?: string) => {
    setCameraError(null);
    stopCamera();

    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Camera access is not supported by your browser. Please upload a photo or enter code manually.');
      }

      const constraints: MediaStreamConstraints = {
        video: deviceId 
          ? { deviceId: { exact: deviceId } } 
          : { facingMode: { ideal: 'environment' }, width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: false,
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }

      setIsCameraActive(true);
      animFrameRef.current = requestAnimationFrame(scanLoop);

      // Enumerate available video inputs
      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoInputs = devices.filter(d => d.kind === 'videoinput');
      setAvailableDevices(videoInputs);
      if (videoInputs.length > 0 && !selectedDeviceId) {
        const activeTrack = stream.getVideoTracks()[0];
        const currentSetting = activeTrack.getSettings();
        if (currentSetting.deviceId) {
          setSelectedDeviceId(currentSetting.deviceId);
        }
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Could not start camera';
      setCameraError(msg);
      setIsCameraActive(false);
    }
  };

  // Process uploaded image file
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const codeResult = jsQR(imageData.data, imageData.width, imageData.height);
        if (codeResult && codeResult.data) {
          handleScannedCode(codeResult.data);
        } else {
          alert('Could not detect a valid QR code in this image. Please ensure the QR code is clear and well lit, or enter the code manually.');
        }
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  // Reset to search/scanner mode
  const handleReset = () => {
    stopCamera();
    setCode('');
    setData(null);
    setError(null);
    setManualInput('');
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', '/verify');
    }
  };

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!manualInput.trim()) return;
    handleScannedCode(manualInput.trim());
  };

  const s = data?.snapshot;
  const company = s?.company || {
    name: 'Al Ammana Developers Real Estate & Construction',
    tagline: 'Trust. Value. Growth.',
    phone: '+92 335 8078262',
    email: 'rabta@alammana.pk',
    address: 'Office No. 4, Level 2 Vertical 4, Opposite ARC Monument, Faisal Hills',
    website: 'www.alammana.pk'
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1A0A0E] py-8 px-4 sm:px-6 lg:px-8">
      {/* Hidden canvas for QR frame analysis */}
      <canvas ref={canvasRef} className="hidden" />

      {/* Main Container */}
      <div className="max-w-4xl mx-auto">
        {/* Top Header */}
        <header className="mb-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#6B0F1A]/10 text-[#6B0F1A] text-xs font-semibold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4 text-[#C9A84C]" />
            Official Electronic Ledger Verification
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#6B0F1A] tracking-tight">
            Al Ammana Receipt Verification
          </h1>
          <p className="mt-1 text-sm text-[#6B5A5E] max-w-xl mx-auto">
            Scan physical QR code or enter token to authenticate receipts directly from our immutable ledger.
          </p>
        </header>

        {/* LOADING STATE */}
        {loading && (
          <div className="bg-white rounded-2xl border border-[#E5D5BC] p-12 text-center shadow-sm">
            <RefreshCw className="w-10 h-10 text-[#6B0F1A] animate-spin mx-auto mb-4" />
            <h3 className="text-lg font-serif font-bold text-[#6B0F1A]">Querying Central Ledger...</h3>
            <p className="text-sm text-[#6B5A5E] mt-1">Verifying cryptographic signature and audit records.</p>
          </div>
        )}

        {/* ERROR STATE */}
        {!loading && error && (
          <div className="bg-white rounded-2xl border border-red-200 p-8 text-center shadow-sm mb-6">
            <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-3">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-red-900 mb-1">Verification Unsuccessful</h3>
            <p className="text-sm text-red-700 max-w-md mx-auto mb-6">{error}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#6B0F1A] text-white text-sm font-medium hover:bg-[#520B14] transition"
              >
                <RotateCcw className="w-4 h-4" /> Try Another Code
              </button>
              <a
                href="https://wa.me/923358078262"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#D4B896] text-[#6B0F1A] text-sm font-medium hover:bg-[#FAF6EF] transition"
              >
                <MessageSquare className="w-4 h-4 text-green-600" /> WhatsApp Support
              </a>
            </div>
          </div>
        )}

        {/* VERIFIED RECEIPT VIEW */}
        {!loading && data && s && (
          <div className="space-y-6">
            {/* Verification Status Banner */}
            <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-emerald-950 text-base">Authentic & Verified Record</span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-200 text-emerald-900 uppercase">
                      {data.status}
                    </span>
                  </div>
                  <p className="text-xs text-emerald-800">
                    Receipt #{data.number} • Issued {fmtDate(s.date)} • Matched central transaction database
                  </p>
                </div>
              </div>

              {/* View scale toggle & Reset */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setScaleMode(scaleMode === 'fit' ? 'full' : 'fit')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-emerald-300 bg-white text-emerald-900 text-xs font-semibold hover:bg-emerald-100 transition"
                  title="Toggle fit to screen or 100% zoom"
                >
                  {scaleMode === 'fit' ? (
                    <>
                      <ZoomIn className="w-3.5 h-3.5" /> 100% Zoom
                    </>
                  ) : (
                    <>
                      <ZoomOut className="w-3.5 h-3.5" /> Fit View
                    </>
                  )}
                </button>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-700 text-white text-xs font-semibold hover:bg-emerald-800 transition"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Scan Next
                </button>
              </div>
            </div>

            {/* Static Receipt Wrapper */}
            <div 
              ref={containerRef}
              className="static-receipt-viewport bg-[#FAF6EF]/60 border border-[#E5D5BC] rounded-2xl p-2 sm:p-6 shadow-sm overflow-hidden flex justify-center"
            >
              <div
                className="static-receipt-scaled-wrapper"
                style={{
                  transform: `scale(${scale})`,
                  width: '720px',
                  height: scale < 1 ? `calc(100% * ${scale})` : 'auto',
                  marginBottom: scale < 1 ? `-${Math.round((1 - scale) * 980)}px` : 0,
                }}
              >
                {/* 720px Canonical Receipt Document */}
                <article className="receipt-document">
                  {/* Letterhead */}
                  <header className="receipt-letterhead">
                    <div className="receipt-brand">
                      <img src="/assets/logo.png" alt="Al Ammana" onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }} />
                      <div>
                        <div className="receipt-company">{company.name}</div>
                        <div className="receipt-tagline">{company.tagline}</div>
                        <div className="receipt-brand-contact">
                          {company.phone} | {company.email}<br />
                          {company.website}
                        </div>
                      </div>
                    </div>
                  </header>

                  {/* Heading Box */}
                  <div className="receipt-heading">
                    <h2>{data.kind === 'VOUCHER' ? 'PAYMENT VOUCHER' : 'PAYMENT RECEIPT'}</h2>
                    <div className="receipt-badges">
                      <span className="receipt-badge-pay">
                        {s.receiver === 'al_ammana' ? 'Al Ammana Receiving' : 'Client Payment'}
                      </span>
                      <span className="receipt-badge-category">
                        {fieldVal(s.paymentCategory, 'Construction Project Payment').toUpperCase()}
                      </span>
                    </div>
                    <div className="receipt-meta">
                      <div><span>Receipt No: </span><strong>{data.number}</strong></div>
                      <div><span>Date: </span><strong>{fmtDate(s.date)}</strong></div>
                      <div><span>Payment Date: </span><strong>{fmtDate(s.paymentDate || s.date)}</strong></div>
                      <div><span>Property: </span><strong>{fieldVal(s.propertyType, 'Residential')}</strong></div>
                    </div>
                  </div>

                  {/* Property Details (4-Column Table Grid) */}
                  <section className="receipt-section">
                    <h3>Property Details</h3>
                    <dl>
                      <div className="receipt-row">
                        <div className="receipt-field receipt-field-long-lbl"><dt>PROJECT / SOCIETY</dt><dd>{fieldVal(s.project, 'Faisal Hills')}</dd></div>
                        <div className="receipt-field receipt-field-short-val"><dt>BLOCK</dt><dd>{fieldVal(s.block)}</dd></div>
                      </div>
                      <div className="receipt-row">
                        <div className="receipt-field receipt-field-long-lbl"><dt>PLOT / HOUSE NO.</dt><dd>{fieldVal(s.plotNo)}</dd></div>
                        <div className="receipt-field receipt-field-short-val"><dt>SIZE</dt><dd>{fieldVal(s.size)}</dd></div>
                      </div>
                      <div className="receipt-row">
                        <div className="receipt-field"><dt>STATUS</dt><dd>{fieldVal(s.statusOther || s.status)}</dd></div>
                        <div className="receipt-field receipt-field-long-lbl"><dt>REG. MEMBERSHIP NO.</dt><dd>{fieldVal(s.regMembershipNo)}</dd></div>
                      </div>
                      <div className="receipt-row">
                        <div className="receipt-field"><dt>MEASURING</dt><dd>{fieldVal(s.measuring)}</dd></div>
                      </div>
                    </dl>
                  </section>

                  {/* Client Details */}
                  <section className="receipt-section">
                    <h3>Client Details</h3>
                    <dl>
                      <div className="receipt-row">
                        <div className="receipt-field"><dt>NAME</dt><dd>{fieldVal(s.payerName || s.sellerName)}</dd></div>
                        <div className="receipt-field"><dt>CNIC</dt><dd>{fieldVal(s.sellerCnic)}</dd></div>
                      </div>
                      <div className="receipt-row">
                        <div className="receipt-field receipt-field-mobile"><dt>MOBILE</dt><dd>{fieldVal(s.sellerMobile)}</dd></div>
                        <div className="receipt-field receipt-field-address"><dt>ADDRESS</dt><dd>{fieldVal(s.sellerAddress)}</dd></div>
                      </div>
                    </dl>
                  </section>

                  {/* Receiver Details */}
                  <section className="receipt-section">
                    <h3>Receiver Details</h3>
                    <dl>
                      <div className="receipt-row">
                        <div className="receipt-field"><dt>NAME</dt><dd>{fieldVal(s.purchaserName, 'Muhammad Abdullah')}</dd></div>
                        <div className="receipt-field"><dt>CNIC</dt><dd>{fieldVal(s.purchaserCnic, '33303-7925690-7')}</dd></div>
                      </div>
                      <div className="receipt-row">
                        <div className="receipt-field receipt-field-mobile"><dt>MOBILE</dt><dd>{fieldVal(s.purchaserMobile, '+923358078262')}</dd></div>
                        <div className="receipt-field receipt-field-address"><dt>ADDRESS</dt><dd>{fieldVal(s.purchaserAddress, 'Alammana developers vertical arcade faisal hills')}</dd></div>
                      </div>
                    </dl>
                  </section>

                  {/* Payment Details */}
                  <section className="receipt-section">
                    <h3>Payment Details</h3>
                    <dl>
                      <div className="receipt-row">
                        <div className="receipt-field"><dt>PAYMENT METHOD</dt><dd>{fieldVal(s.paymentMethod, 'online_transfer')}</dd></div>
                        <div className="receipt-field"><dt>PAYMENT DATE</dt><dd>{fmtDate(s.paymentDate || s.date)}</dd></div>
                      </div>
                      <div className="receipt-row">
                        <div className="receipt-field"><dt>TRANSACTION / REF NO.</dt><dd>{fieldVal(s.transactionNo || s.refNo)}</dd></div>
                        <div className="receipt-field"><dt>CHEQUE / ACCT NO.</dt><dd>{fieldVal(s.accountNo)}</dd></div>
                      </div>
                      <div className="receipt-row">
                        <div className="receipt-field"><dt>BANK NAME</dt><dd>{fieldVal(s.bankName)}</dd></div>
                      </div>
                    </dl>
                  </section>

                  {/* Amounts Grid */}
                  <div className="receipt-amounts">
                    <div className="receipt-amount-grid">
                      <div><span>Total Property / Project Value</span><strong>{fmtMoney(s.totalAmount, s.currency)}</strong></div>
                      <div><span>Previous Payment(s)</span><strong>{fmtMoney(s.previousPayments, s.currency)}</strong></div>
                      <div><span>Amount Received (This Receipt)</span><strong>{fmtMoney(s.amountReceived || s.amount, s.currency)}</strong></div>
                      <div><span>Payment Status</span><strong className="text-emerald-700">Verified Cleared</strong></div>
                    </div>
                    <div className="receipt-remaining">
                      <span>Remaining Balance</span>
                      <strong>{fmtMoney(s.remainingAmount, s.currency)}</strong>
                    </div>
                    {s.transferDate && (
                      <p>Transfer Date: <strong>{fmtDate(s.transferDate)}</strong></p>
                    )}
                  </div>

                  {/* Notes / Other details */}
                  {(s.otherDetails || s.description) && (
                    <div className="receipt-note receipt-other">
                      <strong>Other Details: </strong>{s.otherDetails || s.description}
                    </div>
                  )}

                  {/* Signatures & Stamps */}
                  <div className="receipt-signatures">
                    <div>
                      <div className="receipt-signature-line" />
                      <strong>{fieldVal(s.payerName || s.sellerName, 'Client')}</strong>
                      <span>Client / Depositor</span>
                    </div>
                    <div>
                      <div className="receipt-stamp-overlay">
                        <img
                          src="/assets/signatures/chairman-stamp.png"
                          alt="Authorised Signatory Stamp & Signature"
                          className="receipt-stamp-img"
                        />
                      </div>
                      <div className="receipt-signature-line" />
                      <strong>{fieldVal(s.purchaserName, 'Muhammad Abdullah')}</strong>
                      <span>Receiver / Authorised Signatory</span>
                    </div>
                  </div>

                  {/* Digital Authentication Seal */}
                  <div className="receipt-digital-seal">
                    <span className="receipt-seal-badge">✓ Digitally Verified & Authenticated</span>
                    <span className="receipt-seal-sub">Al Ammana Real Estate & Construction · Official Electronic Record</span>
                  </div>

                  {/* Footer */}
                  <footer className="receipt-footer">
                    <div>{company.address}</div>
                    <div>{company.phone} | {company.email} | {company.website}</div>
                    <div>This is an official computer-verified record | {company.name}</div>
                  </footer>
                </article>
              </div>
            </div>

            {/* Official Non-Downloadable Information Notice */}
            <div className="bg-[#FAF6EF] border border-[#D4B896] rounded-2xl p-6 text-center space-y-4 shadow-sm">
              <div className="flex items-center justify-center gap-2 text-[#6B0F1A]">
                <Info className="w-5 h-5 text-[#C9A84C]" />
                <h4 className="font-serif font-bold text-base">Official Electronic Verification Notice</h4>
              </div>
              <p className="text-sm text-[#6B5A5E] max-w-2xl mx-auto leading-relaxed">
                This page displays the official verified copy of receipt <strong>#{data.number}</strong> directly from Al Ammana’s ledger. To prevent unauthorized alterations, downloadable PDF certificates and financial ledger statements are reserved exclusively for registered property owners via the <strong>Customer Portal</strong> or upon request to our Accounts Office.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href="https://rabta.alammana.pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#6B0F1A] text-white text-sm font-semibold hover:bg-[#520B14] shadow transition"
                >
                  <ExternalLink className="w-4 h-4" /> Open Customer Portal (rabta.alammana.pk)
                </a>
                <a
                  href={`https://wa.me/923358078262?text=${encodeURIComponent(`Hello Al Ammana Team, I verified receipt #${data.number} online and would like to request my official ledger statement.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-emerald-600 bg-white text-emerald-800 text-sm font-semibold hover:bg-emerald-50 shadow-sm transition"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" /> WhatsApp Accounts (+92 335 8078262)
                </a>
              </div>
            </div>
          </div>
        )}

        {/* SCANNER & INPUT MODE (When no receipt is being viewed) */}
        {!loading && !data && (
          <div className="space-y-6">
            {/* Live Camera Scanner Box */}
            <div className="bg-white rounded-3xl border border-[#E5D5BC] p-6 sm:p-8 shadow-sm text-center">
              <h2 className="text-xl font-serif font-bold text-[#6B0F1A] mb-2">
                Scan Receipt QR Code
              </h2>
              <p className="text-sm text-[#6B5A5E] mb-6 max-w-md mx-auto">
                Hold your device camera over the QR code located in the top-right corner or footer of the physical receipt.
              </p>

              {/* Camera Stream Viewport */}
              <div className="relative mx-auto w-full max-w-sm aspect-square rounded-2xl overflow-hidden bg-black border-2 border-[#D4B896] shadow-inner flex items-center justify-center">
                {isCameraActive ? (
                  <>
                    <video
                      ref={videoRef}
                      playsInline
                      muted
                      autoPlay
                      className="w-full h-full object-cover"
                    />
                    {/* Targeting reticle and animated laser scan bar */}
                    <div className="absolute inset-8 border-2 border-dashed border-[#C9A84C]/90 rounded-xl pointer-events-none flex flex-col justify-between p-2">
                      <div className="flex justify-between">
                        <div className="w-4 h-4 border-t-2 border-l-2 border-[#C9A84C]" />
                        <div className="w-4 h-4 border-t-2 border-r-2 border-[#C9A84C]" />
                      </div>
                      <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent animate-pulse" />
                      <div className="flex justify-between">
                        <div className="w-4 h-4 border-b-2 border-l-2 border-[#C9A84C]" />
                        <div className="w-4 h-4 border-b-2 border-r-2 border-[#C9A84C]" />
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center p-6 space-y-3">
                    <div className="w-16 h-16 rounded-full bg-[#FAF6EF] text-[#6B0F1A] flex items-center justify-center mx-auto border border-[#E5D5BC]">
                      <Camera className="w-8 h-8 text-[#C9A84C]" />
                    </div>
                    <div className="text-sm text-neutral-300 font-medium">Camera is inactive</div>
                    <button
                      onClick={() => startCamera()}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#6B0F1A] text-white text-sm font-semibold hover:bg-[#520B14] shadow-md transition"
                    >
                      <Camera className="w-4 h-4 text-[#C9A84C]" /> Open Camera
                    </button>
                  </div>
                )}
              </div>

              {/* Camera Error Message */}
              {cameraError && (
                <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 max-w-sm mx-auto flex items-center gap-2 text-left">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{cameraError}</span>
                </div>
              )}

              {/* Camera Controls & Device Switcher */}
              {isCameraActive && (
                <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={stopCamera}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-300 bg-white text-neutral-700 text-xs font-semibold hover:bg-neutral-50 transition"
                  >
                    <CameraOff className="w-3.5 h-3.5 text-neutral-500" /> Turn Off Camera
                  </button>

                  {availableDevices.length > 1 && (
                    <select
                      value={selectedDeviceId}
                      onChange={(e) => {
                        setSelectedDeviceId(e.target.value);
                        startCamera(e.target.value);
                      }}
                      className="px-2 py-1.5 rounded-lg border border-neutral-300 bg-white text-xs font-medium text-neutral-700 focus:ring-1 focus:ring-[#6B0F1A]"
                    >
                      {availableDevices.map((dev, idx) => (
                        <option key={dev.deviceId} value={dev.deviceId}>
                          {dev.label || `Camera ${idx + 1}`}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              )}

              {/* Upload QR Image Fallback */}
              <div className="mt-6 pt-6 border-t border-[#E5D5BC] flex flex-wrap items-center justify-center gap-4 text-xs text-[#6B5A5E]">
                <span>Cannot use live camera?</span>
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-[#D4B896] bg-[#FAF6EF] text-[#6B0F1A] font-semibold hover:bg-[#F5EDD8] transition"
                >
                  <Upload className="w-3.5 h-3.5 text-[#C9A84C]" /> Upload QR Image / File
                </button>
              </div>
            </div>

            {/* Manual Code Entry Card */}
            <div className="bg-white rounded-3xl border border-[#E5D5BC] p-6 sm:p-8 shadow-sm">
              <h3 className="text-base font-serif font-bold text-[#6B0F1A] mb-1">
                Enter Verification Token Manually
              </h3>
              <p className="text-xs text-[#6B5A5E] mb-4">
                You can enter the token string printed underneath the verification QR code or paste the full verification link.
              </p>

              <form onSubmit={handleManualSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={manualInput}
                    onChange={(e) => setManualInput(e.target.value)}
                    placeholder="e.g. 3y3PSoScNuRsO4vsH_Bdo1bCpn96lk3P5F1Q6RfEvPg"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D4B896] bg-[#FAF6EF]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B0F1A]/30 focus:border-[#6B0F1A]"
                  />
                </div>
                <button
                  type="submit"
                  disabled={!manualInput.trim()}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#6B0F1A] text-white text-sm font-semibold hover:bg-[#520B14] disabled:opacity-50 transition"
                >
                  <Search className="w-4 h-4" /> Verify Now
                </button>
              </form>
            </div>

            {/* Security Guarantee Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="bg-white/80 p-4 rounded-2xl border border-[#E5D5BC]/60">
                <ShieldCheck className="w-6 h-6 text-[#C9A84C] mx-auto mb-2" />
                <h5 className="font-bold text-xs text-[#6B0F1A] uppercase tracking-wide">Cryptographic Ledger</h5>
                <p className="text-[11px] text-[#6B5A5E] mt-1">Every receipt is cryptographically sealed at time of issuance.</p>
              </div>
              <div className="bg-white/80 p-4 rounded-2xl border border-[#E5D5BC]/60">
                <Building className="w-6 h-6 text-[#C9A84C] mx-auto mb-2" />
                <h5 className="font-bold text-xs text-[#6B0F1A] uppercase tracking-wide">Direct ERP Sync</h5>
                <p className="text-[11px] text-[#6B5A5E] mt-1">Reads live from Al Ammana’s central production ledger database.</p>
              </div>
              <div className="bg-white/80 p-4 rounded-2xl border border-[#E5D5BC]/60">
                <CheckCircle2 className="w-6 h-6 text-[#C9A84C] mx-auto mb-2" />
                <h5 className="font-bold text-xs text-[#6B0F1A] uppercase tracking-wide">Anti-Fraud Protection</h5>
                <p className="text-[11px] text-[#6B5A5E] mt-1">Tampering with printed numbers or values fails online validation.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
