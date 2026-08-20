#!/usr/bin/env node
/**
 * Submit every URL in the sitemap to IndexNow (Bing, Yandex, Seznam, Naver).
 *
 * Bing crawls small sites slowly and unpredictably. IndexNow flips that around:
 * you push the URL list and Bing fetches on its next pass instead of waiting to
 * rediscover the site. Google does not use IndexNow — it uses Search Console.
 *
 * Run AFTER deploying, because IndexNow verifies the key file is reachable at
 * https://alammana.pk/<key>.txt before accepting the submission.
 *
 *   node scripts/indexnow.mjs
 */
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const HOST = 'alammana.pk';
const PUBLIC_DIR = new URL('../public/', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');

const keyFile = readdirSync(PUBLIC_DIR).find(f => /^[0-9a-f]{32}\.txt$/.test(f));
if (!keyFile) {
  console.error('No IndexNow key file found in public/. Expected <32-hex>.txt');
  process.exit(1);
}
const key = keyFile.replace('.txt', '');

const sitemapUrl = `https://${HOST}/sitemap.xml`;
const xml = await (await fetch(sitemapUrl)).text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);

if (!urlList.length) {
  console.error('No URLs parsed from', sitemapUrl);
  process.exit(1);
}

console.log(`Submitting ${urlList.length} URLs for ${HOST} (key ${key.slice(0, 8)}…)`);

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: HOST,
    key,
    keyLocation: `https://${HOST}/${keyFile}`,
    urlList,
  }),
});

console.log('IndexNow response:', res.status, res.statusText);
if (res.status === 200 || res.status === 202) {
  console.log('Accepted. Bing will crawl these on its next pass.');
} else {
  console.log('Body:', (await res.text()).slice(0, 500));
  console.log('\n422 usually means the key file is not reachable yet — deploy first.');
}
