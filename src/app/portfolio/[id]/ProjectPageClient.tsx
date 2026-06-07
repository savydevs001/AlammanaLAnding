'use client';

import { projects } from '../../../data/projects';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowLeft, MapPin, CheckCircle2, ShieldCheck, Wind, Coffee, Home, Users, Truck, Zap } from 'lucide-react';

import { useEffect, useState } from 'react';

function CountUp({ target, duration = 1200, className = '' }: { target: string | number; duration?: number; className?: string }) {
  const raw = String(target ?? '');
  const prefixMatch = raw.match(/^(\D+)/);
  const prefix = prefixMatch ? prefixMatch[1] : '';
  const numberMatch = raw.match(/[\d,]+/);
  const numberStr = numberMatch ? numberMatch[0] : '';
  const suffixMatch = raw.match(/(\D+)$/);
  const suffix = suffixMatch ? suffixMatch[1] : '';
  const targetNum = parseInt(numberStr.replace(/,/g, ''), 10) || 0;
  const [value, setValue] = useState(0);

  useEffect(() => {
    let rafId: number;
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setValue(Math.round(targetNum * eased));
      if (progress < 1) rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [targetNum, duration]);

  const formatted = new Intl.NumberFormat().format(value);
  if (!numberStr) return <span className={className}>{raw}</span>;
  return <span className={className}>{prefix}{formatted}{suffix}</span>;
}

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

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: any) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    setSubmitted(true);
    // TODO: wire to API
  }

  return (
    <div className="pt-20 pb-32">
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
          {/* Summary Stats */}
          {project.summaryStats && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
              {project.summaryStats.map((s, i) => (
                <div key={i} className="bg-white border border-burgundy/10 p-6 rounded-sm text-center">
                  <div className="text-4xl md:text-5xl font-serif text-burgundy font-bold leading-none">
                    <CountUp target={s.value} />
                  </div>
                  <div className="text-xs uppercase tracking-widest mt-2 text-ink/70">{s.label}</div>
                </div>
              ))}
            </div>
          )}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
            {/* Top - Quick Info */}
            <div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="rounded-[32px] border border-burgundy/10 bg-beige/40 p-10 space-y-8">
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

              <div className="rounded-[32px] bg-ink p-10 text-paper space-y-6">
                 <h3 className="text-xl font-serif">Interested in this property?</h3>
                 <p className="text-sm text-paper/60 leading-relaxed italic">
                   Schedule a private viewing or request the detailed brochure for this development.
                 </p>
                 <button className="w-full bg-burgundy py-4 text-xs uppercase tracking-widest font-bold hover:bg-paper hover:text-burgundy transition-all">
                   Request Details
                 </button>
              </div>
            </div>

            {/* Left Col - Content */}
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-6">
                <div className="relative overflow-hidden rounded-[32px] border border-burgundy/10 bg-gradient-to-br from-burgundy/5 via-paper to-beige/20 p-10 shadow-[0_35px_90px_rgba(99,13,22,0.08)]">
                  <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-burgundy via-beige to-paper opacity-95" />
                  <div className="relative">
                    <span className="inline-flex items-center rounded-full bg-burgundy px-4 py-2 text-xs uppercase tracking-[0.35em] font-bold text-paper">Signature Story</span>
                    <h2 className="mt-6 text-4xl md:text-5xl font-serif italic text-ink">Concept & Heritage</h2>
                    <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink/80 font-serif">{project.fullDescription}</p>
                  </div>
                  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-[28px] border border-burgundy/10 bg-white/80 p-6 shadow-sm backdrop-blur-sm">
                      <div className="text-xs uppercase tracking-[0.35em] text-ink/60">Design Philosophy</div>
                      <div className="mt-3 text-xl font-serif font-semibold text-burgundy">Timeless luxury with modern functionality</div>
                      <p className="mt-3 text-sm text-ink/70">A focus on crafted materials, premium finishes, and a refined vocabulary that reflects the project’s elegant character.</p>
                    </div>
                    <div className="rounded-[28px] border border-burgundy/10 bg-white/80 p-6 shadow-sm backdrop-blur-sm">
                      <div className="text-xs uppercase tracking-[0.35em] text-ink/60">Legacy & Story</div>
                      <div className="mt-3 text-xl font-serif font-semibold text-burgundy">A narrative rooted in prestige</div>
                      <p className="mt-3 text-sm text-ink/70">This development carries a strong sense of place and heritage, designed for those who value cultural nuance and long-term quality.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Starting price and completion */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-6">
                {project.startingPrice && (
                  <div>
                    <div className="text-xs uppercase tracking-widest text-ink/60">Starting Price</div>
                    <div className="text-3xl md:text-4xl font-serif text-burgundy font-bold leading-none"><CountUp target={project.startingPrice} /></div>
                  </div>
                )}
                {project.completionDate && (
                  <div>
                    <div className="text-xs uppercase tracking-widest text-ink/60">Completion</div>
                    <div className="text-2xl font-serif">{project.completionDate}</div>
                  </div>
                )}
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

            {project.structure && (
              <div className="lg:col-span-3 pb-16">
                <div className="relative overflow-hidden rounded-none md:rounded-[32px] border-y md:border border-burgundy/10 bg-gradient-to-br from-burgundy/5 via-paper to-beige/20 p-8 md:p-12 lg:p-16 -mx-4 md:mx-0 shadow-none md:shadow-[0_35px_90px_rgba(99,13,22,0.08)]">
                  <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-burgundy via-beige to-paper opacity-90" />
                  <div className="relative space-y-10 md:space-y-12 lg:space-y-16">
                    <div className="max-w-3xl">
                      <span className="inline-flex items-center rounded-full bg-burgundy px-4 py-2 text-xs uppercase tracking-[0.35em] font-bold text-paper">Structure & Layout</span>
                      <h2 className="mt-6 md:mt-8 text-3xl md:text-5xl lg:text-6xl font-serif italic text-ink leading-tight">A premium architectural expression</h2>
                      <p className="mt-5 md:mt-6 text-base md:text-lg leading-relaxed text-ink/80 font-serif">{project.structure}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <div className="rounded-[28px] border border-burgundy/10 bg-white/90 p-6 md:p-8 shadow-sm backdrop-blur-sm">
                        <div className="text-xs uppercase tracking-[0.35em] text-ink/60">Spatial Intelligence</div>
                        <div className="mt-3 text-xl font-serif font-semibold text-burgundy">Balanced layout and flow</div>
                        <p className="mt-3 text-sm text-ink/70">Designed to maximize light, privacy and circulation, while creating generous areas for work, leisure, and social living.</p>
                      </div>
                      <div className="rounded-[28px] border border-burgundy/10 bg-white/90 p-6 md:p-8 shadow-sm backdrop-blur-sm">
                        <div className="text-xs uppercase tracking-[0.35em] text-ink/60">Premium Detailing</div>
                        <div className="mt-3 text-xl font-serif font-semibold text-burgundy">Refined materials and finishes</div>
                        <p className="mt-3 text-sm text-ink/70">Every surface is composed with premium materials, thoughtful proportion and a refined palette that elevates the overall experience.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Amenities */}
            {project.amenities && (
              <div className="lg:col-span-3 pt-16">
                <div className="rounded-none md:rounded-[32px] border-y md:border border-burgundy/10 bg-white p-8 md:p-12 lg:p-16 -mx-4 md:mx-0">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic border-b border-burgundy/10 pb-6 md:pb-8">Amenities</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 md:mt-12">
                    {project.amenities.map((a, i) => {
                      const IconComp = (() => {
                        if (/security/i.test(a)) return ShieldCheck;
                        if (/hvac|air|climat/i.test(a)) return Wind;
                        if (/food|café|cafe|court/i.test(a)) return Coffee;
                        if (/rooftop|terrace|events/i.test(a)) return Home;
                        if (/conference|meeting|hall/i.test(a)) return Users;
                        if (/parking|basement/i.test(a)) return Truck;
                        if (/backup|power|generator/i.test(a)) return Zap;
                        return CheckCircle2;
                      })();

                      const desc = (() => {
                        if (/security/i.test(a)) return '24/7 manned security, CCTV and controlled access';
                        if (/hvac|air|climat/i.test(a)) return 'Central HVAC with energy-efficient controls';
                        if (/food|café|cafe|court/i.test(a)) return 'Curated dining & café experiences, premium F&B outlets';
                        if (/rooftop|terrace|events/i.test(a)) return 'Roof terrace with panoramic views and events space';
                        if (/conference|meeting|hall/i.test(a)) return 'Modern meeting rooms and conference facilities';
                        if (/parking|basement/i.test(a)) return 'Secure multi-level parking with valet options';
                        if (/backup|power|generator/i.test(a)) return 'Uninterrupted backup power and emergency systems';
                        return 'Premium quality and maintenance included';
                      })();

                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 18 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: i * 0.08 }}
                          whileHover={{ scale: 1.03, translateY: -6 }}
                          className="relative bg-white rounded-xl p-6 shadow-2xl border border-burgundy/6"
                        >
                          <div className="flex items-start">
                            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-beige text-burgundy flex items-center justify-center mr-4 shadow-md ring-1 ring-burgundy/15">
                              <IconComp size={24} />
                            </div>
                            <div>
                              <div className="font-serif text-xl md:text-2xl font-semibold tracking-wide">{a}</div>
                              <div className="text-sm text-ink/60 mt-2">{desc}</div>
                            </div>
                          </div>
                          <div className="absolute -right-6 -top-6 w-20 h-20 rounded-md bg-gradient-to-tr from-burgundy/10 to-beige/10 opacity-80 blur-lg" />
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            <div className="lg:col-span-3 space-y-16 pt-16">
              {project.paymentPlans && (
                <div className="space-y-10">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic border-b border-burgundy/10 pb-6 md:pb-8">Payment Plans</h2>
                  <div className="grid grid-cols-1 gap-6">
                    {project.paymentPlans.map((plan, idx) => (
                      <div key={idx} className="bg-white rounded-[32px] shadow-[0_40px_80px_rgba(116,44,76,0.08)] border border-burgundy/10 overflow-hidden">
                        <div className="flex flex-col lg:flex-row">
                          <div className="lg:w-2/3 relative overflow-hidden">
                            {plan.image ? (
                              <img src={plan.image} alt={plan.name} className="w-full h-96 object-cover" referrerPolicy="no-referrer" />
                            ) : (
                              <div className="w-full h-96 bg-gray-100" />
                            )}
                            <div className="absolute left-6 bottom-6 bg-burgundy/95 text-paper p-5 rounded-3xl shadow-2xl max-w-[68%]">
                              <div className="text-xs uppercase tracking-[0.35em] text-paper/80">Down Payment</div>
                              <div className="text-3xl md:text-4xl font-serif font-bold mt-2">{plan.downPayment}</div>
                              {plan.monthly && (
                                <div className="mt-4">
                                  <div className="text-xs uppercase tracking-[0.35em] text-paper/80">Est. Monthly</div>
                                  <div className="text-2xl font-serif font-bold">{plan.monthly}</div>
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="lg:w-1/3 w-full p-8 flex flex-col justify-between bg-paper">
                            <div>
                              <div className="text-sm uppercase tracking-[0.35em] text-ink/60">{plan.name}</div>
                              <div className="text-3xl md:text-4xl font-serif font-bold text-burgundy mt-3">{plan.duration}</div>
                              {plan.notes && <p className="text-sm text-ink/70 mt-4">{plan.notes}</p>}
                            </div>
                            <button className="mt-8 w-full rounded-full bg-burgundy px-6 py-4 text-sm uppercase tracking-[0.35em] font-bold text-paper">Enquire About This Plan</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.pricing && (
                <div className="space-y-10">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic border-b border-burgundy/10 pb-6 md:pb-8">Pricing</h2>
                  <div className="space-y-8">
                    {project.pricing.pricePerSqft && (
                      <div className="inline-flex items-center gap-3 rounded-full bg-beige/50 px-5 py-3 text-sm font-semibold text-ink shadow-sm">
                        <span className="uppercase tracking-[0.35em]">Price Guide</span>
                        <span className="text-burgundy">{project.pricing.pricePerSqft}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {project.pricing.units?.map((u, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.45, delay: i * 0.08 }}
                          className="rounded-[32px] border border-burgundy/10 bg-white p-8 shadow-[0_30px_60px_rgba(116,44,76,0.08)]"
                        >
                          <div className="flex items-start justify-between gap-6">
                            <div>
                              <div className="text-sm uppercase tracking-[0.35em] text-ink/60">{u.type}</div>
                              {u.size && <div className="text-3xl font-serif font-bold text-ink mt-3">{u.size}</div>}
                              <p className="text-sm text-ink/70 mt-4">Includes premium finishes and strategic positioning. Request a tailored quote.</p>
                            </div>
                            <div className="text-right">
                              <div className="text-xs uppercase tracking-[0.35em] text-ink/60">Price</div>
                              <div className="text-4xl font-serif font-bold text-burgundy mt-2"><CountUp target={u.price} /></div>
                            </div>
                          </div>
                          <div className="mt-8 flex justify-end">
                            <button className="rounded-full bg-burgundy px-6 py-3 text-sm uppercase tracking-[0.35em] font-bold text-paper">Enquire</button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {project.surroundings && (
                <div className="space-y-10">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic border-b border-burgundy/10 pb-6 md:pb-8">Prime Surroundings</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {project.surroundings.map((s, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, delay: i * 0.06 }}
                        className="relative rounded-3xl border border-burgundy/10 bg-gradient-to-br from-paper to-white p-8 shadow-[0_30px_70px_rgba(116,44,76,0.08)]"
                      >
                        <div className="mb-6 flex items-center gap-4">
                          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-burgundy text-paper shadow-lg">
                            <MapPin size={22} />
                          </div>
                          <div>
                            <div className="text-sm uppercase tracking-[0.35em] text-ink/60">Nearby</div>
                            <div className="text-2xl font-serif font-bold text-ink">{s}</div>
                          </div>
                        </div>
                        <p className="text-sm text-ink/70">A distinguished neighbouring landmark that reinforces the premium nature of this address.</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {project.unitBreakdown && (
                <div className="space-y-10">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic border-b border-burgundy/10 pb-6 md:pb-8">Unit Breakdown</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {project.unitBreakdown.map((u, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: i * 0.06 }}
                        className="rounded-[32px] border border-burgundy/10 bg-white p-6 shadow-[0_25px_60px_rgba(116,44,76,0.08)]"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-burgundy text-paper shadow-md">
                            <Home size={22} />
                          </div>
                          <div>
                            <div className="text-sm uppercase tracking-[0.35em] text-ink/60">{u.label}</div>
                            <div className="text-3xl font-serif font-bold text-ink mt-2"><CountUp target={u.size || ''} /></div>
                          </div>
                        </div>
                        <div className="mt-6 text-sm text-ink/70">A premium unit size offering designed for modern living with efficient layout and abundant natural light.</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-6 rounded-none md:rounded-[32px] border-y md:border border-burgundy/10 bg-white p-8 md:p-12 shadow-none md:shadow-[0_35px_80px_rgba(116,44,76,0.08)] -mx-4 md:mx-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
                  <div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic">Register Your Interest</h2>
                    <p className="text-ink/70 mt-3">Be the first to receive updates, exclusive launch offers, and a personalised invitation to the showroom.</p>
                  </div>
                  <div className="rounded-3xl overflow-hidden border border-burgundy/10 bg-white shadow-lg">
                    <img src={project.thumbnail} alt="project" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <label className="block text-xs uppercase tracking-[0.35em] text-ink/60">Full Name</label>
                      <input name="name" value={formData.name} onChange={handleChange} required className="w-full rounded-3xl border border-burgundy/10 bg-white px-4 py-4 text-sm text-ink shadow-sm" />

                      <label className="block text-xs uppercase tracking-[0.35em] text-ink/60">Email</label>
                      <input name="email" value={formData.email} onChange={handleChange} required className="w-full rounded-3xl border border-burgundy/10 bg-white px-4 py-4 text-sm text-ink shadow-sm" />
                    </div>

                    <div className="space-y-4">
                      <label className="block text-xs uppercase tracking-[0.35em] text-ink/60">Phone</label>
                      <input name="phone" value={formData.phone} onChange={handleChange} className="w-full rounded-3xl border border-burgundy/10 bg-white px-4 py-4 text-sm text-ink shadow-sm" />

                      <label className="block text-xs uppercase tracking-[0.35em] text-ink/60">Message</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full rounded-3xl border border-burgundy/10 bg-white px-4 py-4 text-sm text-ink shadow-sm" />
                    </div>

                    <div className="lg:col-span-2 flex flex-col gap-3">
                      <button type="submit" className="w-full rounded-full bg-burgundy px-8 py-4 text-sm uppercase tracking-[0.35em] font-bold text-paper">Submit Interest</button>
                      <p className="text-xs text-ink/60">We respect your privacy. Your details are safe and will only be used to share project updates.</p>
                      <p className="text-xs text-ink/60">Prefer direct contact? <a href={`mailto:${project.contact?.email}`} className="text-burgundy underline">{project.contact?.email}</a> or call <span className="font-semibold">{project.contact?.phone}</span>.</p>
                    </div>
                  </form>
                ) : (
                  <div className="rounded-3xl border border-burgundy/10 bg-white p-6 text-ink shadow-sm">
                    <h3 className="text-2xl font-serif font-bold text-ink">Thank you!</h3>
                    <p className="mt-3 text-sm text-ink/70">Your interest has been registered. Our team will contact you shortly with the brochure and pricing schedule.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info & Stats Bar - Responsive across all devices */}
      <div className="px-4 md:px-8 lg:px-16 pb-20">
        <div className="mx-auto max-w-7xl rounded-[32px] border border-burgundy/15 bg-white/95 backdrop-blur-xl shadow-[0_35px_80px_rgba(45,41,38,0.12)] p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div>
              <div className="text-[10px] uppercase tracking-[0.35em] text-ink/50 mb-2">Location</div>
              <div className="font-serif text-sm md:text-lg font-semibold text-ink line-clamp-2">{project.location}</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.35em] text-ink/50 mb-2">Status</div>
              <div className="font-serif text-sm md:text-lg font-semibold text-burgundy">{project.status}</div>
            </div>
            
            {project.summaryStats?.slice(0, 2).map((stat, idx) => (
              <div key={idx}>
                <div className="rounded-2xl bg-paper/80 p-3 text-center">
                  <div className="text-base md:text-xl font-semibold text-burgundy"><CountUp target={stat.value} /></div>
                  <div className="text-[9px] md:text-xs uppercase tracking-[0.2em] text-ink/70 line-clamp-2">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom Row - More Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-4">
            {project.summaryStats?.slice(2).map((stat, idx) => (
              <div key={idx}>
                <div className="rounded-2xl bg-paper/80 p-3 text-center">
                  <div className="text-base md:text-xl font-semibold text-burgundy"><CountUp target={stat.value} /></div>
                  <div className="text-[9px] md:text-xs uppercase tracking-[0.2em] text-ink/70 line-clamp-2">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-6 md:mt-8">
            <button className="w-full sm:flex-1 rounded-full bg-burgundy px-6 md:px-8 py-3 md:py-4 text-xs uppercase tracking-[0.3em] font-bold text-paper hover:bg-burgundy/90 transition">View Details</button>
            <a href={`mailto:${project.contact?.email}`} className="w-full sm:flex-1 sm:w-auto rounded-full border border-burgundy/20 bg-paper px-6 md:px-8 py-3 md:py-4 text-center text-xs font-semibold text-ink hover:bg-beige/40 transition">Email Us</a>
          </div>
        </div>
      </div>
    </div>
  );
}

