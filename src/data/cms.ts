/**
 * Listings managed in the ERP (Website → Listings), baked in at build time by
 * scripts/fetch-cms.mjs into cms.generated.json. Nothing here calls the API at
 * runtime — visitors get plain static pages from the CDN.
 *
 * A kind is ERP-managed as soon as the ERP has published at least one listing
 * of that kind; from then on the ERP's list replaces the hard-coded one in
 * projects.ts / societies.ts / constructions.ts (which stay as the fallback
 * for a kind the team hasn't moved to the ERP yet).
 */
import feed from './cms.generated.json';

export type CmsKind = 'PARTNER_PROJECT' | 'SOCIETY' | 'CONSTRUCTION';

interface CmsListing {
  kind: CmsKind;
  slug: string;
  sortOrder: number;
  seoTitle?: string | null;
  seoDescription?: string | null;
  publishedAt?: string | null;
  content: Record<string, unknown>;
}

const listings = (feed as { listings: CmsListing[] }).listings ?? [];

/** Extra fields the ERP adds on top of each page type. */
export interface CmsMeta {
  seoTitle?: string;
  seoDescription?: string;
  /** ISO date the listing was last published — used for sitemap lastmod. */
  updatedAt?: string;
}

export function fromCms<T extends { id: string }>(kind: CmsKind, fallback: T[]): (T & CmsMeta)[] {
  const mine = listings.filter((l) => l.kind === kind).sort((a, b) => a.sortOrder - b.sortOrder);
  if (mine.length === 0) return fallback;
  return mine.map((l) => ({
    ...(l.content as unknown as Omit<T, 'id'>),
    id: l.slug,
    seoTitle: l.seoTitle ?? undefined,
    seoDescription: l.seoDescription ?? undefined,
    updatedAt: l.publishedAt ?? undefined,
  }) as T & CmsMeta);
}
