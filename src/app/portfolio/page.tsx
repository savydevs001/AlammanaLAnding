import type { Metadata } from 'next';
import { projects } from '../../data/projects';
import PortfolioClient from './PortfolioClient';

export const metadata: Metadata = {
  title: 'Portfolio | Alammana Developers - Faisal Hills Projects & Real Estate Developments',
  description: 'Explore Alammana Developers\' portfolio of luxury projects in Faisal Hills and Islamabad. Premium residential, commercial, and development projects showcasing architectural excellence.',
  keywords: [
    'Faisal Hills projects',
    'Islamabad real estate developments',
    'luxury residential construction',
    'commercial projects',
    'Alammana portfolio'
  ],
  openGraph: {
    title: 'Portfolio | Alammana Developers',
    description: 'Award-winning luxury real estate projects in Faisal Hills and Islamabad',
    type: 'website',
  },
};

export default function Portfolio() {
  return <PortfolioClient projects={projects} />;
}
