import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '../../../components/JsonLd';
import LeadForm from '../../../components/LeadForm';
import { pageMeta, breadcrumb, webPage, SITE_URL } from '../../../lib/seo';
import { whatsappLink, CONTACT } from '../../../lib/contact';
import {
  Video, LayoutDashboard, FileCheck2, Clock, ShieldCheck, ArrowRight,
  MessageCircle, HardHat, Package, ListChecks, Users, ScrollText,
} from 'lucide-react';

/**
 * Overseas Pakistanis are the highest-value buyer for a construction firm, and
 * their fear is specific: they cannot stand on the plot and watch the work.
 *
 * Alammana answers that with technology rather than reassurance — 24/7 site
 * cameras and a client portal that tracks stages, materials, inventory,
 * responsible staff and documents. That is genuinely rare in Taxila and is the
 * strongest argument the company has for this audience, so the page leads with
 * it instead of with adjectives.
 */

export const metadata: Metadata = pageMeta({
  title: 'Building From Abroad',
  description:
    'Build in Faisal Hills from anywhere: 24/7 live site cameras, a client portal tracking every stage, material and document, and full documentation handling for overseas Pakistanis.',
  path: '/overseas',
  keywords: [
    'overseas Pakistani construction',
    'build house in Pakistan from abroad',
    'live camera construction Pakistan',
    'construction tracking portal Pakistan',
    'Faisal Hills overseas investor',
    'remote house construction Taxila',
    'power of attorney property Pakistan',
  ],
});

const capabilities = [
  {
    icon: <Video size={22} />,
    title: '24/7 live camera on your site',
    body: 'A camera on your plot that you can open at any hour from any country. Not a photo someone chose to send you — the live feed, whenever you want to look.',
    tag: 'Live',
  },
  {
    icon: <LayoutDashboard size={22} />,
    title: 'Your own project portal',
    body: 'A private dashboard for your build. Every stage, every material, every person working on it, updated as the work happens rather than when you ask.',
    tag: 'Portal',
  },
  {
    icon: <ScrollText size={22} />,
    title: 'We handle the documentation',
    body: 'Society transfers, approvals and paperwork managed end to end. Where clients grant a power of attorney we act on it — we do this regularly and know the process.',
    tag: 'Legal',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Published rates, milestone payments',
    body: 'Our block-wise rates are public and downloadable, and you pay against work that already exists on your plot — never months ahead of it.',
    tag: 'Money',
  },
];

const portalTracks = [
  { icon: <ListChecks size={18} />, t: 'Stages completed', d: 'What is finished, signed off and behind you.' },
  { icon: <HardHat size={18} />, t: 'Work in progress', d: 'The exact step being carried out on site right now.' },
  { icon: <ArrowRight size={18} />, t: 'What comes next', d: 'The next stage in line, so nothing is a surprise.' },
  { icon: <Users size={18} />, t: 'Who is responsible', d: 'The person accountable for each stage, by name.' },
  { icon: <Package size={18} />, t: 'Materials used', d: 'What went into your house — brand and grade, not "good quality".' },
  { icon: <Package size={18} />, t: 'Inventory on site', d: 'What has been delivered and what is still on order.' },
  { icon: <FileCheck2 size={18} />, t: 'Legal documents', d: 'Approved map, society paperwork and approvals in one place.' },
  { icon: <Video size={18} />, t: 'Live camera feed', d: 'The site as it looks this second.' },
];

const faqs = [
  {
    q: 'Can I really watch my construction site live from another country?',
    a: 'Yes. Alammana installs a camera on your site and gives you round-the-clock access to the feed from wherever you are. You are not relying on photographs someone selected before sending — you can open the feed unannounced, at any hour, and see exactly what is happening on your plot.',
  },
  {
    q: 'What can I see in the client portal?',
    a: 'Stages completed, the step currently under way, what comes next, the person responsible for each stage by name, the materials actually used with brand and grade, inventory delivered and pending, your legal documents, and the live camera feed. It is updated as the work happens rather than when you chase for an update.',
  },
  {
    q: 'Can you handle the paperwork if I cannot come to Pakistan?',
    a: 'Yes. We handle society transfers, approvals and construction documentation end to end, and where a client grants a power of attorney we act on it directly. We do this regularly for overseas clients and are familiar with what each society and authority requires.',
  },
  {
    q: 'Is it safe to give a power of attorney?',
    a: 'It is a normal instrument for exactly this situation, and without one someone in Pakistan cannot sign on your behalf. Take independent legal advice, keep the scope limited to the specific transactions it needs to cover rather than granting an open-ended authority, and set an expiry. We would give you the same advice about any firm, including us.',
  },
  {
    q: 'How do I know the right materials are actually being used?',
    a: 'The portal records the materials going into your build, and the live camera lets you see deliveries and work in progress yourself. The moment that matters most is steel fixing immediately before a concrete pour — once concrete sets, nothing underneath can be verified again, so that is the point to look at the feed.',
  },
  {
    q: 'What should I get in writing before paying anything?',
    a: 'The covered area the quote is based on, the rate per square foot, whether the boundary wall and external works are included, the payment schedule tied to construction milestones, the material specification naming actual brands and grades, and what happens if material prices rise mid-build.',
  },
];

