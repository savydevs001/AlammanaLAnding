import type { Metadata } from 'next';
import { Camera, LayoutDashboard, FileCheck, Receipt, Info } from 'lucide-react';
import { PREFIXED_LOCALES, isLocale, Locale } from '../../../../lib/i18n';
import { getPageDictionary } from '../../../../lib/dictionaries.pages';
import { pageMeta, webPage } from '../../../../lib/seo';
import JsonLd from '../../../../components/JsonLd';
import LeadForm from '../../../../components/LeadForm';

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
  const t = getPageDictionary(locale).overseas;
  return pageMeta({
    title: t.metaTitle,
    absoluteTitle: true,
    description: t.metaDescription,
    path: '/overseas',
    locale,
  });
}

const ICONS = [Camera, LayoutDashboard, FileCheck, Receipt];

export default async function IntlOverseas({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : 'ur';
  const t = getPageDictionary(locale).overseas;

  return (
    <>
      <JsonLd
        schema={webPage('WebPage', {
          name: t.metaTitle,
          description: t.metaDescription,
          path: `/${locale}/overseas`,
        })}
      />

      <section className="relative pt-32 md:pt-44 pb-20 bg-burgundy-deep text-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h1 className="text-3xl md:text-5xl leading-[1.5] mb-8 max-w-3xl">{t.title}</h1>
          <p className="text-white/75 text-base md:text-lg leading-loose max-w-2xl">{t.lead}</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {t.points.map((p, i) => {
              const Icon = ICONS[i];
              return (
                <div key={p.title} className="border border-sand rounded-3xl p-8">
                  <Icon size={24} className="text-burgundy mb-6" />
                  <h2 className="text-lg font-bold mb-3 leading-relaxed">{p.title}</h2>
                  <p className="text-sm text-ink/65 leading-loose">{p.body}</p>
                </div>
              );
            })}
          </div>

          {/* Said plainly and in every language: this is not an upsell tier. */}
          <div className="mt-10 flex gap-4 bg-beige border border-sand rounded-2xl p-6 max-w-3xl">
            <Info size={20} className="text-burgundy shrink-0 mt-1" />
            <p className="text-sm text-ink/75 leading-loose">{t.everyoneNote}</p>
          </div>
        </div>
      </section>

      {/* Power of attorney. The advice here is deliberately against our own
          short-term interest — narrow scope, expiry date, independent lawyer —
          because a client who has been properly advised is the only kind worth
          having, and this is the exact point where overseas buyers get hurt. */}
      <section className="bg-beige py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl leading-relaxed mb-6">{t.poaTitle}</h2>
          <p className="text-ink/75 leading-loose">{t.poaBody}</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl leading-relaxed mb-10">{t.ctaTitle}</h2>
          <LeadForm
            subjectPrefix={`Overseas Enquiry (${locale.toUpperCase()})`}
            context="Overseas page"
          />
        </div>
      </section>
    </>
  );
}
