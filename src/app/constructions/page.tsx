import type { Metadata } from 'next';
import ConstructionsClient from './ConstructionsClient';

export const metadata: Metadata = {
  title: 'House Construction in Faisal Hills | Ongoing & Completed Homes',
  description:
    'Homes Alammana Developers is constructing in Faisal Hills and Faisal Town on our published payment-plan rates — gray structure and fully finished, with approved maps, front elevations, and site locations.',
  keywords: [
    'house construction Faisal Hills',
    'construction company Taxila',
    'gray structure construction Faisal Hills',
    'turnkey house construction Islamabad',
    'Faisal Town house construction',
    'home builders Faisal Hills',
  ],
  alternates: {
    canonical: '/constructions',
  },
  openGraph: {
    title: 'Our Construction Projects | Alammana Developers',
    description:
      'Ongoing and completed homes in Faisal Hills and Faisal Town, built on our transparent published rates.',
    url: '/constructions',
    type: 'website',
  },
};

export default function Constructions() {
  return <ConstructionsClient />;
}
