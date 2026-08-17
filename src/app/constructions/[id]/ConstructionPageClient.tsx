'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { constructions } from '../../../data/constructions';
import ConstructionCard from '../../../components/ConstructionCard';
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  CheckCircle2,
  FileCheck2,
  ExternalLink,
  Hammer,
  CalendarClock,
} from 'lucide-react';

export default function ConstructionPageClient({ id }: { id: string }) {
  const project = constructions.find(c => c.id === id);

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-4xl font-serif mb-4">Project Not Found</h1>
          <Link href="/constructions" className="text-burgundy underline uppercase tracking-widest text-xs font-bold">
            Back to Constructions
          </Link>
        </div>
      </div>
    );
  }

  const others = constructions.filter(c => c.id !== id).slice(0, 3);

  return (
    <div className="pt-20">
      {/* Hero — Front Elevation */}
      <section className="relative h-[65vh] md:h-[85vh] overflow-hidden">
        <img
          src={project.elevationImage}
          alt={`${project.title} — front elevation in ${project.block}`}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-24 text-paper">
          <Link
            href="/constructions"
            className="flex items-center space-x-2 text-xs uppercase tracking-[0.3em] font-bold mb-8 hover:text-beige transition-colors"
          >
            <ArrowLeft size={14} />
            <span>All Constructions</span>
          </Link>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-burgundy px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider">
              {project.status}
            </span>
            <span className="bg-white/90 text-ink px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider">
              {project.finishType}
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider">
              {project.plotSize}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif max-w-4xl leading-tight italic">
            {project.title}
          </h1>
          {project.plotAddress && (
            <p className="mt-4 text-xl md:text-2xl font-serif text-beige">{project.plotAddress}</p>
          )}
          <p className="flex items-center gap-2 mt-3 text-beige/80 text-sm uppercase tracking-[0.2em] font-bold">
            <MapPin size={16} /> {project.locationLabel}
          </p>
        </div>
      </section>

      {/* Specs bar */}
      {project.specs && (
        <section className="bg-white border-b border-sand/40">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
            {project.specs.map((s, i) => (
              <div
                key={i}
                className="p-8 text-center border-b md:border-b-0 border-r border-sand/40 last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r"
              >
                <p className="text-2xl md:text-3xl font-serif text-burgundy mb-1">{s.value}</p>
                <p className="text-[10px] uppercase font-bold text-ink/40 tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Story + status */}
      <section className="py-24 bg-paper">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <span className="text-burgundy text-xs uppercase tracking-widest font-bold mb-4 block">The Project</span>
            <h2 className="text-4xl md:text-5xl font-serif italic mb-8">Built on Published Rates</h2>
            <p className="text-lg text-ink/70 leading-relaxed font-serif mb-8">{project.fullDescription}</p>
            <Link
              href="/payment-plans"
              className="inline-flex items-center gap-2 text-burgundy text-xs uppercase tracking-[0.2em] font-bold border-b border-burgundy pb-2 hover:opacity-70 transition-opacity"
            >
              See the rates this home is built on <ArrowRight size={14} />
            </Link>
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] border border-burgundy/10 bg-beige/40 p-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-burgundy shrink-0">
                  <Hammer size={22} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold opacity-50 block">Status</span>
                  <span className="font-serif text-xl text-burgundy">{project.status}</span>
                </div>
              </div>
              {project.expectedCompletion && (
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-burgundy shrink-0">
                    <CalendarClock size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-bold opacity-50 block">Expected Completion</span>
                    <span className="font-serif text-xl text-burgundy">{project.expectedCompletion}</span>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-burgundy shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold opacity-50 block">Location</span>
                  <span className="font-serif text-xl text-burgundy">{project.block}</span>
                </div>
              </div>
            </div>

            {project.amenities && (
              <div className="rounded-[28px] bg-ink p-8 text-paper">
                <h3 className="text-xs uppercase tracking-widest font-bold mb-6 text-beige">Highlights</h3>
                <ul className="space-y-4">
                  {project.amenities.map(a => (
                    <li key={a} className="flex items-start space-x-3 text-sm">
                      <CheckCircle2 size={16} className="text-beige mt-0.5 shrink-0" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Approved Map */}
      {project.approvedMapImage && (
        <section className="py-24 bg-beige/30">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-burgundy text-xs uppercase tracking-widest font-bold mb-4 block">
                Transparency First
              </span>
              <h2 className="text-4xl md:text-5xl font-serif italic mb-8">The Approved Map</h2>
              <p className="text-ink/70 leading-relaxed mb-8 max-w-lg">
                Every Alammana home is built strictly on its society-approved map (naqsha). No
                deviations, no compromises — what is approved is what gets built. You can inspect
                the approved layout for this home here.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-burgundy text-white flex items-center justify-center">
                  <FileCheck2 size={22} />
                </div>
                <div>
                  <p className="font-serif text-lg">Society-Approved Layout</p>
                  <p className="text-xs uppercase tracking-widest font-bold text-ink/40">
                    Verified &amp; on record
                  </p>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-sand shadow-2xl bg-white">
                <img
                  src={project.approvedMapImage}
                  alt={`Approved architectural map of ${project.title}, ${project.block}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <a
                href={project.approvedMapImage}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 right-6 flex items-center gap-2 bg-white/95 text-ink px-5 py-3 rounded-full text-[10px] uppercase tracking-widest font-bold shadow-lg hover:bg-burgundy hover:text-white transition-colors"
              >
                <ExternalLink size={14} /> View Full Size
              </a>
            </motion.div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {project.gallery.length > 0 && (
        <section className="py-24 bg-paper">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-16">
              <span className="text-burgundy text-xs uppercase tracking-widest font-bold mb-4 block">Site Gallery</span>
              <h2 className="text-4xl md:text-5xl font-serif italic">Progress in Pictures</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="aspect-[4/3] overflow-hidden rounded-3xl group"
                >
                  <img
                    src={img}
                    alt={`${project.title} — site photo ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Location map */}
      {project.mapEmbedUrl && (
        <section className="py-24 bg-white border-t border-sand/40">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-12">
              <span className="text-burgundy text-xs uppercase tracking-widest font-bold mb-4 block">Site Location</span>
              <h2 className="text-4xl md:text-5xl font-serif italic mb-4">Find It on the Map</h2>
              <p className="flex items-center gap-2 text-ink/60">
                <MapPin size={16} className="text-burgundy" /> {project.locationLabel}
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden border border-sand shadow-xl">
              <iframe
                src={project.mapEmbedUrl}
                title={`Map location of ${project.title}, ${project.locationLabel}`}
                className="w-full h-[400px] md:h-[500px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 bg-burgundy text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif italic mb-6">Want a Home Like This?</h2>
          <p className="text-white/70 mb-10 max-w-xl mx-auto">
            We build on the same transparent, published rates for every client. Check the payment
            plan for your block, or talk to us about your plot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/payment-plans"
              className="bg-white text-burgundy px-10 py-5 rounded-full text-sm uppercase tracking-[0.2em] font-bold hover:opacity-90 transition-opacity"
            >
              View Payment Plans
            </Link>
            <Link
              href="/contact"
              className="border border-white/40 text-white px-10 py-5 rounded-full text-sm uppercase tracking-[0.2em] font-bold hover:bg-white/10 transition-colors"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* More constructions */}
      {others.length > 0 && (
        <section className="py-24 bg-paper">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-end mb-16">
              <h2 className="text-4xl font-serif italic">More Constructions</h2>
              <Link
                href="/constructions"
                className="text-xs uppercase tracking-[0.2em] font-bold border-b border-burgundy pb-2 hover:opacity-70 transition-opacity"
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {others.map(p => (
                <ConstructionCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
