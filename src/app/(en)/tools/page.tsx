import type { Metadata } from 'next';
import Link from 'next/link';
import { TOOLS } from '../../../lib/tools';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://alammana.pk';

export const metadata: Metadata = {
  title: 'Property & Construction Calculators (Free Pakistan)',
  description:
    'Free interactive engineering & financial calculators for Pakistani property buyers and builders: construction cost, materials, prime plot feasibility, master-plan rates, buildable area, transfer taxes, ROI, and rooftop solar.',
  keywords: [
    'property calculators Pakistan',
    'construction cost calculator Islamabad',
    'faisal hills plot calculator',
    'prime plot feasibility tool',
    'faisal hills master plan rates',
    'house building cost Taxila',
    '236K 236C calculator',
    'marla to square feet converter',
  ],
  alternates: { canonical: '/tools' },
  openGraph: {
    title: 'Property & Construction Calculators | Alammana Developers',
    description:
      'Free interactive calculators for Pakistani property buyers and builders: construction cost, materials, prime plot feasibility, master plans, ROI and solar.',
    url: '/tools',
    type: 'website',
    images: [{ url: '/assets/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Property & Construction Calculators | Alammana Developers',
    description: 'Free interactive calculators for Pakistani property buyers and builders.',
    images: ['/assets/og-image.jpg'],
  },
};

const GROUPS = ['Build', 'Buy & finance', 'Invest', 'Plot & solar'] as const;

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Free Property & Construction Calculators by Alammana Developers',
    description: 'Comprehensive suite of interactive calculators for property valuation, building costs, transfer taxes, and master-plan navigation in Pakistan.',
    itemListElement: TOOLS.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      description: t.description,
      url: `${siteUrl}/tools/${t.slug}`,
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Calculators & Tools', item: `${siteUrl}/tools` },
    ],
  },
];

export default function ToolsPage() {
  return (
    <div className="pt-20">
      {structuredData.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <section className="bg-beige">
        <div className="mx-auto max-w-[1600px] px-4 py-14 md:py-20">
          <div className="mb-5 flex items-center gap-2"><div className="h-[1px] w-12 bg-burgundy" /><span className="text-[12px] font-bold uppercase tracking-[0.3em] text-burgundy">Free tools</span></div>
          <h1 className="max-w-4xl font-serif text-4xl leading-tight text-ink md:text-6xl">Property &amp; construction calculators</h1>
          <p className="mt-4 max-w-3xl text-lg text-ink/70">Work out what it costs to build, what you can afford, what you will pay in taxes, and what a plot will earn — with the numbers people in Pakistan actually use.</p>
        </div>
      </section>
      <section className="mx-auto max-w-[1600px] space-y-10 px-4 pb-20">
        {GROUPS.map((g) => (
          <div key={g}>
            <h2 className="mb-4 font-serif text-2xl text-burgundy">{g}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {TOOLS.filter((t) => t.group === g).map((t) => (
                <Link key={t.slug} href={`/tools/${t.slug}`} className="group rounded-2xl border border-sand/60 bg-paper p-5 transition hover:border-burgundy">
                  <p className="font-serif text-xl text-ink group-hover:text-burgundy">{t.name}</p>
                  <p className="mt-1 text-sm text-ink/70">{t.short}</p>
                  <p className="mt-3 text-sm font-semibold text-burgundy">Open calculator →</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
