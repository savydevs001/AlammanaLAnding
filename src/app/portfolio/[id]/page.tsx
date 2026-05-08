import type { Metadata } from 'next';
import { projects } from '../../../data/projects';
import ProjectPageClient from './ProjectPageClient';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find(p => p.id === id);

  if (!project) {
    return {
      title: 'Project Not Found | Alammana Developers',
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

  return {
    title: `${project.title} | Faisal Hills Real Estate | Alammana Developers`,
    description: `${project.description} Located in ${project.location}, ${project.title} represents Alammana Developers' commitment to luxury construction and architectural excellence in Islamabad.`,
    keywords: [
      project.title,
      project.location,
      'Faisal Hills',
      'luxury construction',
      'Islamabad real estate',
      'Alammana Developers',
      project.type,
    ],
    openGraph: {
      title: `${project.title} - ${project.location}`,
      description: project.description,
      type: 'article',
      images: [project.image],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = projects.find(p => p.id === resolvedParams.id);

  if (!project) {
    return <div>Project not found</div>;
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

  // Product/Service Schema for Project
  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: project.title,
    description: project.description,
    image: `${baseUrl}${project.image}`,
    category: project.type,
    brand: {
      '@type': 'Brand',
      name: 'Alammana Developers'
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Alammana Developers',
      url: baseUrl
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'PKR',
      seller: {
        '@type': 'Organization',
        name: 'Alammana Developers'
      }
    },
    areaServed: {
      '@type': 'Place',
      name: project.location,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Islamabad',
        addressCountry: 'PK'
      }
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Property Type',
        value: project.type
      },
      {
        '@type': 'PropertyValue',
        name: 'Location',
        value: project.location
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <ProjectPageClient params={resolvedParams} />
    </>
  );
}
