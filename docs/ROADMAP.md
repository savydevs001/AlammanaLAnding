# Alammana Website — Work Roadmap

**Purpose:** durable progress tracker so work can resume in a new session.
Update the checkboxes as things land. Anything marked `[~]` is in progress.

**How to resume:** read this file top to bottom, find the first unchecked item,
continue from there. Each phase notes the files it touches.

**Status legend:** `[ ]` not started · `[~]` in progress · `[x]` done · `[!]` blocked on the client

---

## Context you need before continuing

- Static Next.js 15 App Router export (`output: 'export'`) → Cloudflare Pages.
- Live domain: **alammana.pk**. Build env must set `NEXT_PUBLIC_SITE_URL=https://alammana.pk`.
- Business: Alammana Developers — construction + real estate, Faisal Hills / Faisal
  Town, Taxila & Rawalpindi. Sells partner project inventory; builds houses on
  published block-wise rates.
- Contact: `+92 335 8078262`, `rabta@alammana.pk`. Single source: `src/lib/contact.ts`.
- Office (confirmed Aug 2026): Office No. C-3, Lower Ground Floor, Vertical Four,
  Near Arch Monument, Main Boulevard, A Block, Faisal Hills, Taxila. Use this
  wording verbatim everywhere including Google Business Profile — the earlier
  "Allah Hu Chowk" address was wrong and is fully removed.
- "60+ Projects Completed" is confirmed by the client as defensible.
- Content data lives in `src/data/*.ts` — each file has a how-to header comment.
- **Never hotlink images.** Google Maps CDN links expired and broke the live site
  in Aug 2026; two Unsplash photos were deleted. Everything is self-hosted now.
- Verify with `npx tsc --noEmit` then `npx next build`. **Stop the dev server before
  building** — a running dev server corrupts `.next` and the build fails.

---

## Phase 0 — Production readiness ✅ DONE (commit 5b33dde)

- [x] Working lead capture (WhatsApp + email) replacing three dead forms
- [x] Corrected J7 Emporium (is B-17, not Faisal Hills) and Faisal Jewel specs
- [x] Removed fake review schema, fake award, unverifiable stats, ghost staff
- [x] Added `/privacy` + `/terms` (were 404s linked site-wide)
- [x] All images self-hosted; ~9MB → ~350KB; social share card added
- [x] Fixed React hooks violation + broken project metadata/schema

---

## Phase 1 — Research: societies & blocks  `[x]` DONE

Gather accurate, sourced facts. Record findings inline in `src/data/societies.ts`
as you go so research is never lost.

