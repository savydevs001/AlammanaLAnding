import { SITE_URL } from './seo';

/**
 * Site-wide structured data, shared by both root layouts.
 *
 * It used to live inline in the English layout. Once a second root layout
 * existed for Urdu and Arabic, an inline copy meant two definitions of the same
 * organisation that would drift — and Google treats conflicting `@id`s on the
 * same entity as a reason to trust neither. One function, one `@id`, one truth.
 *
 * `inLanguage` is the only thing that varies per locale.
 */

/** Languages a caller can actually be served in. */
export type SchemaLanguage = string;

export function organizationSchema(inLanguage: SchemaLanguage = 'en-PK') {
  return [
    {
      '@context': 'https://schema.org',
      '@type': ['Organization', 'LocalBusiness', 'RealEstateAgent', 'GeneralContractor'],
      '@id': `${SITE_URL}#organization`,
      name: 'Alammana Developers',
      alternateName: [
        'Al Ammana Developers',
        'Alammana Developers',
        'Al Ammana',
        'Alammana.pk',
        'الامانہ ڈویلپرز',
        'الأمانة ديفلوبرز',
      ],
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/assets/icon-512.png`,
        width: 512,
        height: 512,
      },
      image: `${SITE_URL}/assets/og-image.jpg`,
      description:
        'Alammana Developers is the official real estate, architectural planning, and construction company based in the Islamabad-Rawalpindi region, focusing on societies like Faisal Hills, B-17 Multi Gardens, and Faisal Town. We offer turnkey residential construction packages from PKR 1.35 Cr (including Spanish-style homes), verified per-block plot rates, 24/7 live site camera monitoring, and client portal tracking.',
      foundingDate: '2015',
      telephone: ['+92-337-7503111', '+92-308-7750009'],
      email: 'rabta@alammana.pk',
      areaServed: [
        { '@type': 'Place', name: 'Faisal Hills' },
        { '@type': 'Place', name: 'Faisal Town' },
        { '@type': 'Place', name: 'B-17 Multi Gardens, Islamabad' },
        { '@type': 'Place', name: 'Taxila' },
        { '@type': 'Place', name: 'Rawalpindi' },
        { '@type': 'Place', name: 'Islamabad' },
        { '@type': 'Country', name: 'Pakistan' },
      ],
      knowsAbout: [
        'Faisal Hills property dealers',
        'Islamabad construction services',
        'Best house developers',
        'House on installments in Islamabad',
        'Taxila property investment',
        'Faisal Town real estate',
        'Real estate agents in Taxila',
        'Rawalpindi house builders',
        'Grey structure construction per sq ft',
        'Turnkey house building contracts',
        'Faisal Hills NOC and RDA approvals',
        'Faisal Town Phase 1 and Phase 2 plots',
        'DHA Gandhara investment'
      ],
      serviceType: [
        'Islamabad Construction Services',
        'House on Installments in Islamabad',
        'Faisal Hills Property Dealers',
        'Faisal Town Real Estate',
        'Best House Developers',
        'Turnkey House Construction',
        'Gray Structure Construction',
        'Property Marketing',
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress:
          'Office No. C-3, Lower Ground Floor, Vertical Four, Near Arch Monument, Main Boulevard, A Block',
        addressLocality: 'Faisal Hills, Taxila',
        addressRegion: 'Rawalpindi, Punjab',
        addressCountry: 'PK',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 33.7294, longitude: 73.0931 },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '19:00',
        },
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+92-337-7503111',
          contactType: 'customer service',
          areaServed: 'PK',
          availableLanguage: ['English', 'Urdu', 'Punjabi'],
        },
        {
          '@type': 'ContactPoint',
          telephone: '+92-308-7750009',
          contactType: 'sales',
          areaServed: 'PK',
          availableLanguage: ['English', 'Urdu', 'Punjabi'],
        },
        {
          '@type': 'ContactPoint',
          email: 'rabta@alammana.pk',
          contactType: 'customer service',
          areaServed: 'PK',
          availableLanguage: ['English', 'Urdu'],
        },
      ],
      currenciesAccepted: 'PKR',
      paymentAccepted: 'Cash, Bank Transfer, Cheque, Pay Order, Installment Plans',
      sameAs: [
        'https://alammana.com',
        'https://www.facebook.com/alammana.pk',
        'https://www.instagram.com/alammanapk/',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Construction and Real Estate Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Faisal Hills House Construction Packages',
              description:
                '5 Marla, 10 Marla and 1 Kanal turnkey and grey structure construction packages from PKR 1.35 Cr, with Spanish-style, contemporary, and modern minimalist architectural options.',
              url: `${SITE_URL}/packages`,
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'House Construction & Build Services',
              description:
                'Gray structure or fully finished houses, priced per square foot of covered area on published block-wise rates.',
              url: `${SITE_URL}/build`,
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Live Project Tracking',
              description:
                '24/7 live site camera access and a client portal tracking construction stages, materials, inventory, responsible staff and legal documents.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Documentation & Power of Attorney Handling',
              description:
                'End-to-end society transfers, approvals and construction documentation, including acting under power of attorney for overseas clients.',
            },
          },
        ],
      },
      // NOTE: no aggregateRating on purpose. Review markup must reflect real,
      // verifiable reviews shown on the page — inventing one risks a manual
      // action. Add it back only when genuine reviews are live.
      priceRange: '$$',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE_URL}#website`,
      url: SITE_URL,
      name: 'Alammana Developers',
      description: 'Faisal Hills construction and real estate, Taxila and Islamabad',
      publisher: { '@id': `${SITE_URL}#organization` },
      // No SearchAction — the site has no /search page, and advertising one
      // that 404s is worse than omitting it.
      inLanguage: ['en-PK', 'ur-PK', 'ar'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${SITE_URL}#webpage-${inLanguage}`,
      isPartOf: { '@id': `${SITE_URL}#website` },
      inLanguage,
    },
  ];
}
