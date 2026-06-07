import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'faisal-jewel',
    title: 'Faisal Jewel',
    category: 'Commercial',
    location: 'Faisal Hills, Islamabad',
    description: 'A premium landmark in Faisal Hills offering unmatched commercial spaces and luxury amenities.',
    fullDescription: 'Faisal Jewel stands as a magnificent commercial hub in the heart of Faisal Hills. Featuring state-of-the-art architecture, luxury shopping experiences, and premium office spaces, it is designed to be the ultimate destination for businesses and high-end retail.',
    thumbnail: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1200&auto=format&fit=crop',
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
      { name: 'Standard 24-month', duration: '24 months', downPayment: '30%', monthly: 'PKR 150,000', notes: 'No markup for first 6 months', image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=800&auto=format&fit=crop' },
      { name: 'Flexible 36-month', duration: '36 months', downPayment: '20%', monthly: 'PKR 105,000', notes: 'Low down-payment option', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop' },
      { name: 'Spot Cash', duration: 'One-time', downPayment: '100%', notes: '5% discount on full payment', image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=800&auto=format&fit=crop' }
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
      phone: '051-4500000-2',
      email: 'info@alammana.com',
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
    thumbnail: 'https://images.unsplash.com/photo-1582682255760-b88eb3be4cb5?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1582682255760-b88eb3be4cb5?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop'
    ],
    features: ['World-class Shopping Mall', 'Luxury Apartments', 'Food Courts', 'Smart Security System'],
    status: 'In Progress'
  },
  {
    id: 'b17-shops-apartments',
    title: 'B-17 Multi Gardens Shops & Apartments',
    category: 'Residential',
    location: 'B-17 Multi Gardens, Islamabad',
    description: 'Prime commercial shops and contemporary apartments in the vibrant B-17 sector.',
    fullDescription: 'Located in the highly sought-after B-17 Multi Gardens, this project offers high-visibility commercial shops on the lower floors and beautifully designed contemporary apartments above, making it perfect for both investors and residents.',
    thumbnail: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop',
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
    thumbnail: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop'
    ],
    features: ['Easy Installment Plans', 'Parks & Greenery', 'Underground Electrification', 'Gated Community'],
    status: 'Planned'
  },
  {
    id: 'house-construction-projects',
    title: 'Custom House Construction',
    category: 'Development',
    location: 'Faisal Hills & B-17, Islamabad',
    description: 'Premium custom home construction featuring front elevation, approved architect diagrams, and full execution.',
    fullDescription: 'Alammana Developers excels in custom house construction. We manage the entire lifecycle from approved architectural diagrams and breathtaking front elevation designs to final execution. Our homes are built with top-tier materials, adhering to the highest structural standards and aesthetics.',
    thumbnail: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop' // architectural feeling
    ],
    features: ['Modern Front Elevations', 'Approved Architectural Diagrams', 'Turnkey Construction', 'Premium Finishes'],
    status: 'Completed'
  },
  {
    id: 'luxury-villa-b17',
    title: 'Luxury Villa - B-17 Sector',
    category: 'Development',
    location: 'B-17 Multi Gardens, Islamabad',
    description: 'A 10-marla luxury villa featuring high-end finishes, modern front elevation, and smart home systems.',
    fullDescription: 'This 10-marla luxury villa in B-17 Multi Gardens is a testament to our turnkey construction capabilities. The architectural diagram was meticulously designed to maximize natural light. It features a contemporary front elevation, 5 spacious bedrooms, imported fixtures, and a landscaped front yard.',
    thumbnail: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687940-c52fe0463949?q=80&w=1200&auto=format&fit=crop'
    ],
    features: ['Contemporary Front Elevation', 'Smart Home Integration', 'Imported Fixtures', 'Turnkey Delivery'],
    status: 'Completed'
  },
  {
    id: 'minimalist-home-faisal-hills',
    title: 'Modern Minimalist Home',
    category: 'Development',
    location: 'Faisal Hills, Taxila/Islamabad',
    description: 'A sleek, minimalist 1-kanal residence currently under construction in Faisal Hills.',
    fullDescription: 'Currently in the grey structure phase, this 1-kanal minimalist home in Faisal Hills is built on an approved open-plan architectural diagram. The front elevation showcases clean geometric lines and large glass facades. We are managing the entire end-to-end construction.',
    thumbnail: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop'
    ],
    features: ['Geometric Front Elevation', 'Open-Plan Layout', 'Energy Efficient', 'Under Construction'],
    status: 'In Progress'
  },
  {
    id: 'spanish-style-residence',
    title: 'Spanish Style Residence',
    category: 'Development',
    location: 'Faisal Town, Islamabad',
    description: 'An elegant 14-marla house featuring classic Spanish architectural elements and modern interiors.',
    fullDescription: 'This custom construction project blends traditional Spanish exterior aesthetics with ultra-modern interior layouts. The front elevation features classic terracotta roof tiles, arched windows, and a warm color palette. Delivered fully finished to the client.',
    thumbnail: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop'
    ],
    features: ['Spanish Architecture', 'Terracotta Roofing', 'Custom Woodwork', 'Approved Layouts'],
    status: 'Completed'
  },
  {
    id: 'faisal-hills-commercial-plaza',
    title: 'Mid-Rise Commercial Plaza',
    category: 'Development',
    location: 'Faisal Hills, Taxila/Islamabad',
    description: 'A 5-story commercial plaza currently being developed in the commercial hub of Faisal Hills.',
    fullDescription: 'We are spearheading the construction of this mid-rise commercial plaza. It includes lower-floor retail shops and upper-floor executive offices. The architectural diagram optimizes commercial visibility, and the modern glass front elevation is designed to attract top-tier businesses.',
    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop'
    ],
    features: ['Glass Front Elevation', 'Retail & Corporate Space', 'Basement Parking', 'Earthquake Resistant'],
    status: 'In Progress'
  }
];
