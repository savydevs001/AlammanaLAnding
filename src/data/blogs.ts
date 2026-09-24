import { BlogPost } from '../types';

/**
 * ─── ARTICLES ────────────────────────────────────────────────────────────────
 *
 * Each entry becomes a page at  alammana.pk/blog/<id>  and is added to the
 * sitemap automatically.
 *
 * WRITING RULES (these are what make articles rank and get quoted by AI):
 *  1. Answer the question in the first two paragraphs. `keyTakeaway` must be a
 *     standalone, factual answer a featured snippet or AI assistant can lift.
 *  2. Never invent a statistic. If a number is not verified, describe the
 *     mechanism instead of quoting a figure.
 *  3. Every price is indicative and carries the month/year it was true.
 *  4. Use ## and ### headings — they drive the on-page contents list and help
 *     search engines segment the answer.
 *  5. Add `faqs` to every article. They render as an accordion AND emit FAQPage
 *     schema — the single highest-leverage SEO element on the site.
 *  6. Link internally to /payment-plans, /societies or /constructions at least once.
 *  7. `author` must exactly match a `name` in data/team.ts so the byline photo
 *     and author schema resolve.
 *
 * NOTE: markdown tables are NOT supported (remark-gfm is not installed).
 * Use headings and lists instead.
 *
 * Images are self-hosted only — see docs/ROADMAP.md.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const blogs: BlogPost[] = [
  {
    id: 'house-construction-cost-faisal-hills',
    title: 'What Does It Actually Cost to Build a House in Faisal Hills?',
    excerpt:
      'A straight answer on construction cost in Faisal Hills — how it is really calculated, what gray structure covers, and what finishing adds.',
    keyTakeaway:
      'House construction in Faisal Hills is priced per square foot of covered area, not per marla of plot, and is split into gray structure (the complete shell) and finishing (everything that makes it liveable). Finishing typically costs as much as the gray structure or more, because it depends almost entirely on your material choices. Alammana publishes fixed block-wise rates for both, so the figure is knowable before you commit.',
    date: 'August 17, 2026',
    isoDate: '2026-08-17',
    author: 'Ashhal Ch',
    category: 'Construction Costs',
    tags: ['construction cost', 'faisal hills', 'gray structure', 'finishing'],
    image: '/assets/stock/architectural-plans.webp',
    readTime: '9 min read',
    content: `
Ask five contractors in Taxila what it costs to build a 10 marla house in Faisal Hills and you will get five confident answers, none of them written down. That is the real problem with construction pricing in Pakistan. It is not that building is unusually expensive — it is that the number stays vague until you are too committed to walk away.

This article explains how construction cost is genuinely calculated, what sits inside each figure, and where budgets quietly break.

## How construction is priced in Pakistan

Almost all residential construction here is quoted **per square foot of covered area**, not per marla of plot. This trips up first-time builders constantly.

Your plot might be 10 marla (2,722 sq ft of land), but covered area is the total floor space you actually build across all storeys. A double-storey house on a 10 marla plot typically produces somewhere around 3,000 to 3,600 sq ft of covered area, depending on how much ground you leave as lawn, car porch and setbacks.

So the calculation is:

**Covered area (sq ft) × rate per sq ft = construction cost**

If someone quotes a total without telling you the covered area they assumed and the rate they applied, you cannot verify it, compare it against anyone else's, or hold them to it later.

### Why the rate differs by block

Rates vary between blocks of Faisal Hills for practical reasons, not arbitrary ones:

- **Access and haulage.** In a developed block with carpeted roads, material trucks reach the plot directly. In a less developed block, material gets moved twice, and that labour is real money.
- **Utilities on site.** Where water and power connections exist, you are not running a generator and tankering water through the whole build.
- **Ground conditions.** Some plots need extra excavation, filling or piling. Where soil testing shows filled land, foundation cost rises, and no honest builder quotes a flat rate without checking.

This is why our [published rate lists](/payment-plans) are broken out by block — A, B, C, D and Executive — rather than presented as one number for the whole society. You can also compare [what each block offers](/societies/faisal-hills) before deciding where to buy.

## Gray structure: what you are actually buying

Gray structure is the complete structural shell. When it is finished the building is standing, weatherproof and plastered — but not liveable.

### Substructure
- Site clearance and excavation
- Foundation footings, and where required a raft or piling
- Damp proof course
- Plinth beam and backfilling

### Superstructure
- RCC columns, beams and roof slabs
- Brickwork to all internal and external walls
- Staircase structure
- Internal and external plaster

### First-fix services
- Concealed electrical conduits and junction boxes
- Underground and concealed plumbing
- Sewerage connections and manholes
- Overhead and underground water tanks

### Boundary
- Boundary wall
- Main gate structural opening

What gray structure does **not** include is everything that makes a house a home: no flooring, no paint, no doors or windows beyond frames, no kitchen, no bathroom fittings, no electrical fixtures.

Many buyers deliberately stop here. It is a legitimate strategy — you own a secure, complete structure and can finish it room by room as funds allow. Our [gray structure versus fully finished comparison](/blog/gray-structure-vs-fully-finished) goes into this properly.

## Finishing: where budgets are won or lost

Finishing is where estimates become unreliable, because finishing is almost entirely a function of your choices.

The structural cost of a 10 marla house is broadly fixed by engineering. The finishing cost is not. Two identical shells can differ enormously depending on decisions like:

- **Flooring.** Local tiles versus imported porcelain versus marble — same area, dramatically different bill.
- **Kitchen.** Functional local fittings versus imported cabinetry, engineered stone counters and branded appliances.
- **Bathrooms.** Sanitary ware spans an enormous range, and bathroom count multiplies the effect. Six bathrooms rather than four is a materially different project.
- **Woodwork.** Doors, wardrobes and cabinetry are usually the single largest finishing line item.
- **Windows.** Aluminium versus uPVC versus thermal-break, single versus double glazing.
- **Electrical fixtures.** Switches, lights and fans span a huge price range for identical function.

This is why a serious builder insists on a **specification sheet** before quoting finishing. If a contractor quotes finishing without asking which tile, which sanitary brand and how much woodwork, they are either guessing or planning to charge you more later.

## The costs people forget

These are what turn a "within budget" project into an overrun. Budget for them from day one.

**Approved map and society fees.** You cannot legally build without an approved map (naqsha). There are submission fees and usually a security deposit. See our [guide to approved maps and NOCs](/blog/approved-map-noc-guide).

**Soil testing.** Skipping it is a false economy. If the land is filled and you build a standard foundation on it, the remedy costs far more than the test.

**Site utilities during construction.** Temporary electricity or generator fuel, and water tankers where mains supply is not live.

**Boundary wall and gate.** Frequently quoted separately. Ask explicitly whether it is in or out.

**External development.** Driveway, car porch flooring, lawn levelling, exterior lighting, external staircase finish.

**Material price movement.** Steel and cement move with commodity prices and the exchange rate. Over a twelve to eighteen month build this is a real risk. Ask whether your rate is fixed for the duration — and get the answer in writing.

**Contingency.** Ten percent is sensible. Something unexpected happens on every site.

## How to compare two quotations properly

Put both quotes side by side and check they agree on these six things. If they do not, you are not comparing like with like:

1. **Covered area** — the same square footage assumption
2. **Scope** — gray structure only, or including finishing
3. **Specification** — actual brands and grades of key materials
4. **Inclusions** — boundary wall, gate, external works, water tanks
5. **Payment schedule** — tied to construction milestones, not calendar dates
6. **Escalation** — whether the rate is fixed or can move

A cheaper rate per square foot against a thinner specification is not cheaper. It is a different house.

## Why we publish our rates

We publish block-wise rate lists because the alternative — quoting each client based on what they seem able to pay — is how this industry lost its credibility.

You can [view and download the current rate lists](/payment-plans) for Blocks A, B, C, D and Executive. They are dated. If material prices move enough to change them, we republish rather than quietly revising a number mid-project.

For a figure on your specific plot, send us the plot size, block and number of storeys. We will tell you the covered area assumption and the rate we would apply, and you can hold us to both.
    `,
    faqs: [
      {
        q: 'Is construction cost calculated per marla or per square foot?',
        a: 'Per square foot of covered area, not per marla of plot. Covered area is the total floor space across all storeys. A double-storey house on a 10 marla plot in Faisal Hills typically works out to roughly 3,000 to 3,600 sq ft of covered area depending on setbacks and porch size. Any quotation that does not state the assumed covered area cannot be verified or compared against another.',
      },
      {
        q: 'Is finishing more expensive than gray structure?',
        a: 'Finishing typically costs as much as the gray structure and often more, because it is driven almost entirely by your material choices. Structural cost is broadly fixed by engineering; finishing depends on which tile, which sanitary ware, how much woodwork and which windows you select. This is why finishing must be quoted against a written specification sheet.',
      },
      {
        q: 'What is usually not included in a construction quote?',
        a: 'Commonly excluded are the approved map and society fees, soil testing, temporary utilities during construction, the boundary wall and gate, external development such as driveway and lawn, and any allowance for material price escalation. Ask explicitly about each before signing.',
      },
      {
        q: 'Why do construction rates differ between blocks of Faisal Hills?',
        a: 'Mainly site access, availability of utilities and ground conditions. A developed block with carpeted roads and live connections is cheaper to build in than one where material must be double-handled and water tankered in. Ground conditions matter too — filled land needs a stronger foundation, which is why soil testing should precede a firm quote.',
      },
      {
        q: 'Can a construction rate be fixed for the whole project?',
        a: 'It can be, and you should ask for it in writing. Steel and cement prices move with commodity markets and the exchange rate, and a build running twelve to eighteen months carries real exposure. Clarify before signing whether the rate is fixed or subject to escalation, and if it can escalate, on exactly what basis.',
      },
    ],
  },

  {
    id: 'gray-structure-vs-fully-finished',
    title: 'Gray Structure vs Fully Finished: Which Should You Actually Choose?',
    excerpt:
      'A line-by-line comparison of what gray structure and fully finished construction include, and an honest look at which one suits your situation.',
    keyTakeaway:
      'Gray structure delivers the complete building shell — foundation, columns, walls, roof slabs, plaster and concealed services — but nothing that makes it liveable. Fully finished adds flooring, paint, woodwork, kitchen, bathrooms and electrical fixtures, and hands you the keys. Gray structure suits people spreading cost over years; fully finished suits people who need to move in or rent out on a fixed date.',
    date: 'August 17, 2026',
    isoDate: '2026-08-17',
    author: 'Mohsin Ali',
    category: 'Construction Guides',
    tags: ['gray structure', 'finishing', 'turnkey', 'construction'],
    image: '/assets/stock/modern-house-1.webp',
    readTime: '8 min read',
    content: `
This is the first real decision after buying a plot, and it shapes everything: your budget, your timeline, and how much of your own time the project consumes.

Both routes are legitimate. What matters is choosing deliberately rather than by default.

## What gray structure includes

Gray structure — sometimes written grey structure — is a complete, weatherproof building with no finishes.

### Included
- Excavation and foundation
- Damp proof course and plinth beam
- RCC columns, beams and roof slabs
- Brickwork to all walls
- Staircase structure
- Internal and external plaster
- Concealed electrical conduiting
- Concealed and underground plumbing
- Sewerage lines and manholes
- Underground and overhead water tanks
- Boundary wall and gate opening

### Not included
- Flooring of any kind
- Paint and finishes
- Doors, windows and wardrobes
- Kitchen cabinetry and counters
- Bathroom fittings and sanitary ware
- Electrical wiring, switches, lights and fans
- External development beyond the boundary

At handover you have a structurally complete, secure building. You cannot live in it.

## What fully finished adds

Fully finished, or turnkey, means the house is complete and you receive keys. On top of the gray structure:

- **Flooring** throughout — tiles, marble or wood
- **Paint** — internal and external, including preparation
- **Woodwork** — doors, frames, wardrobes, kitchen cabinetry
- **Kitchen** — counters, sink, fittings, often appliances
- **Bathrooms** — complete sanitary ware, taps, showers, mirrors
- **Electrical** — full wiring, distribution board, switches, sockets, lights, fans
- **Windows** — glazed and installed with hardware
- **External finishing** — facade, driveway, car porch, lawn levelling

## The honest comparison

### Choose gray structure if…

**You want to spread cost across years.** The most common and most sensible reason. You get a secure structure now and finish it as money allows. Many families in Faisal Hills complete the ground floor to a liveable standard, move in, and finish upstairs later.

**You have strong opinions about finishes.** If you want to personally choose every tile and fitting and have time to project-manage that, gray structure gives you complete control.

**You have trusted trades of your own.** Some clients have a carpenter or electrician they have used for years.

**You are holding, not occupying.** A gray structure protects the plot, establishes construction, and defers the finishing decision until you know whether you will sell, rent or live in it.

### Choose fully finished if…

**You have a date to meet.** A wedding, a school term, a return from abroad. Turnkey gives you one accountable party and one completion date.

**You are overseas.** This is decisive. Approving tile samples over WhatsApp and resolving a carpenter dispute from another time zone is genuinely hard. Turnkey exists for this situation.

**You want to rent it out.** A rental must be complete to generate income. A half-finished house earns nothing while still costing you.

**You do not want to be a project manager.** Finishing means coordinating many trades in sequence. If you have a demanding job, that coordination cost is real even though it appears on no invoice.

## The cost question

The instinct is that gray structure is cheaper. Over the life of the project it usually is not.

Building in two phases means:

- Mobilising the site twice — scaffolding, labour, supervision
- Buying materials in smaller lots, losing volume advantage
- Exposure to material price movement between phases
- Protecting an unfinished structure through weather in the interval

None of this makes gray structure wrong. Spreading payment over years has real value if the alternative is not building at all, or borrowing. Just be clear you are buying **cash-flow flexibility**, not a lower total cost.

Our [published rate lists](/payment-plans) show both options for every block, so you can see the difference for your own block rather than relying on a rule of thumb.

## Questions to ask before you sign

1. **What covered area is this quote based on?** Everything follows from this number.
2. **Is the boundary wall included?** Frequently excluded, and not cheap.
3. **For finishing — what specification?** Brands and grades in writing, not "good quality".
4. **What is the payment schedule tied to?** It should track construction milestones.
5. **Who buys the materials?** Determines who carries price risk.
6. **What if prices rise mid-build?** Answer this before, not during.
7. **Is there a defect liability period?** How long after handover will they fix failures.

## What we do

We build both ways in Faisal Hills and Faisal Town on [published block-wise rates](/payment-plans) rather than a negotiated figure. You can see [homes we are currently building](/constructions). We are also happy to say when gray structure is the more sensible choice for someone — that conversation costs us the finishing work and is still the right advice.
    `,
    faqs: [
      {
        q: 'What exactly is gray structure in house construction?',
        a: 'Gray structure is the complete structural shell: excavation and foundation, RCC columns, beams and roof slabs, brickwork to all walls, staircase structure, internal and external plaster, concealed electrical conduiting and plumbing, sewerage, water tanks and the boundary wall. It is weatherproof and secure but has no flooring, paint, doors, kitchen, bathroom fittings or electrical fixtures, so it is not yet liveable.',
      },
      {
        q: 'Is building in two phases cheaper than building turnkey?',
        a: 'Usually not in total cost. Splitting the build means mobilising the site twice, buying materials in smaller lots, and carrying exposure to material price increases between phases. What gray structure genuinely buys is cash-flow flexibility — spreading spending across years — which can be worth more than the saving if the alternative is borrowing or not building at all.',
      },
      {
        q: 'Which option is better if I live abroad?',
        a: 'Fully finished, in almost every case. Finishing requires continuous decisions and on-site coordination — approving samples, sequencing trades, resolving disputes. Doing that from another country is where remote projects most often go wrong. Turnkey gives you one accountable party and one completion date.',
      },
      {
        q: 'Can I start with gray structure and finish later?',
        a: 'Yes, and many families in Faisal Hills do exactly that. A common approach is completing the gray structure, finishing the ground floor to a liveable standard, moving in, and completing the upper floor later. Protect the unfinished structure from weather in the interval and expect some re-mobilisation cost when work resumes.',
      },
      {
        q: 'What should a finishing quotation include?',
        a: 'A written specification naming actual brands and grades — which tile, which sanitary ware, which switches, what woodwork — not a general promise of quality. Without a specification sheet the quote cannot be compared against another, and disputes about what was promised become unresolvable.',
      },
    ],
  },

  {
    id: 'construction-materials-pakistan',
    title: 'Construction Materials in Pakistan: What to Insist On, and How to Check',
    excerpt:
      'Cement, steel, concrete, bricks and waterproofing — what actually matters in Pakistani residential construction and how to verify you got what you paid for.',
    keyTakeaway:
      'The materials that determine whether a house lasts are cement, steel and concrete quality, and all three are easy to substitute without the owner noticing. Insist on grade 60 deformed bars from a known mill, cement from a reputable manufacturer stored correctly, and site-verified concrete mix ratios with proper curing. Verify deliveries against the specification rather than trusting the invoice.',
    date: 'August 17, 2026',
    isoDate: '2026-08-17',
    author: 'Mohsin Ali',
    category: 'Construction Guides',
    tags: ['construction materials', 'cement', 'steel', 'concrete', 'quality'],
    image: '/assets/stock/modern-house-2.webp',
    readTime: '10 min read',
    content: `
Material substitution is the most common way construction quality is quietly degraded in Pakistan. It rarely looks like fraud. It looks like a slightly different brand, a slightly thinner bar, a slightly sandier mix — decisions made on a day the owner was not there, invisible once plaster goes on.

This is a practical guide to the materials that matter and how to check them.

## Cement

Cement is the binder that determines the strength of everything structural.

### What to use
Ordinary Portland Cement (OPC) is standard for structural work. Sulphate Resistant Cement (SRC) is used in foundations where soil or groundwater has high sulphate content — a soil test tells you whether you need it.

### What to check
- **Manufacture date.** Cement loses strength with age. Bags more than about three months old, especially stored in humidity, are a real problem. Check the printed date on delivery.
- **Storage.** Bags must be off the ground on a raised platform, covered, away from walls. Cement that has absorbed moisture forms lumps. Hard lumps that do not crumble under hand pressure mean that bag has lost strength.
- **Consistency.** Switching brands mid-structure is bad practice; different cements behave differently.

### The common shortcut
Reducing cement in the concrete mix. Invisible, saves money immediately, and shows up years later as cracking and reduced load capacity.

## Steel reinforcement

Steel lets concrete handle tension. Concrete is strong in compression and weak in tension; steel does the rest.

### What to use
Grade 60 deformed (ribbed) bars are the residential standard. The ribs matter — they grip the concrete. Plain round bars have far less bond strength and should not be substituted into structural work.

Buy from an established mill. Recognised manufacturers roll to consistent dimensions and publish test certificates. Unbranded re-rolled steel from scrap is common, cheaper, and unreliable in both strength and consistency.

### What to check
- **Bar diameter.** Measure it. Undersized bars sold at a nominal size are among the most common substitutions, and a vernier caliper costs very little.
- **Mill marking.** Reputable bars carry rolled-in manufacturer identification.
- **Surface condition.** Light surface rust is acceptable and even improves bond. Heavy flaking rust that pits the bar is not.
- **Cover.** Steel must sit with adequate concrete cover between it and the outside air, maintained by cover blocks. Insufficient cover is why relatively new buildings show rust stains and spalling — moisture reaches the steel, it corrodes, expands, and cracks the concrete from inside.

### The common shortcut
Fewer bars, smaller diameter than specified, or omitted stirrups in columns. All invisible after casting.

## Concrete

Concrete is cement, sand, aggregate and water. The ratio determines strength.

**Mix ratio.** Structural concrete for columns, beams and slabs is commonly specified around 1:2:4 (cement:sand:aggregate) for residential work, but your structural engineer should specify based on the design. Follow the engineer, not the general rule.

**Water content.** The most abused variable on Pakistani sites. Adding water makes concrete easier to pour and directly reduces final strength. A wetter mix is easier for labour and worse for you. Watch for water being added at the mixer to speed work along.

**Aggregate quality.** Crush should be clean, well graded and free of dust and clay. Dirty aggregate prevents proper bonding.

**Sand.** Must be free of silt and salt. Field test: put sand in a clear bottle with water, shake, let it settle. A thick silt layer on top means it needs washing.

**Curing.** Concrete gains strength through hydration, which needs water and time. Slabs should be kept wet for at least seven days, ideally longer. Curing is free, depends entirely on labour discipline, and skipping it is one of the biggest avoidable quality losses on any site. A slab dry in the sun two days after casting is a serious problem.

## Bricks and blocks

### Bricks
First-class bricks are well fired, uniform in size and colour, and ring when struck. Under-fired bricks are pale, crumble at the edges and absorb too much water.

Field test: soak a brick for 24 hours. Good brick absorbs relatively little of its own weight in water. One that soaks up a large proportion is under-fired and will transmit damp.

### Concrete blocks
Increasingly common for boundary walls and non-load-bearing partitions. Dimensionally consistent and quick to lay. Check they have been properly cured — fresh blocks used too early are weak.

## Waterproofing and damp proofing

Underrated, and the source of an enormous share of long-term problems.

- **Damp proof course** at plinth level stops ground moisture rising into walls
- **Roof waterproofing** — treat the roof as a system, not a coat applied at the end
- **Bathroom and kitchen tanking** before tiling
- **Water tank waterproofing**, underground and overhead

Retrofitting waterproofing after finishing is disproportionately expensive because it means breaking finished surfaces.

## Electrical and plumbing

**Wiring.** Cable from established manufacturers with the correct conductor size for the load. Undersized cable is a fire risk, not merely a performance issue.

**Conduits.** Concealed conduiting should let wiring be drawn and later replaced. Wiring cast directly into concrete cannot be maintained.

**Plumbing.** PPR-C piping is the current standard for water supply in Pakistani residential construction and performs well when correctly welded. UPVC is used for drainage. Insist on pressure testing before anything is concealed — finding a leak after tiling is a demolition job.

## How to actually verify

Owners who get good quality do a small number of unglamorous things consistently:

1. **Put the specification in the contract.** Brands, grades, diameters — in writing.
2. **Inspect deliveries, not invoices.** Material is substituted at the gate, not on paper.
3. **Visit at the right moments.** Steel fixing before a pour, and the pour itself, are the two visits that matter — after casting, nothing is verifiable.
4. **Photograph steel before every pour.** It is the only record that will exist.
5. **Insist on curing.** Ask specifically. Check on day three.
6. **Use an independent structural engineer** for design and key inspections, separate from the contractor.

## Our position

We build on [published rates](/payment-plans) with a written specification, because a fixed rate against a vague specification is exactly how corners get cut — the only way to protect margin on a fixed price is to reduce what goes in.

Whoever you build with, ask for the specification sheet in writing before work starts. A builder who will not put brands and grades on paper is telling you something.
    `,
    faqs: [
      {
        q: 'Which steel grade should be used for house construction in Pakistan?',
        a: 'Grade 60 deformed (ribbed) bars are the residential standard, from an established mill that publishes test certificates. The ribs are structurally important because they bond the bar to the concrete — plain round bars have far less grip and should not be substituted. Measure delivered bar diameter yourself, as undersized bars sold at a nominal size are a common substitution.',
      },
      {
        q: 'Why is curing concrete so important?',
        a: 'Concrete gains strength through hydration, a chemical reaction requiring water over time. A slab should be kept continuously wet for at least seven days after casting. Curing costs nothing but labour discipline, and skipping it is one of the largest avoidable losses of strength on a site. A slab dry in the sun two days after casting is a serious quality problem.',
      },
      {
        q: 'How can I tell if sand and aggregate are clean enough?',
        a: 'For sand, put a sample in a clear bottle with water, shake, and let it settle — a thick silt layer on top means it needs washing before use. Aggregate should be well graded and free of dust and clay coating, because contamination prevents the cement paste bonding properly to the stone.',
      },
      {
        q: 'What is the most common way construction quality is reduced without the owner noticing?',
        a: 'Adding extra water to the concrete mix and reducing cement content. Both make work faster and cheaper on the day, are invisible once the pour is finished, and directly reduce final strength. Close behind are fewer or undersized steel bars and inadequate concrete cover over the reinforcement.',
      },
      {
        q: 'When should I visit the site during construction?',
        a: 'The two visits that matter most are steel fixing immediately before a concrete pour, and the pour itself. Once concrete sets, nothing underneath can be verified. Photograph the reinforcement before every pour — it is the only record that will exist if a question arises later.',
      },
    ],
  },

  {
    id: 'construction-stages-timeline-pakistan',
    title: 'The Construction Process Stage by Stage: What Happens and How Long It Takes',
    excerpt:
      'From soil test to handover — every stage of building a house in Pakistan, what happens in each, and where delays actually come from.',
    keyTakeaway:
      'A typical double-storey house in Faisal Hills runs roughly twelve to eighteen months from ground-breaking to handover, assuming funds arrive on schedule. The sequence is soil testing and map approval, excavation and foundation, structural frame, brickwork, plaster, then finishing. Most delays come from late payments and mid-project design changes rather than construction speed.',
    date: 'August 17, 2026',
    isoDate: '2026-08-17',
    author: 'Mohsin Ali',
    category: 'Construction Guides',
    tags: ['construction stages', 'timeline', 'project management'],
    image: '/assets/stock/villa-exterior.webp',
    readTime: '9 min read',
    content: `
Most people building their first house have no mental model of what happens between paying a contractor and receiving keys. That gap is where anxiety and disputes live.

Here is the actual sequence.

## Before anything is built

### Soil testing
A geotechnical test tells your structural engineer what the ground can carry and whether the plot is natural or filled land. On filled land a standard foundation is not adequate, and discovering that after casting is ruinous. It takes a few days. Skipping it is the worst trade in residential construction.

### Architectural and structural design
Your architect produces layout and elevation; a structural engineer then designs the foundation, columns, beams and slabs to carry it. These are two different disciplines and you want both.

Allow several weeks, and resolve your design questions here. Changes are nearly free on paper and extremely expensive in concrete.

### Map approval
The society must approve your map (naqsha) before construction legally begins. Building without approval risks demolition notices, fines and problems at resale. Timelines vary — start early. Our [guide to approved maps](/blog/approved-map-noc-guide) covers the process.

## Stage 1 — Site preparation and excavation
**Roughly 1 to 2 weeks**

Site clearing, boundary marking, setting-out, then excavation to the specified depth.

Watch for: accurate setting-out. An error here propagates through the whole build and can leave you in breach of setback rules.

## Stage 2 — Foundation
**Roughly 3 to 5 weeks**

Footings, foundation concrete, steel fixing, and where required a raft. Then damp proof course and plinth beam, followed by backfilling and compaction.

Watch for: steel placement and cover before the pour, and proper compaction of backfill. Poorly compacted fill settles later and cracks floors.

## Stage 3 — Structural frame
**Roughly 3 to 5 months for a double storey**

Columns, then beams and roof slab, floor by floor. Each slab needs shuttering, steel fixing, casting and curing before the next level starts.

This stage sets the pace of the entire project and cannot be safely compressed. Concrete needs time to reach strength before it carries load, and removing shuttering early is dangerous.

Watch for: this is the stage to visit. Inspect steel before every pour and photograph it. Confirm curing is happening — the slab should be visibly wet for at least seven days.

## Stage 4 — Brickwork
**Roughly 4 to 8 weeks**

All internal and external walls. The building starts to look like a house and clients typically feel real progress for the first time.

Watch for: plumb and level, proper mortar joints, correctly formed door and window openings.

## Stage 5 — First-fix services
**Runs alongside brickwork and plaster**

Electrical conduiting chased into walls, concealed plumbing, sewerage lines.

Watch for: **pressure test the plumbing before anything is concealed.** Finding a leak after tiling means breaking finished surfaces. Confirm conduits are laid so wiring can be drawn and later replaced.

## Stage 6 — Plaster
**Roughly 4 to 6 weeks**

Internal and external plaster. At completion the gray structure is finished.

Watch for: plaster needs curing too, and needs to dry properly before paint. Painting damp plaster causes peeling within months.

**If you contracted gray structure only, this is handover.**

## Stage 7 — Finishing
**Roughly 4 to 7 months, highly variable**

The longest and least predictable stage, because it involves many trades in sequence and depends on your decisions:

- Flooring — tiles, marble or wood
- Woodwork — door frames, doors, wardrobes, kitchen cabinetry
- Windows and glazing
- Second-fix electrical — wiring, switches, sockets, fixtures
- Second-fix plumbing — sanitary ware, taps, showers
- Kitchen counters and fittings
- Paint — preparation, primer, finish coats
- External finishing and facade

Watch for: **decision latency.** Finishing stalls when the owner has not selected a tile or approved a sample. Choose early, choose in batches, be reachable.

## Stage 8 — External development and handover
**Roughly 3 to 6 weeks**

Driveway, car porch, lawn levelling, external lighting, boundary wall finishing. Then a snag list, remedial work and final handover.

Insist on a proper **snagging inspection** — walk the house room by room and list every defect. Fixing snags before final payment is far easier than after.

## Where delays actually come from

In our experience, in order:

1. **Late payments.** Construction stops when money for the next stage is not there. Material must be bought before use, and labour is paid weekly.
2. **Design changes mid-build.** Moving a wall after brickwork means demolition, rebuilding and re-running services.
3. **Slow decisions in finishing.** Every unselected material is a trade waiting.
4. **Map approval started too late.** Nothing legal begins without it.
5. **Weather.** Monsoon affects excavation, concrete and plaster.
6. **Material shortages or price spikes.** Occasionally disruptive.

Most of these sit on the owner's side. That is not a criticism — it is the useful insight. The parts of your timeline you personally control are usually larger than the parts your builder controls.

## Paying against milestones

Your payment schedule should track construction stages, not the calendar:

- On signing and mobilisation
- On completion of foundation
- On each slab cast
- On completion of brickwork
- On completion of plaster
- Staged through finishing
- Final balance on handover, after snagging

Paying by milestone means paying for work that exists. Paying ahead of construction transfers all risk to you.

Our [published rate lists](/payment-plans) set out milestone-based schedules per block, and you can see [homes we are building now](/constructions) at various stages.
    `,
    faqs: [
      {
        q: 'How long does it take to build a house in Faisal Hills?',
        a: 'A double-storey house typically takes about twelve to eighteen months from ground-breaking to handover, assuming payments arrive on schedule and design decisions are made promptly. Gray structure alone is roughly six to nine months of that; finishing accounts for the remainder and is the more variable half.',
      },
      {
        q: 'What is the correct order of construction stages?',
        a: 'Soil testing and design, map approval, site preparation and excavation, foundation, structural frame (columns, beams and slabs floor by floor), brickwork, first-fix electrical and plumbing, plaster, finishing, then external development and handover. Gray structure contracts end at plaster.',
      },
      {
        q: 'What causes most construction delays?',
        a: 'Late payments are the leading cause, because material must be purchased before use and labour is paid weekly. Design changes made after construction starts come second, followed by slow material selection during finishing. Most common delay causes sit on the owner side rather than the builder side.',
      },
      {
        q: 'When should plumbing be pressure tested?',
        a: 'Before anything is concealed — before plaster covers the walls and definitely before tiling. Discovering a leak after finished surfaces are in place turns a minor repair into demolition and re-finishing. Insist on witnessing the test or receiving documented evidence of it.',
      },
      {
        q: 'What is a snagging inspection?',
        a: 'A room-by-room walkthrough at the end of construction where you list every defect — poor paint finish, misaligned doors, tile chips, faulty fittings — before making final payment. Remedial work happens far more readily while the final balance is outstanding, so never skip it.',
      },
    ],
  },

  {
    id: 'buying-plot-on-installments-pakistan',
    title: 'Buying a Plot on Instalments: How It Works and What to Check First',
    excerpt:
      'How instalment plans are structured in Pakistani housing societies, the paperwork that actually protects you, and the warning signs worth walking away from.',
    keyTakeaway:
      'Instalment plans typically combine a down payment with quarterly or monthly instalments over three to five years, sometimes with balloon payments at intervals. Before paying anything, verify the society NOC with the development authority directly, confirm the seller can legally transfer the file, and get the full schedule and default terms in writing. Approval status is the single most important factor.',
    date: 'August 17, 2026',
    isoDate: '2026-08-17',
    author: 'Ashhal Ch',
    category: 'Buying Guides',
    tags: ['installments', 'payment plan', 'buying guide', 'noc'],
    image: '/assets/stock/aerial-housing.webp',
    readTime: '9 min read',
    content: `
Instalment buying is how most plots in Pakistan actually change hands, and it is a genuinely useful mechanism — it lets people build wealth in property without needing the full amount at once.

It is also where most people get hurt, almost always for the same handful of reasons.

## How instalment plans are structured

Most society plans share a common shape:

**Down payment.** A meaningful percentage on booking. This is your entry cost and usually the largest single payment.

**Instalments.** Monthly or quarterly over a fixed term, commonly three to five years. Quarterly is standard for many Faisal Town Group projects.

**Balloon payments.** Larger lump sums at intervals, sometimes annually, on top of regular instalments. These catch people out because they are easy to overlook when planning around the monthly figure.

**Possession or confirmation payment.** A final amount at handover or transfer.

**Development charges.** Sometimes bundled into the plan, sometimes billed separately later. Ask which, explicitly — a frequent source of unexpected cost.

### Cash discounts
Most societies offer a discount for outright payment, often meaningful. If you have the capital, compare the discount against what that money would earn elsewhere.

## The checks that matter

### 1. Verify the NOC yourself

The single most important step, and the one most often skipped.

A No Objection Certificate from the relevant development authority — the RDA for Rawalpindi district societies including Faisal Hills — means the society is legally permitted to develop and sell.

**Verify it directly with the authority.** Do not rely on a brochure, a banner or a marketing website. Authorities publish approved-society lists and will confirm status. Check the NOC covers the **specific block** you are buying in — partial approvals exist, and a society can be approved for some land and not other land.

We state approval status plainly on each of our [society pages](/societies). [Faisal Hills](/societies/faisal-hills) and [Faisal Town Phase 1](/societies/faisal-town-phase-1) are RDA approved. [Faisal Town Phase 2](/societies/faisal-town-phase-2) has its NOC **under process** as of August 2026 — a genuine difference in risk, and anyone telling you otherwise is either uninformed or not being straight with you.

### 2. Confirm what you are actually buying

An important distinction:

- A **file** or booking is a right to a plot, sometimes before a specific plot number is allotted
- An **allotted plot** has a defined number and location
- A plot with **possession** is one you can physically take control of and build on

Files are cheaper and more liquid, but you are further from a buildable asset. Know which you are buying.

### 3. Check the seller can legally transfer

For a resale file, verify at the society office that:

- The file is genuine and registered in the seller's name
- All instalments to date are paid, with no arrears
- There is no transfer restriction or lien
- Transfer fees are known and who pays them is agreed

Never take the seller's word. Go to the society office.

### 4. Get the whole schedule in writing

Before paying anything, obtain a written schedule showing every instalment and due date, all balloon payments, whether development charges are included, transfer and processing fees, late payment penalties, and **what happens if you default**.

That last point deserves attention. Some plans allow cancellation and forfeiture of a portion of what you have paid after a certain number of missed instalments. Know the terms before you need them.

### 5. Match instalments to your real cash flow

The commonest financial mistake is committing to a schedule based on best-case income. Property instalments continue regardless of what happens to your job, business or health.

Model the plan against a conservative income assumption. If it only works when everything goes right, it is too tight.

## Warning signs

**Pressure to decide today.** Genuine opportunities survive a week of due diligence. "This rate is only until tomorrow" is a sales technique.

**Reluctance to show documentation.** Any hesitation about producing the NOC, approved layout or your written schedule is disqualifying.

**Prices well below market.** There is usually a reason, and it is usually approval status, location or title.

**Cash-only, no receipts.** Every payment should be receipted by the society or an authorised dealer, in the buyer's name.

**Payment to a personal account.** Payments should go to the society's designated account, not an individual's.

**Guaranteed returns.** Nobody can guarantee property appreciation. Anyone who does is selling you something other than land.

## Instalments versus building

Worth considering: if you already own a plot, the money you would spend on instalments for a second one could instead go toward construction on the first.

A built house can be lived in or rented — it produces utility or income. A second plot produces neither until sold. Neither is automatically right, but the comparison is rarely made explicitly.

Our [published construction rates](/payment-plans) are also milestone-based, so construction spending can be phased much like an instalment plan, against a structure that grows in value as it is built.

## Before you pay anything

1. Verify the NOC directly with the development authority
2. Confirm the approval covers your specific block
3. Verify the file and the seller at the society office
4. Get the complete payment schedule in writing, including default terms
5. Confirm whether development charges are included
6. Model the schedule against conservative income
7. Ensure every payment is receipted, to the society's account, in your name

If a seller resists any of these, that is your answer.
    `,
    faqs: [
      {
        q: 'How do I verify a housing society NOC in Pakistan?',
        a: 'Contact the relevant development authority directly — the Rawalpindi Development Authority for societies in Rawalpindi district such as Faisal Hills. Authorities maintain lists of approved societies and will confirm status. Never rely on a brochure or marketing website, and always check the approval covers the specific block you are buying in, because partial approvals are common.',
      },
      {
        q: 'What is the difference between a file and an allotted plot?',
        a: 'A file is a booking giving you a right to a plot, sometimes before any specific plot number has been assigned. An allotted plot has a defined number and location. A plot with possession is one you can physically take control of and build on. Files are cheaper and easier to trade, but you are further from an asset you can actually build on.',
      },
      {
        q: 'What happens if I miss an instalment?',
        a: 'It depends entirely on the terms you signed. Many plans apply late payment surcharges, and some allow the society to cancel the booking and forfeit a portion of what you have already paid after a specified number of missed instalments. Obtain the default terms in writing before your first payment, not when you are already behind.',
      },
      {
        q: 'Is Faisal Town Phase 2 approved?',
        a: 'As of August 2026 the NOC for Faisal Town Phase 2 is under process with the Rawalpindi Development Authority, unlike Faisal Town Phase 1 and Faisal Hills which are approved. That is a real difference in risk profile. Verify the current status with the RDA yourself before committing funds.',
      },
      {
        q: 'Are cash discounts on plots worth taking?',
        a: 'Often yes, if you genuinely have the capital spare. Compare the discount against what the same money could earn elsewhere over the instalment period, and against your need for liquidity. Do not liquidate an emergency reserve to capture a discount — instalment plans exist precisely so buyers do not have to.',
      },
    ],
  },

  {
    id: 'investing-in-faisal-hills',
    title: 'Faisal Hills as an Investment: An Honest Look at What Drives Value',
    excerpt:
      'What genuinely moves property values in Faisal Hills — approvals, location, block-level development progress and supply — without the hype.',
    keyTakeaway:
      'Faisal Hills value is driven by four things: RDA-approved status, position on the G.T. Road with M-1 Motorway access, uneven development progress between blocks, and the pace at which new inventory is released. Developed blocks like Executive and Block D carry lower risk and higher entry prices; less developed blocks trade cheaper because buyers absorb development risk.',
    date: 'August 17, 2026',
    isoDate: '2026-08-17',
    author: 'Ch. Muhammad Abdullah',
    category: 'Investment',
    tags: ['investment', 'faisal hills', 'property value'],
    image: '/assets/societies/faisal-hills.webp',
    readTime: '8 min read',
    content: `
Property content in Pakistan is overwhelmingly promotional. Every society is "the best investment opportunity", every block is "expected to double". We sell in Faisal Hills, so weigh what follows accordingly — but we would rather set out the actual mechanics than add to the noise.

## What genuinely drives value here

### 1. Approval status

The largest single factor, and it is binary. An RDA-approved society and an unapproved one are different asset classes, not different price points.

[Faisal Hills holds an RDA NOC](/societies/faisal-hills). That approval is why banks, buyers and builders treat it as a normal transaction rather than a gamble, and it underpins everything else about its pricing.

When you compare Faisal Hills against a cheaper unapproved scheme nearby, you are not comparing two similar products at different prices. You are comparing an asset with legal certainty against one without it.

### 2. Location and connectivity

Faisal Hills sits on the Main G.T. Road (N-5) at Taxila with M-1 Motorway access, roughly ten minutes from Taxila Cantt, adjacent to Multi Gardens B-17, and within reach of Wah Cantt and HITEC University.

This matters because connectivity determines who will actually live there. A society is worth what people will pay to live in it, and people live where they can get to work, school and hospital. Faisal Hills serves the Taxila–Wah–Islamabad corridor with genuine road access rather than an aspirational future link.

The Margalla Hills outlook is a real amenity that cannot be replicated by a competing scheme on flat ground.

### 3. Development progress — the block-level story

This is where generic analysis fails. "Faisal Hills prices" is not a meaningful concept, because blocks are at very different stages.

- The **Executive Block** is the most developed and populated, with roads complete and commercial activity. It commands the highest prices.
- **Block D** has possession handed over, with houses actively under construction.
- **Block A** has its 225-foot main boulevard complete.
- **Blocks B and C** are still maturing.

A less developed block trades at a discount because the buyer is absorbing development risk and waiting. As infrastructure completes, that discount narrows. That narrowing is where development-stage gains come from — and it is also the risk, because timelines slip.

Our [block-by-block breakdown](/societies/faisal-hills) sets out the current status of each.

### 4. Supply

Societies release inventory over time. New blocks add supply, and supply affects price. A newly launched block usually enters below developed-block rates because it is earlier in the cycle.

The corollary is worth stating: a large society with substantial undeveloped land has more supply still to come. That is not a reason to avoid it, but it is a reason not to assume unlimited scarcity-driven appreciation.

## Three ways people invest here

### Buying a file to trade
Lowest entry cost and most liquid, but furthest from a usable asset. Returns depend on sentiment and the release cycle, and you are exposed to how easily you can find a buyer when you want out.

### Buying a plot to hold
The most common approach. You own a defined asset in an approved society. It generates no income while you hold it, and you continue to carry any outstanding instalments. Suits people with a genuine multi-year horizon and no need for the capital.

### Buying a plot and building
Converts land into something that can be lived in or rented. Requires more capital and involvement, but it is the only route producing utility or income rather than purely waiting for appreciation.

The comparison people rarely make explicitly: capital committed to a second plot produces nothing until sold, whereas the same capital spent [building on a plot you already own](/payment-plans) produces a house. Both are defensible — they are just different decisions.

## What we would tell a friend

**Check the NOC yourself.** Not the brochure. The authority.

**Buy the block, not the society.** The block determines your development risk, when you can build, and your realistic exit.

**Match the horizon to the money.** Property is illiquid. If you might need the capital in eighteen months, this is the wrong place for it.

**Be sceptical of return projections, including ours.** Nobody knows what prices do next. Anyone quoting a guaranteed percentage is selling.

**Consider whether building beats buying more land.** A built house has utility, rental potential and a broader buyer pool.

**Account for the whole cost.** Transfer fees, development charges, and the opportunity cost of capital sitting idle.

## The honest summary

Faisal Hills has real fundamentals: RDA approval, a genuine location on a national highway with motorway access, visible development progress, an established developer with completed projects behind it, and a functioning resident community rather than only plot files.

It is not a guaranteed return, and the outcome depends heavily on which block you buy, at what price, and how long you can hold.

Tell us your budget, your horizon, and whether you intend to build, and we will tell you which blocks actually fit — including when the honest answer is that now is not your moment.
    `,
    faqs: [
      {
        q: 'Is Faisal Hills a good investment?',
        a: 'It has genuine fundamentals — an RDA-approved NOC, a location on the Main G.T. Road with M-1 Motorway access, visible development progress and an established developer with completed projects. Whether it suits you depends on which block you buy, your entry price and your holding period. No one can honestly guarantee appreciation, and you should be sceptical of anyone quoting a guaranteed return.',
      },
      {
        q: 'Which Faisal Hills block is best for investment?',
        a: 'It depends on risk appetite. The Executive Block and Block D are the most developed, carry the lowest development risk and command the highest prices. Blocks B and C trade at a discount because buyers absorb development risk and wait for infrastructure. That discount narrowing as development completes is where development-stage gains come from, along with the corresponding risk that timelines slip.',
      },
      {
        q: 'Should I buy another plot or build on the one I have?',
        a: 'A second plot produces nothing until you sell it, while building converts land into an asset you can live in or rent. Building requires more capital and involvement but generates utility or income and widens the pool of buyers at resale. Neither is automatically correct — the point is to make the comparison deliberately rather than defaulting to buying more land.',
      },
      {
        q: 'Why do prices differ so much between blocks in the same society?',
        a: 'Because development status differs sharply. A block with completed roads, live utilities and handed-over possession lets you build immediately and is priced accordingly. A block still under development trades cheaper because the buyer absorbs the risk and the waiting time. Quoting a single price for a whole society is meaningless for this reason.',
      },
    ],
  },

  {
    id: 'approved-map-noc-guide',
    title: 'Approved Maps and Society NOCs: The Compliance Guide Nobody Gives You',
    excerpt:
      'Why you cannot legally build without an approved naqsha, how approval works, and what actually happens if you build without one.',
    keyTakeaway:
      'You cannot legally build in a Pakistani housing society without an approved map (naqsha) from the society. Building without approval risks demolition notices, fines, refusal of utility connections and serious difficulty at resale. The society NOC and your approved map are two different documents and you need both.',
    date: 'August 17, 2026',
    isoDate: '2026-08-17',
    author: 'Mohsin Ali',
    category: 'Buying Guides',
    tags: ['approved map', 'naqsha', 'noc', 'compliance'],
    image: '/assets/stock/villa-front.webp',
    readTime: '7 min read',
    content: `
Two different documents get confused constantly, and the confusion is expensive.

**The society NOC** is the development authority's approval of the society itself — permission for the scheme to exist, develop land and sell plots.

**Your approved map** is the society's approval of the specific building you intend to construct on your specific plot.

You need both. The society having an NOC does not mean your house is approved, and an approved map means nothing if the society itself is unapproved.

## The society NOC

Issued by the relevant development authority — the RDA for Rawalpindi district, covering Faisal Hills and Faisal Town.

An NOC means the authority has reviewed the society's land ownership, layout plan and development scheme, and permitted it to proceed.

### Verifying it
Contact the authority directly. Do not rely on marketing material. Check specifically:

- Does the NOC cover the **entire** society or only some blocks?
- Is it current, or lapsed and awaiting renewal?
- Does it cover the block your plot is in?

Partial approvals are common. A society can be legitimately approved for part of its land while marketing plots on land that is not covered.

We state this plainly on each [society page](/societies). [Faisal Hills](/societies/faisal-hills) is RDA approved. [Faisal Town Phase 2](/societies/faisal-town-phase-2) is **under process** as of August 2026.

## Your approved map (naqsha)

Before construction begins, the society must approve the building you intend to construct.

### What gets checked

**Setbacks.** Mandatory distances from plot boundaries — front, rear and sides. These maintain street width, light and ventilation, and vary by plot size.

**Covered area ratio.** The proportion of the plot you may build on. You cannot build to the boundary on all sides.

**Height and storeys.** Permitted number of floors and maximum height.

**Basement.** Whether permitted, and under what conditions.

**Elevation controls.** Some societies impose facade requirements in particular blocks.

**Structural adequacy.** Some require structural drawings signed by a registered engineer.

### The process, broadly

1. Architect prepares drawings to the society's by-laws
2. Structural engineer prepares structural drawings where required
3. Submission to the society office with fees and ownership documents
4. Review, usually with some objections to resolve
5. Revisions and resubmission
6. Approval issued, often with a security deposit
7. Construction may begin
8. Completion certificate on finishing, and refund of the deposit

Timelines vary. **Start early.** Waiting for approval with labour mobilised is expensive.

## What happens if you build without approval

This is not theoretical.

**Demolition notices.** Societies do issue them, and non-compliant structures do get demolished.

**Fines and penalties.** Regularisation, where possible, costs more than approval would have.

**Utility refusal.** Societies commonly withhold permanent electricity, gas and water connections for unapproved construction.

**Transfer problems.** The society may refuse to transfer the plot on sale. Your buyer's lawyer will find this, and it will either kill the sale or cut the price.

**Financing problems.** Banks will not lend against non-compliant construction.

**Insurance.** Claims can be refused for unapproved structures.

The pattern is consistent: building without approval saves a little time upfront and creates a defect that follows the property permanently.

## Common by-law mistakes

**Building over the setback.** Usually driven by a desire for more covered area. Visible from the street and the most commonly enforced violation.

**Exceeding covered area.** Adding a room where open space was required.

**Unapproved extra storey.** Building a third floor where two are permitted.

**Basement without permission.** Requires specific approval nearly everywhere.

**Roof structures.** Rooms added on the roof after approval frequently breach the approved plan.

## Practical advice

**Get the by-laws before you design.** Ask the society office for the current building by-laws for your block and give them to your architect at the start. Designing first and checking later means redesigning.

**Use an architect who has worked in that society.** Familiarity with a particular society's requirements and reviewers saves entire rounds of objections.

**Do not start on a verbal assurance.** "You can begin, approval will come" is worth nothing when a notice arrives.

**Build what was approved.** Approval is not a formality to clear before doing something else. Deviating recreates the whole problem.

**Keep the documents.** Approved map, approval letter, receipts, completion certificate. You will need them at sale.

## How we handle it

Every home we build is constructed strictly to the society-approved map. When a client asks us to add covered area beyond what the approval permits, we decline — not out of caution, but because the cost lands on them years later at resale, when we are long gone.

You can see [homes we are building](/constructions), and our [published rates](/payment-plans) are quoted against approved covered area, which is another reason that figure matters so much in a quotation.
    `,
    faqs: [
      {
        q: 'What is the difference between a society NOC and an approved map?',
        a: 'A society NOC is the development authority permitting the housing scheme itself to develop land and sell plots. An approved map (naqsha) is the society approving the specific building you intend to construct on your plot. You need both — an approved house in an unapproved society, or an unapproved house in an approved society, each leaves you exposed.',
      },
      {
        q: 'Can I start construction before my map is approved?',
        a: 'No. Building without an approved map risks demolition notices, fines, refusal of permanent utility connections, and refusal by the society to transfer the plot when you sell. Verbal assurances that approval will follow are worth nothing when an enforcement notice arrives. Submit early so approval is in hand before you mobilise labour.',
      },
      {
        q: 'What do societies check when approving a building map?',
        a: 'Setbacks from each boundary, the permitted covered area ratio, number of storeys and maximum height, whether a basement is allowed, any elevation or facade controls for that block, and in many cases structural drawings signed by a registered engineer.',
      },
      {
        q: 'What happens if I build more covered area than approved?',
        a: 'It is the most commonly enforced violation because it is visible from the street. Consequences range from fines and forced demolition of the excess to refusal of utility connections and, critically, refusal to transfer the plot at resale. A buyer\'s due diligence will surface it, and it will either reduce your price or end the sale.',
      },
      {
        q: 'How do I verify a society NOC?',
        a: 'Contact the relevant development authority directly — the RDA for Rawalpindi district societies such as Faisal Hills and Faisal Town. Confirm the NOC is current rather than lapsed, and check whether it covers the entire society or only certain blocks, because partial approvals are common and a society may market plots on land not covered.',
      },
    ],
  },

  {
    id: 'faisal-hills-vs-faisal-town-vs-dha-gandhara',
    title: 'Faisal Hills vs Faisal Town vs DHA Gandhara: An Honest Comparison',
    excerpt:
      'How the main options in the Taxila–Rawalpindi–Islamabad corridor compare on approval, location, development stage and who each one actually suits.',
    keyTakeaway:
      'Faisal Town Phase 1 is fully RDA approved and settled, so it costs more and offers less development upside. Faisal Hills is RDA approved and part-developed, offering block-level choice. Faisal Town Phase 2 has an excellent M-2 location but its NOC is still under process. DHA Gandhara is the largest and earliest stage, with no official payment plan announced yet.',
    date: 'August 17, 2026',
    isoDate: '2026-08-17',
    author: 'Ch. Muhammad Abdullah',
    category: 'Buying Guides',
    tags: ['comparison', 'faisal hills', 'faisal town', 'dha gandhara'],
    image: '/assets/societies/dha-gandhara.webp',
    readTime: '8 min read',
    content: `
These four options come up in almost every conversation we have. They are genuinely different products, and the right answer depends on your risk tolerance, horizon and whether you intend to build.

We sell in all of them, so weigh this accordingly — but the facts below are verifiable and we have tried not to tilt them.

## The short version

**Faisal Town Phase 1** — RDA approved, settled and populated. Suits buyers wanting certainty now.

**Faisal Hills** — RDA approved, part developed. Balance of certainty and upside.

**Faisal Town Phase 2** — NOC under process, early development. Higher risk, strong location.

**DHA Gandhara** — DHA framework, pre-launch. Earliest entry, least defined.

## Faisal Town Phase 1

**Where:** Sector F-18, Islamabad, entrance on the N-80 near Tarnol and the Fateh Jang Interchange.

**Approval:** Complete RDA NOC covering its full 4,735.9 kanals, layout plan approved, environmental clearance granted March 2014.

**Stage:** A settled society. Roads carpeted, underground electricity, occupied homes, functioning neighbourhood.

**The trade-off:** You are buying certainty. Infrastructure exists, neighbours exist, you can build immediately. In exchange you pay a price that already reflects all of that, and there is less development-driven upside left because the development already happened.

**Suits:** Buyers wanting to build and move in with minimal uncertainty, and anyone valuing an established address over speculative gain. [Full details](/societies/faisal-town-phase-1).

## Faisal Hills

**Where:** Main G.T. Road (N-5) at Taxila, roughly ten minutes from Taxila Cantt, adjacent to Multi Gardens B-17, with M-1 Motorway access.

**Approval:** RDA approved, developed by the Faisal Town Group.

**Stage:** Genuinely mixed, which is the important point. The Executive Block is the most developed and populated. Block D has possession handed over with houses under construction. Block A has its 225-foot boulevard complete. Blocks B and C are still maturing.

**The trade-off:** Approval certainty combined with real block-level choice. You can buy into a developed block and build now, or a developing block at a lower entry price and wait. Both are available inside one approved society.

**Suits:** Most people, frankly — which is why the majority of our construction work is here. [Block-by-block breakdown](/societies/faisal-hills).

## Faisal Town Phase 2

**Where:** Beside the Thalian Interchange, parallel to the M-2 Motorway with roughly 12 km of motorway frontage and about 9 km along the Rawalpindi Ring Road.

**Approval:** **NOC under process with the RDA** as of August 2026. This is the decisive difference.

**Stage:** Early. Sector O (Model Block), Overseas Enclave and General Block, with N Block launched September 2025 by Zedem International with the Faisal Town Group.

**The trade-off:** In pure location terms this may be the best-connected project the group has launched — motorway frontage on that scale is genuinely scarce. But the approval is not yet in hand. The group has a track record of securing approvals, and Phase 1 and Faisal Hills are both approved, which is meaningful context. It is still not the same as approved.

**Suits:** Buyers who understand and accept approval risk in exchange for earlier entry, and who verify the current NOC status themselves before paying. [Full details](/societies/faisal-town-phase-2).

## DHA Gandhara (Phase 9)

**Where:** M-2 corridor near the New Islamabad International Airport, adjacent to Capital Smart City.

**Approval:** Under the DHA framework, with the Army Welfare Trust and Habib Rafiq (Pvt) Ltd.

**Stage:** Earliest of the four. Approximately 32,500 kanals — the largest phase of DHA Islamabad — master-planned by Surbana Jurong of Singapore. **The official residential payment plan is still being announced.**

**The trade-off:** The DHA brand carries genuine weight in Pakistan for delivery and security standards, and the Surbana Jurong master plan is a real differentiator. But this is early-stage: figures circulating now are pre-launch or projected, not confirmed. Anyone presenting an unofficial rate as final is not being straight with you.

**Suits:** Buyers comfortable with early-stage entry who want DHA exposure and can wait. [Full details](/societies/dha-gandhara).

## How to actually choose

**If you want to build within the next year:** Faisal Town Phase 1, or the Executive Block or Block D of Faisal Hills. These have the infrastructure to support construction now.

**If you want approved-society safety with a lower entry price:** Blocks B or C of Faisal Hills.

**If location is your primary thesis and you accept approval risk:** Faisal Town Phase 2, after verifying NOC status with the RDA yourself.

**If you want DHA and can wait:** DHA Gandhara, once the official payment plan is published.

**If you already own a plot:** consider whether [building on it](/payment-plans) beats buying into another society. A built house produces utility or rental income; a second plot produces neither until sold.

## The one thing we would emphasise

Approval status is not a detail to be reassured about — it is the foundation of everything else. An approved society and an unapproved one are different asset classes.

Verify it yourself, with the authority, for the specific block. Take nobody's word for it, ours included.
    `,
  },
  {
    id: 'find-best-house-developers-islamabad',
    title: 'How to Find the Best House Developers and Construction Services in Islamabad',
    excerpt: 'A layman’s guide to picking the right construction services in Islamabad and Taxila. Learn what questions to ask to avoid hidden costs and poor materials.',
    keyTakeaway: 'The best house developers in Islamabad and Taxila provide written specifications, transparent block-wise rates, and visual progress tracking. Always ask for a written contract that specifies the exact covered area and the brands of materials to be used (like Grade 60 steel). Avoid contractors who offer prices that seem too good to be true without showing you the material list.',
    date: 'August 25, 2026',
    isoDate: '2026-08-25',
    author: 'Mohsin Ali',
    category: 'Construction Guides',
    tags: ['islamabad construction services', 'best house developers', 'faisal hills property dealers'],
    image: '/assets/stock/modern-house-1.webp',
    readTime: '6 min read',
    content: `
When searching for "Islamabad construction services" or looking for the "best house developers" in the twin cities, it is easy to get overwhelmed by loud marketing and vague promises. Building a house is the largest financial commitment most people will ever make. If you get the wrong developer, you lose time, money, and your peace of mind.

Here is a straightforward, layman's guide on how to filter out the bad contractors and find the reliable ones.

## 1. Look for Transparent Pricing

A common trap in Pakistan's construction market is the "lump sum" quote. A contractor might say, "I will build your 10-marla house for 1.5 crore." This sounds simple, but it is a trap.

The best house developers do not quote lump sums out of thin air. They quote a rate **per square foot of covered area**. Before you sign any contract, ensure that the developer has clearly outlined exactly how many square feet they are building.

If a developer refuses to provide a per-square-foot breakdown or a detailed specification sheet of the materials they will use, walk away.

## 2. Demand a Material Specification Sheet

When you hire Islamabad construction services, the difference between a house that lasts 50 years and one that cracks in 5 years is the quality of hidden materials.

You should always demand a written list that answers these questions:
- What grade of steel will be used? (It should be Grade 60 deformed bars).
- Which brand of cement?
- Are they using first-class bricks or cheaper alternatives?
- What brand of plumbing pipes will go into the walls?

Honest Faisal Hills property dealers and developers will gladly provide this list. We publish our rates and specifications transparently because we believe you deserve to know what you are paying for.

## 3. Check their Tracking and Updates System

If you are an overseas Pakistani or just someone with a busy full-time job, you cannot visit the construction site every day.

The best house developers provide regular, visual updates. At Alammana Developers, we offer a client portal and live site cameras. If a contractor gets defensive when you ask for weekly photos of the steel fixing and concrete pours, they are likely cutting corners.

## 4. Payment Schedules Must Track Milestones

Never pay huge chunks of cash based on the calendar (e.g., "Pay me 10 Lakh every month"). Your payment schedule should be strictly tied to construction milestones:
- Payment 1: Foundation completed.
- Payment 2: Ground floor slab cast.
- Payment 3: Brickwork completed.

This ensures you are only paying for work that actually exists on the ground.
    `,
    faqs: [
      {
        q: 'How do I identify the best house developers in Islamabad?',
        a: 'The best house developers provide transparent per-square-foot pricing, a written specification sheet of all materials (like steel and cement brands), and tie their payment schedules to construction milestones rather than calendar dates.'
      },
      {
        q: 'What should I look for when hiring Islamabad construction services?',
        a: 'Always look for a contractor who gives you a detailed contract. Ensure they specify the exact covered area, include the boundary wall in the quote, and provide regular visual updates or a client portal for tracking progress.'
      },
      {
        q: 'Why shouldn’t I accept a lump-sum price for building a house?',
        a: 'A lump-sum price without a square-foot breakdown allows the contractor to cut corners on the covered area and material quality. Always demand to know the exact covered area and the rate per square foot.'
      },
      {
        q: 'Do Faisal Hills property dealers also offer construction services?',
        a: 'Yes, reliable Faisal Hills property dealers like Alammana Developers often provide end-to-end services, from helping you buy a secure plot to providing complete house construction services on published block-wise rates.'
      }
    ]
  },
  {
    id: 'house-on-installments-islamabad',
    title: 'Buying a House on Installments in Islamabad: The Complete Layman’s Guide',
    excerpt: 'Want to buy a house on installments in Islamabad or Taxila? Learn how payment plans work, what a balloon payment is, and how to verify if your investment is safe.',
    keyTakeaway: 'When looking for a house on installments in Islamabad, never skip verifying the society’s NOC with the RDA or CDA. Make sure you understand the difference between a monthly installment and a balloon payment, and always get the full payment schedule in writing before handing over any money.',
    date: 'August 25, 2026',
    isoDate: '2026-08-25',
    author: 'Ashhal Ch',
    category: 'Buying Guides',
    tags: ['house on installments in islamabad', 'taxila property investment', 'faisal town real estate'],
    image: '/assets/stock/aerial-housing.webp',
    readTime: '6 min read',
    content: `
Buying a "house on installments in Islamabad" is one of the most searched phrases by middle-class families and overseas investors looking to secure a home without paying the full price upfront. 

While installments make property ownership accessible, the market is full of confusing terms. Here is a plain-English guide to navigating installment plans safely in Islamabad, Rawalpindi, and Taxila.

## How Installment Plans Actually Work

When you buy a house or plot on installments, the payment is usually broken down into four parts:

1. **The Down Payment (Booking Amount):** This is the upfront cash you pay to secure the property. It is usually between 10% to 25% of the total price.
2. **Regular Installments:** These are the predictable amounts you pay every month or every quarter (every 3 months). 
3. **Balloon Payments:** This is where many buyers get trapped. A balloon payment is a large lump sum demanded once a year or every six months. Always check if your plan has balloon payments—if you don't budget for them, you might default.
4. **Possession Amount:** The final lump sum you pay when the developer hands over the keys to the house or the physical plot.

## Rule #1: Check the NOC (No Objection Certificate)

Whether you are looking for Faisal Town real estate or Taxila property investment, the very first question you must ask is: **"Is this society approved by the RDA or CDA?"**

An NOC means the government has legally permitted the society to develop and sell land. If a dealer tells you "the NOC is coming soon," that means it is illegal to build there right now. Your investment is only safe in approved societies like Faisal Hills or Faisal Town Phase 1.

## Rule #2: File vs. Allotted Plot vs. Constructed House

Be very clear about what you are paying installments for:
- **A File:** You are buying a piece of paper that promises you a plot in the future. You do not have a plot number yet.
- **An Allotted Plot:** You have a specific plot number on a map, but you cannot build on it yet.
- **A Constructed House:** You are paying installments for a physical house being built for you.

Files are cheaper but carry more risk. If you want to live in the house soon, look for installment plans on physical, allotted properties.

## Rule #3: Get It All in Writing

Never trust a verbal promise from any dealer. Ensure your written contract states:
- The exact timeline of all installments.
- What happens if you are late on a payment (are there fines?).
- Whether "Development Charges" are included in the price or will be billed as a surprise later.

Finding a house on installments in Islamabad is a great way to secure your future, as long as you do your basic homework and work with authorized, transparent dealers.
    `,
    faqs: [
      {
        q: 'How does buying a house on installments in Islamabad work?',
        a: 'You typically pay a 10% to 25% down payment upfront, followed by monthly or quarterly installments over 3 to 5 years. A final possession amount is paid when you receive the keys.'
      },
      {
        q: 'What is a balloon payment in real estate?',
        a: 'A balloon payment is a large lump sum required at specific intervals (like once a year) in addition to your regular monthly installments. Always check your payment plan for hidden balloon payments.'
      },
      {
        q: 'Is Taxila property investment safe for overseas Pakistanis?',
        a: 'Yes, Taxila property investment is very safe if you invest in RDA-approved societies like Faisal Hills. Always verify the NOC with the Rawalpindi Development Authority before buying.'
      },
      {
        q: 'Do installment plans include development charges?',
        a: 'Not always. Some societies bundle development charges into the installment plan, while others ask for them separately at the end. You must explicitly ask your dealer and get it in writing.'
      }
    ]
  },
  {
    id: 'faisal-hills-property-dealers-guide',
    title: 'Faisal Hills Property Dealers: How to Buy Safely in Taxila and Rawalpindi',
    excerpt: 'Looking for reliable Faisal Hills property dealers or real estate agents in Taxila? Learn how to verify authorized partners and avoid common real estate scams.',
    keyTakeaway: 'The safest way to buy property in Faisal Hills or Faisal Town is through an Authorized Sales Partner. Authorized dealers have direct access to the society’s official inventory and transfer processes, protecting you from fake files and hidden fees. Always verify the agent’s authorization status with the society’s head office.',
    date: 'August 25, 2026',
    isoDate: '2026-08-25',
    author: 'Ashhal Ch',
    category: 'Buying Guides',
    tags: ['faisal hills property dealers', 'real estate agents in taxila', 'faisal town real estate'],
    image: '/assets/stock/handshake.webp',
    readTime: '5 min read',
    content: `
If you are looking to buy a plot or a commercial shop in the twin cities, you will quickly realize there is a property dealer on every corner. But when dealing with high-value investments like Faisal Town real estate, who can you actually trust?

Whether you are an overseas Pakistani or a local resident, here is how to find reliable Faisal Hills property dealers and real estate agents in Taxila.

## Authorized Sales Partners vs. Unregistered Brokers

The biggest mistake buyers make is handing over cash or demand drafts to unregistered street brokers. 

Major societies like Faisal Hills appoint **Authorized Sales Partners**. These are registered companies (like Alammana Developers) that have a direct, legal relationship with the society’s management.

**Why does this matter?**
1. **Genuine Inventory:** Authorized partners sell real, verifiable files and plots directly linked to the society's database.
2. **Safe Transfers:** They handle the complex transfer paperwork properly, ensuring the plot is legally registered in your name without any hidden liens or unpaid dues.
3. **No Fake "Open Files":** Unregistered brokers often sell "open files" that have been cancelled or are entirely fake.

## Questions to Ask Your Real Estate Agent in Taxila

Before doing business with any property dealer, ask them these three questions:

1. **"Are you an authorized partner for this society?"** (And ask to see proof, or verify it with the society’s head office).
2. **"Are all previous dues and installments clear on this resale file?"**
3. **"What is your exact commission, and who pays the transfer fees?"**

A professional Faisal Hills property dealer will give you clear, written answers to all three.

## Avoid the "Guaranteed Profit" Trap

If a real estate agent tells you, "Buy this file today, I guarantee it will double in price in three months," walk out the door. 

Real estate appreciates based on development, infrastructure, and market demand—not magic. Reliable Faisal Town real estate experts will give you realistic projections based on the society's development pace (like road completion, underground electricity, or commercial block launches), not fake guarantees.

## The Bottom Line

Your property investment is only as secure as the people handling the paperwork. Always choose authorized, transparent dealers who prioritize safe transfers and honest advice over a quick commission.
    `,
    faqs: [
      {
        q: 'How do I find reliable Faisal Hills property dealers?',
        a: 'Look for companies designated as Authorized Sales Partners by the society. Authorized dealers have a direct relationship with the developers, ensuring that your files are genuine and the transfer process is legally secure.'
      },
      {
        q: 'Why should I use real estate agents in Taxila instead of buying directly?',
        a: 'Good real estate agents in Taxila navigate the complex transfer paperwork, verify that resale files have no unpaid dues or hidden liens, and negotiate fair market prices on your behalf.'
      },
      {
        q: 'What is an open file in Faisal Town real estate?',
        a: 'An open file is a booking file that has not yet been registered in a specific person’s name. While they are easier to trade, they carry higher risks of fraud if you do not buy them through an authorized dealer.'
      },
      {
        q: 'How much commission do property dealers charge in Islamabad?',
        a: 'Commission rates typically range from 1% to 2% of the total property value, but this can vary. A transparent dealer will state their commission upfront before any transaction takes place.'
      }
    ]
  },

  {
    id: 'real-estate-boom-faisal-hills-faisal-town-b17-ranked',
    title: 'The Next Real Estate Boom in Islamabad–Rawalpindi: Faisal Hills, Faisal Town, Phase 2 and B-17 Ranked',
    excerpt:
      'Money in the Islamabad–Rawalpindi corridor is quietly shifting away from oversold, overpriced or controversial schemes toward RDA-approved societies with real development to show for it. Here is how Faisal Hills, Faisal Town Phase 1, Faisal Town Phase 2 and Multi Gardens B-17 actually rank, and why.',
    keyTakeaway:
      'As buyers grow wary of societies that promised infrastructure they never delivered, demand is concentrating in the RDA/CDA-approved societies of the Taxila–Rawalpindi–Islamabad corridor that can show visible development on the ground. Ranked on approval certainty, delivered infrastructure and entry price, Faisal Hills comes out on top, followed by Faisal Town Phase 1, then Faisal Town Phase 2, then Multi Gardens B-17 — all four safer, more affordable entry points than an already-matured scheme like Gulberg or a society that has faced public regulatory disputes like Blue World City.',
    date: 'September 23, 2026',
    isoDate: '2026-09-23',
    author: 'Ch. Muhammad Abdullah',
    category: 'Investment',
    tags: ['real estate boom', 'faisal hills', 'faisal town', 'b-17', 'property investment'],
    image: '/assets/societies/faisal-hills-master-plan.webp',
    readTime: '10 min read',
    content: `
Every property cycle in the twin cities produces the same pattern: a wave of schemes launch on the promise of a boulevard, a university, an interchange — and years later, buyers are still waiting for possession while the marketing brochure gathers dust. That pattern is exactly why the current wave of interest is going somewhere different.

Buyers who have been burned once are now asking a narrower, better question before they sign anything: **not "which society has the best brochure", but "which society has actually delivered what it promised, and is legally allowed to deliver the rest."** That question is what is quietly redirecting demand toward a specific group of societies in the Taxila–Rawalpindi–Islamabad corridor — and away from options that are either already fully priced in or still carrying unresolved regulatory questions.

This article ranks the four options we get asked about constantly — Faisal Hills, Faisal Town Phase 1, Faisal Town Phase 2 and Multi Gardens B-17 — against the two names that come up just as often for the opposite reason: Gulberg and Blue World City. We sell in three of the four ranked societies, so weigh that accordingly. But the underlying facts — approval status, what has actually been built, and where each project sits on price — are independently verifiable, and we have linked our sources rather than asked you to take our word for it.

## Why demand is shifting right now

Three things are pushing buyers toward delivery-proven, approved societies rather than the newest, loudest launch.

**A track record of undelivered promises is now public knowledge.** Buyers increasingly research a scheme before booking a file, not after. A society that sold plots against boulevards, universities or interchanges that still do not exist years later is a matter of public record, not rumour — and that record now travels faster than any sales pitch.

**Approval status has stopped being a technicality.** An NOC used to be treated as paperwork a dealer would "sort out later." Buyers now understand that a society without a clean, current NOC cannot legally transfer your plot, cannot get you a bank loan against it, and cannot promise the utility connections a home actually needs.

**Fully developed societies have already had their growth.** A society where the roads are carpeted, the blocks are populated and the boulevard is finished has already converted development risk into price. That is a genuinely safer asset — but it is also one where most of the upside has already happened, which pushes value-conscious buyers toward societies still partway through that curve.

## How we ranked these four

We ranked on three factors, in this order, because this is the order that actually protects your money:

1. **Approval status** — whether the relevant development authority has issued a clean NOC covering the block you would actually buy in.
2. **Delivered infrastructure** — roads, utilities, possession and population that exist today, not on a master plan.
3. **Entry price relative to that development stage** — whether you are still early enough in the curve to benefit from it, or paying a price that has already absorbed all the upside.

## 1. Faisal Hills — the top ranked option

[Faisal Hills](/societies/faisal-hills) is [RDA approved](https://faisalhills.com/master-plan/) on the Main G.T. Road at Taxila, with M-1 Motorway access and the Margalla Hills as a backdrop. What separates it from a purely speculative launch is that it is no longer only a plot-file market — the Executive Block and Block A have completed boulevards and working commercial activity, and Block D has possession handed over with houses actively under construction right now.

What makes Faisal Hills rank first is a combination almost nothing else in this corridor offers: clean approval, genuinely varied development stages across its own blocks, and entry prices in the less-developed blocks (B, C and the newer Prime Block) that have not yet caught up to what the developed blocks already command. You can choose your own risk level inside one approved society — build in Block D this year, or buy into Block C at a lower price and wait for the same development curve to play out there.

**Why it ranks above the rest:** it is the only one of the four combining full approval with an active, visible construction boom happening on the ground today, not a promise of one. Our [block-by-block breakdown](/societies/faisal-hills) sets out exactly where each block stands.

## 2. Faisal Town Phase 1 — the settled, lower-risk choice

[Faisal Town Phase 1](/societies/faisal-town-phase-1) in Sector F-18, Islamabad, holds a complete RDA NOC over its full land area, with environmental clearance in place since 2014. It is a mature, populated society — carpeted roads, underground electricity, occupied homes.

That maturity is exactly why it ranks second rather than first. There is essentially no delivery risk left to price in, which is genuinely valuable, but it also means the entry price already reflects a fully built-out neighbourhood. You are buying certainty, not upside. For a buyer who wants to build and move in within the next year with minimal uncertainty, this is arguably the safest of the four — it simply is not where the next price movement is likely to come from.

## 3. Faisal Town Phase 2 — the highest-upside, highest-patience option

[Faisal Town Phase 2](/societies/faisal-town-phase-2) sits beside the Thalian Interchange with roughly 12 km of M-2 Motorway frontage — arguably the single best location the Faisal Town Group has launched into. It ranks third, not because the location is weak, but because of one fact we will not soften: **its NOC is still under process with the RDA**, unlike Faisal Hills and Faisal Town Phase 1, which are both approved. That is a genuine, material difference in risk, and it is why Phase 2 trades at a lower entry price than the two approved projects above it.

The Faisal Town Group has a track record of eventually securing approvals on its other launches, which is meaningful context — but it is not the same thing as an approval already in hand. If you buy here, you are deliberately accepting approval risk in exchange for the lowest entry price and the strongest motorway location on this list, and you should verify the current NOC status with the RDA yourself before paying anything.

## 4. Multi Gardens B-17 — approved, but not where the growth is anymore

Multi Gardens B-17 sits directly adjacent to [Faisal Hills](/societies/faisal-hills) and holds its own NOC — CDA approved since 2008, with parts of the society also under RDA jurisdiction. It is a real, legally sound society with genuine infrastructure and a functioning resident population, which is why it still ranks ahead of an unapproved or disputed scheme.

It ranks fourth on this list for a simple reason: B-17 is a substantially older, more developed launch than Faisal Hills, Faisal Town Phase 1 or Phase 2. Much of its development curve has already played out, which means much of its price appreciation has too. It remains a legitimate, safe option for someone who specifically wants that established address — it is simply not the corridor's growth story anymore, and it typically carries a higher entry price than the equivalent development stage in Faisal Hills next door.

## Why we are not ranking Gulberg or Blue World City above these four

Both come up constantly in these conversations, and both deserve an honest word rather than silence.

**Gulberg (Greens and Residencia)** is a genuine, developed society in its own right, with approved status and real infrastructure. It is not on this list because it is not the affordable, early-stage opportunity buyers are usually asking us about when they compare it to Faisal Hills or Faisal Town. Its blocks with completed roads and utilities are priced accordingly, and like Faisal Town Phase 1, most of the development-driven price movement there has already happened. If your goal is a lower entry price with genuine growth still ahead of it, Gulberg's developed sections are competing with Faisal Town Phase 1 for the "settled and safe" slot, not with Faisal Hills for the "still moving" slot — and its entry cost typically reflects that maturity.

**Blue World City** is a different situation. Public RDA notices on record classify large parts of the project as unapproved extensions, and only a portion of its land footprint — not the whole society — currently carries clean regulatory cover; the remainder has, at various points, been the subject of RDA notices and legal disputes over its status, with parts of the project's legal portfolio subsequently moved toward a separate provincial authority (PHATA). None of that means every file sold there is worthless. It does mean that verifying exactly which block, which land parcel and which specific approval covers your plot is not optional — it is the entire transaction. That is a materially higher burden of due diligence than an already fully RDA-approved society like Faisal Hills asks of you, which is why it does not belong on a list of the corridor's safer, more affordable entry points.

## The pattern across all six

Line them up and the pattern is consistent, not coincidental:

- **Fully approved and fully developed** (Gulberg's mature sections, Faisal Town Phase 1): safest, least upside, highest entry price for that safety.
- **Fully approved, partly developed** (Faisal Hills): the sweet spot — genuine approval certainty with real development still ahead in several blocks.
- **Approval in process, strong location** (Faisal Town Phase 2): real upside, real risk, and a price that reflects both.
- **Approved but already matured** (Multi Gardens B-17): legitimate and safe, but past the point where the corridor's growth is concentrated.
- **Contested or partial approval** (Blue World City): the burden of verification is on you, block by block, before any of the rest of this analysis even applies.

Wherever you land on this list, the work does not change: verify the NOC yourself, directly with the RDA or CDA, for the specific block and plot you are buying — not the society as a whole, and not from a brochure.

## What we would actually tell a friend

**Want to build now and want the most room left for the block to grow into its own price?** Faisal Hills, in one of Block B, Block C or the Prime Block. This is where most of our own construction work is happening, for the same reason.

**Want zero delivery risk and can pay for it?** Faisal Town Phase 1.

**Want the strongest location on this list and can tolerate approval risk while you wait it out?** Faisal Town Phase 2 — after you personally confirm the NOC status with the RDA.

**Specifically want the established B-17 address next door to Faisal Hills?** It remains a sound, approved choice — just go in understanding you are buying settled inventory, not early-stage upside.

**Considering Gulberg or Blue World City instead?** Ask exactly the same three questions we would ask about any of the four above: is this specific block approved, by whom, and what has actually been built here versus what is still a plan. For Blue World City in particular, get that answer from the RDA directly before you pay anything, not from the person selling you the file.

None of this is a guarantee about future prices — nobody can honestly give you one, and you should be sceptical of anyone who does. It is a description of where risk and opportunity currently sit across six real options, so you can put your money against the one that actually matches your own patience and appetite for risk.

Tell us your budget, your timeline and whether you intend to build or hold, and we will tell you honestly which of these fits — including when the right answer is a block we do not sell in.

Sources: [Faisal Hills master plan](https://faisalhills.com/master-plan/) · [Multi Gardens B-17 NOC status](https://en.wikipedia.org/wiki/B-17,_Islamabad) · [RDA legal status notices on Blue World City](https://manahilestate.com/rda-has-revised-the-legal-status-of-blue-world-city-islamabad/)
    `,
    faqs: [
      {
        q: 'Which society is the best investment right now: Faisal Hills, Faisal Town, Faisal Town Phase 2 or B-17?',
        a: 'Ranked on approval certainty, delivered infrastructure and remaining upside, Faisal Hills ranks first — it is fully RDA approved and still has several blocks with real development ahead of them. Faisal Town Phase 1 ranks second as the safest but most fully priced option. Faisal Town Phase 2 ranks third, offering the strongest location but carrying real approval risk since its NOC is still under process. Multi Gardens B-17 ranks fourth: approved and legitimate, but a more mature launch with less of its growth curve still ahead.',
      },
      {
        q: 'Is it true that some housing societies near Islamabad failed to deliver on their promises?',
        a: 'Yes, and it is publicly documented rather than a rumour. Several schemes across Pakistan have sold plots against infrastructure — boulevards, interchanges, university campuses — that remained undelivered years after launch. This is exactly why approval status and visible, on-the-ground development have become the two most important things to verify before buying, rather than relying on a master-plan render.',
      },
      {
        q: 'Is Blue World City legally approved?',
        a: 'Its status is mixed and worth verifying directly rather than taking anyone\'s word for it. Public RDA notices on record have classified parts of the project as unapproved extensions, and only a portion of its land currently carries clean regulatory cover, with disputes over its status at various points leading part of its legal portfolio to move toward a separate provincial authority. Confirm the specific block and plot you are considering directly with the RDA before paying anything.',
      },
      {
        q: 'Why is Gulberg more expensive than Faisal Hills or Faisal Town Phase 2?',
        a: 'Gulberg\'s developed sections are a mature, largely built-out society, similar in that respect to Faisal Town Phase 1. Most of the development-driven price appreciation there has already happened, so the entry price reflects a low-risk, low-upside asset. Faisal Hills and Faisal Town Phase 2 still have blocks earlier in their development curve, which is why their entry prices sit lower for buyers willing to accept more development risk in exchange.',
      },
      {
        q: 'Is Multi Gardens B-17 a safe place to buy property?',
        a: 'Yes — it holds a CDA-issued NOC with parts of the society also under RDA jurisdiction, and it has genuine infrastructure and a resident population. It is a legitimate, approved society. It ranks behind Faisal Hills, Faisal Town Phase 1 and Faisal Town Phase 2 on this list specifically because it is a more mature, already-developed launch, so a larger share of its price growth has already happened compared with societies still mid-development.',
      },
    ],
  },
  {
    id: 'real-estate-islamabad-buyers-guide',
    title: 'Real Estate in Islamabad: The Complete Buyer’s Guide for 2026',
    excerpt:
      'How the Islamabad–Rawalpindi property market actually works — CDA sectors versus private societies, plots versus houses versus apartments, what to verify, what it costs to transfer, and how to decide where to buy.',
    keyTakeaway:
      'Buying property in Islamabad safely comes down to three checks and one decision. The checks: the society or sector is approved by the relevant authority (CDA in Islamabad, RDA in Rawalpindi district), the specific plot or file is genuine and transferable, and the seller is the recorded owner. The decision is what you are buying for — living, rent or capital growth — because that alone decides whether a CDA sector, a developed private society or a newer society is the better fit.',
    date: 'September 24, 2026',
    isoDate: '2026-09-24',
    author: 'Haseeb Bhatti',
    category: 'Buying Guides',
    tags: ['real estate islamabad', 'property in islamabad', 'islamabad housing societies', 'buy plot islamabad', 'rawalpindi property'],
    image: '/assets/stock/aerial-housing.webp',
    readTime: '14 min read',
    content: `
Islamabad’s property market looks simple from the outside — a capital city, planned sectors, steady demand. From the inside it is a patchwork: government-planned sectors run by the Capital Development Authority, dozens of private housing societies across Islamabad and the Rawalpindi district, and a large trade in plot *files* that are not yet plots at all.

This guide explains how the market is organised, what each kind of property is good for, what you must verify before paying anything, and what a purchase costs beyond the price. It is written for first-time buyers and for overseas Pakistanis buying from abroad.

## How the Islamabad property market is organised

### CDA sectors

Islamabad’s original master plan divides the city into lettered sectors (E, F, G, H, I and beyond), developed and regulated by the **Capital Development Authority (CDA)**. Sector properties generally come with the most settled title and infrastructure, and command the highest prices per marla. Supply in established sectors is limited, so most buyers meet them only through resale.

### Private housing societies

Most new supply comes from **private housing societies** — in Islamabad’s zones and along the corridors into Rawalpindi district, including the GT Road and Motorway belt towards Taxila where Faisal Hills sits. Societies are approved by the relevant authority: CDA inside the capital territory and the **Rawalpindi Development Authority (RDA)** for much of the Rawalpindi district. Approval status is the single most important fact about any society, and it can be checked.

### Plots, files, houses and apartments

- **A plot** has a specific plot number on a demarcated, developed block. You can build on it once possession is given and your map is approved.
- **A file** is a booking right in a society that has not yet assigned a specific plot, or has not developed that block. Files are cheaper and trade actively, but carry more risk: the plot you eventually receive, and when, depends on the society.
- **A house** is a built property — ready to live in or rent out, but you inherit whatever was built into the walls.
- **An apartment or commercial unit** is usually bought in a vertical project, often on an instalment plan during construction.

## Decide what you are buying for

Everything else follows from this.

**To live in soon.** Prioritise possession, completed infrastructure (roads, water, electricity, gas), schools and hospitals within reach, and commute time. A developed block in an approved society, or an established sector, matters more than a bargain file.

**For rent.** Rent follows demand from families and professionals, which follows jobs, schools and connectivity. Houses and apartments in developed areas let more easily than those in newer blocks. Use the [Rental Yield calculator](/tools/rent-yield) to compare the net yield after vacancy and upkeep with what the money would earn elsewhere.

**For capital growth.** Growth tends to come in steps as a society moves through approval, development, possession and new road links. Newer, approved societies with visible development offer more room to grow — and more risk. Our [ranking of growth areas](/blog/real-estate-boom-faisal-hills-faisal-town-b17-ranked) explains the drivers, and the [Investment ROI calculator](/tools/investment) shows what growth above or below inflation means for your real wealth.

## The checks you must do before paying anything

### 1. Is the society or sector approved?

Ask for the society’s approval letter and check it against the authority’s own published list. CDA and RDA both publish lists of approved and illegal schemes. A society that is “under process” can still be a sensible purchase, but you are taking on the risk that approval is delayed or conditioned, and the price should reflect that. Our [approved maps and NOC guide](/blog/approved-map-noc-guide) explains what the different approvals mean.

### 2. Is this plot or file genuine?

Verify the plot or file number directly with the society office, not only through the seller or dealer. Confirm that it is not already sold, mortgaged or under dispute, that the size on paper matches the size on the ground, and that all dues are clear.

### 3. Is the seller the recorded owner?

The name on the society’s record (or the land record for non-society land) must match the seller’s CNIC. If someone is selling on another person’s behalf, ask for a registered power of attorney and verify it.

### 4. Is the dealer accountable?

Most transactions pass through a dealer. Work with one whose office you can visit, who is registered with the society where that applies, and who gives receipts. Our guide to [buying safely through property dealers](/blog/faisal-hills-property-dealers-guide) lists the warning signs.

## What a purchase really costs

The price is not the total. Budget for:

- **FBR advance tax on purchase (section 236K)** — depends on value and whether you are on the Active Taxpayers List.
- **Provincial stamp duty and, where applicable, capital value tax.**
- **The society’s transfer fee.**
- **Dealer commission**, agreed in writing before you start.
- **If you are building later:** map approval, boundary wall, and utility connections.

The [Transfer Taxes & Fees calculator](/tools/transfer-costs) lays these out with editable rates — always confirm the current percentages, because federal withholding rates change with each budget.

## Paying for it

### Cash

Simplest and usually the best negotiating position. Pay through banking channels so every payment is traceable, and against receipts.

### Developer instalment plans

Many societies and developers sell on instalments: a down payment, monthly or quarterly instalments, and sometimes an amount on possession. Compare the instalment price with the cash price — the difference is what the credit is costing you. The [Instalment Plan calculator](/tools/installments) shows the schedule, and our guide to [buying a house on instalments in Islamabad](/blog/house-on-installments-islamabad) covers the fine print.

### Bank and government housing finance

Banks and government schemes offer mortgages on eligible properties with clear title. Compare options by total cost, not just monthly EMI — the [Home Finance Decision Engine](/tools/home-finance) does this, and the [Affordability calculator](/tools/affordability) tells you what price range to look in.

## Buying a plot versus buying a house

**A plot** costs less up front, carries fewer maintenance costs, and lets you build exactly what you want — but earns nothing until you build, and building takes around a year and needs supervision.

**A house** can be lived in or rented immediately, but you cannot see the steel, cement and wiring inside the walls, and older houses need repairs.

The [Buy vs Build calculator](/tools/buy-vs-build) compares the two with your own numbers, including the rent you pay while building. If you build, the [Construction Cost calculator](/tools/construction-cost) and our article on [what it costs to build in Faisal Hills](/blog/house-construction-cost-faisal-hills) explain per-square-foot pricing.

## Buying from abroad

Overseas Pakistanis can buy through a trusted representative holding a registered power of attorney, pay through banking channels, and verify documents with the society directly. Insist on written receipts and copies of every document, and prefer societies and builders who give you visibility of your property. Our [overseas buyers page](/overseas) explains how we handle this, including live site cameras for clients who build with us.

## A simple decision checklist

1. Write down what you are buying for: living, rent or growth.
2. Set your budget including taxes and fees, not just the price.
3. Shortlist approved societies or sectors that fit the purpose.
4. Verify the specific plot or file and the seller with the society office.
5. Agree price, commission and the payment schedule in writing.
6. Pay through banks, against receipts, and complete the transfer at the society office.

## Where Alammana fits

We build houses in Faisal Hills on published block-wise rates, and we sell plots and inventory in partner projects as an authorised sales partner. If you want to compare societies, our [housing society guides](/societies) set out approval status, blocks and plot sizes, and our [construction rates](/payment-plans) show what building costs before you commit.
`,
    faqs: [
      { q: 'Is it safe to buy property in Islamabad?', a: 'Yes, if you verify three things: the society or sector is approved by the relevant authority (CDA or RDA), the specific plot or file is genuine and free of disputes according to the society office, and the seller is the recorded owner. Pay through banks, against receipts.' },
      { q: 'What is the difference between a plot and a file?', a: 'A plot has a specific number on a demarcated, developed block. A file is a booking right that has not yet been converted into a specific developed plot. Files are cheaper but carry more risk about which plot you get and when.' },
      { q: 'How do I check if a housing society is approved?', a: 'Ask for the approval letter and check it against the list published by the relevant authority — CDA for the Islamabad Capital Territory and RDA for much of Rawalpindi district.' },
      { q: 'What taxes do I pay when buying property in Islamabad?', a: 'Typically FBR advance tax under section 236K, provincial stamp duty and, where applicable, capital value tax, plus the society’s transfer fee. Rates depend on value and filer status and change with each budget.' },
      { q: 'Should I buy a plot or a house in Islamabad?', a: 'Buy a house if you need to live in it or rent it out soon. Buy a plot if you want lower up-front cost, fewer maintenance costs and the freedom to build what you want — and can wait for construction.' },
      { q: 'Can overseas Pakistanis buy property in Islamabad?', a: 'Yes. They can buy through a representative holding a registered power of attorney, pay through banking channels, and verify documents directly with the society.' },
    ],
  },
  {
    id: 'house-construction-cost-islamabad-per-sq-ft',
    title: 'House Construction Cost in Islamabad and Rawalpindi per Square Foot (2026): 5 Marla, 10 Marla and 1 Kanal Worked Out',
    excerpt:
      'Worked examples of what it costs to build a 5 marla, 7 marla, 10 marla and 1 kanal house in Islamabad and Rawalpindi — covered area, grey structure, finishing, and the costs people forget.',
    keyTakeaway:
      'Construction cost in Islamabad and Rawalpindi = covered area × (grey structure rate + finishing rate). At indicative September 2026 rates of about PKR 2,100 per sq ft for grey structure and PKR 3,200 for standard finishing, a double-storey 5 marla house (about 1,912 sq ft covered) comes to roughly PKR 1 crore, a 10 marla house (about 3,600 sq ft) to roughly PKR 1.9 crore, and a 1 kanal house (about 6,300 sq ft) to roughly PKR 3.3 crore — excluding land, approvals and connections.',
    date: 'September 24, 2026',
    isoDate: '2026-09-24',
    author: 'Mohsin Ali',
    category: 'Construction Costs',
    tags: ['house construction cost islamabad', 'construction cost per sq ft pakistan', '5 marla house cost', '10 marla house construction cost', '1 kanal house cost', 'grey structure rate'],
    image: '/assets/stock/architectural-plans.webp',
    readTime: '12 min read',
    content: `
“How much does it cost to build a house?” has a precise answer once you know two numbers: **how many square feet you will build**, and **the rate per square foot** for grey structure and for finishing. This article works through the common plot sizes in Islamabad and Rawalpindi so you can see where the money goes, then lists the costs that are usually left out of a quote.

All figures below use the indicative rates in our [Construction Cost calculator](/tools/construction-cost) as of September 2026. Material prices move often, so treat them as a budget, then get a written quote. For Faisal Hills specifically, our [published construction rates](/payment-plans) are fixed per block.

## The formula every quote should follow

**Covered area = plot area × share of the plot built on × number of floors**

**Construction cost = covered area × (grey structure rate + finishing rate)**

Two things trip people up:

- **Plot area is not covered area.** A 10 marla plot is 2,250 sq ft of land (with the 225 sq ft marla used by Twin Cities societies), but a double-storey house on it is around 3,600 sq ft of floor space.
- **A quote without the covered area cannot be checked.** If a contractor gives a lump sum, ask how many square feet it assumes and at what rate.

## What grey structure and finishing include

**Grey structure** is the complete shell: excavation, foundation, RCC columns, beams and slabs, brickwork, plaster, damp-proofing, and the concealed conduits and pipes for electricity and plumbing.

**Finishing** is everything that makes it liveable: floor tiles or marble, doors and windows, woodwork and wardrobes, kitchen, bathrooms and sanitary fittings, electrical switches and fixtures, paint, false ceilings and exterior finishes.

Grey structure cost varies relatively little between builders who build properly, because it is driven by engineering. Finishing varies enormously, because it is driven by taste — which is why it often costs as much as the grey structure, or more. Our comparison of [grey structure versus fully finished](/blog/gray-structure-vs-fully-finished) explains the trade-offs.

## Worked example: 5 marla house

A 5 marla plot is 1,125 sq ft (25 × 45 ft is common). Building 85% of it on two floors:

- Covered area: 1,125 × 85% × 2 = about **1,912 sq ft**
- Grey structure at PKR 2,100: about **PKR 40 lac**
- Standard finishing at PKR 3,200: about **PKR 61 lac**
- **Total: about PKR 1.01 crore**

## Worked example: 7 marla house

A 7 marla plot is 1,575 sq ft. At 80% coverage on two floors:

- Covered area: about **2,520 sq ft**
- Grey structure: about **PKR 53 lac**
- Standard finishing: about **PKR 81 lac**
- **Total: about PKR 1.34 crore**

## Worked example: 10 marla house

A 10 marla plot is 2,250 sq ft (35 × 65 ft is common). At 80% coverage on two floors:

- Covered area: about **3,600 sq ft**
- Grey structure: about **PKR 76 lac**
- Standard finishing: about **PKR 1.15 crore**
- **Total: about PKR 1.91 crore**

The same house at economy finishing (about PKR 4,100 per sq ft all-in) comes to roughly PKR 1.48 crore, and at luxury finishing (about PKR 7,700 all-in) to roughly PKR 2.77 crore. The grey structure barely changes between them — the finishing does.

## Worked example: 1 kanal house

A 1 kanal plot is 4,500 sq ft. Larger plots usually build a smaller share of the land because of bigger setbacks and lawns; at 70% coverage on two floors:

- Covered area: about **6,300 sq ft**
- Grey structure: about **PKR 1.32 crore**
- Standard finishing: about **PKR 2.02 crore**
- **Total: about PKR 3.34 crore**

Your society’s byelaws decide how much you may actually cover — the [Buildable Area calculator](/tools/buildable-area) works it out from the setbacks.

## Costs that are not in the per-square-foot rate

Budget these separately:

- **Map approval and society NOC fees** — see our [approvals guide](/blog/approved-map-noc-guide).
- **Boundary wall and gate.**
- **Utility connections** — electricity, gas and water demand notices and meters.
- **Basement** — adds excavation, retaining walls and waterproofing, and is charged on its own area.
- **Solar system** — the [Rooftop Solar Planner](/tools/rooftop-solar) sizes one from your bills.
- **Contingency** — keep a few percent aside for design changes and price movement.

## Why two quotes for the same house can differ so much

- **Different covered areas assumed.** Always compare rate per sq ft on the same area.
- **Different specifications.** Steel grade, cement brand, brick class and concrete ratios all change cost and quality. Our guide to [construction materials in Pakistan](/blog/construction-materials-pakistan) lists what to insist on.
- **What is excluded.** One quote may include the boundary wall and approvals; another may not.
- **Who carries price risk.** A fixed-rate contract protects you from material price rises; a labour-only contract leaves you buying materials at whatever the market charges.

## How long it takes and how you pay

A double-storey house typically takes roughly 10 to 18 months from excavation to handover, depending on size, finishing and approvals. Payments are usually tied to stages — foundation, each slab, brickwork, plaster, finishing — which our article on [construction stages and timelines](/blog/construction-stages-timeline-pakistan) walks through. If you need to spread the cost, see [buying a house on instalments in Islamabad](/blog/house-on-installments-islamabad).

## Estimate your own house

1. Find your plot area — the [Area Converter](/tools/area) helps if your documents use a different marla.
2. Check your buildable footprint in the [Buildable Area calculator](/tools/buildable-area).
3. Put the plot size, coverage and floors into the [Construction Cost calculator](/tools/construction-cost).
4. Estimate the grey-structure materials with the [Material calculator](/tools/materials).
5. Compare building with buying ready using [Buy vs Build](/tools/buy-vs-build).
`,
    faqs: [
      { q: 'What is the construction cost per square foot in Islamabad in 2026?', a: 'As an indicative September 2026 figure, grey structure is around PKR 2,100 per sq ft and standard finishing around PKR 3,200 per sq ft, so about PKR 5,300 per sq ft for a standard finished house. Economy and luxury finishing move the total down or up substantially. Always get a written quote.' },
      { q: 'How much does it cost to build a 5 marla house in Islamabad?', a: 'A double-storey 5 marla house has about 1,912 sq ft of covered area. At indicative September 2026 standard rates that is roughly PKR 1 crore for grey structure and finishing, excluding land, approvals and connections.' },
      { q: 'How much does a 10 marla house cost to build?', a: 'About 3,600 sq ft of covered area on two floors. At indicative standard rates, roughly PKR 1.9 crore; economy finishing brings it nearer PKR 1.5 crore and luxury finishing towards PKR 2.8 crore.' },
      { q: 'What is the grey structure cost of a 10 marla house?', a: 'At about PKR 2,100 per sq ft on 3,600 sq ft of covered area, roughly PKR 76 lac (indicative, September 2026).' },
      { q: 'Is construction cost calculated on plot size or covered area?', a: 'On covered area — the total floor space across all storeys — not on plot size.' },
      { q: 'What is not included in the construction rate?', a: 'Land, map approval and NOC fees, boundary wall, utility connections, basements (priced on their own area), solar and a contingency are normally budgeted separately.' },
    ],
  },
  {
    id: 'marla-kanal-square-feet-explained',
    title: 'Marla, Kanal and Square Feet Explained: How Big Is a 5 Marla or 1 Kanal Plot Really?',
    excerpt:
      'Why one marla can mean 225 or 272.25 square feet, how to convert marla, kanal, square feet, square yards and acres, and the common plot dimensions in Islamabad and Rawalpindi societies.',
    keyTakeaway:
      'In Islamabad and Rawalpindi housing societies one marla is normally 225 sq ft, so a 5 marla plot is 1,125 sq ft, a 10 marla plot is 2,250 sq ft and 1 kanal (20 marla) is 4,500 sq ft. Older land revenue records use a 272.25 sq ft marla, which makes 1 kanal 5,445 sq ft. Always check which marla your documents use before comparing prices per marla.',
    date: 'September 24, 2026',
    isoDate: '2026-09-24',
    author: 'Haseeb Bhatti',
    category: 'Buying Guides',
    tags: ['marla to sq ft', 'kanal to marla', '1 kanal in square feet', '5 marla size', '10 marla plot size', 'marla calculator'],
    image: '/assets/stock/aerial-housing.webp',
    readTime: '8 min read',
    content: `
Two plots advertised as “10 marla” can differ by more than 470 square feet. That is not a trick — it is because Pakistan uses two different marlas, and property adverts rarely say which. This guide explains both, shows the conversions, and lists the plot dimensions you will commonly see in Islamabad and Rawalpindi.

If you just need a number, use our [Area Converter](/tools/area), which converts between marla, kanal, square feet, square metres, square yards and acres with either marla.

## The two marlas

### The 225 sq ft marla (societies)

Most private housing societies in Islamabad and Rawalpindi, including Faisal Hills, measure plots with a **225 sq ft marla**. This makes plot sizes neat round numbers:

- 5 marla = 1,125 sq ft
- 7 marla = 1,575 sq ft
- 8 marla = 1,800 sq ft
- 10 marla = 2,250 sq ft
- 1 kanal (20 marla) = 4,500 sq ft
- 2 kanal = 9,000 sq ft

### The 272.25 sq ft marla (revenue records)

The traditional revenue marla is **30.25 square yards, or 272.25 sq ft**. It appears in land records and in some older areas:

- 5 marla = 1,361.25 sq ft
- 10 marla = 2,722.5 sq ft
- 1 kanal = 5,445 sq ft
- 8 kanal = 43,560 sq ft = 1 acre

That is why an acre is said to be eight kanal — it is exactly true only with the revenue marla.

## Conversions you will need

- 1 kanal = 20 marla
- 1 square yard = 9 sq ft
- 1 square metre = 10.7639 sq ft
- 1 acre = 43,560 sq ft = 4,840 square yards
- 225 sq ft marla = 25 square yards ≈ 20.9 square metres
- 272.25 sq ft marla = 30.25 square yards ≈ 25.3 square metres

## Common plot dimensions

Societies use standard dimensions for each size. Typical ones in the Twin Cities are:

- **3.5 marla** — around 20 × 40 ft
- **5 marla** — 25 × 45 ft (1,125 sq ft)
- **7 marla** — 30 × 52.5 ft or similar
- **8 marla** — 30 × 60 ft (1,800 sq ft)
- **10 marla** — 35 × 65 ft (2,275 sq ft) is common; the exact size varies by society
- **1 kanal** — 50 × 90 ft (4,500 sq ft)

Always check the dimensions on the allotment letter or possession documents rather than assuming.

## Why this matters when you buy

**Price per marla comparisons.** If one society quotes per 225 sq ft marla and a village plot is measured with the 272.25 sq ft marla, the per-marla prices are not comparable. Convert both to price per square foot.

**Construction cost.** Builders price per square foot of covered area, not per marla. Convert your plot to square feet, then use the [Buildable Area](/tools/buildable-area) and [Construction Cost](/tools/construction-cost) calculators. Our article on [construction cost per square foot in Islamabad](/blog/house-construction-cost-islamabad-per-sq-ft) works through each plot size.

**Corner and extra land.** Corner plots and plots with extra land are often measured in the same marla but priced at a premium. Confirm the exact area that is being sold.

## Frequently confused units

- **Sarsai** — a smaller revenue unit (1 marla = 9 sarsai in the revenue system).
- **Covered area vs plot area** — plot area is the land; covered area is the floor space built on it across all storeys.
- **Gaz** — the local word for a yard; “square gaz” means square yards.

## Quick answers

- 5 marla in square feet: **1,125** (society) or **1,361.25** (revenue)
- 10 marla in square feet: **2,250** (society) or **2,722.5** (revenue)
- 1 kanal in square feet: **4,500** (society) or **5,445** (revenue)
- 1 kanal in marla: **20**
- 1 acre in kanal: **8** (revenue marla)
`,
    faqs: [
      { q: 'How many square feet is 1 marla in Islamabad?', a: 'In housing societies in Islamabad and Rawalpindi, 225 sq ft. In older land revenue records, 272.25 sq ft.' },
      { q: 'How many square feet is 1 kanal?', a: '4,500 sq ft with the 225 sq ft society marla, or 5,445 sq ft with the 272.25 sq ft revenue marla.' },
      { q: 'How many marla are in a kanal?', a: 'Twenty marla make one kanal.' },
      { q: 'What is the size of a 5 marla plot?', a: '1,125 sq ft with the society marla, usually 25 × 45 ft. With the revenue marla it is 1,361.25 sq ft.' },
      { q: 'How many kanal are in an acre?', a: 'Eight kanal, using the 272.25 sq ft revenue marla (8 × 5,445 = 43,560 sq ft).' },
      { q: 'How many square yards is 1 marla?', a: '25 square yards with the 225 sq ft marla, or 30.25 square yards with the revenue marla.' },
    ],
  },
  {
    id: 'property-transfer-taxes-pakistan-236k-236c',
    title: 'Property Transfer Taxes in Pakistan Explained: 236K, 236C, Stamp Duty, CVT and Society Fees',
    excerpt:
      'Every tax and fee paid when a plot or house changes hands in Islamabad and Punjab — who pays what, how filer status changes it, what value tax is charged on, and how to budget before you sign.',
    keyTakeaway:
      'When property is transferred, the buyer typically pays FBR advance tax under section 236K, provincial stamp duty and, where it applies, capital value tax (CVT), plus the housing society’s transfer fee; the seller pays FBR advance tax under section 236C and may owe capital gains tax. Rates depend on the property’s value band and on whether each party is on the FBR Active Taxpayers List, and they change with each budget — so confirm the current rates before the transfer date.',
    date: 'September 24, 2026',
    isoDate: '2026-09-24',
    author: 'Ashhal Ch',
    category: 'Buying Guides',
    tags: ['property transfer tax pakistan', '236k tax', '236c tax', 'stamp duty punjab', 'capital value tax', 'society transfer fee', 'filer non filer property tax'],
    image: '/assets/stock/architectural-plans.webp',
    readTime: '11 min read',
    content: `
The agreed price is never the full cost of a property deal. Between federal withholding taxes, provincial duties and the society’s own fee, both buyer and seller pay a noticeable amount on top — and the amount can change sharply depending on filer status. This guide explains each charge, who normally pays it and how to budget for it.

We deliberately do not quote fixed percentages here: federal rates are revised in each Finance Act and provincial rates change too, so any number printed today can be wrong by the time you transfer. Our [Transfer Taxes & Fees calculator](/tools/transfer-costs) shows the structure with editable rates — enter the current ones for an exact estimate.

## Taxes and fees paid by the buyer

### Advance tax on purchase — section 236K

Collected by FBR at the time of registration or transfer, on the purchase of immovable property. The rate depends on the value of the property and on whether the buyer appears on the **Active Taxpayers List (ATL)**. Non-filers are charged substantially more. It is an *advance* tax — a filer can adjust it against their final tax liability when filing a return.

### Stamp duty

A provincial levy on the transfer or sale deed, charged as a percentage of the property’s value. It is paid to the provincial government, not FBR, and the applicable rate depends on the province and the kind of area.

### Capital value tax (CVT)

A provincial tax on the value of certain property transactions. Whether it applies, and at what rate, depends on the province and the type and location of property.

### Society transfer fee

Every housing society charges its own fee to record a change of ownership, and may also require clearance of dues, a no-demand certificate and verification of both parties in person. Ask the society office for its current schedule.

### Registration and incidental costs

Registration charges, documentation, and the cost of the deed and attestation are usually small but should be budgeted.

## Taxes paid by the seller

### Advance tax on sale — section 236C

Collected by FBR on the sale or transfer of immovable property, again at a rate depending on value, holding period in some cases, and filer status.

### Capital gains tax

Gains on disposal of immovable property may be taxed depending on how long the property was held and the law in force at the time. Seller advance tax under 236C is typically adjustable against it for filers.

## Which value is tax charged on?

Taxes are usually calculated on the higher of the **declared price** and the **official valuation** — the FBR valuation table for the area, or the provincial (DC) rate. Under-declaring the price does not reduce the tax below the official valuation, and it creates problems for the buyer later when they sell.

## Why filer status matters so much

For both 236K and 236C, the rate for people who are not on the Active Taxpayers List is considerably higher than for filers. Before a transaction:

1. Check your status on FBR’s Active Taxpayers List.
2. If you are not on it, consider filing before the transfer — the saving can be significant on a large purchase.
3. Make sure the name and CNIC on the tax payment match the transfer documents exactly.

## Agent commission

Commission is not a tax, but it is part of the cost. In the Twin Cities it is commonly negotiated as a percentage from each side. Agree the amount and who pays it in writing before you start viewing — our guide to [buying safely through property dealers](/blog/faisal-hills-property-dealers-guide) covers this.

## A worked approach to budgeting

1. **Find the tax value** — the higher of the agreed price and the official valuation.
2. **Get today’s rates** for 236K, 236C, stamp duty and CVT from FBR, the provincial revenue department or a tax adviser, for your filer status.
3. **Add the society transfer fee** from the society office.
4. **Add commission** as agreed.
5. **Enter them in the [calculator](/tools/transfer-costs)** to see the buyer’s and seller’s totals side by side.

Plan the budget before you pay a token amount. Buyers should then check what they can comfortably afford with the [Affordability calculator](/tools/affordability), which assumes the transfer costs come on top of the price.

## Common mistakes

- **Assuming the seller pays everything.** By default each side pays its own taxes; anything else must be agreed in writing.
- **Paying tax in a different name.** The payer’s CNIC must match the transfer documents, or the payment may not be accepted.
- **Forgetting society dues.** Unpaid maintenance or development charges usually have to be cleared before the society records the transfer.
- **Relying on last year’s rates.** Check after every budget.

## Buying in Faisal Hills or through Alammana

We handle society transfers, verification and documentation end to end for our clients, including for overseas buyers through a power of attorney. See our [overseas buyers page](/overseas) and our complete [buyer’s guide to real estate in Islamabad](/blog/real-estate-islamabad-buyers-guide).
`,
    faqs: [
      { q: 'What is 236K tax on property?', a: 'It is the FBR advance tax collected from the buyer on the purchase of immovable property. The rate depends on the property’s value and whether the buyer is on the Active Taxpayers List; filers can adjust it against their final tax.' },
      { q: 'What is 236C tax?', a: 'The FBR advance tax collected from the seller on the sale or transfer of immovable property, at a rate that depends on value and filer status.' },
      { q: 'Who pays stamp duty on property in Punjab?', a: 'Normally the buyer, as part of registering the transfer or sale deed. It is a provincial levy.' },
      { q: 'Do non-filers pay more property tax in Pakistan?', a: 'Yes. Withholding rates under sections 236K and 236C are considerably higher for people who are not on the FBR Active Taxpayers List.' },
      { q: 'Is property tax calculated on the price or on the FBR value?', a: 'Generally on the higher of the declared price and the official valuation (FBR valuation table or provincial DC rate).' },
      { q: 'How much are total transfer costs on a property?', a: 'It depends on value, location and both parties’ filer status. Enter the current rates in the Transfer Taxes & Fees calculator to see the buyer’s and seller’s totals.' },
    ],
  },
  {
    id: 'home-loan-pakistan-emi-guide',
    title: 'Home Loans in Pakistan: How EMI Works, What Banks Check, and How to Compare Offers',
    excerpt:
      'A plain-language guide to housing finance in Pakistan — how the monthly instalment is calculated, fixed versus KIBOR-linked rates, what banks ask for, government schemes versus bank loans versus developer plans, and when to prepay.',
    keyTakeaway:
      'A home loan’s monthly instalment (EMI) is fixed by three things: the amount borrowed, the interest rate and the tenure — EMI = P × r × (1+r)^n ÷ ((1+r)^n − 1). For example, PKR 1.2 crore over 20 years at 6% is about PKR 85,972 a month. To compare offers fairly, look beyond the EMI at the total interest, the fees, whether the rate is fixed or floats with KIBOR, and the present worth of all payments.',
    date: 'September 24, 2026',
    isoDate: '2026-09-24',
    author: 'Ashhal Ch',
    category: 'Finance',
    tags: ['home loan pakistan', 'house loan emi calculator', 'mortgage pakistan', 'kibor home finance', 'house finance islamabad', 'government housing scheme loan'],
    image: '/assets/stock/modern-house-1.webp',
    readTime: '13 min read',
    content: `
For most families, a house is bought with some mix of savings, a developer’s instalment plan and bank finance. Bank finance is the least understood of the three: the monthly instalment looks affordable, but the true cost depends on details that are easy to skip — how the rate is set, what fees are charged, and how long you pay.

This guide explains how housing finance works in Pakistan and how to compare offers. The [Home Finance Decision Engine](/tools/home-finance) runs all the numbers below for up to three offers at once.

## How the monthly instalment is calculated

Home loans are **reducing-balance** loans: each month you pay interest on what you still owe, and the rest of the instalment reduces the balance. The equal monthly instalment (EMI) is:

**EMI = P × r × (1 + r)^n ÷ ((1 + r)^n − 1)**

- **P** — the amount borrowed (price minus down payment)
- **r** — the monthly interest rate (annual rate ÷ 12)
- **n** — the number of months

Worked example: borrowing PKR 1.2 crore for 20 years (240 months) at 6% a year gives an EMI of about **PKR 85,972**. At a higher rate the same loan costs much more each month — which is why the rate matters more than almost anything else.

In the early years most of each instalment is interest; by the final years it is mostly principal. That is also why prepaying early saves far more interest than prepaying late.

## Fixed, floating and KIBOR-linked rates

Commercial bank home finance in Pakistan is commonly priced as **KIBOR plus a spread**, and the rate is reset periodically when KIBOR changes. When the State Bank’s policy rate rises, your instalment can rise with it; when it falls, so can your instalment. Some products fix the rate for an initial period. Islamic products use diminishing musharakah or similar structures with rental payments, but the budgeting logic is the same: understand how and when the payment can change.

Government-supported housing schemes, when available, offer subsidised rates for eligible buyers and property types. Their terms and eligibility change from time to time, so check the current terms with participating banks.

## What banks check

Expect to provide:

- **Income proof** — salary slips and bank statements, or business records and tax returns for the self-employed.
- **Your existing obligations** — other loans and credit cards, which reduce how much you can borrow.
- **Age and tenure** — many banks require the loan to end before a certain age.
- **Property documents** — clear title, approved map (for construction), and the society’s or authority’s approval. Banks generally only finance properties with a clean legal position.
- **Down payment** — commonly a meaningful share of the price comes from you.

Our guide to [approved maps and NOCs](/blog/approved-map-noc-guide) explains the property-side documents.

## How much can you borrow?

Lenders cap the share of income that can go to instalments. Staying well under the cap leaves room for emergencies. Work backwards from a comfortable EMI to a loan amount with the [Affordability calculator](/tools/affordability) — it also adds your savings and keeps a reserve.

## Comparing offers properly

The lowest EMI is not always the cheapest loan. Compare:

1. **Total interest** over the life of the loan.
2. **Up-front costs** — processing fees, valuation, legal and insurance charges.
3. **Rate type** — fixed, floating, or KIBOR-linked, and how often it resets.
4. **Prepayment terms** — penalties and penalty-free windows.
5. **Present worth** — every payment discounted to today at the return your money could earn elsewhere. This single number lets you compare a long cheap loan with a short expensive one. **Annual worth** does the same when tenures differ.

The [Home Finance Decision Engine](/tools/home-finance) calculates all five and highlights the cheapest overall.

## Bank loan, government scheme or developer plan?

- **Developer instalment plans** are usually interest-free on paper but shorter (often a few years) and may carry a higher price than paying cash. Good when you can afford larger instalments over a short period. See our guide to [buying a house on instalments in Islamabad](/blog/house-on-installments-islamabad).
- **Government-supported schemes** offer the lowest rates when you qualify, with limits on eligibility and property type.
- **Commercial bank finance** is the most widely available and runs up to long tenures, at market rates.

Many buyers combine them: pay a developer’s plan during construction, then refinance the balance with a bank at possession.

## Prepay or invest?

If you receive a bonus, inheritance or sale proceeds during the loan, prepaying earns you exactly the loan’s interest rate, with no risk. Investing only makes sense if you can reliably earn more than that rate **after tax**. Check prepayment penalties first. The decision engine’s windfall section shows the interest saved and months cut against the gain if invested.

## A checklist before you sign

- The property has clear title and the approvals the bank needs.
- You know exactly how and when the rate can change.
- You have seen the full schedule of fees.
- The EMI fits comfortably with room to spare.
- You understand the prepayment and late-payment terms.

For the wider picture — which areas, which property type, and which checks — read our [complete buyer’s guide to real estate in Islamabad](/blog/real-estate-islamabad-buyers-guide).
`,
    faqs: [
      { q: 'How is home loan EMI calculated in Pakistan?', a: 'EMI = P × r × (1 + r)^n ÷ ((1 + r)^n − 1), where P is the loan amount, r the monthly rate and n the number of months. PKR 1.2 crore over 20 years at 6% is about PKR 85,972 a month.' },
      { q: 'What is KIBOR-linked home finance?', a: 'A loan priced at KIBOR plus a fixed spread, reset periodically. When KIBOR rises your instalment can rise, and when it falls your instalment can fall.' },
      { q: 'What documents do banks need for a home loan?', a: 'Proof of income, bank statements, details of existing loans, your CNIC, and the property’s title documents and approvals.' },
      { q: 'Is a developer instalment plan better than a bank loan?', a: 'It is usually interest-free on paper but shorter, and the instalment price can be higher than the cash price. Compare the total cost of each, including fees, not just the monthly amount.' },
      { q: 'Should I prepay my home loan?', a: 'Prepaying earns the loan’s interest rate risk-free. It is worthwhile unless you can reliably earn more than that rate after tax, and after checking any prepayment penalty.' },
      { q: 'How much home loan can I get on my salary?', a: 'Banks cap total instalments at a share of income. Work backwards from an EMI you can comfortably pay to a loan amount using the Affordability calculator.' },
    ],
  },
  {
    id: 'rooftop-solar-system-home-islamabad',
    title: 'Rooftop Solar for Homes in Islamabad and Rawalpindi: What Size You Need, Roof Space, and Payback',
    excerpt:
      'How to size a home solar system from your electricity bill, how much roof it needs, why direction and tilt matter at 33°N, on-grid versus hybrid, and how to judge payback — plus what to plan for when you are still building.',
    keyTakeaway:
      'Size a home solar system from your yearly electricity use: in the Islamabad–Rawalpindi region a well-installed, south-facing system tilted around 30° produces roughly 1,300–1,400 units per kW per year, so a home using 900 units a month needs about 8 kW — around 14 panels of 585 W needing roughly 36 m² of roof. East or west-facing panels produce roughly a tenth less.',
    date: 'September 24, 2026',
    isoDate: '2026-09-24',
    author: 'Mohsin Ali',
    category: 'Construction',
    tags: ['solar system for home islamabad', 'solar panel size calculator', 'rooftop solar pakistan', 'net metering islamabad', 'how many solar panels do i need'],
    image: '/assets/stock/modern-house-2.webp',
    readTime: '11 min read',
    content: `
Solar has become one of the most common additions to houses in the Twin Cities, but many systems are sized by guesswork: “get 10 kW”. A properly sized system starts from what you actually use, fits your roof, faces the right way and is mounted to survive a storm. This guide explains each step. Our [Rooftop Solar Planner](/tools/rooftop-solar) does the arithmetic for you.

## Step 1: start from your units, not your bill

Your electricity bill shows the units (kWh) you used each month. Take a full year if you can — summer air-conditioning months use far more than winter months — and add them up.

## Step 2: convert units into system size

Each kW of panels produces a fairly predictable amount of energy per year in a given place. For Islamabad and Rawalpindi (about 33°N), a well-installed system facing south at around 30° tilt produces roughly **1,300–1,400 units per kW per year**.

**System size (kW) ≈ yearly units ÷ yearly units per kW**

Example: 900 units a month is 10,800 units a year. Divided by about 1,360 gives roughly **8 kW** — about 14 panels of 585 W.

## Step 3: check your roof

A modern panel of around 585 W takes roughly 2.6 m² including spacing. Leave space for water tanks, the stair tower, access paths and cleaning. A 5 marla house’s roof often has room for a modest system; larger roofs can take more. If the roof is too small for all your use, the planner tells you what share it can cover.

Also consider **shading**: a neighbour’s building, a water tank or a tree that shades part of the array in winter afternoons can cut output more than you expect.

## Step 4: direction and tilt

In Pakistan the sun moves across the southern sky, so **south-facing panels tilted about 30°** collect the most over a year. East or west-facing arrays lose roughly a tenth of output; north-facing panels lose much more. Flat or very low tilts also reduce yearly output and collect more dust. Our [Plot Orientation Guide](/tools/plot-orientation) explains how your plot’s facing affects both the house and the roof.

## Step 5: on-grid, hybrid or off-grid

- **On-grid** — connected to the grid, no batteries. Cheapest per kW, but stops during a grid outage for safety. Where net metering is available, surplus units can be exported under the utility’s current rules.
- **Hybrid** — grid plus batteries, so essential loads run during outages. Batteries add significant cost and need replacement over the system’s life.
- **Off-grid** — batteries only; rarely needed in the city.

Net-metering rules and buy-back arrangements are set by the regulator and distribution company and have changed over time, so check the current rules with your distribution company before you size for export.

## Step 6: payback

**Yearly saving ≈ units generated that you would otherwise buy × your tariff.**

**Payback ≈ system cost ÷ yearly saving.**

Payback is fastest when you use most of the solar output yourself during the day, and when your tariff is high. The planner lets you enter your own tariff and cost per kW.

## Step 7: the mounting structure matters

Rooftop frames face strong wind uplift during storms. Poorly designed or badly anchored frames can lift and fail, damaging the roof and the panels. Insist on a structure designed for high wind, galvanised steel of adequate section, proper anchoring into the slab, and drainage that is not blocked by the frame.

## Building a new house? Plan for solar now

If you are still at the design or grey-structure stage, it costs very little to:

- Keep the south side of the roof clear of tanks and the stair tower.
- Provide conduit from the roof to the distribution board.
- Allow for a battery and inverter space with ventilation.
- Design the roof slab and parapet for the mounting loads.

Our [construction cost guide for Islamabad](/blog/house-construction-cost-islamabad-per-sq-ft) and [construction stages article](/blog/construction-stages-timeline-pakistan) show where these decisions fall in the build.

## Quick sizing guide

Using about 1,360 units per kW per year:

- 300 units a month — about 2.6 kW
- 600 units a month — about 5.3 kW
- 900 units a month — about 7.9 kW
- 1,200 units a month — about 10.6 kW

Round up to whole panels, and check the roof can take them.
`,
    faqs: [
      { q: 'What size solar system do I need for my house in Islamabad?', a: 'Divide your yearly units by about 1,360. A house using 900 units a month (10,800 a year) needs roughly 8 kW, or about 14 panels of 585 W.' },
      { q: 'How many units does a 10 kW solar system produce in Islamabad?', a: 'Roughly 13,000–14,000 units a year when facing south at a good tilt, or about 1,100 units a month on average — more in summer, less in winter.' },
      { q: 'How much roof space do I need for solar panels?', a: 'Allow roughly 2.6 m² per 585 W panel including spacing — about 36 m² for an 8 kW system — plus room for access and tanks.' },
      { q: 'Which direction should solar panels face in Pakistan?', a: 'South, tilted about 30°. East or west-facing panels produce roughly a tenth less over a year.' },
      { q: 'Is a hybrid solar system worth it?', a: 'If you need power during outages, yes, but batteries add substantial cost and need replacing during the system’s life. On-grid systems are cheapest per unit produced.' },
      { q: 'How long does solar take to pay back?', a: 'Divide the system cost by the yearly saving (units you would otherwise buy × tariff). It pays back fastest when you use most of the output during the day.' },
    ],
  },
  {
    id: '5-marla-vs-10-marla-house',
    title: '5 Marla vs 10 Marla House: Space, Construction Cost, Rooms and Resale Compared',
    excerpt:
      'Should you build or buy a 5 marla or a 10 marla house in Islamabad and Rawalpindi? A side-by-side look at covered area, typical room layouts, construction cost, running costs and resale — and a way to decide.',
    keyTakeaway:
      'A 10 marla house gives roughly twice the land (2,250 vs 1,125 sq ft) and nearly twice the covered area of a 5 marla house — about 3,600 vs 1,912 sq ft on two floors — so it costs roughly twice as much to build (about PKR 1.9 crore vs PKR 1 crore at indicative September 2026 standard rates, excluding land). A 5 marla house suits a family of four to five on a tighter budget and lets and resells to a wider market; a 10 marla house suits larger or joint families who need separate floors and parking for two cars.',
    date: 'September 24, 2026',
    isoDate: '2026-09-24',
    author: 'Mohsin Ali',
    category: 'Construction Costs',
    tags: ['5 marla vs 10 marla', '5 marla house design', '10 marla house', 'which house size to build', '5 marla house cost'],
    image: '/assets/stock/villa-front.webp',
    readTime: '10 min read',
    content: `
Five and ten marla are the two most common plot sizes in the housing societies around Islamabad and Rawalpindi. Choosing between them is mostly a trade-off between budget and space, but a few less obvious factors — parking, separate floors, running costs and who will buy it from you later — often decide it. Figures below use the 225 sq ft marla used by Twin Cities societies; see our [marla and kanal guide](/blog/marla-kanal-square-feet-explained) if your documents use a different one.

## Land and covered area

- **5 marla** — 1,125 sq ft of land, commonly 25 × 45 ft. On two floors at about 85% coverage, roughly **1,912 sq ft** of covered area.
- **10 marla** — 2,250 sq ft of land, commonly around 35 × 65 ft. On two floors at about 80% coverage, roughly **3,600 sq ft** of covered area.

A 10 marla house usually leaves more open space — a real lawn and a wider car porch — because larger plots have larger setbacks. Check the exact footprint with the [Buildable Area calculator](/tools/buildable-area).

## What fits inside

Layouts vary with the architect, but typical double-storey arrangements are:

**5 marla**
- 3 to 4 bedrooms with attached baths
- A drawing room and a lounge, sometimes combined on the ground floor
- One kitchen
- Parking for one car
- A small lawn or none

**10 marla**
- 5 to 6 bedrooms, often split so each floor works as a self-contained unit
- Separate drawing and dining, plus a lounge on each floor
- A kitchen on each floor if the family wants separate portions
- Parking for two cars
- A proper lawn

The ability to run the upper and lower floors as separate portions is often the deciding factor for joint families — and for rental income.

## Construction cost

Construction is priced per square foot of covered area. At the indicative September 2026 standard rates in our [Construction Cost calculator](/tools/construction-cost) (about PKR 2,100 per sq ft grey structure and PKR 3,200 finishing):

- **5 marla:** about PKR 40 lac grey structure + PKR 61 lac finishing = **about PKR 1 crore**
- **10 marla:** about PKR 76 lac grey structure + PKR 1.15 crore finishing = **about PKR 1.9 crore**

Finishing choices move these a lot in both directions. Our detailed [construction cost breakdown for Islamabad](/blog/house-construction-cost-islamabad-per-sq-ft) works through economy and luxury finishing too.

## Running costs

A larger house costs more to keep: more rooms to cool and heat, larger electricity bills, more to paint and repair, and often higher society maintenance charges. Solar can offset a lot of the electricity cost — the [Rooftop Solar Planner](/tools/rooftop-solar) sizes a system for either house, and a 10 marla roof fits considerably more panels.

## Rent and resale

- **5 marla houses** sit in the most affordable price bracket for families, so the pool of buyers and tenants is wider, and they tend to sell and let faster.
- **10 marla houses** attract fewer but better-funded buyers and tenants. Upper and lower portions can be let separately, which can improve the rental income per square foot.

Compare the numbers for a specific property with the [Rental Yield calculator](/tools/rent-yield).

## How to decide

Choose **5 marla** if:
- Your family is four to five people.
- Budget is the main constraint, or you want to build without finance.
- You value easy resale and letting.

Choose **10 marla** if:
- You have a larger or joint family who need separate floors.
- You need parking for two cars or a real lawn.
- You plan to let one portion and live in the other.

## A middle path

Seven and eight marla plots sit between the two and are available in many societies. So is building a 5 marla house on three floors where byelaws allow — though stairs and structure take a bigger share of the space.

Whatever you choose, check the society’s approval and possession status first — our [buyer’s guide to real estate in Islamabad](/blog/real-estate-islamabad-buyers-guide) lists the checks — and see our [Faisal Hills construction rates](/payment-plans) for fixed block-wise prices.
`,
    faqs: [
      { q: 'How much bigger is a 10 marla house than a 5 marla house?', a: 'It has twice the land (2,250 vs 1,125 sq ft) and, on two floors, roughly 3,600 vs 1,912 sq ft of covered area.' },
      { q: 'How many rooms can be built on 5 marla?', a: 'A typical double-storey 5 marla house has 3 to 4 bedrooms with attached baths, a drawing room, a lounge and a kitchen, with parking for one car.' },
      { q: 'How much does it cost to build a 10 marla house compared to 5 marla?', a: 'Roughly twice as much, because cost is per square foot of covered area: about PKR 1.9 crore versus PKR 1 crore at indicative September 2026 standard rates, excluding land.' },
      { q: 'Is a 5 marla house good for investment?', a: 'It sits in the most affordable bracket, so it usually has the widest pool of buyers and tenants and lets and sells faster.' },
      { q: 'Can a 10 marla house be divided into portions?', a: 'Yes — double-storey 10 marla houses are often designed with a self-contained unit on each floor, which suits joint families and letting one floor.' },
    ],
  },
  {
    id: 'landowner-builder-partnership-pakistan',
    title: 'Landowner and Builder Partnerships in Pakistan: How the Profit Split Works and When It Beats Selling Your Plot',
    excerpt:
      'You own a plot; someone else has the money or the construction capability. How joint-venture construction deals are structured, how profit is split fairly, the taxes involved, and a worked example comparing building in partnership with simply selling the plot.',
    keyTakeaway:
      'In a landowner–builder partnership, the plot is counted as the landowner’s capital at its current value, the partner funds construction, and after the house is sold the profit (sale price minus total capital, less tax) is split in proportion to capital or at an agreed ratio. In a worked example — a PKR 2 crore plot, PKR 1.5 crore construction, PKR 4.8 crore sale over 18 months with 20% tax on profit — the landowner ends with about PKR 2.59 crore versus PKR 1.91 crore from selling today after capital gains tax, still about PKR 27.9 lac better off after discounting to today’s money.',
    date: 'September 24, 2026',
    isoDate: '2026-09-24',
    author: 'Ch. Muhammad Abdullah',
    category: 'Investment',
    tags: ['landowner builder partnership', 'joint venture construction pakistan', 'profit sharing construction', 'sell plot or build', 'construction partnership agreement'],
    image: '/assets/stock/villa-exterior.webp',
    readTime: '12 min read',
    content: `
Many plot owners in the Twin Cities face the same choice: sell the plot now, or build on it and sell a finished house for much more — without having the cash to build. A partnership with an investor or a builder bridges that gap. Done well, both sides earn more than they would alone. Done badly, it ends in disputes about money, delays and who decides when to sell.

This article explains how these deals are structured, how to split profit fairly, and how to check whether building actually beats selling. The [Partnership Profit Analyzer](/tools/partnership) runs every number below with your own figures.

## How a typical partnership is structured

- **The landowner** contributes the plot — and sometimes some cash.
- **The cash partner or builder** funds and manages construction.
- **The house is sold** when finished (or at an agreed point), and the proceeds repay capital and then split the profit.

Variations include the builder taking a share of the finished units instead of cash, or the landowner keeping one floor and the builder selling the other. The arithmetic below applies to all of them once you express each side’s contribution in money.

## Valuing each side’s contribution

**The plot at its current market value**, not what the landowner paid years ago. If the landowner sold today, that is what they would receive (before tax), so it is the fair measure of what they are putting at risk.

**Construction at its real cost**, including approvals, utility connections and a contingency. Our [construction cost guide](/blog/house-construction-cost-islamabad-per-sq-ft) and the [Construction Cost calculator](/tools/construction-cost) help set a realistic budget. Underestimating construction is the most common source of partnership disputes.

## Splitting the profit

**Gross profit = sale price − total capital.**
**After-tax profit = gross profit − tax on the project profit.**

The profit is then split either:

- **By capital contributed** — the simplest and easiest to defend. If the plot is worth PKR 2 crore and construction costs PKR 1.5 crore, the landowner has 57.1% of the capital and receives 57.1% of the profit.
- **At an agreed ratio** — for example, when the builder also contributes expertise and carries the construction risk. Any split that differs from the capital shares should be justified and written down.

## A worked example

Consider a plot worth **PKR 2 crore** today, bought years ago for PKR 1.4 crore. A partner will fund **PKR 1.5 crore** of construction. The finished house is expected to sell for **PKR 4.8 crore** in **18 months**. Assume 20% tax on the project profit, 15% capital gains tax if the plot is sold now, and a 12% yearly discount and inflation rate.

**If the landowner sells the plot today:** the gain is PKR 60 lac; capital gains tax of about PKR 9 lac leaves about **PKR 1.91 crore**.

**If they build in partnership:**
- Total capital: PKR 3.5 crore. Gross profit: PKR 1.3 crore. Tax: PKR 26 lac. After-tax profit: PKR 1.04 crore.
- Split by capital (57.1% / 42.9%): the landowner’s profit is about PKR 59.4 lac, so they receive about **PKR 2.59 crore** in total.
- Discounted to today’s money over 18 months, that is about **PKR 2.19 crore** — still about **PKR 27.9 lac more** than selling today.
- The cash partner earns about PKR 44.6 lac on PKR 1.5 crore — about 29.7% in total, or roughly 18.9% a year.

These figures are illustrative. Change the sale price, timeline or taxes and the answer can flip — which is exactly why it is worth running the numbers before agreeing.

## When selling today is better

- The expected sale price is uncertain or the local market is slow.
- Construction is likely to overrun in cost or time.
- The landowner needs the money now.
- The partner is not experienced in building to a standard buyers will pay for.

## What the agreement must cover

Put everything in a written agreement reviewed by a lawyer:

1. **Contributions and their agreed values.**
2. **The construction specification** — materials, finishes and who approves changes. Our guide to [construction materials](/blog/construction-materials-pakistan) is a good checklist.
3. **Budget, timeline and who pays overruns.**
4. **Who holds the title** during construction and on what terms, including any power of attorney.
5. **Sale authority** — the minimum price, who can accept an offer, and the deadline to sell.
6. **The profit split and the order of payments** (capital first, then profit).
7. **Exit and dispute terms** — what happens if one party wants out or construction stops.
8. **Record-keeping** — every payment through banks, with receipts, and access to the site.

## Taxes to plan for

Selling a completed house attracts FBR withholding on the sale and potentially capital gains tax; the buyer pays their own taxes. Our [property transfer taxes guide](/blog/property-transfer-taxes-pakistan-236k-236c) explains 236C, 236K and the provincial duties. The analyzer’s tax inputs are simplified — confirm your actual position with a tax adviser.

## How we work with plot owners

Alammana builds on published block-wise rates in Faisal Hills, with live site cameras and a client portal that tracks stages, materials and documents — which removes much of the trust problem in any partnership. See our [construction rates](/payment-plans) and our guide to [choosing a house developer in Islamabad](/blog/find-best-house-developers-islamabad).
`,
    faqs: [
      { q: 'How is profit shared between a landowner and a builder?', a: 'Most simply in proportion to capital contributed, counting the plot at its current market value. Any other ratio should be agreed and justified in writing.' },
      { q: 'Should I sell my plot or build in partnership?', a: 'Compare what you would receive from selling today after tax with your share of the finished project discounted to today’s money. If the sale price, timeline or construction cost is uncertain, selling can be the safer choice.' },
      { q: 'How should the plot be valued in a partnership?', a: 'At its current market value — what the landowner would receive by selling now — not the original purchase price.' },
      { q: 'What should a construction partnership agreement include?', a: 'Contributions and values, specifications, budget and overrun responsibility, title arrangements, sale authority and minimum price, the profit split and payment order, exit terms and record-keeping.' },
      { q: 'Who pays tax in a construction partnership?', a: 'Tax on the sale and any gain is paid according to how the title and proceeds are held and the agreement between the parties. Get tax advice before signing.' },
    ],
  },
  {
    id: 'plot-vs-house-investment-islamabad',
    title: 'Plot or House: Which Is the Better Property Investment in Islamabad and Rawalpindi?',
    excerpt:
      'How plots and houses make money differently — capital growth versus rent — how to measure each properly after inflation, holding costs and vacancy, and how to decide which suits your money and timeline.',
    keyTakeaway:
      'Plots make money almost entirely through capital growth and cost little to hold; houses make money through rent plus growth but cost more to maintain and depreciate as buildings. Judge either by its real return — growth plus net rent, minus holding costs, compared with inflation. For example, PKR 50 lac growing 15% a year for 3 years becomes about PKR 76 lac, but with 11% inflation that is only about PKR 55.6 lac in today’s money.',
    date: 'September 24, 2026',
    isoDate: '2026-09-24',
    author: 'Ashhal Ch',
    category: 'Investment',
    tags: ['property investment islamabad', 'plot vs house investment', 'rental yield islamabad', 'real estate investment pakistan', 'best investment in property'],
    image: '/assets/stock/modern-house-1.webp',
    readTime: '11 min read',
    content: `
Ask investors in the Twin Cities whether to buy a plot or a house and you will hear strong opinions both ways. Both can work. They simply earn money in different ways, carry different risks and suit different people. This guide explains how to compare them honestly — with the effect of inflation included, which is where most back-of-envelope calculations go wrong.

## How a plot makes money

A plot earns almost nothing while you hold it. Its return is **capital growth**: the difference between what you pay and what you sell for. Growth in a society tends to come in steps as it moves through approval, development, possession, and new roads or amenities nearby — and it can stall for long periods between those steps.

**Advantages:** low holding costs, no maintenance, no tenants, easy to hold for years, and often available on instalments.

**Risks:** no income, the society’s approvals and development, liquidity when the market is slow, and — for files — uncertainty about which plot you receive and when.

## How a house makes money

A house earns **rent** from day one, plus whatever the land beneath it appreciates. The building itself ages, so a house needs regular spending to keep its value and its tenants.

**Advantages:** monthly income, easier to finance with a bank, and in-demand areas let quickly.

**Risks:** vacancy between tenants, repairs and upkeep, tenant problems, and a higher entry price.

## Measure the real return, not the headline

Three corrections turn a headline into a real number:

### 1. Inflation

**Real value = future value ÷ (1 + inflation)^years.**

A property bought for PKR 50 lac that grows 15% a year is worth about PKR 76 lac after three years. With 11% inflation over the same period, that is about **PKR 55.6 lac in today’s money** — a real gain, but far smaller than the headline PKR 26 lac. If growth is below inflation, you are losing purchasing power even while the price rises. The [Investment ROI calculator](/tools/investment) shows both figures under conservative, base and optimistic scenarios.

### 2. Holding costs

Plots carry development charges, society maintenance and property tax. Houses add repairs, repainting and replacement of fittings. Subtract them every year.

### 3. Vacancy and upkeep for rent

**Net rental yield = (rent × months actually let − yearly costs) ÷ price.**

A house that sits empty for a month or two a year, and needs regular repairs, earns noticeably less than its advertised rent suggests. The [Rental Yield calculator](/tools/rent-yield) works out gross yield, net yield and payback.

## Comparing the two side by side

For each option, estimate:

1. **Entry cost** — price plus transfer taxes and fees (see our [transfer taxes guide](/blog/property-transfer-taxes-pakistan-236k-236c)).
2. **Yearly income** — net rent for a house, none for a plot.
3. **Yearly costs** — holding costs for both.
4. **Expected growth** — be conservative.
5. **Holding period** — and how easily you could sell at the end.

Then compare the yearly return with your **target return**: what the same money would earn safely elsewhere. The [Portfolio Ranker](/tools/portfolio) does this for several plots at once and labels each as buy more, hold or sell.

## Which suits you?

**Choose a plot if:**
- You don’t need income from the investment.
- You can hold for several years.
- You want low maintenance and no tenants.
- You may build on it later — our [buy vs build calculator](/tools/buy-vs-build) compares that path.

**Choose a house if:**
- You want monthly income now.
- You can manage tenants and upkeep, or pay someone to.
- You want an asset a bank will finance.

**Or combine them:** buy a plot in a developing society, then build and let a house on it once the area has matured — capturing growth first and rent later.

## What drives value in the Twin Cities

Approval status, visible development, possession, and road links matter far more than advertising. Our honest look at [Faisal Hills as an investment](/blog/investing-in-faisal-hills) and our [ranking of growth areas](/blog/real-estate-boom-faisal-hills-faisal-town-b17-ranked) explain the drivers, and the [buyer’s guide to real estate in Islamabad](/blog/real-estate-islamabad-buyers-guide) lists the checks before you buy anything.
`,
    faqs: [
      { q: 'Is it better to invest in a plot or a house in Islamabad?', a: 'A plot suits investors who want low holding costs and capital growth and can wait; a house suits those who want monthly rent and can handle tenants and upkeep. Compare both on real return after inflation and costs.' },
      { q: 'How do I calculate real return on property?', a: 'Divide the future value by (1 + inflation)^years to get today’s money, add net rent received, subtract holding costs, and compare the yearly rate with what your money earns elsewhere.' },
      { q: 'What is a good rental yield in Islamabad?', a: 'It depends on area and property type. Compare net yield — after vacancy and costs — with bank deposit rates and with expected capital growth.' },
      { q: 'Do plots appreciate faster than houses?', a: 'In developing societies plots often grow faster in percentage terms because land drives the value and there is no ageing building, but growth comes in steps and can stall.' },
      { q: 'When should I sell an investment plot?', a: 'When its expected future growth after holding costs falls below what the money could earn elsewhere, regardless of past gains.' },
    ],
  },
  {
    id: 'check-housing-society-legal-cda-rda',
    title: 'How to Check if a Housing Society Is Legal in Islamabad and Rawalpindi (CDA and RDA)',
    excerpt:
      'A step-by-step way to verify a housing society before you pay a token — which authority approves it, how to read approval status, what “NOC under process” really means, the red flags, and how to verify the specific plot and seller.',
    keyTakeaway:
      'To check if a housing society is legal, find out which authority it falls under — the Capital Development Authority (CDA) inside Islamabad Capital Territory, or the Rawalpindi Development Authority (RDA) for much of Rawalpindi district — and confirm the society’s name and status on that authority’s own published list of approved and illegal schemes, not just on the developer’s brochure. Then verify the specific plot or file and the seller directly with the society office.',
    date: 'September 24, 2026',
    isoDate: '2026-09-24',
    author: 'Haseeb Bhatti',
    category: 'Buying Guides',
    tags: ['how to check housing society is legal', 'cda approved housing societies', 'rda approved societies', 'illegal housing societies islamabad', 'society noc check'],
    image: '/assets/stock/aerial-housing.webp',
    readTime: '10 min read',
    content: `
The most expensive mistake in Pakistani real estate is buying into a society that turns out not to be approved. Plots can be sold for years before problems surface — when possession never comes, maps are not approved, or utilities cannot be connected. The checks take a few days and cost almost nothing. This guide explains them.

## Step 1: work out which authority is responsible

Housing schemes are approved by the development authority for the area:

- **Islamabad Capital Territory** — the **Capital Development Authority (CDA)**.
- **Rawalpindi district**, including much of the GT Road and Motorway corridor towards Taxila — the **Rawalpindi Development Authority (RDA)** for the areas under its control; other parts of the district fall under the district council or other authorities.

A society’s address alone can be misleading: many societies market themselves as “Islamabad” while being located in Rawalpindi district. Find where the land actually is.

## Step 2: check the authority’s own list

Both CDA and RDA publish lists of approved schemes and of illegal or unapproved schemes on their official websites and in public notices. Look for:

- The society’s **exact registered name** — similarly named schemes are common.
- **Which phase or blocks** are approved. Approval is often granted phase by phase; one approved phase does not mean every phase is.
- The **status**: approved, NOC issued, under process, or declared illegal.

If you cannot find it, visit or write to the authority. Do not rely on a screenshot or a copy of an approval letter supplied by the seller alone.

## Step 3: understand what the status means

- **Approved / NOC issued** — the layout plan has been approved for the stated area. This is the status you want for a plot you intend to build on.
- **NOC under process** — the scheme has applied but is not yet approved. Buying is not automatically wrong, but you are carrying the risk that approval is delayed, conditioned on changes, or refused. The price should reflect that risk.
- **Illegal / unapproved** — do not buy. Maps will not be approved and utilities may never be connected.

Our [approved maps and NOC guide](/blog/approved-map-noc-guide) explains how society approval connects to your own building map approval later.

## Step 4: check the land and development on the ground

Visit the society, not just the sales office:

- Are the roads, sewerage, water supply and electricity actually built in the block you are buying in?
- Is there possession in that block — are people building?
- Does the plot you are shown match the plot number and size on paper?

Progress on the ground is the best evidence that a society can deliver what it sells.

## Step 5: verify the specific plot or file

At the society office:

- Confirm the **plot or file number exists** and is registered to the seller.
- Confirm there is **no dispute, lien or duplicate** on it.
- Confirm **dues are clear** and what the transfer requires.
- Confirm the **size and location** — especially for corner, park-facing or extra-land plots that carry a premium.

## Step 6: verify the seller

The seller’s CNIC must match the society’s record. If a representative is selling, ask for the original registered power of attorney and verify it. Pay through banking channels, against receipts, and complete the transfer at the society office. Our guide to [buying safely through property dealers](/blog/faisal-hills-property-dealers-guide) lists more warning signs.

## Red flags

- Prices far below comparable approved societies nearby.
- Pressure to pay a token immediately “before prices rise”.
- A society that cannot show its approval letter or whose name differs from the authority’s list.
- Files sold with no clear plan for when plots will be allocated.
- Payments requested in cash, or into a personal account.
- No visible development despite years of sales.

## After you have verified

Budget the full cost including [transfer taxes and fees](/blog/property-transfer-taxes-pakistan-236k-236c), decide how you will pay (see our [home loan guide](/blog/home-loan-pakistan-emi-guide) and [instalment plan calculator](/tools/installments)), and read the complete [buyer’s guide to real estate in Islamabad](/blog/real-estate-islamabad-buyers-guide).

Our [housing society guides](/societies) set out the approval status, blocks and plot sizes of the societies we work in, including Faisal Hills (RDA approved).
`,
    faqs: [
      { q: 'How can I check if a housing society is approved by CDA?', a: 'Check the society’s exact name and phase on the Capital Development Authority’s published list of approved and illegal schemes, or confirm directly with CDA. Do not rely only on documents from the seller.' },
      { q: 'How do I check if a society is approved by RDA?', a: 'Check the Rawalpindi Development Authority’s published lists of approved and illegal schemes for the society’s exact name and the phase you are buying in, or confirm with RDA directly.' },
      { q: 'What does NOC under process mean?', a: 'The society has applied for approval but has not received it. You carry the risk that approval is delayed, changed or refused, so the price and your plans should reflect that.' },
      { q: 'Can I build a house in an unapproved society?', a: 'Building maps are generally approved only in approved schemes, and utility connections can be refused, so building in an unapproved or illegal society carries serious legal and practical risk.' },
      { q: 'How do I verify a plot file is genuine?', a: 'Confirm the file or plot number, owner name and dues directly at the society office, and check that there is no dispute, lien or duplicate on it before paying.' },
      { q: 'Is Faisal Hills approved?', a: 'Faisal Hills is RDA approved. As with any society, confirm the specific block and plot with the society office before buying.' },
    ],
  },
  {
    id: 'overseas-pakistanis-buy-property-islamabad',
    title: 'Overseas Pakistanis Buying Property or Building a House in Islamabad: A Step-by-Step Guide',
    excerpt:
      'How to buy a plot or house, or build one, in Islamabad and Rawalpindi while living abroad — power of attorney, verifying from a distance, sending money through banks, taxes and filer status, and how to keep control of construction you cannot visit.',
    keyTakeaway:
      'Overseas Pakistanis can buy and build in Islamabad without travelling for every step: appoint a trusted representative through a registered power of attorney, verify the society, plot and seller directly with the society office, send money only through formal banking channels into the seller’s or builder’s verified account against written receipts, and choose a builder who gives you real visibility — live site cameras, stage-by-stage updates and copies of every document.',
    date: 'September 24, 2026',
    isoDate: '2026-09-24',
    author: 'Ch. Muhammad Abdullah',
    category: 'Buying Guides',
    tags: ['overseas pakistanis property islamabad', 'buy plot from abroad pakistan', 'build house in pakistan from abroad', 'power of attorney property pakistan', 'nicop property purchase'],
    image: '/assets/stock/villa-exterior.webp',
    readTime: '12 min read',
    content: `
For Pakistanis working in the Gulf, the UK, Europe or North America, a house or plot back home is often the biggest financial decision they make — and the one they can least supervise in person. Most horror stories come from the same few gaps: an unverified seller, money sent through informal channels, or construction that nobody independent was watching.

This guide sets out a process that closes those gaps, whether you are buying a plot, buying a house or building one.

## Step 1: decide what you are buying for

Investment, a family home for parents, or a house to return to — the answer changes where you should buy and what matters. A home for family soon needs possession, completed infrastructure and nearby schools and hospitals. An investment can sit in a developing, approved society. Our [plot versus house investment guide](/blog/plot-vs-house-investment-islamabad) and [buyer’s guide to real estate in Islamabad](/blog/real-estate-islamabad-buyers-guide) explain the trade-offs.

## Step 2: appoint a representative you can hold accountable

You will need someone on the ground to visit the society, sign documents and attend the transfer. This is done through a **power of attorney (POA)**:

- Execute it before a Pakistani embassy or consulate (or as otherwise legally required where you live), and register it in Pakistan as required.
- Make it **specific** — name the property and the acts the attorney may perform (buy, sign the transfer, pay dues) — rather than a general POA over all your affairs.
- Choose someone whose interests are aligned with yours, and keep copies of everything they sign.

Many families use a relative. Others prefer a professional firm that handles transfers and documentation and is accountable under a written agreement.

## Step 3: verify from a distance

The same checks apply as for a local buyer — they just need to be done by someone you trust, with evidence sent to you:

1. **Society approval** — confirm the society and phase on the CDA or RDA list. Our guide to [checking whether a housing society is legal](/blog/check-housing-society-legal-cda-rda) explains how.
2. **The plot or file** — confirm at the society office that it exists, is registered to the seller, and has no dispute or dues.
3. **The seller** — the CNIC must match the society record.
4. **Photos and video** of the plot, with the plot number visible, and of development in the block.

Ask for copies of the society’s verification letters, not verbal assurances.

## Step 4: send money only through banks

- Send funds through formal banking channels from your own account, including Roshan Digital Accounts or remittance into a Pakistani account in your name.
- Pay the seller or builder into an **account in their verified name** — never cash, never a third party’s account.
- Get a **written receipt** for every payment that names the property and the purpose.

Formal remittance also creates the paper trail you will need for tax and for any future sale.

## Step 5: understand taxes and filer status

FBR advance tax on purchase (section 236K) and on sale (236C) depends on your status on the Active Taxpayers List, and non-filers pay substantially more. Overseas Pakistanis can file returns in Pakistan; check your status before the transaction. Our [transfer taxes guide](/blog/property-transfer-taxes-pakistan-236k-236c) and [Transfer Taxes & Fees calculator](/tools/transfer-costs) explain each charge.

## Step 6: if you are building, insist on visibility

Construction you cannot visit is where most overseas clients lose money: substituted materials, stages billed before they are done, and budgets that drift. Before you sign with a builder, ask:

- **Is the rate fixed per square foot, in writing?** Check it with the [Construction Cost calculator](/tools/construction-cost) and our [construction cost guide](/blog/house-construction-cost-islamabad-per-sq-ft).
- **Are payments tied to completed stages** — foundation, each slab, brickwork, plaster, finishing? See [construction stages and timelines](/blog/construction-stages-timeline-pakistan).
- **Can you see the site?** Live cameras and dated photo updates let you check progress yourself.
- **Will you get the documents?** Approved map, NOCs, receipts, material invoices and test reports.
- **Who is responsible for each stage**, and how do you reach them?

## Step 7: complete the transfer properly

Your attorney attends the society office with the seller, pays the transfer fee and taxes in the correct names, and collects the transfer letter or allotment in your name. Ask for scanned copies the same day and the originals by courier or on your next visit.

## How Alammana works with overseas clients

We build houses in Faisal Hills on published block-wise rates and handle society transfers, approvals and construction documentation end to end, including acting under a power of attorney. Clients get 24/7 live camera access to their site and a private portal showing stages completed, work in progress, materials used and legal documents. See our [overseas page](/overseas) and [construction rates](/payment-plans).
`,
    faqs: [
      { q: 'Can overseas Pakistanis buy property in Islamabad?', a: 'Yes. They can buy and build through a representative holding a registered, specific power of attorney, verify documents with the society, and pay through formal banking channels.' },
      { q: 'Do I need to travel to Pakistan to buy a plot?', a: 'Not necessarily. A representative with a registered power of attorney can complete verification and the transfer on your behalf.' },
      { q: 'How should I send money for a property purchase in Pakistan?', a: 'Only through formal banking channels from your own account, into an account in the verified name of the seller or builder, against written receipts.' },
      { q: 'Do overseas Pakistanis pay more property tax?', a: 'Rates depend on whether you are on the FBR Active Taxpayers List. Non-filers pay substantially higher withholding tax, so check your status before buying or selling.' },
      { q: 'How can I monitor house construction from abroad?', a: 'Choose a builder with a fixed written rate, stage-linked payments, live site cameras, dated photo updates and copies of all approvals, receipts and invoices.' },
      { q: 'What kind of power of attorney is best for buying property?', a: 'A specific power of attorney naming the property and the acts permitted, executed and registered as required, rather than a general one covering all your affairs.' },
    ],
  },
  {
    id: 'house-construction-contract-checklist-pakistan',
    title: 'House Construction Contract Checklist for Pakistan: 15 Things to Put in Writing Before You Build',
    excerpt:
      'Most construction disputes start with a vague contract. A clause-by-clause checklist for grey structure, finishing and turnkey contracts in Islamabad and Rawalpindi — scope, specifications, rates, stage payments, delays, variations, quality checks and handover.',
    keyTakeaway:
      'A safe house construction contract in Pakistan fixes the covered area and the rate per square foot, lists the exact specifications (steel grade, cement, bricks, concrete mix, finishing items), ties every payment to a completed and checked stage, sets a completion date with a remedy for delay, prices variations in advance, and lists what is excluded. If it is not written down, assume it is not included.',
    date: 'September 24, 2026',
    isoDate: '2026-09-24',
    author: 'Mohsin Ali',
    category: 'Construction',
    tags: ['construction contract pakistan', 'grey structure contract', 'turnkey construction contract', 'contractor agreement islamabad', 'house construction agreement'],
    image: '/assets/stock/architectural-plans.webp',
    readTime: '11 min read',
    content: `
A contractor’s verbal promise is only as good as your memory of it — and theirs. Almost every construction dispute we hear about in the Twin Cities comes down to something that was “understood” but never written: the grade of steel, whether the boundary wall was included, what happens when prices rise, or when the house was supposed to be finished.

Use this checklist whether you are signing a **grey structure**, **finishing** or **turnkey** contract. If you are unsure which suits you, read [grey structure versus fully finished](/blog/gray-structure-vs-fully-finished) first.

## 1. Parties and property

Full names, CNICs and addresses of both parties, and the exact property: society, block, plot number and size. If the contractor is a company, its registered details and who signs for it.

## 2. Type of contract

- **Labour only** — you buy materials; the contractor supplies labour. Cheaper on paper, but you carry all price and quality risk for materials.
- **Grey structure with materials** — contractor supplies materials and labour for the shell.
- **Turnkey** — everything to a finished, liveable house.

State which one, clearly.

## 3. Covered area and rate

Write the **covered area in square feet**, floor by floor, and the **rate per square foot**. A lump sum without the area behind it cannot be checked. Our [construction cost guide](/blog/house-construction-cost-islamabad-per-sq-ft) and [Construction Cost calculator](/tools/construction-cost) help you judge whether the rate is reasonable.

## 4. Drawings

Attach the approved architectural drawings and the structural drawings, signed by both parties. The contractor builds to these, not to memory.

## 5. Material specifications

This is the clause that protects quality. Specify:

- **Steel** — grade and approved brands.
- **Cement** — type and approved brands.
- **Bricks** — class, and rejection of under-burnt bricks.
- **Concrete** — mix ratio or strength for foundations, columns and slabs, and curing period.
- **Sand and crush** — source and cleanliness.
- **Waterproofing and damp-proofing** method.

Our guide to [construction materials in Pakistan](/blog/construction-materials-pakistan) lists what to insist on.

## 6. Finishing schedule (for finishing or turnkey)

List every finishing item with a brand, range or price allowance: floor tiles and marble, bathroom fittings, kitchen, doors and frames, windows, wardrobes, electrical wiring and switches, paint, ceilings and exterior finish. “Standard quality” means whatever the contractor wants it to mean.

## 7. What is included and excluded

State explicitly whether the contract covers: excavation and backfill, boundary wall and gate, water tanks, septic or sewerage connection, electrical and gas meters, map approval fees, water and electricity during construction, site security, and debris removal.

## 8. Stage payments

Tie each payment to a completed, checked stage — never to dates alone. A typical sequence: mobilisation advance (keep it modest), foundation, ground-floor slab, first-floor slab, brickwork, plaster, and then finishing milestones. See [construction stages and timelines](/blog/construction-stages-timeline-pakistan) for what each stage involves.

## 9. Retention

Hold back a small percentage of each payment until handover and the defects period ends. It is the most effective incentive to fix defects.

## 10. Timeline and delay

A start date, a completion date, and what happens if the work is late — for example a fixed deduction per week of delay beyond a grace period — together with legitimate reasons for extension (approvals held up, owner-requested changes).

## 11. Price changes

Who carries the risk if steel or cement prices rise during the job? A fixed-rate contract puts it on the contractor; a price-variation clause shares it by an agreed formula. Decide and write it down.

## 12. Variations

Any change you ask for — an extra room, better tiles — must be priced in writing and signed **before** the work is done. Otherwise the final bill becomes a negotiation.

## 13. Quality checks and supervision

Your right to inspect at any time, to have steel checked before concrete is poured, to require concrete cube tests where specified, and to reject work that does not meet the specification. If you are abroad, specify photo and video updates — our [guide for overseas Pakistanis](/blog/overseas-pakistanis-buy-property-islamabad) covers remote supervision.

## 14. Handover and defects

The handover inspection, the list of documents handed over (completion drawings, warranties, invoices), and a **defects liability period** during which the contractor fixes faults at their own cost.

## 15. Disputes and termination

How disputes are resolved (for example, mediation then arbitration), when either party can terminate, and how work done so far is valued if they do.

## Before you sign

- Compare at least two quotes on the **same area and specification**.
- Visit a house the contractor has finished and speak to that owner.
- Check that approvals are in place — our [approved map and NOC guide](/blog/approved-map-noc-guide) explains which.
- Budget the costs outside the contract, such as approvals and connections.

Alammana builds in Faisal Hills on [published fixed rates](/payment-plans) with written specifications, stage-linked payments and live site cameras for every client.
`,
    faqs: [
      { q: 'What should a house construction contract include in Pakistan?', a: 'Parties and property, contract type, covered area and rate per square foot, drawings, material specifications, finishing schedule, inclusions and exclusions, stage payments, retention, timeline and delay remedies, price-change terms, variations, quality checks, handover and defects, and dispute terms.' },
      { q: 'What is a turnkey construction contract?', a: 'A contract where the builder delivers a finished, liveable house for an agreed rate, covering both grey structure and finishing.' },
      { q: 'How should construction payments be scheduled?', a: 'Against completed and checked stages — foundation, each slab, brickwork, plaster and finishing milestones — with a modest advance and a small retention held until the defects period ends.' },
      { q: 'Who pays if material prices rise during construction?', a: 'Whoever the contract says. A fixed-rate contract puts the risk on the contractor; a price-variation clause shares it. Agree it in writing before starting.' },
      { q: 'What is a defects liability period?', a: 'A period after handover during which the contractor must fix construction defects at their own cost, usually backed by a retention amount.' },
    ],
  },
  {
    id: 'rent-out-house-islamabad-landlord-guide',
    title: 'Renting Out a House in Islamabad and Rawalpindi: The Landlord’s Guide to Rent, Tenants and Agreements',
    excerpt:
      'How to set the right rent, screen tenants, register them with the police, write a tenancy agreement that protects you, handle the security deposit and increases, and work out what the house really earns after costs.',
    keyTakeaway:
      'To rent out a house safely in Islamabad or Rawalpindi: set rent from comparable houses nearby, verify the tenant’s identity and references, register the tenant with the local police as required, sign a written tenancy agreement on stamp paper covering rent, deposit, yearly increase, notice period and maintenance, and take the deposit and rent through a bank. Judge the house by its net yield — rent after empty months and upkeep — not the advertised rent.',
    date: 'September 24, 2026',
    isoDate: '2026-09-24',
    author: 'Haseeb Bhatti',
    category: 'Investment',
    tags: ['rent out house islamabad', 'tenancy agreement pakistan', 'tenant registration islamabad police', 'house rent rawalpindi', 'landlord guide pakistan', 'rental agreement format'],
    image: '/assets/stock/modern-house-2.webp',
    readTime: '10 min read',
    content: `
A house that earns rent every month is one of the most dependable investments in the Twin Cities — when it is let to the right tenant on the right terms. When it is not, it can mean months of unpaid rent, damage, and a difficult eviction. Most of that risk is removed by a few habits at the start of every tenancy.

## Setting the rent

Rent follows three things: **location** (commute, schools, markets), **condition** (how recently the house was built or refurbished) and **what else is available** nearby. Look at houses of the same size in the same society or sector, and adjust for:

- Separate upper and lower portions — often let separately, which can raise total rent.
- Parking, a lawn, gas availability and backup power or solar.
- Furnishing, if any.

Pricing slightly below comparable houses usually lets faster, and an empty month costs more than a small discount.

## What the house really earns

**Net yield = (rent × months actually let − yearly costs) ÷ house value.**

Costs include repairs and repainting between tenants, society maintenance charges, property tax and any agent’s fee. Use the [Rental Yield calculator](/tools/rent-yield) to compare the net return with other uses of the money, and our [plot versus house investment guide](/blog/plot-vs-house-investment-islamabad) for the bigger picture.

## Screening tenants

- **Identity** — copy of the CNIC (or passport and visa for foreign nationals), and verify it.
- **Employment or business** — employer letter, or business details.
- **References** — the previous landlord, if possible.
- **Family size and use** — residential use only unless you agree otherwise.

Meet the tenant yourself, even if an agent found them.

## Register the tenant with the police

In Islamabad and in Punjab, landlords are required to register tenants with the local police, usually through a tenant registration form with copies of the tenant’s and owner’s identity documents — many areas now allow this online or at a police facilitation centre. Registration protects you and is often requested by the society as well. Do it before handing over the keys.

## The tenancy agreement

Write it on stamp paper of the appropriate value and have it signed and witnessed. Include:

1. **Parties** — names, CNICs, addresses.
2. **Property** — address, portion (upper, lower or whole) and fixtures included.
3. **Rent** — amount, due date, and payment method (bank transfer).
4. **Security deposit** — amount, and when and how it is returned, with deductions only for unpaid dues and damage beyond normal wear.
5. **Advance rent**, if any.
6. **Term** — commonly eleven months or one year.
7. **Yearly increase** — a fixed percentage on renewal, agreed now.
8. **Utilities** — who pays electricity, gas, water and society charges, and that bills must be cleared before leaving.
9. **Maintenance** — who pays for minor repairs, and that major repairs are the landlord’s.
10. **Use** — residential only; no subletting without written permission.
11. **Notice period** — for either side to end the tenancy.
12. **Inspection** — the landlord’s right to inspect with notice.
13. **Handover condition** — attach dated photos of the house at move-in.

## Money through the bank

Take the deposit and rent by bank transfer, and give a receipt for any other payment. It creates a record for both sides and for tax.

## Keeping a good tenant

Repair things promptly, keep increases to what was agreed, and give notice before inspections. A tenant who stays for years is worth more than a slightly higher rent from someone new.

## Building to rent

If you are building a house to let, designing the upper and lower floors as self-contained portions — each with its own entrance, kitchen and meters where possible — usually earns more than letting it as one house. Our [5 marla versus 10 marla guide](/blog/5-marla-vs-10-marla-house) and [construction cost guide](/blog/house-construction-cost-islamabad-per-sq-ft) help you plan it, and our [Faisal Hills construction rates](/payment-plans) are published by block.
`,
    faqs: [
      { q: 'Is tenant registration with the police required in Islamabad?', a: 'Yes. Landlords in Islamabad and Punjab are required to register tenants with the local police, usually with copies of both parties’ identity documents; many areas allow this online or at a police facilitation centre.' },
      { q: 'What should a tenancy agreement include in Pakistan?', a: 'Parties, property, rent and due date, security deposit and refund terms, term, yearly increase, utilities, maintenance, permitted use, notice period, inspection rights and the handover condition.' },
      { q: 'How much security deposit is normal for a house in Islamabad?', a: 'It is agreed between landlord and tenant and is commonly a few months’ rent. Write the amount and the refund conditions in the agreement.' },
      { q: 'How much can rent be increased each year?', a: 'Whatever the agreement says. Agree a fixed yearly increase at the start so renewals are straightforward.' },
      { q: 'How do I calculate the return on a rented house?', a: 'Net yield = (rent × months let − yearly costs) ÷ house value. The Rental Yield calculator does it for you.' },
    ],
  },
];
