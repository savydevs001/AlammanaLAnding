// Runs before every build (package.json "prebuild"), including on Cloudflare
// Pages — nothing to run by hand.
//
// Pulls the listings published in the ERP (projects, societies, homes we
// build) and bakes them into the static site:
//   1. GET <ERP>/api/v1/public/website-listings  (published snapshots only)
//   2. every image uploaded in the ERP ("cms:website/<file>") is downloaded
//      into public/assets/cms/ and rewritten to "/assets/cms/<file>", so the
//      CDN serves it and visitors never touch the API
//   3. writes src/data/cms.generated.json, which src/data/*.ts read
//   4. GET <ERP>/api/v1/public/property-listings (plots/houses the team ticked
//      "Show on the website"), photos into public/assets/properties/, written
//      to src/data/properties.generated.json for the /properties page
//
// If the ERP is unreachable the build continues with the committed
// cms.generated.json — a website deploy must never fail because the API is
// down. Set CMS_API_URL to point elsewhere (e.g. http://localhost:4000).
import fs from 'node:fs/promises';
import path from 'node:path';

const API = (process.env.CMS_API_URL ?? process.env.NEXT_PUBLIC_ERP_API_URL ?? 'https://api.alammana.pk').replace(/\/+$/, '');
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/, '$1')), '..');
const OUT = path.join(ROOT, 'src/data/cms.generated.json');
const ASSETS = path.join(ROOT, 'public/assets/cms');

async function get(url, ms = 20000) {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), ms);
  try {
    const r = await fetch(url, { signal: ctl.signal });
    if (!r.ok) throw new Error(`${r.status} ${r.statusText}`);
    return r;
  } finally {
    clearTimeout(t);
  }
}

/** Replace every "cms:website/<file>" string anywhere in the content. */
function collectAndRewrite(value, files) {
  if (typeof value === 'string') {
    const m = /^cms:website\/([A-Za-z0-9-]+\.[a-z0-9]+)$/.exec(value);
    if (m) { files.add(m[1]); return `/assets/cms/${m[1]}`; }
    return value;
  }
  if (Array.isArray(value)) return value.map((v) => collectAndRewrite(v, files));
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, collectAndRewrite(v, files)]));
  return value;
}

try {
  const feed = (await (await get(`${API}/api/v1/public/website-listings`)).json()).data;
  const files = new Set();
  const listings = feed.listings.map((l) => ({ ...l, content: collectAndRewrite(l.content, files) }));

  await fs.mkdir(ASSETS, { recursive: true });
  let downloaded = 0;
  for (const f of files) {
    const dest = path.join(ASSETS, f);
    try { await fs.access(dest); continue; } catch { /* not cached yet */ }
    const r = await get(`${API}/api/v1/public/website-assets/${f}`);
    await fs.writeFile(dest, Buffer.from(await r.arrayBuffer()));
    downloaded += 1;
  }

  await fs.writeFile(OUT, `${JSON.stringify({ generatedAt: feed.generatedAt, source: API, listings }, null, 2)}\n`);
  const byKind = listings.reduce((m, l) => ({ ...m, [l.kind]: (m[l.kind] ?? 0) + 1 }), {});
  console.log(`[cms] ${listings.length} published listings from ${API} ${JSON.stringify(byKind)}; ${files.size} images (${downloaded} downloaded)`);
} catch (err) {
  console.warn(`[cms] could not refresh from ${API} (${err.message}) — building with the committed src/data/cms.generated.json`);
}

// ── Properties for sale / rent ──────────────────────────────────────────────
// Separate from the listings above so one feed failing never blanks the other.
const PROPS_OUT = path.join(ROOT, 'src/data/properties.generated.json');
const PROPS_ASSETS = path.join(ROOT, 'public/assets/properties');
try {
  const feed = (await (await get(`${API}/api/v1/public/property-listings`)).json()).data;
  await fs.mkdir(PROPS_ASSETS, { recursive: true });
  let downloaded = 0;
  const listings = [];
  for (const l of feed.listings) {
    const photos = [];
    for (const ref of l.photos ?? []) {
      const m = /^listing:photos\/([A-Za-z0-9-]+\.[a-z0-9]+)$/.exec(ref);
      if (!m) continue;
      const dest = path.join(PROPS_ASSETS, m[1]);
      try { await fs.access(dest); } catch {
        try {
          const r = await get(`${API}/api/v1/public/property-photos/photos/${m[1]}`);
          await fs.writeFile(dest, Buffer.from(await r.arrayBuffer()));
          downloaded += 1;
        } catch { continue; }
      }
      photos.push(`/assets/properties/${m[1]}`);
    }
    listings.push({ ...l, photos });
  }
  await fs.writeFile(PROPS_OUT, `${JSON.stringify({ generatedAt: feed.generatedAt, source: API, listings }, null, 2)}\n`);
  console.log(`[cms] ${listings.length} properties for sale/rent; ${downloaded} photos downloaded`);
} catch (err) {
  console.warn(`[cms] could not refresh properties from ${API} (${err.message}) — building with the committed src/data/properties.generated.json`);
}
