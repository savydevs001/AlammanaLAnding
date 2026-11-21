import type { Metadata } from 'next';
import JsonLd from '../../../components/JsonLd';
import VerifyClient from './VerifyClient';
import { pageMeta, webPage, breadcrumb, SITE_URL } from '../../../lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Receipt & Voucher Verification',
  description:
    'Verify official Al Ammana Developers payment receipts, vouchers, and project records in real time using our central cryptographic ledger.',
  path: '/verify',
  keywords: [
    'Al Ammana receipt verification',
    'verify Faisal Hills payment',
    'Al Ammana ledger authentication',
    'real estate payment verification Pakistan',
  ],
});

export default function VerifyPage() {
  const verifyPageSchema = {
    ...webPage('WebPage', {
      name: 'Al Ammana Official Document Verification',
      description: 'Public real-time authentication portal for official Al Ammana payment receipts and vouchers.',
      path: '/verify',
    }),
    mainEntity: { '@id': `${SITE_URL}#organization` },
  };

  return (
    <>
      <JsonLd schema={[verifyPageSchema, breadcrumb([['Verify', '/verify']])]} />
      <VerifyClient />
    </>
  );
}
