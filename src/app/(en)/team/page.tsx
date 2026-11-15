import type { Metadata } from 'next';
import JsonLd from '../../../components/JsonLd';
import { team } from '../../../data/team';
import TeamClient from './TeamClient';
import { pageMeta, breadcrumb } from '../../../lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Our Leadership Team',
  description:
    'The people behind Alammana Developers — construction, sales, finance, media and technology leads working across Faisal Hills, Faisal Town and Taxila.',
  path: '/team',
  keywords: [
    'Alammana Developers team',
    'Faisal Hills builders',
    'construction company leadership Taxila',
  ],
});

export default function Team() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Alammana Developers Leadership & Engineering Team',
    description: 'Executive management, civil engineers, project managers, and property consultants at Alammana Developers.',
    itemListElement: team.map((member, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Person',
        name: member.name,
        jobTitle: member.role,
        url: `https://alammana.pk/team/${member.id}`,
      },
    })),
  };

  return (
    <>
      <JsonLd schema={[breadcrumb([['Team', '/team']]), itemListSchema]} />
      <TeamClient team={team} />
    </>
  );
}
