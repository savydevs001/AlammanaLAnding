import type { Metadata } from 'next';
import HomeClient from './HomeClient';
import { pageMeta } from '../../lib/seo';

/**
 * The homepage was a client component, so it could not export metadata and
 * inherited only the layout defaults — which meant no canonical and no og:url.
 * Splitting it lets the route own its metadata while the interactive markup
 * stays in HomeClient.
 */
export const metadata: Metadata = pageMeta({
  title: 'Alammana Developers — Verified Faisal Hills & B-17 Plot Rates, House Construction Packages',
  absoluteTitle: true,
  description:
    'Official Alammana Developers Pakistan platform. Verified per-block plot rates, turnkey house construction packages from PKR 1.35 Cr (Spanish & modern homes), 24/7 live site cameras, and client portal tracking in Faisal Hills, B-17, Taxila and Islamabad.',
  path: '/',
  keywords: [
    'Alammana Developers',
    'Al Ammana Developers',
    'Faisal Hills property dealers',
    'Faisal Hills house construction packages',
    'Islamabad construction services',
    'B-17 Multi Gardens plot rates',
    'best house developers',
    'house on installments in islamabad',
    'Faisal Town real estate',
    'Taxila property investment',
  ],
});

export default function Home() {
  return <HomeClient />;
}
