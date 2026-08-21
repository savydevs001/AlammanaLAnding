import type { Metadata } from 'next';
import { clampDescription, SITE_URL } from '../../../../lib/seo';
import { constructions } from '../../../../data/constructions';
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
    title: { absolute: `${project.title} — ${project.block}` },
    description: clampDescription(`${project.shortDescription} ${project.finishType} construction in ${project.locationLabel}.`),
    alternates: {
      canonical: `/constructions/${project.id}`,
    },
    openGraph: {
      title: { absolute: `${project.title} — ${project.block}` },
      description: project.shortDescription,
      url: `/constructions/${project.id}`,
      type: 'website',
      images: [{ url: project.elevationImage, alt: `${project.title} front elevation` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} — ${project.block}`,
      description: clampDescription(project.shortDescription),
      images: [project.elevationImage],
    },
  };
}

export default async function ConstructionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = constructions.find(c => c.id === id);

  if (!project) return <ConstructionPageClient id={id} />;

  const absolute = (p: string) => (p.startsWith('http') ? p : `${SITE_URL}${p}`);
  const pageUrl = `${SITE_URL}/constructions/${project.id}`;

  // These pages previously carried no page-level structured data at all — only
  // the site-wide Organization block from the layout. Describing each build as a
  // Residence tied to a construction Service is what lets search engines and AI
  // assistants understand that we built this specific house, at this address.
  const schema: object[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Residence',
      '@id': `${pageUrl}#residence`,
      name: project.title,
      description: project.shortDescription,
      url: pageUrl,
      image: absolute(project.elevationImage),
      address: {
        '@type': 'PostalAddress',
        streetAddress: project.plotAddress ?? project.locationLabel,
        addressLocality: 'Faisal Hills, Taxila',
        addressRegion: 'Rawalpindi, Punjab',
        addressCountry: 'PK',
      },
      ...(project.specs?.length
        ? {
            additionalProperty: project.specs.map(sp => ({
              '@type': 'PropertyValue',
              name: sp.label,
              value: sp.value,
            })),
          }
        : {}),
      ...(project.amenities?.length
        ? {
            amenityFeature: project.amenities.map(a => ({
              '@type': 'LocationFeatureSpecification',
              name: a,
              value: true,
            })),
          }
        : {}),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      serviceType: `${project.finishType} house construction`,
      name: `${project.finishType} construction — ${project.block}`,
      description: project.shortDescription,
      areaServed: { '@type': 'Place', name: project.locationLabel },
      provider: { '@type': 'Organization', name: 'Alammana Developers', url: SITE_URL },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Constructions', item: `${SITE_URL}/constructions` },
        { '@type': 'ListItem', position: 3, name: project.title, item: pageUrl },
      ],
    },
  ];

  return (
    <>
      {schema.map((sc, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sc) }} />
      ))}
      <ConstructionPageClient id={id} />
    </>
  );
}
