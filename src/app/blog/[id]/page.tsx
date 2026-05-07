import { blogs } from '../../../data/blogs';
import BlogPostClient from './BlogPostClient';

export async function generateStaticParams() {
  return blogs.map((post) => ({
    id: post.id,
  }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  return <BlogPostClient params={params} />;
}
