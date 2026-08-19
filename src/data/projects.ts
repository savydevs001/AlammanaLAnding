import { Project } from '../types';

/**
 * ─── PARTNER PROJECTS (PORTFOLIO) ────────────────────────────────────────────
 *
 * These are developments Alammana sells inventory for as an authorised sales
 * partner — apartments, shops, offices and plots. Alammana is NOT the developer
 * of these projects; the `developer` field names who is, which keeps the site
 * accurate and protects us from misrepresentation claims.
 *
 * Each entry becomes a page at  alammana.pk/portfolio/<id>  and a card on
 * /portfolio and the home page.
 *
 * To add one: copy an entry, give it a unique `id` (lowercase-with-hyphens —
 * this becomes the URL), and fill in what you have. Optional sections
 * (amenities, paymentPlans, pricing, summaryStats, surroundings...) are simply
 * hidden on the page when omitted — never invent numbers to fill them.
 *
 * IMAGES: put them in  public/assets/projects/  and reference as
 * '/assets/projects/<file>.jpg'. Do NOT hotlink images from Google Maps or
 * other companies' websites — those links expire and the images break (this
 * happened to Faisal Jewel and J7 in Aug 2026).
 *
 * Homes WE construct on our published rates live in constructions.ts instead.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const projects: Project[] = [
  {
    id: 'faisal-jewel',
    title: 'Faisal Jewel',
    category: 'Commercial',
    location: 'Executive Block, Faisal Hills, Taxila',
    developer: 'Zedem Properties & CAM Constructions (Faisal Town Group)',
    role: 'Authorised Sales Partner',
    approval: 'Built inside RDA-approved Faisal Hills',
    description:
      'A 27-storey landmark in Faisal Hills Executive Block offering luxury apartments, shops and offices.',
    fullDescription:
      'Faisal Jewel is a 27-storey multi-purpose landmark rising on roughly 20 kanals in the Executive Block of Faisal Hills, directly alongside the G.T. Road (N-5) and close to the Fateh Jang–Tarnol Interchange on the M1 Motorway. Developed by Zedem Properties and CAM Constructions under the Faisal Town Group led by Ch. Abdul Majeed, it combines a shopping mall, food court, corporate offices, serviced hotel floors and residential apartments in a single vertical community. Alammana Developers is an authorised sales partner for the project and can arrange bookings, floor selection and payment-plan guidance.',
    thumbnail: '/assets/projects/faisal-jewel.webp',
    // Real construction-progress photographs of the tower, published by the
    // developer's marketing channel and cropped to remove their own sales
    // phone number and website. TODO(team): ask Faisal Town Group for the
    // official high-resolution renders — these are only 624px originals.
    images: ['/assets/projects/faisal-jewel.webp'],
    // Real photographs of the tower under construction — shown in their own
    // labelled section so they are never mistaken for renders.
    progressPhotos: [
      '/assets/projects/faisal-jewel-progress-1.webp',
      '/assets/projects/faisal-jewel-progress-2.webp',
    ],
    features: [
      'Luxury 1, 2 & 3 Bedroom Apartments',
      'Commercial Shops from 153 sq ft',
      'Corporate Offices & Food Court',
      'Three Basement Parking Levels',
    ],
    status: 'In Progress',
    amenities: [
      '24/7 Security',
      'High-speed Elevators',
      'Food Court & Cafés',
      'Basement & Surface Parking',
      'Backup Power & Emergency Systems',
      'Fitness & Leisure Facilities',
    ],
    structure:
      '27+ floors on a 20-kanal site: lower levels for retail shops and a food court, mid-levels for corporate offices, and upper floors for residential apartments and penthouses. Three basement parking levels serve the whole development.',
    mapLink: 'https://maps.google.com/?q=Faisal+Hills+Executive+Block+Taxila',
    pricing: {
      units: [
        { type: 'Commercial Shop (from)', size: '153 sq ft', price: 'PKR 7,240,000' },
        { type: 'Apartment — 1 Bedroom', size: '1,295 sq ft', price: 'PKR 7,650,000' },
        { type: 'Apartment — 2 Bedroom', size: '1,930 sq ft', price: 'On request' },
        { type: 'Apartment — 3 Bedroom', size: '2,435 sq ft', price: 'On request' },
      ],
    },
    paymentPlans: [
      {
        name: 'Standard Instalment Plan',
        duration: '5 years',
        downPayment: 'On booking',
        notes: 'Balance payable in 20 quarterly instalments. Contact us for the current schedule.',
      },
    ],
    startingPrice: 'PKR 7,240,000',
    completionDate: 'Q4 2027',
    summaryStats: [
      { label: 'Floors', value: '27+' },
      { label: 'Land Area (Kanal)', value: '20' },
      { label: 'Basement Parking', value: '3' },
    ],
    surroundings: [
      'G.T. Road (N-5)',
      'Fateh Jang–Tarnol Interchange',
      'M1 Motorway',
      'Margalla Avenue',
      'Taxila City',
      'Wah Cantt',
      'HITEC University',
      'Islamabad Int. Airport',
    ],
    unitBreakdown: [
      { label: '1 Bedroom', size: '1,295 sqft' },
      { label: '2 Bedroom', size: '1,930 sqft' },
      { label: '3 Bedroom', size: '2,435 sqft' },
      { label: 'Penthouse (from)', size: '3,547 sqft' },
    ],
    contact: {
      phone: '+92 335 8078262',
      email: 'rabta@alammana.pk',
      address: 'Faisal Hills, Taxila',
    },
  },
  {
    id: 'j7-emporium',
    title: 'J7 Emporium',
    category: 'Commercial',
    location: 'Block C, Multi Gardens B-17, Islamabad',
    developer: 'J7 Group',
    role: 'Authorised Sales Partner',
    description:
      'A 30-storey mixed-use tower in B-17 Islamabad with retail, apartments, offices and a Radisson Blu hotel.',
    fullDescription:
      'J7 Emporium is a 30-storey mixed-use high-rise spanning roughly 46 kanals at Plot #01, MR-09, Block C, Multi Gardens, Sector B-17, Islamabad. Developed by J7 Group, it brings together a shopping mall, studio to 4-bedroom residential apartments, corporate offices, dedicated food-court floors and hotel suites operated under the Radisson Blu brand. Its position near the M-1 Motorway, G.T. Road and Margalla Avenue makes it one of the most connected commercial addresses in the twin cities. Alammana Developers is an authorised sales partner and can arrange unit selection and booking.',
    thumbnail: '/assets/projects/j7-emporium.webp',
    // TODO(team): request official renders from J7 Group and add here.
    images: ['/assets/projects/j7-emporium.webp'],
    features: [
      'Shopping Mall & Retail Floors',
      'Studio to 4-Bedroom Apartments',
      'Radisson Blu Hotel Suites',
      'J7 Club — Pool, Gym & Spa',
    ],
    status: 'In Progress',
    amenities: [
      '24/7 Security with CCTV',
      'Swimming Pool & Gym',
      'Spa, Sauna & Steam Rooms',
      'Banquet Hall',
      'Rooftop Gardens & Dining',
      'Smart Parking',
      'Kids Play Area',
      'Concierge Services',
    ],
    structure:
      'A 30-storey tower on approximately 46 kanals: retail across the lower levels, the J7 Club leisure floor on level 5, corporate offices and food-court floors above, then residential apartments and Radisson Blu hotel suites on the upper levels.',
    mapLink: 'https://maps.google.com/?q=J7+Emporium+B-17+Islamabad',
    summaryStats: [
      { label: 'Storeys', value: '30' },
      { label: 'Land Area (Kanal)', value: '46' },
    ],
    surroundings: [
      'Islamabad–Peshawar Motorway (M-1)',
      'G.T. Road',
      'Margalla Avenue',
      'CPEC Route',
      'New Islamabad Airport',
      'Faisal Hills, Taxila',
    ],
    contact: {
      phone: '+92 335 8078262',
      email: 'rabta@alammana.pk',
      address: 'B-17 Multi Gardens, Islamabad',
    },
  },
  {
    id: '107-plaza',
    title: '107 Plaza',
    category: 'Commercial',
    location: 'Faisal Hills, Taxila',
    role: 'Authorised Sales Partner',
    description:
      'A commercial plaza in Faisal Hills offering ground-floor shops and upper-floor office space.',
    fullDescription:
      '107 Plaza is a commercial development inside Faisal Hills, Taxila, offering retail shops and office units suited to both end-users and investors looking for rental yield within an established RDA-approved society. Alammana Developers handles bookings and can share the current availability and rate sheet on request.',
    // TODO(team): send real photos and the current rate sheet for 107 Plaza —
    // there is very little public information available for this project.
    thumbnail: '/assets/projects/107-plaza.webp',
    images: ['/assets/projects/107-plaza.webp'],
    features: ['Ground-Floor Retail Shops', 'Upper-Floor Offices', 'Inside RDA-Approved Faisal Hills'],
    status: 'In Progress',
    contact: {
      phone: '+92 335 8078262',
      email: 'rabta@alammana.pk',
      address: 'Faisal Hills, Taxila',
    },
  },
  {
    id: 'faisal-hills-prime-block',
    title: 'Faisal Hills — Prime Block',
    category: 'Development',
    location: 'Faisal Hills, Main G.T. Road, Taxila',
    developer: 'Faisal Town Group / Zedem International',
    role: 'Authorised Sales Partner',
    approval: 'RDA Approved',
    description:
      'Residential and commercial plots in the newly launched Prime Block of Faisal Hills, on easy instalments.',
    fullDescription:
      'Faisal Hills is an RDA-approved housing society by the Faisal Town Group, led by Ch. Abdul Majeed, spread over roughly 11,823 kanals on the Main G.T. Road in Taxila, adjacent to Multi Gardens B-17 and minutes from the M-1 Motorway. The newly launched Prime Block opens fresh residential and commercial plots in a master-planned community with wide carpeted roads, underground electrification, parks, mosques and a graveyard already in place across the developed blocks. Alammana Developers handles plot bookings, transfers and resale in Faisal Hills.',
    thumbnail: '/assets/projects/prime-block.webp',
    images: ['/assets/projects/prime-block.webp', '/assets/projects/prime-block-map.webp'],
    features: [
      'Easy Instalment Plans',
      'RDA-Approved Society',
      'Underground Electrification',
      'Parks, Mosques & Wide Boulevards',
    ],
    status: 'In Progress',
    surroundings: [
      'Main G.T. Road (N-5)',
      'Taxila City',
      'Wah Cantt',
      'Multi Gardens B-17',
      'M-1 Motorway',
      'HITEC University',
      'Margalla Avenue',
    ],
    contact: {
      phone: '+92 335 8078262',
      email: 'rabta@alammana.pk',
      address: 'Faisal Hills, Taxila',
    },
  },
];
