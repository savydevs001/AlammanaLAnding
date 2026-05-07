'use client';

import { motion } from 'motion/react';
import { projects } from '../data/projects';
import { team } from '../data/team';
import ProjectCard from '../components/ProjectCard';
import TeamCard from '../components/TeamCard';
import { ArrowRight, MapPin, Building2, Paintbrush, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: <Building2 className="text-burgundy" size={32} />,
    title: "Construction Development",
    desc: "From ground-breaking to final finishing, we manage the entire construction lifecycle with precision."
  },
  {
    icon: <Paintbrush className="text-burgundy" size={32} />,
    title: "Architectural Planning",
    desc: "Bespoke designs that combine modern luxury with the natural landscape of Islamabad."
  },
  {
    icon: <TrendingUp className="text-burgundy" size={32} />,
    title: "Real Estate Marketing",
    desc: "Strategic placement and marketing for major developments like Faisal Hills."
  }
];

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] lg:h-[90vh] grid grid-cols-1 md:grid-cols-12 overflow-hidden bg-beige">
        {/* Left Content */}
        <div className="col-span-1 md:col-span-7 flex flex-col justify-center px-6 md:px-12 lg:px-24 py-16 md:py-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="h-[1px] w-12 bg-burgundy"></div>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-burgundy">Elite Real Estate & Development</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif text-ink leading-tight mb-8">
              Constructing <span className="italic font-normal text-burgundy">Legacies</span> <br className="hidden lg:block" /> in Islamabad.
            </h1>
            <p className="text-base md:text-lg text-ink/70 max-w-lg mb-10 leading-relaxed">
              Alammana Developers specializes in premium construction and strategic marketing across Islamabad and Faisal Hills. 
              We turn visions into tangible luxury landmarks.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/portfolio" className="bg-burgundy text-white px-8 py-4 rounded-full text-sm uppercase tracking-widest font-bold hover:opacity-90 transition-opacity text-center shadow-lg shadow-burgundy/20">
                View Portfolio
              </Link>
              <Link href="/contact" className="border border-sand text-ink px-8 py-4 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-white transition-all text-center">
                Consultation
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 md:gap-6 mt-12 md:mt-16">
              <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-sand/30 w-full sm:w-40 md:w-48">
                <p className="text-2xl md:text-3xl font-bold text-burgundy mb-1">50+</p>
                <p className="text-[10px] uppercase font-bold text-ink/40 tracking-wider">Projects Completed</p>
              </div>
              <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-sand/30 w-full sm:w-40 md:w-48">
                <p className="text-2xl md:text-3xl font-bold text-burgundy mb-1">98%</p>
                <p className="text-[10px] uppercase font-bold text-ink/40 tracking-wider">Investor Returns</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Visual */}
        <div className="hidden md:flex col-span-5 bg-burgundy relative flex-col justify-end p-12 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_#D4C3A3_1px,_transparent_1px)] bg-[length:24px_24px]"></div>
          
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&h=800&q=80" 
            alt="Faisal Hills Residency"
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
          />

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-3xl p-8 relative z-10 shadow-2xl"
          >
            <div className="flex justify-between items-start mb-6">
              <span className="bg-beige text-burgundy px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Featured Project</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-burgundy"></div>
                <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                <div className="w-2 h-2 rounded-full bg-gray-200"></div>
              </div>
            </div>
            <h3 className="text-3xl font-serif mb-2 text-ink italic">Faisal Hills Heights</h3>
            <p className="text-ink/60 text-sm mb-6">Exclusive mixed-use development featuring luxury penthouses and premium commercial zones.</p>
            <div className="flex items-center justify-between border-t border-sand/20 pt-6">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300"></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-400"></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-burgundy flex items-center justify-center text-[10px] text-white font-bold">+3</div>
              </div>
              <Link href="/portfolio/faisal-hills-residency" className="text-burgundy font-bold text-sm uppercase tracking-widest hover:underline">
                View Project
              </Link>
            </div>
          </motion.div>

          <div className="mt-12 text-white/60 text-[10px] font-medium uppercase tracking-[0.2em] flex items-center gap-4">
            <span>Islamabad</span>
            <div className="w-1 h-1 rounded-full bg-white/40"></div>
            <span>Faisal Hills</span>
            <div className="w-1 h-1 rounded-full bg-white/40"></div>
            <span>Taxila</span>
          </div>
        </div>
      </section>

      {/* Info Grid (Design Bottom Grid) */}
      <section className="bg-white border-y border-sand/40 grid grid-cols-1 md:grid-cols-4">
        <div className="border-b md:border-b-0 md:border-r border-sand/40 p-8 flex flex-col justify-center">
          <span className="text-[10px] font-bold text-ink/40 uppercase tracking-widest mb-1">Headquarters</span>
          <p className="text-sm font-semibold">E-11/3, Islamabad, PK</p>
        </div>
        <div className="border-b md:border-b-0 md:border-r border-sand/40 p-8 flex flex-col justify-center">
          <span className="text-[10px] font-bold text-ink/40 uppercase tracking-widest mb-1">Development Lead</span>
          <p className="text-sm font-semibold">Ali Khan</p>
          <p className="text-[11px] text-ink/50 italic">Managing Director</p>
        </div>
        <div className="border-b md:border-b-0 md:border-r border-sand/40 p-8 flex flex-col justify-center">
          <span className="text-[10px] font-bold text-ink/40 uppercase tracking-widest mb-1">Architecture</span>
          <p className="text-sm font-semibold">Sara Ahmed</p>
          <p className="text-[11px] text-ink/50 italic">Chief Architect</p>
        </div>
        <div className="p-8 flex items-center justify-center md:justify-end">
          <div className="flex gap-4">
            <span className="text-[10px] font-bold text-ink/40 uppercase tracking-widest mr-4">Connect</span>
            <div className="w-10 h-10 rounded-full border border-sand flex items-center justify-center text-xs hover:bg-burgundy hover:text-white transition-all cursor-pointer">FB</div>
            <div className="w-10 h-10 rounded-full border border-sand flex items-center justify-center text-xs hover:bg-burgundy hover:text-white transition-all cursor-pointer">IG</div>
            <div className="w-10 h-10 rounded-full border border-sand flex items-center justify-center text-xs hover:bg-burgundy hover:text-white transition-all cursor-pointer">LI</div>
          </div>
        </div>
      </section>

      {/* Portfolio Highlight */}
      <section className="py-24" id="portfolio">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-burgundy text-xs uppercase tracking-widest font-bold mb-4 block">Portfolio</span>
              <h2 className="text-5xl font-serif italic tracking-tight">Featured Projects</h2>
            </div>
            <Link href="/portfolio" className="text-xs uppercase tracking-[0.2em] font-bold border-b border-burgundy pb-2 hover:opacity-70 transition-opacity">
              View All Works
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-ink text-paper overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-beige text-xs uppercase tracking-widest font-bold mb-6 block">Our Expertise</span>
              <h2 className="text-5xl font-serif mb-12 leading-tight">Comprehensive Real Estate <br /><span className="italic text-beige/60">Solutions</span></h2>
              
              <div className="space-y-12">
                {services.map((service, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-6"
                  >
                    <div className="bg-paper p-4 aspect-square flex items-center justify-center">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-serif mb-2 text-beige">{service.title}</h3>
                      <p className="text-paper/60 text-sm leading-relaxed">{service.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                   src="https://images.unsplash.com/photo-1541888941259-7997a58d355b?auto=format&fit=crop&w=1000&q=80" 
                   alt="Construction Site"
                   className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                   referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-burgundy p-12 hidden lg:block">
                <blockquote className="text-2xl font-serif italic max-w-xs">
                  "Architecture is a visual art, and the buildings speak for themselves."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-24 bg-paper" id="about-info">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-burgundy text-xs uppercase tracking-widest font-bold mb-4 block">Our Reach</span>
            <h2 className="text-4xl font-serif mb-6 italic">Serving the Heart of Pakistan</h2>
            <p className="text-ink/60">
              Alammana Developers is strategically focused on the most promising urban landscapes 
              of Pakistan. Our primary operations are centered in the capital city, Islamabad, 
              and the burgeoning residential hub of Faisal Hills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative h-[400px] group overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581456101257-817666ee3831?auto=format&fit=crop&w=800&q=80" 
                alt="Islamabad"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-ink/30 flex items-center justify-center">
                <div className="text-center text-paper">
                  <MapPin className="mx-auto mb-4 text-beige" />
                  <h3 className="text-3xl font-serif uppercase tracking-widest">Islamabad</h3>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] group overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592be5a52680?auto=format&fit=crop&w=800&q=80" 
                alt="Faisal Hills"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-ink/30 flex items-center justify-center">
                <div className="text-center text-paper">
                  <MapPin className="mx-auto mb-4 text-beige" />
                  <h3 className="text-3xl font-serif uppercase tracking-widest">Faisal Hills</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-beige/10" id="team-info">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif italic tracking-tight mb-4">Meet the Visionaries</h2>
            <p className="text-ink/60 uppercase tracking-widest text-[10px] font-bold">The Experts Behind Alammana Developers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {team.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 border-t border-burgundy/10" id="contact-info">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-5xl font-serif mb-8 leading-tight italic">Let's Discuss <br />Your Future Project</h2>
              <p className="text-ink/60 mb-12 max-w-md">
                Whether you're looking for an investment opportunity in Faisal Hills or architectural 
                consultation in Islamabad, our team is ready to help you build your vision.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-6 group">
                  <div className="w-12 h-12 rounded-full border border-burgundy flex items-center justify-center group-hover:bg-burgundy group-hover:text-paper transition-all">
                    <ArrowRight size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest block font-bold opacity-50">Email Us</span>
                    <span className="text-xl font-serif">info@alammana.com</span>
                  </div>
                </div>
                <div className="flex items-center space-x-6 group">
                  <div className="w-12 h-12 rounded-full border border-burgundy flex items-center justify-center group-hover:bg-burgundy group-hover:text-paper transition-all">
                    <ArrowRight size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest block font-bold opacity-50">Call Us</span>
                    <span className="text-xl font-serif">+92 3XX XXXXXXX</span>
                  </div>
                </div>
              </div>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-ink/20 py-3 outline-none focus:border-burgundy transition-colors font-serif text-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-ink/20 py-3 outline-none focus:border-burgundy transition-colors font-serif text-xl" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">Interested In</label>
                <select className="w-full bg-transparent border-b border-ink/20 py-3 outline-none focus:border-burgundy transition-colors font-serif text-xl appearance-none">
                  <option>Construction Development</option>
                  <option>Investment Opportunities</option>
                  <option>Architectural Design</option>
                  <option>Real Estate Marketing</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-ink/20 py-3 outline-none focus:border-burgundy transition-colors font-serif text-xl resize-none" />
              </div>
              <button className="bg-burgundy text-paper w-full py-6 text-sm uppercase tracking-[0.3em] font-bold hover:bg-black transition-colors">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
