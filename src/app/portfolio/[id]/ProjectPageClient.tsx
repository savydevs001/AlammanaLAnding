'use client';

import { projects } from '../../../data/projects';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowLeft, MapPin, CheckCircle2 } from 'lucide-react';

export default function ProjectPageClient({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id);

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-4xl font-serif mb-4">Project Not Found</h1>
          <Link href="/portfolio" className="text-burgundy underline uppercase tracking-widest text-xs font-bold">Back to Portfolio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <img 
          src={project.thumbnail} 
          alt={project.title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-ink/30" />
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-24 text-paper">
           <Link href="/portfolio" className="flex items-center space-x-2 text-xs uppercase tracking-[0.3em] font-bold mb-8 hover:text-beige transition-colors">
            <ArrowLeft size={14} />
            <span>Back to Portfolio</span>
           </Link>
           <span className="text-beige text-xs uppercase tracking-widest font-bold mb-4">{project.category}</span>
           <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif max-w-4xl leading-tight italic">{project.title}</h1>
        </div>
      </section>

      {/* Details Grid */}
      <section className="py-24 bg-paper">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            {/* Left Col - Content */}
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-serif italic border-b border-burgundy/10 pb-6">Concept & Heritage</h2>
                <p className="text-ink/80 text-lg leading-relaxed font-serif">
                  {project.fullDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
                {project.images.slice(1).map((img, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="aspect-[4/3] overflow-hidden rounded-sm"
                  >
                    <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Col - Stats */}
            <div className="space-y-12">
              <div className="bg-beige/40 p-10 space-y-8">
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold opacity-50 block mb-2">Location</span>
                  <div className="flex items-center space-x-2 text-burgundy">
                    <MapPin size={18} />
                    <span className="font-serif text-xl">{project.location}</span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold opacity-50 block mb-2">Status</span>
                  <div className="flex items-center space-x-2 text-burgundy">
                    <CheckCircle2 size={18} />
                    <span className="font-serif text-xl">{project.status}</span>
                  </div>
                </div>

                <div className="pt-8 border-t border-burgundy/10">
                  <h3 className="text-xs uppercase tracking-widest font-bold mb-6">Key Features</h3>
                  <ul className="space-y-4">
                    {project.features.map(f => (
                      <li key={f} className="flex items-start space-x-3 text-sm italic font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-burgundy mt-1.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-ink p-10 text-paper space-y-6">
                 <h3 className="text-xl font-serif">Interested in this property?</h3>
                 <p className="text-sm text-paper/60 leading-relaxed italic">
                   Schedule a private viewing or request the detailed brochure for this development.
                 </p>
                 <button className="w-full bg-burgundy py-4 text-xs uppercase tracking-widest font-bold hover:bg-paper hover:text-burgundy transition-all">
                   Request Details
                 </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
