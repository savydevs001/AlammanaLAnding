import type { Metadata } from 'next';
import { blogs } from '../../../data/blogs';
import BlogIndexClient from './BlogIndexClient';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://alammana.pk';

export const metadata: Metadata = {
  title: 'Construction & Property Guides',
  description:
    'Practical guides on construction costs, building materials, approved maps and instalment plans in Faisal Hills, Faisal Town and Islamabad.',
  keywords: [
    'house construction cost Pakistan',
    'construction materials Pakistan',
    'gray structure vs finished',
    'Faisal Hills investment',
    'plot instalment plan Pakistan',
    'approved map naqsha',
    'construction guide Islamabad',
  ],
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Construction & Property Guides | Alammana Developers',
    description:
      'Practical, honest guides on building and buying property in Faisal Hills, Faisal Town and Islamabad.',
    url: '/blog',
    type: 'website',
    images: [{ url: '/assets/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/assets/og-image.jpg'],
  },
};

export default function BlogPage() {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      '@id': `${siteUrl}/blog#blog`,
      name: 'Alammana Developers Journal',
      description:
        'Guides on construction cost, materials, approvals and property investment in Faisal Hills and Islamabad.',
      url: `${siteUrl}/blog`,
      inLanguage: 'en-PK',
      publisher: { '@type': 'Organization', name: 'Alammana Developers', url: siteUrl },
      blogPost: blogs.map(p => ({
        '@type': 'BlogPosting',
        headline: p.title,
        description: p.excerpt,
        datePublished: p.isoDate,
        url: `${siteUrl}/blog/${p.id}`,
        author: { '@type': 'Person', name: p.author },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Journal', item: `${siteUrl}/blog` },
      ],
    },
  ];

  return (
    <>
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <BlogIndexClient />
    </>
  );
}
