import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Alammana Developers | Faisal Hills Real Estate Consultation',
  description: 'Get in touch with Alammana Developers for Faisal Hills real estate inquiries, property consultations, and investment opportunities in Islamabad.',
  keywords: [
    'contact Alammana',
    'real estate consultation',
    'Faisal Hills properties',
    'Islamabad real estate inquiry',
    'property investment'
  ],
  openGraph: {
    title: 'Contact Alammana Developers',
    description: 'Reach out to our team for Faisal Hills and Islamabad real estate services',
    type: 'website',
  },
};

export default function Contact() {
  return <ContactClient />;
}
