/** FAQ accordion + FAQPage structured data for a listing page. FAQs are
 *  written in the ERP (Website → Listings); Google and AI answer engines quote
 *  them directly, so each answer should stand on its own. Server component. */
export default function ListingFaqs({ title, faqs }: { title: string; faqs?: Array<{ q: string; a: string }> }) {
  if (!faqs?.length) return null;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  return (
    <section className="py-20 bg-beige/30">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-4xl mx-auto px-4">
        <span className="text-burgundy text-xs uppercase tracking-widest font-bold block mb-4">Questions</span>
        <h2 className="text-4xl md:text-5xl font-serif italic mb-12">{title} FAQs</h2>
        <div className="space-y-6">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl bg-white border border-sand/50 p-7 open:shadow-md transition-shadow">
              <summary className="cursor-pointer list-none font-serif text-xl text-ink flex items-start justify-between gap-4">
                <span>{f.q}</span>
                <span className="text-burgundy shrink-0 transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
              </summary>
              <p className="mt-5 text-ink/70 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
