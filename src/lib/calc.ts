/**
 * Property & construction calculators (pure functions, no UI).
 *
 * Formulas follow the conventions buyers in Pakistan use and were checked
 * against the published worked examples of the comparable tools on
 * alammana.com/tools (see scripts/verify-calc.ts — run it after any change):
 *   construction 5 marla · 85 % · G+1 · Standard → 1,912.5 sq ft, grey 4,016,250
 *   investment 5,000,000 · 15 %/yr · 3 yrs · 11 % inflation → 7,604,375 / real 5,560,253
 *   partnership 20M land + 15M cash → 48M sale, 20 % profit tax, 1.5 yrs →
 *     landowner 25,942,857 · partner 18.9 % p.a. · landowner advantage 2,787,228
 *   EMI 12,000,000 · 20 yrs · 6 % → 85,972 / month
 *
 * Rates that move (construction per sq ft, material prices, tax %) live in
 * RATES below with an "as of" date and are always editable in the UI.
 */

export const RATES = {
  asOf: 'September 2026',
  /** PKR per covered sq ft — indicative, Islamabad/Rawalpindi region. */
  construction: {
    economy: { grey: 1800, finishing: 2300 },
    standard: { grey: 2100, finishing: 3200 },
    luxury: { grey: 2500, finishing: 5200 },
  },
  /** Indicative material prices — always shown as editable sample rates. */
  materials: {
    cementBag: 1450, // 50 kg bag
    steelPerKg: 255,
    bricksPer1000: 16000,
    sandPerCft: 90,
    crushPerCft: 130,
  },
  /** Typical quantities per covered sq ft of grey structure. */
  materialQtyPerSqft: {
    cementBags: 0.42,
    steelKg: 3.8,
    bricks: 23,
    sandCft: 1.8,
    crushCft: 1.25,
  },
} as const;

// ── Area ────────────────────────────────────────────────────────────────────
export const SQFT_PER_SQM = 10.7639;
export type MarlaStandard = 225 | 272.25;

export function areaToSqft(value: number, unit: 'marla' | 'kanal' | 'sqft' | 'sqm' | 'sqyd' | 'acre', marla: MarlaStandard = 225): number {
  switch (unit) {
    case 'marla': return value * marla;
    case 'kanal': return value * marla * 20;
    case 'sqm': return value * SQFT_PER_SQM;
    case 'sqyd': return value * 9;
    case 'acre': return value * 43560;
    default: return value;
  }
}

export function sqftToAll(sqft: number, marla: MarlaStandard = 225) {
  return { sqft, sqm: sqft / SQFT_PER_SQM, sqyd: sqft / 9, marla: sqft / marla, kanal: sqft / (marla * 20), acre: sqft / 43560 };
}

// ── Construction cost ───────────────────────────────────────────────────────
export type Quality = keyof typeof RATES.construction;

export function constructionCost(input: { plotMarla: number; coveragePct: number; floors: number; basement?: boolean; greyRate: number; finishingRate: number; marla?: MarlaStandard }) {
  const plotSqft = input.plotMarla * (input.marla ?? 225);
  const perFloor = plotSqft * (input.coveragePct / 100);
  const levels = input.floors + (input.basement ? 1 : 0);
  const covered = perFloor * levels;
  const grey = covered * input.greyRate;
  const finishing = covered * input.finishingRate;
  return { plotSqft, perFloor, covered, grey, finishing, total: grey + finishing, perSqft: input.greyRate + input.finishingRate };
}

/** Grey-structure material quantities and cost at the given prices. */
export function materialEstimate(coveredSqft: number, prices: { cementBag: number; steelPerKg: number; bricksPer1000: number; sandPerCft: number; crushPerCft: number }) {
  const q = RATES.materialQtyPerSqft;
  const rows = [
    { item: 'Cement (50 kg bags)', qty: coveredSqft * q.cementBags, unit: 'bags', rate: prices.cementBag },
    { item: 'Steel', qty: coveredSqft * q.steelKg, unit: 'kg', rate: prices.steelPerKg },
    { item: 'Bricks', qty: coveredSqft * q.bricks, unit: 'bricks', rate: prices.bricksPer1000 / 1000 },
    { item: 'Sand', qty: coveredSqft * q.sandCft, unit: 'cft', rate: prices.sandPerCft },
    { item: 'Crush (bajri)', qty: coveredSqft * q.crushCft, unit: 'cft', rate: prices.crushPerCft },
  ].map((r) => ({ ...r, cost: r.qty * r.rate }));
  return { rows, total: rows.reduce((s, r) => s + r.cost, 0) };
}

