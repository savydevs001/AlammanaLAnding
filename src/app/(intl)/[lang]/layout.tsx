import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond, Noto_Nastaliq_Urdu, Noto_Kufi_Arabic } from 'next/font/google';
import '../../../index.css';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import WhatsAppFloat from '../../../components/WhatsAppFloat';
import { PREFIXED_LOCALES, LOCALE_META, isLocale, Locale } from '../../../lib/i18n';
import { SITE_URL } from '../../../lib/seo';
import { organizationSchema } from '../../../lib/schema';

/**
 * Root layout for the prefixed locales.
 *
 * This is a SECOND root layout, paired with `(en)/layout.tsx` via route groups.
 * Next.js allows one `<html>` per tree, and a nested layout cannot change the
 * `lang` or `dir` attribute on it — which is exactly what Urdu and Arabic need.
 * Static export rules out the built-in i18n routing (it wants a server), so two
 * roots is the only way to get a correct `<html lang="ur" dir="rtl">` into the
 * pre-rendered HTML rather than patching it with JavaScript after paint.
 *
 * English stays at the bare paths under `(en)` so the URLs already indexed by
 * Google and Bing do not move.
 */

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['300', '400', '500', '600', '700'],
  style: ['italic', 'normal'],
  display: 'swap',
});

/**
 * Nastaliq is a very large face. Only the weights actually used are requested,
 * and `display: 'swap'` means the page is readable in the fallback while it
 * arrives rather than blocking on a font download over a Pakistani mobile
 * connection. Each locale loads only its own script — an Arabic reader never
 * downloads Nastaliq, and an English reader downloads neither.
 */
const notoUrdu = Noto_Nastaliq_Urdu({
  subsets: ['arabic'],
  variable: '--font-urdu',
  weight: ['400', '600'],
  display: 'swap',
});
const notoArabic = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  variable: '--font-arabic',
  weight: ['400', '700'],
  display: 'swap',
});

export function generateStaticParams() {
  return PREFIXED_LOCALES.map(lang => ({ lang }));
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: '/assets/icon-192.png',
    shortcut: '/assets/icon-192.png',
    apple: '/assets/icon-192.png',
  },
  robots: { index: true, follow: true },
};

export default async function IntlRootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : 'ur';
  const meta = LOCALE_META[locale];

  const scriptFont = locale === 'ur' ? notoUrdu.variable : notoArabic.variable;
  const scriptClass = locale === 'ur' ? 'font-urdu' : 'font-arabic';

  return (
    <html
      lang={meta.htmlLang}
      dir={meta.dir}
      className={`${inter.variable} ${cormorant.variable} ${scriptFont}`}
    >
      <head>
        {/* The lead form posts to the ERP intake API on a different origin.
            Warming the connection here means the handshake is already done by
            the time someone presses Send. */}
        <link rel="preconnect" href="https://api.alammana.pk" crossOrigin="" />
      </head>
      <body className={`bg-paper text-ink font-sans antialiased ${scriptClass}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema(meta.htmlLang)),
          }}
        />
        <Navbar />
        <main className="pb-20 md:pb-0">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
