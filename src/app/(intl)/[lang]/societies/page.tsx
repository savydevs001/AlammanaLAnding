import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertCircle } from 'lucide-react';
import { PREFIXED_LOCALES, isLocale, Locale } from '../../../../lib/i18n';
import { getPageDictionary } from '../../../../lib/dictionaries.pages';
import { pageMeta, webPage, SITE_URL } from '../../../../lib/seo';
import { societies } from '../../../../data/societies';
import JsonLd from '../../../../components/JsonLd';
import ApprovalBadge from '../../../../components/ApprovalBadge';

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
  const t = getPageDictionary(locale).societies;
  return pageMeta({
    title: t.metaTitle,
    absoluteTitle: true,
    description: t.metaDescription,
    path: '/societies',
    locale,
  });
}

export default async function IntlSocieties({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : 'ur';
  const t = getPageDictionary(locale);

  return (
    <>
      <JsonLd
        schema={webPage('CollectionPage', {
          name: t.societies.metaTitle,
          description: t.societies.metaDescription,
          path: `/${locale}/societies`,
        })}
      />
      <JsonLd
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          inLanguage: locale === 'ur' ? 'ur-PK' : 'ar',
          itemListElement: societies.map((s, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: s.name,
            url: `${SITE_URL}/societies/${s.id}`,
          })),
        }}
      />

      <section className="pt-32 md:pt-44 pb-16">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl leading-[1.5] mb-6">{t.societies.title}</h1>
          <p className="text-ink/65 leading-loose max-w-2xl mb-10">{t.societies.lead}</p>

          <div className="flex gap-4 bg-beige border border-sand rounded-2xl p-6 max-w-3xl">
            <AlertCircle size={20} className="text-burgundy shrink-0 mt-1" />
            <p className="text-sm text-ink/75 leading-loose">{t.societies.approvalNote}</p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {societies.map(s => (
              /* Links go to the English detail page. Those pages carry the
                 block-by-block data verbatim from the developer, and paraphrasing
                 plot schedules and approval wording into another language is
                 exactly where errors would cost a buyer money. */
              <Link
                key={s.id}
                href={`/societies/${s.id}`}
                className="group bg-white rounded-3xl overflow-hidden border border-sand/60 hover:shadow-xl transition-shadow flex flex-col"
              >
                <span className="block aspect-[4/3] overflow-hidden bg-sand/30">
                  <img
                    src={s.image}
                    alt={s.name}
                    width={640}
                    height={480}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </span>
                <span className="block p-6 flex-1">
                  <ApprovalBadge status={s.approvalStatus} locale={locale} />
                  <span className="block text-lg font-bold mt-3 mb-1" dir="ltr">
                    {s.name}
                  </span>
                  <span className="block text-sm text-ink/55 mb-4">{s.city}</span>
                  <span className="block text-xs text-burgundy font-bold">
                    {t.societies.viewDetail}
                  </span>
                  <span className="block text-[11px] text-ink/40 mt-1">
                    {t.notice.englishOnly}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
