'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';
import { CONTACT } from '../lib/contact';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Societies', path: '/societies' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Constructions', path: '/constructions' },
    { name: 'Rates', path: '/payment-plans' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Journal', path: '/blog' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-paper/85 backdrop-blur-md border-b border-sand/40">
      {/* Content is capped at 1280px elsewhere, which leaves a 1920px screen
          two-thirds used and makes the whole site feel like a stretched tablet
          layout. The bar and page containers now run to 1600px. */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2.5 md:gap-3 shrink-0 mr-4">
            <span className="w-9 h-9 md:w-11 md:h-11 rounded-lg overflow-hidden bg-white border border-sand shrink-0">
              <img
                src="/assets/logo.webp"
                alt="Alammana Developers"
                width={44}
                height={44}
                className="h-full w-full object-contain"
              />
            </span>
            <span className="text-base md:text-xl font-bold uppercase tracking-[0.18em] text-burgundy leading-none">
              ALAMMANA
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 min-w-0">
            {navLinks.map(link => (
              <Link
                key={link.name}
                href={link.path}
                className="text-[12px] xl:text-xs uppercase tracking-wider font-semibold hover:text-burgundy transition-colors whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Phone is the primary action for walk-in buyers and was previously
              only in the footer at 13px. It now sits in the header at a
              readable size and a full tap height. */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${CONTACT.phoneHref}`}
              className="flex items-center gap-2 text-sm font-bold text-burgundy hover:opacity-70 transition-opacity whitespace-nowrap py-2"
            >
              <Phone size={16} />
              {CONTACT.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="bg-burgundy text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Enquire
            </Link>
          </div>

          {/* Mobile: call button stays visible next to the menu toggle, so the
              most important action is never more than one tap away. */}
          <div className="flex items-center gap-1 lg:hidden">
            <a
              href={`tel:${CONTACT.phoneHref}`}
              aria-label={`Call Alammana Developers on ${CONTACT.phoneDisplay}`}
              className="flex items-center justify-center w-11 h-11 rounded-full bg-burgundy text-white"
            >
              <Phone size={18} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              className="flex items-center justify-center w-11 h-11 text-burgundy"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-paper border-b border-burgundy/10 px-4 py-6 max-h-[80vh] overflow-y-auto"
        >
          <div className="flex flex-col">
            {navLinks.map(link => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="text-base uppercase tracking-widest font-semibold py-4 border-b border-sand/40 text-ink hover:text-burgundy transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-6 bg-burgundy text-white text-center py-4 rounded-full text-sm font-bold uppercase tracking-widest"
            >
              Free Consultation
            </Link>
            <a
              href={`tel:${CONTACT.phoneHref}`}
              className="mt-3 border border-sand text-center py-4 rounded-full text-sm font-bold text-burgundy"
            >
              {CONTACT.phoneDisplay}
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
