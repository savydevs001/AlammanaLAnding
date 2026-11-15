import type { Metadata } from 'next';
import { pageMeta, SITE_URL } from '../../../lib/seo';
import BuildClient from './BuildClient';

export const metadata: Metadata = pageMeta({
  title: 'Build with Alammana — Custom House Construction Islamabad & Faisal Hills',
  absoluteTitle: true,
  description:
    'Build custom luxury homes and commercial projects in Faisal Hills, B-17 Multi Gardens, and Islamabad with Alammana Developers. Turnkey construction, 24/7 live site cameras, RDA map approvals, and fixed per-sq-ft rates.',
  path: '/build',
  keywords: [
    'Build with Alammana',
    'Alammana Developers',
    'house construction Islamabad',
    'custom home builders faisal hills',
    'turnkey construction taxila',
    'B-17 house builders',
    'grey structure construction islamabad',
  ],
});

export default function Page() {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${SITE_URL}/build#service`,
      name: 'Custom House Construction Services',
      description:
        'End-to-end residential construction in Faisal Hills, B-17, and Islamabad by Alammana Developers. Grey structure and turnkey finishing with 24/7 live site video feeds.',
      provider: {
        '@type': 'Organization',
        name: 'Alammana Developers',
        url: SITE_URL,
      },
      areaServed: [
        { '@type': 'Place', name: 'Faisal Hills' },
        { '@type': 'Place', name: 'B-17 Multi Gardens' },
        { '@type': 'Place', name: 'Islamabad' },
        { '@type': 'Place', name: 'Taxila' },
        { '@type': 'Place', name: 'Rawalpindi' },
      ],
      url: `${SITE_URL}/build`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to Build a Custom House in Faisal Hills and Islamabad',
      description: 'Step-by-step roadmap from plot verification to key handover with Alammana Developers.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Plot Verification & Feasibility',
          text: 'Inspect soil conditions, elevation level, boundary lines, and society water/electricity infrastructure.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Architectural & 3D Elevation Design',
          text: 'Design customized floor plans and photorealistic 3D elevations compliant with RDA bye-laws.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'NOC & RDA Map Approval',
          text: 'Submit and secure official building permissions from society and authority directorates.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Live Site Camera & Portal Setup',
          text: 'Deploy 24/7 live cameras and grant private client tracking portal credentials.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Engineered Grey Structure Build',
          text: 'Construct RCC framing, columns, slabs, and brickwork using certified Grade 60 steel.',
        },
        {
          '@type': 'HowToStep',
          position: 6,
          name: 'Turnkey Finishing & Key Handover',
          text: 'Complete flooring, woodwork, sanitary fixtures, painting, and hand over the keys.',
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Build', item: `${SITE_URL}/build` },
      ],
    },
  ];

  return (
    <>
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <BuildClient />
    </>
  );
}