// ── Buildable area ──────────────────────────────────────────────────────────
/** Typical setbacks (ft) by plot size — replace with the society's byelaws. */
export const TYPICAL_SETBACKS: { maxMarla: number; front: number; rear: number; side: number; coverage: number }[] = [
  { maxMarla: 3.5, front: 5, rear: 0, side: 0, coverage: 85 },
  { maxMarla: 5, front: 5, rear: 3, side: 0, coverage: 82 },
  { maxMarla: 8, front: 7, rear: 5, side: 0, coverage: 80 },
  { maxMarla: 10, front: 10, rear: 5, side: 3, coverage: 75 },
  { maxMarla: 20, front: 15, rear: 7, side: 5, coverage: 70 },
  { maxMarla: Infinity, front: 20, rear: 10, side: 7, coverage: 65 },
];

export function typicalSetbacks(marla: number) {
  return TYPICAL_SETBACKS.find((s) => marla <= s.maxMarla)!;
}

export function buildableArea(input: { width: number; depth: number; front: number; rear: number; side: number; maxCoveragePct: number; floors: number }) {
  const plot = input.width * input.depth;
  const fw = Math.max(0, input.width - 2 * input.side);
  const fd = Math.max(0, input.depth - input.front - input.rear);
  const footprintBySetback = fw * fd;
  const footprint = Math.min(footprintBySetback, plot * (input.maxCoveragePct / 100));
  return { plot, footprintWidth: fw, footprintDepth: fd, footprint, coveragePct: plot ? (footprint / plot) * 100 : 0, total: footprint * input.floors, limitedBy: footprintBySetback > plot * (input.maxCoveragePct / 100) ? 'coverage' as const : 'setbacks' as const };
}

// ── Money ───────────────────────────────────────────────────────────────────
/** Standard reducing-balance EMI. */
export function emi(principal: number, annualRatePct: number, months: number): number {
  if (months <= 0) return 0;
  const r = annualRatePct / 100 / 12;
  if (r === 0) return principal / months;
  const f = (1 + r) ** months;
  return (principal * r * f) / (f - 1);
}

/** Largest loan a given EMI can service. */
export function loanFromEmi(payment: number, annualRatePct: number, months: number): number {
  const r = annualRatePct / 100 / 12;
  if (r === 0) return payment * months;
  const f = (1 + r) ** months;
  return (payment * (f - 1)) / (r * f);
}

/** Outstanding balance after `paid` monthly instalments. */
export function balanceAfter(principal: number, annualRatePct: number, months: number, paid: number): number {
  const r = annualRatePct / 100 / 12;
  const p = emi(principal, annualRatePct, months);
  if (r === 0) return Math.max(0, principal - p * paid);
  return principal * (1 + r) ** paid - (p * ((1 + r) ** paid - 1)) / r;
}

/** Present worth of a monthly payment stream at an annual MARR. */
export function presentWorthOfPayments(payment: number, months: number, marrPct: number): number {
  const i = (1 + marrPct / 100) ** (1 / 12) - 1;
  if (i === 0) return payment * months;
  return payment * ((1 - (1 + i) ** -months) / i);
}

export function financeOption(input: { price: number; downPct: number; years: number; ratePct: number; processingFee: number; marrPct: number; income: number; maxEmiPct: number }) {
  const down = input.price * (input.downPct / 100);
  const loan = input.price - down;
  const months = input.years * 12;
  const monthly = emi(loan, input.ratePct, months);
  const totalPaid = monthly * months;
  const pw = down + input.processingFee + presentWorthOfPayments(monthly, months, input.marrPct);
  const i = input.marrPct / 100;
  // Annual worth: spread the present worth evenly over the tenure (capital recovery).
  const aw = i === 0 ? pw / input.years : pw * (i * (1 + i) ** input.years) / ((1 + i) ** input.years - 1);
  return { down, loan, months, emi: monthly, totalInterest: totalPaid - loan, totalPaid, upfront: down + input.processingFee, presentWorth: pw, annualWorth: aw, affordable: monthly <= input.income * (input.maxEmiPct / 100) };
}

