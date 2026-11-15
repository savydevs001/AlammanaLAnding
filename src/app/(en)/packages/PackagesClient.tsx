'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Check, ArrowRight, ShieldCheck, Video, FileText, Phone, Building2, Sparkles, Home } from 'lucide-react';
import { CONTACT, whatsappLink } from '../../../lib/contact';

const packages = [
  {
    id: '5-marla-grey',
    name: '5 Marla Grey Structure Package',
    tag: 'Official Faisal Hills Rate List',
    style: 'Contemporary / Spanish Structural Shell',
    price: 'From PKR 1.355 Crore*',
    rate: '30% Down Payment (From PKR 40.65 Lacs)',
    coveredArea: '2,300 sq ft Covered Area (G+1+Mumty · 25×50)',
    description: 'The solid engineered structural shell built on approved society naqsha with Grade 60 steel, OPC cement, and 1.5 years installment duration.',
    highlights: [
      'Excavation, anti-termite treatment, lean concrete bed',
      'RCC columns, beams & slabs with certified Grade 60 steel',
      'Awwal quality solid brickwork with cement-sand mortar',
      'Internal & external smooth float plaster finish',
      'Concealed PPR-C water supply lines & UPVC drain lines',
      'Concealed PVC electrical conduits & back-boxes',
      'Underground RCC water tank & overhead water tank',
      'Perimeter boundary walls with security plaster',
      '24/7 live site camera access and private client portal',
    ],
    cta: 'Enquire for 5 Marla Grey',
  },
  {
    id: '5-marla-turnkey',
    name: '5 Marla Turnkey Spanish Home',
    tag: 'Move-in Ready Turnkey',
    style: 'Al Ammana Spanish / Modern Villa',
    price: 'From PKR 1.815 Crore*',
    rate: '20% Down Payment (From PKR 36.30 Lacs)',
    coveredArea: '2,300 sq ft Handover (G+1+Mumty · 25×50)',
    description: 'Complete luxury turnkey home handover on 2-year installment plan across Executive (from 1.815 Cr), Premium (from 2.095 Cr), and Luxury (from 2.67 Cr) finish tiers.',
    highlights: [
      'Includes complete 5 Marla Grey Structure foundation & shell',
      '60×120 cm high-gloss porcelain floor and bath tiles',
      'Semi-solid wood main door and veneer internal doors',
      'Modern acrylic modular kitchen with granite/quartz tops',
      'Porta / Master luxury sanitary ware and vanity mirrors',
      'Pakistan Cables pure copper wiring with LED panel lighting',
      '1.6mm powder-coated aluminium windows with tinted glass',
      'Gypsum false ceilings with hidden warm profile lights',
      'Berger / ICI Dulux velvet interior and weather-shield paint',
    ],
    cta: 'Book 5 Marla Turnkey',
  },
  {
    id: '8-marla-villa',
    name: '8 Marla Luxury Residence',
    tag: 'Spacious 4-Bedroom Home',
    style: 'Spanish Colonial / Modern Minimalist',
    price: 'From PKR 1.90 Cr (Grey) / PKR 2.54 Cr (Finished)*',
    rate: '20%–30% Down Payment · 1.5–2 Years Plan',
    coveredArea: '3,200 sq ft Covered Area (G+1+Mumty · 30×60)',
    description: 'Spacious double-storey 4-bedroom home with dedicated car porch, double kitchen, servant quarter, and scenic Margalla foothill views.',
    highlights: [
      'Heavy-duty RCC framing with 11+ tons of Grade 60 steel',
      'Solid Ash wood entrance door with digital smart lock',
      'Double custom kitchens with soft-close hardware',
      'Imported porcelain tile bathrooms with vanity mirrors',
      'Separate drawing & dining room on ground floor',
      'Concealed copper AC piping and solar-ready conduiting',
      'Rooftop BBQ terrace and laundry mumty',
      'Full PEC engineer supervision with concrete cylinder lab tests',
      'Comprehensive 1-year post-handover maintenance warranty',
    ],
    cta: 'Book 8 Marla Villa',
  },
  {
    id: '10-marla-luxury',
    name: '10 Marla Executive Villa Package',
    tag: 'Family Favorite Double-Unit',
    style: 'Spanish Colonial / Modern Cubist',
    price: 'From PKR 2.37 Cr (Grey) / PKR 3.21 Cr (Finished)*',
    rate: '20%–30% Down Payment · 1.5–2 Years Plan',
    coveredArea: '4,200 sq ft Covered Area (G+1+Mumty · 35×70)',
    description: 'Executive double-unit residence (5 bedrooms, 2 kitchens, 2-car garage) delivered on official Block D, C, B, A, or Executive rate cards.',
    highlights: [
      'Engineered for 35×70 plot dimensions under RDA bye-laws',
      'Heavy-duty RCC framing with 15+ tons of Grade 60 steel',
      'Solid Ash wood entrance door with digital smart lock',
      'Double custom kitchens with soft-close Blum hardware',
      'Spacious master bedrooms with walk-in dressing wardrobes',
      'Tempered glass shower enclosures and Grohe concealed mixers',
      'Landscaped front lawn and open rear setback courtyard',
      'Solar-ready wiring and dedicated AC copper piping',
      'Private client portal with daily milestone updates',
    ],
    cta: 'Book 10 Marla Villa',
  },
  {
    id: '1-kanal-estate',
    name: '1 Kanal Signature Estate Package',
    tag: 'Ultra-Luxury 6-Bedroom Estate',
    style: 'Custom Architectural Landmark',
    price: 'From PKR 3.715 Cr (Grey) / PKR 5.065 Cr (Finished)*',
    rate: '20%–30% Down Payment · 1.5–2 Years Plan',
    coveredArea: '6,500 sq ft Covered Area (G+1+Mumty · 50×90)',
    description: 'Bespoke estate villa with double-height grand lobby, 6 attached suites, double kitchens, servant wing, and luxury designer finishes.',
    highlights: [
      'Custom architectural and 3D elevation design included',
      'Imported Spanish/Italian marble and porcelain floor slabs',
      'Smart home automation (lighting, climate, security)',
      'Double-height foyer with grand crystal chandelier framing',
      'Designer show kitchen and dedicated dirty/prep kitchen',
      'Servant quarters with private external staircase',
      'Rooftop BBQ terrace with panoramic Margalla mountain views',
      'Full PEC engineer supervision with concrete cylinder lab tests',
      'Comprehensive 1-year post-handover maintenance warranty',
    ],
    cta: 'Request 1 Kanal Proposal',
  },
];

