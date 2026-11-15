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
