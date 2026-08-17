import { ConstructionProject } from '../types';

/**
 * ─── HOMES WE ARE CONSTRUCTING ───────────────────────────────────────────────
 *
 * Each object becomes a page at  alammana.pk/constructions/<id>  and a card on
 * /constructions and the home page.
 *
 * ⚠️  PLACEHOLDER DATA — READ BEFORE PUBLISHING WIDELY
 * The plot addresses, specs and photographs below are REPRESENTATIVE, not real.
 * They exist so the team can see the finished layout and send back the true
 * details for each site. Every entry is marked with a TODO(team) line listing
 * exactly what is needed. Replace them site by site; you do not have to do all
 * eight at once.
 *
 * TO FILL IN A REAL PROJECT
 *   1. Replace `title`, `plotAddress`, `block`, `plotSize`, `finishType`, `status`.
 *   2. Put real photos in  public/assets/constructions/<id>/  and point
 *      `elevationImage`, `approvedMapImage` and `gallery` at them.
 *      - elevationImage:   front elevation (main hero image)
 *      - approvedMapImage: photo/scan of the society-approved map (naqsha).
 *        LEAVE THIS OUT until you have the real one — the page states the map is
 *        society-verified, and a stock drawing there would be a false claim.
 *      - gallery:          site / progress / interior photos
 *   3. Update `mapEmbedUrl` with the real street:
 *      https://maps.google.com/maps?q=SEARCH+TERMS&output=embed   (no API key)
 *   4. Delete the TODO(team) comment once the entry is real.
 *
 * Never hotlink images — see docs/ROADMAP.md.
 * ─────────────────────────────────────────────────────────────────────────────
 */

const A = '/assets/constructions';

