import type { Metadata } from 'next';
import { blogs } from '../../../../data/blogs';
import { team } from '../../../../data/team';
import BlogPostClient from './BlogPostClient';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://alammana.pk';

export async function generateStaticParams() {
  return blogs.map((post) => ({ id: post.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const post = blogs.find(p => p.id === id);

  if (!post) {
    return { title: 'Article Not Found | Alammana Developers', robots: { index: false, follow: true } };
  }

  return {
    title: { absolute: post.title },
    description: post.excerpt,
    keywords: [
      ...(post.tags ?? []),
      post.category,
      'Faisal Hills',
      'Islamabad real estate',
      'construction Pakistan',
      'Alammana Developers',
    ],
    alternates: { canonical: `/blog/${post.id}` },
    authors: [{ name: post.author }],
    openGraph: {
      title: { absolute: post.title },
      description: post.excerpt,
      url: `/blog/${post.id}`,
      type: 'article',
      publishedTime: post.isoDate,
      modifiedTime: post.updatedIsoDate ?? post.isoDate,
      authors: [post.author],
      tags: post.tags,
      images: [{ url: post.image, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: { absolute: post.title },
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const post = blogs.find(p => p.id === resolvedParams.id);

  if (!post) {
    return <div>Article not found</div>;
  }

  const author = team.find(m => m.name === post.author);
  const absolute = (p: string) => (p.startsWith('http') ? p : `${baseUrl}${p}`);

  const schema: object[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      '@id': `${baseUrl}/blog/${post.id}#article`,
      headline: post.title,
      description: post.excerpt,
      image: absolute(post.image),
      datePublished: post.isoDate,
      dateModified: post.updatedIsoDate ?? post.isoDate,
      // A named human author with a URL is what search engines and AI answer
      // engines use to assess expertise — an Organization byline is far weaker.
      author: {
        '@type': 'Person',
        name: post.author,
        ...(author ? { url: `${baseUrl}/team/${author.id}`, jobTitle: author.role } : {}),
        worksFor: { '@type': 'Organization', name: 'Alammana Developers', url: baseUrl },
      },
      publisher: {
        '@type': 'Organization',
        name: 'Alammana Developers',
        url: baseUrl,
        logo: { '@type': 'ImageObject', url: `${baseUrl}/assets/icon-512.png` },
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': `${baseUrl}/blog/${post.id}` },
      articleSection: post.category,
      ...(post.tags ? { keywords: post.tags.join(', ') } : {}),
      inLanguage: 'en-PK',
      isAccessibleForFree: true,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: 'Journal', item: `${baseUrl}/blog` },
        { '@type': 'ListItem', position: 3, name: post.title, item: `${baseUrl}/blog/${post.id}` },
      ],
    },
  ];

  if (post.faqs?.length) {
    schema.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: post.faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }

  return (
    <>
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <BlogPostClient params={resolvedParams} />
    </>
  );
}
