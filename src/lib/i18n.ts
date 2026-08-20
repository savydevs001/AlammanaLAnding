/**
 * Locale configuration.
 *
 * English keeps the bare paths (`/payment-plans`) rather than moving to `/en/…`
 * so the 47 URLs already indexed by Google and Bing do not change. Urdu and
 * Arabic sit under a prefix.
 *
 * Everything here is used at build time to pre-render each locale, so the
 * translated text lives in the HTML rather than being swapped in by JavaScript.
 * That distinction is the whole reason this approach was chosen: client-side
 * translation would leave search engines and AI crawlers seeing English only.
 */

export const LOCALES = ['en', 'ur', 'ar'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

/** Locales that need a prefix in the URL. English is served from the root. */
export const PREFIXED_LOCALES = LOCALES.filter(l => l !== DEFAULT_LOCALE);

export interface LocaleMeta {
  code: Locale;
  /** Name shown in the language switcher, written in that language. */
  label: string;
  /** BCP-47 tag for <html lang> and hreflang. */
  htmlLang: string;
  dir: 'ltr' | 'rtl';
  /** og:locale value. */
  ogLocale: string;
  /** Font stack override — Urdu and Arabic need a Nastaliq/Naskh face. */
  fontClass?: string;
}

export const LOCALE_META: Record<Locale, LocaleMeta> = {
  en: { code: 'en', label: 'English', htmlLang: 'en-PK', dir: 'ltr', ogLocale: 'en_PK' },
  ur: { code: 'ur', label: 'اردو', htmlLang: 'ur-PK', dir: 'rtl', ogLocale: 'ur_PK', fontClass: 'font-urdu' },
  ar: { code: 'ar', label: 'العربية', htmlLang: 'ar', dir: 'rtl', ogLocale: 'ar_AE', fontClass: 'font-arabic' },
};

/** Builds a path for a locale. `localePath('/contact', 'ur')` → `/ur/contact`. */
export function localePath(path: string, locale: Locale): string {
  const clean = path === '/' ? '' : path;
  if (locale === DEFAULT_LOCALE) return clean || '/';
  return `/${locale}${clean}`;
}

/** Strips a locale prefix off a path, giving the canonical English route. */
export function stripLocale(path: string): { locale: Locale; path: string } {
  const m = path.match(/^\/(ur|ar)(\/.*)?$/);
  if (!m) return { locale: DEFAULT_LOCALE, path };
  return { locale: m[1] as Locale, path: m[2] || '/' };
}

/**
 * hreflang alternates for a route, including x-default.
 *
 * Google needs every language version of a page to point at every other one,
 * including itself. Omitting the reciprocal links is the most common way
 * multilingual sites end up with only one language indexed.
 */
export function hreflangAlternates(path: string, siteUrl: string) {
  const languages: Record<string, string> = {};
  for (const l of LOCALES) {
    languages[LOCALE_META[l].htmlLang] = `${siteUrl}${localePath(path, l)}`;
  }
  languages['x-default'] = `${siteUrl}${localePath(path, DEFAULT_LOCALE)}`;
  return languages;
}

export function isLocale(v: string): v is Locale {
  return (LOCALES as readonly string[]).includes(v);
}
