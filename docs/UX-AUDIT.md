# UI/UX Audit — Attack Mode

Written deliberately harshly. Everything below is measured from the live build,
not impressions. Numbers in `code` are actual measurements taken at 1440×900
desktop and 375×812 mobile.

**One-line verdict:** the site now has excellent *information* and poor
*presentation*. It reads like a well-researched document, not like a company
that builds beautiful houses. For a business whose entire product is visual, it
is close to image-free.

---

## 1. The homepage fails in the first three seconds

### The hero has no picture of anything you build

The left half is a `96px` headline over `18px` body text — a **5.3:1 size ratio**,
which is why it feels shouty and unbalanced. The right half is your logo on a
maroon rectangle.

A visitor lands and sees: big words, small words, a logo. **No house. No tower.
No site. No proof you have ever built anything.** Every competitor in this market
leads with a building.

On mobile it is worse: the entire first screen — the only screen most visitors
ever see — contains **zero images**. You must scroll past a full phone-height of
text before an image appears, and the first one is the logo again.

### The headline says nothing a buyer wants

> "Faisal Hills Real Estate & Luxury Construction in Islamabad."

That is a category, not an offer. It wraps to **4 lines** on desktop. It contains
no price, no proof, no reason to keep reading. Compare with what the buyer is
actually asking: *what does it cost to build my house, and can I trust you?*

### The "Featured Project" card is unreadable

Frosted white-on-maroon with the logo bleeding through behind the text. Then
three grey circles and a "+3" badge — **placeholder avatars pretending to be
people**. A layman reads this as broken. Nobody knows what the circles mean.

### The navbar is visibly broken at desktop width

- Logo right edge: `332px`. First nav link left edge: `332px`. **A 0px gap — they
  are touching.**
- The "Consultation" button's right edge sits at `1455px` in a `1440px`
  viewport. **It is cut off.**

This is the first thing a desktop visitor sees. It looks unfinished.

---

## 2. Through the eyes of a layman / low-literacy buyer

This is the majority of the walk-in market in Taxila, and the site currently
excludes them almost completely.

### It is a wall of English text

- **49 separate pieces of text at 10px or smaller** on the homepage alone.
- The entire site is English-only. No Urdu anywhere. A buyer who speaks Urdu and
  reads it slowly cannot use this site at all.
- Key information is written in paragraphs, not shown in pictures. "Gray
  structure vs fully finished" is one of the best pieces of writing on the site
  and it is **1,500 words of English prose** — the exact customer who most needs
  that explanation cannot read it.

### Nothing tells them what things cost

The single most common question — *ghar banane ka kya rate hai?* — is answered by
a PDF behind two dropdown selections. There is no number visible anywhere on the
homepage. Not one.

### Tap targets are too small

**18 interactive elements below the 44px minimum**, including:

- `+92 335 8078262` in the footer — **`96×13px`**. The phone number. The single
  most important tap on the whole site for this audience, and it is 13 pixels tall.
- `rabta@alammana.pk` — `110×13px`
- "View Project" on the featured card — `123×20px`
- Facebook / Instagram icons — `40×40px`

### The WhatsApp button covers content

On mobile it sits on top of the stats block and the headquarters address. The one
element aimed squarely at this audience is obscuring information.

### What this user actually needs

1. A **phone number in the header**, tappable, at readable size — not buried in
   the footer at 13px
2. **Urdu**, at minimum for the rate pages and the key CTAs
3. **Pictures instead of paragraphs**: gray structure vs finished should be two
   photos side by side, not 1,500 words
4. A **visible starting price** on the homepage
5. **Voice-note friendly WhatsApp** prompt — many will not type a form

---

## 3. Through the eyes of a rich overseas Pakistani investor

This buyer is in Dubai, London or Toronto. They have money, no time, and deep
suspicion — they have been burned by Pakistani property before, or know someone
who has. They are evaluating *risk*, not aesthetics.

### There is no proof you have built anything

This is the fatal one. The `/constructions` page — your entire "we build houses"
proposition — contains **8 stock photographs and 0 photographs of your own work**.
The detail page for a specific villa contains **5 stock photos and 0 real ones**.

An overseas investor doing due diligence will reverse-image-search one photo,
find it on Unsplash, and close the tab. **This is worse than having no photos at
all.** It reads as fabrication.

