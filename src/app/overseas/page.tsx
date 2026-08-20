import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '../../components/JsonLd';
import LeadForm from '../../components/LeadForm';
import { pageMeta, breadcrumb, webPage, SITE_URL } from '../../lib/seo';
import { whatsappLink, CONTACT } from '../../lib/contact';
import { Camera, FileCheck2, Clock, ShieldCheck, ArrowRight, MessageCircle } from 'lucide-react';

/**
 * Overseas Pakistanis are the highest-value buyer for a construction firm and
 * were completely unaddressed by the site. Their fear is specific and it is not
 * price — it is "I cannot stand on the plot and watch what you are doing."
 *
 * ⚠️ TODO(client): the four commitments below are written as a sensible default
 * offer. Confirm what Alammana will genuinely promise — how often progress
 * photos go out, whether video walkthroughs are on request or scheduled, and
 * which payment routes you actually accept. Do NOT leave a promise here that
 * the team will not keep; this page exists to be trusted.
 */

export const metadata: Metadata = pageMeta({
  title: 'Building From Abroad',
  description:
    'Building a house in Faisal Hills while living overseas — how supervision, progress reporting and payment work when you cannot visit the site yourself.',
  path: '/overseas',
  keywords: [
    'overseas Pakistani construction',
    'build house in Pakistan from abroad',
    'Faisal Hills overseas investor',
    'remote house construction Pakistan',
    'construction for overseas Pakistanis',
    'property investment Pakistan from UK UAE',
  ],
});

const commitments = [
  {
    icon: <Camera size={22} />,
    title: 'Dated progress photographs',
    body: 'Photographs from your site on a regular schedule, dated, showing the actual stage of work — not a stock render and not a description over the phone.',
  },
  {
    icon: <MessageCircle size={22} />,
    title: 'A video walkthrough on request',
    body: 'A live video call from your plot so you can see the work yourself and ask questions while someone is standing in front of it.',
  },
  {
    icon: <FileCheck2 size={22} />,
    title: 'Published rates, agreed in writing',
    body: 'Our block-wise rates are public and downloadable. You are not negotiating blind from another country, and the figure does not move because you are far away.',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Milestone payments only',
    body: 'You pay against work that already exists on your plot — foundation, each slab, plaster, handover. Never months ahead of construction.',
  },
];

const faqs = [
  {
    q: 'Can I build a house in Faisal Hills while living abroad?',
    a: 'Yes, and a significant share of construction in Faisal Hills is for owners living overseas. What matters is having a builder who works to a published rate, pays out against construction milestones rather than the calendar, and sends dated evidence of progress you can check yourself.',
  },
  {
    q: 'How do I know the work is actually being done?',
    a: 'Dated progress photographs on a regular schedule, and a live video walkthrough from your plot whenever you ask for one. You should also insist on photographs of the steel reinforcement before every concrete pour — once concrete is set, nothing underneath can be verified, so that single photo is the most important record of the whole build.',
  },
  {
    q: 'Do I need to give someone power of attorney?',
    a: 'Not necessarily for construction, but it is often needed for society transfers and documentation. Take independent legal advice before granting one, keep its scope as narrow as the task requires, and never grant an open-ended authority to anyone including us.',
  },
  {
    q: 'What if I cannot visit before construction starts?',
    a: 'You do not have to. We can walk the plot on a video call, share the society-approved map, and agree the specification in writing before anything begins. Many overseas owners never see the site until handover — which is exactly why the written specification and the milestone schedule matter so much.',
  },
  {
    q: 'What should I get in writing before paying anything?',
    a: 'The covered area the quote is based on, the rate per square foot, whether the boundary wall and external works are included, the payment schedule tied to milestones, the material specification naming actual brands and grades, and what happens if material prices rise mid-build.',
  },
];

