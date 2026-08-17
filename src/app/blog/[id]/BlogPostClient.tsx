'use client';

import { blogs } from '../../../data/blogs';
import { team } from '../../../data/team';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, User, Share2 } from 'lucide-react';
import Markdown from 'react-markdown';

export default function BlogPostClient({ params }: { params: { id: string } }) {
  const post = blogs.find(p => p.id === params.id);

  if (!post) return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-serif mb-4">Article Not Found</h1>
        <Link href="/blog" className="text-burgundy underline uppercase tracking-widest text-xs font-bold">Back to Journal</Link>
      </div>
    </div>
  );

  return (
    <div className="pt-32 pb-24 bg-paper">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/blog" className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.4em] font-bold mb-12 hover:text-burgundy transition-colors">
          <ArrowLeft size={14} />
          <span>Back to Journal</span>
        </Link>

        <header className="mb-16">
          <div className="flex items-center space-x-4 text-xs font-bold uppercase tracking-widest text-burgundy mb-6">
            <span>{post.category}</span>
            <span className="w-1 h-1 rounded-full bg-sand" />
            <span className="opacity-40">{post.date}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif italic mb-10 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between border-y border-sand/20 py-6">
            <div className="flex items-center space-x-4">
              {/* Initials avatar rendered locally — no third-party image service
                  to break or leak reader data. Uses the author's real photo
                  when they are on the team page. */}
              {(() => {
                const member = team.find(m => m.name === post.author);
                if (member) {
                  return (
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-sand shrink-0">
                      <img src={member.image} alt={post.author} className="w-full h-full object-cover" />
                    </div>
                  );
                }
                const initials = post.author.split(' ').filter(w => !w.endsWith('.')).slice(0, 2).map(w => w[0]).join('');
                return (
                  <div className="w-12 h-12 rounded-full bg-burgundy text-white flex items-center justify-center font-bold text-sm shrink-0">
                    {initials}
                  </div>
                );
              })()}
              <div>
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-40 block">Written By</span>
                <span className="text-sm font-semibold">{post.author}</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 opacity-40 text-xs font-bold uppercase tracking-widest">
                <Clock size={14} />
                <span>{post.readTime}</span>
              </div>
              <button className="p-2 border border-sand/40 rounded-full hover:bg-burgundy hover:text-white transition-all">
                <Share2 size={16} />
              </button>
            </div>
          </div>
        </header>

        <div className="aspect-video mb-16 rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="prose prose-burgundy prose-lg max-w-none font-serif italic text-ink/90 leading-relaxed">
          <Markdown>{post.content}</Markdown>
        </div>

        <footer className="mt-20 pt-12 border-t border-sand/20">
          <div className="bg-beige rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md">
              <h3 className="text-2xl font-serif mb-2">Join our newsletter</h3>
              <p className="text-sm text-ink/60">Receive the latest architectural trends and investment insights directly to your inbox.</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input type="email" placeholder="email@address.com" className="bg-white px-6 py-4 rounded-l-full border-none outline-none text-sm w-full md:w-64" />
              <button className="bg-burgundy text-white px-8 py-4 rounded-r-full text-xs font-bold uppercase tracking-widest">Subscribe</button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