Right now the only genuinely-yours imagery on the entire site is Faisal Jewel
(a partner's project, not yours) and the team headshots.

### There is no evidence anyone else trusts you

- **Zero testimonials.** Not one.
- **Zero client names.** Not one.
- No handover photos, no family standing in front of a finished house.
- No registration or licence number, no association membership.
- "60+ Projects Completed" with nothing whatsoever to back it up.

### There is nothing that solves *their specific problem*

The overseas buyer's actual fear is: *I cannot supervise the build from 4,000km
away.* The site never addresses this. There is no:

- Remote progress-reporting promise (weekly photos? video call walkthroughs?)
- Payment method that works from abroad
- Power-of-attorney or documentation guidance
- Timezone-aware contact expectation
- Currency context (everything is PKR only)

You are ideally placed to win this buyer — published fixed rates are exactly what
a remote client wants — and the site never makes the argument.

### The money page is bare

`/payment-plans` has **3 images, none of which is a house**, and 355 words. The
page where someone decides to spend crores is a dropdown and a PDF viewer. There
is no comparison table, no "what you get for this", no worked example.

---

## 4. Cross-cutting UI problems

### Content thinness on key pages

| Page | Words | Own photos | Verdict |
|---|---|---|---|
| `/contact` | 207 | 0 | Barely a page |
| `/portfolio` | 224 | 2 | Thin for a portfolio |
| `/payment-plans` | 355 | 0 | Bare for the money page |
| `/societies` | 401 | 0 | No photo of any society |
| `/constructions` | 446 | **0** | Stock photos only |
| `/societies/faisal-hills` | 1,604 | 1 | Good |

### Typography

- Homepage H1 at `96px` is oversized for its content; drops to 4 lines
- Body at `18px` against a `96px` headline is a jarring jump — nothing sits in
  between, so the page has no middle voice
- Heavy reliance on `10px` uppercase letter-spaced labels. It looks designer-ish
  and reads terribly, especially in bright sunlight on a phone
- Italic serif used for almost every heading. At this volume it stops feeling
  elegant and starts feeling like a wedding invitation

### Visual monotony

Almost every section is the same recipe: small burgundy uppercase eyebrow →
large italic serif heading → grey paragraph → grid of cards. There is no change
of rhythm across an entire page, so nothing stands out — including the things
that should.

### The maroon problem

The brand colour is doing all the work because there are no photographs. Large
flat maroon panels appear in the hero, the society cards, the project cards. It
reads as "we had no images" rather than as a design choice — which is exactly
what you said, and you were right.

---

## 5. The image problem, specifically

This is the single biggest lever and it is mostly free.

### Photos you should be taking yourselves (highest value, costs nothing)

1. **A finished Alammana house, front elevation, golden hour.** This becomes the
   homepage hero. One afternoon's work.
2. **The same house's interior** — lounge, kitchen, staircase
3. **A handover moment** — keys, family, smiles. This is the single most
   persuasive image a construction company can own.
4. **Your own site under construction** — steel fixing, a pour in progress,
   labour working. Proof of process.
5. **Your team on site** in hi-vis, not studio headshots
6. **The Vertical Four office** — exterior and interior. Overseas buyers want to
   see you have a real office.
7. **Faisal Hills itself** — the boulevard, the entrance, the Margalla backdrop,
   developed streets

### Stock imagery that is legitimately useful

For blog and finance/process illustration only — never to represent your work:

- Construction materials close-ups (cement bags, rebar, blocks)
- Blueprints and measuring tools
- Money/finance imagery for instalment articles
- Aerial/drone of hill terrain for context

**Rule: stock may illustrate a concept. Stock must never depict a project.**

---

## 6. Priority order

### Do this week — costs nothing but time

1. **Fix the navbar collision and the cut-off Consultation button**
2. **Put a real building in the hero** — even the Faisal Jewel render is better
   than a logo on maroon
3. **Phone number in the header**, tappable, ≥16px
4. **Photograph 3–4 finished houses** and replace every stock photo on
   `/constructions`
5. **Delete the fake avatar circles** on the featured card
6. **Move the WhatsApp button** so it stops covering content

### Next — structural

7. **Testimonials.** Three real client quotes with names. This is the biggest
   trust gap.
8. **A visible starting price** on the homepage
9. **Urdu** for the rate pages and primary CTAs
10. **An overseas-buyer section**: how remote supervision works, weekly photo
    updates, how to pay from abroad
11. **Rewrite the hero headline** around cost and trust, not category
12. Raise all `10px` text to `12px` minimum; fix the 18 small tap targets

### Then — polish

13. Break the visual monotony — vary section rhythm
14. Reduce italic serif headings to key moments only
15. Build out `/contact` and `/payment-plans` with real content and imagery

---

## What is genuinely good — do not break it

- The writing is excellent and honest. The NOC-status honesty and "verify it
  yourself" notes are a real differentiator in this market.
- Information architecture is sound. Societies → blocks → construction rates is
  the right funnel.
- Technical SEO is now solid.
- The Faisal Jewel page is the best on the site — because it has real photographs.
  **That is the entire lesson.**
