import type { Metadata } from 'next';
import { clampDescription } from '../../../lib/seo';
import Link from 'next/link';
import { societies } from '../../../data/societies';
import LeadForm from '../../../components/LeadForm';
import { whatsappLink } from '../../../lib/contact';
import {
  MapPin, CheckCircle2, Clock, Sparkles, Building2, Ruler, ArrowRight,
  ArrowLeft, ShieldCheck, Route, Layers,
} from 'lucide-react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://alammana.pk';

export function generateStaticParams() {
  return societies.map(s => ({ id: s.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const s = societies.find(x => x.id === id);
  if (!s) return { title: 'Society Not Found | Alammana Developers', robots: { index: false, follow: true } };

  return {
    title: { absolute: `${s.name} — Blocks & Plot Sizes | Alammana` },
    description: clampDescription(`${s.summary} Block-by-block guide from Alammana Developers.`),
    keywords: [
      s.name,
      `${s.name} blocks`,
      `${s.name} plot prices`,
      `${s.name} payment plan`,
      `${s.name} location`,
      `${s.name} NOC`,
      ...s.blocks.map(b => `${s.name} ${b.name}`),
    ],
    alternates: { canonical: `/societies/${s.id}` },
    openGraph: {
      title: `${s.name} — ${s.tagline}`,
      description: s.summary,
      url: `/societies/${s.id}`,
      type: 'article',
      images: [{ url: s.image, alt: `${s.name}, ${s.city}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${s.name} — Blocks & Plot Sizes`,
      description: clampDescription(s.summary),
      images: [s.image],
    },
  };
}

const statusBadge: Record<string, { cls: string; icon: React.ReactNode }> = {
  Approved: { cls: 'bg-status-approved', icon: <CheckCircle2 size={13} /> },
  'In Process': { cls: 'bg-status-pending', icon: <Clock size={13} /> },
  'Pre-Launch': { cls: 'bg-white/20', icon: <Sparkles size={13} /> },
};

export default async function SocietyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const s = societies.find(x => x.id === id);

  if (!s) {
    return (
      <div className="h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-4xl font-serif mb-4">Society Not Found</h1>
          <Link href="/societies" className="text-burgundy underline uppercase tracking-widest text-xs font-bold">
            Back to Societies
          </Link>
        </div>
      </div>
    );
  }

  const others = societies.filter(x => x.id !== s.id);
  const badge = statusBadge[s.approvalStatus];
  const absolute = (p: string) => (p.startsWith('http') ? p : `${siteUrl}${p}`);

  const schema: object[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Place',
      '@id': `${siteUrl}/societies/${s.id}#place`,
      name: s.name,
      description: s.summary,
      url: `${siteUrl}/societies/${s.id}`,
      image: absolute(s.image),
      address: { '@type': 'PostalAddress', addressLocality: s.city, addressCountry: 'PK' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Societies', item: `${siteUrl}/societies` },
        { '@type': 'ListItem', position: 3, name: s.name, item: `${siteUrl}/societies/${s.id}` },
      ],
    },
  ];

  if (s.faqs?.length) {
    schema.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: s.faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }

  return (
    <div className="pt-20">
      {schema.map((sc, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sc) }} />
      ))}

      {/* Hero */}
      <section className="relative overflow-hidden bg-burgundy text-paper">
        <img src={s.image} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="relative max-w-[1600px] mx-auto px-4 py-20 md:py-28">
          <Link href="/societies" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-bold mb-8 hover:text-beige transition-colors">
            <ArrowLeft size={14} /> All Societies
          </Link>
          <span className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-bold uppercase tracking-wider mb-6 ${badge.cls}`}>
            {badge.icon} {s.approvalStatus}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif italic leading-tight mb-5 max-w-4xl">{s.name}</h1>
          <p className="text-lg md:text-xl text-paper/80 max-w-2xl leading-relaxed mb-6">{s.tagline}</p>
          <p className="flex items-center gap-2 text-beige text-sm uppercase tracking-[0.2em] font-bold">
            <MapPin size={16} /> {s.city}
          </p>
        </div>
      </section>

      {/* At a glance */}
      <section className="bg-white border-b border-sand/40">
        <div className="max-w-[1600px] mx-auto grid grid-cols-2 lg:grid-cols-4">
          {[
            { icon: <ShieldCheck size={18} />, label: 'Approval', value: s.approvalStatus },
            { icon: <Layers size={18} />, label: 'Blocks', value: String(s.blocks.length) },
            ...(s.totalArea ? [{ icon: <Ruler size={18} />, label: 'Total Area', value: s.totalArea }] : []),
            { icon: <Building2 size={18} />, label: 'Developer', value: s.developer.split('(')[0].trim() },
          ].map((f, i) => (
            <div key={i} className="p-6 md:p-8 border-r border-b lg:border-b-0 border-sand/40 last:border-r-0">
              <span className="flex items-center gap-2 text-[12px] uppercase tracking-widest font-bold text-ink/40 mb-2">
                {f.icon} {f.label}
              </span>
              <p className="font-serif text-lg md:text-xl text-burgundy leading-snug">{f.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Overview + approval note */}
      <section className="py-20 bg-paper">
        <div className="max-w-[1600px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-14">
          <div className="lg:col-span-2 space-y-6">
            <span className="text-burgundy text-xs uppercase tracking-widest font-bold block">Overview</span>
            <h2 className="text-4xl md:text-5xl font-serif italic mb-6">About {s.name}</h2>
            {s.overview.map((p, i) => (
              <p key={i} className="text-lg text-ink/75 leading-relaxed font-serif">{p}</p>
            ))}
          </div>

          <aside className="space-y-6">
            <div className={`rounded-[28px] p-8 border ${s.approvalStatus === 'Approved' ? 'bg-[#F0F5F1] border-[#C6D8CC]' : 'bg-[#FBF4E8] border-[#E0C89A]'}`}>
              <h3 className="text-[12px] uppercase tracking-widest font-bold text-ink/50 mb-3">Approval Status</h3>
              <p className="font-serif text-xl text-ink leading-snug mb-3">{s.approvalStatus}</p>
              <p className="text-sm text-ink/70 leading-relaxed">{s.approval}</p>
              {s.approvalStatus !== 'Approved' && (
                <p className="text-xs text-ink/60 mt-4 leading-relaxed border-t border-ink/10 pt-4">
                  Verify the current status with the relevant authority yourself before making any
                  payment. We would rather you check than take our word for it.
                </p>
              )}
            </div>

            <div className="rounded-[28px] border border-burgundy/10 bg-beige/40 p-8">
              <h3 className="text-[12px] uppercase tracking-widest font-bold text-ink/50 mb-4">Plot Sizes</h3>
              <div className="flex flex-wrap gap-2">
                {s.plotSizes.map(p => (
                  <span key={p} className="bg-white border border-sand rounded-full px-3 py-1.5 text-xs font-semibold">{p}</span>
                ))}
              </div>
              {s.paymentNote && <p className="text-sm text-ink/65 leading-relaxed mt-6">{s.paymentNote}</p>}
            </div>

            <a
              href={whatsappLink(`Hello Alammana, I'd like current rates and availability in ${s.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-burgundy text-white px-6 py-5 rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:opacity-90 transition-opacity"
            >
              Get Current Rates <ArrowRight size={16} />
            </a>
          </aside>
        </div>
      </section>

      {/* Blocks */}
      <section className="py-20 bg-beige/30" id="blocks">
        <div className="max-w-[1600px] mx-auto px-4">
          <div className="mb-14 max-w-3xl">
            <span className="text-burgundy text-xs uppercase tracking-widest font-bold block mb-4">Block by Block</span>
            <h2 className="text-4xl md:text-5xl font-serif italic mb-5">Which Block Should You Buy In?</h2>
            <p className="text-ink/60 leading-relaxed">
              Development status varies a lot between blocks, and it is the single biggest factor in
              both price and how soon you can build.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {s.blocks.map(b => (
              <div key={b.name} className="rounded-3xl bg-white border border-sand/50 p-8 md:p-10 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <h3 className="text-2xl md:text-3xl font-serif italic text-burgundy">{b.name}</h3>
                  <span className="bg-beige text-ink/70 px-3 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-wider">
                    {b.status}
                  </span>
                </div>

                <p className="text-ink/70 leading-relaxed mb-6">{b.summary}</p>

                <div className="mb-6">
                  <span className="text-[12px] uppercase tracking-widest font-bold text-ink/40 block mb-3">Plot Sizes</span>
                  <div className="flex flex-wrap gap-2">
                    {b.plotSizes.map(p => (
                      <span key={p} className="border border-sand rounded-full px-3 py-1 text-xs font-semibold">{p}</span>
                    ))}
                  </div>
                </div>

                {b.highlights && (
                  <ul className="space-y-2 mb-6">
                    {b.highlights.map(h => (
                      <li key={h} className="flex items-start gap-2 text-sm text-ink/70">
                        <CheckCircle2 size={15} className="text-burgundy mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {b.bestFor && (
                  <p className="text-sm border-t border-sand/40 pt-5">
                    <span className="text-[12px] uppercase tracking-widest font-bold text-ink/40 block mb-1">Best For</span>
                    <span className="font-serif text-lg text-ink">{b.bestFor}</span>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities + connectivity */}
      <section className="py-20 bg-ink text-paper">
        <div className="max-w-[1600px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-beige text-xs uppercase tracking-widest font-bold block mb-4">Amenities</span>
            <h2 className="text-3xl md:text-4xl font-serif italic mb-8">What&apos;s Inside</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {s.amenities.map(a => (
                <li key={a} className="flex items-start gap-3 text-sm text-paper/75">
                  <CheckCircle2 size={16} className="text-beige mt-0.5 shrink-0" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="text-beige text-xs uppercase tracking-widest font-bold block mb-4">Connectivity</span>
            <h2 className="text-3xl md:text-4xl font-serif italic mb-8">What&apos;s Nearby</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {s.connectivity.map(c => (
                <li key={c} className="flex items-start gap-3 text-sm text-paper/75">
                  <Route size={16} className="text-beige mt-0.5 shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Master plan */}
      {s.masterPlanImage && (
        <section className="py-20 bg-paper">
          <div className="max-w-[1600px] mx-auto px-4">
            <div className="mb-10 max-w-2xl">
              <span className="text-burgundy text-xs uppercase tracking-widest font-bold block mb-4">Master Plan</span>
              <h2 className="text-4xl md:text-5xl font-serif italic mb-4">The Layout</h2>
              <p className="text-ink/60 leading-relaxed">
                Use this to orient yourself before a site visit — then ask us to pinpoint the exact
                plot number you are considering.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden border border-sand shadow-xl bg-white">
              <img src={s.masterPlanImage} alt={`${s.name} master plan layout`} className="w-full h-auto" loading="lazy" />
            </div>
          </div>
        </section>
      )}

      {/* Map */}
      <section className="py-20 bg-white border-t border-sand/40">
        <div className="max-w-[1600px] mx-auto px-4">
          <div className="mb-10">
            <span className="text-burgundy text-xs uppercase tracking-widest font-bold block mb-4">Location</span>
            <h2 className="text-4xl md:text-5xl font-serif italic mb-4">Find {s.name} on the Map</h2>
            <p className="flex items-center gap-2 text-ink/60"><MapPin size={16} className="text-burgundy" /> {s.city}</p>
          </div>
          <div className="rounded-3xl overflow-hidden border border-sand shadow-xl">
            <iframe
              src={s.mapEmbedUrl}
              title={`Map of ${s.name}, ${s.city}`}
              className="w-full h-[420px] md:h-[520px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* FAQs */}
      {s.faqs && s.faqs.length > 0 && (
        <section className="py-20 bg-beige/30">
          <div className="max-w-4xl mx-auto px-4">
            <span className="text-burgundy text-xs uppercase tracking-widest font-bold block mb-4">Questions</span>
            <h2 className="text-4xl md:text-5xl font-serif italic mb-12">{s.name} FAQs</h2>
            <div className="space-y-6">
              {s.faqs.map(f => (
                <details key={f.q} className="group rounded-2xl bg-white border border-sand/50 p-7 open:shadow-md transition-shadow">
                  <summary className="cursor-pointer list-none font-serif text-xl text-ink flex items-start justify-between gap-4">
                    <span>{f.q}</span>
                    <span className="text-burgundy shrink-0 transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
                  </summary>
                  <p className="mt-5 text-ink/70 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Enquiry */}
      <section className="py-20 bg-paper">
        <div className="max-w-[1600px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif italic mb-6">Ask About {s.name}</h2>
            <p className="text-ink/65 leading-relaxed mb-8 max-w-md">
              Tell us the block and plot size you are considering and we will come back with current
              availability, the real rate, and what construction on that plot would cost.
            </p>
            <div className="space-y-4">
              <Link href="/payment-plans" className="flex items-center gap-2 text-burgundy text-xs uppercase tracking-[0.2em] font-bold border-b border-burgundy pb-2 w-fit">
                See our construction rates <ArrowRight size={14} />
              </Link>
              <Link href="/constructions" className="flex items-center gap-2 text-burgundy text-xs uppercase tracking-[0.2em] font-bold border-b border-burgundy pb-2 w-fit">
                See homes we&apos;re building <ArrowRight size={14} />
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-3xl border border-sand/40 p-8 md:p-10 shadow-sm">
            <LeadForm
              subjectPrefix="Society Enquiry"
              context={s.name}
              interests={[
                `${s.name} — Plot availability & rates`,
                `${s.name} — Construction on my plot`,
                `${s.name} — Payment plan`,
                'Other',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Other societies */}
      <section className="py-20 bg-white border-t border-sand/40">
        <div className="max-w-[1600px] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif italic mb-10">Compare With Other Societies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {others.map(o => (
              <Link key={o.id} href={`/societies/${o.id}`} className="group rounded-2xl border border-sand/50 p-7 hover:border-burgundy/40 hover:shadow-md transition-all">
                <h3 className="text-xl font-serif italic mb-2 group-hover:text-burgundy transition-colors">{o.name}</h3>
                <p className="text-[12px] uppercase tracking-widest font-bold text-ink/40 mb-3">{o.city}</p>
                <p className="text-sm text-ink/65 leading-relaxed line-clamp-3">{o.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
