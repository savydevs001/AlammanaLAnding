import type { Metadata } from 'next';
import Link from 'next/link';
import { projects } from '../../../../../data/projects';
import { Project } from '../../../../../types';
import LeadForm from '../../../../../components/LeadForm';
import JsonLd from '../../../../../components/JsonLd';
import { whatsappLink } from '../../../../../lib/contact';
import { SITE_URL, clampDescription } from '../../../../../lib/seo';
import { unitPrice, priceRange } from '../../../../../lib/pricing';
import { ArrowLeft, ArrowRight, MapPin, Route, Store, BedDouble } from 'lucide-react';

/**
 * Deep pages for a partner project: /portfolio/<project>/<section>
 *
 * People here rarely search "Faisal Jewel". They search "faisal jewel
 * apartments", "faisal jewel shops price", "faisal jewel location" — so each of
 * those gets a page that answers exactly that question, instead of burying the
 * answer three screens down a single long page.
 *
 * A section is only generated when the project actually holds the data for it,
 * so we never publish a thin page. Add `unitPlans` to a project and its
 * apartments page appears; omit it and no empty page is created.
 */

type SectionId = 'apartments' | 'shops' | 'location';

const SECTIONS: Record<
  SectionId,
  {
    label: string;
    /** Does this project have enough content for this section? */
    available: (p: Project) => boolean;
    title: (p: Project) => string;
    description: (p: Project) => string;
    keywords: (p: Project) => string[];
  }
> = {
  apartments: {
    label: 'Apartments & Penthouses',
    available: p => !!p.unitPlans?.length,
    title: p => `${p.title} Apartments — Sizes & Floor Plans`,
    description: p =>
      `Apartment and penthouse types at ${p.title}, ${p.location} — exact sizes, floor plans and interior renders for every layout.`,
    keywords: p => [
      `${p.title} apartments`,
      `${p.title} penthouse`,
      `${p.title} floor plan`,
      `${p.title} apartment size`,
      `${p.title} 2 bed apartment`,
      'apartments for sale Faisal Hills',
    ],
  },
  shops: {
    label: 'Shops & Commercial',
    available: p => !!p.commercialFloors?.length,
    title: p => `${p.title} Shops — Sizes Floor by Floor`,
    description: p =>
      `Commercial shop sizes on every floor at ${p.title}, ${p.location}, from the lower ground retail level up to the food court.`,
    keywords: p => [
      `${p.title} shops`,
      `${p.title} shop price`,
      `${p.title} commercial`,
      `${p.title} food court`,
      'shops for sale Faisal Hills',
      'commercial property Taxila',
    ],
  },
  location: {
    label: 'Location & Connectivity',
    available: p => !!p.surroundings?.length,
    title: p => `${p.title} Location & Nearby Landmarks`,
    description: p =>
      `Where ${p.title} sits in ${p.location}, what it connects to, and the roads, universities and landmarks around it.`,
    keywords: p => [
      `${p.title} location`,
      `${p.title} map`,
      `${p.title} address`,
      `${p.title} nearby`,
      'Faisal Hills location',
      'Taxila property location',
    ],
  },
};

const SECTION_IDS = Object.keys(SECTIONS) as SectionId[];

