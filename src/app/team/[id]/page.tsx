import type { Metadata } from 'next';
import { team } from '../../../data/team';
import TeamMemberClient from './TeamMemberClient';

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

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

  return {
    title: `${member.name} - ${member.role} | Alammana Developers`,
    description: `${member.name} is the ${member.role} at Alammana Developers, specializing in ${member.specialization}. Leading Faisal Hills and Islamabad real estate excellence.`,
    keywords: [
      member.name,
      member.role,
      'Alammana Developers',
      'Faisal Hills',
      'Islamabad real estate',
      member.specialization,
    ],
    openGraph: {
      title: `${member.name} - ${member.role} | Alammana Developers`,
      description: `${member.name}, ${member.role} at Alammana Developers. Experience: ${member.experience}`,
      type: 'profile',
      images: [member.image],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const member = team.find(m => m.id === id);

  if (!member) {
    return <div>Team member not found</div>;
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

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
    ...(member.socials?.phone ? { telephone: member.socials.phone } : {}),
    worksFor: {
      '@type': 'Organization',
      name: 'Alammana Developers',
      url: baseUrl
    },
    knowsAbout: [
      member.specialization,
      'Real Estate Development',
      'Faisal Hills',
      'Islamabad Construction',
      'Property Development'
    ],
    ...(sameAs.length > 0 ? { sameAs } : {}),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Islamabad',
      addressCountry: 'PK'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <TeamMemberClient member={member} />
    </>
  );
}
