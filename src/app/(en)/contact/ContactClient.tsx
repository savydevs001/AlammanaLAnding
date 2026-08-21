'use client';

import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import LeadForm from '../../../components/LeadForm';
import { CONTACT, whatsappLink } from '../../../lib/contact';

export default function ContactClient() {
  return (
    <div className="pt-32 pb-24 bg-beige/20 min-h-screen">
      <div className="max-w-[1600px] mx-auto px-4">
        <header className="mb-20">
          <span className="text-burgundy text-xs uppercase tracking-[0.5em] font-bold mb-6 block text-center">Get in Touch</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-center italic mb-12">Let&apos;s build your <span className="opacity-30">legacy</span>.</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-8 md:space-y-12">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-sand/20 space-y-8 md:space-y-10">
              <div className="flex items-start space-x-4 md:space-x-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-beige rounded-full flex items-center justify-center text-burgundy shrink-0">
                  <Mail size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-[12px] uppercase tracking-widest font-bold text-ink/40 mb-1">Electronic Mail</h3>
                  <a href="mailto:rabta@alammana.pk" className="text-xl md:text-2xl font-serif hover:text-burgundy transition-colors break-all">rabta@alammana.pk</a>
                </div>
              </div>

              <div className="flex items-start space-x-4 md:space-x-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-beige rounded-full flex items-center justify-center text-burgundy shrink-0">
                  <Phone size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-[12px] uppercase tracking-widest font-bold text-ink/40 mb-1">Direct Line</h3>
                  <a href="tel:+923358078262" className="text-xl md:text-2xl font-serif hover:text-burgundy transition-colors">+92 335 8078262</a>
                </div>
              </div>

              <div className="flex items-start space-x-4 md:space-x-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-beige rounded-full flex items-center justify-center text-burgundy shrink-0">
                  <MapPin size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-[12px] uppercase tracking-widest font-bold text-ink/40 mb-1">Head Office</h3>
                  <address className="text-lg md:text-xl font-serif not-italic leading-snug">{CONTACT.addressLine}, {CONTACT.addressLocality}, {CONTACT.addressRegion}</address>
                </div>
              </div>
            </div>

            {/* Removes the biggest hesitation before contacting a builder:
                not knowing what happens next or how long it takes. */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-sand/20">
              <h2 className="text-[12px] uppercase tracking-widest font-bold text-burgundy mb-6">
                What happens after you contact us
              </h2>
              <ol className="space-y-5">
                {[
                  ['We reply on WhatsApp', 'Usually within a few hours on a working day.'],
                  ['We ask three things', 'Your block, your plot size, and whether you want gray structure or fully finished.'],
                  ['You get the rate', 'The published rate for your block, and what it covers — in writing.'],
                  ['Site visit, if you want one', 'We can walk your plot with you before anything is agreed.'],
                ].map(([t, d], i) => (
                  <li key={t} className="flex gap-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-beige text-burgundy font-bold text-sm shrink-0">
                      {i + 1}
                    </span>
                    <span>
                      <span className="block font-serif text-lg text-ink leading-snug">{t}</span>
                      <span className="block text-sm text-ink/60 mt-0.5 leading-relaxed">{d}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <p className="mt-7 pt-6 border-t border-sand/40 text-sm text-ink/60 leading-relaxed">
                No obligation and no pressure. If the honest answer is that now is not your moment,
                we will tell you that.
              </p>
            </div>

            {/* Many buyers here will never fill in a form. Give them a one-tap
                route that does not require typing anything. */}
            <a
              href={whatsappLink('Assalam-o-Alaikum, mujhe Faisal Hills mein ghar banane ka rate maloom karna hai.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 rounded-3xl bg-[#25D366] text-white p-7 shadow-sm hover:opacity-95 transition-opacity"
            >
              <span>
                <span className="block font-serif text-xl leading-snug">Prefer to just message?</span>
                <span className="block text-sm text-white/85 mt-1">
                  Tap here — you can send a voice note instead of typing.
                </span>
              </span>
              <ArrowRight size={22} className="shrink-0" />
            </a>

            <div className="rounded-3xl overflow-hidden shadow-xl border border-sand/40">
              <iframe
                src={CONTACT.mapEmbedUrl}
                title="Alammana Developers head office — Vertical Four, A Block, Faisal Hills, Taxila"
                className="w-full h-[300px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-sand/20">
            <h2 className="text-2xl md:text-3xl font-serif mb-2 italic">Tell us about your project</h2>
            <p className="text-sm text-ink/50 mb-8 leading-relaxed">
              Fill this in and we&apos;ll reply on WhatsApp, usually within a few hours during
              business days.
            </p>
            <LeadForm subjectPrefix="Contact Page Enquiry" />
          </div>
        </div>
      </div>
    </div>
  );
}
