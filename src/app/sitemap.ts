import type { MetadataRoute } from 'next';
import { projects } from '../data/projects';
import { constructions } from '../data/constructions';
import { societies } from '../data/societies';
import { blogs } from '../data/blogs';
import { team } from '../data/team';

// Auto-generated sitemap served at /sitemap.xml.
// It reads the data files directly, so adding a project/blog/team member
// automatically adds its URL — no manual sitemap edits needed.

export const dynamic = 'force-static';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://alammana.pk';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${siteUrl}/payment-plans`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${siteUrl}/societies`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${siteUrl}/portfolio`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${siteUrl}/constructions`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${siteUrl}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/team`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${siteUrl}/privacy`, lastModified, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${siteUrl}/terms`, lastModified, changeFrequency: 'yearly', priority: 0.2 },
  ];

  return [
    ...staticPages,
    ...societies.map(s => ({
      url: `${siteUrl}/societies/${s.id}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    ...projects.map(p => ({
      url: `${siteUrl}/portfolio/${p.id}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...constructions.map(c => ({
      url: `${siteUrl}/constructions/${c.id}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...blogs.map(b => ({
      url: `${siteUrl}/blog/${b.id}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...team.map(t => ({
      url: `${siteUrl}/team/${t.id}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
  ];
}
