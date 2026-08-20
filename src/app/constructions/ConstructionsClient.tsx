'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { constructions } from '../../data/constructions';
import ConstructionCard from '../../components/ConstructionCard';
import { Video, ArrowRight } from 'lucide-react';

const filters = ['All', 'Under Construction', 'Completed', 'Starting Soon'] as const;

export default function ConstructionsClient() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');

  const filtered = filter === 'All' ? constructions : constructions.filter(c => c.status === filter);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-[1600px] mx-auto px-4">
        <header className="mb-20">
          <span className="text-burgundy text-xs uppercase tracking-[0.5em] font-bold mb-6 block">Our Constructions</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8">
            Homes We&apos;re <br /> <span className="italic text-burgundy opacity-40">Building</span>
          </h1>
          <p className="text-ink/60 max-w-2xl text-lg leading-relaxed mb-12">
            Every home below is being constructed by Alammana on the same transparent rates published
            in our{' '}
            <Link href="/payment-plans" className="text-burgundy underline underline-offset-4 font-semibold">
              payment plans
            </Link>
            {' '}— approved maps, premium materials, and honest milestones in Faisal Hills and Faisal Town.
          </p>

          <div className="flex flex-wrap gap-8 items-center border-b border-burgundy/10 pb-8">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`text-xs uppercase tracking-widest font-bold transition-all ${
                  filter === f ? 'text-burgundy border-b-2 border-burgundy pb-2' : 'opacity-40 hover:opacity-100'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </header>

        {/* Local clients land here, and the camera/portal applies to them too. */}
        <div className="mb-14 rounded-3xl bg-ink text-paper p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-beige text-[12px] uppercase tracking-[0.2em] font-bold mb-3">
              <Video size={14} /> On Every Project
            </span>
            <h2 className="text-2xl md:text-3xl font-serif italic mb-3">
              A live camera on your site, and a portal that tracks everything
            </h2>
            <p className="text-paper/70 leading-relaxed text-sm">
              Every Alammana client gets 24/7 camera access to their own plot and a private portal
              showing stages completed, work in progress, materials used, inventory and documents —
              whether you live ten minutes away or ten thousand kilometres.
            </p>
          </div>
          <Link
            href="/overseas"
            className="shrink-0 inline-flex items-center gap-3 bg-burgundy text-white px-7 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:opacity-90 transition-opacity"
          >
            How It Works <ArrowRight size={16} />
          </Link>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filtered.map((project) => (
            <ConstructionCard key={project.id} project={project} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-ink/50 italic py-24">No projects in this category right now.</p>
        )}
      </div>
    </div>
  );
}
