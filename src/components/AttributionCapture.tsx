'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { captureAttribution, getAttribution } from '../lib/attribution';
import { initClarity, setClarityTag } from '../lib/clarity';
import { stripLocale } from '../lib/i18n';

/**
 * Records the first page of each visit (see lib/attribution.ts),
 * initializes Microsoft Clarity, and sets searchable metadata tags for traffic,
 * campaigns, locales, and audience segments. Renders nothing.
 */
export default function AttributionCapture() {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize Clarity safely (in production or with explicit project ID)
    initClarity();
  }, []);

  useEffect(() => {
    captureAttribution();

    // Sync attribution tags to Microsoft Clarity for session segmentation
    const attr = getAttribution();
    if (attr.utmSource) setClarityTag('utm_source', attr.utmSource);
    if (attr.utmMedium) setClarityTag('utm_medium', attr.utmMedium);
    if (attr.utmCampaign) setClarityTag('utm_campaign', attr.utmCampaign);
    if (attr.gclid) setClarityTag('traffic_type', 'google_ads');
    else if (attr.fbclid) setClarityTag('traffic_type', 'facebook_ads');
    else if (attr.utmSource) setClarityTag('traffic_type', 'campaign');
    else if (attr.referrer) setClarityTag('traffic_type', 'referral');

    // Language and audience tags
    const { locale } = stripLocale(pathname || '/');
    setClarityTag('locale', locale);
    setClarityTag('text_direction', locale === 'ur' || locale === 'ar' ? 'rtl' : 'ltr');

    if (pathname?.includes('/overseas')) {
      setClarityTag('audience_segment', 'overseas_pakistani');
    }
  }, [pathname]);

  return null;
}
