import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Alammana Developers | Faisal Hills Real Estate Excellence',
  description: 'Learn about Alammana Developers, a leading luxury real estate and construction company in Faisal Hills and Islamabad. Our vision, mission, and commitment to excellence.',
  keywords: [
    'Alammana Developers',
    'Faisal Hills developer',
    'real estate company',
    'luxury construction',
    'Islamabad development company'
  ],
  openGraph: {
    title: 'About Alammana Developers',
    description: 'Premier luxury real estate and construction company specializing in Faisal Hills and Islamabad properties.',
    type: 'website',
  },
};

export default function About() {
  return <AboutClient />;
}
