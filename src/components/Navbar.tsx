'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { CONTACT } from '../lib/contact';
import { stripLocale, localeHref } from '../lib/i18n';
import { getDictionary } from '../lib/dictionaries';
import LanguageSwitcher from './LanguageSwitcher';
import { trackClarityEvent, setClarityTag, upgradeClaritySession } from '../lib/clarity';

/**
 * The navbar reads its own locale off the URL rather than taking it as a prop.
 * There are two root layouts (English at the bare paths, Urdu and Arabic under
 * a prefix) and threading a prop through both would mean two call sites that
 * can drift apart. Reading the path keeps one implementation honest for both.
 *
 * Links go through `localeHref`, which keeps a visitor inside their language
 * where a translation exists and sends them to the English original where it
 * does not — never to a prefixed URL that would 404.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { locale } = stripLocale(usePathname() || '/');
  const t = getDictionary(locale);

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: 'Packages', path: '/packages' },
    { name: t.nav.societies, path: '/societies' },
    { name: t.nav.portfolio, path: '/portfolio' },
    { name: t.nav.constructions, path: '/constructions' },
    { name: t.nav.properties, path: '/properties' },
    { name: t.nav.rates, path: '/payment-plans' },
    { name: t.nav.tools, path: '/tools' },
    { name: t.nav.overseas, path: '/overseas' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.team, path: '/team' },
    { name: t.nav.journal, path: '/blog' },
  ];
  // The desktop bar holds the 8 core conversion links plus compact language switcher,
  // phone and Enquire button. Home (the logo goes there), Team, and Blog live in the
  // mobile menu and footer — keeping the desktop bar strictly under 900px so it never
  // collides or wraps on laptop screens (1280px–1440px).
  // Properties joins the desktop bar at 2xl where there is extra width.
  const desktopLinks = navLinks.filter(
    (l) => l.path !== '/' && l.path !== '/team' && l.path !== '/blog'
  );

  return (
    <nav className="fixed w-full z-50 bg-paper/90 backdrop-blur-md border-b border-sand/40">
      {/* Content is capped at 1600px */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 h-16 md:h-20">
          <Link href={localeHref('/', locale)} className="flex items-center gap-2 md:gap-3 shrink-0 mr-2 lg:mr-4">
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
          <div className="hidden xl:flex items-center gap-3 2xl:gap-5 min-w-0">
            {desktopLinks.map(link => (
              <Link
                key={link.name}
                href={localeHref(link.path, locale)}
                className={`text-[11px] 2xl:text-xs uppercase tracking-wider font-semibold hover:text-burgundy transition-colors whitespace-nowrap ${link.path === '/properties' ? 'hidden 2xl:inline' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Right actions */}
          <div className="hidden xl:flex items-center gap-2.5 2xl:gap-3.5 shrink-0">
            <LanguageSwitcher compact />
            <a
              href={`tel:${CONTACT.phoneHref}`}
              onClick={() => {
                trackClarityEvent('phone_call_click');
                setClarityTag('call_source', 'navbar_desktop');
                upgradeClaritySession('phone_lead');
              }}
              className="flex items-center gap-1.5 text-xs 2xl:text-sm font-bold text-burgundy hover:opacity-70 transition-opacity whitespace-nowrap py-2"
              title={CONTACT.phoneDisplay}
            >
              <Phone size={15} />
              <span className="hidden 2xl:inline">{CONTACT.phoneDisplay}</span>
            </a>
            <Link
              href={localeHref('/contact', locale)}
              onClick={() => trackClarityEvent('enquire_nav_click')}
              className="bg-burgundy text-white px-4 py-2 2xl:px-5 2xl:py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity whitespace-nowrap shadow-xs"
            >
              {t.nav.enquire}
            </Link>
          </div>

          {/* Mobile: call button stays visible next to the menu toggle, so the
              most important action is never more than one tap away. */}
          <div className="flex items-center gap-1 xl:hidden">
            <a
              href={`tel:${CONTACT.phoneHref}`}
              onClick={() => {
                trackClarityEvent('phone_call_click');
                setClarityTag('call_source', 'mobile_header');
                upgradeClaritySession('phone_lead');
              }}
              aria-label={`${t.nav.call} — ${CONTACT.phoneDisplay}`}
              className="flex items-center justify-center w-11 h-11 rounded-full bg-burgundy text-white"
            >
              <Phone size={18} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? t.nav.close : t.nav.menu}
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
          className="xl:hidden bg-paper border-b border-burgundy/10 px-4 py-6 max-h-[80vh] overflow-y-auto"
        >
          <div className="flex flex-col">
            {navLinks.map(link => (
              <Link
                key={link.name}
                href={localeHref(link.path, locale)}
                onClick={() => setIsOpen(false)}
                className="text-base uppercase tracking-widest font-semibold py-4 border-b border-sand/40 text-ink hover:text-burgundy transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href={localeHref('/contact', locale)}
              onClick={() => setIsOpen(false)}
              className="mt-6 bg-burgundy text-white text-center py-4 rounded-full text-sm font-bold uppercase tracking-widest"
            >
              {t.nav.freeConsultation}
            </Link>
            <a
              href={`tel:${CONTACT.phoneHref}`}
              className="mt-3 border border-sand text-center py-4 rounded-full text-sm font-bold text-burgundy ltr-nums"
            >
              {CONTACT.phoneDisplay}
            </a>
            <div className="mt-6 pt-5 border-t border-sand/40">
              <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-ink/40 mb-3">
                {t.common.languageLabel}
              </p>
              <LanguageSwitcher />
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
