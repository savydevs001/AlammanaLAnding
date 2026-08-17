'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import LeadForm from '../../components/LeadForm';
import { CONTACT } from '../../lib/contact';

export default function ContactClient() {
  return (
    <div className="pt-32 pb-24 bg-beige/20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
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
                  <h3 className="text-[10px] uppercase tracking-widest font-bold text-ink/40 mb-1">Electronic Mail</h3>
                  <a href="mailto:rabta@alammana.pk" className="text-xl md:text-2xl font-serif hover:text-burgundy transition-colors break-all">rabta@alammana.pk</a>
                </div>
              </div>

              <div className="flex items-start space-x-4 md:space-x-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-beige rounded-full flex items-center justify-center text-burgundy shrink-0">
                  <Phone size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-[10px] uppercase tracking-widest font-bold text-ink/40 mb-1">Direct Line</h3>
                  <a href="tel:+923358078262" className="text-xl md:text-2xl font-serif hover:text-burgundy transition-colors">+92 335 8078262</a>
                </div>
              </div>

              <div className="flex items-start space-x-4 md:space-x-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-beige rounded-full flex items-center justify-center text-burgundy shrink-0">
                  <MapPin size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-[10px] uppercase tracking-widest font-bold text-ink/40 mb-1">Head Office</h3>
                  <address className="text-lg md:text-xl font-serif not-italic leading-snug">{CONTACT.addressLine}, {CONTACT.addressLocality}, {CONTACT.addressRegion}</address>
                </div>
              </div>
            </div>

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
