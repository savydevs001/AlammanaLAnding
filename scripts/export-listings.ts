/**
 * One-off: export the listings hard-coded in src/data/ into the ERP's
 * website-listing import format (alammana-erp-api: npm run website:import).
 *
 *   npx tsx scripts/export-listings.ts > listings-export.json
 *
 * Partner projects and societies are already live, so they import as
 * PUBLISHED. Constructions are placeholder data (see the warning at the top of
 * src/data/constructions.ts), so they import as DRAFT for the team to replace
 * with real sites before publishing.
 */
import { projects } from '../src/data/projects';
import { societies } from '../src/data/societies';
import { constructions } from '../src/data/constructions';

const strip = <T extends { id: string }>(o: T) => {
  const { id: _id, ...rest } = o;
  return rest;
};

const out = [
  ...projects.map((p, i) => ({ kind: 'PARTNER_PROJECT', slug: p.id, title: p.title, sortOrder: (i + 1) * 10, status: 'PUBLISHED', content: strip(p) })),
  ...societies.map((s, i) => ({ kind: 'SOCIETY', slug: s.id, title: s.name, sortOrder: (i + 1) * 10, status: 'PUBLISHED', content: strip(s) })),
  ...constructions.map((c, i) => ({ kind: 'CONSTRUCTION', slug: c.id, title: c.title, sortOrder: (i + 1) * 10, status: 'DRAFT', content: strip(c), reviewNote: 'Imported placeholder: replace address, specs and photos with the real site before publishing.' })),
];
process.stdout.write(JSON.stringify(out, null, 2));