export const constructions: ConstructionProject[] = [
  {
    id: 'block-a-1-kanal-modern-minimalist',
    title: '1 Kanal Modern Minimalist Residence',
    plotAddress: 'Plot 5683, Street 129, Block A',
    block: 'Block A, Faisal Hills',
    plotSize: '1 Kanal',
    finishType: 'Gray Structure',
    status: 'Under Construction',
    shortDescription:
      'A 1-kanal minimalist home with clean geometric massing and full-height glazing to the front elevation.',
    fullDescription:
      'Currently in the gray structure phase on a 1 kanal plot in Block A. The elevation is deliberately restrained — flat parapets, a deep front cantilever and full-height glazing to the lounge — with the structural frame designed to allow a large clear span across the drawing room. Alammana is delivering the complete shell on our published Block A gray structure rate, with the owner finishing in phases.',
    // TODO(team): send real front elevation, approved map scan, progress photos,
    // the true plot/street number and confirmed specs for this site.
    elevationImage: `${A}/facade-white-cubist.webp`,
    gallery: [`${A}/facade-white-wood.webp`],
    locationLabel: 'Street 129, Block A, Faisal Hills, Taxila',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Block+A+Faisal+Hills+Taxila&output=embed',
    specs: [
      { label: 'Plot Size', value: '1 Kanal' },
      { label: 'Covered Area', value: '5,800 sqft' },
      { label: 'Bedrooms', value: '6' },
      { label: 'Bathrooms', value: '7' },
    ],
    amenities: ['Open-plan ground floor', 'Double-height entrance', 'Solar-ready conduiting', 'Basement parking'],
    expectedCompletion: 'Q2 2027',
  },
  {
    id: 'block-a-10-marla-contemporary',
    title: '10 Marla Contemporary Family Home',
    plotAddress: 'Plot 4127, Street 84, Block A',
    block: 'Block A, Faisal Hills',
    plotSize: '10 Marla',
    finishType: 'Fully Finished',
    status: 'Under Construction',
    shortDescription:
      'A 10 marla turnkey home combining a stone-clad front elevation with a fully finished interior.',
    fullDescription:
      'A turnkey 10 marla home on Street 84 in Block A, delivered complete on our published finished-house rate. The front elevation pairs textured stone cladding with a rendered upper storey and a covered car porch. Internally the layout puts the drawing and dining on the ground floor with four bedrooms above, all bedrooms attached.',
    // TODO(team): send real front elevation, approved map scan, progress photos,
    // the true plot/street number and confirmed specs for this site.
    elevationImage: `${A}/facade-wood-clad.webp`,
    gallery: [`${A}/interior-living-1.webp`, `${A}/interior-bedroom.webp`],
    locationLabel: 'Street 84, Block A, Faisal Hills, Taxila',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Block+A+Faisal+Hills+Taxila&output=embed',
    specs: [
      { label: 'Plot Size', value: '10 Marla' },
      { label: 'Covered Area', value: '3,400 sqft' },
      { label: 'Bedrooms', value: '4' },
      { label: 'Bathrooms', value: '5' },
    ],
    amenities: ['Stone-clad elevation', 'Imported sanitary ware', 'Full woodwork package', 'Covered car porch'],
    expectedCompletion: 'Q1 2027',
  },
  {
    id: 'block-b-10-marla-luxury-villa',
    title: '10 Marla Luxury Villa',
    plotAddress: 'Plot 2214, Street 47, Block B',
    block: 'Block B, Faisal Hills',
    plotSize: '10 Marla',
    finishType: 'Fully Finished',
    status: 'Under Construction',
    shortDescription:
      'A 10 marla villa with a rendered white elevation, deep balcony line and full turnkey finishing.',
    fullDescription:
      'A fully finished 10 marla villa on Street 47 in Block B, on our published Block B finished rate. The elevation runs a continuous first-floor balcony across the front with a rendered white finish and dark aluminium glazing. The approved map was worked to maximise morning light into the bedrooms.',
    // TODO(team): send real front elevation, approved map scan, progress photos,
    // the true plot/street number and confirmed specs for this site.
    elevationImage: `${A}/facade-multi-level.webp`,
    gallery: [`${A}/interior-living-2.webp`],
    locationLabel: 'Street 47, Block B, Faisal Hills, Taxila',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Block+B+Faisal+Hills+Taxila&output=embed',
    specs: [
      { label: 'Plot Size', value: '10 Marla' },
      { label: 'Covered Area', value: '3,300 sqft' },
      { label: 'Bedrooms', value: '5' },
      { label: 'Bathrooms', value: '6' },
    ],
    amenities: ['Continuous front balcony', 'Smart switching', 'Landscaped front lawn', 'Turnkey delivery'],
    expectedCompletion: 'Q4 2026',
  },
  {
    id: 'block-b-8-marla-gray-structure',
    title: '8 Marla Gray Structure',
    plotAddress: 'Plot 3391, Street 63, Block B',
    block: 'Block B, Faisal Hills',
    plotSize: '8 Marla',
    finishType: 'Gray Structure',
    status: 'Under Construction',
    shortDescription:
      'An 8 marla shell built to lock-up so the owner can complete finishing in phases.',
    fullDescription:
      'An 8 marla gray structure on Street 63 in Block B. The client is completing finishing themselves over the next two years, so our scope ends at plaster with all concealed electrical conduiting and plumbing in place, pressure tested, plus the boundary wall, gate opening and both water tanks. This is a common and sensible route for buyers who would rather not borrow to finish.',
    // TODO(team): send real front elevation, approved map scan, progress photos,
    // the true plot/street number and confirmed specs for this site.
    elevationImage: `${A}/facade-dark-glass.webp`,
    gallery: [],
    locationLabel: 'Street 63, Block B, Faisal Hills, Taxila',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Block+B+Faisal+Hills+Taxila&output=embed',
    specs: [
      { label: 'Plot Size', value: '8 Marla' },
      { label: 'Covered Area', value: '2,700 sqft' },
      { label: 'Storeys', value: 'G + 1' },
    ],
    amenities: ['Complete structural shell', 'Concealed conduiting', 'Pressure-tested plumbing', 'Boundary wall included'],
    expectedCompletion: 'Q3 2026',
  },
  {
    id: 'block-a-14-marla-stone-elevation',
    title: '14 Marla Home with Stone Elevation',
    plotAddress: 'Plot 890, Street 22, Block A',
    block: 'Block A, Faisal Hills',
    plotSize: '14 Marla',
    finishType: 'Fully Finished',
    status: 'Under Construction',
    shortDescription:
      'A 14 marla residence on the wider Block A streets, finished to a high specification throughout.',
    fullDescription:
      'A 14 marla home on Street 22 in Block A, one of the wider streets in the block. The elevation combines a stone-clad ground floor with rendered upper levels and a projecting first-floor terrace. Delivered fully finished on our published Block A rate, with the specification sheet agreed in writing before work began.',
    // TODO(team): send real front elevation, approved map scan, progress photos,
    // the true plot/street number and confirmed specs for this site.
    elevationImage: `${A}/facade-concrete-modern.webp`,
    gallery: [`${A}/interior-living-1.webp`],
    locationLabel: 'Street 22, Block A, Faisal Hills, Taxila',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Block+A+Faisal+Hills+Taxila&output=embed',
    specs: [
      { label: 'Plot Size', value: '14 Marla' },
      { label: 'Covered Area', value: '4,200 sqft' },
      { label: 'Bedrooms', value: '5' },
      { label: 'Bathrooms', value: '6' },
    ],
    amenities: ['Stone-clad ground floor', 'First-floor terrace', 'Imported fixtures', 'Full external development'],
    expectedCompletion: 'Q2 2027',
  },
  {
    id: 'block-b-5-marla-starter-home',
    title: '5 Marla Starter Home',
    plotAddress: 'Plot 1176, Street 18, Block B',
    block: 'Block B, Faisal Hills',
    plotSize: '5 Marla',
    finishType: 'Fully Finished',
    status: 'Completed',
    shortDescription:
      'A completed 5 marla home showing how much can be achieved on the most affordable plot size.',
    fullDescription:
      'A completed 5 marla home on Street 18 in Block B, handed over to the owners. Five marla is the entry plot size in Faisal Hills and the one most first-time buyers start with, so this project is a useful reference for what the footprint actually delivers — three bedrooms, a proper drawing room, and a car porch within the approved setbacks.',
    // TODO(team): send real front elevation, approved map scan, handover photos,
    // the true plot/street number and confirmed specs for this site.
    elevationImage: `${A}/facade-white-poolside.webp`,
    gallery: [`${A}/interior-living-2.webp`, `${A}/interior-bedroom.webp`],
    locationLabel: 'Street 18, Block B, Faisal Hills, Taxila',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Block+B+Faisal+Hills+Taxila&output=embed',
    specs: [
      { label: 'Plot Size', value: '5 Marla' },
      { label: 'Covered Area', value: '1,900 sqft' },
      { label: 'Bedrooms', value: '3' },
      { label: 'Bathrooms', value: '4' },
    ],
    amenities: ['Efficient 5 marla layout', 'Car porch within setbacks', 'Complete finishing', 'Handed over'],
  },
  {
    id: 'block-a-1-kanal-classic-elevation',
    title: '1 Kanal Home, Classical Elevation',
    plotAddress: 'Plot 6042, Street 141, Block A',
    block: 'Block A, Faisal Hills',
    plotSize: '1 Kanal',
    finishType: 'Fully Finished',
    status: 'Completed',
    shortDescription:
      'A completed 1 kanal residence with a more traditional elevation and extensive interior woodwork.',
    fullDescription:
      'A completed 1 kanal home on Street 141 in Block A for a client who wanted a warmer, more traditional elevation rather than a flat modern facade. Extensive custom woodwork throughout — doors, wardrobes and a full kitchen — was the largest single line item in the finishing package, which is typical on projects of this size.',
    // TODO(team): send real front elevation, approved map scan, handover photos,
    // the true plot/street number and confirmed specs for this site.
    elevationImage: `${A}/facade-white-wood.webp`,
    gallery: [`${A}/interior-bedroom.webp`],
    locationLabel: 'Street 141, Block A, Faisal Hills, Taxila',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Block+A+Faisal+Hills+Taxila&output=embed',
    specs: [
      { label: 'Plot Size', value: '1 Kanal' },
      { label: 'Covered Area', value: '5,400 sqft' },
      { label: 'Bedrooms', value: '6' },
      { label: 'Bathrooms', value: '7' },
    ],
    amenities: ['Custom woodwork throughout', 'Traditional elevation', 'Servant quarter', 'Handed over'],
  },
  {
    id: 'block-b-1-kanal-starting-soon',
    title: '1 Kanal Residence — Starting Shortly',
    plotAddress: 'Plot 4508, Street 96, Block B',
    block: 'Block B, Faisal Hills',
    plotSize: '1 Kanal',
    finishType: 'Gray Structure',
    status: 'Starting Soon',
    shortDescription:
      'A 1 kanal gray structure with the map approved and excavation due to begin.',
    fullDescription:
      'A 1 kanal project on Street 96 in Block B with the society-approved map in hand and excavation scheduled to begin shortly. Soil testing has been completed. We publish projects at this stage as well as finished ones, so clients can see the pipeline rather than only the showcase.',
    // TODO(team): send the approved map scan and the true plot/street number,
    // then progress photos once excavation starts.
    elevationImage: `${A}/facade-white-cubist.webp`,
    gallery: [],
    locationLabel: 'Street 96, Block B, Faisal Hills, Taxila',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Block+B+Faisal+Hills+Taxila&output=embed',
    specs: [
      { label: 'Plot Size', value: '1 Kanal' },
      { label: 'Covered Area', value: '5,600 sqft' },
      { label: 'Storeys', value: 'G + 1' },
    ],
    amenities: ['Approved map in hand', 'Soil testing complete', 'Milestone-based payment schedule'],
    expectedCompletion: 'Q4 2027',
  },
];