/** Windfall at year `atYear`: clear the loan early, or invest it instead? */
export function prepayVsInvest(input: { loan: number; ratePct: number; years: number; lump: number; atYear: number; penaltyPct: number; altReturnPct: number }) {
  const months = input.years * 12;
  const paid = Math.min(months, input.atYear * 12);
  const balance = balanceAfter(input.loan, input.ratePct, months, paid);
  const prepay = Math.min(input.lump, balance / (1 + input.penaltyPct / 100));
  const penalty = prepay * (input.penaltyPct / 100);
  const remainingMonths = months - paid;
  const payment = emi(input.loan, input.ratePct, months);
  // Interest saved by prepaying (same EMI, shorter term), vs. growth if invested.
  const newBalance = balance - prepay;
  const r = input.ratePct / 100 / 12;
  const monthsAfter = newBalance <= 0 ? 0 : r === 0 ? newBalance / payment : Math.log(payment / (payment - newBalance * r)) / Math.log(1 + r);
  const interestSaved = payment * remainingMonths - (payment * monthsAfter) - prepay - penalty;
  const investedValue = input.lump * (1 + input.altReturnPct / 100) ** (remainingMonths / 12);
  return { balance, prepay, penalty, monthsSaved: Math.max(0, remainingMonths - monthsAfter), interestSaved, investedGain: investedValue - input.lump, breakEvenPct: input.ratePct, prepayWins: input.altReturnPct < input.ratePct };
}

export function instalmentPlan(input: { price: number; downPct: number; possessionPct: number; months: number; frequency: 'monthly' | 'quarterly' }) {
  const down = input.price * (input.downPct / 100);
  const possession = input.price * (input.possessionPct / 100);
  const financed = Math.max(0, input.price - down - possession);
  const count = input.frequency === 'quarterly' ? Math.ceil(input.months / 3) : input.months;
  return { down, possession, financed, count, instalment: count ? financed / count : 0 };
}

export function investmentGrowth(input: { price: number; appreciationPct: number; years: number; inflationPct: number; monthlyRent?: number; holdingCostPerYear?: number }) {
  const future = input.price * (1 + input.appreciationPct / 100) ** input.years;
  const real = future / (1 + input.inflationPct / 100) ** input.years;
  const rent = (input.monthlyRent ?? 0) * 12 * input.years;
  const costs = (input.holdingCostPerYear ?? 0) * input.years;
  const totalReturn = future - input.price + rent - costs;
  const cagr = input.price > 0 && input.years > 0 ? ((input.price + totalReturn) / input.price) ** (1 / input.years) - 1 : 0;
  return { future, real, nominalProfit: future - input.price, rent, costs, totalReturn, cagrPct: cagr * 100, beatsInflation: real > input.price };
}

export function rentalYield(input: { price: number; monthlyRent: number; vacancyMonths: number; annualCosts: number }) {
  const gross = input.monthlyRent * 12;
  const net = input.monthlyRent * (12 - input.vacancyMonths) - input.annualCosts;
  return { grossAnnual: gross, netAnnual: net, grossPct: input.price ? (gross / input.price) * 100 : 0, netPct: input.price ? (net / input.price) * 100 : 0, paybackYears: net > 0 ? input.price / net : Infinity };
}

export function affordability(input: { income: number; otherEmis: number; maxEmiPct: number; savings: number; ratePct: number; years: number; reservePct: number }) {
  const maxEmi = Math.max(0, input.income * (input.maxEmiPct / 100) - input.otherEmis);
  const loan = loanFromEmi(maxEmi, input.ratePct, input.years * 12);
  const usableSavings = input.savings * (1 - input.reservePct / 100);
  const cashOnly = usableSavings;
  return { maxEmi, loan, withFinance: loan + usableSavings, cashOnly, reserve: input.savings - usableSavings };
}

export function buyVsBuild(input: { readyPrice: number; plotPrice: number; coveredSqft: number; ratePerSqft: number; months: number; monthlyRent: number; extras: number }) {
  const construction = input.coveredSqft * input.ratePerSqft;
  const rentWhileBuilding = input.monthlyRent * input.months;
  const build = input.plotPrice + construction + input.extras + rentWhileBuilding;
  return { construction, rentWhileBuilding, build, difference: input.readyPrice - build, buildCheaper: build < input.readyPrice };
}

