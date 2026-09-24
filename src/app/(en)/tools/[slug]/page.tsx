import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { TOOLS, toolBySlug } from '../../../../lib/tools';
import ToolClient from '../../../../components/tools/ToolsClient';

export const dynamicParams = false;

export function generateStaticParams() {
  return TOOLS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const t = toolBySlug(slug);
  if (!t) return {};
  return {
    title: t.name,
    description: t.description,
    keywords: t.keywords,
    alternates: { canonical: `/tools/${t.slug}` },
    openGraph: { title: `${t.name} | Alammana Developers`, description: t.description, url: `/tools/${t.slug}`, type: 'website', images: [{ url: '/assets/og-image.jpg', width: 1200, height: 630 }] },
  };
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = toolBySlug(slug);
  if (!t) notFound();
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: t.name,
    description: t.description,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'PKR' },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <ToolClient slug={slug} />
    </>
  );
}
