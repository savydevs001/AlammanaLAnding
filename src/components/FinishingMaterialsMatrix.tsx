'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Search,
  CheckCircle2,
  Layers,
  ArrowRight,
  ShieldCheck,
  MessageCircle,
  Gem,
  Award,
  Crown,
} from 'lucide-react';
import { FINISHING_MATERIALS, FINISHING_TIERS, type MaterialSpecItem } from '../data/finishingMaterialsData';
import { fetchLiveMaterials } from '../lib/publicPricing';
import { whatsappLink } from '../lib/contact';
import { trackClarityEvent, setClarityTag, upgradeClaritySession } from '../lib/clarity';

export default function FinishingMaterialsMatrix() {
  const [materials, setMaterials] = useState<MaterialSpecItem[]>(FINISHING_MATERIALS);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTierCard, setActiveTierCard] = useState<'all' | 'executive' | 'premium' | 'luxury'>('all');

  // Hydrate from live backend API if reachable
  useEffect(() => {
    let mounted = true;
    fetchLiveMaterials().then((live) => {
      if (mounted && live && live.length > 0) {
        setMaterials(live);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  const categories = useMemo(() => {
    return Array.from(new Set(materials.map((m) => m.category)));
  }, [materials]);

  const filteredMaterials = useMemo(() => {
    return materials.filter((m) => {
      const matchCat = selectedCategory === 'all' || m.category === selectedCategory;
      const matchSearch =
        !searchQuery.trim() ||
        m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.executive.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.premium.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.luxury.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [materials, selectedCategory, searchQuery]);

  return (
    <section id="materials-matrix" className="py-20 md:py-28 bg-paper border-t border-sand/60">
      <div className="max-w-[1600px] mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-[1px] w-10 bg-burgundy"></div>
            <span className="text-[12px] uppercase tracking-[0.25em] font-bold text-burgundy">
              Certified Brand Specifications
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-ink leading-tight mb-6">
            3-Tier Finishing Materials <span className="italic text-burgundy">&amp; Specifications</span>
          </h2>
          <p className="text-base text-ink/70 leading-relaxed">
            Every home we construct follows itemized bill-of-quantities without hidden compromises.
            Compare the exact brand names, tile grades, sanitary fittings, and electrical wiring
            specified for each finishing tier below.
          </p>
        </div>

        {/* 3 Tier Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Executive Tier Card */}
          <div className="rounded-3xl border border-sand bg-white p-7 transition-all hover:shadow-xl hover:border-sand/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-2xl bg-burgundy/10 text-burgundy">
                  <Award size={22} />
                </span>
                <span className="rounded-full bg-sand/40 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink/70">
                  Value Benchmark
                </span>
              </div>
              <h3 className="font-serif text-2xl text-ink mb-1">Executive Finishing</h3>
              <p className="text-sm font-bold text-burgundy mb-4">PKR 5,500 / sq ft</p>
              <p className="text-xs text-ink/65 leading-relaxed mb-6">
                Engineered for quality, longevity, and modern aesthetics using verified top-tier domestic manufacturers.
              </p>
              <ul className="space-y-2 text-xs text-ink/80 border-t border-sand/50 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-burgundy shrink-0" />
                  <span><strong>Wiring:</strong> Fast / GM / Wahid Cables</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-burgundy shrink-0" />
                  <span><strong>Tiles:</strong> Master / Diamond Porcelain (60×60 cm)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-burgundy shrink-0" />
                  <span><strong>Sanitary:</strong> Porta / Master Grade-A Ware</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-burgundy shrink-0" />
                  <span><strong>Doors:</strong> Semi-Solid Ash Wood Finish</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-burgundy shrink-0" />
                  <span><strong>Paint:</strong> Berger / Gobi&apos;s Velvet Touch</span>
                </li>
              </ul>
            </div>
            <a
              href={whatsappLink('Assalam o Alaikum, I would like to inquire about the Executive Finishing Tier specifications and floor plans.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackClarityEvent('whatsapp_materials_inquiry');
                setClarityTag('active_finishing_tier', 'executive');
                upgradeClaritySession('materials_executive_consult');
              }}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-burgundy/30 py-3 text-xs uppercase tracking-widest font-bold text-burgundy hover:bg-burgundy hover:text-white transition-all text-center"
            >
              <MessageCircle size={14} /> Consult Executive Tier
            </a>
          </div>

          {/* Premium Tier Card (Featured) */}
          <div className="rounded-3xl border-2 border-burgundy bg-burgundy text-white p-7 shadow-xl shadow-burgundy/20 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-accent text-primary text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-bl-xl shadow-sm">
              Most Popular
            </div>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-2xl bg-white/10 text-white">
                  <Gem size={22} />
                </span>
                <span className="rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                  Gold Standard
                </span>
              </div>
              <h3 className="font-serif text-2xl text-white mb-1">Premium Finishing</h3>
              <p className="text-sm font-bold text-accent-light mb-4">PKR 6,500 / sq ft</p>
              <p className="text-xs text-white/75 leading-relaxed mb-6">
                The flagship specification chosen by 70% of Al Ammana homeowners. Premium imported porcelain tiles, Pakistan Cables, and designer woodwork.
              </p>
              <ul className="space-y-2 text-xs text-white/90 border-t border-white/20 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-accent shrink-0" />
                  <span><strong>Wiring:</strong> Pakistan Cables (99.9% Pure Copper)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-accent shrink-0" />
                  <span><strong>Tiles:</strong> Imported Porcelain Glazed (60×120 cm)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-accent shrink-0" />
                  <span><strong>Sanitary:</strong> Grohe / Porta Luxury Vanities</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-accent shrink-0" />
                  <span><strong>Doors:</strong> Solid Ash Veneer with Architraves</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-accent shrink-0" />
                  <span><strong>Paint:</strong> ICI Dulux / Berger Luxury Emulsion</span>
                </li>
              </ul>
            </div>
            <a
              href={whatsappLink('Assalam o Alaikum, I would like to inquire about the Premium Finishing Tier specifications and turn-key handover.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackClarityEvent('whatsapp_materials_inquiry');
                setClarityTag('active_finishing_tier', 'premium');
                upgradeClaritySession('materials_premium_consult');
              }}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white text-burgundy py-3 text-xs uppercase tracking-widest font-bold hover:bg-beige transition-all shadow-md text-center"
            >
              <MessageCircle size={14} /> Book Premium Finishing
            </a>
          </div>

          {/* Luxury Tier Card */}
          <div className="rounded-3xl border border-sand bg-white p-7 transition-all hover:shadow-xl hover:border-sand/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-2xl bg-burgundy/10 text-burgundy">
                  <Crown size={22} />
                </span>
                <span className="rounded-full bg-sand/40 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink/70">
                  Ultra-Luxury
                </span>
              </div>
              <h3 className="font-serif text-2xl text-ink mb-1">Luxury Finishing</h3>
              <p className="text-sm font-bold text-burgundy mb-4">PKR 9,000 / sq ft</p>
              <p className="text-xs text-ink/65 leading-relaxed mb-6">
                Bespoke architectural elegance featuring genuine Italian marble, German concealed fittings, smart automation, and solid wood craftsmanship.
              </p>
              <ul className="space-y-2 text-xs text-ink/80 border-t border-sand/50 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-burgundy shrink-0" />
                  <span><strong>Flooring:</strong> Italian Marble Crema Marfil / Granite</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-burgundy shrink-0" />
                  <span><strong>Sanitary:</strong> Grohe Concealed German Systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-burgundy shrink-0" />
                  <span><strong>Woodwork:</strong> Solid Teak / Ash + Smart Digital Locks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-burgundy shrink-0" />
                  <span><strong>Ceilings:</strong> USG Boral Custom Spanish Gypsum</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-burgundy shrink-0" />
                  <span><strong>Smart Home:</strong> Full Smart Automation Conduiting</span>
                </li>
              </ul>
            </div>
            <a
              href={whatsappLink('Assalam o Alaikum, I would like to inquire about the Luxury Finishing Tier specifications for custom villa construction.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackClarityEvent('whatsapp_materials_inquiry');
                setClarityTag('active_finishing_tier', 'luxury');
                upgradeClaritySession('materials_luxury_consult');
              }}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-burgundy/30 py-3 text-xs uppercase tracking-widest font-bold text-burgundy hover:bg-burgundy hover:text-white transition-all text-center"
            >
              <MessageCircle size={14} /> Consult Luxury Tier
            </a>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                trackClarityEvent('materials_category_switched');
                setClarityTag('material_category', 'all');
              }}
              className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${
                selectedCategory === 'all'
                  ? 'bg-burgundy text-white shadow-md shadow-burgundy/20'
                  : 'border border-sand bg-white text-ink/70 hover:border-burgundy/40'
              }`}
            >
              All Items ({materials.length})
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  trackClarityEvent('materials_category_switched');
                  setClarityTag('material_category', cat);
                }}
                className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${
                  selectedCategory === cat
                    ? 'bg-burgundy text-white shadow-md shadow-burgundy/20'
                    : 'border border-sand bg-white text-ink/70 hover:border-burgundy/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3.5 top-3 h-4 w-4 text-ink/40" />
            <input
              type="text"
              placeholder="Search materials, brands (e.g. Cables, Grohe, Marble)…"
              value={searchQuery}
              onChange={(e) => {
                const val = e.target.value;
                setSearchQuery(val);
                if (val.trim().length >= 3) {
                  trackClarityEvent('materials_searched');
                  setClarityTag('material_search_query', val.trim().slice(0, 50));
                }
              }}
              className="w-full rounded-full border border-sand bg-white py-2.5 pl-10 pr-4 text-xs text-ink outline-none transition focus:border-burgundy focus:ring-1 focus:ring-burgundy"
            />
          </div>
        </div>

        {/* Specification Matrix Table */}
        <div className="overflow-hidden rounded-3xl border border-sand/70 bg-white shadow-xl" data-clarity-unmask="true">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-ink">
              <thead className="border-b border-sand bg-beige/60 text-[11px] font-bold uppercase tracking-wider text-burgundy">
                <tr>
                  <th className="px-5 py-4 w-12">Sr.</th>
                  <th className="px-5 py-4 w-60">Material / Item</th>
                  <th className="px-5 py-4 w-1/4">Executive Specification</th>
                  <th className="px-5 py-4 w-1/4 bg-burgundy/5 text-burgundy font-extrabold">
                    Premium Specification
                  </th>
                  <th className="px-5 py-4 w-1/4">Luxury Specification</th>
                  <th className="px-5 py-4 text-right">Inquire</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand/40 text-xs md:text-sm">
                {filteredMaterials.map((item) => {
                  const wa = whatsappLink(
                    `Assalam o Alaikum, I am inquiring about the ${item.name} specification across finishing tiers (Executive: ${item.executive}, Premium: ${item.premium}, Luxury: ${item.luxury}). Please provide details.`
                  );
                  return (
                    <tr key={item.srNo} className="hover:bg-sand/15 transition-colors">
                      <td className="px-5 py-3.5 font-mono text-ink/50">{item.srNo}</td>
                      <td className="px-5 py-3.5">
                        <div className="font-bold text-ink">{item.name}</div>
                        <span className="inline-block mt-0.5 rounded bg-sand/40 px-1.5 py-0.5 text-[10px] font-semibold text-ink/70">
                          {item.category}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-ink/80 leading-relaxed font-normal">
                        {item.executive}
                      </td>
                      <td className="px-5 py-3.5 bg-burgundy/[0.02] text-ink font-semibold leading-relaxed border-x border-burgundy/10">
                        {item.premium}
                      </td>
                      <td className="px-5 py-3.5 text-ink/90 leading-relaxed font-normal">
                        {item.luxury}
                      </td>
                      <td className="px-5 py-3.5 text-right">
                        <a
                          href={wa}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => {
                            trackClarityEvent('whatsapp_materials_item_inquiry');
                            setClarityTag('inquired_material', item.name);
                            upgradeClaritySession('material_item_inquiry');
                          }}
                          className="inline-flex items-center gap-1 rounded-full bg-sand/30 px-3 py-1.5 text-xs font-semibold text-burgundy hover:bg-burgundy hover:text-white transition-colors"
                          title="Ask our engineering team about this material"
                        >
                          <MessageCircle size={13} /> Ask
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {filteredMaterials.length === 0 && (
            <div className="py-16 text-center text-ink/50 text-sm">
              No material specifications found matching &ldquo;{searchQuery}&rdquo;.
            </div>
          )}

          {/* Table Footer Notes */}
          <div className="border-t border-sand/60 bg-beige/30 p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-ink/70">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-burgundy shrink-0" size={18} />
              <span>
                All materials are inspected on-site by our Quality Engineer with verifiable batch lab certificates.
              </span>
            </div>
            <a
              href="/payment-plans/faisal-hills-block-a-finished-house-payment-plan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackClarityEvent('materials_brochure_download');
                upgradeClaritySession('brochure_download');
              }}
              className="inline-flex items-center gap-1.5 font-bold text-burgundy hover:underline shrink-0"
            >
              Download Complete Official Rate Brochure <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
