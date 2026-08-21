import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { PREFIXED_LOCALES, isLocale, Locale } from '../../../../lib/i18n';
import { getPageDictionary } from '../../../../lib/dictionaries.pages';
import { pageMeta, webPage } from '../../../../lib/seo';
import { CONTACT } from '../../../../lib/contact';
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
  const t = getPageDictionary(locale).contact;
  return pageMeta({
    title: t.metaTitle,
    absoluteTitle: true,
    description: t.metaDescription,
    path: '/contact',
    locale,
  });
}

export default async function IntlContact({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : 'ur';
  const t = getPageDictionary(locale).contact;

  return (
    <>
      <JsonLd
        schema={webPage('ContactPage', {
          name: t.metaTitle,
          description: t.metaDescription,
          path: `/${locale}/contact`,
        })}
      />

      <section className="pt-32 md:pt-44 pb-16">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl leading-[1.5] mb-6">{t.title}</h1>
          <p className="text-ink/65 leading-loose max-w-2xl">{t.lead}</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14">
            <div className="space-y-8">
              {/* The address is byte-for-byte identical to the Google Business
                  Profile listing in every language. Local-search matching is
                  string-based; a "helpfully" translated address would split the
                  signal across two listings. */}
              <div className="flex gap-4">
                <MapPin size={20} className="text-burgundy shrink-0 mt-1" />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-ink/40 mb-2">
                    {t.officeLabel}
                  </p>
                  <p className="leading-loose" dir="ltr">
                    {CONTACT.addressLine}, {CONTACT.addressLocality}, {CONTACT.addressRegion}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone size={20} className="text-burgundy shrink-0 mt-1" />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-ink/40 mb-2">
                    {t.phoneLabel}
                  </p>
                  <a
                    href={`tel:${CONTACT.phoneHref}`}
                    className="text-xl font-bold text-burgundy ltr-nums"
                  >
                    {CONTACT.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail size={20} className="text-burgundy shrink-0 mt-1" />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-ink/40 mb-2">
                    {t.emailLabel}
                  </p>
                  <a href={`mailto:${CONTACT.email}`} className="font-semibold text-burgundy">
                    {CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock size={20} className="text-burgundy shrink-0 mt-1" />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-ink/40 mb-2">
                    {t.hoursLabel}
                  </p>
                  <p className="leading-loose">{t.hours}</p>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden border border-sand aspect-[4/3]">
                <iframe
                  src={CONTACT.mapEmbedUrl}
                  title={t.officeLabel}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0"
                />
              </div>
            </div>

            <div className="bg-beige rounded-3xl p-8 md:p-10 h-fit">
              <LeadForm subjectPrefix={`Contact Page (${locale.toUpperCase()})`} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