export default function OverseasPage() {
  return (
    <div className="pt-20">
      <JsonLd
        schema={[
          webPage('WebPage', {
            name: 'Building From Abroad',
            description:
              'Live site cameras, a client tracking portal and full documentation handling for overseas clients building in Faisal Hills.',
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
            name: 'Remote-supervised house construction for overseas clients',
            serviceType: 'House construction with live site monitoring and client portal',
            provider: { '@id': `${SITE_URL}#organization` },
            areaServed: { '@type': 'Place', name: 'Faisal Hills, Taxila, Pakistan' },
            audience: { '@type': 'Audience', audienceType: 'Overseas Pakistanis' },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Remote client services',
              itemListElement: capabilities.map(c => ({
                '@type': 'Offer',
                itemOffered: { '@type': 'Service', name: c.title, description: c.body },
              })),
            },
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
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="relative max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 py-20 md:py-28">
          <span className="inline-flex items-center gap-2 bg-burgundy px-4 py-2 rounded-full text-[12px] uppercase tracking-[0.2em] font-bold mb-6">
            <Video size={14} /> For Overseas Pakistanis
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif leading-tight mb-6 max-w-3xl">
            Watch your house being built — <span className="italic text-beige">live, from anywhere</span>
          </h1>
          <p className="text-lg text-paper/85 max-w-2xl leading-relaxed mb-4">
            The hard part of building from abroad was never the money. It was not being able to stand
            on your plot and see what is actually happening.
          </p>
          <p className="text-lg text-paper/85 max-w-2xl leading-relaxed mb-8">
            So we removed that problem. A <strong className="text-beige">24/7 camera on your site</strong>,
            and a <strong className="text-beige">private portal</strong> tracking every stage, material
            and document — open it at 3am from Toronto if you want to.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappLink('Hello Alammana, I live overseas and want to build in Faisal Hills. Please tell me about the live camera and client portal.')}
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

      {/* Positioning */}
      <section className="py-16 bg-burgundy text-paper">
        <div className="max-w-[1600px] mx-auto px-4 text-center max-w-4xl">
          <p className="text-xl md:text-2xl font-serif italic leading-relaxed">
            Most builders in Taxila will send you a photograph when you ask for one. We think that is
            the wrong way round — the information about your house should already be waiting for you.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 md:py-24 bg-paper">
        <div className="max-w-[1600px] mx-auto px-4">
          <div className="max-w-2xl mb-14">
            <span className="text-burgundy text-xs uppercase tracking-widest font-bold mb-4 block">
              How We Work With You
            </span>
            <h2 className="text-3xl md:text-4xl font-serif italic mb-4">
              Distance stops being the risk
            </h2>
            <p className="text-ink/65 leading-relaxed">
              Four things that let you run a build in Faisal Hills from another continent without
              taking anyone&apos;s word for anything.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map(c => (
              <div key={c.title} className="rounded-3xl border border-sand/50 bg-white p-8">
                <div className="flex items-center justify-between mb-5">
                  <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-beige text-burgundy">
                    {c.icon}
                  </span>
                  <span className="text-[12px] uppercase tracking-widest font-bold text-burgundy/60">
                    {c.tag}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-ink mb-3 leading-snug">{c.title}</h3>
                <p className="text-sm text-ink/65 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The portal in detail */}
      <section className="py-20 md:py-24 bg-ink text-paper">
        <div className="max-w-[1600px] mx-auto px-4">
          <div className="max-w-2xl mb-14">
            <span className="text-beige text-xs uppercase tracking-widest font-bold mb-4 block">
              Your Project Portal
            </span>
            <h2 className="text-3xl md:text-4xl font-serif italic mb-4">
              Everything about your house, in one place
            </h2>
            <p className="text-paper/70 leading-relaxed mb-4">
              Not a monthly summary email. A live record of your build that you can open whenever the
              question occurs to you.
            </p>
            <p className="text-beige text-sm leading-relaxed">
              <strong>This is standard on every Alammana project</strong> — not an overseas package.
              Clients in Taxila use the camera and portal as much as clients in Dubai do. It simply
              matters most when you cannot drive to the site yourself.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {portalTracks.map(p => (
              <div key={p.t} className="rounded-2xl border border-paper/15 p-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-paper/10 text-beige mb-4">
                  {p.icon}
                </span>
                <h3 className="font-serif text-lg text-beige mb-1.5 leading-snug">{p.t}</h3>
                <p className="text-sm text-paper/60 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-paper/55 mt-10 max-w-2xl leading-relaxed">
            Portal access is set up when your project begins. Ask us for a walkthrough before you
            commit to anything — we would rather show you than describe it.
          </p>
        </div>
      </section>

      {/* Documentation */}
      <section className="py-20 bg-beige/40">
        <div className="max-w-[1600px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-burgundy text-xs uppercase tracking-widest font-bold mb-4 block">
              Documentation
            </span>
            <h2 className="text-3xl md:text-4xl font-serif italic mb-5">
              We handle the paperwork you cannot be here for
            </h2>
            <p className="text-ink/70 leading-relaxed mb-5">
              Society transfers, map approvals, construction permissions and handover documentation
              managed end to end. Where a client grants us a power of attorney we act on it directly —
              we do this regularly for overseas owners and know what each society and authority
              requires.
            </p>
            <p className="text-ink/70 leading-relaxed">
              Every document is filed in your portal as it is completed, so you can see the actual
              paperwork rather than being told it has been dealt with.
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-sand/50 p-8">
            <h3 className="text-[12px] uppercase tracking-widest font-bold text-burgundy mb-5">
              Our advice on power of attorney
            </h3>
            <p className="text-sm text-ink/70 leading-relaxed mb-4">
              A power of attorney is the normal instrument for this situation — without one, nobody in
              Pakistan can sign on your behalf. That said, we would tell you the same three things
              about any firm, including us:
            </p>
            <ul className="space-y-3 text-sm text-ink/70">
              {[
                'Take independent legal advice before granting one.',
                'Keep the scope limited to the specific transactions it needs to cover, rather than granting open-ended authority.',
                'Set an expiry date on it.',
              ].map(t => (
                <li key={t} className="flex items-start gap-3">
                  <FileCheck2 size={16} className="text-burgundy mt-0.5 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Practicalities */}
      <section className="py-16 bg-paper">
        <div className="max-w-[1600px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="rounded-3xl bg-white border border-sand/50 p-8">
            <Clock size={22} className="text-burgundy mb-4" />
            <h3 className="font-serif text-lg mb-2">Pakistan is PKT (UTC+5)</h3>
            <p className="text-sm text-ink/65 leading-relaxed">
              5 hours ahead of London, 1 ahead of Dubai, 10 ahead of Toronto. Tell us your timezone
              and we will call at a sensible hour for you, not for us. The camera and portal do not
              keep office hours.
            </p>
          </div>
          <div className="rounded-3xl bg-white border border-sand/50 p-8">
            <MessageCircle size={22} className="text-burgundy mb-4" />
            <h3 className="font-serif text-lg mb-2">WhatsApp works everywhere</h3>
            <p className="text-sm text-ink/65 leading-relaxed">
              Voice notes, photographs and video calls on the number below — no international call
              charges, and everything stays in one thread you can scroll back through.
            </p>
          </div>
          <div className="rounded-3xl bg-white border border-sand/50 p-8">
            <ShieldCheck size={22} className="text-burgundy mb-4" />
            <h3 className="font-serif text-lg mb-2">Verify us independently</h3>
            <p className="text-sm text-ink/65 leading-relaxed">
              Check the society NOC with the RDA yourself, and ask for the approved map before you pay
              anything. We would rather you checked than took our word for it.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 md:py-24 bg-beige/30">
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
      <section className="py-20 bg-paper">
        <div className="max-w-[1600px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif italic mb-5">Ask for a portal walkthrough</h2>
            <p className="text-ink/65 leading-relaxed mb-8 max-w-md">
              Tell us where you are and which block your plot is in. We will show you the portal and
              the camera setup on a video call before you commit to anything.
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
              context="Building from abroad — portal & live camera"
              interests={[
                'Build on my plot — I live overseas',
                'See a portal / camera walkthrough',
                'Buy a plot — I live overseas',
                'Documentation & power of attorney',
                'Other',
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
