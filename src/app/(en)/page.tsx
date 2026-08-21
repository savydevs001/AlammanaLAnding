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
  title: 'Faisal Hills Construction & Real Estate',
  absoluteTitle: false,
  description:
    'Alammana Developers builds houses on published block-wise rates in Faisal Hills, Taxila, and sells plots and partner-project inventory across Faisal Town and Islamabad.',
  path: '/',
  keywords: [
    'Faisal Hills',
    'Faisal Hills construction rates',
    'house construction Faisal Hills',
    'Faisal Town',
    'Taxila real estate',
    'Rawalpindi property',
    'Alammana Developers',
  ],
});

export default function Home() {
  return <HomeClient />;
}
