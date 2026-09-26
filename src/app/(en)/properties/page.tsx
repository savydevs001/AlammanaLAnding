import type { Metadata } from 'next';
import { properties, propertyTitle, propertyAnchor } from '../../../data/properties';
import { SITE_URL, pageMeta } from '../../../lib/seo';
import PropertiesClient from './PropertiesClient';

export const metadata: Metadata = pageMeta({
  title: 'Plots & Houses for Sale in Faisal Hills and Faisal Town',
  description:
    'Plots, houses and files for sale and rent in Faisal Hills, Faisal Town and nearby societies — checked by Alammana Developers, with prices and details. Enquire on WhatsApp.',
  path: '/properties',
  keywords: [
    'plots for sale Faisal Hills',
    'house for sale Faisal Hills',
    'Faisal Town plot for sale',
    'Faisal Hills file price',
    '10 marla plot Faisal Hills',
    'property for sale Taxila',
  ],
});

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Properties for sale and rent — Alammana Developers',
    numberOfItems: properties.length,
    itemListElement: properties.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: propertyTitle(p),
      url: `${SITE_URL}/properties#${propertyAnchor(p)}`,
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Properties', item: `${SITE_URL}/properties` },
    ],
  },
];

export default function Properties() {
  return (
    <>
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <PropertiesClient />
    </>
  );
}
