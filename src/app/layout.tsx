import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import '../index.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
      url: `${siteUrl}/assets/logo.png`,
      width: 1200,
      height: 1200
    },
    description: 'Premium Faisal Hills and Faisal Town real estate development, architecture, and luxury construction in Islamabad. Specializing in luxury homes, property development, and strategic real estate marketing.',
    foundingDate: '2020',
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
      streetAddress: 'Allah hu chowk',
      addressLocality: 'Faisal Hills',
      addressRegion: 'Islamabad',
      postalCode: '44000',
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
        telephone: '+92-XXX-XXXXXXX',
        contactType: 'customer service',
        areaServed: 'PK',
        availableLanguage: 'English'
      },
      {
        '@type': 'ContactPoint',
        email: 'info@alammana.com',
        contactType: 'customer service',
        areaServed: 'PK',
        availableLanguage: 'English'
      }
    ],
    sameAs: [
      'https://www.facebook.com/alammana',
      'https://www.instagram.com/alammana',
      'https://www.linkedin.com/company/alammana-developers',
      // Team member social links will be added here later
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '50',
      bestRating: '5',
      worstRating: '1'
    },
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
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    },
    inLanguage: 'en-PK'
  },

  // Place Schema for Faisal Hills Location
  {
    '@context': 'https://schema.org',
    '@type': 'Place',
    '@id': `${siteUrl}#place`,
    name: 'Faisal Hills',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Islamabad',
      addressRegion: 'Islamabad Capital Territory',
      addressCountry: 'PK'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.7294,
      longitude: 73.0931
    },
    description: 'Premium residential area in Islamabad known for luxury properties and modern development.'
  },

  // BreadcrumbList Schema
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl
      }
    ]
  }
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
      </body>
    </html>
  );
}
