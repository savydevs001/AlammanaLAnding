import { projects } from '../../../data/projects';
import ProjectPageClient from './ProjectPageClient';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  return <ProjectPageClient params={params} />;
}