export function generateStaticParams() {
  return projects.flatMap(p =>
    SECTION_IDS.filter(s => SECTIONS[s].available(p)).map(section => ({ id: p.id, section }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; section: string }>;
}): Promise<Metadata> {
  const { id, section } = await params;
  const project = projects.find(p => p.id === id);
  const cfg = SECTIONS[section as SectionId];
  if (!project || !cfg || !cfg.available(project)) {
    return { title: 'Not Found | Alammana Developers', robots: { index: false, follow: true } };
  }
  return {
    title: { absolute: `${cfg.title(project)} | Alammana` },
    description: clampDescription(cfg.description(project)),
    keywords: cfg.keywords(project),
    alternates: { canonical: `/portfolio/${project.id}/${section}` },
    openGraph: {
      title: cfg.title(project),
      description: clampDescription(cfg.description(project)),
      url: `/portfolio/${project.id}/${section}`,
      type: 'article',
      images: [{ url: project.thumbnail, alt: `${project.title}, ${project.location}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: cfg.title(project),
      description: clampDescription(cfg.description(project)),
      images: [project.thumbnail],
    },
  };
}

export default async function ProjectSectionPage({
  params,
}: {
  params: Promise<{ id: string; section: string }>;
}) {
  const { id, section } = await params;
  const project = projects.find(p => p.id === id);
  const sectionId = section as SectionId;
  const cfg = SECTIONS[sectionId];

  if (!project || !cfg || !cfg.available(project)) {
    return (
      <div className="h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-4xl font-serif mb-4">Page Not Found</h1>
          <Link href="/portfolio" className="text-burgundy underline uppercase tracking-widest text-xs font-bold">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const rate = project.pricing?.pricePerSqft;
  const base = `/portfolio/${project.id}`;
  const siblings = SECTION_IDS.filter(s => s !== sectionId && SECTIONS[s].available(project));

  const schema: object[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Portfolio', item: `${SITE_URL}/portfolio` },
        { '@type': 'ListItem', position: 3, name: project.title, item: `${SITE_URL}${base}` },
        { '@type': 'ListItem', position: 4, name: cfg.label, item: `${SITE_URL}${base}/${sectionId}` },
      ],
    },
  ];

  if (sectionId === 'apartments' && project.unitPlans) {
    schema.push({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: `${project.title} apartment and penthouse types`,
      itemListElement: project.unitPlans.map((u, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Accommodation',
          name: u.name,
          floorSize: { '@type': 'QuantitativeValue', name: u.size },
        },
      })),
    });
  }

  return (
    <div className="pt-24 pb-24 bg-paper">
      <JsonLd schema={schema} />

      <div className="max-w-[1600px] mx-auto px-4">
        {/* Breadcrumb + heading */}
        <Link
          href={base}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-bold text-burgundy mb-8 hover:opacity-70 transition-opacity"
        >
          <ArrowLeft size={14} /> {project.title}
        </Link>

        <header className="mb-14 max-w-3xl">
          <span className="text-burgundy text-xs uppercase tracking-[0.4em] font-bold mb-5 block">
            {cfg.label}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif italic mb-6 leading-tight">
            {cfg.title(project)}
          </h1>
          <p className="text-lg text-ink/65 leading-relaxed">{cfg.description(project)}</p>
          <p className="flex items-center gap-2 mt-5 text-[12px] uppercase tracking-widest font-bold text-ink/40">
            <MapPin size={12} /> {project.location}
          </p>
        </header>

        {/* ── Apartments ─────────────────────────────────────────────────── */}
        {sectionId === 'apartments' && project.unitPlans && (
          <>
            {(() => {
              const range = priceRange(project.unitPlans!.map(u => u.size), rate);
              return (
                <div className="rounded-3xl border border-burgundy/15 bg-beige/50 p-8 mb-12 flex flex-wrap items-center justify-between gap-6">
                  <div>
                    <span className="text-[12px] uppercase tracking-widest font-bold text-ink/40 block mb-2">
                      {range ? 'Price range' : 'Pricing'}
                    </span>
                    <p className="font-serif text-2xl text-burgundy">
                      {range ?? 'Price on request'}
                    </p>
                    {rate && (
                      <p className="text-xs text-ink/50 mt-1">Based on {rate}. Indicative — confirm before booking.</p>
                    )}
                  </div>
                  <a
                    href={whatsappLink(`Hello Alammana, please send current prices and availability for apartments at ${project.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-burgundy text-white px-7 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:opacity-90 transition-opacity"
                  >
                    Get Current Prices
                  </a>
                </div>
              );
            })()}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {project.unitPlans.map(u => {
                const price = unitPrice(u.size, rate);
                return (
                  <article key={u.name} className="rounded-3xl border border-sand/50 bg-white overflow-hidden">
                    <div className="grid grid-cols-2 gap-px bg-sand/30">
                      {u.render && (
                        <div className="aspect-[4/3] bg-white">
                          <img src={u.render} alt={`${u.name} interior — ${project.title}`} className="w-full h-full object-cover" loading="lazy" />
                        </div>
                      )}
                      {u.plan && (
                        <div className={`aspect-[4/3] bg-white ${u.render ? '' : 'col-span-2'}`}>
                          <img src={u.plan} alt={`${u.name} floor plan — ${project.title}`} className="w-full h-full object-contain p-3" loading="lazy" />
                        </div>
                      )}
                    </div>
                    <div className="p-7">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h2 className="font-serif text-2xl text-ink leading-snug">{u.name}</h2>
                        <BedDouble size={18} className="text-burgundy shrink-0 mt-1" />
                      </div>
                      <dl className="space-y-1.5 text-sm">
                        <div className="flex justify-between gap-4">
                          <dt className="text-ink/50">Covered area</dt>
                          <dd className="font-semibold text-ink">{u.size}</dd>
                        </div>
                        {u.notes && (
                          <div className="flex justify-between gap-4">
                            <dt className="text-ink/50">Floor</dt>
                            <dd className="font-semibold text-ink">{u.notes}</dd>
                          </div>
                        )}
                        <div className="flex justify-between gap-4 pt-1.5 border-t border-sand/40 mt-2">
                          <dt className="text-ink/50">Price</dt>
                          <dd className="font-semibold text-burgundy">{price ?? 'On request'}</dd>
                        </div>
                      </dl>
                    </div>
                  </article>
                );
              })}
            </div>
          </>
        )}

        {/* ── Shops ──────────────────────────────────────────────────────── */}
        {sectionId === 'shops' && project.commercialFloors && (
          <>
            <div className="rounded-3xl border border-burgundy/15 bg-beige/50 p-8 mb-12 flex flex-wrap items-center justify-between gap-6">
              <div className="max-w-xl">
                <span className="text-[12px] uppercase tracking-widest font-bold text-ink/40 block mb-2">Pricing</span>
                <p className="font-serif text-2xl text-burgundy mb-1">
                  {rate ? `From ${rate} per sq ft` : 'Price on request'}
                </p>
                <p className="text-xs text-ink/55 leading-relaxed">
                  Shop prices depend on floor and position — ground-floor and corner units carry a
                  premium. Tell us the size you want and we will send the current rate for that level.
                </p>
              </div>
              <a
                href={whatsappLink(`Hello Alammana, please send current shop prices and availability at ${project.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-burgundy text-white px-7 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:opacity-90 transition-opacity"
              >
                Get Shop Prices
              </a>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-sand/50 mb-16">
              <table className="w-full text-sm min-w-[520px]">
                <caption className="sr-only">Commercial unit sizes by floor at {project.title}</caption>
                <thead>
                  <tr className="bg-burgundy text-white">
                    <th scope="col" className="text-left font-bold uppercase tracking-widest text-[12px] px-6 py-4">Floor</th>
                    <th scope="col" className="text-left font-bold uppercase tracking-widest text-[12px] px-6 py-4">Smallest unit</th>
                    <th scope="col" className="text-left font-bold uppercase tracking-widest text-[12px] px-6 py-4">Largest unit</th>
                    <th scope="col" className="text-left font-bold uppercase tracking-widest text-[12px] px-6 py-4">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {project.commercialFloors.map(f => (
                    <tr key={f.floor} className="border-t border-sand/40 even:bg-beige/25">
                      <th scope="row" className="px-6 py-4 font-serif text-base text-ink text-left font-normal">{f.floor}</th>
                      <td className="px-6 py-4 text-ink/70">{f.minArea}</td>
                      <td className="px-6 py-4 text-ink/70">{f.maxArea}</td>
                      <td className="px-6 py-4 text-burgundy font-semibold">
                        {unitPrice(f.minArea, rate) ?? 'On request'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* ── Location ───────────────────────────────────────────────────── */}
        {sectionId === 'location' && project.surroundings && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2 rounded-3xl overflow-hidden border border-sand/50 bg-white">
                <iframe
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(`${project.title} ${project.location}`)}&output=embed`}
                  title={`Map of ${project.title}, ${project.location}`}
                  className="w-full h-[380px] md:h-[460px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="rounded-3xl border border-burgundy/10 bg-beige/40 p-8">
                <span className="text-[12px] uppercase tracking-widest font-bold text-ink/40 block mb-2">Address</span>
                <p className="font-serif text-xl text-burgundy leading-snug mb-6">{project.location}</p>
                {project.mapLink && (
                  <a
                    href={project.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-burgundy border-b border-burgundy pb-1"
                  >
                    Open in Google Maps <ArrowRight size={13} />
                  </a>
                )}
              </div>
            </div>

            <h2 className="text-3xl font-serif italic mb-6">What&apos;s Nearby</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-16">
              {project.surroundings.map(s => (
                <li key={s} className="flex items-start gap-3 rounded-2xl border border-sand/50 bg-white px-5 py-4 text-sm">
                  <Route size={15} className="text-burgundy mt-0.5 shrink-0" />
                  <span className="text-ink/75">{s}</span>
                </li>
              ))}
            </ul>
          </>
        )}

        {/* Sibling sections */}
        {siblings.length > 0 && (
          <div className="border-t border-sand/40 pt-12 mb-16">
            <h2 className="text-2xl font-serif italic mb-6">More on {project.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {siblings.map(s => (
                <Link
                  key={s}
                  href={`${base}/${s}`}
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-sand/50 bg-white px-6 py-5 hover:border-burgundy/40 hover:shadow-md transition-all"
                >
                  <span className="font-serif text-lg group-hover:text-burgundy transition-colors">
                    {SECTIONS[s].label}
                  </span>
                  {s === 'shops' ? <Store size={16} className="text-burgundy" /> : <ArrowRight size={16} className="text-burgundy" />}
                </Link>
              ))}
              <Link
                href={base}
                className="group flex items-center justify-between gap-3 rounded-2xl border border-sand/50 bg-white px-6 py-5 hover:border-burgundy/40 hover:shadow-md transition-all"
              >
                <span className="font-serif text-lg group-hover:text-burgundy transition-colors">Project Overview</span>
                <ArrowRight size={16} className="text-burgundy" />
              </Link>
            </div>
          </div>
        )}

        {/* Enquiry */}
        <div className="rounded-3xl bg-white border border-sand/40 p-8 md:p-12">
          <h2 className="text-3xl font-serif italic mb-3">Ask about {cfg.label.toLowerCase()}</h2>
          <p className="text-sm text-ink/55 mb-8 max-w-xl">
            Tell us the size or floor you have in mind and we will come back with what is available
            and the current rate.
          </p>
          <LeadForm
            subjectPrefix="Project Enquiry"
            context={`${project.title} — ${cfg.label}`}
            interests={[
              `${project.title} — ${cfg.label}`,
              `${project.title} — Payment plan`,
              `${project.title} — Site visit`,
              'Other',
            ]}
          />
        </div>
      </div>
    </div>
  );
}