/** Landowner brings the plot, a cash partner funds construction. */
export function partnership(input: {
  plotValue: number; purchasePrice: number; construction: number; salePrice: number;
  landownerCash: number; partnerCash: number; split: 'contribution' | 'custom'; landownerPct: number;
  cgtPct: number; profitTaxPct: number; discountPct: number; inflationPct: number; months: number;
}) {
  const years = input.months / 12;
  const landownerCapital = input.plotValue + input.landownerCash;
  const partnerCapital = input.partnerCash;
  const capital = landownerCapital + partnerCapital;
  const gross = input.salePrice - capital;
  const tax = Math.max(0, gross) * (input.profitTaxPct / 100);
  const afterTax = gross - tax;
  const lPct = input.split === 'contribution' ? (capital ? landownerCapital / capital : 0) : input.landownerPct / 100;
  const landownerProfit = afterTax * lPct;
  const partnerProfit = afterTax * (1 - lPct);
  const disc = (1 + input.discountPct / 100) ** years;
  const inf = (1 + input.inflationPct / 100) ** years;
  const sellToday = input.plotValue - Math.max(0, input.plotValue - input.purchasePrice) * (input.cgtPct / 100);
  const landownerNominal = landownerCapital + landownerProfit;
  const landownerToday = landownerNominal / disc;
  const partnerTotalPct = partnerCapital ? (partnerProfit / partnerCapital) * 100 : 0;
  const partnerAnnualPct = partnerCapital && years > 0 ? ((1 + partnerProfit / partnerCapital) ** (1 / years) - 1) * 100 : 0;
  const partnerRealPct = ((1 + partnerAnnualPct / 100) / (1 + input.inflationPct / 100) - 1) * 100;
  return {
    capital, gross, tax, afterTax, landownerSharePct: lPct * 100,
    sellToday, cgtOnSale: input.plotValue - sellToday,
    landownerProfit, landownerNominal, landownerToday, landownerAdvantage: landownerToday - sellToday,
    partnerProfit, partnerTotalPct, partnerAnnualPct, partnerRealPct,
    afterTaxProfitToday: (capital + afterTax) / inf - capital,
    capitalSharePct: capital ? (landownerCapital / capital) * 100 : 0,
  };
}

// ── Transfer taxes & fees ───────────────────────────────────────────────────
/** Editable estimate of buyer/seller costs on a property transfer. */
export function transferCosts(input: { value: number; buyerAdvanceTaxPct: number; sellerAdvanceTaxPct: number; stampDutyPct: number; cvtPct: number; societyTransferFee: number; commissionPct: number }) {
  const buyer = [
    { label: 'Advance tax (buyer, 236K)', amount: input.value * input.buyerAdvanceTaxPct / 100 },
    { label: 'Stamp duty', amount: input.value * input.stampDutyPct / 100 },
    { label: 'Capital value tax (CVT)', amount: input.value * input.cvtPct / 100 },
    { label: 'Society transfer fee', amount: input.societyTransferFee },
    { label: 'Agent commission', amount: input.value * input.commissionPct / 100 },
  ];
  const seller = [
    { label: 'Advance tax (seller, 236C)', amount: input.value * input.sellerAdvanceTaxPct / 100 },
    { label: 'Agent commission', amount: input.value * input.commissionPct / 100 },
  ];
  const sum = (rows: { amount: number }[]) => rows.reduce((s, r) => s + r.amount, 0);
  return { buyer, seller, buyerTotal: sum(buyer), sellerTotal: sum(seller) };
}

// ── Solar ───────────────────────────────────────────────────────────────────
/** Annual yield per kW for the Islamabad/Rawalpindi region at a good tilt
 *  (≈ 3.7 kWh/kW/day), with a loss factor per orientation and tilt. */
export const SOLAR = { yieldPerKwYear: 1360, orientationFactor: { S: 1, SE: 0.96, SW: 0.96, E: 0.86, W: 0.86, N: 0.7 } as Record<string, number>, panelAreaM2: 2.58, costPerKw: 115000 };

