'use client';

import type { Metadata } from 'next';
import { team } from '../../data/team';
import TeamCard from '../../components/TeamCard';

export const metadata: Metadata = {
  title: 'Executive Team | Alammana Developers - Faisal Hills Leadership',
  description: 'Meet the leadership team at Alammana Developers. Expert executives in Faisal Hills real estate, construction, architecture, finance, and sales driving premium Islamabad property development.',
  keywords: [
    'Alammana leadership',
    'Faisal Hills team',
    'real estate executives',
    'construction management',
    'Islamabad developers',
    'architecture team'
  ],
  openGraph: {
    title: 'Executive Team | Alammana Developers',
    description: 'Leadership experts in Faisal Hills real estate, luxury construction, and Islamabad property development.',
    type: 'website',
  },
};

export default function Team() {
  const teamStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Alammana Developers',
    url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'}/assets/logo.png`,
    description: 'Premium Faisal Hills and Islamabad real estate developer',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Allah hu chowk',
      addressLocality: 'Faisal Hills',
      addressRegion: 'Islamabad',
      postalCode: '44000',
      addressCountry: 'PK',
    },
    team: team.map(member => ({
      '@type': 'Person',
      name: member.name,
      jobTitle: member.role,
      description: member.bio,
      email: member.email,
      image: member.image,
    })),
  };

  return (
    <div className="pt-32 pb-24 bg-beige/10 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamStructuredData) }}
      />
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-20 text-center max-w-3xl mx-auto">
          <span className="text-burgundy text-xs uppercase tracking-[0.5em] font-bold mb-6 block">The Visionaries</span>
          <h1 className="text-5xl md:text-7xl font-serif italic mb-6">Executive Team <span className="opacity-40">Leading Faisal Hills</span></h1>
          <p className="text-ink/60 leading-relaxed font-medium">
            Our leadership team brings together decades of expertise in luxury real estate, modern architecture, construction management, 
            and strategic marketing to deliver excellence in Faisal Hills and Islamabad properties.
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
