/**
 * Where a visitor came from, captured on the first page of their visit and
 * sent with any enquiry, so the ERP's "Website enquiries" report can say which
 * pages, Google/Facebook campaigns and referring sites produce real leads.
 *
 * - Stored in sessionStorage: one visit = one attribution. A later visit that
 *   arrives with campaign tags (utm_*, gclid, fbclid) replaces it, because the
 *   newest paid click is the one that brought them back.
 * - No cookies, no third-party scripts, nothing leaves the browser except with
 *   an enquiry the visitor chose to send.
 */
const KEY = 'aa_attribution';

export interface Attribution {
  landingUrl?: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  gclid?: string;
  fbclid?: string;
}

function read(): Attribution | null {
  try {
    const raw = sessionStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Attribution) : null;
  } catch {
    return null;
  }
}

/** Call on every page load; only the first page of a visit (or a tagged
 *  campaign click) is recorded. */
export function captureAttribution(): void {
  if (typeof window === 'undefined') return;
  const q = new URLSearchParams(window.location.search);
  const tagged = ['utm_source', 'utm_medium', 'utm_campaign', 'gclid', 'fbclid'].some((k) => q.get(k));
  if (read() && !tagged) return;
  const ref = document.referrer && !document.referrer.startsWith(window.location.origin) ? document.referrer : undefined;
  const clip = (v: string | null, n = 200) => (v ? v.slice(0, n) : undefined);
  const a: Attribution = {
    landingUrl: window.location.href.slice(0, 500),
    referrer: clip(ref ?? null, 500),
    utmSource: clip(q.get('utm_source'), 120),
    utmMedium: clip(q.get('utm_medium'), 120),
    utmCampaign: clip(q.get('utm_campaign')),
    gclid: clip(q.get('gclid'), 300),
    fbclid: clip(q.get('fbclid'), 300),
  };
  try {
    sessionStorage.setItem(KEY, JSON.stringify(a));
  } catch {
    /* private mode — enquiries still go through without attribution */
  }
}

export function getAttribution(): Attribution {
  return read() ?? {};
}
