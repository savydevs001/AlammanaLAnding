import type { Metadata } from 'next';
import { pageMeta, SITE_URL } from '../../../lib/seo';
import PackagesClient from './PackagesClient';

export const metadata: Metadata = pageMeta({
  title: 'Faisal Hills House Construction Packages | Alammana Developers',
  absoluteTitle: true,
  description:
    'Explore complete house construction packages for 5 Marla, 10 Marla and 1 Kanal plots in Faisal Hills, B-17, and Islamabad. Grey structure packages from PKR 1.35 Cr and turnkey Spanish & modern homes with 24/7 live site cameras.',
  path: '/packages',
  keywords: [
    'Faisal Hills house construction packages',
    'house construction packages islamabad',
    'grey structure packages islamabad',
    'turnkey house packages faisal hills',
    '5 marla house construction cost faisal hills',
    '10 marla house construction cost islamabad',
    'spanish style homes islamabad',
    'Alammana Developers',
  ],
});

export default function Page() {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      '@id': `${SITE_URL}/packages#product`,
      name: 'Faisal Hills House Construction Packages',
      description:
        'Engineered residential house construction packages in Faisal Hills, Taxila and Islamabad. Turnkey and grey structure packages starting from PKR 1.35 Crore.',
      image: `${SITE_URL}/assets/constructions/facade-white-wood.webp`,
      category: 'Residential Construction Services',
      url: `${SITE_URL}/packages`,
      brand: {
        '@type': 'Brand',
        name: 'Alammana Developers',
      },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'PKR',
        lowPrice: '13500000',
        highPrice: '45000000',
        offerCount: '4',
        offers: [
          {
            '@type': 'Offer',
            name: '5 Marla Grey Structure Package',
            price: '13500000',
            priceCurrency: 'PKR',
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/packages#5-marla-grey`,
          },
          {
            '@type': 'Offer',
            name: '5 Marla Turnkey Finishing Package',
            price: '24500000',
            priceCurrency: 'PKR',
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/packages#5-marla-turnkey`,
          },
          {
            '@type': 'Offer',
            name: '10 Marla Executive Villa Package',
            price: '42500000',
            priceCurrency: 'PKR',
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/packages#10-marla-luxury`,
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
          name: 'What is the starting price for a 5 Marla house construction package in Faisal Hills?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A standard double-storey 5 Marla grey structure package in Faisal Hills starts from approximately PKR 1.35 Crore. A full turnkey package with luxury Spanish or modern finishing ranges from PKR 2.45 Crore upwards.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I customize the architectural style of my package?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Alammana Developers designs custom architectural elevations including Spanish-style villas, contemporary modern villas, and sleek minimalist designs tailored to society building bye-laws.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are site cameras and client portal access included in all packages?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Every client receives dedicated 24/7 high-definition camera access and a login to our client tracking portal.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Packages', item: `${SITE_URL}/packages` },
      ],
    },
  ];

  return (
    <>
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <PackagesClient />
    </>
  );
}
