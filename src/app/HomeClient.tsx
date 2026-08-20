'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { projects } from '../data/projects';
import { constructions } from '../data/constructions';
import { societies } from '../data/societies';
import { team } from '../data/team';
import ProjectCard from '../components/ProjectCard';
import ConstructionCard from '../components/ConstructionCard';
import TeamCard from '../components/TeamCard';
import LeadForm from '../components/LeadForm';
import { ArrowRight, MapPin, Building2, Paintbrush, TrendingUp, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { CONTACT, whatsappLink } from '../lib/contact';

const services = [
  {
    icon: <Building2 className="text-burgundy" size={32} />,
    title: "Construction Development",
    desc: "From ground-breaking to final finishing, we manage the entire construction lifecycle with precision."
  },
  {
    icon: <Paintbrush className="text-burgundy" size={32} />,
    title: "Architectural Planning",
    desc: "Bespoke designs that combine modern luxury with the natural landscape of Islamabad."
  },
  {
    icon: <TrendingUp className="text-burgundy" size={32} />,
    title: "Real Estate Marketing",
    desc: "Strategic placement and marketing for major developments like Faisal Hills."
  }
];

export default function HomeClient() {
  return (
    <div className="pt-20">
      {/* Hero — a real building, not a logo on a maroon panel.
          The previous hero showed no photograph of anything we build, and on
          mobile the entire first screen was text. Now the first thing anyone
          sees on any device is a building, with the headline over it. */}
      <section className="relative min-h-[85vh] lg:min-h-[calc(100vh-5rem)] flex items-end overflow-hidden">
        <img
          src="/assets/projects/faisal-jewel/hero.webp"
          alt="Faisal Jewel tower in Faisal Hills, Taxila — a project Alammana Developers sells"
          width={1400}
          height={816}
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Two stacked gradients: a heavy bottom one so the text is always
            legible, and a light top one so the fixed navbar keeps contrast. */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/10" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-paper/80 to-transparent" />

        <div className="relative w-full max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 pb-12 md:pb-16 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 bg-burgundy/90 text-white px-4 py-2 rounded-full text-[12px] uppercase tracking-[0.2em] font-bold mb-6">
              <MapPin size={13} /> Faisal Hills · Faisal Town · Taxila
            </span>

            {/* Was 96px across four lines. Now it fits two, and leads with the
                thing buyers actually search for. */}
            <h1 className="text-[2rem] leading-[1.1] sm:text-5xl lg:text-6xl font-serif text-paper mb-5">
              We build your house on{' '}
              <span className="italic text-beige">published rates</span>
            </h1>

            <p className="text-base md:text-lg text-paper/85 max-w-xl mb-8 leading-relaxed">
              Gray structure or fully finished, in every block of Faisal Hills. Our rates are
              published and downloadable — so you know the cost before you commit, not after.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link
                href="/payment-plans"
                className="bg-burgundy text-white px-8 py-4 rounded-full text-sm uppercase tracking-widest font-bold hover:opacity-90 transition-opacity text-center shadow-lg shadow-black/30"
              >
                See Construction Rates
              </Link>
              <a
                href={whatsappLink('Hello Alammana, I would like to know the construction rate for my plot in Faisal Hills.')}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/95 text-ink px-8 py-4 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-white transition-all text-center"
              >
                Ask on WhatsApp
              </a>
            </div>

            {/* Trust strip. Small, factual, and legible against the image. */}
            <ul className="flex flex-wrap gap-x-7 gap-y-3 text-paper/90 text-sm">
              {[
                '60+ projects completed',
                'RDA-approved societies',
                'Fixed, published rates',
              ].map(t => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-beige shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Info Grid (Design Bottom Grid) */}
      <section className="bg-white border-y border-sand/40 grid grid-cols-1 md:grid-cols-4">
        <div className="border-b md:border-b-0 md:border-r border-sand/40 p-8 flex flex-col justify-center">
          <span className="text-[12px] font-bold text-ink/40 uppercase tracking-widest mb-1">Headquarters</span>
          <p className="text-sm font-semibold">Vertical Four, A Block, Faisal Hills</p>
          <p className="text-[12px] text-ink/50">Near Arch Monument, Taxila</p>
        </div>
        <div className="border-b md:border-b-0 md:border-r border-sand/40 p-8 flex flex-col justify-center">
          <span className="text-[12px] font-bold text-ink/40 uppercase tracking-widest mb-1">Chairman</span>
          <p className="text-sm font-semibold">Ch. Muhammad Abdullah</p>
          <p className="text-[12px] text-ink/50 italic">Alammana Developers</p>
        </div>
        <div className="border-b md:border-b-0 md:border-r border-sand/40 p-8 flex flex-col justify-center">
          <span className="text-[12px] font-bold text-ink/40 uppercase tracking-widest mb-1">Construction</span>
          <p className="text-sm font-semibold">Mohsin Ali</p>
          <p className="text-[12px] text-ink/50 italic">Director of Construction</p>
        </div>
        <div className="p-8 flex items-center justify-center md:justify-end">
          <div className="flex gap-4">
            <span className="text-[12px] font-bold text-ink/40 uppercase tracking-widest mr-4">Connect</span>
            <a href="https://www.facebook.com/alammana.pk" target="_blank" rel="noopener noreferrer" aria-label="Alammana Developers on Facebook" className="w-10 h-10 rounded-full border border-sand flex items-center justify-center text-xs hover:bg-burgundy hover:text-white transition-all">FB</a>
            <a href="https://www.instagram.com/alammanapk/" target="_blank" rel="noopener noreferrer" aria-label="Alammana Developers on Instagram" className="w-10 h-10 rounded-full border border-sand flex items-center justify-center text-xs hover:bg-burgundy hover:text-white transition-all">IG</a>
          </div>
        </div>
      </section>

      {/* Overseas strip — this audience has the most money and the most doubt,
          and previously had nothing on the site speaking to them. */}
      <section className="py-14 bg-ink text-paper">
        <div className="max-w-[1600px] mx-auto px-4 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-beige text-xs uppercase tracking-widest font-bold mb-3 block">
              Living Abroad?
            </span>
            <h2 className="text-2xl md:text-3xl font-serif italic mb-3">
              You don&apos;t have to be here to build here
            </h2>
            <p className="text-paper/70 leading-relaxed">
              Dated progress photos, video walkthroughs from your plot, published rates and payments
              tied to milestones — so distance stops being the risk.
            </p>
          </div>
          <Link
            href="/overseas"
            className="shrink-0 inline-flex items-center gap-3 bg-burgundy text-white px-8 py-4 rounded-full text-sm uppercase tracking-[0.2em] font-bold hover:opacity-90 transition-opacity"
          >
            How It Works <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* Societies */}
      <section className="py-24 bg-paper" id="societies">
        <div className="max-w-[1600px] mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="text-burgundy text-xs uppercase tracking-widest font-bold mb-4 block">Where We Work</span>
              <h2 className="text-4xl md:text-5xl font-serif italic tracking-tight mb-4">Societies, Block by Block</h2>
              <p className="text-ink/60 leading-relaxed">
                Plot sizes, development status and approvals for every society we deal in — including
                which ones are still awaiting their NOC.
              </p>
            </div>
            <Link href="/societies" className="text-xs uppercase tracking-[0.2em] font-bold border-b border-burgundy pb-2 hover:opacity-70 transition-opacity whitespace-nowrap">
              View All Societies
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {societies.map((s) => (
              <Link
                key={s.id}
                href={`/societies/${s.id}`}
                className="group relative overflow-hidden rounded-3xl border border-sand/40 aspect-[4/5] shadow-sm hover:shadow-xl transition-shadow"
              >
                <img
                  src={s.image}
                  alt={`${s.name} — ${s.city}`}
                  width={1600}
                  height={1200}
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-paper">
                  <span className="text-[12px] uppercase tracking-[0.25em] font-bold text-beige mb-2">
                    {s.approvalStatus} · {s.blocks.length} Blocks
                  </span>
                  <h3 className="text-xl font-serif leading-tight mb-1">{s.name}</h3>
                  <p className="text-[12px] text-paper/70">{s.city}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Highlight */}
      <section className="py-24" id="portfolio">
        <div className="max-w-[1600px] mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-burgundy text-xs uppercase tracking-widest font-bold mb-4 block">Portfolio</span>
              <h2 className="text-5xl font-serif italic tracking-tight">Featured Projects</h2>
            </div>
            <Link href="/portfolio" className="text-xs uppercase tracking-[0.2em] font-bold border-b border-burgundy pb-2 hover:opacity-70 transition-opacity">
              View All Works
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Construction & Development Focus Section */}
      <section className="py-24 bg-beige/30" id="development-projects">
        <div className="max-w-[1600px] mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-burgundy text-xs uppercase tracking-widest font-bold mb-4 block">Construction & Development</span>
              <h2 className="text-5xl font-serif italic tracking-tight">Our Developments</h2>
              <p className="text-ink/60 mt-4 max-w-2xl">
                Explore our ongoing and completed construction milestones, featuring approved architectural diagrams, custom elevations, and premium turnkey development models.
              </p>
            </div>
            <Link href="/payment-plans" className="hidden md:block text-xs uppercase tracking-[0.2em] font-bold border-b border-burgundy pb-2 hover:opacity-70 transition-opacity whitespace-nowrap">
              View Construction Rates
            </Link>
          </div>
          <Link href="/payment-plans" className="md:hidden inline-block mb-10 text-xs uppercase tracking-[0.2em] font-bold border-b border-burgundy pb-2">
            View Construction Rates
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {constructions.slice(0, 3).map((project) => (
              <ConstructionCard key={project.id} project={project} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/constructions" className="inline-block text-xs uppercase tracking-[0.2em] font-bold border-b border-burgundy pb-2 hover:opacity-70 transition-opacity">
              See All Homes We&apos;re Building
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-ink text-paper overflow-hidden relative">
        <div className="max-w-[1600px] mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-beige text-xs uppercase tracking-widest font-bold mb-6 block">Our Expertise</span>
              <h2 className="text-5xl font-serif mb-12 leading-tight">Comprehensive Real Estate <br /><span className="italic text-beige/60">Solutions</span></h2>
              
              <div className="space-y-12">
                {services.map((service, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-6"
                  >
                    <div className="bg-paper p-4 aspect-square flex items-center justify-center">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-serif mb-2 text-beige">{service.title}</h3>
                      <p className="text-paper/60 text-sm leading-relaxed">{service.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                   src="/assets/stock/architectural-plans.webp" 
                   alt="Architect preparing house construction drawings for an Alammana project"
                   className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-burgundy p-12 hidden lg:block">
                <blockquote className="text-2xl font-serif italic max-w-xs">
                  &quot;Architecture is a visual art, and the buildings speak for themselves.&quot;
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-24 bg-paper" id="about-info">
        <div className="max-w-[1600px] mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-burgundy text-xs uppercase tracking-widest font-bold mb-4 block">Our Reach</span>
            <h2 className="text-4xl font-serif mb-6 italic">Serving the Heart of Pakistan</h2>
            <p className="text-ink/60">
              Alammana Developers is strategically focused on the most promising urban landscapes 
              of Pakistan. Our primary operations are centered in the capital city, Islamabad, 
              and the burgeoning residential hub of Faisal Hills.
            </p>
          </div>

          {/* Was two large images with no link at all. Now every area is a real
              destination — and the Faisal Hills master plan does more work here
              than a decorative photo. */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <Link
              href="/societies/faisal-hills"
              className="lg:col-span-3 group relative block h-[300px] md:h-[420px] overflow-hidden rounded-3xl border border-sand/40 shadow-lg"
            >
              <img
                src="/assets/societies/faisal-hills-master-plan.webp"
                alt="Faisal Hills master plan showing Blocks A, B, C, D and the Executive Block, Taxila"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-paper">
                <span className="text-[12px] uppercase tracking-[0.3em] font-bold text-beige mb-2">
                  Master Plan
                </span>
                <h3 className="text-3xl font-serif mb-2">Faisal Hills, Taxila</h3>
                <p className="text-sm text-paper/80 max-w-md mb-4">
                  Eight blocks, each at a different stage. Explore which one fits how you plan to buy.
                </p>
                <span className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold">
                  Explore the blocks <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>

            <div className="lg:col-span-2 space-y-3">
              {societies.filter(s => s.id !== 'faisal-hills').map(s => (
                <Link
                  key={s.id}
                  href={`/societies/${s.id}`}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-sand/50 bg-white p-5 hover:border-burgundy/40 hover:shadow-md transition-all"
                >
                  <span>
                    <span className="block font-serif text-lg text-ink group-hover:text-burgundy transition-colors">
                      {s.name}
                    </span>
                    <span className="flex items-center gap-1.5 text-[12px] uppercase tracking-widest font-bold text-ink/40 mt-1">
                      <MapPin size={11} /> {s.city}
                    </span>
                  </span>
                  <ArrowRight size={16} className="text-burgundy shrink-0 transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
              <Link
                href="/societies"
                className="block text-center rounded-2xl bg-ink text-paper p-5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-burgundy transition-colors"
              >
                Compare All Societies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-beige/10" id="team-info">
        <div className="max-w-[1600px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif italic tracking-tight mb-4">Meet the Visionaries</h2>
            <p className="text-ink/60 uppercase tracking-widest text-[12px] font-bold">The Experts Behind Alammana Developers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {team.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 border-t border-burgundy/10" id="contact-info">
        <div className="max-w-[1600px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-5xl font-serif mb-8 leading-tight italic">Let&apos;s Discuss <br />Your Future Project</h2>
              <p className="text-ink/60 mb-12 max-w-md">
                Whether you&apos;re looking for an investment opportunity in Faisal Hills or architectural 
                consultation in Islamabad, our team is ready to help you build your vision.
              </p>
              
              <div className="space-y-8">
                <a href={`mailto:${CONTACT.email}`} className="flex items-center space-x-6 group">
                  <div className="w-12 h-12 rounded-full border border-burgundy flex items-center justify-center group-hover:bg-burgundy group-hover:text-paper transition-all shrink-0">
                    <ArrowRight size={20} />
                  </div>
                  <div>
                    <span className="text-[12px] uppercase tracking-widest block font-bold opacity-50">Email Us</span>
                    <span className="text-xl font-serif group-hover:text-burgundy transition-colors">{CONTACT.email}</span>
                  </div>
                </a>
                <a href={`tel:${CONTACT.phoneHref}`} className="flex items-center space-x-6 group">
                  <div className="w-12 h-12 rounded-full border border-burgundy flex items-center justify-center group-hover:bg-burgundy group-hover:text-paper transition-all shrink-0">
                    <ArrowRight size={20} />
                  </div>
                  <div>
                    <span className="text-[12px] uppercase tracking-widest block font-bold opacity-50">Call Us</span>
                    <span className="text-xl font-serif group-hover:text-burgundy transition-colors">{CONTACT.phoneDisplay}</span>
                  </div>
                </a>
              </div>
            </div>

            <LeadForm variant="plain" subjectPrefix="Homepage Enquiry" />
          </div>
        </div>
      </section>
    </div>
  );
}
