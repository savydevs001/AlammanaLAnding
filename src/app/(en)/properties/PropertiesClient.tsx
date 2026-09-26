'use client';

import { useMemo, useState } from 'react';
import { MessageCircle, MapPin } from 'lucide-react';
import LeadForm from '../../../components/LeadForm';
import { whatsappLink } from '../../../lib/contact';
import { properties, propertyTitle, priceText, featureChips, propertyAnchor, KIND_LABEL, type Property, type PropertyKind } from '../../../data/properties';

const DEALS = [
  { value: 'ALL', label: 'All' },
  { value: 'FOR_SALE', label: 'For sale' },
  { value: 'FOR_RENT', label: 'For rent' },
] as const;

function PropertyCard({ p }: { p: Property }) {
  const title = propertyTitle(p);
  const chips = featureChips(p);
  const ask = `Assalam o Alaikum, I'm interested in: ${title} (${priceText(p.price, p.dealType)}). Ref ${propertyAnchor(p)}`;
  return (
    <article id={propertyAnchor(p)} className="scroll-mt-32 flex flex-col overflow-hidden rounded-3xl border border-sand/60 bg-white">
      <div className="relative aspect-[4/3] bg-beige/40">
        {p.photos[0] ? (
          <img src={p.photos[0]} alt={title} loading="lazy" className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center text-ink/30 text-sm uppercase tracking-widest">{KIND_LABEL[p.kind]}</div>
        )}
        <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-paper">
          {p.dealType === 'FOR_RENT' ? 'For rent' : 'For sale'}
        </span>
        {p.photos.length > 1 && <span className="absolute bottom-3 right-3 rounded-full bg-paper/90 px-2.5 py-0.5 text-[11px] font-semibold">{p.photos.length} photos</span>}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h2 className="font-serif text-xl leading-snug mb-1">{title}</h2>
        {(p.area && (p.society || p.block)) && <p className="mb-1 flex items-center gap-1 text-xs text-ink/60"><MapPin size={12} /> {p.area}</p>}
        <p className="mb-3 text-lg font-bold text-burgundy">{priceText(p.price, p.dealType)}</p>
        {chips.length > 0 && (
          <ul className="mb-3 flex flex-wrap gap-1.5">
            {chips.map((c) => <li key={c} className="rounded-full bg-beige/60 px-2.5 py-0.5 text-[11px] font-semibold text-ink/80">{c}</li>)}
          </ul>
        )}
        {p.description && <p className="mb-4 line-clamp-3 text-sm text-ink/70">{p.description}</p>}
        <a href={whatsappLink(ask)} target="_blank" rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-burgundy px-5 py-3 text-xs font-bold uppercase tracking-widest text-paper hover:opacity-90">
          <MessageCircle size={16} /> Ask about this
        </a>
      </div>
    </article>
  );
}

export default function PropertiesClient() {
  const [deal, setDeal] = useState<(typeof DEALS)[number]['value']>('ALL');
  const [kind, setKind] = useState<PropertyKind | 'ALL'>('ALL');
  const kinds = useMemo(() => [...new Set(properties.map((p) => p.kind))], []);
  const shown = properties.filter((p) => (deal === 'ALL' || p.dealType === deal) && (kind === 'ALL' || p.kind === kind));

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-[1600px] mx-auto px-4">
        <header className="mb-12">
          <span className="text-burgundy text-xs uppercase tracking-[0.5em] font-bold mb-6 block">Properties</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-6">
            Plots &amp; Houses <br /> <span className="italic text-burgundy opacity-40">for Sale</span>
          </h1>
          <p className="text-ink/60 max-w-2xl text-lg leading-relaxed">
            Plots, houses and files our team has checked in Faisal Hills, Faisal Town and nearby societies.
            Prices are the owner&apos;s demand; ask us about the file status, dues and the right price before you pay anything.
          </p>
        </header>

        {properties.length > 0 && (
          <div className="mb-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-b border-burgundy/10 pb-6">
            {DEALS.map((d) => (
              <button key={d.value} onClick={() => setDeal(d.value)}
                className={`text-xs uppercase tracking-widest font-bold transition-all ${deal === d.value ? 'text-burgundy border-b-2 border-burgundy pb-2' : 'opacity-40 hover:opacity-100'}`}>
                {d.label}
              </button>
            ))}
            {kinds.length > 1 && (
              <select value={kind} onChange={(e) => setKind(e.target.value as PropertyKind | 'ALL')} aria-label="Property type"
                className="rounded-full border border-sand bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider">
                <option value="ALL">All types</option>
                {kinds.map((k) => <option key={k} value={k}>{KIND_LABEL[k]}</option>)}
              </select>
            )}
          </div>
        )}

        {shown.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {shown.map((p) => <PropertyCard key={p.id} p={p} />)}
          </div>
        ) : (
          <p className="mb-12 max-w-2xl rounded-2xl border border-burgundy/20 bg-beige/40 px-5 py-4 text-sm text-ink/80">
            {properties.length === 0
              ? 'We are adding the properties our team has checked. Tell us what you are looking for below and a dealer will send you matching options on WhatsApp.'
              : 'Nothing matches that filter right now — tell us what you want below and we will find it for you.'}
          </p>
        )}

        <section className="mt-20 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-3">Looking for something specific?</h2>
          <p className="text-ink/60 mb-8">Society, size and budget — we match it against every plot and house on our books, not only the ones shown here.</p>
          <LeadForm
            interests={['Plot to buy', 'House to buy', 'File to buy', 'Property to rent', 'Sell my property', 'Other']}
            subjectPrefix="Property Enquiry"
            context="Properties page"
          />
        </section>
      </div>
    </div>
  );
}
