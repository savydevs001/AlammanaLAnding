import type { Metadata } from 'next';
import { blogs } from '../../../data/blogs';
import BlogPostClient from './BlogPostClient';

export async function generateStaticParams() {
  return blogs.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const post = blogs.find(p => p.id === id);

  if (!post) {
    return {
      title: 'Blog Post Not Found | Alammana Developers',
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

  return {
    title: `${post.title} | Faisal Hills Real Estate Blog | Alammana Developers`,
    description: post.excerpt,
    keywords: [
      post.category,
      'Faisal Hills',
      'Islamabad real estate',
      'Alammana Developers',
      'property blog',
      'real estate news'
    ],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Alammana Developers'],
      images: [post.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const post = blogs.find(p => p.id === resolvedParams.id);

  if (!post) {
    return <div>Blog post not found</div>;
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

  // Article Schema for Blog Post
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: `${baseUrl}${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'Alammana Developers',
      url: baseUrl
    },
    publisher: {
      '@type': 'Organization',
      name: 'Alammana Developers',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/assets/logo.png`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/blog/${post.id}`
    },
    keywords: post.category,
    articleSection: 'Real Estate',
    about: [
      {
        '@type': 'Thing',
        name: 'Faisal Hills Real Estate'
      },
      {
        '@type': 'Thing',
        name: 'Islamabad Property Development'
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogPostClient params={resolvedParams} />
    </>
  );
}
