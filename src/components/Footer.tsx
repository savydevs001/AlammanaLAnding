import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink text-beige py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-white border border-sand/30">
                <img src="/assets/logo.png" alt="Alammana Developers logo" className="h-full w-full object-contain" />
              </div>
              <h2 className="text-4xl font-serif tracking-tight">ALAMMANA <span className="text-sand/60 italic">Developers</span></h2>
            </div>
            <p className="text-beige/60 max-w-sm mb-8 italic leading-relaxed">
              Building the future of Islamabad and Faisal Hills with excellence in architecture, 
              strategic marketing, and premium real estate development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-sand/30 flex items-center justify-center hover:bg-beige hover:text-ink transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-sand/30 flex items-center justify-center hover:bg-beige hover:text-ink transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-sand/30 flex items-center justify-center hover:bg-beige hover:text-ink transition-all"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-8 text-sand">Expertise</h3>
            <ul className="space-y-4 text-beige/70 text-sm font-medium">
              <li className="hover:text-white transition-colors cursor-pointer">Urban Development</li>
              <li className="hover:text-white transition-colors cursor-pointer">Luxury Architecture</li>
              <li className="hover:text-white transition-colors cursor-pointer">Real Estate Marketing</li>
              <li className="hover:text-white transition-colors cursor-pointer">Portfolio Management</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-8 text-sand">Contact</h3>
            <ul className="space-y-6 text-beige/70 text-sm">
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-sand" />
                <span className="font-semibold">info@alammana.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-sand" />
                <span className="font-semibold">+92 3XX XXXXXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={16} className="text-sand" />
                <span className="font-semibold">Islamabad, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-beige/30 tracking-[0.2em] uppercase font-bold">
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
