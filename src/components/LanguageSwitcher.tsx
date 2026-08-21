'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Globe } from 'lucide-react';
import { LOCALES, LOCALE_META, localePath, stripLocale, isTranslated, Locale } from '../lib/i18n';

/**
 * Language switcher.
 *
 * Renders real <Link>s to the equivalent URL in each locale rather than
 * swapping text client-side, so a crawler following them finds three genuinely
 * separate, indexable pages. It also keeps the visitor on the same page when
 * they switch, instead of dumping them back at the homepage.
 *
 * On a page that has no translation (the articles, privacy, terms) switching
 * language sends the visitor to that language's homepage instead of a prefixed
 * URL that does not exist. `rel="alternate"` is dropped in that case, because
 * the target is not an alternate of the current page and claiming otherwise
 * would feed search engines a false pair.
 */
export default function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const pathname = usePathname() || '/';
  const { locale: current, path } = stripLocale(pathname);
  const translated = isTranslated(path);

  return (
    <div
      className={compact ? 'flex items-center gap-1' : 'flex items-center gap-2'}
      role="group"
      aria-label="Select language"
    >
      {!compact && <Globe size={15} className="text-ink/40 shrink-0" aria-hidden="true" />}
      {LOCALES.map((l: Locale) => {
        const active = l === current;
        return (
          <Link
            key={l}
            href={localePath(translated ? path : '/', l)}
            hrefLang={translated ? LOCALE_META[l].htmlLang : undefined}
            rel={translated ? 'alternate' : undefined}
            lang={LOCALE_META[l].htmlLang}
            aria-current={active ? 'true' : undefined}
            className={[
              'px-2.5 py-1.5 rounded-full text-xs font-semibold transition-colors whitespace-nowrap',
              LOCALE_META[l].fontClass ?? '',
              active
                ? 'bg-burgundy text-white'
                : 'text-ink/60 hover:text-burgundy hover:bg-beige',
            ].join(' ')}
          >
            {LOCALE_META[l].label}
          </Link>
        );
      })}
    </div>
  );
}
