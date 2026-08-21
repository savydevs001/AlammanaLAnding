import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import '../../index.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WhatsAppFloat from '../../components/WhatsAppFloat';
import { organizationSchema } from '../../lib/schema';
import { SITE_URL } from '../../lib/seo';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-serif', weight: ['300', '400', '500', '600', '700'], style: ['italic', 'normal'], display: 'swap' });

/**
 * Single source for the site origin — `lib/seo.ts`, which falls back to the
 * live domain rather than localhost.
 *
 * This line used to read `process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'`.
 * Cloudflare Pages does not set that variable, so every English page shipped a
 * `<link rel="canonical" href="http://localhost:3000/...">` to production —
 * telling Google and Bing that the canonical version of each page was an
 * address they cannot reach. The `/ur` and `/ar` pages were unaffected because
 * they already resolved through `SITE_URL`, which is what made the discrepancy
 * visible. A localhost fallback in code that ships is not a safe default.
 */
const siteUrl = SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Alammana Developers | Faisal Hills Real Estate & Luxury Construction Islamabad',
    template: '%s | Alammana Developers'
  },
  description: 'Alammana Developers delivers premium Faisal Hills and Faisal Town real estate, luxury construction, and strategic property development in Islamabad.',
  keywords: [
    'Al Ammana',
    'Al Ammana Developers',
    'Faisal Hills',
    'Faisal Town',
    'Faisal Hills real estate',
    'Faisal Town property',
    'Islamabad real estate',
    'luxury construction Pakistan',
    'Alammana Developers',
    'real estate Islamabad',
    'property development Faisal Hills',
    'luxury homes Islamabad',
    'construction company Pakistan',
    'architectural design Islamabad',
    'premium properties Faisal Town',
    'real estate marketing Islamabad',
    'Faisal Hills investment',
    'Islamabad luxury construction',
    'Pakistan real estate developers'
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  icons: {
    icon: '/assets/icon-192.png',
    shortcut: '/assets/icon-192.png',
    apple: '/assets/icon-192.png',
  },
  openGraph: {
    title: 'Alammana Developers — Faisal Hills Real Estate & Luxury Construction',
    description: 'Premium Faisal Hills and Faisal Town real estate development, architecture, and luxury construction in Islamabad.',
    url: new URL('/', siteUrl),
    siteName: 'Alammana Developers',
    type: 'website',
    images: [
      {
        url: '/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Alammana Developers — Faisal Hills construction and real estate in Taxila and Islamabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alammana Developers — Faisal Hills Real Estate & Luxury Construction',
    description: 'Premium Faisal Hills and Faisal Town real estate development in Islamabad, with luxury construction and architectural excellence.',
    images: ['/assets/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-PK" dir="ltr" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        {/* The lead form posts to the ERP intake API on a different origin.
            Warming the connection means the TLS handshake is already done by the
            time someone presses Send. */}
        <link rel="preconnect" href="https://api.alammana.pk" crossOrigin="" />
      </head>
      <body className="bg-paper text-ink font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema('en-PK')) }}
        />
        <Navbar />
        <main className="pb-20 md:pb-0">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
