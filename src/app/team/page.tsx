'use client';

import { team } from '../../data/team';
import TeamCard from '../../components/TeamCard';

export default function Team() {
  return (
    <div className="pt-32 pb-24 bg-beige/10 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-20 text-center max-w-3xl mx-auto">
          <span className="text-burgundy text-xs uppercase tracking-[0.5em] font-bold mb-6 block">The Visionaries</span>
          <h1 className="text-5xl md:text-7xl font-serif italic mb-6">Architecting the <span className="opacity-40">Future</span></h1>
          <p className="text-ink/60 leading-relaxed font-medium">
            Our team brings together decades of global experience in luxury real estate, 
            modern architecture, and strategic marketing to deliver excellence in Islamabad.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {team.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}
