import type { Metadata } from 'next';
import { constructions } from '../../data/constructions';
import { SITE_URL } from '../../lib/seo';
import ConstructionsClient from './ConstructionsClient';

export const metadata: Metadata = {
  title: 'Homes We Are Building',
  description:
    'Homes we are building in Faisal Hills and Faisal Town on published rates — gray structure and fully finished, with elevations and site locations.',
  keywords: [
    'house construction Faisal Hills',
    'construction company Taxila',
    'gray structure construction Faisal Hills',
    'turnkey house construction Islamabad',
    'Faisal Town house construction',
    'home builders Faisal Hills',
  ],
  alternates: {
    canonical: '/constructions',
  },
  openGraph: {
    title: 'Our Construction Projects | Alammana Developers',
    description:
      'Ongoing and completed homes in Faisal Hills and Faisal Town, built on our transparent published rates.',
    url: '/constructions',
    type: 'website',
    images: [{ url: '/assets/constructions/facade-white-cubist.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/assets/constructions/facade-white-cubist.webp'],
  },
};

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Homes Alammana Developers is building',
    itemListElement: constructions.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.title,
      url: `${SITE_URL}/constructions/${c.id}`,
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Constructions', item: `${SITE_URL}/constructions` },
    ],
  },
];

export default function Constructions() {
  return (
    <>
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <ConstructionsClient />
    </>
  );
}
