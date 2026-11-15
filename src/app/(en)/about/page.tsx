import type { Metadata } from 'next';
import JsonLd from '../../../components/JsonLd';
import AboutClient from './AboutClient';
import { pageMeta, webPage, breadcrumb, SITE_URL } from '../../../lib/seo';

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
  const aboutPageSchema = {
    ...webPage('AboutPage', {
      name: 'About Alammana Developers — Faisal Hills Builders',
      description: 'Who we are, our history since 2015, and our transparent milestone construction model in Faisal Hills, Faisal Town, and Taxila.',
      path: '/about',
    }),
    mainEntity: { '@id': `${SITE_URL}#organization` },
  };

  return (
    <>
      <JsonLd schema={[aboutPageSchema, breadcrumb([['About', '/about']])]} />
      <AboutClient />
    </>
  );
}
