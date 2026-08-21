import type { Metadata } from 'next';

import { projects } from '../../../data/projects';
import PortfolioClient from './PortfolioClient';
import { pageMeta, SITE_URL } from '../../../lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Partner Projects & Inventory',
  description:
    'Apartments, shops and offices we sell as an authorised partner — Faisal Jewel, J7 Emporium, 107 Plaza and Faisal Hills plots, with the developer named on every project.',
  path: '/portfolio',
  keywords: [
    'Faisal Jewel',
    'J7 Emporium',
    '107 Plaza',
    'Faisal Hills apartments',
    'shops for sale Faisal Hills',
    'commercial property Islamabad',
  ],
});

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Partner projects Alammana Developers sells',
    itemListElement: projects.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.title,
      url: `${SITE_URL}/portfolio/${p.id}`,
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Portfolio', item: `${SITE_URL}/portfolio` },
    ],
  },
];

export default function Portfolio() {
  return (
    <>
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <PortfolioClient projects={projects} />
    </>
  );
}
