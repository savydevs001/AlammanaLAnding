'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Download, ExternalLink, FileText, Home, Building, ArrowRight } from 'lucide-react';

type FinishType = 'gray' | 'finished';

const blocks = [
  { id: 'block-a', label: 'Block A' },
  { id: 'block-b', label: 'Block B' },
  { id: 'block-c', label: 'Block C' },
  { id: 'block-d', label: 'Block D' },
  { id: 'executive-block', label: 'Executive Block' },
];

const finishTypes: { id: FinishType; label: string; icon: React.ReactNode; desc: string }[] = [
  {
    id: 'gray',
    label: 'Gray Structure',
    icon: <Building size={20} />,
    desc: 'Complete structural shell — foundations, walls, roof slab, and plaster.',
  },
  {
    id: 'finished',
    label: 'Fully Finished',
    icon: <Home size={20} />,
    desc: 'Turnkey home — flooring, paint, woodwork, bathrooms, and fittings included.',
  },
];

function pdfPath(block: string, finish: FinishType) {
  const suffix = finish === 'gray' ? 'gray-structure' : 'finished-house';
  return `/payment-plans/faisal-hills-${block}-${suffix}-payment-plan.pdf`;
}

export default function PaymentPlansClient() {
  const [finish, setFinish] = useState<FinishType>('gray');
  const [block, setBlock] = useState(blocks[0]);

  const currentPdf = pdfPath(block.id, finish);
  const currentImage = currentPdf.replace(/\.pdf$/, '.webp');
  const currentFinish = finishTypes.find(f => f.id === finish)!;
  const planTitle = `${block.label} — ${currentFinish.label} Payment Plan`;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-beige relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_#8B2635_1px,_transparent_1px)] bg-[length:28px_28px]"></div>
        <div className="max-w-[1600px] mx-auto px-4 py-20 md:py-28 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-[1px] w-12 bg-burgundy"></div>
              <span className="text-[12px] md:text-xs uppercase tracking-[0.3em] font-bold text-burgundy">
                Official Rate Lists — Faisal Hills
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-ink leading-tight mb-6 max-w-4xl">
              Construction Rates <span className="italic text-burgundy">&amp; Payment Plans</span>
            </h1>
            <p className="text-base md:text-lg text-ink/70 max-w-2xl leading-relaxed">
              Transparent, block-wise pricing for house construction in Faisal Hills. Compare gray
              structure rates with fully finished house prices for Block A, B, C, D and the Executive
              Block — preview each plan below or download the official PDF.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Selector + Viewer */}
      <section className="py-16 md:py-24 bg-paper">
        <div className="max-w-[1600px] mx-auto px-4">
          {/* Finish type toggle */}
          <div className="mb-12">
            <span className="text-[12px] uppercase tracking-widest font-bold text-ink/40 block mb-4">
              Step 1 — Choose Construction Type
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
              {finishTypes.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFinish(f.id)}
                  className={`text-left p-6 rounded-2xl border transition-all ${
                    finish === f.id
                      ? 'bg-burgundy text-white border-burgundy shadow-lg shadow-burgundy/20'
                      : 'bg-white text-ink border-sand hover:border-burgundy/40'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className={finish === f.id ? 'text-beige' : 'text-burgundy'}>{f.icon}</span>
                    <span className="font-serif text-xl">{f.label}</span>
                  </div>
                  <p className={`text-sm leading-relaxed ${finish === f.id ? 'text-white/70' : 'text-ink/60'}`}>
                    {f.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Block selector */}
          <div className="mb-12">
            <span className="text-[12px] uppercase tracking-widest font-bold text-ink/40 block mb-4">
              Step 2 — Select Your Block
            </span>
            <div className="flex flex-wrap gap-3">
              {blocks.map((b) => (
                <button
                  key={b.id}
                  onClick={() => setBlock(b)}
                  className={`px-6 py-3 rounded-full text-sm uppercase tracking-widest font-bold transition-all ${
                    block.id === b.id
                      ? 'bg-burgundy text-white shadow-lg shadow-burgundy/20'
                      : 'bg-white border border-sand text-ink hover:border-burgundy/40'
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          {/* Viewer card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPdf}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="bg-white rounded-3xl border border-sand/60 shadow-xl overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 md:p-8 border-b border-sand/40">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-beige flex items-center justify-center text-burgundy shrink-0">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h2 className="font-serif text-xl md:text-2xl text-ink">{planTitle}</h2>
                    <p className="text-[12px] uppercase tracking-widest font-bold text-ink/40 mt-1">
                      Faisal Hills, Taxila — Official PDF
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 shrink-0">
                  <a
                    href={currentPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-sand text-ink px-5 py-3 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-beige transition-colors"
                  >
                    <ExternalLink size={16} /> Full Screen
                  </a>
                  <a
                    href={currentPdf}
                    download
                    className="flex items-center gap-2 bg-burgundy text-white px-5 py-3 rounded-full text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-opacity shadow-lg shadow-burgundy/20"
                  >
                    <Download size={16} /> Download
                  </a>
                </div>
              </div>

              {/* Plan preview — pre-rendered image of the PDF, works on every
                  device (mobile browsers can't embed PDFs). Tap to open the PDF. */}
              <div className="bg-ink/5 p-3 md:p-6">
                <a href={currentPdf} target="_blank" rel="noopener noreferrer" title="Open the PDF in full screen">
                  <img
                    src={currentImage}
                    alt={`${planTitle} — rate list for house construction in Faisal Hills`}
                    className="w-full h-auto rounded-xl border border-sand/60 shadow-md"
                    loading="lazy"
                  />
                </a>
                <p className="text-center text-[12px] uppercase tracking-widest font-bold text-ink/40 mt-4">
                  Tap the plan to open the PDF — or use the download button above
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Gray vs Finished explainer — useful for visitors and for SEO copy */}
      <section className="py-24 bg-ink text-paper">
        <div className="max-w-[1600px] mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <span className="text-beige text-xs uppercase tracking-widest font-bold mb-6 block">
              Understanding the Rates
            </span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              Gray Structure vs. <span className="italic text-beige/60">Fully Finished</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border border-paper/10 overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden bg-ink">
                <img
                  src="/assets/constructions/facade-dark-glass.webp"
                  alt="A gray structure shell — walls, slabs and plaster complete, no finishing"
                  width={1500} height={1000} loading="lazy" decoding="async"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-paper p-4 aspect-square flex items-center justify-center">
                  <Building className="text-burgundy" size={28} />
                </div>
                <h3 className="text-2xl font-serif text-beige">Gray Structure</h3>
              </div>
              <p className="text-paper/60 text-sm leading-relaxed mb-6">
                The complete skeleton of your home in Faisal Hills — excavation, foundations,
                brickwork, roof slabs, internal and external plaster, and underground plumbing.
                Ideal if you want to manage finishing yourself or in phases.
              </p>
              <ul className="space-y-2 text-sm text-paper/70">
                <li>— Foundations &amp; structural frame</li>
                <li>— Walls, roof slabs &amp; plaster</li>
                <li>— Rough plumbing &amp; conduits</li>
                <li>— Boundary wall &amp; main gate structure</li>
              </ul>
              <p className="mt-6 pt-6 border-t border-paper/10 text-[12px] uppercase tracking-widest font-bold text-beige/70">
                You still need: flooring, paint, doors, kitchen, bathrooms, wiring
              </p>
              </div>
            </div>
            <div className="border border-paper/10 overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden bg-ink">
                <img
                  src="/assets/constructions/facade-white-poolside.webp"
                  alt="A fully finished home — complete and ready to move into"
                  width={1500} height={1000} loading="lazy" decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-paper p-4 aspect-square flex items-center justify-center">
                  <Home className="text-burgundy" size={28} />
                </div>
                <h3 className="text-2xl font-serif text-beige">Fully Finished</h3>
              </div>
              <p className="text-paper/60 text-sm leading-relaxed mb-6">
                A turnkey home, ready to move in. Everything in the gray structure plus complete
                finishing to Alammana&apos;s premium standard — you receive the keys to a completed
                house in Faisal Hills.
              </p>
              <ul className="space-y-2 text-sm text-paper/70">
                <li>— Tiling, flooring &amp; paint</li>
                <li>— Kitchen, wardrobes &amp; woodwork</li>
                <li>— Complete bathrooms &amp; sanitary fittings</li>
                <li>— Electrical fittings, switches &amp; fixtures</li>
              </ul>
              <p className="mt-6 pt-6 border-t border-paper/10 text-[12px] uppercase tracking-widest font-bold text-beige/70">
                Nothing left to do — you get the keys
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When you pay — milestone strip. The PDFs contain this but nobody reads a
          PDF to answer 'when does the money leave my account'. */}
      <section className="py-20 md:py-24 bg-beige/40">
        <div className="max-w-[1600px] mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <span className="text-burgundy text-xs uppercase tracking-widest font-bold mb-4 block">
              How Payment Works
            </span>
            <h2 className="text-3xl md:text-4xl font-serif italic mb-4">You pay as it gets built</h2>
            <p className="text-ink/65 leading-relaxed">
              Payments follow construction milestones, not the calendar. You are always paying for
              work that already exists on your plot — never months ahead of it.
            </p>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { n: '1', t: 'On signing', d: 'Mobilisation, site set-out and material staging.' },
              { n: '2', t: 'Foundation', d: 'Excavation, footings and plinth complete.' },
              { n: '3', t: 'Each slab', d: 'A payment per floor as the frame goes up.' },
              { n: '4', t: 'Brickwork & plaster', d: 'Walls up, internal and external plaster done.' },
              { n: '5', t: 'On handover', d: 'Final balance after snagging is cleared.' },
            ].map(step => (
              <li key={step.n} className="rounded-2xl bg-white border border-sand/50 p-6">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-burgundy text-white font-bold text-sm mb-4">
                  {step.n}
                </span>
                <h3 className="font-serif text-lg text-ink mb-2 leading-snug">{step.t}</h3>
                <p className="text-sm text-ink/60 leading-relaxed">{step.d}</p>
              </li>
            ))}
          </ol>

          <p className="text-sm text-ink/55 mt-8 max-w-2xl leading-relaxed">
            Exact amounts per milestone are set out in the rate list for your block. Gray structure
            contracts end at plaster; finished contracts continue through finishing in stages.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-paper border-t border-burgundy/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif italic mb-6">Questions About a Plan?</h2>
          <p className="text-ink/60 mb-10 max-w-xl mx-auto">
            Our team can walk you through the installment schedule for your block, current material
            rates, and customization options before you commit.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-burgundy text-white px-10 py-5 rounded-full text-sm uppercase tracking-[0.2em] font-bold hover:opacity-90 transition-opacity shadow-lg shadow-burgundy/20"
          >
            Book a Free Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