export function rooftopSolar(input: { monthlyKwh: number; panelWatt: number; orientation: string; tiltDeg: number; roofSqft: number; tariff: number; costPerKw: number }) {
  const orient = SOLAR.orientationFactor[input.orientation] ?? 1;
  const tiltLoss = Math.max(0.8, 1 - Math.abs(30 - input.tiltDeg) * 0.0022); // ~4.5 % at 10° vs 30°
  const yieldKw = SOLAR.yieldPerKwYear * orient * tiltLoss;
  const neededKw = (input.monthlyKwh * 12) / yieldKw;
  const roofM2 = input.roofSqft / SQFT_PER_SQM;
  const maxPanels = Math.floor((roofM2 * 0.8) / SOLAR.panelAreaM2); // keep 20 % for access
  const panels = Math.min(maxPanels, Math.ceil((neededKw * 1000) / input.panelWatt));
  const kw = (panels * input.panelWatt) / 1000;
  const annualKwh = kw * yieldKw;
  const cost = kw * input.costPerKw;
  const annualSaving = annualKwh * input.tariff;
  return { neededKw, panels, maxPanels, kw, annualKwh, monthlyKwh: annualKwh / 12, coveragePct: input.monthlyKwh ? (annualKwh / 12 / input.monthlyKwh) * 100 : 0, arrayM2: panels * SOLAR.panelAreaM2, roofM2, cost, annualSaving, paybackYears: annualSaving > 0 ? cost / annualSaving : Infinity, limitedByRoof: panels === maxPanels && maxPanels * input.panelWatt / 1000 < neededKw };
}

/** Plot orientation guidance for Pakistan (northern hemisphere, ~33°N). */
export function orientationAdvice(facing: 'N' | 'S' | 'E' | 'W' | 'NE' | 'NW' | 'SE' | 'SW') {
  const map: Record<string, { score: number; summary: string; tips: string[] }> = {
    N: { score: 9, summary: 'North-facing: the back of the house gets the winter sun and the front stays cool in summer.', tips: ['Put the lawn/courtyard at the back (south) for winter sun.', 'Main living room and kitchen at the rear.', 'Front facade gets little glare — larger front windows are comfortable.', 'Rooftop solar faces the rear (south) unshaded.'] },
    S: { score: 7, summary: 'South-facing: the front gets strong sun all year — bright in winter, hot in summer.', tips: ['Shade the front with a porch, deep sills or jaali.', 'Keep bedrooms at the back (north) for cooler nights.', 'Front lawn stays sunny — good for winter.', 'Solar panels can face the street side without shading.'] },
    E: { score: 8, summary: 'East-facing: soft morning sun at the front, the hot afternoon sun on the back.', tips: ['Bedrooms at the front get gentle morning light.', 'Shade west (rear) windows against afternoon heat.', 'Kitchen at the front-south corner stays pleasant.'] },
    W: { score: 5, summary: 'West-facing: the front takes the harsh afternoon sun in summer.', tips: ['Minimise large west-facing glass; use double glazing or shading.', 'Put stairs, stores and baths on the west side as a heat buffer.', 'Plant trees in the front setback for shade.'] },
    NE: { score: 9, summary: 'North-east facing: cool front, sunny south-west rear — excellent year round.', tips: ['Lawn to the rear (south-west).', 'Living areas on the south side.'] },
    NW: { score: 7, summary: 'North-west facing: cool mornings at the front, some afternoon glare.', tips: ['Shade west-facing front windows.', 'Rear (south-east) catches the morning and winter sun.'] },
    SE: { score: 8, summary: 'South-east facing: warm winter mornings at the front, cooler afternoons.', tips: ['Good for a front lawn.', 'Bedrooms at the north-west rear.'] },
    SW: { score: 5, summary: 'South-west facing: the hottest orientation for the front facade in summer.', tips: ['Heavy shading and insulation on the front.', 'Service spaces on the south-west as a buffer.'] },
  };
  return map[facing]!;
}

// ── Portfolio ranker ────────────────────────────────────────────────────────
export function rankHolding(input: { bought: number; current: number; yearsHeld: number; holdingCostPerYear: number; expectedGrowthPct: number; hurdlePct: number }) {
  const net = input.current - input.holdingCostPerYear * input.yearsHeld;
  const cagr = input.bought > 0 && input.yearsHeld > 0 ? ((net / input.bought) ** (1 / input.yearsHeld) - 1) * 100 : 0;
  const forwardPct = input.current > 0 ? input.expectedGrowthPct - (input.holdingCostPerYear / input.current) * 100 : 0;
  const action = forwardPct >= input.hurdlePct + 3 ? 'Buy more' : forwardPct >= input.hurdlePct ? 'Hold' : 'Sell';
  return { cagr, forwardPct, action: action as 'Buy more' | 'Hold' | 'Sell', gain: input.current - input.bought };
}
