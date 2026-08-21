import type { Metadata } from 'next';
import Link from 'next/link';
import { societies } from '../../../data/societies';
import { MapPin, ArrowRight, CheckCircle2, Clock, Sparkles } from 'lucide-react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://alammana.pk';

export const metadata: Metadata = {
  title: 'Housing Societies We Work In',
  description:
    'Block-by-block guides to Faisal Hills, Faisal Town Phase 1 & 2 and DHA Gandhara — plot sizes, development status and approval status for each.',
  keywords: [
    'Faisal Hills blocks',
    'Faisal Town Phase 2',
    'DHA Gandhara',
    'Faisal Town Phase 1',
    'housing societies Taxila',
    'housing societies Rawalpindi',
    'RDA approved societies',
    'plots for sale Faisal Hills',
  ],
  alternates: { canonical: '/societies' },
  openGraph: {
    title: 'Housing Societies We Work In | Alammana Developers',
    description:
      'Block-by-block guides to Faisal Hills, Faisal Town Phase 1 & 2 and DHA Gandhara.',
    url: '/societies',
    type: 'website',
    images: [{ url: '/assets/societies/faisal-hills.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/assets/societies/faisal-hills.webp'],
  },
};

const statusStyle: Record<string, { cls: string; icon: React.ReactNode }> = {
  Approved: { cls: 'bg-status-approved text-white', icon: <CheckCircle2 size={12} /> },
  'In Process': { cls: 'bg-status-pending text-white', icon: <Clock size={12} /> },
  'Pre-Launch': { cls: 'bg-ink text-white', icon: <Sparkles size={12} /> },
};

export default function SocietiesPage() {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Housing societies Alammana Developers works in',
      itemListElement: societies.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: s.name,
        url: `${siteUrl}/societies/${s.id}`,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Societies', item: `${siteUrl}/societies` },
      ],
    },
  ];

  return (
    <div className="pt-32 pb-24">
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <div className="max-w-[1600px] mx-auto px-4">
        <header className="mb-16">
          <span className="text-burgundy text-xs uppercase tracking-[0.5em] font-bold mb-6 block">Where We Work</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-8">
            Societies, <span className="italic text-burgundy opacity-40">Block by Block</span>
          </h1>
          <p className="text-ink/60 max-w-2xl text-lg leading-relaxed">
            Which block you buy in matters more than which society you buy in. These guides set out
            plot sizes, development status and approvals for each — including where a project is
            still awaiting its NOC, because that is the part most listings leave out.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {societies.map(s => {
            const st = statusStyle[s.approvalStatus];
            return (
              <Link
                key={s.id}
                href={`/societies/${s.id}`}
                className="group rounded-3xl border border-sand/50 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-beige">
                  <img
                    src={s.image}
                    alt={`${s.name} — ${s.city}`}
                    width={1600}
                    height={1000}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span
                    className={`absolute top-5 left-5 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-wider ${st.cls}`}
                  >
                    {st.icon} {s.approvalStatus}
                  </span>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <h2 className="text-3xl font-serif italic mb-2">{s.name}</h2>
                  <p className="flex items-center gap-1.5 text-[12px] uppercase tracking-widest font-bold text-ink/40 mb-4">
                    <MapPin size={12} /> {s.city}
                  </p>
                  <p className="text-sm text-ink/70 leading-relaxed mb-6 flex-1">{s.summary}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-beige text-burgundy px-3 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-wider">
                      {s.blocks.length} {s.blocks.length === 1 ? 'Block' : 'Blocks'}
                    </span>
                    {s.totalArea && (
                      <span className="bg-beige text-burgundy px-3 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-wider">
                        {s.totalArea}
                      </span>
                    )}
                  </div>

                  <span className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-burgundy">
                    Explore {s.name} <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-20 rounded-3xl bg-ink text-paper p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-serif italic mb-4">Not sure which block suits you?</h2>
          <p className="text-paper/60 max-w-xl mx-auto mb-8 leading-relaxed">
            Tell us your budget and whether you plan to build now or hold — we will tell you which
            blocks actually fit, including when the honest answer is to wait.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-burgundy text-white px-10 py-5 rounded-full text-sm uppercase tracking-[0.2em] font-bold hover:opacity-90 transition-opacity"
          >
            Talk to Our Team <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
