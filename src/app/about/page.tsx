import type { Metadata } from 'next';
import JsonLd from '../../components/JsonLd';
import AboutClient from './AboutClient';
import { pageMeta, webPage, breadcrumb } from '../../lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'About Us — Faisal Hills Builders',
  description:
    'Alammana Developers has built and sold in Faisal Hills and Faisal Town since 2015, publishing block-wise construction rates instead of quoting case by case.',
  path: '/about',
  keywords: [
    'Alammana Developers',
    'Faisal Hills builder',
    'construction company Taxila',
    'real estate company Rawalpindi',
  ],
});

export default function About() {
  return (
    <>
      <JsonLd schema={[webPage('AboutPage', { name: 'About Alammana Developers', description: 'Who we are and how we work in Faisal Hills and Faisal Town.', path: '/about' }), breadcrumb([['About', '/about']])]} />
      <AboutClient />
    </>
  );
}
