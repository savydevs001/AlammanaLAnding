import { Project } from '../types';

/**
 * ─── PARTNER PROJECTS (PORTFOLIO) ────────────────────────────────────────────
 *
 * These are the developments Alammana partners with and sells inventory for
 * (apartments, shops, offices, plots) — e.g. Faisal Jewel, J7, 107 Plaza.
 * Each entry becomes a page at  alammana.pk/portfolio/<id>  and a card on
 * /portfolio and the home page.
 *
 * To add a new partner project: copy an entry, give it a unique `id`
 * (lowercase-with-hyphens — becomes the URL), and fill in what you have.
 * Optional sections (amenities, paymentPlans, pricing, summaryStats,
 * surroundings, unitBreakdown...) are simply hidden on the page if omitted.
 *
 * Images: put them in  public/assets/portfolio/<id>/  and reference them as
 * '/assets/portfolio/<id>/photo1.jpg'. The `thumbnail` is the card + hero
 * image; `images` are the gallery.
 *
 * Homes WE construct on our published rates live in constructions.ts instead.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const projects: Project[] = [
  {
    id: 'faisal-jewel',
    title: 'Faisal Jewel',
    category: 'Commercial',
    location: 'Faisal Hills, Islamabad',
    description: 'A premium landmark in Faisal Hills offering unmatched commercial spaces and luxury amenities.',
    fullDescription: 'Faisal Jewel stands as a magnificent commercial hub in the heart of Faisal Hills. Featuring state-of-the-art architecture, luxury shopping experiences, and premium office spaces, it is designed to be the ultimate destination for businesses and high-end retail.',
    thumbnail: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEjnjfwNPKoNZS7eiW428vlqnt5G1R18DjMfcq84bbBbRZwtklIgMgiHp5fa1qTf-tCiPJRqnfx7MAR2Y059CAWjkrKjfZVC9mYSuAJlxSqlKxWIewSeECbQ16uC68eMsDUazxW45uykrof=s680-w680-h510-rw',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEjnjfwNPKoNZS7eiW428vlqnt5G1R18DjMfcq84bbBbRZwtklIgMgiHp5fa1qTf-tCiPJRqnfx7MAR2Y059CAWjkrKjfZVC9mYSuAJlxSqlKxWIewSeECbQ16uC68eMsDUazxW45uykrof=s680-w680-h510-rw',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop'
    ],
    features: ['Luxury Retail Shops', 'Premium Corporate Offices', 'High-speed Elevators', 'Ample Parking Space'],
    status: 'In Progress'
    ,
    amenities: [
      '24/7 Security',
      'Central HVAC',
      'Food Court & Cafés',
      'Rooftop Terrace & Events Area',
      'Conference & Meeting Halls',
      'Basement & Surface Parking',
      'High-speed Elevators',
      'Backup Power & Emergency Systems'
    ],
    structure: 'G + 5 levels: Ground floor retail and showrooms, Mezzanine for premium outlets, Floors 1–5 dedicated to corporate offices and luxury suites. Two-level basement parking with separate delivery and service access.',
    mapLink: 'https://maps.google.com/?q=Faisal+Hills+Islamabad',
    paymentPlans: [
      { name: 'Standard 24-month', duration: '24 months', downPayment: '30%', monthly: 'PKR 150,000', notes: 'No markup for first 6 months', image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEjnjfwNPKoNZS7eiW428vlqnt5G1R18DjMfcq84bbBbRZwtklIgMgiHp5fa1qTf-tCiPJRqnfx7MAR2Y059CAWjkrKjfZVC9mYSuAJlxSqlKxWIewSeECbQ16uC68eMsDUazxW45uykrof=s680-w680-h510-rw' },
      { name: 'Flexible 36-month', duration: '36 months', downPayment: '20%', monthly: 'PKR 105,000', notes: 'Low down-payment option', image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEjnjfwNPKoNZS7eiW428vlqnt5G1R18DjMfcq84bbBbRZwtklIgMgiHp5fa1qTf-tCiPJRqnfx7MAR2Y059CAWjkrKjfZVC9mYSuAJlxSqlKxWIewSeECbQ16uC68eMsDUazxW45uykrof=s680-w680-h510-rw' },
      { name: 'Spot Cash', duration: 'One-time', downPayment: '100%', notes: '5% discount on full payment', image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEjnjfwNPKoNZS7eiW428vlqnt5G1R18DjMfcq84bbBbRZwtklIgMgiHp5fa1qTf-tCiPJRqnfx7MAR2Y059CAWjkrKjfZVC9mYSuAJlxSqlKxWIewSeECbQ16uC68eMsDUazxW45uykrof=s680-w680-h510-rw' }
    ],
    pricing: {
      pricePerSqft: 'PKR 30,000 (Retail)',
      units: [
        { type: 'Shop - Ground', size: '200 sqft', price: 'PKR 6,000,000' },
        { type: 'Retail Unit - Mezzanine', size: '350 sqft', price: 'PKR 10,500,000' },
        { type: 'Office - Typical Floor', size: '1000 sqft', price: 'PKR 30,000,000' },
        { type: 'Parking (Basement)', price: 'PKR 1,000,000' }
      ]
    }
    ,
    startingPrice: 'PKR 580,000',
    completionDate: 'Q4 2027',
    summaryStats: [
      { label: 'Square Feet', value: '1,295' },
      { label: 'Commercial Floors', value: '6' },
      { label: 'Residential Floors', value: '18' },
      { label: 'Basement Parking', value: '3' }
    ],
    surroundings: [
      'Margalla Avenue',
      'HITECH University',
      'Taxila City',
      'Wah Cantt',
      'Sector D-12',
      'Islamabad Int. Airport',
      'Sector F-10',
      'Blue Area'
    ],
    unitBreakdown: [
      { label: 'Total Area', size: '1,295 sqft' },
      { label: 'Bedroom', size: '200 sqft' },
      { label: 'Kitchen', size: '150 sqft' },
      { label: 'Bathroom', size: '50 sqft' }
    ],
    contact: {
      phone: '+92 335 8078262',
      email: 'rabta@alammana.pk',
      address: 'Faisal Hills, Islamabad'
    }
  },
  {
    id: 'j7-faisal-hills',
    title: 'J7 Emporium Faisal Hills',
    category: 'Commercial',
    location: 'Faisal Hills, Islamabad',
    description: 'The iconic J7 project in Faisal Hills bringing world-class retail and luxury apartments.',
    fullDescription: 'J7 in Faisal Hills redefines urban living and commercial excellence. This mega-project combines sprawling retail malls, corporate floors, and luxury residential apartments into one integrated vertical community.',
    thumbnail: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAG-eK5SSFbDF4gtcIh8gn529_2-xAr7BP5w46O41IIwwFDSg70kA3tFINXjD6Ax-IvnRKmbNlhBz79CgRi4OMowSe7fbCJJgjj5EkdSVVNI-zT28quOnsWMsd6TEk-8iuCAo_8n=s680-w680-h510-rw',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/APNQkAG-eK5SSFbDF4gtcIh8gn529_2-xAr7BP5w46O41IIwwFDSg70kA3tFINXjD6Ax-IvnRKmbNlhBz79CgRi4OMowSe7fbCJJgjj5EkdSVVNI-zT28quOnsWMsd6TEk-8iuCAo_8n=s680-w680-h510-rw',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop'
    ],
    features: ['World-class Shopping Mall', 'Luxury Apartments', 'Food Courts', 'Smart Security System'],
    status: 'In Progress'
  },
  {
    id: '107-plaza',
    title: '107 Plaza',
    category: 'Commercial',
    location: 'Faisal Hills, Taxila',
    description: 'A modern commercial plaza in Faisal Hills offering shops, offices, and investment-grade retail units.',
    fullDescription: '107 Plaza is a contemporary commercial development in Faisal Hills. Alammana Developers is an official sales partner, offering shops, offices, and retail units with flexible booking and installment options. Its prime positioning ensures strong footfall and rental yield for investors.',
    // TODO(team): replace with real 107 Plaza photos in /assets/portfolio/107-plaza/
    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop'
    ],
    features: ['Prime Retail Shops', 'Executive Offices', 'Flexible Installments', 'High Rental Yield'],
    status: 'In Progress',
    contact: {
      phone: '+92 335 8078262',
      email: 'rabta@alammana.pk',
      address: 'Faisal Hills, Taxila'
    }
  },
  {
    id: 'b17-shops-apartments',
    title: 'B-17 Multi Gardens Shops & Apartments',
    category: 'Residential',
    location: 'B-17 Multi Gardens, Islamabad',
    description: 'Prime commercial shops and contemporary apartments in the vibrant B-17 sector.',
    fullDescription: 'Located in the highly sought-after B-17 Multi Gardens, this project offers high-visibility commercial shops on the lower floors and beautifully designed contemporary apartments above, making it perfect for both investors and residents.',
    thumbnail: 'https://vipgroup.com.pk/wp-content/uploads/2026/04/B17.png',
    images: [
      'https://vipgroup.com.pk/wp-content/uploads/2026/04/B17.png',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop'
    ],
    features: ['High-visibility Retail', 'Spacious Apartments', 'Modern Fittings', 'Easy Access to Kashmir Highway'],
    status: 'In Progress'
  },
  {
    id: 'faisal-hills-new-block',
    title: 'Faisal Hills New Block',
    category: 'Development',
    location: 'Faisal Hills, Taxila/Islamabad',
    description: 'Exclusive plots in the newly launched block of Faisal Hills with flexible payment plans.',
    fullDescription: 'The newly launched block in Faisal Hills offers an incredible opportunity for buyers and investors. With an attractive installment-based payment plan, secure your plot in a master-planned community with lush parks, grand mosques, and wide boulevards.',
    thumbnail: '/assets/primeblock.png',
    images: [
      '/assets/primeblock.png'
    ],
    features: ['Easy Installment Plans', 'Parks & Greenery', 'Underground Electrification', 'Gated Community'],
    status: 'Planned'
  }
];
