import type { Metadata } from 'next';
import JsonLd from '../../components/JsonLd';
import { team } from '../../data/team';
import TeamClient from './TeamClient';
import { pageMeta, breadcrumb } from '../../lib/seo';

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
  return (
    <>
      <JsonLd schema={[breadcrumb([['Team', '/team']])]} />
      <TeamClient team={team} />
    </>
  );
}
