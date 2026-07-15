import type { Metadata } from 'next';
import { constructions } from '../../../data/constructions';
import ConstructionPageClient from './ConstructionPageClient';

export function generateStaticParams() {
  return constructions.map(c => ({ id: c.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = constructions.find(c => c.id === id);

  if (!project) {
    return { title: 'Project Not Found | Alammana Developers' };
  }

  return {
    title: `${project.title} — ${project.block} | House Construction`,
    description: `${project.shortDescription} ${project.finishType} construction by Alammana Developers in ${project.locationLabel}, on our published payment-plan rates.`,
    alternates: {
      canonical: `/constructions/${project.id}`,
    },
    openGraph: {
      title: `${project.title} — ${project.block}`,
      description: project.shortDescription,
      url: `/constructions/${project.id}`,
      type: 'website',
      images: [{ url: project.elevationImage, alt: `${project.title} front elevation` }],
    },
  };
}

export default async function ConstructionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <ConstructionPageClient id={id} />;
}
