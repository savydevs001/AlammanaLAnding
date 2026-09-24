import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { TOOLS, toolBySlug } from '../../../../lib/tools';
import { toolContent } from '../../../../data/toolContent';
import { blogs } from '../../../../data/blogs';
import ToolClient from '../../../../components/tools/ToolsClient';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://alammana.pk';

export const dynamicParams = false;

export function generateStaticParams() {
  return TOOLS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const t = toolBySlug(slug);
  if (!t) return {};
  const c = toolContent[slug];
  // The answer is written to stand alone, which also makes it the best
  // meta description; trim to what search results show.
  const description = (c?.answer ?? t.description).slice(0, 158).replace(/\s+\S*$/, '') + '…';
  return {
    title: `${t.name} (Free, Pakistan)`,
    description,
    keywords: [...t.keywords, 'calculator Pakistan', 'Islamabad', 'Rawalpindi', 'Faisal Hills'],
    alternates: { canonical: `/tools/${t.slug}` },
    openGraph: { title: `${t.name} | Alammana Developers`, description, url: `/tools/${t.slug}`, type: 'website', images: [{ url: '/assets/og-image.jpg', width: 1200, height: 630 }] },
    twitter: { card: 'summary_large_image', title: t.name, description, images: ['/assets/og-image.jpg'] },
  };
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = toolBySlug(slug);
  if (!t) notFound();
  const c = toolContent[slug];
  const url = `${siteUrl}/tools/${t.slug}`;

  const structuredData: object[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: t.name,
      url,
      description: c?.answer ?? t.description,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Any',
      isAccessibleForFree: true,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'PKR' },
      provider: { '@type': 'Organization', name: 'Alammana Developers', url: siteUrl },
      areaServed: ['Islamabad', 'Rawalpindi', 'Taxila', 'Pakistan'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Tools', item: `${siteUrl}/tools` },
        { '@type': 'ListItem', position: 3, name: t.name, item: url },
      ],
    },
  ];
  if (c) {
    structuredData.push(
      {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: `How to use the ${t.name}`,
        description: c.answer,
        tool: [{ '@type': 'HowToTool', name: t.name }],
        step: c.steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: `Step ${i + 1}`, text: s, url: `${url}#how-to` })),
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: c.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
    );
  }

  const relatedTools = (c?.relatedTools ?? []).map(toolBySlug).filter((x): x is NonNullable<typeof x> => !!x);
  const relatedBlogs = (c?.relatedBlogs ?? []).map((id) => blogs.find((b) => b.id === id)).filter((x): x is NonNullable<typeof x> => !!x);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <ToolClient slug={slug} />
      {c && (
        <article className="mx-auto max-w-[1600px] px-4 pb-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,1fr)]">
            <div className="min-w-0">
              <section className="rounded-2xl border-l-4 border-burgundy bg-paper p-6">
                <h2 className="mb-2 font-serif text-2xl text-burgundy">The short answer</h2>
                <p className="text-lg leading-relaxed text-ink">{c.answer}</p>
              </section>

              <div className="prose prose-lg mt-8 max-w-none prose-headings:font-serif prose-headings:text-ink prose-a:text-burgundy">
                <ReactMarkdown>{c.body}</ReactMarkdown>
              </div>

              <section id="how-to" className="mt-10">
                <h2 className="mb-4 font-serif text-3xl text-ink">How to use the {t.name.toLowerCase()}</h2>
                <ol className="space-y-3">
                  {c.steps.map((s, i) => (
                    <li key={s} className="flex gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-burgundy text-sm font-semibold text-paper">{i + 1}</span>
                      <span className="pt-1 text-ink/80">{s}</span>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="mt-10">
                <h2 className="mb-4 font-serif text-3xl text-ink">Frequently asked questions</h2>
                <div className="divide-y divide-sand/60 rounded-2xl border border-sand/60 bg-paper">
                  {c.faqs.map((f) => (
                    <details key={f.q} className="group p-5">
                      <summary className="cursor-pointer list-none font-semibold text-ink marker:hidden">
                        <span className="mr-2 text-burgundy group-open:hidden">+</span><span className="mr-2 hidden text-burgundy group-open:inline">−</span>{f.q}
                      </summary>
                      <p className="mt-3 leading-relaxed text-ink/80">{f.a}</p>
                    </details>
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              {relatedTools.length > 0 && (
                <div className="rounded-2xl border border-sand/60 bg-paper p-5">
                  <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-burgundy">Related calculators</h2>
                  <ul className="space-y-2">{relatedTools.map((r) => <li key={r.slug}><Link href={`/tools/${r.slug}`} className="text-ink hover:text-burgundy hover:underline">{r.name}</Link></li>)}</ul>
                  <Link href="/tools" className="mt-3 inline-block text-sm font-semibold text-burgundy">All 15 tools →</Link>
                </div>
              )}
              {relatedBlogs.length > 0 && (
                <div className="rounded-2xl border border-sand/60 bg-paper p-5">
                  <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-burgundy">Read next</h2>
                  <ul className="space-y-3">{relatedBlogs.map((b) => <li key={b.id}><Link href={`/blog/${b.id}`} className="text-ink hover:text-burgundy hover:underline">{b.title}</Link></li>)}</ul>
                </div>
              )}
              <div className="rounded-2xl border border-sand/60 bg-paper p-5 text-sm text-ink/70">
                <p className="font-semibold text-ink">Building or buying in Faisal Hills?</p>
                <p className="mt-1">See our published <Link href="/payment-plans" className="text-burgundy underline">construction rates</Link> and <Link href="/societies" className="text-burgundy underline">society guides</Link>.</p>
              </div>
            </aside>
          </div>
        </article>
      )}
    </>
  );
}
