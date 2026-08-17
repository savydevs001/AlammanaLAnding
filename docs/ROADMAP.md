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

## Phase 1 — Research: societies & blocks  `[ ]`

Gather accurate, sourced facts. Record findings inline in `src/data/societies.ts`
as you go so research is never lost.

- [ ] 1.1 Scrape **alammana.com** (client's other landing page) for Faisal Hills detail
- [ ] 1.2 **Faisal Hills** — all blocks (A, B, C, D, E, F, Executive, Prime…),
      plot sizes per block, development status, amenities, NOC/RDA status,
      developer (Faisal Town Group / Zedem, Ch. Abdul Majeed)
- [ ] 1.3 **Faisal Town Phase 1** — blocks, plot sizes, status, amenities
- [ ] 1.4 **Faisal Town Phase 2** — blocks, plot sizes, status, amenities
- [ ] 1.5 **DHA Gandhara** — sectors/blocks, plot sizes, status, approvals
- [ ] 1.6 Map data — Google Maps embed queries or lat/lng per society & block;
      links to official master-plan/layout images

> Sources used so far: j7emporium.org, faisaltownislamabad.org, faisalhills.com,
> zameen.com, skymarketing.com.pk. Prefer official/developer sources; treat
> marketing-agency sites as secondary and cross-check numbers.

---

## Phase 2 — Build the societies section  `[ ]`

New top-level section so we can rank for "faisal hills blocks", "faisal town
phase 2 payment plan", "dha gandhara plots" etc.

- [ ] 2.1 Types: `Society`, `SocietyBlock` in `src/types.ts`
- [ ] 2.2 `src/data/societies.ts` with how-to header comment
- [ ] 2.3 `/societies` listing page (`src/app/societies/page.tsx` + client)
- [ ] 2.4 `/societies/[id]` detail template: hero, at-a-glance facts, block-by-block
      breakdown, amenities, location map, master-plan image, payment/CTA
- [ ] 2.5 Optional deeper route `/societies/[id]/[block]` if block content is rich
      enough to deserve its own indexable page
- [ ] 2.6 Wire into Navbar, homepage, footer, `sitemap.ts`, internal links from
      `/payment-plans` and `/constructions`
- [ ] 2.7 Structured data: `Place`/`ResidentialComplex`, `BreadcrumbList`, `FAQPage`

---

## Phase 3 — Images  `[ ]`

- [ ] 3.1 Audit aspect ratios/heights across ProjectCard, ConstructionCard,
      society cards and all hero sections; standardise so nothing crops badly
- [ ] 3.2 Source real project imagery (official renders from Faisal Town Group /
      J7 Group — client is a sales partner and can request these)
- [ ] 3.3 Master-plan / layout images per society, self-hosted & optimised to WebP
- [ ] 3.4 Re-check every image loads (`naturalWidth > 0`) after changes

> Current placeholders: `/assets/projects/{faisal-jewel,j7-emporium,107-plaza}.webp`
> are branded backdrops, not photos. Replace when the client sends real renders.

---

## Phase 4 — SEO/AI-friendly blog programme  `[ ]`

Target: Pakistani buyers/investors searching in English. Long-form, genuinely
useful, structured for both Google rich results and AI answer engines.

- [ ] 4.1 Upgrade blog infrastructure: `Article`/`BlogPosting` + `FAQPage` schema,
      author linked to the real team member, table of contents, related posts,
      canonical URLs, `datePublished`/`dateModified`
- [ ] 4.2 Extend `BlogPost` type: `faqs`, `tags`, `updatedDate`, `authorId`

Planned articles (each 1,500+ words, H2/H3 structure, FAQ block, internal links
to `/payment-plans`, `/constructions`, `/societies`):

- [ ] 4.3 House construction cost in Faisal Hills — full per-marla breakdown
- [ ] 4.4 Gray structure vs fully finished — what each actually includes
- [ ] 4.5 Construction materials in Pakistan — brands, grades, what to insist on
- [ ] 4.6 Construction techniques & stages — foundation to finishing, timelines
- [ ] 4.7 Buying on instalments — how plans work, what to check before signing
- [ ] 4.8 Faisal Hills investment outlook — location, connectivity, price drivers
- [ ] 4.9 Faisal Hills vs Faisal Town vs DHA Gandhara — honest comparison
- [ ] 4.10 Approved map (naqsha) & society approvals — the compliance guide
- [ ] 4.11 Refresh the 3 legacy posts (thin, generic, stock imagery)

> Rules: no invented statistics; cite real sources; every price framed as
> indicative and dated. Link every article to a relevant service page.

---

## Phase 5 — Lead capture API handoff  `[x]` (doc written, integration pending)

- [x] 5.1 `docs/LEAD-CAPTURE-API.md` — how forms work today and exactly how to
      swap in a real endpoint
- [ ] 5.2 *(client)* build the API endpoint, then follow that doc

---

## Known gaps awaiting the client

- [!] Official renders for Faisal Jewel, J7 Emporium, 107 Plaza
- [!] Real photos + descriptions for the 3 homes in `src/data/constructions.ts`
      (currently template placeholders with stock imagery — biggest credibility gap)
- [!] Real photo of Muhammad Bilal Gul (currently the logo)
- [!] Confirmation that "60+ Projects Completed" is defensible
- [!] Team members' personal socials → paste into `socials` in `src/data/team.ts`
- [!] 107 Plaza real details — almost no public information exists
- [ ] Consider removing `ignoreBuildErrors` / `ignoreDuringBuilds` from
      `next.config.ts` — they hid two real bugs
