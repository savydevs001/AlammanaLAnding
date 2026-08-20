import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink text-beige py-24">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-white border border-sand/30">
                <img src="/assets/logo.webp" alt="Alammana Developers logo" className="h-full w-full object-contain" />
              </div>
              <h2 className="text-4xl font-serif tracking-tight">ALAMMANA <span className="text-sand/60 italic">Developers</span></h2>
            </div>
            <p className="text-beige/60 max-w-sm mb-8 italic leading-relaxed">
              Building the future of Islamabad and Faisal Hills with excellence in architecture, 
              strategic marketing, and premium real estate development.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/alammanapk/" target="_blank" rel="noopener noreferrer" aria-label="Alammana Developers on Instagram" className="w-10 h-10 rounded-full border border-sand/30 flex items-center justify-center hover:bg-beige hover:text-ink transition-all"><Instagram size={18} /></a>
              <a href="https://www.facebook.com/alammana.pk" target="_blank" rel="noopener noreferrer" aria-label="Alammana Developers on Facebook" className="w-10 h-10 rounded-full border border-sand/30 flex items-center justify-center hover:bg-beige hover:text-ink transition-all"><Facebook size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            {/* These used to be cursor:pointer list items that went nowhere.
                Now they are real links to the pages people are looking for. */}
            <h3 className="text-[12px] uppercase tracking-[0.2em] font-bold mb-8 text-sand">Explore</h3>
            <ul className="space-y-4 text-beige/70 text-sm font-medium">
              {[
                { label: 'Construction Rates', href: '/payment-plans' },
                { label: 'Building From Abroad', href: '/overseas' },
                { label: 'Faisal Hills Blocks', href: '/societies/faisal-hills' },
                { label: 'Homes We Are Building', href: '/constructions' },
                { label: 'Partner Projects', href: '/portfolio' },
                { label: 'Guides & Articles', href: '/blog' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[12px] uppercase tracking-[0.2em] font-bold mb-8 text-sand">Contact</h3>
            <ul className="space-y-6 text-beige/70 text-sm">
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-sand" />
                <span className="font-semibold">rabta@alammana.pk</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-sand" />
                <span className="font-semibold">+92 335 8078262</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={16} className="text-sand" />
                <span className="font-semibold">Vertical Four, A Block, Faisal Hills, Taxila</span>
              </li>
            </ul>
          </div>
        </div>

        {/* OpenStreetMap data is ODbL-licensed and requires attribution wherever
            its map imagery is used — several society and project cards are
            rendered from OSM tiles. */}
        <p className="mt-16 text-[12px] text-beige/25 leading-relaxed">
          Location map imagery ©{' '}
          <a
            href="https://www.openstreetmap.org/copyright"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-beige/50"
          >
            OpenStreetMap contributors
          </a>
          . Project renders and progress photographs remain the property of their respective
          developers.
        </p>

        <div className="mt-8 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[12px] text-beige/30 tracking-[0.2em] uppercase font-bold">
          <p>© 2026 Alammana Developers. Architecting Legacies.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <Link href="/privacy" className="hover:text-beige transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-beige transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
