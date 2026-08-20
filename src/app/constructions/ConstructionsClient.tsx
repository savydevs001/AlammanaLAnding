'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { constructions } from '../../data/constructions';
import ConstructionCard from '../../components/ConstructionCard';

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
