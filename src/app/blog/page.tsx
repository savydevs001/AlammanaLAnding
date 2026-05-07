'use client';

import { motion } from 'motion/react';
import { blogs } from '../../data/blogs';
import Link from 'next/link';
import { ArrowRight, Clock, User } from 'lucide-react';

export default function Blog() {
  return (
    <div className="pt-32 pb-24 bg-beige/30 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-20 text-center max-w-3xl mx-auto">
          <span className="text-burgundy text-xs uppercase tracking-[0.5em] font-bold mb-6 block">The Journal</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif italic mb-6">Perspectives on <span className="opacity-40">Development</span></h1>
          <p className="text-ink/60 leading-relaxed font-medium">
            Explore the latest trends in luxury living, investment strategies in Faisal Hills, 
            and architectural breakthroughs in the heart of Pakistan.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogs.map((post, i) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white group rounded-3xl overflow-hidden shadow-sm border border-sand/20 flex flex-col h-full"
            >
              <Link href={`/blog/${post.id}`} className="block relative aspect-[16/10] overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-burgundy text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full">
                    {post.category}
                  </span>
                </div>
              </Link>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center space-x-4 text-[10px] uppercase tracking-widest font-bold text-ink/40 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock size={12} />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User size={12} />
                    <span>{post.author}</span>
                  </div>
                </div>

                <h2 className="text-2xl font-serif mb-4 group-hover:text-burgundy transition-colors line-clamp-2 italic">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                
                <p className="text-sm text-ink/60 mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-6 border-t border-sand/10">
                  <Link href={`/blog/${post.id}`} className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-burgundy group-hover:gap-4 transition-all">
                    <span>Read Article</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
