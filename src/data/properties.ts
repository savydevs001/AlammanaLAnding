/**
 * Plots, houses and files the team ticked "Show on the website" in the ERP
 * (Listings → edit → "Show on the website"). Baked in at build time by
 * scripts/fetch-cms.mjs into properties.generated.json — the page never
 * calls the API, and owner names/phones are never in the feed.
 */
import feed from './properties.generated.json';

export type PropertyKind = 'PLOT' | 'APARTMENT' | 'HOUSE' | 'FILE' | 'COMMERCIAL' | 'OTHER';

export interface Property {
  id: string;
  kind: PropertyKind;
  dealType: 'FOR_SALE' | 'FOR_RENT';
  society: string | null;
  block: string | null;
  size: string | null;
  price: string | null;
  area: string | null;
  description: string | null;
  photos: string[];
  confirmedAt: string;
  attributes: {
    corner?: boolean; parkFacing?: boolean; mainBoulevard?: boolean; possession?: string; fileStatus?: string;
    coveredAreaSqft?: number; bedrooms?: number; bathrooms?: number; storeys?: number; furnished?: string;
    floor?: string; negotiable?: boolean; rentAdvanceMonths?: number;
  } | null;
}

export const properties: Property[] = ((feed as { listings: Property[] }).listings ?? []);

export const KIND_LABEL: Record<PropertyKind, string> = {
  PLOT: 'Plot', APARTMENT: 'Apartment', HOUSE: 'House', FILE: 'File', COMMERCIAL: 'Commercial', OTHER: 'Property',
};

/** "10 Marla House in Faisal Hills, Block C". */
export function propertyTitle(p: Property): string {
  const what = [p.size, KIND_LABEL[p.kind]].filter(Boolean).join(' ');
  const where = [p.society, p.block && `Block ${p.block}`].filter(Boolean).join(', ') || p.area;
  return where ? `${what} in ${where}` : what;
}

/** PKR in the way people here say it: "85 Lakh", "1.25 Crore". */
export function priceText(price: string | null, dealType: Property['dealType']): string {
  if (!price) return 'Price on request';
  const n = Number(price);
  const text = n >= 10_000_000 ? `${+(n / 10_000_000).toFixed(2)} Crore` : n >= 100_000 ? `${+(n / 100_000).toFixed(2)} Lakh` : n.toLocaleString('en-PK');
  return `PKR ${text}${dealType === 'FOR_RENT' ? ' / month' : ''}`;
}

export function featureChips(p: Property): string[] {
  const a = p.attributes ?? {};
  return [
    a.corner && 'Corner', a.parkFacing && 'Park facing', a.mainBoulevard && 'Main boulevard', a.possession, a.fileStatus,
    a.coveredAreaSqft && `${a.coveredAreaSqft.toLocaleString('en-PK')} sq ft covered`,
    a.bedrooms != null && `${a.bedrooms} bed`, a.bathrooms != null && `${a.bathrooms} bath`, a.storeys != null && `${a.storeys} storey`,
    a.floor && `Floor: ${a.floor}`, a.furnished, a.rentAdvanceMonths != null && `${a.rentAdvanceMonths} months advance`,
    a.negotiable && 'Negotiable',
  ].filter(Boolean) as string[];
}

/** Stable anchor for sharing one listing: /properties#p-<first 8 of id>. */
export function propertyAnchor(p: Property): string {
  return `p-${p.id.slice(0, 8)}`;
}
