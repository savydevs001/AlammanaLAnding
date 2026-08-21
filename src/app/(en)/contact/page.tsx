import type { Metadata } from 'next';
import JsonLd from '../../../components/JsonLd';
import ContactClient from './ContactClient';
import { pageMeta, webPage, breadcrumb } from '../../../lib/seo';

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
  return (
    <>
      <JsonLd schema={[webPage('ContactPage', { name: 'Contact Alammana Developers', description: 'Talk to us about construction rates, plots or partner projects.', path: '/contact' }), breadcrumb([['Contact', '/contact']])]} />
      <ContactClient />
    </>
  );
}
