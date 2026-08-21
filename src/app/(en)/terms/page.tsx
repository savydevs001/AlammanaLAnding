import type { Metadata } from 'next';
import JsonLd from '../../../components/JsonLd';
import { breadcrumb, pageMeta } from '../../../lib/seo';
import Link from 'next/link';
import { CONTACT } from '../../../lib/contact';

/**
 * Routed through `pageMeta` like every other page rather than hand-rolled.
 * The hand-written version was missing og:url, og:image and the hreflang
 * self-reference — the exact omissions `pageMeta` was written to make
 * impossible. English only: this is legal text and is not machine-translated,
 * so `alternatesFor` correctly lists it as x-default and nothing else.
 */
export const metadata: Metadata = pageMeta({
  title: 'Terms of Service',
  description:
    'Terms governing the use of the Alammana Developers website, including how prices, payment plans and partner project information should be treated.',
  path: '/terms',
});

const updated = 'August 2026';

export default function TermsOfService() {
  return (
    <div className="pt-32 pb-24 bg-paper">
      <JsonLd schema={[breadcrumb([['Terms of Service', '/terms']])]} />
      <div className="max-w-3xl mx-auto px-4">
        <span className="text-burgundy text-xs uppercase tracking-[0.4em] font-bold mb-6 block">Legal</span>
        <h1 className="text-5xl md:text-6xl font-serif italic mb-4">Terms of Service</h1>
        <p className="text-sm text-ink/50 mb-16">Last updated: {updated}</p>

        <div className="space-y-12 text-ink/80 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-burgundy">About this website</h2>
            <p>
              This website is operated by Alammana Developers, a real estate and construction firm
              working in Faisal Hills and Faisal Town, Taxila and Rawalpindi, and the wider Islamabad
              region. By using the site you accept the terms below.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-burgundy">Prices and payment plans are indicative</h2>
            <p>
              Construction rates, plot prices, unit prices and payment schedules shown on this site —
              including the downloadable rate lists on our{' '}
              <Link href="/payment-plans" className="text-burgundy underline underline-offset-2">
                payment plans page
              </Link>{' '}
              — are provided for general guidance. Construction and material costs move, and
              developer pricing changes without notice.
            </p>
            <p className="font-semibold text-ink">
              Nothing on this website is a binding offer, quotation, or contract. Always confirm the
              current figures with us in writing before making any payment or commitment.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-burgundy">Partner projects</h2>
            <p>
              Projects shown in our{' '}
              <Link href="/portfolio" className="text-burgundy underline underline-offset-2">
                portfolio
              </Link>{' '}
              — such as Faisal Jewel, J7 Emporium and 107 Plaza — are developed by third parties. We
              act as an authorised sales partner and identify the developer on each project page. We
              are not responsible for their construction quality, delivery timelines, approvals, or
              contractual terms; those remain matters between you and the developer.
            </p>
            <p>
              Details about these projects are compiled from developer and publicly available sources
              and are believed correct at the time of publication. Verify anything material with the
              developer and with the relevant authority before purchasing.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-burgundy">Do your own due diligence</h2>
            <p>
              Property investment carries risk. We do not provide financial or investment advice, and
              nothing here should be read as a guarantee of returns or of any price movement. Satisfy
              yourself independently as to the legal status, approvals and title of any property
              before you buy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-burgundy">Images and drawings</h2>
            <p>
              Renders, elevations, approved maps and photographs are illustrative. Actual finishes,
              layouts and dimensions may differ from what is shown. Where an image is a
              representative graphic rather than a photograph of the built structure, we will say so
              on request.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-burgundy">Intellectual property</h2>
            <p>
              The Alammana Developers name, logo and the original content of this site belong to
              Alammana Developers. Third-party project names and marks referenced on this site remain
              the property of their respective owners.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-burgundy">Governing law</h2>
            <p>
              These terms are governed by the laws of the Islamic Republic of Pakistan, and any
              dispute is subject to the jurisdiction of the courts of Rawalpindi/Islamabad.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-burgundy">Contact</h2>
            <p>
              Questions about these terms? Email{' '}
              <a href={`mailto:${CONTACT.email}`} className="text-burgundy underline underline-offset-2 font-semibold">
                {CONTACT.email}
              </a>{' '}
              or call{' '}
              <a href={`tel:${CONTACT.phoneHref}`} className="text-burgundy underline underline-offset-2 font-semibold">
                {CONTACT.phoneDisplay}
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-16 pt-10 border-t border-sand/40">
          <Link href="/" className="text-xs uppercase tracking-[0.2em] font-bold text-burgundy border-b border-burgundy pb-2">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
