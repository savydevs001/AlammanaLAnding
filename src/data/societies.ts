import { Society } from '../types';

/**
 * ─── HOUSING SOCIETIES ───────────────────────────────────────────────────────
 *
 * Each entry becomes a page at  alammana.pk/societies/<id>  and a card on
 * /societies and the home page. These pages are our main organic-search asset:
 * people search "faisal hills block c", "faisal town phase 2 payment plan",
 * "dha gandhara plots" far more than they search our company name.
 *
 * RULES FOR EDITING
 *  1. Never overstate approvals. `approvalStatus` must be one of Approved /
 *     In Process / Pre-Launch, and `approval` should read exactly as the
 *     authority states it. Getting this wrong is a legal and trust problem.
 *  2. Prices move constantly — do NOT hard-code plot prices here. Point people
 *     at an enquiry instead, so we are never caught quoting a stale number.
 *  3. Plot counts and block data are researched from public sources listed in
 *     `sources`. Re-verify before making a claim central to a sale.
 *  4. Images go in public/assets/societies/ and must be self-hosted WebP.
 *     Never hotlink — see docs/ROADMAP.md.
 *  5. Map embeds need no API key:
 *     https://maps.google.com/maps?q=SEARCH+TERMS&output=embed
 *
 * Last researched: August 2026.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const societies: Society[] = [
  {
    id: 'faisal-hills',
    name: 'Faisal Hills',
    tagline: 'RDA-approved living on the Main G.T. Road, Taxila',
    city: 'Taxila, Rawalpindi',
    developer: 'Faisal Town Group / Zedem International (Ch. Abdul Majeed)',
    approval: 'RDA approved — NOC issued by the Rawalpindi Development Authority',
    approvalStatus: 'Approved',
    totalArea: '11,823 Kanal',
    launched: '2016',
    summary:
      'A fully RDA-approved society on the Main G.T. Road at Taxila, with developed blocks, handed-over possession in several areas, and the Margalla Hills as a backdrop. This is where Alammana builds most of its homes.',
    overview: [
      'Faisal Hills is a Rawalpindi Development Authority approved housing society spread over roughly 11,823 kanals on the Main G.T. Road (N-5) at Taxila, developed by the Faisal Town Group under the leadership of Ch. Abdul Majeed. Launched in 2016, it has matured from a plot-file market into a genuine residential community, with possession handed over in several blocks and houses occupied rather than merely planned.',
      'The society is organised around a 225-foot main boulevard, with internal streets between 40 and 110 feet. Its position matters as much as its plan: it sits on the G.T. Road with access to the M-1 Motorway, is minutes from Taxila Cantt, and looks onto the Margalla Hills — a combination very few approved societies in the twin-cities region can offer at this price point.',
      'For buyers, the practical question is which block to buy in, because development status and price differ sharply between them. Alammana publishes block-wise construction rates for Blocks A, B, C, D and the Executive Block, and builds houses in each — so we can speak to what construction in a given block actually involves, not just what a plot costs.',
    ],
    blocks: [
      {
        name: 'Executive Block',
        status: 'Most developed — roads complete, heavily populated',
        summary:
          'The civic and commercial heart of Faisal Hills, fronting the Grand Trunk Road. The most mature block, with the highest proportion of completed houses and working commercial activity.',
        plotSizes: ['5 Marla', '8 Marla', '10 Marla', '14 Marla', '1 Kanal'],
        highlights: [
          'Main boulevard and roads complete',
          'Home to Faisal Jewel and Roots International School',
          'Largest commercial component (approx. 504 commercial plots)',
          'Margalla Hills views',
        ],
        bestFor: 'Buyers who want to build and move in now, and commercial investors',
      },
      {
        name: 'Block A',
        status: 'Developed — 225-ft main boulevard complete',
        summary:
          'A fully developed block on the main boulevard with a balanced residential and commercial mix. Commercial areas, a hospital and a mosque are under construction.',
        plotSizes: ['5 Marla', '8 Marla', '10 Marla', '14 Marla', '1 Kanal', '2 Kanal'],
        highlights: [
          'Widest plot-size range in the society, including 2 Kanal',
          'Strong commercial frontage',
          'Hospital and grand mosque under construction',
        ],
        bestFor: 'Families and entrepreneurs who value accessibility',
      },
      {
        name: 'Block B',
        status: 'Developing — road network progressed through 2025',
        summary:
          'A quieter, predominantly residential block sitting between Blocks A and C, with scenic Margalla Hills views and a large share of mid-size plots.',
        plotSizes: ['5 Marla', '7 Marla', '8 Marla', '10 Marla', '14 Marla', '1 Kanal'],
        highlights: [
          'Calmer residential character, less through-traffic',
          'Large stock of 10 and 14 Marla plots',
          'Margalla Hills outlook',
        ],
        bestFor: 'Families wanting a quieter street to build a home on',
      },
      {
        name: 'Block B Extension',
        status: 'Developing',
        summary:
          'A smaller extension adjoining Blocks B and C, planned with its own mosque, park and green areas. Entry sizes dominate the mix.',
        plotSizes: ['5 Marla', '8 Marla', '10 Marla'],
        highlights: ['Dedicated mosque and park', 'Mostly 5 and 8 Marla plots'],
        bestFor: 'Investors seeking a lower entry price inside an approved society',
      },
      {
        name: 'Block C',
        status: 'Developing',
        summary:
          'A large, primarily residential block positioned to benefit from future M-1 Motorway connectivity, with a substantial commercial allocation.',
        plotSizes: ['5 Marla', '8 Marla', '10 Marla', '1 Kanal'],
        highlights: [
          'Expected to benefit from a future M-1 Motorway link',
          'Large commercial component (approx. 815 commercial plots)',
          'One of the highest plot counts in the society',
        ],
        bestFor: 'Investors focused on medium-term capital growth',
      },
      {
        name: 'Block D',
        status: 'Possession handed over — construction actively underway',
        summary:
          'Positioned between the G.T. Road and Taxila, this is the most budget-friendly developed block. Possession has been handed to owners and houses are going up now.',
        plotSizes: ['5 Marla', '8 Marla', '10 Marla', '14 Marla', '1 Kanal'],
        highlights: [
          'Possession already handed over',
          'Close to existing schools, healthcare and shopping in Taxila',
          'Significant apartment-site allocation',
        ],
        bestFor: 'First-time buyers and anyone wanting to start construction immediately',
      },
      {
        name: 'Prime Block',
        status: 'Newer launch',
        summary:
          'A more recently launched block offering a full ladder of plot sizes from 5.56 Marla up to 2 Kanal, aimed at buyers entering the society at current rates.',
        plotSizes: ['5.56 Marla', '8 Marla', '10.89 Marla', '14.22 Marla', '1 Kanal', '2 Kanal'],
        highlights: ['Newest inventory in the society', 'Full range of plot sizes including 2 Kanal'],
        bestFor: 'Buyers wanting fresh files on an instalment plan',
      },
      {
        name: 'Hill View Estate',
        status: 'Premium enclave — limited plots',
        summary:
          'A small, exclusive enclave of around 121 plots laid out for panoramic Margalla Hills views, with dedicated commercial and apartment land allocations.',
        plotSizes: ['Limited — enquire for current availability'],
        highlights: ['Approximately 121 exclusive plots', 'Panoramic Margalla Hills views'],
        bestFor: 'Buyers after a premium address inside Faisal Hills',
      },
    ],
    amenities: [
      '225-foot main boulevard',
      'Underground electrification',
      'Carpeted roads (40–110 ft internal)',
      'Grand community mosque',
      'Roots International School (operational)',
      'Central hospital',
      'Planned 101-kanal university campus',
      'Planned 171-kanal sports complex',
      'Parks, green belts & Hill Walk trail',
      'Downtown commercial hub',
      '24/7 security',
    ],
    connectivity: [
      'Main G.T. Road (N-5)',
      'M-1 Motorway',
      'Taxila Cantt — approx. 10 minutes',
      'Margalla Avenue',
      'Wah Cantt',
      'HITEC University',
      'Multi Gardens B-17',
      'New Islamabad International Airport',
    ],
    plotSizes: ['5 Marla', '7 Marla', '8 Marla', '10 Marla', '14 Marla', '1 Kanal', '2 Kanal'],
    paymentNote:
      'Plots are available on instalment plans as well as outright purchase, and terms differ by block and by whether the file is fresh or resale. Contact us for the current schedule.',
    image: '/assets/societies/faisal-hills.webp',
    masterPlanImage: '/assets/societies/faisal-hills-master-plan.webp',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Faisal+Hills+Taxila&output=embed',
    faqs: [
      {
        q: 'Is Faisal Hills approved?',
        a: 'Yes. Faisal Hills holds a No Objection Certificate from the Rawalpindi Development Authority (RDA) and is developed by the Faisal Town Group. Always ask to see the approval documentation for the specific block and plot you are buying.',
      },
      {
        q: 'Which block of Faisal Hills is best to build a house in right now?',
        a: 'If you want to start construction immediately, the Executive Block and Block D are the most practical — both have developed infrastructure and Block D has possession handed over. Block A is developed with its main boulevard complete. Blocks B and C are still maturing, which usually means a lower entry price but a longer wait before you can build comfortably.',
      },
      {
        q: 'What plot sizes are available in Faisal Hills?',
        a: 'Across the society you will find 5 Marla, 7 Marla, 8 Marla, 10 Marla, 14 Marla, 1 Kanal and 2 Kanal residential plots, plus commercial plots and apartment sites. The exact mix varies by block — Block A and the Prime Block carry the widest range including 2 Kanal.',
      },
      {
        q: 'Where exactly is Faisal Hills?',
        a: 'Faisal Hills is on the Main G.T. Road (N-5) at Taxila, in Rawalpindi district, roughly ten minutes from Taxila Cantt and adjacent to Multi Gardens B-17, with access to the M-1 Motorway and Margalla Avenue.',
      },
      {
        q: 'What does it cost to build a house in Faisal Hills?',
        a: 'Alammana publishes block-wise construction rates for both gray structure and fully finished houses, covering Blocks A, B, C, D and the Executive Block. You can view and download the current rate lists on our payment plans page rather than asking around for a quote.',
      },
    ],
    sources: [
      'https://faisalhills.com/master-plan/',
      'https://faisaltownphase2group.com/faisal-hills-islamabad/',
      'https://www.zameen.com/new-projects/faisal_hills-921/',
    ],
  },

  {
    id: 'faisal-town-phase-1',
    name: 'Faisal Town Phase 1',
    tagline: 'Fully RDA-approved and largely settled, in Sector F-18',
    city: 'Sector F-18, Islamabad',
    developer: 'Faisal Town Group (Ch. Abdul Majeed)',
    approval:
      'RDA approved — NOC and layout plan approved in full for 4,735.9 Kanal; environmental approval granted March 2014',
    approvalStatus: 'Approved',
    totalArea: '4,735 Kanal',
    summary:
      'A mature, fully approved society in Sector F-18 Islamabad with completed infrastructure and an established resident community — the Faisal Town Group project that set the standard for Faisal Hills.',
    overview: [
      'Faisal Town Phase 1 occupies roughly 4,735 kanals in Sector F-18, Islamabad, with its main entrance on the N-80 near Tarnol and the Fateh Jang Interchange. It is the project that established the Faisal Town Group\'s reputation, and it holds a complete Rawalpindi Development Authority NOC covering its entire land area, with the layout plan approved in full and environmental clearance granted in March 2014.',
      'Unlike newer launches, Phase 1 is a settled society rather than a development site. Roads are carpeted, electricity runs underground, and the blocks are populated — which means you are buying into a working neighbourhood with a known character, at prices that reflect that maturity.',
      'Alammana builds and handles resale in Faisal Town, and can advise honestly on how Phase 1 compares with Faisal Hills for a buyer weighing an established address against a lower entry price.',
    ],
    blocks: [
      {
        name: 'Block A',
        status: 'Developed & populated',
        summary: 'An established residential block with completed infrastructure and occupied homes.',
        plotSizes: ['5 Marla', '8 Marla', '10 Marla', '1 Kanal', '2 Kanal'],
        bestFor: 'Buyers who want to move into a settled neighbourhood',
      },
      {
        name: 'Block B',
        status: 'Developed & populated',
        summary:
          'Residential plots alongside commercial areas, parks, mosques, playgrounds and green space.',
        plotSizes: ['5 Marla', '8 Marla', '10 Marla', '1 Kanal', '2 Kanal'],
        highlights: ['Commercial areas', 'Parks and playgrounds', 'Mosques'],
        bestFor: 'Families wanting amenities within walking distance',
      },
      {
        name: 'Block B-1',
        status: 'Developed',
        summary: 'A smaller sub-block adjoining Block B with the same residential character.',
        plotSizes: ['5 Marla', '8 Marla', '10 Marla', '1 Kanal'],
      },
      {
        name: 'Block C',
        status: 'Developed',
        summary: 'Residential block completing the Phase 1 master plan.',
        plotSizes: ['5 Marla', '8 Marla', '10 Marla', '1 Kanal', '2 Kanal'],
      },
    ],
    amenities: [
      'Wide carpeted roads',
      'Underground electricity',
      '24-hour security',
      'Schools',
      'Mosques',
      'Civic & commercial centre',
      'Parks and green spaces',
    ],
    connectivity: [
      'N-80 Highway (main entrance)',
      'Tarnol',
      'Fateh Jang Interchange',
      'M-1 Motorway — approx. 6 minutes',
      'New Islamabad International Airport — approx. 21 minutes',
    ],
    plotSizes: ['5 Marla', '8 Marla', '10 Marla', '1 Kanal', '2 Kanal'],
    image: '/assets/societies/faisal-town-phase-1.webp',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Faisal+Town+F-18+Islamabad&output=embed',
    faqs: [
      {
        q: 'Is Faisal Town Phase 1 approved by the RDA?',
        a: 'Yes. Faisal Town Phase 1 holds a complete No Objection Certificate from the Rawalpindi Development Authority covering its full 4,735.9 kanals, with the layout plan approved and environmental authorisation granted in March 2014.',
      },
      {
        q: 'Where is Faisal Town Phase 1?',
        a: 'It is in Sector F-18, Islamabad, with the main entrance on the N-80 near Tarnol and the Fateh Jang Interchange — around six minutes from the M-1 Motorway and about twenty-one minutes from the New Islamabad International Airport.',
      },
      {
        q: 'How is Faisal Town Phase 1 different from Faisal Hills?',
        a: 'Phase 1 is a settled, fully approved society where infrastructure is complete and homes are occupied, so prices are higher and there is less room for development-driven growth. Faisal Hills is larger, still developing in several blocks, and generally offers a lower entry price with a longer horizon.',
      },
    ],
    sources: [
      'https://faisaltown.org/faisal-town-phase-1-islamabad/',
      'https://faisaltownislamabad.org/phase-1/',
    ],
  },

  {
    id: 'faisal-town-phase-2',
    name: 'Faisal Town Phase 2',
    tagline: '12 km of M-2 Motorway frontage at the Thalian Interchange',
    city: 'Thalian Interchange, M-2 Motorway, Islamabad',
    developer: 'Faisal Town Group with Zedem International',
    approval: 'NOC application under process with the Rawalpindi Development Authority (RDA)',
    approvalStatus: 'In Process',
    summary:
      'The Faisal Town Group\'s largest launch, with 12 km of frontage on the M-2 Motorway at Thalian and access from the Rawalpindi Ring Road. Its NOC is still under process — buy with that in mind.',
    overview: [
      'Faisal Town Phase 2 sits beside the Thalian Interchange, running parallel to the Lahore–Islamabad (M-2) Motorway with roughly 12 kilometres of motorway frontage and a further 9 kilometres along the Rawalpindi Ring Road. It is also reachable from Chakri Road. In pure location terms it is the best-connected project the Faisal Town Group has launched.',
      'The master plan is organised into Sector O (also called the Model Block), the Overseas Enclave and the General Block, with N Block added in September 2025 as a premium residential sector launched by Zedem International in collaboration with the Faisal Town Group. Plot sizes run from 5.56 Marla up to 2 Kanal.',
      'One point we will not soften: the No Objection Certificate for Phase 2 is still under process with the RDA, unlike Phase 1 and Faisal Hills which are approved. That is normal for a project at this stage and the group has a track record of securing approvals, but it is a genuine risk you should weigh, and you should verify the current status yourself before paying anything.',
    ],
    blocks: [
      {
        name: 'Sector O (Model Block)',
        status: 'Launched — development in progress',
        summary:
          'The flagship sector of Phase 2, positioned as the model block and typically the first to see development activity.',
        plotSizes: ['5.56 Marla', '8 Marla', '10.89 Marla', '1 Kanal', '2 Kanal'],
        highlights: ['Model block of the master plan', 'Lump-sum discounts often applied here'],
        bestFor: 'Buyers wanting the most developed part of Phase 2',
      },
      {
        name: 'Overseas Enclave',
        status: 'Launched',
        summary:
          'A dedicated enclave aimed at overseas Pakistani buyers, typically with its own amenity allocation and entry.',
        plotSizes: ['5.56 Marla', '8 Marla', '10.89 Marla', '1 Kanal', '2 Kanal'],
        bestFor: 'Overseas Pakistanis buying remotely',
      },
      {
        name: 'General Block',
        status: 'Launched',
        summary: 'The main residential body of Phase 2, carrying the bulk of the plot inventory.',
        plotSizes: ['5.56 Marla', '8 Marla', '10.89 Marla', '1 Kanal', '2 Kanal'],
        bestFor: 'Buyers looking for the widest choice of files',
      },
      {
        name: 'N Block',
        status: 'Launched September 2025',
        summary:
          'A premium residential sector launched by Zedem International in collaboration with the Faisal Town Group.',
        plotSizes: ['5.56 Marla', '8 Marla', '10.89 Marla', '1 Kanal', '2 Kanal'],
        highlights: ['Newest inventory in Phase 2', 'Positioned as a premium sector'],
        bestFor: 'Buyers entering at the newest launch rates',
      },
    ],
    amenities: [
      'Planned wide carpeted roads',
      'Underground utilities',
      'Mosques',
      'Parks & green belts',
      'Commercial zones',
      'Gated security',
    ],
    connectivity: [
      'M-2 Lahore–Islamabad Motorway (approx. 12 km frontage)',
      'Thalian Interchange',
      'Rawalpindi Ring Road (approx. 9 km frontage)',
      'Chakri Road',
      'New Islamabad International Airport',
    ],
    plotSizes: ['5.56 Marla', '8 Marla', '10.89 Marla', '14.22 Marla', '1 Kanal', '2 Kanal'],
    paymentNote:
      'Reported as a down payment followed by instalments over three to four years, with lump-sum discounts on selected plots. Terms change between launches — confirm the live schedule with us before committing.',
    image: '/assets/societies/faisal-town-phase-2.webp',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Thalian+Interchange+M-2+Motorway+Islamabad&output=embed',
    faqs: [
      {
        q: 'Is Faisal Town Phase 2 NOC approved?',
        a: 'Not yet. As of August 2026 the NOC for Faisal Town Phase 2 is under process with the Rawalpindi Development Authority. Phase 1 and Faisal Hills, by contrast, are already approved. Verify the current status directly with the RDA before making any payment.',
      },
      {
        q: 'Where is Faisal Town Phase 2 located?',
        a: 'It is next to the Thalian Interchange, running parallel to the Lahore–Islamabad M-2 Motorway with around 12 km of motorway frontage and about 9 km along the Rawalpindi Ring Road, and is also accessible from Chakri Road.',
      },
      {
        q: 'Which blocks does Faisal Town Phase 2 have?',
        a: 'The master plan comprises Sector O (the Model Block), the Overseas Enclave and the General Block, with N Block launched in September 2025 by Zedem International in collaboration with the Faisal Town Group.',
      },
    ],
    sources: [
      'https://www.skymarketing.com.pk/faisal-town-phase-2-islamabad/',
      'https://faisaltownphase2group.com/',
      'https://wirasat.com/project/faisal-town-phase-2/',
    ],
  },

  {
    id: 'dha-gandhara',
    name: 'DHA Gandhara (Phase 9)',
    tagline: 'DHA Islamabad\'s largest phase, master-planned by Surbana Jurong',
    city: 'M-2 Motorway corridor, Islamabad',
    developer: 'Defence Housing Authority with Army Welfare Trust (AWT) and Habib Rafiq (Pvt) Ltd',
    approval: 'Developed under the Defence Housing Authority framework',
    approvalStatus: 'Pre-Launch',
    totalArea: 'Approx. 32,500 Kanal',
    summary:
      'DHA Islamabad\'s largest phase, spanning roughly 32,500 kanals along the M-2 corridor with a master plan by Singapore\'s Surbana Jurong. Early-stage — the official payment plan is still being announced.',
    overview: [
      'DHA Gandhara, launched as DHA Phase 9, is the largest phase of DHA Islamabad, spread over approximately 32,500 kanals along the M-2 Motorway corridor near the New Islamabad International Airport and adjacent to Capital Smart City. It is delivered under the Defence Housing Authority framework with the Army Welfare Trust and Habib Rafiq (Pvt) Ltd — the same development partnership behind several of DHA\'s better-executed phases.',
      'Its master plan was prepared by Surbana Jurong, the Singaporean urban-design firm, which is unusual for the region and is the main reason the project has attracted attention beyond the usual DHA following. Access is via the DHA Expressway, Rawat–Chakbeli Road, the G.T. Road and the Islamabad Expressway, with the Rawat Interchange serving both Rawalpindi and Islamabad.',
      'Be clear about the stage: this is early. Plot sizes are indicated from 5 Marla upward, but the official residential payment plan is still being announced, and figures circulating in the market are pre-launch or projected rather than confirmed. Treat any number you are quoted — including by us — as provisional until DHA publishes it. Alammana can register your interest and pass on the official schedule the moment it is released.',
    ],
    blocks: [
      {
        name: 'Residential Sectors',
        status: 'Pre-launch / early allocation',
        summary:
          'Residential plots indicated from 5 Marla upward across the master plan. Sector-level detail is still being released by DHA.',
        plotSizes: ['5 Marla', '10 Marla', '1 Kanal', 'Larger sizes indicated'],
        bestFor: 'Buyers comfortable with early-stage entry in a DHA project',
      },
      {
        name: 'Commercial',
        status: 'Planned',
        summary: 'Commercial allocations form part of the Surbana Jurong master plan.',
        plotSizes: ['Enquire for current availability'],
      },
    ],
    amenities: [
      'Master plan by Surbana Jurong (Singapore)',
      'DHA-standard infrastructure and security',
      'Planned commercial districts',
      'Planned parks and green corridors',
      'Proximity to New Islamabad International Airport',
    ],
    connectivity: [
      'M-2 Motorway',
      'DHA Expressway',
      'Rawat Interchange',
      'Rawat–Chakbeli Road',
      'G.T. Road',
      'Islamabad Expressway',
      'Capital Smart City (adjacent)',
      'New Islamabad International Airport',
    ],
    plotSizes: ['5 Marla', '10 Marla', '1 Kanal', 'Larger sizes indicated'],
    paymentNote:
      'The official residential payment plan is still being announced by DHA. Any figure circulating before that is pre-launch or projected — we will share the official schedule as soon as it is published.',
    image: '/assets/societies/dha-gandhara.webp',
    mapEmbedUrl: 'https://maps.google.com/maps?q=DHA+Phase+9+Gandhara+Islamabad&output=embed',
    faqs: [
      {
        q: 'Has the DHA Gandhara payment plan been announced?',
        a: 'Not officially as of August 2026. Prices circulating in the market are pre-launch or projected figures. Wait for DHA\'s published schedule before committing, and be cautious of anyone presenting an unofficial rate as final.',
      },
      {
        q: 'Where is DHA Gandhara?',
        a: 'DHA Gandhara (Phase 9) lies along the M-2 Motorway corridor near the New Islamabad International Airport, adjacent to Capital Smart City, with access via the DHA Expressway, Rawat–Chakbeli Road, the G.T. Road and the Islamabad Expressway.',
      },
      {
        q: 'How large is DHA Gandhara?',
        a: 'The master plan covers approximately 32,500 kanals, making it the largest phase of DHA Islamabad. It was designed by Surbana Jurong, the Singaporean urban planning firm.',
      },
    ],
    sources: [
      'https://makaansolutions.com/dha-gandhara/',
      'https://manahilestate.com/dha-gandhara-phase-9-islamabad/',
      'https://reallandmanagement.pk/dha-gandhara-phase-9/',
    ],
  },
];
