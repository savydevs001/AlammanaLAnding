import type { Metadata } from 'next';
import JsonLd from '../../../components/JsonLd';
import ContactClient from './ContactClient';
import { pageMeta, webPage, breadcrumb, SITE_URL } from '../../../lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Contact Us — Faisal Hills Office',
  description:
    'Talk to Alammana Developers about construction rates, plots or partner projects. Office at Vertical Four, A Block, Faisal Hills, Taxila. Reply usually same day.',
  path: '/contact',
  keywords: [
    'contact Alammana Developers',
    'Faisal Hills construction enquiry',
    'property consultation Taxila',
    'builders near me Faisal Hills',
  ],
});

export default function Contact() {
  const contactPageSchema = {
    ...webPage('ContactPage', {
      name: 'Contact Alammana Developers — Faisal Hills Office',
      description: 'Visit our Faisal Hills office at Vertical Four or call our construction & property consultation lines: 03377503111 and 03087750009.',
      path: '/contact',
    }),
    mainEntity: { '@id': `${SITE_URL}#organization` },
  };

  return (
    <>
      <JsonLd schema={[contactPageSchema, breadcrumb([['Contact', '/contact']])]} />
      <ContactClient />
    </>
  );
}
