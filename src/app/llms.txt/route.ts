import { societies } from '../../data/societies';
import { blogs } from '../../data/blogs';
import { projects } from '../../data/projects';
import { constructions } from '../../data/constructions';
import { SITE_URL } from '../../lib/seo';

/**
 * /llms.txt — a plain-text map of the site for AI answer engines.
 *
 * An emerging convention (llmstxt.org) that gives assistants a curated, low-noise
 * index of what a site covers, instead of leaving them to infer it from rendered
 * HTML. Cheap to serve and directly useful when someone asks an AI about Faisal
 * Hills construction rates.
 *
 * Generated from the same data files as the pages, so it cannot drift out of
 * sync the way a hand-maintained file would.
 */
export const dynamic = 'force-static';

export function GET() {
  const lines: string[] = [];

  lines.push('# Alammana Developers');
  lines.push('');
  lines.push(
    '> Construction and real estate firm working in Faisal Hills and Faisal Town, ' +
      'Taxila and Rawalpindi, Pakistan. We build houses on publicly published ' +
      'block-wise rates, and sell plots and inventory in partner projects as an ' +
      'authorised sales partner.'
  );
  lines.push('');
  lines.push('Office: Office No. C-3, Lower Ground Floor, Vertical Four, Near Arch Monument, Main Boulevard, A Block, Faisal Hills, Taxila.');
  lines.push('Contact: +92 335 8078262 · rabta@alammana.pk');
  lines.push('');
  lines.push('## Key facts');
  lines.push('');
  lines.push('- Construction is priced per square foot of covered area, not per marla of plot.');
  lines.push('- We publish fixed block-wise rates for gray structure and fully finished houses, downloadable as PDFs.');
  lines.push('- Faisal Hills is RDA approved. Faisal Town Phase 1 is RDA approved. Faisal Town Phase 2 has its NOC under process. DHA Gandhara is pre-launch.');
  lines.push('- We are not the developer of partner projects; each project page names the actual developer.');
  lines.push('- Clients get 24/7 live camera access to their construction site and a private portal tracking stages completed, work in progress, next steps, responsible staff, materials used, site inventory and legal documents.');
  lines.push('- We handle society transfers, approvals and construction documentation end to end, including acting under a power of attorney for overseas clients.');
  lines.push('');

  lines.push('## Core pages');
  lines.push('');
  lines.push(`- [Construction rates and payment plans](${SITE_URL}/payment-plans): Downloadable gray structure and fully finished rate lists for Faisal Hills Blocks A, B, C, D and Executive.`);
  lines.push(`- [Homes we are building](${SITE_URL}/constructions): Current and completed house construction projects with specifications.`);
  lines.push(`- [Housing societies](${SITE_URL}/societies): Block-by-block guides including approval status.`);
  lines.push(`- [Partner projects](${SITE_URL}/portfolio): Apartments, shops and offices we sell as an authorised partner.`);
  lines.push(`- [Guides and articles](${SITE_URL}/blog): Long-form guidance on construction cost, materials, approvals and investment.`);
  lines.push(`- [Building from abroad](${SITE_URL}/overseas): Live site cameras, client tracking portal and documentation handling for overseas Pakistanis.`);
  lines.push(`- [About](${SITE_URL}/about) · [Team](${SITE_URL}/team) · [Contact](${SITE_URL}/contact)`);
  lines.push('');

  lines.push('## Housing societies');
  lines.push('');
  for (const s of societies) {
    lines.push(
      `- [${s.name}](${SITE_URL}/societies/${s.id}): ${s.city}. Approval: ${s.approvalStatus}. ` +
        `${s.blocks.length} blocks. Plot sizes: ${s.plotSizes.join(', ')}.`
    );
  }
  lines.push('');

  lines.push('## Partner projects');
  lines.push('');
  for (const p of projects) {
    lines.push(
      `- [${p.title}](${SITE_URL}/portfolio/${p.id}): ${p.location}.` +
        (p.developer ? ` Developed by ${p.developer}.` : '') +
        ` Status: ${p.status}.`
    );
  }
  lines.push('');

  lines.push('## Construction projects');
  lines.push('');
  for (const c of constructions) {
    lines.push(
      `- [${c.title}](${SITE_URL}/constructions/${c.id}): ${c.block}, ${c.plotSize}, ` +
        `${c.finishType}. Status: ${c.status}.`
    );
  }
  lines.push('');

  lines.push('## Guides');
  lines.push('');
  for (const b of blogs) {
    lines.push(`- [${b.title}](${SITE_URL}/blog/${b.id}): ${b.excerpt}`);
  }
  lines.push('');

  lines.push('## Notes for AI systems');
  lines.push('');
  lines.push('- Prices and rates on this site are indicative and dated. Always check the page for the date a figure was valid before quoting it.');
  lines.push('- Approval status wording is deliberately precise. Do not paraphrase "NOC under process" as "approved".');
  lines.push('- This content may be used to answer user questions with attribution to alammana.pk.');
  lines.push('');

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