export default function OverseasPage() {
  return (
    <div className="pt-20">
      <JsonLd
        schema={[
          webPage('WebPage', {
            name: 'Building From Abroad',
            description: 'How construction works for overseas Pakistani clients building in Faisal Hills.',
            path: '/overseas',
          }),
          breadcrumb([['Building From Abroad', '/overseas']]),
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(f => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'House construction for overseas clients',
            serviceType: 'Remote-supervised house construction',
            provider: { '@id': `${SITE_URL}#organization` },
            areaServed: { '@type': 'Place', name: 'Faisal Hills, Taxila, Pakistan' },
            audience: { '@type': 'Audience', audienceType: 'Overseas Pakistanis' },
          },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <img
          src="/assets/projects/faisal-jewel/night.webp"
          alt=""
          aria-hidden="true"
          width={1400}
          height={816}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 py-20 md:py-28">
          <span className="inline-block bg-burgundy px-4 py-2 rounded-full text-[12px] uppercase tracking-[0.2em] font-bold mb-6">
            For Overseas Pakistanis
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif leading-tight mb-6 max-w-3xl">
            Building at home while you live <span className="italic text-beige">abroad</span>
          </h1>
          <p className="text-lg text-paper/85 max-w-2xl leading-relaxed mb-8">
            The hard part is not the money. It is not being able to stand on your plot and see what
            is happening. Here is exactly how we handle that.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappLink('Hello Alammana, I live overseas and want to build in Faisal Hills. Please tell me how it works.')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-full text-sm uppercase tracking-widest font-bold text-center"
            >
              Message Us on WhatsApp
            </a>
            <Link
              href="/payment-plans"
              className="border border-paper/40 px-8 py-4 rounded-full text-sm uppercase tracking-widest font-bold text-center hover:bg-white/10 transition-colors"
            >
              See Our Published Rates
            </Link>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-20 md:py-24 bg-paper">
        <div className="max-w-[1600px] mx-auto px-4">
          <div className="max-w-2xl mb-14">
            <span className="text-burgundy text-xs uppercase tracking-widest font-bold mb-4 block">
              How We Work With You
            </span>
            <h2 className="text-3xl md:text-4xl font-serif italic mb-4">
              Four things that make distance manageable
            </h2>
            <p className="text-ink/65 leading-relaxed">
              None of this is unusual or expensive. It is simply what we would want if the plot were
              ours and we were four thousand kilometres away from it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commitments.map(c => (
              <div key={c.title} className="rounded-3xl border border-sand/50 bg-white p-8">
                <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-beige text-burgundy mb-5">
                  {c.icon}
                </span>
                <h3 className="font-serif text-xl text-ink mb-3 leading-snug">{c.title}</h3>
                <p className="text-sm text-ink/65 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timezone + contact reality */}
      <section className="py-16 bg-beige/40">
        <div className="max-w-[1600px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="rounded-3xl bg-white border border-sand/50 p-8">
            <Clock size={22} className="text-burgundy mb-4" />
            <h3 className="font-serif text-lg mb-2">Pakistan is PKT (UTC+5)</h3>
            <p className="text-sm text-ink/65 leading-relaxed">
              That is 5 hours ahead of London, 1 ahead of Dubai, and 10 ahead of Toronto. Tell us
              your timezone and we will call at a sensible hour for you, not for us.
            </p>
          </div>
          <div className="rounded-3xl bg-white border border-sand/50 p-8">
            <MessageCircle size={22} className="text-burgundy mb-4" />
            <h3 className="font-serif text-lg mb-2">WhatsApp works everywhere</h3>
            <p className="text-sm text-ink/65 leading-relaxed">
              Voice notes, photographs and video calls on the number below — no international call
              charges and everything stays in one thread you can scroll back through.
            </p>
          </div>
          <div className="rounded-3xl bg-white border border-sand/50 p-8">
            <ShieldCheck size={22} className="text-burgundy mb-4" />
            <h3 className="font-serif text-lg mb-2">Verify us independently</h3>
            <p className="text-sm text-ink/65 leading-relaxed">
              Check the society NOC with the RDA yourself, and ask us for the approved map before you
              pay anything. We would rather you checked than took our word for it.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 md:py-24 bg-paper">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif italic mb-10">Questions overseas clients ask</h2>
          <div className="space-y-4">
            {faqs.map(f => (
              <details key={f.q} className="group rounded-2xl bg-white border border-sand/50 p-6 open:shadow-md transition-shadow">
                <summary className="cursor-pointer list-none font-serif text-lg md:text-xl text-ink flex items-start justify-between gap-4">
                  <span>{f.q}</span>
                  <span className="text-burgundy shrink-0 transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
                </summary>
                <p className="mt-4 text-ink/70 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section className="py-20 bg-beige/40">
        <div className="max-w-[1600px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif italic mb-5">Start the conversation</h2>
            <p className="text-ink/65 leading-relaxed mb-8 max-w-md">
              Tell us where you are, which block your plot is in, and roughly when you want to build.
              We will come back with the rate for your block and what the schedule would look like.
            </p>
            <div className="space-y-3">
              <a href={`tel:${CONTACT.phoneHref}`} className="flex items-center gap-2 text-burgundy font-bold">
                {CONTACT.phoneDisplay} <ArrowRight size={15} />
              </a>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 text-burgundy font-bold">
                {CONTACT.email} <ArrowRight size={15} />
              </a>
            </div>
          </div>
          <div className="bg-white rounded-3xl border border-sand/40 p-8 md:p-10">
            <LeadForm
              subjectPrefix="Overseas Enquiry"
              context="Building from abroad"
              interests={[
                'Build on my plot — I live overseas',
                'Buy a plot — I live overseas',
                'Apartment / shop investment',
                'Other',
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
