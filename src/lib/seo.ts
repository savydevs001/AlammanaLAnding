import type { Metadata } from 'next';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://alammana.pk';
export const SITE_NAME = 'Alammana Developers';
export const DEFAULT_OG_IMAGE = '/assets/og-image.jpg';

/**
 * Builds a complete, consistent metadata object for a page.
 *
 * Why this exists: canonical, og:url and og:image were silently missing from
 * eleven pages because each route hand-rolled its own metadata object and it was
 * easy to omit a field. Bing in particular is stricter than Google about
 * self-referencing canonicals and will hold pages back without them. Routing
 * every page through this helper makes those fields impossible to forget.
 *
 * TITLE LENGTH: the root layout appends " | Alammana Developers" (22 chars) via
 * its title template. Keep `title` at roughly 40 characters or fewer so the
 * finished title stays under the ~60 characters search engines display. For
 * pages whose own title is already long and descriptive (articles), pass
 * `absoluteTitle: true` to bypass the template instead of doubling up the brand.
 */
/**
 * Search engines truncate descriptions around 160 characters. Several of ours
 * are assembled from data at runtime and ran to 230+, so clamp on a word
 * boundary here rather than cutting mid-word in the SERP.
 */
export function clampDescription(text: string, max = 160): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).replace(/[,;:.\-—]$/, '') + '…';
}

export function pageMeta({
  title,
  description,
  path,
  keywords,
  image,
  type = 'website',
  absoluteTitle = false,
  publishedTime,
  modifiedTime,
  authors,
  noIndex = false,
}: {
  title: string;
  description: string;
  /** Route path beginning with a slash, e.g. '/societies/faisal-hills'. */
  path: string;
  keywords?: string[];
  image?: string;
  type?: 'website' | 'article' | 'profile';
  absoluteTitle?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  noIndex?: boolean;
}): Metadata {
  const url = path === '/' ? SITE_URL : `${SITE_URL}${path}`;
  const img = image ?? DEFAULT_OG_IMAGE;
  const desc = clampDescription(description);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description: desc,
    ...(keywords?.length ? { keywords } : {}),
    ...(authors?.length ? { authors: authors.map(name => ({ name })) } : {}),
    alternates: { canonical: path },
    robots: noIndex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_PK',
      type,
      images: [{ url: img, width: 1200, height: 630, alt: title }],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
      ...(authors?.length ? { authors } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [img],
    },
  };
}

/** BreadcrumbList JSON-LD. Pass the trail after Home, e.g. [['Team','/team']]. */
export function breadcrumb(trail: Array<[string, string]>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      ...trail.map(([name, path], i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name,
        item: `${SITE_URL}${path}`,
      })),
    ],
  };
}

/** A typed WebPage node — tells crawlers what kind of page this is. */
export function webPage(
  type: 'AboutPage' | 'ContactPage' | 'CollectionPage' | 'WebPage',
  { name, description, path }: { name: string; description: string; path: string }
) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    name,
    description,
    url: path === '/' ? SITE_URL : `${SITE_URL}${path}`,
    isPartOf: { '@id': `${SITE_URL}#website` },
    publisher: { '@id': `${SITE_URL}#organization` },
  };
}
