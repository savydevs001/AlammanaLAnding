import type { Metadata } from 'next';
import { clampDescription } from '../../../lib/seo';
import { projects } from '../../../data/projects';
import ProjectPageClient from './ProjectPageClient';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://alammana.pk';

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
      robots: { index: false, follow: true },
    };
  }

  return {
    title: { absolute: `${project.title} — ${project.location}` },
    description: clampDescription(`${project.description} Enquire for current pricing and payment plans.`),
    keywords: [
      project.title,
      project.location,
      `${project.title} payment plan`,
      `${project.title} price`,
      'Faisal Hills',
      'Islamabad real estate',
      'Alammana Developers',
      project.category,
    ],
    alternates: {
      canonical: `/portfolio/${project.id}`,
    },
    openGraph: {
      title: { absolute: `${project.title} — ${project.location}` },
      description: project.description,
      url: `/portfolio/${project.id}`,
      type: 'article',
      images: [{ url: project.thumbnail, alt: `${project.title}, ${project.location}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} — ${project.location}`,
      description: clampDescription(project.description),
      images: [project.thumbnail],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = projects.find(p => p.id === resolvedParams.id);

  if (!project) {
    return <div>Project not found</div>;
  }

  const absolute = (p: string) => (p.startsWith('http') ? p : `${baseUrl}${p}`);

  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${baseUrl}/portfolio/${project.id}#product`,
    name: project.title,
    description: project.description,
    image: absolute(project.thumbnail),
    category: project.category,
    url: `${baseUrl}/portfolio/${project.id}`,
    ...(project.developer ? { manufacturer: { '@type': 'Organization', name: project.developer } } : {}),
    brand: {
      '@type': 'Brand',
      name: project.developer ?? 'Alammana Developers',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'PKR',
      url: `${baseUrl}/portfolio/${project.id}`,
      seller: {
        '@type': 'Organization',
        name: 'Alammana Developers',
        url: baseUrl,
      },
    },
    areaServed: {
      '@type': 'Place',
      name: project.location,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Islamabad',
        addressCountry: 'PK',
      },
    },
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Property Type', value: project.category },
      { '@type': 'PropertyValue', name: 'Location', value: project.location },
      ...(project.developer
        ? [{ '@type': 'PropertyValue', name: 'Developer', value: project.developer }]
        : []),
      ...(project.status
        ? [{ '@type': 'PropertyValue', name: 'Status', value: project.status }]
        : []),
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Portfolio', item: `${baseUrl}/portfolio` },
      { '@type': 'ListItem', position: 3, name: project.title, item: `${baseUrl}/portfolio/${project.id}` },
    ],
  };

  return (
    <>
      {[projectSchema, breadcrumbSchema].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <ProjectPageClient params={resolvedParams} />
    </>
  );
}
