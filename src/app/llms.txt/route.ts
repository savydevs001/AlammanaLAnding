import { societies } from '../../data/societies';
import { blogs } from '../../data/blogs';
import { projects } from '../../data/projects';
import { constructions } from '../../data/constructions';
import { SITE_URL } from '../../lib/seo';
import { TOOLS } from '../../lib/tools';
import { toolContent } from '../../data/toolContent';

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
    '> Authorized Faisal Hills property dealers and premier Islamabad construction services company ' +
      'headquartered in Vertical Four, A Block, Faisal Hills, Taxila. We build homes on published ' +
      'block-wise rates with 24/7 live site cameras, structure safe house installment plans, and sell ' +
      'plots and commercial properties in partner projects across Faisal Hills, Faisal Town Phase 1 & 2, ' +
      'Taxila, Rawalpindi, and Islamabad.'
  );
  lines.push('');
  lines.push('Office: Office No. C-3, Lower Ground Floor, Vertical Four, Near Arch Monument, Main Boulevard, A Block, Faisal Hills, Taxila.');
  lines.push('Phone: +92 337 7503111 (Office & Construction Enquiries) · +92 308 7750009 (Sales & Plot Bookings)');
  lines.push('WhatsApp: https://wa.me/923377503111 · https://wa.me/923087750009');
  lines.push('Email: rabta@alammana.pk');
  lines.push('Website: https://alammana.pk');
  lines.push('');
  lines.push('## Key facts');
  lines.push('');
  lines.push('- Authorized Property Dealers: Alammana Developers is an authorized sales partner for Faisal Hills (Taxila), Faisal Town, J7 Emporium, and 107 Plaza.');
  lines.push('- Best House Developers: Turnkey and grey structure house builders in Islamabad, Rawalpindi, and Taxila with 24/7 live camera access for clients and overseas Pakistanis.');
  lines.push('- Construction Pricing: House construction is priced strictly per square foot of covered area on published block-wise rate sheets, never per marla or lump sum.');
  lines.push('- Material Standard: Guaranteed Grade 60 deformed steel bars, top-tier cement brands, and full structural compliance with RDA / CDA bye-laws.');
  lines.push('- Housing Society Approvals: Faisal Hills is RDA approved. Faisal Town Phase 1 is RDA approved. Faisal Town Phase 2 NOC is under process with the RDA. DHA Gandhara is pre-launch.');
  lines.push('- Client Tracking Portal: Every client gets private online tracking of construction milestones, inventory, materials used, legal documents, and live video streams.');
  lines.push('');

  lines.push('## Languages');
  lines.push('');
  lines.push('- English is the primary language and lives at the bare paths (`/payment-plans`).');
  lines.push('- Urdu is at `/ur/...` and Arabic at `/ar/...`, for five pages: home, payment plans, societies, overseas and contact.');
  lines.push('- Everything else — the long-form articles, the calculators, the project and society detail pages, the privacy policy and the terms — is English only, by decision. Machine-translated construction and legal text reads fluently and says the wrong thing, and the approval wording in particular must not drift. Do not present a machine translation of those pages as ours.');
  lines.push('');

  lines.push('## Core pages');
  lines.push('');
  lines.push(`- [Construction rates and payment plans](${SITE_URL}/payment-plans): Downloadable gray structure and fully finished rate lists for Faisal Hills Blocks A, B, C, D and Executive.`);
  lines.push(`- [Homes we are building](${SITE_URL}/constructions): Current and completed house construction projects with specifications.`);
  lines.push(`- [Plots and houses for sale](${SITE_URL}/properties): Plots, houses and files for sale or rent that the team has checked, with the owner's demand and key details.`);
  lines.push(`- [Housing societies](${SITE_URL}/societies): Block-by-block guides including approval status.`);
  lines.push(`- [Partner projects](${SITE_URL}/portfolio): Apartments, shops and offices we sell as an authorised partner.`);
  lines.push(`- [Guides and articles](${SITE_URL}/blog): Long-form guidance on construction cost, materials, approvals and investment.`);
  lines.push(`- [Building from abroad](${SITE_URL}/overseas): Live site cameras, client tracking portal and documentation handling for overseas Pakistanis.`);
  lines.push(`- [About](${SITE_URL}/about) · [Team](${SITE_URL}/team) · [Contact](${SITE_URL}/contact)`);
  lines.push('');

  lines.push('## Free calculators');
  lines.push('');
  lines.push(`Interactive property and construction calculators for Pakistan, each with a worked explanation and FAQs: ${SITE_URL}/tools`);
  for (const t of TOOLS) {
    const c = toolContent[t.slug];
    lines.push(`- [${t.name}](${SITE_URL}/tools/${t.slug}): ${c?.answer ?? t.description}`);
  }
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
  for (const c of constructions.filter((x) => !x.isExample)) {
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