export default function PackagesClient() {
  return (
    <div className="pt-32 md:pt-36 pb-24 bg-paper min-h-screen">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Breadcrumb */}
        <div className="text-xs uppercase tracking-widest font-bold text-burgundy mb-4">
          <Link href="/" className="hover:underline">Home</Link> / <span>Construction Packages</span>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl mb-16">
          <span className="inline-flex items-center gap-2 bg-burgundy/10 text-burgundy px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-bold mb-4">
            <Sparkles size={14} /> Official Faisal Hills Construction Packages
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-ink mb-6 leading-tight">
            Faisal Hills House <span className="italic text-burgundy">Construction Packages</span>
          </h1>
          <p className="text-lg text-ink/75 leading-relaxed mb-6">
            Alammana Developers offers transparent, fixed-rate residential construction packages across 
            all blocks of <strong>Faisal Hills, Faisal Town, and B-17 Multi Gardens</strong>. Choose from our 
            engineered Grey Structure packages starting from <strong>PKR 1.35 Crore</strong>, or move into a 
            fully-finished Spanish or contemporary luxury home.
          </p>
          <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-wider text-ink/70">
            <span className="flex items-center gap-1.5"><ShieldCheck size={16} className="text-burgundy" /> Grade 60 Certified Steel</span>
            <span className="flex items-center gap-1.5"><Video size={16} className="text-burgundy" /> 24/7 Live Site Cameras</span>
            <span className="flex items-center gap-1.5"><FileText size={16} className="text-burgundy" /> Published Milestone Schedules</span>
          </div>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl border border-sand/50 p-8 flex flex-col justify-between hover:shadow-xl hover:border-burgundy/30 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] uppercase tracking-wider font-bold bg-beige text-ink/70 px-3 py-1 rounded-full">
                    {pkg.tag}
                  </span>
                  <span className="text-xs text-burgundy font-bold uppercase tracking-wider">
                    {pkg.style}
                  </span>
                </div>
                <h2 className="text-2xl font-serif text-ink mb-2">{pkg.name}</h2>
                <p className="text-xs text-ink/60 mb-6">{pkg.coveredArea}</p>

                <div className="mb-6 pb-6 border-b border-sand/30">
                  <span className="text-3xl font-serif font-bold text-burgundy block">{pkg.price}</span>
                  <span className="text-xs text-ink/50">{pkg.rate}</span>
                </div>

                <p className="text-sm text-ink/70 mb-6 leading-relaxed">{pkg.description}</p>

                <div className="space-y-3 mb-8">
                  <span className="text-[11px] uppercase tracking-widest font-bold text-ink/40 block">Key Inclusions</span>
                  {pkg.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-ink/80 leading-snug">
                      <Check size={14} className="text-burgundy shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <a
                  href={whatsappLink(`Hello Alammana, I am interested in the ${pkg.name} for my plot.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-burgundy text-white py-3.5 px-6 rounded-full text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  {pkg.cta} <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Callout */}
        <div className="bg-ink text-paper rounded-3xl p-10 md:p-14 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-beige text-xs uppercase tracking-widest font-bold block mb-3">Transparent Architecture</span>
              <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">
                Grey Structure vs. Turnkey Finishing: Which Package Fits Your Budget?
              </h2>
              <p className="text-paper/70 leading-relaxed mb-6">
                Our grey structure packages include the complete engineered shell—excavation, footings, Grade 60 steel, 
                mortar, plaster, water reservoirs, and concealed plumbing/electrical rough-ins. Turnkey packages 
                add complete premium finishing with Spanish, contemporary, or modern minimalist interior treatments.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/payment-plans"
                  className="bg-burgundy text-white px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-opacity"
                >
                  Download Rate Lists (PDF)
                </Link>
                <Link
                  href="/tools/construction-cost"
                  className="border border-sand/40 text-beige px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-white/10 transition-colors"
                >
                  Cost Calculator
                </Link>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-5 text-sm">
              <h3 className="font-serif text-xl text-beige mb-2">Every Package Guaranteed</h3>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-burgundy flex items-center justify-center text-white shrink-0 mt-0.5 text-xs font-bold">1</div>
                <div>
                  <strong className="text-white block">Fixed Block-Wise Price</strong>
                  {/* per sq ft rate commented out per user instruction:
                  <span className="text-paper/60 text-xs">Priced strictly per sq ft of covered area.</span> */}
                  <span className="text-paper/60 text-xs">Priced on clear milestone schedules and published rate cards. No hidden escalation or surprise labor charges.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-burgundy flex items-center justify-center text-white shrink-0 mt-0.5 text-xs font-bold">2</div>
                <div>
                  <strong className="text-white block">24/7 Live Site Camera</strong>
                  <span className="text-paper/60 text-xs">Watch your concrete pours and brickwork in real-time from anywhere in Pakistan or abroad.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-burgundy flex items-center justify-center text-white shrink-0 mt-0.5 text-xs font-bold">3</div>
                <div>
                  <strong className="text-white block">Direct Contact Lines</strong>
                  <span className="text-paper/60 text-xs">Call our engineering and sales desks directly at {CONTACT.phoneDisplay} or {CONTACT.phoneDisplayAlt}.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-10">Frequently Asked Questions About Our Packages</h2>
          <div className="space-y-4">
            {[
              {
                q: 'What is the starting price for a 5 Marla house construction package in Faisal Hills?',
                /* per sqft rate commented out per user instruction:
                a: 'A standard double-storey 5 Marla grey structure package in Faisal Hills starts from approximately PKR 1.35 Crore (around Rs. 2,850/sq ft for ~2,000 sq ft covered area). A full turnkey package with luxury Spanish or modern finishing ranges from PKR 2.45 Crore upwards.',
                */
                a: 'A standard double-storey 5 Marla grey structure package in Faisal Hills starts from approximately PKR 1.355 Crore on our official rate sheet for 2,300 sq ft covered area (G+1+Mumty). A full turnkey package with luxury Spanish or modern finishing ranges from PKR 1.815 Crore upwards on a 2-year milestone installment schedule.',
              },
              {
                q: 'Can I customize the architectural style of my package?',
                a: 'Yes. Alammana Developers designs custom architectural elevations including Spanish-style villas with archways and clay roof tiles, contemporary modern villas, and sleek minimalist designs tailored to your taste and society building bye-laws.',
              },
              {
                q: 'Are site cameras and client portal access included in all packages?',
                a: 'Yes. Every client—whether building a 5 Marla home or a 1 Kanal estate—receives dedicated 24/7 high-definition camera access and a login to our client tracking portal.',
              },
              {
                q: 'How are payments scheduled for construction packages?',
                a: 'Payments are never calendar-based. They are strictly linked to physical milestones: booking down payment, foundation completion, ground floor slab casting, first floor slab casting, plaster completion, and final handover balance.',
              },
            ].map((faq, idx) => (
              <details key={idx} className="bg-white rounded-2xl border border-sand/40 p-6 group">
                <summary className="font-serif text-lg text-ink cursor-pointer list-none flex justify-between items-center gap-4">
                  <span>{faq.q}</span>
                  <span className="text-burgundy text-xl font-bold group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-sm text-ink/70 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
