'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, Check } from 'lucide-react';
import { CONTACT, whatsappLink, mailtoLink } from '../lib/contact';
import { submitLead } from '../lib/leads';

/**
 * Lead capture form.
 *
 * Submitting posts the enquiry to the ERP intake endpoint and shows a
 * confirmation — which is what people expect a form to do. It deliberately does
 * NOT hijack the click to open WhatsApp: anyone who would rather message us has
 * the floating WhatsApp button on every page, and having a form fling you into
 * another app is disorienting.
 *
 * WhatsApp survives only as a failure path. If the API is unreachable the
 * enquiry would otherwise be lost, so we surface it as a manual fallback rather
 * than silently dropping it.
 */
export default function LeadForm({
  interests = ['Construction (Gray Structure)', 'Construction (Fully Finished)', 'Faisal Hills Plots', 'Apartment / Shop Investment', 'Other'],
  subjectPrefix = 'Website Enquiry',
  context,
  variant = 'boxed',
}: {
  interests?: string[];
  subjectPrefix?: string;
  /** Extra line identifying which page/project the enquiry came from. */
  context?: string;
  variant?: 'boxed' | 'plain';
}) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', interest: interests[0], message: '' });
  /** Honeypot. Hidden from real users; only bots fill it. */
  const [company, setCompany] = useState('');
  type Status = 'idle' | 'sending' | 'sent' | 'failed';
  const [status, setStatus] = useState<Status>('idle');

  const set = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }));

  function compose() {
    return [
      `${subjectPrefix} — Alammana Developers`,
      context ? `Regarding: ${context}` : '',
      '',
      `Name: ${form.name || '—'}`,
      `Phone: ${form.phone || '—'}`,
      form.email ? `Email: ${form.email}` : '',
      `Interested in: ${form.interest}`,
      form.message ? `\nMessage: ${form.message}` : '',
    ].filter(Boolean).join('\n');
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');

    const ok = await submitLead({
      fullName: form.name,
      phone: form.phone,
      email: form.email || undefined,
      interest: form.interest,
      message: form.message || undefined,
      formName: subjectPrefix,
      context,
      company,
    });

    setStatus(ok ? 'sent' : 'failed');
  }

  const inputClass =
    variant === 'boxed'
      ? 'w-full bg-paper px-5 py-4 rounded-2xl outline-none focus:ring-2 ring-burgundy/20 transition-all font-serif text-lg'
      : 'w-full bg-transparent border-b border-ink/20 py-3 outline-none focus:border-burgundy transition-colors font-serif text-xl';
  const labelClass = 'text-[12px] uppercase tracking-[0.2em] font-bold text-ink/40 block mb-2';

  if (status === 'sent') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl border border-burgundy/10 bg-white p-10 text-center"
      >
        <div className="w-14 h-14 rounded-full bg-burgundy text-white flex items-center justify-center mx-auto mb-6">
          <Check size={26} />
        </div>
        <h3 className="text-2xl font-serif italic mb-3">Thank you — we have your enquiry</h3>
        <p className="text-sm text-ink/60 leading-relaxed mb-8 max-w-md mx-auto">
          Our team will get back to you on <strong className="text-ink">{form.phone}</strong>, usually
          within a few hours on a working day. There is nothing else you need to do.
        </p>
        <button
          onClick={() => { setForm({ name: '', phone: '', email: '', interest: interests[0], message: '' }); setStatus('idle'); }}
          className="text-burgundy text-xs uppercase tracking-widest font-bold border-b border-burgundy pb-1"
        >
          Send another enquiry
        </button>
      </motion.div>
    );
  }

  if (status === 'failed') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl border border-amber-300 bg-amber-50 p-10 text-center"
      >
        <h3 className="text-2xl font-serif italic mb-3">We could not send that just now</h3>
        <p className="text-sm text-ink/70 leading-relaxed mb-8 max-w-md mx-auto">
          Something went wrong on our side, and we would rather tell you than lose your enquiry.
          Please send it directly — your details are already filled in below.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={whatsappLink(compose())}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white px-6 py-3 rounded-full text-xs uppercase tracking-widest font-bold"
          >
            Send on WhatsApp
          </a>
          <a
            href={mailtoLink(`${subjectPrefix} — Alammana Developers`, compose())}
            className="border border-sand text-ink px-6 py-3 rounded-full text-xs uppercase tracking-widest font-bold"
          >
            Send by Email
          </a>
          <button
            onClick={() => setStatus('idle')}
            className="text-ink/50 px-6 py-3 text-xs uppercase tracking-widest font-bold hover:text-burgundy"
          >
            Try Again
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-6">
      {/* Honeypot: off-screen rather than display:none (some bots skip hidden
          fields), never focusable, and excluded from autofill and screen
          readers so no real person can trip it. */}
      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="lead-company">Company (leave blank)</label>
        <input
          id="lead-company" name="company" type="text" tabIndex={-1}
          autoComplete="off" value={company} onChange={e => setCompany(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="lead-name" className={labelClass}>Full Name</label>
          <input
            id="lead-name" name="name" type="text" required autoComplete="name"
            value={form.name} onChange={e => set('name', e.target.value)}
            placeholder="Your name" className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="lead-phone" className={labelClass}>Phone / WhatsApp</label>
          <input
            id="lead-phone" name="phone" type="tel" required autoComplete="tel"
            value={form.phone} onChange={e => set('phone', e.target.value)}
            placeholder="03XX XXXXXXX" className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="lead-email" className={labelClass}>Email <span className="normal-case tracking-normal font-normal">(optional)</span></label>
        <input
          id="lead-email" name="email" type="email" autoComplete="email"
          value={form.email} onChange={e => set('email', e.target.value)}
          placeholder="you@example.com" className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="lead-interest" className={labelClass}>Interested In</label>
        <select
          id="lead-interest" name="interest"
          value={form.interest} onChange={e => set('interest', e.target.value)}
          className={`${inputClass} appearance-none`}
        >
          {interests.map(i => <option key={i} value={i}>{i}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="lead-message" className={labelClass}>Message</label>
        <textarea
          id="lead-message" name="message" rows={4}
          value={form.message} onChange={e => set('message', e.target.value)}
          placeholder="Tell us about your plot, budget or timeline…"
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="space-y-3 pt-2">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full bg-burgundy text-white py-5 rounded-full text-xs uppercase tracking-[0.3em] font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-3 shadow-lg shadow-burgundy/20 disabled:opacity-60 disabled:cursor-wait"
        >
          {status === 'sending' ? (
            <>
              <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send size={16} /> Send Enquiry
            </>
          )}
        </button>
        <p className="text-center text-[12px] text-ink/45 leading-relaxed">
          We reply on WhatsApp or by phone, usually the same working day. Prefer to talk now?{' '}
          <a href={`tel:${CONTACT.phoneHref}`} className="text-burgundy underline underline-offset-2 font-semibold">
            {CONTACT.phoneDisplay}
          </a>
        </p>
      </div>
    </form>
  );
}
