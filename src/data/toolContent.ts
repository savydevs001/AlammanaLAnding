/**
 * Long-form, crawlable content for every calculator under /tools.
 *
 * The calculators themselves are client components; search engines and AI
 * answer engines need plain server-rendered text to understand and quote a
 * page. Each entry renders below the tool as:
 *   - `answer`  — a standalone 2–3 sentence answer (featured snippet / AI quote)
 *   - `body`    — markdown explainer: how the calculation works, what to watch
 *   - `steps`   — HowTo schema + an ordered list
 *   - `faqs`    — FAQPage schema + an accordion
 *   - `related` — internal links to other tools and to articles
 *
 * Same writing rules as data/blogs.ts: never invent a statistic, date any
 * price, headings with ## / ###, no markdown tables.
 */
export interface ToolContent {
  answer: string;
  body: string;
  steps: string[];
  faqs: { q: string; a: string }[];
  relatedTools: string[];
  relatedBlogs: string[];
}

export const toolContent: Record<string, ToolContent> = {
  'construction-cost': {
    answer:
      'House construction in Pakistan is priced per square foot of covered area — the total floor space you build across all storeys — not per marla of plot. Construction cost = plot area × coverage per floor × number of floors × (grey structure rate + finishing rate). For a 5 marla double-storey house at 85% coverage that is about 1,912 sq ft of covered area.',
    body: `
## How this construction cost calculator works

The calculator follows the way contractors and developers in Islamabad, Rawalpindi and Faisal Hills actually quote a house:

1. **Plot area** — marla × 225 sq ft (the marla used by housing societies in the Twin Cities).
2. **Covered area per floor** — plot area × the share of the plot you build on. Most houses cover 75–85% of the plot on the ground floor after the lawn, car porch and setbacks.
3. **Total covered area** — covered area per floor × the number of floors (ground + upper floors, plus a basement if you add one).
4. **Grey structure cost** — covered area × grey rate per sq ft. This is the complete shell: excavation, foundation, columns and beams, brickwork, roof slabs, plaster, and the concealed electrical and plumbing pipes.
5. **Finishing cost** — covered area × finishing rate per sq ft. Tiles and marble, woodwork, doors and windows, kitchen, bathrooms, paint, electrical fittings and fixtures.

The three quality levels (economy, standard and luxury) set sensible starting rates, and you can overwrite both rates with a quote you have received.

## What is not included

Land, the boundary wall, society map approval and NOC fees, utility connection charges (electricity, gas and water), and furniture are all outside the construction figure. Budget them separately — they are small individually but add up.

## Why grey structure and finishing are priced separately

Grey structure cost is driven by engineering — steel, cement and the structural drawings — so it varies little between builders who build properly. Finishing cost is driven almost entirely by your choices: local tiles versus imported, solid wood versus MDF, basic sanitary ware versus premium. That is why finishing is often as expensive as the grey structure, or more.

## Turning the estimate into a real quote

A calculator gives you a defensible budget; a real quote also needs the approved map, soil conditions and your finishing schedule. Alammana publishes fixed block-wise rates for Faisal Hills on the [construction rates page](/payment-plans), so the number is known before you commit.
`,
    steps: [
      'Enter your plot size in marla (use the Area Converter if you only know square feet).',
      'Set how much of the plot each floor covers — 80–85% is typical for 5 to 10 marla houses.',
      'Choose the number of floors and whether you want a basement.',
      'Pick a quality level, or type in the grey and finishing rates from a quote you have.',
      'Read the total, the grey structure and finishing split, and the covered area.',
    ],
    faqs: [
      { q: 'How much does it cost to build a 5 marla house in Islamabad?', a: 'Multiply the covered area by the rate per square foot. A double-storey 5 marla house at 85% coverage has roughly 1,912 sq ft of covered area; at the calculator’s standard rates (September 2026, indicative) that is about PKR 1 crore for grey structure plus finishing, excluding land. Use the calculator with a current quote for your exact figure.' },
      { q: 'What is included in grey structure?', a: 'The complete shell: excavation, foundation, RCC columns, beams and slabs, brickwork, plaster, and concealed electrical conduits and plumbing lines. Doors, windows, tiles, fittings and paint belong to finishing.' },
      { q: 'Is construction priced per marla or per square foot?', a: 'Per square foot of covered area. A per-marla quote hides how much floor area was assumed, so it cannot be compared or verified.' },
      { q: 'How much does a 10 marla double-storey house cost to build?', a: 'A 10 marla plot is 2,250 sq ft (225 sq ft marla). At 80% coverage over two floors that is 3,600 sq ft of covered area; multiply by the grey plus finishing rate you are quoted. Enter 10 marla in the calculator to see it at current indicative rates.' },
      { q: 'Does the cost include the boundary wall and approvals?', a: 'No. Boundary wall, map approval and NOC fees, and utility connections are separate. Keep a contingency of a few percent for them.' },
    ],
    relatedTools: ['materials', 'buildable-area', 'buy-vs-build', 'area'],
    relatedBlogs: ['house-construction-cost-faisal-hills', 'gray-structure-vs-fully-finished', 'construction-stages-timeline-pakistan'],
  },

  materials: {
    answer:
      'Grey-structure materials are estimated per square foot of covered area. Typical thumb-rules used by site engineers are about 0.4 bags of cement, 3.5–4 kg of steel, 22–25 bricks, 1.8 cft of sand and 1.25 cft of crush per sq ft; multiply each by today’s market price to get the material budget.',
    body: `
## How the material estimate is calculated

The calculator multiplies your **covered area** by standard per-square-foot quantities for a framed RCC house, then by the prices you enter:

- **Cement** — bags of 50 kg for foundations, columns, slabs, brickwork mortar and plaster.
- **Steel** — reinforcement bars for foundations, columns, beams and slabs.
- **Bricks** — walls and partitions.
- **Sand** — mortar, plaster and concrete.
- **Crush (bajri)** — the coarse aggregate in concrete.

Material prices move every few weeks in Pakistan, especially steel and cement, so every price field is editable. The defaults are sample rates dated on the page.

## Why quantities differ from site to site

The real quantities come from the structural drawings. Soil that needs a deeper foundation, larger spans, a basement or extra storeys all add steel and concrete. Treat this estimate as a budgeting guide and a way to sanity-check a contractor’s bill of quantities — not as a replacement for one.

## Checking what arrives on site

Quantity is only half the story; quality matters more. Our guide to [construction materials in Pakistan](/blog/construction-materials-pakistan) explains what to insist on and how to check cement, steel grades and bricks when they are delivered.
`,
    steps: [
      'Enter the covered area in square feet (the Construction Cost tool calculates it).',
      'Type in today’s prices for cement, steel, bricks, sand and crush from your supplier.',
      'Read the quantity and cost for each material and the total material budget.',
    ],
    faqs: [
      { q: 'How many cement bags are needed for a 5 marla house?', a: 'At the common thumb-rule of about 0.4 bags per sq ft of covered area, a double-storey 5 marla house of roughly 1,900 sq ft needs in the region of 800 bags for the grey structure. The structural drawings give the exact figure.' },
      { q: 'How much steel is used per square foot in a house?', a: 'Residential framed structures typically use about 3.5 to 4 kg of steel per square foot of covered area. Longer spans, basements and more storeys increase it.' },
      { q: 'How many bricks are needed per square foot of construction?', a: 'Roughly 22 to 25 bricks per square foot of covered area for a typical house, depending on wall thickness and how many partitions the design has.' },
      { q: 'Are the material prices current?', a: 'They are sample rates dated on the page. Steel and cement prices change often, so enter the rate your supplier quotes today.' },
    ],
    relatedTools: ['construction-cost', 'buildable-area'],
    relatedBlogs: ['construction-materials-pakistan', 'house-construction-cost-faisal-hills'],
  },

  'buildable-area': {
    answer:
      'Buildable area is what remains of your plot after the front, rear and side setbacks required by the society or development authority, capped by the maximum ground coverage. A 5 marla (25 × 45 ft) plot with a 5 ft front and 3 ft rear setback has a 925 sq ft footprint, or 1,850 sq ft over ground plus one floor.',
    body: `
## How buildable area is worked out

1. **Plot area** — front width × depth.
2. **Footprint after setbacks** — (width − two side setbacks) × (depth − front setback − rear setback).
3. **Coverage cap** — many byelaws also limit ground coverage to a percentage of the plot; the smaller of the two figures is your footprint.
4. **Total covered area** — footprint × number of floors.

The page tells you whether your footprint is limited by the setbacks or by the coverage cap, so you know which rule to discuss with your architect.

## Setbacks are set by your society

Each housing society and development authority (RDA, CDA and others) publishes its own building byelaws. The presets here are typical values for common plot sizes; replace them with your society’s official figures before finalising a design. Our [approved maps and NOC guide](/blog/approved-map-noc-guide) explains how map approval works.

## 225 or 272.25 sq ft marla?

Societies in Islamabad and Rawalpindi generally use a 225 sq ft marla, while land revenue records often use 272.25 sq ft. The toggle lets you see your plot either way.
`,
    steps: [
      'Choose a plot preset or type your plot’s front width and depth in feet.',
      'Enter the front, rear and side setbacks from your society’s byelaws.',
      'Set the maximum ground coverage and the number of floors.',
      'Read the footprint, ground coverage and total covered area.',
    ],
    faqs: [
      { q: 'How much can I build on a 5 marla plot?', a: 'On a typical 25 × 45 ft 5 marla plot with a 5 ft front and 3 ft rear setback, the footprint is about 925 sq ft, or roughly 1,850 sq ft across ground plus one floor. Your society’s byelaws decide the final figure.' },
      { q: 'What are setbacks in house construction?', a: 'Setbacks are the minimum open distances you must leave between your building and the plot boundary at the front, rear and sides. They are set by the society or development authority and checked during map approval.' },
      { q: 'Does a 10 marla plot need side setbacks?', a: 'Many byelaws start requiring side setbacks from around 10 marla upwards, but it varies by society. Check the approved byelaws for your block.' },
      { q: 'Is the mumty (stair tower) counted in covered area?', a: 'It is usually treated separately and limited in size by byelaws. This calculator does not include it.' },
    ],
    relatedTools: ['construction-cost', 'area', 'materials'],
    relatedBlogs: ['approved-map-noc-guide', 'house-construction-cost-faisal-hills'],
  },

  area: {
    answer:
      'In Islamabad and Rawalpindi housing societies, 1 marla = 225 sq ft and 1 kanal = 20 marla = 4,500 sq ft. Older land revenue records use 1 marla = 272.25 sq ft (1 kanal = 5,445 sq ft). 1 square metre = 10.764 sq ft and 1 acre = 43,560 sq ft.',
    body: `
## Marla, kanal and square feet

Pakistan’s land units are not fully standardised, which is why the same “5 marla” plot can mean different areas in different documents.

- **225 sq ft marla** — used by most private housing societies in the Twin Cities, including Faisal Hills. A 5 marla plot is 1,125 sq ft; a 10 marla plot is 2,250 sq ft; 1 kanal is 4,500 sq ft.
- **272.25 sq ft marla** — the traditional revenue measure (based on 30.25 square yards). A 5 marla plot is 1,361 sq ft; 1 kanal is 5,445 sq ft.

Always confirm which marla your allotment letter or transfer documents use before comparing prices per marla between societies.

## Other units

- 1 kanal = 20 marla
- 1 square yard = 9 sq ft
- 1 square metre = 10.7639 sq ft
- 1 acre = 43,560 sq ft (8 kanal in the 272.25 system)

Use the result with the [Construction Cost](/tools/construction-cost) or [Buildable Area](/tools/buildable-area) tools.
`,
    steps: [
      'Type the area you know.',
      'Choose its unit — marla, kanal, square feet, square metres, square yards or acres.',
      'Choose the marla standard your documents use.',
      'Read the area in every other unit.',
    ],
    faqs: [
      { q: 'How many square feet are in 1 marla?', a: 'In Islamabad and Rawalpindi housing societies, 225 sq ft. In older revenue records, 272.25 sq ft.' },
      { q: 'How many marla are in 1 kanal?', a: 'Twenty. With a 225 sq ft marla, 1 kanal is 4,500 sq ft.' },
      { q: 'How big is a 10 marla plot?', a: '2,250 sq ft with a 225 sq ft marla (often 35 × 65 ft), or 2,722.5 sq ft with a 272.25 sq ft marla.' },
      { q: 'How many square metres is 5 marla?', a: 'About 104.5 square metres with a 225 sq ft marla.' },
    ],
    relatedTools: ['buildable-area', 'construction-cost'],
    relatedBlogs: ['buying-plot-on-installments-pakistan', 'investing-in-faisal-hills'],
  },

  installments: {
    answer:
      'An instalment plan splits a property price into a down payment, an optional amount due on possession, and equal monthly or quarterly instalments. Instalment = (price − down payment − possession amount) ÷ number of instalments. PKR 50 lac with 25% down over 36 months is PKR 12.5 lac down and about PKR 1.04 lac a month.',
    body: `
## How an instalment plan is calculated

Developer and society plans in Pakistan are usually **interest-free on paper**: the price is fixed and simply divided up.

1. **Down payment** — a percentage of the price paid at booking.
2. **Possession / balloon payment** — some plans hold back a percentage until possession or handover.
3. **Instalments** — the balance divided equally over the plan length, monthly or quarterly.

## What to check before you sign

- Whether the instalment price is higher than the cash price — that difference is the plan’s real cost of credit.
- Late-payment surcharges and what happens to your file if you miss instalments.
- Whether development charges, possession charges or transfer fees are extra.
- Whether the society has the approvals it claims. Our guide to [buying a plot on instalments](/blog/buying-plot-on-installments-pakistan) walks through the checks.

For houses, Alammana offers milestone-based construction payment plans in Faisal Hills — see the [payment plans page](/payment-plans) and our guide to [buying a house on instalments in Islamabad](/blog/house-on-installments-islamabad).
`,
    steps: [
      'Enter the total price.',
      'Set the down payment percentage and any amount due on possession.',
      'Choose the plan length in months and monthly or quarterly payments.',
      'Read the down payment, possession amount and each instalment.',
    ],
    faqs: [
      { q: 'How are property instalments calculated in Pakistan?', a: 'Subtract the down payment and any possession amount from the price, then divide the balance equally by the number of instalments. Most developer plans do not add interest, but the instalment price may be higher than the cash price.' },
      { q: 'What is a balloon or possession payment?', a: 'A lump sum due when the property is handed over, instead of spreading it across the instalments. It lowers the monthly amount but must be saved for.' },
      { q: 'Can I buy a house in Islamabad on instalments?', a: 'Yes. Developers and some builders offer milestone or monthly plans on houses and apartments. Check approvals, the cash-versus-instalment price and late-payment terms first.' },
      { q: 'Monthly or quarterly instalments — which is better?', a: 'The total is the same. Monthly suits salaried buyers; quarterly suits business income. Choose the one you can pay on time.' },
    ],
    relatedTools: ['affordability', 'home-finance', 'transfer-costs'],
    relatedBlogs: ['house-on-installments-islamabad', 'buying-plot-on-installments-pakistan'],
  },

  'home-finance': {
    answer:
      'To compare home-finance options, look past the monthly EMI to present worth: every payment discounted to today at the return your money could earn elsewhere. The EMI on a reducing-balance loan is P × r × (1+r)^n ÷ ((1+r)^n − 1); a PKR 1.2 crore loan over 20 years at 6% is about PKR 85,972 a month.',
    body: `
## What the decision engine compares

For up to three options — for example a government housing-finance scheme, a commercial bank loan and a developer instalment plan — it calculates:

- **Monthly EMI** using the standard reducing-balance formula, and whether it fits within your chosen share of income.
- **Total interest** paid over the life of the loan.
- **Up-front cash** — down payment plus processing fees.
- **Present worth** at your MARR (minimum acceptable rate of return). Lower is cheaper in real terms.
- **Annual worth** — the present worth spread evenly over the tenure, so a 3-year plan and a 20-year loan can be compared fairly.

## Prepay or invest a windfall?

If you receive a lump sum part-way through the loan, you can clear part of it or invest the money. The rule is simple: **prepaying earns you the loan’s interest rate, risk-free**. Investing only wins if you can reliably earn more than that rate after tax. The tool shows the balance at that point, interest saved and months cut, against the gain if invested.

## Before you apply

Banks check your income, existing loans and the property’s legal status. Our guide to [buying a house on instalments in Islamabad](/blog/house-on-installments-islamabad) covers what lenders and developers ask for.
`,
    steps: [
      'Enter the property price, your monthly income and the maximum share of income you want for the EMI.',
      'Set your MARR — what your money safely earns elsewhere.',
      'For each financing option, enter the down payment, tenure, interest rate and fees.',
      'Compare EMI, total interest, present worth and annual worth; the cheapest overall is highlighted.',
      'Optionally enter a windfall to see whether prepaying or investing it wins.',
    ],
    faqs: [
      { q: 'How is EMI calculated for a home loan in Pakistan?', a: 'EMI = P × r × (1 + r)^n ÷ ((1 + r)^n − 1), where P is the loan, r the monthly rate (annual rate ÷ 12) and n the number of months.' },
      { q: 'What is the EMI on a PKR 1 crore home loan?', a: 'It depends on the rate and tenure. Enter 1 crore as the loan amount (price minus down payment) with your bank’s rate and tenure in the calculator for the exact figure.' },
      { q: 'Should I prepay my home loan or invest?', a: 'Prepaying returns the loan’s interest rate with no risk. Invest only if you can reliably earn more than that rate after tax.' },
      { q: 'What share of income should go to a home loan EMI?', a: 'Banks commonly cap total EMIs at around 40–50% of income. Staying well below that leaves room for emergencies.' },
      { q: 'What is present worth and why does it matter?', a: 'It converts every future payment into today’s money at your MARR, so options with different rates, fees and tenures can be compared on one number.' },
    ],
    relatedTools: ['affordability', 'installments', 'transfer-costs'],
    relatedBlogs: ['house-on-installments-islamabad'],
  },

  affordability: {
    answer:
      'The property price you can afford is the largest loan your safe monthly EMI can service plus the savings you can put down. With a PKR 2.5 lac monthly income and a 40% EMI limit, the maximum EMI is PKR 1 lac; the calculator converts that into a loan amount at your rate and tenure and adds your savings, less a cash reserve.',
    body: `
## How affordability is worked out

1. **Maximum EMI** = monthly income × the share you are comfortable spending − existing EMIs.
2. **Maximum loan** = the loan that EMI repays at your interest rate and tenure.
3. **Usable savings** = savings minus the reserve you keep for emergencies.
4. **Affordable price** = maximum loan + usable savings.

## Remember the costs on top of the price

Transfer taxes, stamp duty, society transfer fees and commission come on top of the purchase price — use the [Transfer Taxes & Fees](/tools/transfer-costs) tool to estimate them. If you are building, also budget for approvals and utility connections.

## Buying without a loan

The “cash only” figure shows what you can buy outright today. An [instalment plan](/tools/installments) from a developer can bridge the gap without a bank.
`,
    steps: [
      'Enter your monthly household income and any existing EMIs.',
      'Choose the maximum share of income for the new EMI.',
      'Enter your savings and how much of them to keep in reserve.',
      'Enter the financing rate and tenure you expect.',
      'Read the affordable price with finance and with cash only.',
    ],
    faqs: [
      { q: 'How much house can I afford in Islamabad on my salary?', a: 'Work out the EMI you can comfortably pay (often 30–40% of income), convert it into a loan amount at your bank’s rate and tenure, and add the savings you can put down. The calculator does this in one step.' },
      { q: 'How much down payment do I need?', a: 'Banks and developers commonly ask for 15–30% down. Keep extra cash for transfer taxes and fees, which come on top.' },
      { q: 'Should I keep savings in reserve?', a: 'Yes — keeping a few months of expenses aside protects you from missing instalments if income is interrupted.' },
    ],
    relatedTools: ['home-finance', 'installments', 'transfer-costs'],
    relatedBlogs: ['house-on-installments-islamabad', 'buying-plot-on-installments-pakistan'],
  },

  'transfer-costs': {
    answer:
      'When property changes hands in Punjab, the buyer typically pays FBR advance tax (section 236K), stamp duty, and in some cases capital value tax (CVT), plus the society’s transfer fee; the seller pays FBR advance tax under section 236C. Rates depend on filer status and change with each budget, so confirm current rates before paying.',
    body: `
## The main costs on a property transfer

**Paid by the buyer**
- **Advance tax under section 236K** — collected by FBR on purchase; the rate depends on the property value band and whether the buyer is on the Active Taxpayers List (filer).
- **Stamp duty** — a provincial levy on the transfer deed.
- **Capital value tax (CVT)** — a provincial tax that applies in some cases.
- **Society transfer fee** — set by each housing society.
- **Agent commission** — commonly around 1% from each side in the Twin Cities, agreed in advance.

**Paid by the seller**
- **Advance tax under section 236C** — collected on sale, again depending on value and filer status.
- **Capital gains tax** may also apply depending on the holding period.

## Why the rates here are editable

Federal withholding rates are revised in the budget each year, and provincial stamp duty and CVT change too. The default percentages are placeholders so you can see the structure of the cost — replace them with the current FBR and Punjab rates, or ask us for today’s figures on a specific transfer.

## Filer status matters

Non-filers usually pay substantially higher withholding tax. If you are buying or selling, check your status on the FBR Active Taxpayers List first.
`,
    steps: [
      'Enter the property value used for tax (FBR or DC valuation).',
      'Enter the current buyer and seller advance-tax rates, stamp duty and CVT.',
      'Add the society transfer fee and any agent commission.',
      'Read what the buyer pays on top and what the seller pays.',
    ],
    faqs: [
      { q: 'What taxes does a buyer pay on property in Pakistan?', a: 'Typically FBR advance tax under section 236K, provincial stamp duty and, where applicable, CVT, plus the society’s transfer fee. Rates depend on value and filer status.' },
      { q: 'What is section 236C?', a: 'The FBR advance tax collected from the seller when immovable property is sold or transferred.' },
      { q: 'Do non-filers pay more tax on property?', a: 'Yes. Withholding rates for people not on the Active Taxpayers List are considerably higher, so check your filer status before a transaction.' },
      { q: 'Who pays the society transfer fee?', a: 'Usually the buyer, but it can be negotiated. Agree it in writing before the transfer.' },
    ],
    relatedTools: ['affordability', 'installments', 'investment'],
    relatedBlogs: ['faisal-hills-property-dealers-guide', 'buying-plot-on-installments-pakistan'],
  },

  'buy-vs-build': {
    answer:
      'Building usually costs less than buying a ready house of the same size when you add the plot price, construction (covered area × turnkey rate), approvals and connections, and the rent you pay while building. Buying ready is faster and lets you inspect what you get; building gives you control over quality and layout.',
    body: `
## How the comparison works

**Cost to build** = plot price + covered area × turnkey rate + approvals, boundary and connections + rent paid during construction.

**Cost to buy** = the ready house price.

The difference tells you how much you save (or pay extra) for building.

## Things the numbers do not show

- **Quality you can see** — with a ready house you inspect the finished product, but cannot see what is inside the walls. When you build, you control the steel, cement and wiring.
- **Time and management** — building takes around a year or more and needs supervision, or a builder you trust.
- **A new structure** — a newly built house needs less repair in its early years.

See our comparison of [grey structure and fully finished construction](/blog/gray-structure-vs-fully-finished) and [what building in Faisal Hills costs](/blog/house-construction-cost-faisal-hills).
`,
    steps: [
      'Enter the ready house price you are considering.',
      'Enter the plot price, covered area and turnkey rate per sq ft.',
      'Add the build time, the rent you would pay meanwhile, and approvals/connection costs.',
      'Read which option is cheaper and by how much.',
    ],
    faqs: [
      { q: 'Is it cheaper to build or buy a house in Islamabad?', a: 'Building is often cheaper for the same covered area once you compare like for like, but it takes longer and needs supervision. Enter your actual prices to see the difference.' },
      { q: 'How long does it take to build a house?', a: 'A typical double-storey house takes roughly 10 to 18 months from excavation to handover, depending on size, finishing and approvals.' },
      { q: 'What is a turnkey rate?', a: 'A single per-square-foot rate covering both grey structure and finishing, so the house is handed over ready to live in.' },
    ],
    relatedTools: ['construction-cost', 'affordability', 'investment'],
    relatedBlogs: ['gray-structure-vs-fully-finished', 'construction-stages-timeline-pakistan'],
  },

  investment: {
    answer:
      'A property’s future value = price × (1 + yearly appreciation)^years, and its real value in today’s money divides that by (1 + inflation)^years. PKR 50 lac growing 15% a year is worth about PKR 76 lac after 3 years; with 11% inflation that is about PKR 55.6 lac in today’s money — still ahead of inflation.',
    body: `
## How the return is calculated

- **Future value** = price × (1 + appreciation)^years.
- **Real value** = future value ÷ (1 + inflation)^years — what it is worth in today’s money.
- **Total return** adds rent received and subtracts holding costs (maintenance, taxes, society charges).
- **Return per year** is the compound annual rate that turns your price into that total.

The three scenarios — conservative, base and optimistic — show how much the answer depends on the growth assumption. Past growth does not guarantee future growth.

## What actually drives property value

Development progress, approvals, road access and possession matter more than headline promises. Our honest look at [Faisal Hills as an investment](/blog/investing-in-faisal-hills) and the [ranking of Islamabad–Rawalpindi growth areas](/blog/real-estate-boom-faisal-hills-faisal-town-b17-ranked) explain the drivers.
`,
    steps: [
      'Enter the purchase price and holding period.',
      'Enter expected inflation and your own appreciation estimate.',
      'Add monthly rent and yearly holding costs if any.',
      'Compare the result under conservative, base, optimistic and your own scenario.',
    ],
    faqs: [
      { q: 'Is plot investment in Islamabad profitable?', a: 'It can be when the society is approved, developing and well connected, and you hold long enough. Compare the expected appreciation with inflation — only growth above inflation increases your real wealth.' },
      { q: 'How do I calculate return on a property investment?', a: 'Future value = price × (1 + growth rate)^years. Add rent, subtract costs, and compare the annual rate with what your money earns elsewhere.' },
      { q: 'What is a real return?', a: 'The return after inflation. If a plot grows 12% a year while inflation is 11%, your real gain is only about 1% a year.' },
    ],
    relatedTools: ['rent-yield', 'portfolio', 'partnership'],
    relatedBlogs: ['investing-in-faisal-hills', 'real-estate-boom-faisal-hills-faisal-town-b17-ranked'],
  },

  'rent-yield': {
    answer:
      'Gross rental yield = yearly rent ÷ property price × 100. Net yield subtracts empty months and running costs such as repairs, property tax and society charges. A PKR 2 crore house renting at PKR 90,000 a month has a gross yield of 5.4%.',
    body: `
## Gross and net yield

- **Gross yield** = monthly rent × 12 ÷ price.
- **Net yield** = (monthly rent × months actually let − yearly costs) ÷ price.
- **Payback** = price ÷ net yearly income — how many years of rent repay the price.

Net yield is the figure that matters: a property that sits empty for two months a year or needs regular repairs earns noticeably less than its headline rent suggests.

## Rent versus growth

Residential rent in Pakistan usually returns less per year than capital growth in a developing society, which is why many buyers hold plots rather than houses. A house earns steady rent but needs upkeep. Compare both with the [Investment ROI](/tools/investment) tool.
`,
    steps: [
      'Enter the property price and monthly rent.',
      'Enter how many months a year it is usually empty.',
      'Enter yearly running costs — repairs, tax, society charges.',
      'Read gross yield, net yield and payback years.',
    ],
    faqs: [
      { q: 'What is a good rental yield in Pakistan?', a: 'It varies by city and property type. Compare the net yield with bank deposit rates and with expected capital growth to judge whether renting out is worthwhile.' },
      { q: 'How is rental yield calculated?', a: 'Yearly rent divided by the property price, times 100. Net yield first subtracts vacancy and running costs.' },
    ],
    relatedTools: ['investment', 'portfolio', 'buy-vs-build'],
    relatedBlogs: ['investing-in-faisal-hills'],
  },

  partnership: {
    answer:
      'In a landowner–builder partnership the landowner contributes the plot and a cash partner funds construction; after sale, profit (sale price minus total capital, less tax) is split by capital contributed or an agreed percentage. The analyzer also compares this with the landowner simply selling the plot today after capital gains tax.',
    body: `
## How the partnership is analysed

- **Capital** = plot value (landowner) + cash put in by each side.
- **Gross profit** = expected sale price − total capital.
- **After-tax profit** = gross profit − tax on project profit.
- **Split** = by capital contributed, or an agreed percentage.
- **Selling today** = plot value − capital gains tax on the gain since purchase.
- **Today’s money** — the landowner’s outcome is discounted at your chosen rate over the timeline, so building and selling now are compared fairly.

The fairness check shows each side’s share of capital next to its share of profit. A split far from the capital shares should be justified by something else — expertise, risk, or management effort.

## Before signing a partnership

Put the contribution, timeline, cost overruns, sale authority and exit terms in a written agreement reviewed by a lawyer. Taxes shown are simplified; selling a completed project also carries withholding, transfer and agent costs.
`,
    steps: [
      'Enter the plot’s value today and what it was bought for.',
      'Enter the construction cost, expected sale price and each side’s cash contribution.',
      'Choose a split by capital or an agreed percentage.',
      'Set tax rates, discount rate, inflation and the timeline in months.',
      'Compare the landowner’s outcome with selling today, and the cash partner’s return.',
    ],
    faqs: [
      { q: 'How is profit split in a construction partnership?', a: 'Commonly in proportion to capital contributed, with the plot counted at its current value. Any other split should be agreed in writing.' },
      { q: 'Should I sell my plot or build in partnership?', a: 'Compare the after-tax amount from selling today with your share of the project in today’s money. The analyzer shows the difference.' },
      { q: 'Is capital gains tax charged on selling a plot?', a: 'Capital gains tax may apply to the gain on disposal depending on the holding period and current law. Check the rate that applies to you.' },
    ],
    relatedTools: ['investment', 'construction-cost', 'transfer-costs'],
    relatedBlogs: ['investing-in-faisal-hills', 'find-best-house-developers-islamabad'],
  },

  portfolio: {
    answer:
      'To decide whether to sell or hold a plot, compare its expected yearly growth, minus holding costs, with the return your money could earn elsewhere. If the forward return is below that target, selling and reinvesting is likely better; if it is well above, it may be worth buying more.',
    body: `
## How each plot is ranked

- **Past return** — the compound yearly gain since purchase, after holding costs.
- **Forward return** — expected growth minus holding costs as a share of today’s value.
- **Action** — *Buy more* if the forward return is at least 3 points above your target, *Hold* if it meets the target, *Sell* if it falls short.

The past return tells you how well you bought; only the forward return should decide what to do next.

## What changes a plot’s outlook

Possession, development work, approvals and new road links tend to move prices in stages. See our [ranking of growth areas in Islamabad–Rawalpindi](/blog/real-estate-boom-faisal-hills-faisal-town-b17-ranked).
`,
    steps: [
      'Set your target return — what your money earns elsewhere.',
      'Add each plot with its purchase price, value today, years held, yearly cost and expected growth.',
      'Read the buy more / hold / sell recommendation for each.',
    ],
    faqs: [
      { q: 'When should I sell a plot?', a: 'When its expected future growth, after holding costs, is below what the money could safely earn elsewhere — regardless of how much it has already gained.' },
      { q: 'What holding costs does a plot have?', a: 'Instalments or development charges, society maintenance, property tax and the opportunity cost of the money tied up.' },
    ],
    relatedTools: ['investment', 'rent-yield'],
    relatedBlogs: ['real-estate-boom-faisal-hills-faisal-town-b17-ranked', 'investing-in-faisal-hills'],
  },

  'rooftop-solar': {
    answer:
      'Solar system size (kW) ≈ yearly electricity use ÷ yearly generation per kW. In the Islamabad–Rawalpindi region a well-tilted, south-facing system generates roughly 1,300–1,400 units per kW per year, so a home using 900 units a month needs about 8 kW — around 14 panels of 585 W.',
    body: `
## How the solar planner sizes a system

1. **Yearly use** = monthly units × 12.
2. **Yield per kW** — about 1,360 units per kW per year here at a good tilt, reduced for east, west or north-facing panels and for flat or steep tilts.
3. **System size** = yearly use ÷ yield per kW, rounded up to whole panels.
4. **Roof check** — each panel needs roughly 2.6 m² including spacing, and the planner leaves space for access. If your roof is too small it says how much of your use you can cover.
5. **Savings and payback** = generation × your tariff, compared with the system cost.

## Orientation and tilt

In Pakistan the sun tracks across the southern sky, so south-facing panels tilted around 30° produce the most over a year. East or west-facing arrays lose roughly a tenth. The [Plot Orientation Guide](/tools/plot-orientation) explains how your plot’s facing affects this.

## Design for wind

Rooftop frames must be designed for strong gusts. Poorly anchored locally made frames can fail in storms — ask for a structural check of the mounting.
`,
    steps: [
      'Enter your monthly electricity use in units (kWh) from your bill.',
      'Enter the usable roof area.',
      'Choose which way the panels face and their tilt.',
      'Enter the panel size, your tariff and the system cost per kW.',
      'Read the system size, panel count, generation, savings and payback.',
    ],
    faqs: [
      { q: 'What size solar system do I need for my house?', a: 'Divide your yearly units by about 1,360 (the approximate yearly output of 1 kW in Islamabad–Rawalpindi). A home using 600 units a month needs roughly 5–6 kW.' },
      { q: 'How much roof space does a 10 kW solar system need?', a: 'About 17 panels of 585 W, needing roughly 45 m² (around 480 sq ft) including spacing.' },
      { q: 'Which direction should solar panels face in Pakistan?', a: 'South, tilted at about 30°, for the most yearly generation.' },
      { q: 'How long does solar take to pay back?', a: 'It depends on the system price, your tariff and how much of the output you use. The calculator estimates it from your figures.' },
    ],
    relatedTools: ['plot-orientation', 'construction-cost'],
    relatedBlogs: ['house-construction-cost-faisal-hills'],
  },

  'plot-orientation': {
    answer:
      'In Pakistan (around 33°N) the sun moves across the southern sky, so north-facing and north-east facing plots are usually most comfortable: the front stays cool in summer and the rear lawn gets winter sun. West and south-west facing fronts take the harshest afternoon sun and need shading.',
    body: `
## Why plot facing matters

The side of the house that faces south receives sun for most of the day, strongly in winter when the sun is low. West-facing walls receive the hottest late-afternoon sun in summer. Where your road, lawn, bedrooms and solar panels sit relative to the sun affects comfort and electricity bills for the life of the house.

## General guidance by facing

- **North / north-east facing** — cool front; place the lawn and living areas at the rear to catch winter sun.
- **East facing** — soft morning sun at the front; shade the rear (west) windows.
- **South / south-east facing** — sunny front, good for a front lawn; keep bedrooms at the back.
- **West / south-west facing** — the hottest fronts; use porches, deep window reveals, jaali and trees, and put stairs and services on the west side.

Neighbouring buildings, trees and street width change the picture, so treat this as a starting point for a conversation with your architect. See the [Rooftop Solar Planner](/tools/rooftop-solar) to size panels for your roof.
`,
    steps: [
      'Choose the direction your plot faces (the road side).',
      'Read its comfort score and the layout suggestions.',
    ],
    faqs: [
      { q: 'Which facing plot is best in Pakistan?', a: 'North and north-east facing plots are generally the most comfortable, because the front avoids harsh sun and the rear gets winter sun. Any facing can work with good design.' },
      { q: 'Is a west-facing house bad?', a: 'Not bad, but it takes the hottest afternoon sun on the front in summer. Shading, insulation and placing service rooms on the west side help a lot.' },
      { q: 'Where should the lawn be in a north-facing house?', a: 'At the rear (south side), where it gets winter sun.' },
    ],
    relatedTools: ['rooftop-solar', 'buildable-area'],
    relatedBlogs: ['house-construction-cost-faisal-hills', 'approved-map-noc-guide'],
  },
};
