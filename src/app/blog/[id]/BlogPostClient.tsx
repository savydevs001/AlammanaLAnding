'use client';

import { blogs } from '../../../data/blogs';
import { team } from '../../../data/team';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, Share2 } from 'lucide-react';
import Markdown from 'react-markdown';
import { whatsappLink } from '../../../lib/contact';

export default function BlogPostClient({ params }: { params: { id: string } }) {
  const post = blogs.find(p => p.id === params.id);
  // Prefer same-category articles, then fill up to three with anything else.
  const related = post
    ? [
        ...blogs.filter(p => p.id !== post.id && p.category === post.category),
        ...blogs.filter(p => p.id !== post.id && p.category !== post.category),
      ].slice(0, 3)
    : [];

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

        <div className="aspect-video mb-12 rounded-3xl overflow-hidden shadow-2xl">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Short factual answer up front — this is what featured snippets and AI
            answer engines lift, and it respects the reader's time. */}
        {post.keyTakeaway && (
          <aside className="mb-14 rounded-3xl border-l-4 border-burgundy bg-beige/60 p-8">
            <h2 className="text-[10px] uppercase tracking-[0.25em] font-bold text-burgundy mb-3">The Short Answer</h2>
            <p className="text-lg text-ink/85 leading-relaxed">{post.keyTakeaway}</p>
          </aside>
        )}

        {/* Long-form body: upright serif, not italic — italic is unreadable at
            two thousand words. */}
        <div className="blog-body max-w-none text-ink/85">
          <Markdown>{post.content}</Markdown>
        </div>

        {post.faqs && post.faqs.length > 0 && (
          <section className="mt-20 pt-12 border-t border-sand/30">
            <h2 className="text-3xl md:text-4xl font-serif italic mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {post.faqs.map(f => (
                <details key={f.q} className="group rounded-2xl bg-white border border-sand/50 p-6 open:shadow-md transition-shadow">
                  <summary className="cursor-pointer list-none font-serif text-lg md:text-xl text-ink flex items-start justify-between gap-4">
                    <span>{f.q}</span>
                    <span className="text-burgundy shrink-0 transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
                  </summary>
                  <p className="mt-4 text-ink/70 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 flex flex-wrap gap-2">
            {post.tags.map(t => (
              <span key={t} className="bg-beige text-ink/60 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                {t}
              </span>
            ))}
          </div>
        )}

        <footer className="mt-20 pt-12 border-t border-sand/20 space-y-12">
          <div className="bg-burgundy text-white rounded-3xl p-10 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif italic mb-4">Have a question about your plot?</h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
              Tell us your block and plot size and we will come back with the current construction
              rate and what it would actually cost to build.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={whatsappLink(`Hello Alammana, I read your article "${post.title}" and have a question.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-burgundy px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:opacity-90 transition-opacity"
              >
                Ask on WhatsApp
              </a>
              <Link
                href="/payment-plans"
                className="border border-white/40 px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:bg-white/10 transition-colors"
              >
                See Construction Rates
              </Link>
            </div>
          </div>

          {related.length > 0 && (
            <div>
              <h2 className="text-2xl font-serif italic mb-8">Keep Reading</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map(r => (
                  <Link
                    key={r.id}
                    href={`/blog/${r.id}`}
                    className="group rounded-2xl border border-sand/50 p-6 hover:border-burgundy/40 hover:shadow-md transition-all"
                  >
                    <span className="text-[10px] uppercase tracking-widest font-bold text-burgundy block mb-2">{r.category}</span>
                    <h3 className="font-serif text-lg leading-snug mb-2 group-hover:text-burgundy transition-colors">{r.title}</h3>
                    <p className="text-xs text-ink/55 leading-relaxed line-clamp-2">{r.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </footer>
      </div>
    </div>
  );
}
