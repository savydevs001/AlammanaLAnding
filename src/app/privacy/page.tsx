import type { Metadata } from 'next';
import Link from 'next/link';
import { CONTACT } from '../../lib/contact';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Alammana Developers handles the personal information you share with us through this website, WhatsApp, email or phone.',
  alternates: { canonical: '/privacy' },
  robots: { index: true, follow: true },
};

const updated = 'August 2026';

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 bg-paper">
      <div className="max-w-3xl mx-auto px-4">
        <span className="text-burgundy text-xs uppercase tracking-[0.4em] font-bold mb-6 block">Legal</span>
        <h1 className="text-5xl md:text-6xl font-serif italic mb-4">Privacy Policy</h1>
        <p className="text-sm text-ink/50 mb-16">Last updated: {updated}</p>

        <div className="space-y-12 text-ink/80 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-burgundy">The short version</h2>
            <p>
              This website does not ask you to create an account, and it does not run advertising
              trackers. The only personal information we hold is what you choose to send us when you
              enquire about a property or construction project — and we use it solely to reply to you.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-burgundy">What we collect</h2>
            <p>
              When you submit the enquiry form on this site, your details are not stored on our
              servers. The form composes a message in your own WhatsApp or email application, which
              you then choose to send. That means:
            </p>
            <ul className="space-y-2 pl-5 list-disc marker:text-burgundy">
              <li>Nothing is transmitted to us until you press send in WhatsApp or your email app.</li>
              <li>
                Once you send it, we receive whatever you included — typically your name, phone
                number, optional email address, and your message.
              </li>
              <li>
                Messages sent over WhatsApp are also handled by WhatsApp under{' '}
                <a
                  href="https://www.whatsapp.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-burgundy underline underline-offset-2"
                >
                  their own privacy policy
                </a>
                .
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-burgundy">How we use it</h2>
            <p>
              We use your contact details to answer your enquiry, share payment plans or rate lists,
              arrange site visits, and follow up about the specific property or construction service
              you asked about. We do not sell your information, and we do not share it with third
              parties for marketing.
            </p>
            <p>
              Where you have enquired about a partner project (for example Faisal Jewel or J7
              Emporium), we may need to share your name and contact number with that project&apos;s
              developer in order to register your booking. We will tell you when this is necessary.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-burgundy">Embedded maps</h2>
            <p>
              Some pages embed Google Maps to show a project or plot location. When a map loads,
              Google may receive your IP address and set cookies under its own policies. If you would
              rather avoid this, you can block third-party content in your browser settings — the
              rest of the page will still work.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-burgundy">Hosting</h2>
            <p>
              This site is a static website hosted on Cloudflare Pages. Cloudflare processes standard
              server request data (such as IP address and browser type) to serve pages and protect
              against abuse.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-burgundy">Your choices</h2>
            <p>
              You can ask us at any time to tell you what contact details we hold for you, to correct
              them, or to delete them and stop contacting you. Write to{' '}
              <a href={`mailto:${CONTACT.email}`} className="text-burgundy underline underline-offset-2 font-semibold">
                {CONTACT.email}
              </a>{' '}
              and we will action it.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-burgundy">Contact</h2>
            <p>
              Alammana Developers — {CONTACT.addressLine}, Islamabad, Pakistan.
              <br />
              Email:{' '}
              <a href={`mailto:${CONTACT.email}`} className="text-burgundy underline underline-offset-2">
                {CONTACT.email}
              </a>
              <br />
              Phone:{' '}
              <a href={`tel:${CONTACT.phoneHref}`} className="text-burgundy underline underline-offset-2">
                {CONTACT.phoneDisplay}
              </a>
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
