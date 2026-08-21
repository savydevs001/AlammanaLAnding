'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { CONTACT } from '../lib/contact';
import { stripLocale, localeHref } from '../lib/i18n';
import { getPageDictionary } from '../lib/dictionaries.pages';

/**
 * Reads its locale off the URL for the same reason the navbar does — one
 * implementation serving both root layouts, rather than a prop threaded through
 * two trees that can drift.
 *
 * The footer links deliberately include pages that are English-only. Sending an
 * Urdu reader to the English articles is better than hiding them: `localeHref`
 * returns the bare English path for anything untranslated, so the link is
 * always real.
 */
export default function Footer() {
  const { locale } = stripLocale(usePathname() || '/');
  const t = getPageDictionary(locale).footer;

  const exploreLinks = [
    { label: t.links.rates, href: '/payment-plans' },
    { label: t.links.overseas, href: '/overseas' },
    { label: t.links.blocks, href: '/societies/faisal-hills' },
    { label: t.links.constructions, href: '/constructions' },
    { label: t.links.portfolio, href: '/portfolio' },
    { label: t.links.guides, href: '/blog' },
  ];

  return (
    <footer className="bg-ink text-beige py-24">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-white border border-sand/30">
                <img
                  src="/assets/logo.webp"
                  alt="Alammana Developers logo"
                  width={48}
                  height={48}
                  className="h-full w-full object-contain"
                />
              </div>
              <h2 className="text-4xl font-serif tracking-tight">
                ALAMMANA <span className="text-sand/60 italic">Developers</span>
              </h2>
            </div>
            <p className="text-beige/60 max-w-sm mb-8 leading-relaxed">{t.tagline}</p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/alammanapk/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Alammana Developers on Instagram"
                className="w-11 h-11 rounded-full border border-sand/30 flex items-center justify-center hover:bg-beige hover:text-ink transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/alammana.pk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Alammana Developers on Facebook"
                className="w-11 h-11 rounded-full border border-sand/30 flex items-center justify-center hover:bg-beige hover:text-ink transition-all"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-[12px] uppercase tracking-[0.2em] font-bold mb-8 text-sand">
              {t.explore}
            </h3>
            <ul className="space-y-4 text-beige/70 text-sm font-medium">
              {exploreLinks.map(l => (
                <li key={l.href}>
                  <Link
                    href={localeHref(l.href, locale)}
                    className="hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[12px] uppercase tracking-[0.2em] font-bold mb-8 text-sand">
              {t.contact}
            </h3>
            <ul className="space-y-6 text-beige/70 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-sand shrink-0" />
                <a href={`mailto:${CONTACT.email}`} className="font-semibold hover:text-white">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-sand shrink-0" />
                <a
                  href={`tel:${CONTACT.phoneHref}`}
                  className="font-semibold hover:text-white ltr-nums"
                >
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-sand shrink-0" />
                <span className="font-semibold">Vertical Four, A Block, Faisal Hills, Taxila</span>
              </li>
            </ul>
          </div>
        </div>

        {/* OpenStreetMap data is ODbL-licensed and requires attribution wherever
            its map imagery is used — several society and project cards are
            rendered from OSM tiles. */}
        <p className="mt-16 text-[12px] text-beige/25 leading-relaxed">
          {t.attribution}{' '}
          <a
            href="https://www.openstreetmap.org/copyright"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-beige/50"
          >
            openstreetmap.org/copyright
          </a>
        </p>

        <div className="mt-8 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] text-beige/30 tracking-[0.15em] uppercase font-bold">
          <p>{t.rights}</p>
          <div className="flex gap-8">
            {/* Always English — the policy and terms are legal text and are not
                machine-translated. See docs/ROADMAP.md Phase 7. */}
            <Link href="/privacy" className="hover:text-beige transition-colors">
              {t.privacy}
            </Link>
            <Link href="/terms" className="hover:text-beige transition-colors">
              {t.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
