'use client';

import { motion } from 'motion/react';
import { ArrowRight, Award, Shield, History } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  const milestones = [
    { year: '2015', event: 'Founded in Islamabad', desc: 'Starting as a boutique marketing agency for elite sectors.' },
    { year: '2018', event: 'First Development Project', desc: 'Successful completion of Islamabad Heights residency.' },
    { year: '2022', event: 'Faisal Hills Expansion', desc: 'Securing major territory for strategic urban development.' },
    { year: '2026', event: 'National Recognition', desc: 'Voted top luxury developer in the capital region.' }
  ];

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Story Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8 md:space-y-10"
          >
            <span className="text-burgundy text-xs uppercase tracking-[0.5em] font-bold block">Our Story</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif italic mb-6 md:mb-10 leading-none">A Legacy of <br /> <span className="opacity-40">Excellence</span></h1>
            <p className="text-lg md:text-xl text-ink/60 leading-relaxed font-serif italic">
              &quot;We don&apos;t just build structures; we architect experiences. Every stone laid by Alammana 
              is a testament to our commitment to luxury, integrity, and future-ready urban development.&quot;
            </p>
            <p className="text-sm md:text-base text-ink/80 leading-relaxed max-w-xl">
              Since 2015, Alammana Developers has been at the forefront of the Pakistani real estate 
              sector. Our journey started in the heart of Islamabad, driven by a simple yet powerful 
              vision: to redefine luxury living through architectural precision and strategic marketing. 
              Today, our footprint in Faisal Hills speaks to our ability to identify growth and deliver 
              unmatched value to our investors.
            </p>
            <div className="pt-6 md:pt-10 flex items-center space-x-8 md:space-x-12">
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-serif text-burgundy">10Y+</span>
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-40">Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-serif text-burgundy">50+</span>
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-40">Global Partners</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop" 
                alt="Abeeyah Headquarters"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-burgundy rounded-3xl -z-10 opacity-10" />
          </motion.div>
        </section>

        {/* Philosophy */}
        <section className="py-24 border-y border-sand/20 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { icon: <Award size={32} />, title: "Excellence", desc: "Uncompromising quality in every finish and design choice we make." },
              { icon: <Shield size={32} />, title: "Integrity", desc: "Transparent dealings and honest delivery timelines for our investors." },
              { icon: <History size={32} />, title: "Legacy", desc: "Building structures that stand the test of time and architectural trends." },
            ].map((item, i) => (
              <div key={i} className="space-y-6">
                <div className="text-burgundy">{item.icon}</div>
                <h3 className="text-2xl font-serif italic underline decoration-burgundy/20">{item.title}</h3>
                <p className="text-sm text-ink/60 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-32">
          <h2 className="text-4xl font-serif mb-20 text-center italic">Our Timeline</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {milestones.map((m, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative pt-8 border-t border-burgundy/20"
              >
                <span className="text-5xl font-serif text-burgundy/20 absolute top-0 left-0 -translate-y-1/2 bg-paper px-4">{m.year}</span>
                <h4 className="text-lg font-serif mb-4 mt-8">{m.event}</h4>
                <p className="text-sm text-ink/60">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-ink text-beige p-16 md:p-24 rounded-3xl relative overflow-hidden text-center">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_#D4C3A3_1px,_transparent_1px)] bg-[length:24px_24px]" />
            <h2 className="text-5xl font-serif mb-8 italic">Ready to Discuss <br />Your Vision?</h2>
            <Link href="/contact" className="inline-flex items-center space-x-4 bg-burgundy text-white px-12 py-6 rounded-full text-sm font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-ink transition-all">
                <span>Contact Us Now</span>
                <ArrowRight size={20} />
            </Link>
        </section>
      </div>
    </div>
  );
}
