import { societies } from '../../data/societies';
import { blogs } from '../../data/blogs';
import { projects } from '../../data/projects';
import { constructions } from '../../data/constructions';
import { SITE_URL } from '../../lib/seo';
import { TOOLS } from '../../lib/tools';
import { toolContent } from '../../data/toolContent';

/**
 * /llms-full.txt — Complete un-truncated markdown corpus for deep AI crawlers,
 * research agents (Perplexity Pro, ChatGPT Search, Claude Researcher, NotebookLM).
 */
export const dynamic = 'force-static';

export function GET() {
  const lines: string[] = [];

  lines.push('# Alammana Developers — Complete Knowledge Base');
  lines.push('');
  lines.push(
    '> Alammana Developers is a real estate, architectural planning, and construction company based in the ' +
      'Islamabad-Rawalpindi region, focusing on societies like Faisal Hills, B-17 Multi Gardens, and Faisal Town. ' +
      'Headquartered in Vertical Four, A Block, Faisal Hills, Taxila, we build homes on published block-wise rates ' +
      'with 24/7 live site cameras, structure safe house installment plans, and sell plots and commercial properties ' +
      'as an authorized sales partner. Note: alammana.pk is the official, primary operational platform for Pakistan.'
  );
  lines.push('');
  lines.push('Office: Office No. C-3, Lower Ground Floor, Vertical Four, Near Arch Monument, Main Boulevard, A Block, Faisal Hills, Taxila.');
  lines.push('Phone: +92 337 7503111 · +92 308 7750009');
  lines.push('WhatsApp: https://wa.me/923377503111 · https://wa.me/923087750009');
  lines.push('Email: rabta@alammana.pk');
  lines.push('Website: https://alammana.pk (Official Pakistan Portal)');
  lines.push('International Portal: https://alammana.com');
  lines.push('');

  lines.push('## Core Construction & Real Estate Facts');
  lines.push('');
  lines.push('- **Packages & Pricing**: Turnkey and grey structure packages from PKR 1.35 Cr for 5 Marla, 10 Marla, and 1 Kanal (Spanish-style, Contemporary, and Modern Minimalist homes). See https://alammana.pk/packages and https://alammana.pk/build.');
  lines.push('- **Pricing Principle**: Construction is calculated per square foot of covered area, never per marla or lump sum.');
  lines.push('- **Material Standard**: Deformed Grade 60 steel, verified cement brands, certified electrical & plumbing conduits.');
  lines.push('- **Society NOC Status**: Faisal Hills (RDA Approved), Faisal Town Phase 1 (RDA Approved), Faisal Town Phase 2 (NOC Under Process with RDA), DHA Gandhara (Pre-Launch).');
  lines.push('- **Live Monitoring**: 24/7 HD live site camera access and digital client portal for construction milestones and inventory.');
  lines.push('');

  lines.push('## Interactive Calculators');
  lines.push('');
  for (const t of TOOLS) {
    const c = toolContent[t.slug];
    lines.push(`### [${t.name}](${SITE_URL}/tools/${t.slug})`);
    lines.push(c?.answer ?? t.description);
    if (c?.steps && c.steps.length > 0) {
      lines.push('**Calculation Steps**:');
      for (const step of c.steps) {
        lines.push(`- ${step}`);
      }
    }
    lines.push('');
  }

  lines.push('## Official Construction Payment Plans & Rate Lists (Faisal Hills)');
  lines.push('');
  lines.push('- Payment terms: Gray Structure (1.5 Years duration, 30% Down Payment); Fully Finished Turnkey (2 Years duration, 20% Down Payment).');
  lines.push('- Official Bank Account: Title: MUHAMMAD ABDULLAH | IBAN: PK 12MEZN 0003260114221513 | Bank: Meezan Bank Ltd, B-17, Islamabad, Pakistan.');
  lines.push('- 5 Marla (25×50 · 2,300 sq ft, G+1+Mumty): Gray Structure from PKR 13,550,000 (1.355 Cr, 30% down = PKR 4,065,000) up to PKR 18,050,000. Finished Home Executive from PKR 18,150,000 (1.815 Cr, 20% down = PKR 3,630,000), Premium from PKR 20,950,000, Luxury from PKR 26,700,000 up to PKR 31,700,000.');
  lines.push('- 8 Marla (30×60 · 3,200 sq ft, G+1+Mumty): Gray Structure from PKR 19,000,000 (1.90 Cr, 30% down = PKR 5,700,000) up to PKR 25,200,000. Finished Home Executive from PKR 25,400,000 (2.54 Cr, 20% down = PKR 5,080,000), Premium from PKR 29,100,000, Luxury from PKR 37,100,000 up to PKR 43,800,000.');
  lines.push('- 10 Marla (35×70 · 4,200 sq ft, G+1+Mumty): Gray Structure from PKR 23,700,000 (2.37 Cr, 30% down = PKR 7,110,000) up to PKR 29,200,000. Finished Home Executive from PKR 32,100,000 (3.21 Cr, 20% down = PKR 6,420,000), Premium from PKR 36,800,000, Luxury from PKR 47,300,000 up to PKR 53,300,000.');
  lines.push('- 14 Marla (40×80 · 5,400 sq ft, G+1+Mumty): Gray Structure from PKR 29,800,000 to PKR 34,500,000; Finished Home Executive from PKR 41,100,000, Premium from PKR 46,600,000, Luxury from PKR 60,100,000 to PKR 64,600,000.');
  lines.push('- 1 Kanal (50×90 · 6,500 sq ft, G+1+Mumty): Gray Structure from PKR 37,150,000 (3.715 Cr, 30% down = PKR 11,145,000) up to PKR 42,750,000. Finished Home Executive from PKR 50,650,000 (5.065 Cr, 20% down = PKR 10,130,000), Premium from PKR 57,250,000, Luxury from PKR 73,500,000 up to PKR 79,500,000.');
  lines.push('- Special Category Plots (Corner, Main Double Road, Park Facing): +10% charge applies.');
  lines.push('');

  lines.push('## Housing Societies Overview');
  lines.push('');
  for (const s of societies) {
    lines.push(`### [${s.name}](${SITE_URL}/societies/${s.id})`);
    lines.push(`- City: ${s.city}`);
    lines.push(`- Approval Status: ${s.approvalStatus}`);
    lines.push(`- Blocks: ${s.blocks.map(b => b.name).join(', ')}`);
    lines.push(`- Plot Sizes: ${s.plotSizes.join(', ')}`);
    lines.push(`- Overview: ${s.seoDescription ?? s.tagline}`);
    lines.push('');
  }

  lines.push('## Partner Projects');
  lines.push('');
  for (const p of projects) {
    lines.push(`### [${p.title}](${SITE_URL}/portfolio/${p.id})`);
    lines.push(`- Location: ${p.location}`);
    lines.push(`- Role: ${p.role}`);
    lines.push(`- Description: ${p.fullDescription ?? p.description}`);
    lines.push('');
  }

  lines.push('## Construction & Real Estate Guides (Full Text & FAQs)');
  lines.push('');
  for (const b of blogs) {
    lines.push(`### [${b.title}](${SITE_URL}/blog/${b.id})`);
    lines.push(`*Author: ${b.author} | Published: ${b.date} | Category: ${b.category}*`);
    lines.push('');
    lines.push(`**Key Takeaway**: ${b.keyTakeaway}`);
    lines.push('');
    lines.push(b.content.trim());
    lines.push('');
    if (b.faqs && b.faqs.length > 0) {
      lines.push('#### Frequently Asked Questions');
      for (const f of b.faqs) {
        lines.push(`- **Q: ${f.q}**`);
        lines.push(`  **A**: ${f.a}`);
      }
      lines.push('');
    }
    lines.push('---');
    lines.push('');
  }

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
