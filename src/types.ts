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
  // Personal contact & social profiles. All optional — only filled ones are
  // shown on the member's page and linked in their Google (Person) schema.
  socials?: {
    phone?: string;      // e.g. '+92 300 1234567'
    whatsapp?: string;   // number with country code, digits only: '923001234567'
    facebook?: string;   // full URL: 'https://www.facebook.com/username'
    instagram?: string;  // full URL: 'https://www.instagram.com/username/'
    linkedin?: string;   // full URL: 'https://www.linkedin.com/in/username/'
    tiktok?: string;     // full URL: 'https://www.tiktok.com/@username'
    youtube?: string;    // full URL: 'https://www.youtube.com/@username'
    twitter?: string;    // full URL: 'https://x.com/username'
  };
}

export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Development' | 'Marketing';
  location: string;
  /** Who is building it. These are partner projects — Alammana sells inventory,
   *  it does not develop them. Stating this keeps the site accurate and honest. */
  developer?: string;
  /** Alammana's role, e.g. 'Authorised Sales Partner'. */
  role?: string;
  /** Regulatory approval, e.g. 'RDA Approved (Faisal Hills NOC)'. */
  approval?: string;
  description: string;
  fullDescription: string;
  thumbnail: string;
  /** Official renders / marketing images from the developer. */
  images: string[];
  /** Real construction-progress photographs, newest first. Shown in their own
   *  labelled section so buyers can see the building actually going up — this
   *  is the most persuasive content on a partner-project page. */
  progressPhotos?: string[];
  /** Official brochure. A local PDF in public/brochures/ is preferred so it
   *  keeps working; an external viewer link is accepted as a fallback. */
  brochureUrl?: string;
  /** Design architect, where different from the developer. */
  architect?: string;
  /** Dated one-line construction status, e.g. 'Middle tower at 8th floor'.
   *  Shown beside the progress photos — a dated status is far more credible
   *  than an undated render. */
  progressNote?: string;
  progressDate?: string;
  /** Unit types with their floor plan and interior render. */
  unitPlans?: Array<{
    name: string;
    size: string;
    /** Floor plan drawing. */
    plan?: string;
    /** Interior render of the same unit. */
    render?: string;
    notes?: string;
  }>;
  /** Floor-by-floor commercial unit sizes, for buyers comparing shop levels. */
  commercialFloors?: Array<{ floor: string; minArea: string; maxArea: string }>;
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

/** One block/sector inside a housing society. */
export interface SocietyBlock {
  name: string;                 // e.g. 'Block A', 'Executive Block'
  status: string;               // e.g. 'Developed — possession handed over'
  summary: string;              // one or two sentences
  plotSizes: string[];          // e.g. ['5 Marla', '8 Marla', '1 Kanal']
  highlights?: string[];        // distinguishing features
  bestFor?: string;             // e.g. 'First-time buyers'
}

/** A housing society Alammana deals in. */
export interface Society {
  id: string;                   // URL slug
  name: string;
  tagline: string;
  city: string;                 // e.g. 'Taxila, Rawalpindi'
  developer: string;
  approval: string;             // honest NOC wording — never overstate
  approvalStatus: 'Approved' | 'In Process' | 'Pre-Launch';
  totalArea?: string;           // e.g. '11,823 Kanal'
  launched?: string;
  summary: string;              // short, for cards
  overview: string[];           // paragraphs for the detail page
  blocks: SocietyBlock[];
  amenities: string[];
  connectivity: string[];       // nearby roads/landmarks
  plotSizes: string[];          // society-wide range
  paymentNote?: string;         // instalment structure, kept indicative
  image: string;                // card + hero
  masterPlanImage?: string;
  mapEmbedUrl: string;          // https://maps.google.com/maps?q=…&output=embed
  faqs?: Array<{ q: string; a: string }>;
  sources?: string[];           // where the facts came from, for future checking
}

// A home Alammana is constructing (or has constructed) on the published
// payment-plan rates. Rendered by the standard template at /constructions/[id].
export interface ConstructionProject {
  id: string;                       // URL slug, e.g. 'block-a-10-marla-modern'
  title: string;                    // e.g. '10 Marla Modern Home — Block A'
  block: string;                    // e.g. 'Block A, Faisal Hills'
  plotAddress?: string;             // e.g. 'Plot 5683, Street 129, Block A'
  plotSize: string;                 // e.g. '10 Marla'
  finishType: 'Gray Structure' | 'Fully Finished';
  status: 'Under Construction' | 'Completed' | 'Starting Soon';
  shortDescription: string;         // one line, shown on cards
  fullDescription: string;          // full paragraph, shown on detail page
  /** What the client asked us to achieve — the brief / project goals. Renders as
   *  a distinct "The Brief" panel. Optional, but it is what makes a project page
   *  read like a case study rather than a listing. */
  brief?: string;
  elevationImage: string;           // front elevation render/photo (hero image)
  approvedMapImage?: string;        // photo/scan of the approved map (naqsha)
  gallery: string[];                // additional site/interior photos
  locationLabel: string;            // e.g. 'Street 12, Block A, Faisal Hills, Taxila'
  mapEmbedUrl?: string;             // Google Maps embed URL (free, no API key):
                                    // https://maps.google.com/maps?q=<search or lat,lng>&output=embed
  specs?: Array<{ label: string; value: string }>; // e.g. Bedrooms 5, Bathrooms 6, Covered Area 4200 sqft
  amenities?: string[];             // e.g. 'Solar-ready wiring', 'Imported tiles'
  expectedCompletion?: string;      // e.g. 'Q2 2027' — for in-progress work
  startedDate?: string;             // e.g. 'March 2025' — when we broke ground
  completedDate?: string;           // e.g. 'January 2026' — for handed-over homes
}

export interface BlogPost {
  id: string;                 // URL slug — becomes /blog/<id>
  title: string;
  excerpt: string;
  content: string;            // markdown, rendered by react-markdown
  date: string;               // human readable, e.g. 'August 17, 2026'
  isoDate: string;            // 'YYYY-MM-DD' — used for datePublished in schema
  updatedIsoDate?: string;    // set when you materially revise an article
  author: string;             // must match a name in data/team.ts
  category: string;
  image: string;
  readTime: string;
  /** Rendered as an accordion and emitted as FAQPage schema — this is what wins
   *  featured snippets and gets quoted by AI answer engines. */
  faqs?: Array<{ q: string; a: string }>;
  tags?: string[];
  /** Short, factual answer to the article's core question, shown right under the
   *  title. Written so a search engine or AI assistant can lift it verbatim. */
  keyTakeaway?: string;
}
