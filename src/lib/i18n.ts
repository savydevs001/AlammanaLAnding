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

/**
 * English is the default, always, and unconditionally.
 *
 * A visitor who types alammana.pk gets English no matter what their browser's
 * Accept-Language header says, what country they are in, or what language they
 * read last time. There is deliberately no middleware, no `navigator.language`
 * check, and nothing stored in localStorage — the only way to reach Urdu or
 * Arabic is to follow a `/ur` or `/ar` link, or click the language switcher.
 *
 * This is a decision, not an omission. Auto-redirecting by browser language is
 * the classic way multilingual sites break their own SEO: Googlebot crawls from
 * the US with an English header, gets bounced somewhere unexpected, and the
 * canonical it indexes stops matching the one the page declares. It also annoys
 * the large number of Pakistani users whose phones are set to English but who
 * did not ask for a different site.
 *
 * Do not add locale detection here.
 */
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

/**
 * Routes that genuinely exist in Urdu and Arabic.
 *
 * Deliberately a short list. The eight long-form articles, the privacy policy
 * and the terms are English-only by decision — machine-translated construction
 * and legal text reads fluently and says the wrong thing, and "NOC under
 * process" turning into "approved" is a liability, not a typo. Pages outside
 * this set link to their English original, and their hreflang reflects that
 * rather than advertising a translation that does not exist.
 */
export const TRANSLATED_ROUTES = [
  '/',
  '/payment-plans',
  '/societies',
  '/overseas',
  '/contact',
] as const;

export function isTranslated(path: string): boolean {
  return (TRANSLATED_ROUTES as readonly string[]).includes(path);
}

/**
 * Href for a nav link, given the locale the visitor is currently reading in.
 *
 * Keeps them inside their language where a translation exists, and sends them
 * to the English page where it does not — rather than a prefixed URL that 404s.
 */
export function localeHref(path: string, locale: Locale): string {
  if (locale === DEFAULT_LOCALE || !isTranslated(path)) return path;
  return `/${locale}${path === '/' ? '' : path}`;
}

/**
 * hreflang alternates limited to the locales a page actually exists in.
 *
 * Advertising an alternate that redirects or 404s is worse than omitting it —
 * Google drops the whole cluster's annotations when the return links break.
 */
export function alternatesFor(path: string, siteUrl: string) {
  // The homepage is `${siteUrl}` with no trailing slash, matching the canonical
  // the page emits. A one-character mismatch here is enough for Google to treat
  // the annotation as pointing at a different URL than the canonical.
  const en = path === '/' ? siteUrl : `${siteUrl}${path}`;
  const languages: Record<string, string> = {
    [LOCALE_META.en.htmlLang]: en,
    'x-default': en,
  };
  if (isTranslated(path)) {
    for (const l of PREFIXED_LOCALES) {
      languages[LOCALE_META[l].htmlLang] = `${siteUrl}${localePath(path, l)}`;
    }
  }
  return languages;
}
