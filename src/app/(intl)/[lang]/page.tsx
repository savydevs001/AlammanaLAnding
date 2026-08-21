import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Camera, FileText, Layers, Ruler } from 'lucide-react';
import { PREFIXED_LOCALES, isLocale, localeHref, Locale } from '../../../lib/i18n';
import { getDictionary } from '../../../lib/dictionaries';
import { getPageDictionary } from '../../../lib/dictionaries.pages';
import { pageMeta, webPage } from '../../../lib/seo';
import { societies } from '../../../data/societies';
import { CONTACT, whatsappLink } from '../../../lib/contact';
import LeadForm from '../../../components/LeadForm';
import JsonLd from '../../../components/JsonLd';
import ApprovalBadge from '../../../components/ApprovalBadge';

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
  const t = getPageDictionary(locale).home;
  return pageMeta({
    title: t.metaTitle,
    absoluteTitle: true,
    description: t.metaDescription,
    path: '/',
    locale,
  });
}

const SERVICE_ICONS = [Ruler, Camera, Layers, FileText];

export default async function IntlHome({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : 'ur';
  const t = getPageDictionary(locale);
  const ui = getDictionary(locale);

  return (
    <>
      <JsonLd
        schema={webPage('WebPage', {
          name: t.home.metaTitle,
          description: t.home.metaDescription,
          path: `/${locale}`,
        })}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/projects/faisal-jewel/hero.webp"
            alt=""
            aria-hidden="true"
            width={1600}
            height={900}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-burgundy-deep/80" />
        </div>

        <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold text-xs md:text-sm uppercase tracking-[0.25em] font-bold mb-6">
              {ui.hero.eyebrow}
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl text-white leading-[1.5] md:leading-[1.45] mb-8">
              {ui.hero.title}{' '}
              <span className="text-gold">{ui.hero.titleAccent}</span>
            </h1>
            <p className="text-white/80 text-base md:text-lg leading-loose mb-10 max-w-2xl">
              {ui.hero.body}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={localeHref('/payment-plans', locale)}
                className="bg-gold text-burgundy-deep px-8 py-4 rounded-full text-sm font-bold text-center hover:opacity-90 transition-opacity"
              >
                {ui.hero.ctaRates}
              </Link>
              <a
                href={whatsappLink(`${t.home.metaTitle} — alammana.pk`)}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/40 text-white px-8 py-4 rounded-full text-sm font-bold text-center hover:bg-white/10 transition-colors"
              >
                {ui.hero.ctaWhatsapp}
              </a>
            </div>

            <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-white/70 text-xs md:text-sm">
              {[ui.hero.trust1, ui.hero.trust2, ui.hero.trust3].map(x => (
                <li key={x} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Live tracking — stated here, in every language, because it is the
          single thing that most distinguishes us and it is standard on every
          project rather than an overseas add-on. */}
      <section className="bg-beige py-20 md:py-28">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-block bg-burgundy text-white text-[11px] uppercase tracking-[0.2em] font-bold px-4 py-2 rounded-full mb-6">
                {ui.tracking.badge}
              </span>
              <h2 className="text-2xl md:text-4xl leading-relaxed mb-6">{ui.tracking.title}</h2>
              <p className="text-ink/70 leading-loose mb-8">{ui.tracking.body}</p>
              <Link
                href={localeHref('/overseas', locale)}
                className="inline-flex items-center gap-2 text-burgundy font-bold text-sm border-b-2 border-burgundy pb-1"
              >
                {ui.tracking.cta}
                <ArrowLeft size={16} className="rtl-flip" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[ui.tracking.camera, ui.tracking.stages, ui.tracking.materials, ui.tracking.documents].map(
                (x, i) => {
                  const Icon = SERVICE_ICONS[i];
                  return (
                    <div key={x} className="bg-white rounded-2xl p-6 border border-sand/50">
                      <Icon size={22} className="text-burgundy mb-4" />
                      <p className="text-sm font-semibold leading-relaxed">{x}</p>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl leading-relaxed mb-4">{t.home.servicesTitle}</h2>
          <p className="text-ink/60 leading-loose max-w-2xl mb-14">{t.home.servicesBody}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.home.services.map((s, i) => {
              const Icon = SERVICE_ICONS[i];
              return (
                <div
                  key={s.title}
                  className="border border-sand rounded-3xl p-8 hover:border-burgundy/40 transition-colors"
                >
                  <Icon size={24} className="text-burgundy mb-6" />
                  <h3 className="text-lg font-bold mb-3 leading-relaxed">{s.title}</h3>
                  <p className="text-sm text-ink/65 leading-loose">{s.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Societies */}
      <section className="bg-beige py-20 md:py-28">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl leading-relaxed mb-4">{t.home.societiesTitle}</h2>
          <p className="text-ink/60 leading-loose max-w-2xl mb-14">{t.home.societiesBody}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {societies.map(s => (
              <Link
                key={s.id}
                href={localeHref('/societies', locale)}
                className="group bg-white rounded-3xl overflow-hidden border border-sand/60 hover:shadow-xl transition-shadow"
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
                <span className="block p-6">
                  <ApprovalBadge status={s.approvalStatus} locale={locale} />
                  {/* Society names stay in their registered English form in every
                      language — that is how buyers say them and how they search. */}
                  <span className="block text-lg font-bold mt-3 mb-1" dir="ltr">
                    {s.name}
                  </span>
                  <span className="block text-sm text-ink/55">{s.city}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section id="enquire" className="py-20 md:py-28">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14">
            <div>
              <h2 className="text-2xl md:text-4xl leading-relaxed mb-6">{t.home.ctaTitle}</h2>
              <p className="text-ink/70 leading-loose mb-8">{t.home.ctaBody}</p>
              <a
                href={`tel:${CONTACT.phoneHref}`}
                className="text-2xl md:text-3xl font-bold text-burgundy ltr-nums"
              >
                {CONTACT.phoneDisplay}
              </a>
            </div>
            <div className="bg-beige rounded-3xl p-8 md:p-10">
              <h3 className="text-xl font-bold mb-8">{t.home.formTitle}</h3>
              <LeadForm subjectPrefix={`Website Enquiry (${locale.toUpperCase()})`} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
