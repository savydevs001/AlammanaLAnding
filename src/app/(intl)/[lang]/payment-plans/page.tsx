import type { Metadata } from 'next';
import Link from 'next/link';
import { Building, Home, Download, ArrowLeft } from 'lucide-react';
import { PREFIXED_LOCALES, isLocale, localeHref, Locale } from '../../../../lib/i18n';
import { getDictionary } from '../../../../lib/dictionaries';
import { getPageDictionary } from '../../../../lib/dictionaries.pages';
import { pageMeta, webPage } from '../../../../lib/seo';
import JsonLd from '../../../../components/JsonLd';

export function generateStaticParams() {
  return PREFIXED_LOCALES.map(lang => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : 'ur';
  const t = getPageDictionary(locale).rates;
  return pageMeta({
    title: t.metaTitle,
    absoluteTitle: true,
    description: t.metaDescription,
    path: '/payment-plans',
    locale,
  });
}

/** Block names are the developer's own labels and are never translated. */
const BLOCKS = ['block-a', 'block-b', 'block-c', 'block-d', 'executive-block'] as const;
const BLOCK_LABELS: Record<(typeof BLOCKS)[number], string> = {
  'block-a': 'Block A',
  'block-b': 'Block B',
  'block-c': 'Block C',
  'block-d': 'Block D',
  'executive-block': 'Executive Block',
};

function pdf(block: string, finish: 'gray-structure' | 'finished-house') {
  return `/payment-plans/faisal-hills-${block}-${finish}-payment-plan.pdf`;
}

export default async function IntlRates({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : 'ur';
  const t = getPageDictionary(locale);
  const ui = getDictionary(locale);

  const finishes = [
    {
      key: 'gray-structure' as const,
      icon: Building,
      title: t.rates.grayTitle,
      body: t.rates.grayBody,
    },
    {
      key: 'finished-house' as const,
      icon: Home,
      title: t.rates.finishedTitle,
      body: t.rates.finishedBody,
    },
  ];

  return (
    <>
      <JsonLd
        schema={webPage('WebPage', {
          name: t.rates.metaTitle,
          description: t.rates.metaDescription,
          path: `/${locale}/payment-plans`,
        })}
      />

      <section className="pt-32 md:pt-44 pb-14 bg-burgundy-deep text-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl leading-[1.5] mb-6">{t.rates.title}</h1>
          <p className="text-white/75 leading-loose max-w-2xl">{t.rates.lead}</p>
        </div>
      </section>

      {/* The rate lists themselves. Two finishes × five blocks, as direct PDF
          downloads — the same files the English page serves, because a rate list
          is a document, not prose, and translating it would create a second
          version of a number that must only ever have one. */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {finishes.map(f => (
            <div key={f.key}>
              <div className="flex items-start gap-4 mb-8">
                <span className="w-12 h-12 rounded-2xl bg-burgundy text-white flex items-center justify-center shrink-0">
                  <f.icon size={22} />
                </span>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold mb-2">{f.title}</h2>
                  <p className="text-sm text-ink/65 leading-loose max-w-xl">{f.body}</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {BLOCKS.map(b => (
                  <a
                    key={b}
                    href={pdf(b, f.key)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border border-sand rounded-2xl p-6 hover:border-burgundy hover:shadow-lg transition-all flex flex-col gap-4"
                  >
                    <span className="block aspect-[3/4] rounded-xl overflow-hidden bg-beige">
                      <img
                        src={pdf(b, f.key).replace(/\.pdf$/, '.webp')}
                        alt={`${BLOCK_LABELS[b]} — ${f.title}`}
                        width={480}
                        height={640}
                        loading="lazy"
                        className="h-full w-full object-cover object-top"
                      />
                    </span>
                    <span className="flex items-center justify-between gap-3">
                      <span className="text-sm font-bold" dir="ltr">
                        {BLOCK_LABELS[b]}
                      </span>
                      <span className="flex items-center gap-1.5 text-[11px] font-bold text-burgundy uppercase tracking-wider">
                        <Download size={13} />
                        PDF
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How the price is worked out — the single most misunderstood thing in
          Pakistani house construction is per-marla versus per-covered-square-foot,
          and it is worth spelling out in the reader's own language. */}
      <section className="bg-beige py-16 md:py-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl leading-relaxed mb-10">{t.rates.howTitle}</h2>
          <ol className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {t.rates.how.map((line, i) => (
              <li key={i} className="flex gap-4 bg-white rounded-2xl p-6 border border-sand/60">
                <span className="w-8 h-8 rounded-full bg-burgundy text-white text-sm font-bold flex items-center justify-center shrink-0 ltr-nums">
                  {i + 1}
                </span>
                <span className="text-sm leading-loose text-ink/75">{line}</span>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-sm text-ink/55 leading-loose max-w-2xl">{t.rates.note}</p>

          <Link
            href={localeHref('/contact', locale)}
            className="inline-flex items-center gap-2 mt-10 bg-burgundy text-white px-8 py-4 rounded-full text-sm font-bold"
          >
            {ui.common.getRates}
            <ArrowLeft size={16} className="rtl-flip" />
          </Link>
        </div>
      </section>
    </>
  );
}
