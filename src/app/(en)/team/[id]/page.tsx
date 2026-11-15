import type { Metadata } from 'next';
import { team } from '../../../../data/team';
import TeamMemberClient from './TeamMemberClient';
import { pageMeta, breadcrumb, SITE_URL } from '../../../../lib/seo';

export async function generateStaticParams() {
  return team.map((member) => ({
    id: member.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const member = team.find(m => m.id === id);

  if (!member) {
    return {
      title: 'Team Member Not Found | Alammana Developers',
    };
  }

  return pageMeta({
    title: `${member.name} — ${member.role}`,
    description: `${member.name} is ${member.role} at Alammana Developers, working across Faisal Hills and Faisal Town. ${member.experience} in ${member.specialization}.`,
    path: `/team/${member.id}`,
    type: 'profile',
    image: member.image,
    authors: [member.name],
    keywords: [
      member.name,
      `${member.name} Alammana`,
      member.role,
      'Alammana Developers',
      'Faisal Hills',
      member.specialization,
    ],
  });
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const member = team.find(m => m.id === id);

  if (!member) {
    return <div>Team member not found</div>;
  }

  const baseUrl = SITE_URL;

  // Links Google uses to connect this person to their profiles (sameAs)
  const sameAs = [
    member.socials?.facebook,
    member.socials?.instagram,
    member.socials?.linkedin,
    member.socials?.tiktok,
    member.socials?.youtube,
    member.socials?.twitter,
  ].filter(Boolean);

  // Person Schema for Team Member
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${baseUrl}/team/${member.id}#person`,
    name: member.name,
    jobTitle: member.role,
    description: `${member.name} is the ${member.role} at Alammana Developers, specializing in ${member.specialization}. ${member.experience}`,
    image: member.image.startsWith('http') ? member.image : `${baseUrl}${member.image}`,
    url: `${baseUrl}/team/${member.id}`,
    email: member.email,
    telephone: member.socials?.phone ?? '+92-337-7503111',
    worksFor: {
      '@type': 'Organization',
      '@id': `${baseUrl}#organization`,
      name: 'Alammana Developers',
      url: baseUrl,
    },
    knowsAbout: [
      member.specialization,
      'Faisal Hills property dealers',
      'Islamabad construction services',
      'Best house developers',
      'Faisal Town real estate',
      'Taxila property investment',
      'Real Estate Development',
      'Property Development',
    ],
    ...(sameAs.length > 0 ? { sameAs } : {}),
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Vertical Four, Main Boulevard, A Block, Faisal Hills',
      addressLocality: 'Faisal Hills, Taxila',
      addressRegion: 'Rawalpindi, Punjab',
      addressCountry: 'PK',
    },
  };

  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${baseUrl}/team/${member.id}`,
    mainEntity: { '@id': `${baseUrl}/team/${member.id}#person` },
  };

  return (
    <>
      {[personSchema, profilePageSchema, breadcrumb([['Team', '/team'], [member.name, `/team/${member.id}`]])].map((sc, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(sc) }}
        />
      ))}
      <TeamMemberClient member={member} />
    </>
  );
}
