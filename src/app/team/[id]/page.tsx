import { team } from '../../../data/team';
import TeamMemberClient from './TeamMemberClient';

export async function generateStaticParams() {
  return team.map((member) => ({
    id: member.id,
  }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  return <TeamMemberClient params={params} />;
}