- [x] 1.1 Scrape **alammana.com** (client's other landing page) for Faisal Hills detail
- [x] 1.2 **Faisal Hills** — all blocks (A, B, C, D, E, F, Executive, Prime…),
      plot sizes per block, development status, amenities, NOC/RDA status,
      developer (Faisal Town Group / Zedem, Ch. Abdul Majeed)
- [x] 1.3 **Faisal Town Phase 1** — blocks, plot sizes, status, amenities
- [x] 1.4 **Faisal Town Phase 2** — blocks, plot sizes, status, amenities
- [x] 1.5 **DHA Gandhara** — sectors/blocks, plot sizes, status, approvals
- [x] 1.6 Map data — Google Maps embed queries or lat/lng per society & block;
      links to official master-plan/layout images

> Sources used so far: j7emporium.org, faisaltownislamabad.org, faisalhills.com,
> zameen.com, skymarketing.com.pk. Prefer official/developer sources; treat
> marketing-agency sites as secondary and cross-check numbers.

---

## Phase 2 — Build the societies section  `[~]` mostly done

New top-level section so we can rank for "faisal hills blocks", "faisal town
phase 2 payment plan", "dha gandhara plots" etc.

- [x] 2.1 Types: `Society`, `SocietyBlock` in `src/types.ts`
- [x] 2.2 `src/data/societies.ts` with how-to header comment
- [x] 2.3 `/societies` listing page (`src/app/societies/page.tsx` + client)
- [x] 2.4 `/societies/[id]` detail template: hero, at-a-glance facts, block-by-block
      breakdown, amenities, location map, master-plan image, payment/CTA
- [ ] 2.5 Optional deeper route `/societies/[id]/[block]` if block content is rich
      enough to deserve its own indexable page
- [x] 2.6 Wire into Navbar, homepage, footer, `sitemap.ts`, internal links from
      `/payment-plans` and `/constructions`
- [x] 2.7 Structured data: `Place`/`ResidentialComplex`, `BreadcrumbList`, `FAQPage`

---

## Phase 3 — Images  `[~]` mostly done — J7 / 107 Plaza renders pending

- [x] 3.1 Audit aspect ratios/heights across ProjectCard, ConstructionCard,
      society cards and all hero sections; standardise so nothing crops badly
- [~] 3.2 Source real project imagery (Faisal Jewel done; J7 + 107 Plaza pending) (official renders from Faisal Town Group /
      J7 Group — client is a sales partner and can request these)
- [x] 3.3 Master-plan / layout images per society, self-hosted & optimised to WebP
- [x] 3.4 Re-check every image loads (`naturalWidth > 0`) after changes

> Current placeholders: `/assets/projects/{faisal-jewel,j7-emporium,107-plaza}.webp`
> and `/assets/societies/*.webp` are branded backdrops, not photos. Replace when
> the client sends real renders.
>
> Card ratios are standardised at 4:5 (ProjectCard, ConstructionCard, homepage
> society cards) and 16:10 on the societies listing. Branded backdrops are
> generated 1600x1200 with the logo dead-centre at 34% of the shorter side, which
> crops gracefully to every ratio in use — verified by simulating object-cover.
>
> ~12 MB of unreferenced original images were moved out of `public/` into
> `design-sources/` (not deployed). Deployed assets went 15 MB -> 1.7 MB.
> Regenerate logo derivatives from `design-sources/logo-master.png`.

---

## Phase 4 — SEO/AI-friendly blog programme  `[x]` DONE

Target: Pakistani buyers/investors searching in English. Long-form, genuinely
useful, structured for both Google rich results and AI answer engines.

- [x] 4.1 Upgrade blog infrastructure: `Article`/`BlogPosting` + `FAQPage` schema,
      author linked to the real team member, table of contents, related posts,
      canonical URLs, `datePublished`/`dateModified`
- [x] 4.2 Extend `BlogPost` type: `faqs`, `tags`, `updatedDate`, `authorId`

Planned articles (each 1,500+ words, H2/H3 structure, FAQ block, internal links
to `/payment-plans`, `/constructions`, `/societies`):

- [x] 4.3 House construction cost in Faisal Hills — full per-marla breakdown
- [x] 4.4 Gray structure vs fully finished — what each actually includes
- [x] 4.5 Construction materials in Pakistan — brands, grades, what to insist on
- [x] 4.6 Construction techniques & stages — foundation to finishing, timelines
- [x] 4.7 Buying on instalments — how plans work, what to check before signing
- [x] 4.8 Faisal Hills investment outlook — location, connectivity, price drivers
- [x] 4.9 Faisal Hills vs Faisal Town vs DHA Gandhara — honest comparison
- [x] 4.10 Approved map (naqsha) & society approvals — the compliance guide
- [x] 4.11 Replaced the 3 legacy posts (redirects added in public/_redirects) (thin, generic, stock imagery)

> Rules: no invented statistics; cite real sources; every price framed as
> indicative and dated. Link every article to a relevant service page.

---

## Phase 5 — Lead capture API handoff  `[x]` (doc written, integration pending)

- [x] 5.1 `docs/LEAD-CAPTURE-API.md` — how forms work today and exactly how to
      swap in a real endpoint
- [ ] 5.2 *(client)* build the API endpoint, then follow that doc

---

## Phase 6 — Technical SEO & AI indexing  `[~]` code done, Cloudflare setting pending

- [x] 6.1 Audited all 41 built pages: title, description, canonical, og:*, twitter,
      H1 count, JSON-LD, lang. Script kept at `/tmp/audit.py` pattern — rerun after
      content changes.
- [x] 6.2 Added `src/lib/seo.ts` (`pageMeta`, `clampDescription`, `breadcrumb`,
      `webPage`) so canonical/og:url/og:image can no longer be forgotten
- [x] 6.3 Fixed 11 pages with **no canonical**, 10 with no og:url, 8 with no og:image
- [x] 6.4 Home page was a client component and could not export metadata — split
      into `page.tsx` (server, owns metadata) + `HomeClient.tsx`
- [x] 6.5 Titles: brand appeared twice (page title + layout template), 39 pages
      over 65 chars → 6, all article headlines
- [x] 6.6 Descriptions: 30 over length → 0
- [x] 6.7 Page-level schema on every route. Construction detail pages had **none**
      — now Residence + Service + BreadcrumbList
- [x] 6.8 `public/robots.txt` rewritten to explicitly allow AI crawlers
- [x] 6.9 `/llms.txt` generated from live data via a static route handler
- [x] 6.10 IndexNow key + `npm run indexnow` to push URLs to Bing
- [ ] 6.11 **CLIENT ACTION:** disable Cloudflare's managed robots.txt / AI Crawl
      Control. It prepends `Disallow: /` for GPTBot, ClaudeBot, Google-Extended,
      CCBot, Amazonbot, Applebot-Extended, Bytespider and meta-externalagent, which
      overrides our file and is the actual reason AI systems cannot index the site.
- [ ] 6.12 *(client)* After deploy: run `npm run indexnow`, and verify the site in
      Bing Webmaster Tools + Google Search Console

---

## Content collection

**`docs/CONTENT-CHECKLIST.md`** is the shareable list for the team — every field
the site needs for partner projects and construction projects, marked required
vs optional, with photo rules and a priority order. Send that file (or the
published artifact) rather than re-deriving the list.

---

## Known gaps awaiting the client

- [~] Faisal Jewel now shows two real construction-progress photos (cropped to
      remove the developer's own sales phone number and website). They are only
      624px originals — ask Faisal Town Group for official high-resolution renders.
- [!] Official renders still needed for J7 Emporium and 107 Plaza
- [!] Real photos + true plot/street numbers for the 8 homes in
      `src/data/constructions.ts`. All eight are REPRESENTATIVE placeholders with
      realistic Block A/B plot addresses so the team can see the layout and send
      back real detail. Each entry carries a TODO(team) line listing what is
      needed. Replace site by site — they do not all have to land at once.
      Approved-map images are deliberately omitted until real scans arrive,
      because the page states the map is society-verified.
- [!] Real photo of Muhammad Bilal Gul (currently the logo)
- [!] Team members' personal socials → paste into `socials` in `src/data/team.ts`
- [!] 107 Plaza real details — almost no public information exists
- [ ] Consider removing `ignoreBuildErrors` / `ignoreDuringBuilds` from
      `next.config.ts` — they hid two real bugs
