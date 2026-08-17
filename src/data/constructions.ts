import { ConstructionProject } from '../types';

/**
 * ─── HOW TO ADD / EDIT A CONSTRUCTION PROJECT ────────────────────────────────
 *
 * Each object below becomes a page at  alammana.pk/constructions/<id>
 * and a card on /constructions and the home page. To add a new home:
 *
 *   1. Copy any entry below and paste it at the top of the array.
 *   2. Give it a unique `id` (lowercase, hyphens only — this becomes the URL).
 *   3. Drop the images into  public/assets/constructions/<id>/  and reference
 *      them as '/assets/constructions/<id>/elevation.jpg' etc.
 *      - elevationImage:   front elevation (main hero image)
 *      - approvedMapImage: photo/scan of the approved map (naqsha)
 *      - gallery:          any number of site / progress / interior photos
 *   4. For the map: open Google Maps, search the plot location, copy the
 *      search text or "lat,lng" into:
 *      https://maps.google.com/maps?q=YOUR+SEARCH+HERE&output=embed
 *      (replace spaces with +). No API key needed.
 *   5. Save — the site rebuilds and the page appears automatically.
 *
 * Fields marked optional (approvedMapImage, mapEmbedUrl, specs, amenities,
 * expectedCompletion) can be omitted until the team sends the material —
 * the page simply hides that section.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const constructions: ConstructionProject[] = [
  {
    id: 'block-a-modern-minimalist',
    title: 'Modern Minimalist Residence',
    block: 'Block A, Faisal Hills',
    plotSize: '1 Kanal',
    finishType: 'Gray Structure',
    status: 'Under Construction',
    shortDescription: 'A sleek 1-kanal minimalist home with clean geometric lines and large glass facades.',
    fullDescription:
      'Currently in the gray structure phase, this 1-kanal minimalist home in Faisal Hills is built on an approved open-plan architectural map. The front elevation showcases clean geometric lines and large glass facades. Alammana is managing the entire end-to-end construction on our published Block A rates.',
    // TODO(team): send real elevation + approved-map (naqsha) + site photos for /assets/constructions/block-a-modern-minimalist/
    elevationImage: '/assets/stock/modern-house-1.webp',
    gallery: [
      '/assets/stock/modern-house-2.webp',
      '/assets/stock/modern-house-1.webp',
    ],
    locationLabel: 'Block A, Faisal Hills, Taxila',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Block+A+Faisal+Hills+Taxila&output=embed',
    specs: [
      { label: 'Plot Size', value: '1 Kanal' },
      { label: 'Bedrooms', value: '6' },
      { label: 'Bathrooms', value: '7' },
      { label: 'Covered Area', value: '5,800 sqft' },
    ],
    amenities: ['Open-Plan Layout', 'Double-Glazed Windows', 'Energy Efficient Design', 'Solar-Ready Wiring'],
    expectedCompletion: 'Q2 2027',
  },
  {
    id: 'block-b-luxury-villa',
    title: 'Luxury Family Villa',
    block: 'Block B, Faisal Hills',
    plotSize: '10 Marla',
    finishType: 'Fully Finished',
    status: 'Under Construction',
    shortDescription: 'A 10-marla luxury villa with high-end finishes, modern elevation, and smart home systems.',
    fullDescription:
      'This 10-marla luxury villa is a testament to our turnkey construction capabilities on Faisal Hills published rates. The approved map was meticulously designed to maximize natural light. It features a contemporary front elevation, 5 spacious bedrooms, imported fixtures, and a landscaped front yard — delivered fully finished, key in hand.',
    // TODO(team): send real elevation + approved-map (naqsha) + site photos for /assets/constructions/block-b-luxury-villa/
    elevationImage: '/assets/stock/villa-exterior.webp',
    gallery: [
      '/assets/stock/modern-house-2.webp',
      '/assets/stock/villa-front.webp',
    ],
    locationLabel: 'Block B, Faisal Hills, Taxila',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Block+B+Faisal+Hills+Taxila&output=embed',
    specs: [
      { label: 'Plot Size', value: '10 Marla' },
      { label: 'Bedrooms', value: '5' },
      { label: 'Bathrooms', value: '6' },
      { label: 'Covered Area', value: '3,400 sqft' },
    ],
    amenities: ['Smart Home Integration', 'Imported Fixtures', 'Landscaped Front Yard', 'Turnkey Delivery'],
    expectedCompletion: 'Q4 2026',
  },
  {
    id: 'faisal-town-spanish-residence',
    title: 'Spanish Style Residence',
    block: 'Faisal Town Phase 1',
    plotSize: '14 Marla',
    finishType: 'Fully Finished',
    status: 'Completed',
    shortDescription: 'An elegant 14-marla house blending classic Spanish architecture with modern interiors.',
    fullDescription:
      'This completed project blends traditional Spanish exterior aesthetics with ultra-modern interior layouts. The front elevation features classic terracotta roof tiles, arched windows, and a warm color palette. Built on the approved map and delivered fully finished to a delighted client in Faisal Town.',
    // TODO(team): send real elevation + approved-map (naqsha) + site photos for /assets/constructions/faisal-town-spanish-residence/
    elevationImage: '/assets/stock/villa-front.webp',
    gallery: [
      '/assets/stock/villa-exterior.webp',
      '/assets/stock/modern-house-2.webp',
    ],
    locationLabel: 'Faisal Town Phase 1, Islamabad',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Faisal+Town+Phase+1+Islamabad&output=embed',
    specs: [
      { label: 'Plot Size', value: '14 Marla' },
      { label: 'Bedrooms', value: '5' },
      { label: 'Bathrooms', value: '5' },
      { label: 'Covered Area', value: '4,100 sqft' },
    ],
    amenities: ['Terracotta Roofing', 'Custom Woodwork', 'Arched Windows', 'Approved Layout'],
  },
];
