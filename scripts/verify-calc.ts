/**
 * Checks src/lib/calc.ts against the published worked examples of the
 * comparable tools on alammana.com/tools. Run after changing any formula:
 *   npx tsx scripts/verify-calc.ts
 */
import { constructionCost, emi, instalmentPlan, investmentGrowth, partnership, buildableArea, RATES } from '../src/lib/calc';

let failed = 0;
const near = (label: string, got: number, want: number, tol = 1) => {
  const ok = Math.abs(got - want) <= tol;
  if (!ok) failed++;
  console.log(`${ok ? '✔' : '✖'} ${label}: ${Math.round(got * 100) / 100} (expected ${want})`);
};

const c = constructionCost({ plotMarla: 5, coveragePct: 85, floors: 2, greyRate: RATES.construction.standard.grey, finishingRate: RATES.construction.standard.finishing });
near('construction covered sq ft', c.covered, 1912.5);
near('construction grey', c.grey, 4016250);
near('construction finishing', c.finishing, 6120000);
near('construction total', c.total, 10136250);

const i = instalmentPlan({ price: 5_000_000, downPct: 25, possessionPct: 0, months: 36, frequency: 'monthly' });
near('instalment monthly', i.instalment, 104167, 1);

const g = investmentGrowth({ price: 5_000_000, appreciationPct: 15, years: 3, inflationPct: 11 });
near('investment future value', g.future, 7604375);
near('investment real value', g.real, 5560253);

near('EMI 12M 20y 6%', emi(12_000_000, 6, 240), 85972);

const p = partnership({ plotValue: 20e6, purchasePrice: 14e6, construction: 15e6, salePrice: 48e6, landownerCash: 0, partnerCash: 15e6, split: 'contribution', landownerPct: 0, cgtPct: 15, profitTaxPct: 20, discountPct: 12, inflationPct: 12, months: 18 });
near('partnership sell today', p.sellToday, 19100000);
near('partnership landowner nominal', p.landownerNominal, 25942857);
near('partnership landowner today', p.landownerToday, 21887228, 50);
near('partnership advantage', p.landownerAdvantage, 2787228, 50);
near('partnership partner profit', p.partnerProfit, 4457143);
near('partnership partner % total', p.partnerTotalPct, 29.7, 0.05);
near('partnership partner % p.a.', p.partnerAnnualPct, 18.9, 0.05);
near('partnership partner real % p.a.', p.partnerRealPct, 6.2, 0.05);
near('partnership after-tax profit today', p.afterTaxProfitToday, 3302650, 50);

const b = buildableArea({ width: 25, depth: 45, front: 5, rear: 3, side: 0, maxCoveragePct: 85, floors: 2 });
near('buildable footprint', b.footprint, 925);
near('buildable total G+1', b.total, 1850);

console.log(failed ? `\n${failed} check(s) FAILED` : '\nAll checks passed');
process.exit(failed ? 1 : 0);
