import type { Metadata } from 'next';
import { team } from '../../data/team';
import TeamClient from './TeamClient';

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
  return <TeamClient team={team} />;
}
