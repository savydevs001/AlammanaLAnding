import type { Metadata } from 'next';
import PaymentPlansClient from './PaymentPlansClient';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://alammana.pk';

export const metadata: Metadata = {
  title: 'Faisal Hills Payment Plans & Construction Rates | Gray Structure & Finished House Prices',
  description:
    'View and download the latest Alammana Developers payment plans for Faisal Hills. Gray structure construction rates and fully finished house prices for Block A, B, C, D and Executive Block — with easy installment options.',
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
  },
};

// FAQ + ItemList structured data for the payment plans page
const structuredData = [
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
