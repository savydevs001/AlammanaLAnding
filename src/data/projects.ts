import { Project } from '../types';
import { fromCms } from './cms';

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

/** Asset folder for the Faisal Jewel project pack. */
const FJ = '/assets/projects/faisal-jewel';

/** Hard-coded fallback — used only until the ERP publishes a listing of this
 *  kind (see ./cms.ts). New listings should be added in the ERP, not here. */
const staticProjects: Project[] = [
  {
    id: 'faisal-jewel',
    title: 'Faisal Jewel',
    category: 'Commercial',
    location: 'Executive Block, Faisal Hills, Taxila',
    developer: 'Zedem International / Faisal Town Group with CAM Construction',
    architect: 'Jamshid Khan Associates',
    role: 'Authorised Sales Partner',
    approval: 'Built inside RDA-approved Faisal Hills — NOC approved by the Rawalpindi Development Authority',
    description:
      'A 27-storey landmark in Faisal Hills Executive Block with luxury apartments, a commercial tower and hotel component.',
    fullDescription:
      'Faisal Jewel is a 27-storey landmark in the Executive Block of Faisal Hills, positioned where Margalla Avenue, the G.T. Road and the M-1 Motorway meet, with the Margalla Hills National Park behind it. It is developed by Zedem International under the Faisal Town Group founded by Ch. Abdul Majeed, with CAM Construction as co-developer and contractor, and designed by Jamshid Khan Associates. The scheme pairs a residential tower of 27-plus storeys — one, two and three-bedroom apartments and penthouses — with a separate 14-storey commercial tower holding retail floors, a food court and a four-to-five-star hotel component, over three basement parking levels. Alammana Developers is an authorised sales partner and can arrange floor selection, availability and booking.',
    thumbnail: `${FJ}/hero.webp`,
    images: [
      `${FJ}/hero.webp`,
      `${FJ}/night.webp`,
      `${FJ}/tower-portrait.webp`,
      `${FJ}/lobby.webp`,
      `${FJ}/amenity-pool.webp`,
      `${FJ}/plan-site.webp`,
      `${FJ}/location-map.webp`,
    ],
    progressPhotos: [`${FJ}/progress-2026-07.webp`],
    progressNote: 'Middle tower has reached the 8th floor. Vertical columns under construction — steel, shuttering and concrete in progress.',
    progressDate: 'July 2026',
    // Official brochure is currently an online flipbook rather than a PDF.
    // TODO(team): ask Zedem for the source PDF so it can be self-hosted in
    // public/brochures/ and keep working if the viewer link ever moves.
    brochureUrl: 'https://online.fliphtml5.com/lutjp/djgh/',
    features: [
      'Luxury 1, 2 & 3 Bedroom Apartments',
      'Penthouses from 3,547 sq ft',
      'Retail, Food Court & Hotel Component',
      'Three Basement Parking Levels',
    ],
    status: 'In Progress',
    amenities: [
      'Swimming Pool',
      'Fitness Centre',
      'Rooftop Lounge',
      'Café',
      'Gaming Room',
      'Retail Floors',
      '24/7 Security & Surveillance',
      'Three-Level Basement Parking',
    ],
    structure:
      'Two towers over a shared podium. The residential tower rises 27-plus storeys with one, two and three-bedroom apartments and penthouses on the 14th floor. A separate 14-storey commercial tower holds retail levels, a fourth-floor food court and a four-to-five-star hotel component. Three basement levels are given over to parking.',
    unitPlans: [
      { name: 'Studio Apartment', size: 'Enquire for availability', render: `${FJ}/unit-studio.webp` },
      { name: 'One Bedroom Apartment', size: '1,295 sq ft', plan: `${FJ}/plan-1bed.webp`, render: `${FJ}/unit-1bed.webp` },
      { name: 'Two Bedroom Apartment', size: '1,930 sq ft', plan: `${FJ}/plan-2bed.webp`, render: `${FJ}/unit-2bed.webp` },
      { name: 'Three Bedroom Apartment', size: '2,435 sq ft', plan: `${FJ}/plan-3bed.webp`, render: `${FJ}/unit-3bed.webp` },
      { name: 'Penthouse Type A', size: '3,547 sq ft', plan: `${FJ}/plan-penthouse-a.webp`, notes: '14th floor' },
      { name: 'Penthouse Type B', size: '5,624 sq ft', plan: `${FJ}/plan-penthouse-b.webp`, notes: '14th floor' },
      { name: 'Penthouse Type C', size: '7,320 sq ft', plan: `${FJ}/plan-penthouse-c.webp`, notes: '14th floor' },
    ],
    commercialFloors: [
      { floor: 'Lower Ground — Shops', minArea: '153 sq ft', maxArea: '2,683 sq ft' },
      { floor: 'Ground Floor — Shops', minArea: '169 sq ft', maxArea: '765 sq ft' },
      { floor: 'First Floor — Shops', minArea: '169 sq ft', maxArea: '842 sq ft' },
      { floor: 'Second Floor — Shops', minArea: '169 sq ft', maxArea: '1,990 sq ft' },
      { floor: 'Third Floor — Shops', minArea: '169 sq ft', maxArea: '1,279 sq ft' },
      { floor: 'Fourth Floor — Food Court', minArea: '210 sq ft', maxArea: '1,899 sq ft' },
    ],
    mapLink: 'https://maps.google.com/?q=Faisal+Jewel+Faisal+Hills+Taxila',
    // TODO(team): no prices or payment plan were supplied with the project pack.
    // Ask Zedem for the current official price list and instalment schedule —
    // this is the single most-searched thing about the project.
    completionDate: 'Q4 2027',
    summaryStats: [
      { label: 'Storeys', value: '27+' },
      { label: 'Commercial Tower', value: '14' },
      { label: 'Basement Parking', value: '3' },
    ],
    surroundings: [
      'G.T. Road, Taxila',
      'M-1 Motorway',
      'M-2 Motorway',
      'N-80 Road',
      'Margalla Avenue',
      'Margalla Hills National Park',
      'Wah Cantt',
      'Taxila City',
      'Rawalpindi',
      'Islamabad',
      'UET Taxila',
      'HITEC University Taxila',
      'COMSATS University Taxila',
      'Pakistan Ordnance Factories (POF)',
      'B-17 Multi Gardens',
      'CDA Sector C-15 & C-16',
      'Jaulian & Sirkap, Taxila',
      'Giri Fort, Taxila',
      'New Islamabad International Airport',
    ],
    unitBreakdown: [
      { label: '1 Bedroom', size: '1,295 sqft' },
      { label: '2 Bedroom', size: '1,930 sqft' },
      { label: '3 Bedroom', size: '2,435 sqft' },
      { label: 'Penthouse (from)', size: '3,547 sqft' },
    ],
    faqs: [
      { q: 'Where is Faisal Jewel located?', a: 'In the Executive Block of Faisal Hills, Taxila, where Margalla Avenue, the G.T. Road and the M-1 Motorway meet, with the Margalla Hills National Park behind it.' },
      { q: 'Who is the developer of Faisal Jewel?', a: 'Zedem International under the Faisal Town Group, with CAM Construction as co-developer and contractor. The architect is Jamshid Khan Associates. Alammana Developers is an authorised sales partner.' },
      { q: 'How many floors does Faisal Jewel have?', a: 'The residential tower rises 27-plus storeys, alongside a separate 14-storey commercial tower, over three basement parking levels.' },
      { q: 'What apartment sizes are available in Faisal Jewel?', a: 'One-bedroom apartments of 1,295 sq ft, two-bedroom of 1,930 sq ft, three-bedroom of 2,435 sq ft, and penthouses on the 14th floor from 3,547 sq ft to 7,320 sq ft. Studios are available on enquiry.' },
      { q: 'Are there shops in Faisal Jewel?', a: 'Yes. The commercial tower has shops from the lower ground to the third floor, from about 153 sq ft upwards, and a food court on the fourth floor.' },
      { q: 'Is Faisal Jewel approved?', a: 'It is built inside RDA-approved Faisal Hills, with an NOC from the Rawalpindi Development Authority.' },
      { q: 'What is the construction status of Faisal Jewel?', a: 'As of July 2026 the middle tower had reached the 8th floor, with columns under construction. Expected completion is Q4 2027.' },
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
    faqs: [
      { q: 'Where is J7 Emporium?', a: 'At Plot #01, MR-09, Block C, Multi Gardens, Sector B-17, Islamabad, near the M-1 Motorway, G.T. Road and Margalla Avenue.' },
      { q: 'How tall is J7 Emporium?', a: 'It is a 30-storey mixed-use tower on roughly 46 kanals.' },
      { q: 'What does J7 Emporium include?', a: 'A shopping mall, studio to four-bedroom apartments, corporate offices, food-court floors and hotel suites operated under the Radisson Blu brand, plus the J7 Club with pool, gym and spa.' },
      { q: 'Who is the developer of J7 Emporium?', a: 'J7 Group. Alammana Developers is an authorised sales partner and can arrange unit selection and booking.' },
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
    faqs: [
      { q: 'Where is 107 Plaza?', a: 'Inside Faisal Hills, an RDA-approved housing society on the Main G.T. Road in Taxila.' },
      { q: 'What units are available in 107 Plaza?', a: 'Ground-floor retail shops and upper-floor office units, suited to both end-users and investors looking for rental income.' },
      { q: 'How do I get the price list for 107 Plaza?', a: 'Contact Alammana Developers for the current availability and rate sheet — we handle bookings for the plaza.' },
    ],
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
    faqs: [
      { q: 'What is Faisal Hills Prime Block?', a: 'A newly launched block of Faisal Hills offering residential and commercial plots on instalments.' },
      { q: 'Is Faisal Hills approved?', a: 'Yes. Faisal Hills is approved by the Rawalpindi Development Authority (RDA).' },
      { q: 'Where is Faisal Hills?', a: 'On the Main G.T. Road in Taxila, adjacent to Multi Gardens B-17 and minutes from the M-1 Motorway, spread over roughly 11,823 kanals.' },
      { q: 'Can I buy a plot in Prime Block on instalments?', a: 'Yes, Prime Block plots are offered on instalment plans. Alammana Developers handles bookings, transfers and resale in Faisal Hills and can share the current plan.' },
    ],
    contact: {
      phone: '+92 335 8078262',
      email: 'rabta@alammana.pk',
      address: 'Faisal Hills, Taxila',
    },
  },
];

export const projects = fromCms('PARTNER_PROJECT', staticProjects);
