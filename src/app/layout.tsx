import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import '../index.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-serif', weight: ['300', '400', '500', '600', '700'], style: ['italic', 'normal'] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Alammana Developers',
  url: siteUrl,
  logo: `${siteUrl}/assets/logo.png`,
  description: 'Premium Faisal Hills and Faisal Town real estate development, architecture, and luxury construction in Islamabad.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Allah hu chowk',
    addressLocality: 'Faisal Hills',
    addressRegion: 'Islamabad',
    postalCode: '44000',
    addressCountry: 'PK',
  },
  areaServed: ['Faisal Hills', 'Faisal Town', 'Islamabad', 'Pakistan'],
  sameAs: [
    'https://www.facebook.com/',
    'https://www.instagram.com/',
  ],
};

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
    icon: '/assets/logo.png',
    shortcut: '/assets/logo.png',
    apple: '/assets/logo.png',
  },
  openGraph: {
    title: 'Alammana Developers — Faisal Hills Real Estate & Luxury Construction',
    description: 'Premium Faisal Hills and Faisal Town real estate development, architecture, and luxury construction in Islamabad.',
    url: new URL('/', process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
    siteName: 'Alammana Developers',
    type: 'website',
    images: [
      {
        url: '/assets/logo.png',
        width: 1200,
        height: 1200,
        alt: 'Alammana Developers logo — Faisal Hills real estate and luxury construction',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alammana Developers — Faisal Hills Real Estate & Luxury Construction',
    description: 'Premium Faisal Hills and Faisal Town real estate development in Islamabad, with luxury construction and architectural excellence.',
    images: ['/assets/logo.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="bg-paper text-ink font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
