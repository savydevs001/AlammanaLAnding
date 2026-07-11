export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  longBio: string;
  image: string;
  specialization: string;
  email: string;
  education: string;
  experience: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Development' | 'Marketing';
  location: string;
  description: string;
  fullDescription: string;
  thumbnail: string;
  images: string[];
  features: string[];
  status: 'Completed' | 'In Progress' | 'Planned';
  completionDate?: string;
  client?: string;
  amenities?: string[];
  structure?: string;
  mapLink?: string;
  paymentPlans?: Array<{
    name: string;
    duration: string;
    downPayment: string;
    monthly?: string;
    notes?: string;
    image?: string;
  }>;
  pricing?: {
    pricePerSqft?: string;
    units?: Array<{
      type: string;
      size?: string;
      price: string;
    }>;
  };
  startingPrice?: string;
  summaryStats?: Array<{ label: string; value: string }>;
  surroundings?: string[];
  unitBreakdown?: Array<{ label: string; size?: string }>;
  contact?: {
    phone?: string;
    email?: string;
    address?: string;
  };
}

// A home Alammana is constructing (or has constructed) on the published
// payment-plan rates. Rendered by the standard template at /constructions/[id].
export interface ConstructionProject {
  id: string;                       // URL slug, e.g. 'block-a-10-marla-modern'
  title: string;                    // e.g. '10 Marla Modern Home — Block A'
  block: string;                    // e.g. 'Block A, Faisal Hills'
  plotSize: string;                 // e.g. '10 Marla'
  finishType: 'Gray Structure' | 'Fully Finished';
  status: 'Under Construction' | 'Completed' | 'Starting Soon';
  shortDescription: string;         // one line, shown on cards
  fullDescription: string;          // full paragraph, shown on detail page
  elevationImage: string;           // front elevation render/photo (hero image)
  approvedMapImage?: string;        // photo/scan of the approved map (naqsha)
  gallery: string[];                // additional site/interior photos
  locationLabel: string;            // e.g. 'Street 12, Block A, Faisal Hills, Taxila'
  mapEmbedUrl?: string;             // Google Maps embed URL (free, no API key):
                                    // https://maps.google.com/maps?q=<search or lat,lng>&output=embed
  specs?: Array<{ label: string; value: string }>; // e.g. Bedrooms 5, Bathrooms 6, Covered Area 4200 sqft
  amenities?: string[];             // e.g. 'Solar-ready wiring', 'Imported tiles'
  expectedCompletion?: string;      // e.g. 'Q2 2027'
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
}
