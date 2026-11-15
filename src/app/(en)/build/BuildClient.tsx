'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Building2, Compass, ShieldCheck, Video, CalendarCheck, CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import { CONTACT, whatsappLink } from '../../../lib/contact';
import { realConstructions } from '../../../data/constructions';
import ConstructionCard from '../../../components/ConstructionCard';

const steps = [
  {
    step: '01',
    title: 'Plot Verification & Feasibility',
    desc: 'We walk your plot with you in Faisal Hills, B-17, or Faisal Town. We inspect soil conditions, elevation level, boundary lines, and society water/electricity infrastructure before designing.',
  },
  {
    step: '02',
    title: 'Architectural & 3D Elevation Design',
    desc: 'Our architects create customized floor layouts and photorealistic 3D elevations (Spanish, Contemporary, or Minimalist) designed to maximize natural sunlight and ventilation under society bye-laws.',
  },
  {
    step: '03',
    title: 'NOC & RDA Map Approval',
    desc: 'We handle society vetting and submission of structural, architectural, electrical, and plumbing drawings to the engineering directorate, securing official building permissions without delays.',
  },
  {
    step: '04',
    title: 'Live Site Camera & Portal Setup',
    desc: 'Before ground-breaking, we install high-definition 24/7 site cameras and create your private portal login. You and your family can inspect excavation and concrete pours in real-time from anywhere in the world.',
  },
  {
    step: '05',
    title: 'Engineered Grey Structure Build',
    desc: 'Construction proceeds under full-time civil engineering supervision using certified Grade 60 steel, fresh OPC cement, and laboratory-tested concrete cylinders for all slabs and columns.',
  },
  {
    step: '06',
    title: 'Turnkey Finishing & Key Handover',
    desc: 'Tile laying, custom cabinetry, solid wood doors, Grohe/Porta sanitary fixtures, electrical fittings, and painting. Final deep cleaning, testing of all utilities, and handover of your keys.',
  },
];

export default function BuildClient() {
  return (
    <div className="pt-32 md:pt-36 pb-24 bg-paper min-h-screen">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-xs uppercase tracking-widest font-bold text-burgundy mb-4">
          <Link href="/" className="hover:underline">Home</Link> / <span>Build It With Alammana</span>
        </div>

        {/* Hero Header */}
        <div className="max-w-4xl mb-16">
          <span className="inline-flex items-center gap-2 bg-burgundy/10 text-burgundy px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-bold mb-4">
            <Building2 size={14} /> Custom Residential & Commercial Builders
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-ink mb-6 leading-tight">
            Build It With <span className="italic text-burgundy">Alammana Developers</span>
          </h1>
          <p className="text-lg text-ink/75 leading-relaxed mb-8">
            Whether you own a 5 Marla, 10 Marla, or 1 Kanal plot in Faisal Hills, B-17 Multi Gardens, or Islamabad, 
            we build your custom home on fixed, published rates with complete architectural transparency, 
            licensed engineering oversight, and 24/7 live site video streaming.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={whatsappLink('Hello Alammana, I own a plot and would like to build with you.')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-burgundy text-white px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-opacity"
            >
              Start Your Project on WhatsApp
            </a>
            <Link
              href="/packages"
              className="border border-sand bg-white text-ink px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-beige transition-colors"
            >
              View Construction Packages
            </Link>
          </div>
        </div>

        {/* Trust Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-3xl border border-sand/40 p-8 mb-20">
          <div>
            <span className="text-3xl lg:text-4xl font-serif font-bold text-burgundy block">60+</span>
            <span className="text-xs uppercase tracking-wider text-ink/60 font-semibold">Projects Completed</span>
          </div>
          <div>
            <span className="text-3xl lg:text-4xl font-serif font-bold text-burgundy block">100%</span>
            <span className="text-xs uppercase tracking-wider text-ink/60 font-semibold">Grade 60 Steel</span>
          </div>
          <div>
            <span className="text-3xl lg:text-4xl font-serif font-bold text-burgundy block">24/7</span>
            <span className="text-xs uppercase tracking-wider text-ink/60 font-semibold">Live Camera Feeds</span>
          </div>
          <div>
            <span className="text-3xl lg:text-4xl font-serif font-bold text-burgundy block">1-Year</span>
            <span className="text-xs uppercase tracking-wider text-ink/60 font-semibold">Handover Warranty</span>
          </div>
        </div>

        {/* Step-by-Step Construction Roadmap */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-burgundy mb-2 block">Our Methodology</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-ink">How We Build Your House: Step by Step</h2>
            <p className="text-sm text-ink/65 mt-3">From empty plot to finished keys with zero ambiguity at any stage.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((s, idx) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white rounded-3xl border border-sand/50 p-8 hover:border-burgundy/40 hover:shadow-lg transition-all"
              >
                <span className="text-3xl font-serif font-bold text-burgundy/30 mb-4 block">{s.step}</span>
                <h3 className="text-xl font-serif text-ink mb-3">{s.title}</h3>
                <p className="text-xs sm:text-sm text-ink/70 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Live Constructions Preview */}
        {realConstructions.length > 0 && (
          <div className="mb-24">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-burgundy block mb-2">On-Ground Proof</span>
                <h2 className="text-3xl sm:text-4xl font-serif text-ink">Homes Currently Under Construction</h2>
              </div>
              <Link href="/constructions" className="text-xs uppercase tracking-widest font-bold text-burgundy border-b border-burgundy pb-1">
                See All Sites
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {realConstructions.slice(0, 3).map((item) => (
                <ConstructionCard key={item.id} project={item} />
              ))}
            </div>
          </div>
        )}

        {/* CTA Banner */}
        <div className="bg-burgundy text-white rounded-3xl p-10 md:p-14 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Ready to walk your plot with our engineers?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 text-sm leading-relaxed">
            Contact us today for a free on-site survey and a transparent, itemized construction estimate for your plot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${CONTACT.phoneHref}`}
              className="bg-white text-burgundy px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-beige transition-colors"
            >
              Call {CONTACT.phoneDisplay}
            </a>
            <a
              href={whatsappLink('Hello Alammana Developers, I would like to schedule a site meeting.')}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/40 px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-white/10 transition-colors"
            >
              Schedule via WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
