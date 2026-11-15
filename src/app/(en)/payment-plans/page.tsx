import type { Metadata } from 'next';
import PaymentPlansClient from './PaymentPlansClient';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://alammana.pk';

export const metadata: Metadata = {
  title: 'Faisal Hills Construction Rates',
  description:
    'Download our Faisal Hills construction rates — gray structure and fully finished house prices for Block A, B, C, D and the Executive Block.',
  keywords: [
    'Faisal Hills payment plan',
    'Faisal Hills installments',
    'Faisal Hills construction rates',
    'gray structure rates Faisal Hills',
    'finished house price Faisal Hills',
    'Faisal Hills Block A payment plan',
    'Faisal Hills Block B payment plan',
    'Faisal Hills Block C payment plan',
    'Faisal Hills Block D payment plan',
    'Faisal Hills Executive Block',
    'house construction cost Taxila',
    'construction installment plan Islamabad',
  ],
  alternates: {
    canonical: '/payment-plans',
  },
  openGraph: {
    title: 'Faisal Hills Payment Plans & Construction Rates | Alammana Developers',
    description:
      'Official gray structure and finished house payment plans for every block of Faisal Hills. Preview online or download the PDF rate lists.',
    url: '/payment-plans',
    type: 'website',
    images: [{ url: '/assets/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/assets/og-image.jpg'],
  },
};

// FAQ + ItemList + Service structured data for the payment plans page
const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteUrl}/payment-plans#service`,
    name: 'Faisal Hills House Construction Packages & Milestone Payment Plans',
    serviceType: 'Residential Construction, Turnkey Building, and Grey Structure Contracting',
    description:
      'Milestone-based installment schedules and fixed-rate construction payment plans for gray structure and fully finished homes across Faisal Hills, Taxila, and Islamabad.',
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      '@id': `${siteUrl}#organization`,
      name: 'Alammana Developers',
      url: siteUrl,
      telephone: '+923377503111',
    },
    areaServed: [
      { '@type': 'Place', name: 'Faisal Hills' },
      { '@type': 'City', name: 'Taxila' },
      { '@type': 'City', name: 'Rawalpindi' },
      { '@type': 'City', name: 'Islamabad' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Faisal Hills Official Construction Packages & Payment Schedules',
      itemListElement: [
        {
          '@type': 'Offer',
          name: '5 Marla Gray Structure Package (Faisal Hills)',
          description:
            '2,300 sq ft covered area (G+1+Mumty). 30% down payment (from PKR 40.65 Lacs), 1.5 years installment duration.',
          price: '13550000',
          priceCurrency: 'PKR',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            priceCurrency: 'PKR',
            minPrice: '13550000',
            maxPrice: '18050000',
          },
        },
        {
          '@type': 'Offer',
          name: '5 Marla Fully Finished Turnkey Home (Faisal Hills)',
          description:
            '2,300 sq ft covered area (G+1+Mumty). 20% down payment (from PKR 36.30 Lacs), 2 years installment duration across Executive, Premium, and Luxury tiers.',
          price: '18150000',
          priceCurrency: 'PKR',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            priceCurrency: 'PKR',
            minPrice: '18150000',
            maxPrice: '31200000',
          },
        },
        {
          '@type': 'Offer',
          name: '8 Marla Construction Package (Faisal Hills)',
          description:
            '3,200 sq ft covered area (G+1+Mumty). Gray structure from PKR 1.90 Cr; Turnkey finished villa from PKR 2.54 Cr.',
          price: '19000000',
          priceCurrency: 'PKR',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            priceCurrency: 'PKR',
            minPrice: '19000000',
            maxPrice: '43800000',
          },
        },
        {
          '@type': 'Offer',
          name: '10 Marla Executive Villa Package (Faisal Hills)',
          description:
            '4,200 sq ft covered area (G+1+Mumty · 35×70). Gray structure from PKR 2.37 Cr; Turnkey finished villa from PKR 3.21 Cr.',
          price: '23700000',
          priceCurrency: 'PKR',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            priceCurrency: 'PKR',
            minPrice: '23700000',
            maxPrice: '53300000',
          },
        },
        {
          '@type': 'Offer',
          name: '1 Kanal Signature Estate Package (Faisal Hills)',
          description:
            '6,500 sq ft covered area (G+1+Mumty · 50×90). Gray structure from PKR 3.715 Cr; Turnkey finished estate from PKR 5.065 Cr.',
          price: '37150000',
          priceCurrency: 'PKR',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            priceCurrency: 'PKR',
            minPrice: '37150000',
            maxPrice: '79500000',
          },
        },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the difference between gray structure and finished house rates in Faisal Hills?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gray structure covers the complete building shell — foundations, walls, roof, and plaster — while a finished house includes all finishing work such as flooring, paint, woodwork, bathrooms, and electrical fittings. Alammana Developers publishes separate payment plans for both, for every block of Faisal Hills.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Alammana Developers offer installment plans for construction in Faisal Hills?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Our payment plans are milestone-based installment schedules, so you pay in stages as construction of your house in Faisal Hills progresses. Download the PDF plan for your block to see the full schedule.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which Faisal Hills blocks do the payment plans cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We publish construction payment plans for Block A, Block B, Block C, Block D, and the Executive Block of Faisal Hills, Taxila.',
        },
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Payment Plans', item: `${siteUrl}/payment-plans` },
    ],
  },
];

export default function PaymentPlans() {
  return (
    <>
      {structuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
      <PaymentPlansClient />
    </>
  );
}
