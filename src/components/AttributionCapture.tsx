'use client';

import Clarity from '@microsoft/clarity';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { captureAttribution } from '../lib/attribution';

/** Records the first page of each visit (see lib/attribution.ts). Renders nothing. */
export default function AttributionCapture() {
  const pathname = usePathname();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      Clarity.init('yu93db6hwr');
    }
  }, []);

  useEffect(() => {
    captureAttribution();
  }, [pathname]);
  return null;
}
