import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import '../index.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-serif', weight: ['300', '400', '500', '600', '700'], style: ['italic', 'normal'] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

// Comprehensive JSON-LD Structured Data
const structuredData = [
  // Organization/LocalBusiness Schema
  {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness', 'RealEstateAgent'],
    '@id': `${siteUrl}#organization`,
    name: 'Alammana Developers',
    alternateName: 'Al Ammana Developers',
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/assets/icon-512.png`,
      width: 512,
      height: 512
    },
    image: `${siteUrl}/assets/og-image.jpg`,
    description: 'Premium Faisal Hills and Faisal Town real estate development, architecture, and luxury construction in Islamabad. Specializing in luxury homes, property development, and strategic real estate marketing.',
    foundingDate: '2015',
    industry: 'Real Estate Development',
    areaServed: [
      {
        '@type': 'Place',
        name: 'Faisal Hills'
      },
      {
        '@type': 'Place',
        name: 'Faisal Town'
      },
      {
        '@type': 'Place',
        name: 'Islamabad'
      },
      {
        '@type': 'Country',
        name: 'Pakistan'
      }
    ],
    serviceType: [
      'Real Estate Development',
      'Luxury Construction',
      'Architectural Planning',
      'Property Marketing',
      'Faisal Hills Development',
      'Faisal Town Properties'
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Office No. C-3, Lower Ground Floor, Vertical Four, Near Arch Monument, Main Boulevard, A Block',
      addressLocality: 'Faisal Hills, Taxila',
      addressRegion: 'Rawalpindi, Punjab',
      addressCountry: 'PK'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.7294,
      longitude: 73.0931
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+92-335-8078262',
        contactType: 'customer service',
        areaServed: 'PK',
        availableLanguage: 'English'
      },
      {
        '@type': 'ContactPoint',
        email: 'rabta@alammana.pk',
        contactType: 'customer service',
        areaServed: 'PK',
        availableLanguage: 'English'
      }
    ],
    sameAs: [
      'https://www.facebook.com/alammana.pk',
      'https://www.instagram.com/alammanapk/',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Real Estate Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Construction Development',
            description: 'From ground-breaking to final finishing, we manage the entire construction lifecycle with precision.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Architectural Planning',
            description: 'Bespoke designs that combine modern luxury with the natural landscape of Islamabad.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Real Estate Marketing',
            description: 'Strategic placement and marketing for major developments like Faisal Hills.'
          }
        }
      ]
    },
    // NOTE: no aggregateRating here on purpose. Review markup must reflect
    // real, verifiable reviews shown on the page — inventing one risks a
    // Google manual action. Add it back only when genuine reviews are live.
    priceRange: '$$'
  },

  // WebSite Schema
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}#website`,
    url: siteUrl,
    name: 'Alammana Developers',
    alternateName: 'Al Ammana Developers',
    description: 'Faisal Hills Real Estate & Luxury Construction in Islamabad',
    publisher: {
      '@id': `${siteUrl}#organization`
    },
    // No SearchAction — the site has no /search page, and advertising one
    // that 404s is worse than omitting it.
    inLanguage: 'en-PK'
  },

  // Place Schema for Faisal Hills Location
  // NOTE: the Place schema for Faisal Hills now lives on /societies/faisal-hills,
  // and each page emits its own BreadcrumbList. Duplicating either one globally
  // gave Google two conflicting copies on every page, so both were removed here.
];

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
    url: new URL('/', process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
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
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="bg-paper text-ink font-sans antialiased">
        {structuredData.map((data, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))}
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
