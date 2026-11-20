'use client';

/** Every public calculator's UI. Maths lives in src/lib/calc.ts (verified by
 *  scripts/verify-calc.ts); this file is inputs, results and the enquiry CTA. */
import { useEffect, useMemo, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { MessageCircle, Plus, Trash2 } from 'lucide-react';
import { CONTACT } from '../../lib/contact';
import { formatPKR } from '../../lib/pricing';
import { trackClarityEvent, setClarityTag, upgradeClaritySession } from '../../lib/clarity';
import {
  RATES, affordability, areaToSqft, buildableArea, buyVsBuild, constructionCost, financeOption, instalmentPlan,
  investmentGrowth, materialEstimate, orientationAdvice, partnership, prepayVsInvest, rankHolding, rentalYield,
  rooftopSolar, sqftToAll, transferCosts, typicalSetbacks, SOLAR, type MarlaStandard, type Quality,
} from '../../lib/calc';
import { toolBySlug } from '../../lib/tools';

// ── Shared bits ─────────────────────────────────────────────────────────────
const full = (n: number) => `PKR ${new Intl.NumberFormat('en-PK', { maximumFractionDigits: 0 }).format(Math.round(n))}`;
const num = (n: number, d = 0) => new Intl.NumberFormat('en-PK', { maximumFractionDigits: d }).format(n);
const pct = (n: number, d = 1) => `${Number.isFinite(n) ? n.toFixed(d) : '—'}%`;

function Money({ value, big }: { value: number; big?: boolean }) {
  const short = Math.abs(value) >= 100_000 ? formatPKR(Math.abs(value)).replace('PKR ', '') : null;
  return (
    <span>
      <span className={big ? 'text-3xl md:text-4xl font-serif' : 'font-semibold'}>{value < 0 ? '−' : ''}{full(Math.abs(value))}</span>
      {short && <span className="ml-2 text-sm text-ink/60">({short})</span>}
    </span>
  );
}

function Field({ label, hint, children }: { label: string; hint?: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-burgundy">{label}</span>
      {children}
      {hint && <span className="mt-1 block text-xs text-ink/60">{hint}</span>}
    </label>
  );
}

const inputCls = 'w-full rounded-lg border border-sand bg-paper px-3 py-2.5 text-ink outline-none focus:border-burgundy';

function NumberInput({ label, value, onChange, suffix, hint, step, money }: { label: string; value: number; onChange: (v: number) => void; suffix?: string; hint?: string; step?: number; money?: boolean }) {
  const reading = money && value >= 100_000 ? formatPKR(value) : undefined;
  return (
    <Field label={label} hint={reading ? `= ${reading}${hint ? ` · ${hint}` : ''}` : hint}>
      <div className="relative">
        <input
          type="number"
          inputMode="decimal"
          step={step ?? 'any'}
          className={inputCls}
          value={Number.isFinite(value) ? value : ''}
          onChange={(e) => onChange(e.target.value === '' ? 0 : Number(e.target.value))}
          onBlur={() => {
            trackClarityEvent('calculator_input_modified');
            setClarityTag('last_calculator_input', label);
          }}
        />
        {suffix && <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-ink/50">{suffix}</span>}
      </div>
    </Field>
  );
}

function Choice<T extends string | number>({ label, value, onChange, options }: { label: string; value: T; onChange: (v: NoInfer<T>) => void; options: { value: NoInfer<T>; label: string }[] }) {
  return (
    <Field label={label}>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={String(o.value)}
            type="button"
            onClick={() => {
              onChange(o.value);
              trackClarityEvent('calculator_option_toggled');
              setClarityTag('last_calculator_option', `${label}:${String(o.label)}`);
            }}
            className={`rounded-full border px-3 py-1.5 text-sm transition ${o.value === value ? 'border-burgundy bg-burgundy text-paper' : 'border-sand bg-paper text-ink hover:border-burgundy'}`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </Field>
  );
}

function Stat({ label, children, note, highlight }: { label: string; children: ReactNode; note?: ReactNode; highlight?: boolean }) {
  return (
    <div className={`rounded-xl border p-4 ${highlight ? 'border-burgundy bg-burgundy text-paper' : 'border-sand/60 bg-paper'}`}>
      <p className={`text-[11px] font-bold uppercase tracking-[0.2em] ${highlight ? 'text-gold' : 'text-burgundy'}`}>{label}</p>
      <div className="mt-1 text-lg">{children}</div>
      {note && <p className={`mt-1 text-xs ${highlight ? 'text-paper/70' : 'text-ink/60'}`}>{note}</p>}
    </div>
  );
}

function Layout({ inputs, results, note }: { inputs: ReactNode; results: ReactNode; note?: ReactNode }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
      <div className="space-y-4 rounded-2xl border border-sand/60 bg-paper/70 p-5 md:p-6">{inputs}</div>
      <div className="space-y-3" data-clarity-unmask="true">
        {results}
        {note && <p className="text-xs leading-relaxed text-ink/60">{note}</p>}
      </div>
    </div>
  );
}

// ── Tools ───────────────────────────────────────────────────────────────────
function ConstructionCostTool() {
  const [plot, setPlot] = useState(5);
  const [coverage, setCoverage] = useState(85);
  const [floors, setFloors] = useState(2);
  const [basement, setBasement] = useState(false);
  const [quality, setQuality] = useState<Quality>('standard');
  const [grey, setGrey] = useState<number>(RATES.construction.standard.grey);
  const [finish, setFinish] = useState<number>(RATES.construction.standard.finishing);
  const pickQuality = (q: Quality) => { setQuality(q); setGrey(RATES.construction[q].grey); setFinish(RATES.construction[q].finishing); };
  const r = constructionCost({ plotMarla: plot, coveragePct: coverage, floors, basement, greyRate: grey, finishingRate: finish });
  return (
    <Layout
      inputs={<>
        <NumberInput label="Plot size" value={plot} onChange={setPlot} suffix="marla" hint={`${num(plot * 225)} sq ft (225 sq ft marla)`} />
        <NumberInput label="Covered per floor" value={coverage} onChange={setCoverage} suffix="%" />
        <Choice label="Floors" value={floors} onChange={setFloors} options={[{ value: 1, label: 'Ground only' }, { value: 2, label: 'G + 1' }, { value: 3, label: 'G + 2' }, { value: 4, label: 'G + 3' }]} />
        <Choice label="Basement" value={basement ? 'y' : 'n'} onChange={(v) => setBasement(v === 'y')} options={[{ value: 'n', label: 'No' }, { value: 'y', label: 'Yes' }]} />
        <Choice label="Quality" value={quality} onChange={pickQuality} options={[{ value: 'economy', label: 'Economy' }, { value: 'standard', label: 'Standard' }, { value: 'luxury', label: 'Luxury' }]} />
        <div className="grid grid-cols-2 gap-3">
          <NumberInput label="Grey rate" value={grey} onChange={setGrey} suffix="/sq ft" />
          <NumberInput label="Finishing rate" value={finish} onChange={setFinish} suffix="/sq ft" />
        </div>
      </>}
      results={<>
        <Stat label="Construction total" highlight note={`${num(r.covered)} sq ft covered at PKR ${num(r.perSqft)}/sq ft`}><Money value={r.total} big /></Stat>
        <div className="grid gap-3 sm:grid-cols-2">
          <Stat label="Grey structure" note="Foundation, frame, walls, roof, plaster"><Money value={r.grey} /></Stat>
          <Stat label="Finishing" note="Floors, woodwork, baths, kitchen, paint, fittings"><Money value={r.finishing} /></Stat>
          <Stat label="Covered area">{num(r.covered)} sq ft</Stat>
          <Stat label="Per floor">{num(r.perFloor)} sq ft</Stat>
        </div>
      </>}
      note={`Indicative ${RATES.asOf} rates for the Islamabad/Rawalpindi region. Excludes land, boundary wall, approvals and utility connections. Rates are editable — ask us for a fixed quote.`}
    />
  );
}

function MaterialsTool() {
  const [covered, setCovered] = useState(1912);
  const [prices, setPrices] = useState({ ...RATES.materials });
  const set = (k: keyof typeof prices) => (v: number) => setPrices({ ...prices, [k]: v });
  const r = materialEstimate(covered, prices);
  return (
    <Layout
      inputs={<>
        <NumberInput label="Covered area" value={covered} onChange={setCovered} suffix="sq ft" hint="From the Construction Cost or Buildable Area tool" />
        <p className="text-xs font-bold uppercase tracking-wider text-burgundy">Today’s prices (edit to your quotes)</p>
        <div className="grid grid-cols-2 gap-3">
          <NumberInput label="Cement / bag" value={prices.cementBag} onChange={set('cementBag')} />
          <NumberInput label="Steel / kg" value={prices.steelPerKg} onChange={set('steelPerKg')} />
          <NumberInput label="Bricks / 1000" value={prices.bricksPer1000} onChange={set('bricksPer1000')} />
          <NumberInput label="Sand / cft" value={prices.sandPerCft} onChange={set('sandPerCft')} />
          <NumberInput label="Crush / cft" value={prices.crushPerCft} onChange={set('crushPerCft')} />
        </div>
      </>}
      results={<>
        <Stat label="Grey-structure materials" highlight note={`≈ PKR ${num(r.total / Math.max(covered, 1))} per sq ft in materials`}><Money value={r.total} big /></Stat>
        <div className="overflow-x-auto rounded-xl border border-sand/60 bg-paper">
          <table className="w-full text-sm">
            <thead><tr className="text-left text-xs uppercase tracking-wider text-burgundy"><th className="p-3">Material</th><th className="p-3 text-right">Quantity</th><th className="p-3 text-right">Cost</th></tr></thead>
            <tbody>{r.rows.map((row) => (
              <tr key={row.item} className="border-t border-sand/40"><td className="p-3">{row.item}</td><td className="p-3 text-right">{num(row.qty)} {row.unit}</td><td className="p-3 text-right">{full(row.cost)}</td></tr>
            ))}</tbody>
          </table>
        </div>
      </>}
      note={`Quantities use typical thumb-rules per covered sq ft (cement ${RATES.materialQtyPerSqft.cementBags} bags, steel ${RATES.materialQtyPerSqft.steelKg} kg, bricks ${RATES.materialQtyPerSqft.bricks}). Actual quantities depend on structure design and soil. Sample prices as of ${RATES.asOf} — enter current market rates.`}
    />
  );
}

function BuildableAreaTool() {
  const presets = [{ m: 3.5, w: 20, d: 40 }, { m: 5, w: 25, d: 45 }, { m: 8, w: 30, d: 60 }, { m: 10, w: 35, d: 65 }, { m: 20, w: 50, d: 90 }];
  const [w, setW] = useState(25); const [d, setD] = useState(45);
  const s0 = typicalSetbacks(5);
  const [front, setFront] = useState(s0.front); const [rear, setRear] = useState(s0.rear); const [side, setSide] = useState(s0.side);
  const [cov, setCov] = useState(85); const [floors, setFloors] = useState(2);
  const [marla, setMarla] = useState<MarlaStandard>(225);
  const pick = (p: typeof presets[number]) => { setW(p.w); setD(p.d); const s = typicalSetbacks(p.m); setFront(s.front); setRear(s.rear); setSide(s.side); setCov(Math.max(s.coverage, 80)); };
  const r = buildableArea({ width: w, depth: d, front, rear, side, maxCoveragePct: cov, floors });
  return (
    <Layout
      inputs={<>
        <Field label="Plot preset"><div className="flex flex-wrap gap-2">{presets.map((p) => (
          <button key={p.m} type="button" onClick={() => pick(p)} className={`rounded-full border px-3 py-1.5 text-sm ${w === p.w && d === p.d ? 'border-burgundy bg-burgundy text-paper' : 'border-sand bg-paper'}`}>{p.m === 20 ? '1 kanal' : `${p.m} marla`}</button>
        ))}</div></Field>
        <div className="grid grid-cols-2 gap-3"><NumberInput label="Front width" value={w} onChange={setW} suffix="ft" /><NumberInput label="Depth" value={d} onChange={setD} suffix="ft" /></div>
        <Choice label="Marla standard" value={marla} onChange={setMarla} options={[{ value: 225, label: '225 sq ft (modern)' }, { value: 272.25, label: '272.25 sq ft (old)' }]} />
        <div className="grid grid-cols-3 gap-3"><NumberInput label="Front" value={front} onChange={setFront} suffix="ft" /><NumberInput label="Rear" value={rear} onChange={setRear} suffix="ft" /><NumberInput label="Each side" value={side} onChange={setSide} suffix="ft" /></div>
        <div className="grid grid-cols-2 gap-3"><NumberInput label="Max coverage" value={cov} onChange={setCov} suffix="%" /><NumberInput label="Floors" value={floors} onChange={setFloors} hint="Ground = 1" /></div>
      </>}
      results={<>
        <Stat label="Total covered area" highlight note={`${num(r.total / marla, 2)} marla of construction across ${floors} floor(s)`}><span className="font-serif text-3xl md:text-4xl">{num(r.total)} sq ft</span></Stat>
        <div className="grid gap-3 sm:grid-cols-2">
          <Stat label="Plot area" note={`${num(r.plot / marla, 2)} marla · ${w} × ${d} ft`}>{num(r.plot)} sq ft</Stat>
          <Stat label="Buildable footprint" note={`${num(r.footprintWidth)} × ${num(r.footprintDepth)} ft · limited by ${r.limitedBy}`}>{num(r.footprint)} sq ft</Stat>
          <Stat label="Ground coverage">{pct(r.coveragePct, 0)} of plot</Stat>
        </div>
      </>}
      note="Setback presets are typical values — replace them with your society’s or RDA/CDA byelaw figures for an exact answer. Stair towers, mumty and projections are not included."
    />
  );
}

function AreaTool() {
  const [value, setValue] = useState(5);
  const [unit, setUnit] = useState<'marla' | 'kanal' | 'sqft' | 'sqm' | 'sqyd' | 'acre'>('marla');
  const [marla, setMarla] = useState<MarlaStandard>(225);
  const all = sqftToAll(areaToSqft(value, unit, marla), marla);
  const rows: [string, number, number][] = [['Square feet', all.sqft, 0], ['Square metres', all.sqm, 2], ['Square yards', all.sqyd, 2], ['Marla', all.marla, 3], ['Kanal', all.kanal, 3], ['Acre', all.acre, 4]];
  return (
    <Layout
      inputs={<>
        <NumberInput label="Area" value={value} onChange={setValue} />
        <Choice label="Unit" value={unit} onChange={setUnit} options={[{ value: 'marla', label: 'Marla' }, { value: 'kanal', label: 'Kanal' }, { value: 'sqft', label: 'Sq ft' }, { value: 'sqm', label: 'Sq m' }, { value: 'sqyd', label: 'Sq yd' }, { value: 'acre', label: 'Acre' }]} />
        <Choice label="Marla standard" value={marla} onChange={setMarla} options={[{ value: 225, label: '225 sq ft (modern / Twin Cities)' }, { value: 272.25, label: '272.25 sq ft (old / revenue)' }]} />
      </>}
      results={<div className="grid gap-3 sm:grid-cols-2">{rows.map(([l, v, dp]) => <Stat key={l} label={l}>{num(v, dp)}</Stat>)}</div>}
      note="1 kanal = 20 marla. Housing societies in Islamabad/Rawalpindi usually use the 225 sq ft marla; land revenue records often use 272.25 sq ft. 1 acre = 43,560 sq ft."
    />
  );
}

function InstallmentsTool() {
  const [price, setPrice] = useState(5_000_000);
  const [down, setDown] = useState(25);
  const [poss, setPoss] = useState(0);
  const [months, setMonths] = useState(36);
  const [freq, setFreq] = useState<'monthly' | 'quarterly'>('monthly');
  const r = instalmentPlan({ price, downPct: down, possessionPct: poss, months, frequency: freq });
  return (
    <Layout
      inputs={<>
        <NumberInput label="Total price" value={price} onChange={setPrice} money />
        <div className="grid grid-cols-2 gap-3"><NumberInput label="Down payment" value={down} onChange={setDown} suffix="%" /><NumberInput label="On possession" value={poss} onChange={setPoss} suffix="%" /></div>
        <NumberInput label="Plan length" value={months} onChange={setMonths} suffix="months" />
        <Choice label="Pay" value={freq} onChange={setFreq} options={[{ value: 'monthly', label: 'Monthly' }, { value: 'quarterly', label: 'Quarterly' }]} />
      </>}
      results={<>
        <Stat label={`${freq === 'monthly' ? 'Monthly' : 'Quarterly'} instalment`} highlight note={`${r.count} instalments`}><Money value={r.instalment} big /></Stat>
        <div className="grid gap-3 sm:grid-cols-3">
          <Stat label="Down payment"><Money value={r.down} /></Stat>
          <Stat label="On possession"><Money value={r.possession} /></Stat>
          <Stat label="Paid in instalments"><Money value={r.financed} /></Stat>
        </div>
      </>}
      note="Interest-free developer plan: the balance is divided equally. Actual plans may add a markup or a different possession amount — ask us for the plan on a specific plot."
    />
  );
}

function HomeFinanceTool() {
  const [price, setPrice] = useState(15_000_000);
  const [income, setIncome] = useState(250_000);
  const [maxEmi, setMaxEmi] = useState(40);
  const [marr, setMarr] = useState(12);
  const [opts, setOpts] = useState([
    { name: 'Government scheme', down: 20, years: 20, rate: 6, fee: 0 },
    { name: 'Commercial bank', down: 20, years: 20, rate: 14, fee: 50_000 },
    { name: 'Developer plan', down: 30, years: 3, rate: 0, fee: 0 },
  ]);
  const [lump, setLump] = useState(3_000_000); const [atYear, setAtYear] = useState(3); const [penalty, setPenalty] = useState(0); const [alt, setAlt] = useState(15);
  const results = opts.map((o) => ({ o, r: financeOption({ price, downPct: o.down, years: o.years, ratePct: o.rate, processingFee: o.fee, marrPct: marr, income, maxEmiPct: maxEmi }) }));
  const best = [...results].sort((a, b) => a.r.presentWorth - b.r.presentWorth)[0];
  const first = results[0]!;
  const pvi = prepayVsInvest({ loan: first.r.loan, ratePct: first.o.rate, years: first.o.years, lump, atYear, penaltyPct: penalty, altReturnPct: alt });
  const setOpt = (i: number, k: 'down' | 'years' | 'rate' | 'fee') => (v: number) => setOpts(opts.map((o, j) => (j === i ? { ...o, [k]: v } : o)));
  return (
    <div className="space-y-6">
      <div className="grid gap-3 rounded-2xl border border-sand/60 bg-paper/70 p-5 sm:grid-cols-2 lg:grid-cols-4">
        <NumberInput label="Property price" value={price} onChange={setPrice} money />
        <NumberInput label="Monthly income" value={income} onChange={setIncome} money />
        <NumberInput label="Max EMI" value={maxEmi} onChange={setMaxEmi} suffix="% of income" />
        <NumberInput label="Your money’s safe return (MARR)" value={marr} onChange={setMarr} suffix="%/yr" />
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {results.map(({ o, r }, i) => (
          <div key={o.name} className={`space-y-3 rounded-2xl border p-5 ${best === results[i] ? 'border-burgundy bg-paper' : 'border-sand/60 bg-paper/70'}`}>
            <p className="font-serif text-xl text-burgundy">{o.name}{best === results[i] && <span className="ml-2 rounded-full bg-burgundy px-2 py-0.5 align-middle font-sans text-[10px] uppercase tracking-wider text-paper">Cheapest overall</span>}</p>
            <div className="grid grid-cols-2 gap-2">
              <NumberInput label="Down" value={o.down} onChange={setOpt(i, 'down')} suffix="%" />
              <NumberInput label="Years" value={o.years} onChange={setOpt(i, 'years')} />
              <NumberInput label="Rate" value={o.rate} onChange={setOpt(i, 'rate')} suffix="%" />
              <NumberInput label="Fees" value={o.fee} onChange={setOpt(i, 'fee')} />
            </div>
            <Stat label="Monthly EMI" highlight note={r.affordable ? 'Within your EMI limit' : `Over your ${maxEmi}% limit`}><Money value={r.emi} /></Stat>
            <dl className="space-y-1 text-sm">
              <div className="flex justify-between"><dt>Loan</dt><dd>{formatPKR(r.loan)}</dd></div>
              <div className="flex justify-between"><dt>Total interest</dt><dd>{formatPKR(r.totalInterest)}</dd></div>
              <div className="flex justify-between"><dt>Paid up front</dt><dd>{formatPKR(r.upfront)}</dd></div>
              <div className="flex justify-between font-semibold"><dt>Present worth @ {marr}%</dt><dd>{formatPKR(r.presentWorth)}</dd></div>
              <div className="flex justify-between"><dt>Annual worth</dt><dd>{formatPKR(r.annualWorth)}</dd></div>
            </dl>
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-sand/60 bg-paper/70 p-5">
        <p className="mb-3 font-serif text-xl text-burgundy">Windfall: prepay “{first.o.name}” or invest?</p>
        <div className="grid gap-3 sm:grid-cols-4">
          <NumberInput label="Lump sum" value={lump} onChange={setLump} money />
          <NumberInput label="Received in year" value={atYear} onChange={setAtYear} />
          <NumberInput label="Prepay penalty" value={penalty} onChange={setPenalty} suffix="%" />
          <NumberInput label="Investment return" value={alt} onChange={setAlt} suffix="%/yr" />
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <Stat label="Loan left then"><Money value={pvi.balance} /></Stat>
          <Stat label="Interest saved by prepaying" note={`${num(pvi.monthsSaved)} months sooner`}><Money value={pvi.interestSaved} /></Stat>
          <Stat label="Gain if invested instead"><Money value={pvi.investedGain} /></Stat>
        </div>
        <p className="mt-3 text-sm">{pvi.prepayWins ? `Prepaying wins: your investment return (${alt}%) is below the loan rate (${first.o.rate}%).` : `Investing wins if ${alt}% after tax is reliable — it beats the loan rate of ${first.o.rate}%.`}</p>
      </div>
      <p className="text-xs text-ink/60">Present worth discounts every payment to today at your MARR — lower is cheaper. Use annual worth to compare options with different lengths. Rates shown are examples; use the rate your bank or scheme quotes.</p>
    </div>
  );
}

function AffordabilityTool() {
  const [income, setIncome] = useState(250_000); const [other, setOther] = useState(0); const [maxEmi, setMaxEmi] = useState(40);
  const [savings, setSavings] = useState(3_000_000); const [rate, setRate] = useState(14); const [years, setYears] = useState(15); const [reserve, setReserve] = useState(10);
  const r = affordability({ income, otherEmis: other, maxEmiPct: maxEmi, savings, ratePct: rate, years, reservePct: reserve });
  return (
    <Layout
      inputs={<>
        <NumberInput label="Monthly household income" value={income} onChange={setIncome} money />
        <NumberInput label="Existing EMIs / month" value={other} onChange={setOther} money />
        <NumberInput label="Max share of income for EMI" value={maxEmi} onChange={setMaxEmi} suffix="%" hint="Banks usually cap at 40–50 %" />
        <NumberInput label="Savings available" value={savings} onChange={setSavings} money />
        <NumberInput label="Keep in reserve" value={reserve} onChange={setReserve} suffix="% of savings" />
        <div className="grid grid-cols-2 gap-3"><NumberInput label="Finance rate" value={rate} onChange={setRate} suffix="%" /><NumberInput label="Tenure" value={years} onChange={setYears} suffix="yrs" /></div>
      </>}
      results={<>
        <Stat label="You can afford (with finance)" highlight note={`Loan ${formatPKR(r.loan)} + savings ${formatPKR(r.cashOnly)}`}><Money value={r.withFinance} big /></Stat>
        <div className="grid gap-3 sm:grid-cols-3">
          <Stat label="Max EMI"><Money value={r.maxEmi} /></Stat>
          <Stat label="Cash only"><Money value={r.cashOnly} /></Stat>
          <Stat label="Held in reserve"><Money value={r.reserve} /></Stat>
        </div>
      </>}
      note="Leave room for transfer taxes and fees (see the Transfer Taxes tool) — typically 5–8 % of the price on top."
    />
  );
}

function TransferCostsTool() {
  const [value, setValue] = useState(10_000_000);
  const [b, setB] = useState(3); const [s, setS] = useState(3); const [stamp, setStamp] = useState(1); const [cvt, setCvt] = useState(1); const [fee, setFee] = useState(50_000); const [comm, setComm] = useState(1);
  const r = transferCosts({ value, buyerAdvanceTaxPct: b, sellerAdvanceTaxPct: s, stampDutyPct: stamp, cvtPct: cvt, societyTransferFee: fee, commissionPct: comm });
  return (
    <Layout
      inputs={<>
        <NumberInput label="Property value (FBR / DC value)" value={value} onChange={setValue} money />
        <div className="grid grid-cols-2 gap-3">
          <NumberInput label="Buyer advance tax (236K)" value={b} onChange={setB} suffix="%" />
          <NumberInput label="Seller advance tax (236C)" value={s} onChange={setS} suffix="%" />
          <NumberInput label="Stamp duty" value={stamp} onChange={setStamp} suffix="%" />
          <NumberInput label="CVT" value={cvt} onChange={setCvt} suffix="%" />
          <NumberInput label="Society transfer fee" value={fee} onChange={setFee} />
          <NumberInput label="Agent commission (each side)" value={comm} onChange={setComm} suffix="%" />
        </div>
      </>}
      results={<>
        <div className="grid gap-3 sm:grid-cols-2">
          <Stat label="Buyer pays on top" highlight note={pct((r.buyerTotal / Math.max(value, 1)) * 100)}><Money value={r.buyerTotal} /></Stat>
          <Stat label="Seller pays" highlight note={pct((r.sellerTotal / Math.max(value, 1)) * 100)}><Money value={r.sellerTotal} /></Stat>
        </div>
        {[['Buyer', r.buyer], ['Seller', r.seller]].map(([who, rows]) => (
          <div key={who as string} className="rounded-xl border border-sand/60 bg-paper p-4 text-sm">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-burgundy">{who as string}</p>
            {(rows as { label: string; amount: number }[]).map((row) => <div key={row.label} className="flex justify-between py-0.5"><span>{row.label}</span><span>{full(row.amount)}</span></div>)}
          </div>
        ))}
      </>}
      note="Estimate only. FBR withholding rates (236K/236C) depend on filer status and change with each budget; stamp duty and CVT are set by the province. The default percentages are placeholders — check the current FBR and Punjab rates (or ask us) before paying."
    />
  );
}

function BuyVsBuildTool() {
  const [ready, setReady] = useState(28_000_000); const [plot, setPlot] = useState(9_000_000); const [area, setArea] = useState(1900);
  const [rate, setRate] = useState(RATES.construction.standard.grey + RATES.construction.standard.finishing);
  const [months, setMonths] = useState(14); const [rent, setRent] = useState(80_000); const [extras, setExtras] = useState(600_000);
  const r = buyVsBuild({ readyPrice: ready, plotPrice: plot, coveredSqft: area, ratePerSqft: rate, months, monthlyRent: rent, extras });
  return (
    <Layout
      inputs={<>
        <NumberInput label="Ready house price" value={ready} onChange={setReady} money />
        <NumberInput label="Plot price" value={plot} onChange={setPlot} money />
        <div className="grid grid-cols-2 gap-3"><NumberInput label="Covered area" value={area} onChange={setArea} suffix="sq ft" /><NumberInput label="Turnkey rate" value={rate} onChange={setRate} suffix="/sq ft" /></div>
        <div className="grid grid-cols-2 gap-3"><NumberInput label="Build time" value={months} onChange={setMonths} suffix="months" /><NumberInput label="Rent while building" value={rent} onChange={setRent} suffix="/month" /></div>
        <NumberInput label="Approvals, boundary, connections" value={extras} onChange={setExtras} money />
      </>}
      results={<>
        <Stat label={r.buildCheaper ? 'Building is cheaper by' : 'Buying ready is cheaper by'} highlight><Money value={Math.abs(r.difference)} big /></Stat>
        <div className="grid gap-3 sm:grid-cols-2">
          <Stat label="Total to build" note={`plot + ${formatPKR(r.construction)} construction + extras + ${formatPKR(r.rentWhileBuilding)} rent`}><Money value={r.build} /></Stat>
          <Stat label="Ready house"><Money value={ready} /></Stat>
        </div>
      </>}
      note="Building gives you control over quality, layout and a new structure; buying ready is faster and you can inspect what you get."
    />
  );
}

function InvestmentTool() {
  const [price, setPrice] = useState(5_000_000); const [years, setYears] = useState(3); const [inflation, setInflation] = useState(11);
  const [rent, setRent] = useState(0); const [costs, setCosts] = useState(0);
  const scenarios = [{ name: 'Conservative', g: 8 }, { name: 'Base', g: 15 }, { name: 'Optimistic', g: 22 }];
  const [custom, setCustom] = useState(15);
  const rows = [...scenarios, { name: 'Your estimate', g: custom }].map((s) => ({ ...s, r: investmentGrowth({ price, appreciationPct: s.g, years, inflationPct: inflation, monthlyRent: rent, holdingCostPerYear: costs }) }));
  const mine = rows[3]!.r;
  return (
    <Layout
      inputs={<>
        <NumberInput label="Purchase price" value={price} onChange={setPrice} money />
        <div className="grid grid-cols-2 gap-3"><NumberInput label="Holding period" value={years} onChange={setYears} suffix="years" /><NumberInput label="Inflation" value={inflation} onChange={setInflation} suffix="%/yr" /></div>
        <NumberInput label="Your appreciation estimate" value={custom} onChange={setCustom} suffix="%/yr" />
        <div className="grid grid-cols-2 gap-3"><NumberInput label="Monthly rent (if any)" value={rent} onChange={setRent} /><NumberInput label="Yearly holding costs" value={costs} onChange={setCosts} hint="Maintenance, taxes" /></div>
      </>}
      results={<>
        <Stat label={`Value after ${years} years`} highlight note={mine.beatsInflation ? 'Beats inflation — real value preserved and grown' : 'Below inflation — real value shrinks'}><Money value={mine.future} big /></Stat>
        <div className="grid gap-3 sm:grid-cols-3">
          <Stat label="Nominal profit"><Money value={mine.nominalProfit} /></Stat>
          <Stat label="In today’s money"><Money value={mine.real} /></Stat>
          <Stat label="Total return p.a." note={rent || costs ? 'incl. rent and costs' : undefined}>{pct(mine.cagrPct)}</Stat>
        </div>
        <div className="overflow-x-auto rounded-xl border border-sand/60 bg-paper">
          <table className="w-full text-sm"><thead><tr className="text-left text-xs uppercase tracking-wider text-burgundy"><th className="p-3">Scenario</th><th className="p-3 text-right">Growth</th><th className="p-3 text-right">Value</th><th className="p-3 text-right">Real value</th></tr></thead>
            <tbody>{rows.map((s) => <tr key={s.name} className="border-t border-sand/40"><td className="p-3">{s.name}</td><td className="p-3 text-right">{s.g}%</td><td className="p-3 text-right">{formatPKR(s.r.future)}</td><td className="p-3 text-right">{formatPKR(s.r.real)}</td></tr>)}</tbody></table>
        </div>
      </>}
      note="Future value compounds yearly. Past appreciation does not guarantee future growth — scenarios are illustrations, not forecasts."
    />
  );
}

function RentYieldTool() {
  const [price, setPrice] = useState(20_000_000); const [rent, setRent] = useState(90_000); const [vacancy, setVacancy] = useState(1); const [costs, setCosts] = useState(100_000);
  const r = rentalYield({ price, monthlyRent: rent, vacancyMonths: vacancy, annualCosts: costs });
  return (
    <Layout
      inputs={<>
        <NumberInput label="Property price" value={price} onChange={setPrice} money />
        <NumberInput label="Monthly rent" value={rent} onChange={setRent} money />
        <div className="grid grid-cols-2 gap-3"><NumberInput label="Empty months / year" value={vacancy} onChange={setVacancy} /><NumberInput label="Yearly costs" value={costs} onChange={setCosts} hint="Repairs, tax, society" /></div>
      </>}
      results={<>
        <div className="grid gap-3 sm:grid-cols-2">
          <Stat label="Gross yield" highlight>{pct(r.grossPct, 2)}</Stat>
          <Stat label="Net yield" highlight>{pct(r.netPct, 2)}</Stat>
          <Stat label="Rent per year"><Money value={r.grossAnnual} /></Stat>
          <Stat label="Net income per year"><Money value={r.netAnnual} /></Stat>
          <Stat label="Payback from rent">{Number.isFinite(r.paybackYears) ? `${num(r.paybackYears, 1)} years` : '—'}</Stat>
        </div>
      </>}
    />
  );
}

function PartnershipTool() {
  const [v, setV] = useState({ plotValue: 20_000_000, purchasePrice: 14_000_000, construction: 15_000_000, salePrice: 48_000_000, landownerCash: 0, partnerCash: 15_000_000, landownerPct: 50, cgtPct: 15, profitTaxPct: 20, discountPct: 12, inflationPct: 12, months: 18 });
  const [split, setSplit] = useState<'contribution' | 'custom'>('contribution');
  const set = (k: keyof typeof v) => (x: number) => setV({ ...v, [k]: x });
  const r = partnership({ ...v, split });
  return (
    <Layout
      inputs={<>
        <div className="grid grid-cols-2 gap-3">
          <NumberInput label="Plot value today" value={v.plotValue} onChange={set('plotValue')} money />
          <NumberInput label="Plot bought for" value={v.purchasePrice} onChange={set('purchasePrice')} money />
          <NumberInput label="Construction cost" value={v.construction} onChange={set('construction')} money />
          <NumberInput label="Expected sale price" value={v.salePrice} onChange={set('salePrice')} money />
          <NumberInput label="Landowner cash" value={v.landownerCash} onChange={set('landownerCash')} money />
          <NumberInput label="Cash partner puts in" value={v.partnerCash} onChange={set('partnerCash')} money />
        </div>
        <Choice label="Profit split" value={split} onChange={setSplit} options={[{ value: 'contribution', label: 'By capital put in' }, { value: 'custom', label: 'Agreed %' }]} />
        {split === 'custom' && <NumberInput label="Landowner’s share of profit" value={v.landownerPct} onChange={set('landownerPct')} suffix="%" />}
        <div className="grid grid-cols-2 gap-3">
          <NumberInput label="CGT on selling plot now" value={v.cgtPct} onChange={set('cgtPct')} suffix="%" />
          <NumberInput label="Tax on project profit" value={v.profitTaxPct} onChange={set('profitTaxPct')} suffix="%" />
          <NumberInput label="Discount rate" value={v.discountPct} onChange={set('discountPct')} suffix="%/yr" />
          <NumberInput label="Inflation" value={v.inflationPct} onChange={set('inflationPct')} suffix="%/yr" />
          <NumberInput label="Timeline" value={v.months} onChange={set('months')} suffix="months" />
        </div>
      </>}
      results={<>
        {v.landownerCash + v.partnerCash < v.construction && (
          <p className="rounded-lg bg-burgundy/10 p-3 text-sm text-burgundy">The cash put in ({formatPKR(v.landownerCash + v.partnerCash)}) doesn’t cover the construction cost ({formatPKR(v.construction)}). Agree who funds the {formatPKR(v.construction - v.landownerCash - v.partnerCash)} gap — profit is split on capital actually put in.</p>
        )}
        <Stat label={r.landownerAdvantage >= 0 ? 'Building beats selling the plot by' : 'Selling now beats building by'} highlight note="for the landowner, in today’s money"><Money value={Math.abs(r.landownerAdvantage)} big /></Stat>
        <div className="grid gap-3 sm:grid-cols-2">
          <Stat label="Landowner: sell today" note={`after ${formatPKR(r.cgtOnSale)} CGT`}><Money value={r.sellToday} /></Stat>
          <Stat label="Landowner: build & partner" note={`${formatPKR(r.landownerToday)} in today’s money`}><Money value={r.landownerNominal} /></Stat>
          <Stat label="Cash partner profit" note={`${pct(r.partnerTotalPct)} total · ${pct(r.partnerAnnualPct)} p.a. · real ${pct(r.partnerRealPct)} p.a.`}><Money value={r.partnerProfit} /></Stat>
          <Stat label="Project profit" note={`gross ${formatPKR(r.gross)} − tax ${formatPKR(r.tax)}`}><Money value={r.afterTax} /></Stat>
        </div>
        <div className="rounded-xl border border-sand/60 bg-paper p-4 text-sm">
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-burgundy">Fairness check</p>
          {[['Capital put in', r.capitalSharePct], ['Profit received', r.landownerSharePct]].map(([label, p]) => (
            <div key={label as string} className="mb-2">
              <div className="mb-1 flex justify-between text-xs"><span>{label as string}</span><span>Landowner {pct(p as number)} · Partner {pct(100 - (p as number))}</span></div>
              <div className="flex h-2.5 overflow-hidden rounded-full bg-sand/40"><div className="bg-burgundy" style={{ width: `${p}%` }} /><div className="bg-gold" style={{ width: `${100 - (p as number)}%` }} /></div>
            </div>
          ))}
        </div>
      </>}
      note="Simplified: CGT is charged on the plot gain if sold now; selling a completed project also carries withholding, transfer and agent costs not modelled here. Get the agreement reviewed before signing."
    />
  );
}

function PortfolioTool() {
  const [hurdle, setHurdle] = useState(12);
  const [rows, setRows] = useState([
    { name: '5 marla, Faisal Hills B', bought: 4_500_000, current: 7_000_000, years: 3, cost: 20_000, growth: 14 },
    { name: '10 marla, other society', bought: 9_000_000, current: 10_000_000, years: 4, cost: 60_000, growth: 6 },
  ]);
  const setRow = (i: number, k: keyof (typeof rows)[number]) => (v: number | string) => setRows(rows.map((r, j) => (j === i ? { ...r, [k]: v } : r)));
  const ranked = rows.map((r) => ({ r, x: rankHolding({ bought: r.bought, current: r.current, yearsHeld: r.years, holdingCostPerYear: r.cost, expectedGrowthPct: r.growth, hurdlePct: hurdle }) }));
  return (
    <div className="space-y-4">
      <div className="max-w-xs"><NumberInput label="Your target return" value={hurdle} onChange={setHurdle} suffix="%/yr" hint="What your money earns elsewhere" /></div>
      {ranked.map(({ r, x }, i) => (
        <div key={i} className="grid gap-3 rounded-2xl border border-sand/60 bg-paper/70 p-4 md:grid-cols-[minmax(0,2fr)_repeat(5,minmax(0,1fr))_auto] md:items-end">
          <Field label="Plot"><input className={inputCls} value={r.name} onChange={(e) => setRow(i, 'name')(e.target.value)} /></Field>
          <NumberInput label="Bought for" value={r.bought} onChange={setRow(i, 'bought')} />
          <NumberInput label="Worth now" value={r.current} onChange={setRow(i, 'current')} />
          <NumberInput label="Years held" value={r.years} onChange={setRow(i, 'years')} />
          <NumberInput label="Cost / yr" value={r.cost} onChange={setRow(i, 'cost')} />
          <NumberInput label="Expected growth" value={r.growth} onChange={setRow(i, 'growth')} suffix="%" />
          <div className="flex items-end gap-2">
            <span className={`rounded-full px-3 py-1.5 text-sm font-semibold ${x.action === 'Sell' ? 'bg-burgundy text-paper' : x.action === 'Hold' ? 'bg-sand text-ink' : 'bg-status-approved text-paper'}`}>{x.action}</span>
            <button type="button" aria-label="Remove plot" onClick={() => setRows(rows.filter((_, j) => j !== i))} className="p-2 text-ink/50 hover:text-burgundy"><Trash2 size={16} /></button>
          </div>
          <p className="text-xs text-ink/60 md:col-span-7">So far {pct(x.cagr)} a year (gain {formatPKR(x.gain)}); looking ahead {pct(x.forwardPct)} a year after holding costs vs your {hurdle}% target.</p>
        </div>
      ))}
      <button type="button" onClick={() => setRows([...rows, { name: 'New plot', bought: 5_000_000, current: 5_000_000, years: 1, cost: 0, growth: 10 }])} className="inline-flex items-center gap-2 rounded-full border border-burgundy px-4 py-2 text-sm text-burgundy"><Plus size={16} /> Add a plot</button>
      <p className="text-xs text-ink/60">Buy more: expected return at least 3 points above your target. Hold: at or above target. Sell: below target — the money would likely do better elsewhere.</p>
    </div>
  );
}

function RooftopSolarTool() {
  const [units, setUnits] = useState(900); const [watt, setWatt] = useState(585); const [orient, setOrient] = useState('S'); const [tilt, setTilt] = useState(20);
  const [roof, setRoof] = useState(800); const [tariff, setTariff] = useState(60); const [costKw, setCostKw] = useState(SOLAR.costPerKw);
  const r = rooftopSolar({ monthlyKwh: units, panelWatt: watt, orientation: orient, tiltDeg: tilt, roofSqft: roof, tariff, costPerKw: costKw });
  return (
    <Layout
      inputs={<>
        <NumberInput label="Monthly electricity use" value={units} onChange={setUnits} suffix="units (kWh)" />
        <NumberInput label="Usable roof area" value={roof} onChange={setRoof} suffix="sq ft" />
        <Choice label="Panels face" value={orient} onChange={setOrient} options={['S', 'SE', 'SW', 'E', 'W', 'N'].map((o) => ({ value: o, label: o }))} />
        <div className="grid grid-cols-2 gap-3"><NumberInput label="Tilt" value={tilt} onChange={setTilt} suffix="°" hint="30° is best here" /><NumberInput label="Panel size" value={watt} onChange={setWatt} suffix="W" /></div>
        <div className="grid grid-cols-2 gap-3"><NumberInput label="Tariff" value={tariff} onChange={setTariff} suffix="PKR/unit" /><NumberInput label="System cost" value={costKw} onChange={setCostKw} suffix="/kW" /></div>
      </>}
      results={<>
        <Stat label="System size" highlight note={`${r.panels} × ${watt} W panels · covers ${pct(Math.min(r.coveragePct, 999), 0)} of your use`}><span className="font-serif text-3xl md:text-4xl">{num(r.kw, 2)} kW</span></Stat>
        {r.limitedByRoof && <p className="rounded-lg bg-burgundy/10 p-3 text-sm text-burgundy">Your roof fits only {r.maxPanels} panels — you need about {num(r.neededKw, 1)} kW for all your use.</p>}
        <div className="grid gap-3 sm:grid-cols-2">
          <Stat label="Generation" note={`${num(r.annualKwh)} units a year`}>{num(r.monthlyKwh)} units / month</Stat>
          <Stat label="Roof used" note={`of ${num(r.roofM2)} m² roof`}>{num(r.arrayM2)} m²</Stat>
          <Stat label="Approx. system cost"><Money value={r.cost} /></Stat>
          <Stat label="Saving per year" note={Number.isFinite(r.paybackYears) ? `pays back in about ${num(r.paybackYears, 1)} years` : undefined}><Money value={r.annualSaving} /></Stat>
        </div>
      </>}
      note={`Yield ≈ ${SOLAR.yieldPerKwYear} units per kW per year for Islamabad/Rawalpindi at a good tilt, less for east/west/north or flat panels. Cost per kW is an indicative ${RATES.asOf} figure — net-metering rules and tariffs change; ask us for a site survey.`}
    />
  );
}

function OrientationTool() {
  const [facing, setFacing] = useState<'N' | 'S' | 'E' | 'W' | 'NE' | 'NW' | 'SE' | 'SW'>('N');
  const a = orientationAdvice(facing);
  return (
    <Layout
      inputs={<>
        <Choice label="Your plot faces (the road side)" value={facing} onChange={setFacing} options={(['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'] as const).map((f) => ({ value: f, label: f }))} />
        <p className="text-sm text-ink/70">In Pakistan the sun moves across the southern sky, so south-facing walls and roofs get the most sun — warm in winter, hot in summer.</p>
      </>}
      results={<>
        <Stat label="Comfort score" highlight note={a.summary}><span className="font-serif text-3xl md:text-4xl">{a.score} / 10</span></Stat>
        <ul className="space-y-2 rounded-xl border border-sand/60 bg-paper p-4 text-sm">{a.tips.map((t) => <li key={t}>• {t}</li>)}</ul>
      </>}
      note="General guidance for Islamabad/Rawalpindi (~33°N). Every plot is different — neighbouring buildings, trees and street width matter too."
    />
  );
}

// ── Prime Plot Feasibility Tool ──────────────────────────────────────────────
function PrimePlotTool() {
  const [society, setSociety] = useState<'faisal-hills' | 'b-17' | 'faisal-town'>('faisal-hills');
  const [size, setSize] = useState<'5m' | '8m' | '10m' | '1k'>('5m');
  const [facing, setFacing] = useState<'N' | 'S' | 'E' | 'W' | 'NE' | 'NW' | 'SE' | 'SW'>('N');
  const [streetWidth, setStreetWidth] = useState<number>(40);
  const [isCorner, setIsCorner] = useState(false);
  const [isPark, setIsPark] = useState(false);
  const [isBoulevard, setIsBoulevard] = useState(false);
  const [hasPossession, setHasPossession] = useState(true);

  const advice = orientationAdvice(facing);

  // Score computation
  const orientationPts = Math.round((advice.score / 10) * 25);
  const streetPts = streetWidth >= 80 ? 25 : streetWidth >= 60 ? 20 : streetWidth >= 50 ? 17 : 14;
  const attributePts = (isCorner ? 15 : 0) + (isPark ? 15 : 0) + (isBoulevard ? 15 : 0);
  const cappedAttributePts = Math.min(25, Math.max(5, attributePts || 8));
  const possessionPts = hasPossession ? 25 : 15;
  const totalScore = Math.min(100, orientationPts + streetPts + cappedAttributePts + possessionPts);

  // Price & construction estimate
  const basePrices: Record<string, Record<string, [number, number]>> = {
    'faisal-hills': {
      '5m': [4200000, 6800000],
      '8m': [5800000, 8500000],
      '10m': [7800000, 12500000],
      '1k': [15500000, 27000000],
    },
    'b-17': {
      '5m': [4000000, 6500000],
      '8m': [5500000, 8000000],
      '10m': [8500000, 14500000],
      '1k': [18000000, 32000000],
    },
    'faisal-town': {
      '5m': [5000000, 7800000],
      '8m': [6800000, 9800000],
      '10m': [9500000, 15000000],
      '1k': [20000000, 34000000],
    },
  };

  const range = basePrices[society]?.[size] ?? [4000000, 6000000];
  const premiumPct = (isCorner ? 10 : 0) + (isPark ? 10 : 0) + (isBoulevard ? 15 : 0);
  const lowVal = Math.round(range[0] * (1 + premiumPct / 100));
  const highVal = Math.round(range[1] * (1 + premiumPct / 100));

  // Build footprint and typical setbacks
  const dim = size === '5m' ? '25′ × 50′ (1,125 sq ft)' : size === '8m' ? '30′ × 60′ (1,620 sq ft)' : size === '10m' ? '35′ × 70′ (2,250 sq ft)' : '50′ × 90′ (4,500 sq ft)';
  const covered = size === '5m' ? 2100 : size === '8m' ? 2750 : size === '10m' ? 3300 : 5200;
  const greyEst = covered * RATES.construction.standard.grey;
  const turnkeyEst = covered * (RATES.construction.luxury.grey + RATES.construction.luxury.finishing);

  const scoreVerdict =
    totalScore >= 88
      ? 'Triple-A Prime Plot (Maximum Liquidity & Living Comfort)'
      : totalScore >= 75
      ? 'Grade-A Premium Plot (High Appreciation & Easy Construction)'
      : totalScore >= 60
      ? 'Solid Standard Residential Plot'
      : 'Speculative Holding / Long-term Development Plot';

  return (
    <Layout
      inputs={<>
        <Choice
          label="Housing Society"
          value={society}
          onChange={setSociety}
          options={[
            { value: 'faisal-hills', label: 'Faisal Hills (Taxila / Isb)' },
            { value: 'b-17', label: 'MPCHS B-17 Multi Gardens' },
            { value: 'faisal-town', label: 'Faisal Town / F-18' },
          ]}
        />
        <Choice
          label="Plot Size"
          value={size}
          onChange={setSize}
          options={[
            { value: '5m', label: '5 Marla' },
            { value: '8m', label: '8 Marla' },
            { value: '10m', label: '10 Marla' },
            { value: '1k', label: '1 Kanal' },
          ]}
        />
        <Choice
          label="Street Width (Road facing)"
          value={streetWidth}
          onChange={setStreetWidth}
          options={[
            { value: 40, label: '40 ft (Standard)' },
            { value: 50, label: '50 ft' },
            { value: 60, label: '60 ft' },
            { value: 80, label: '80 ft+' },
          ]}
        />
        <Choice
          label="Orientation / Sun Facing"
          value={facing}
          onChange={setFacing}
          options={(['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'] as const).map((f) => ({ value: f, label: f }))}
        />
        <div className="rounded-xl border border-sand bg-paper p-4 space-y-2.5">
          <p className="text-xs font-bold uppercase tracking-wider text-burgundy">Special Category & Status</p>
          <label className="flex items-center gap-2.5 text-sm text-ink cursor-pointer">
            <input type="checkbox" checked={isCorner} onChange={(e) => setIsCorner(e.target.checked)} className="rounded text-burgundy focus:ring-burgundy" />
            <span>Corner Plot (+10% Premium, Dual Light & Ventilation)</span>
          </label>
          <label className="flex items-center gap-2.5 text-sm text-ink cursor-pointer">
            <input type="checkbox" checked={isPark} onChange={(e) => setIsPark(e.target.checked)} className="rounded text-burgundy focus:ring-burgundy" />
            <span>Park / Green Belt Facing (+10% Premium, Permanent Open View)</span>
          </label>
          <label className="flex items-center gap-2.5 text-sm text-ink cursor-pointer">
            <input type="checkbox" checked={isBoulevard} onChange={(e) => setIsBoulevard(e.target.checked)} className="rounded text-burgundy focus:ring-burgundy" />
            <span>Main Boulevard Location (+15% Premium, 80ft–225ft Road)</span>
          </label>
          <label className="flex items-center gap-2.5 text-sm text-ink cursor-pointer">
            <input type="checkbox" checked={hasPossession} onChange={(e) => setHasPossession(e.target.checked)} className="rounded text-burgundy focus:ring-burgundy" />
            <span>Physical Possession Ready (Immediate Map Approval & Construction)</span>
          </label>
        </div>
      </>}
      results={<>
        <Stat label="Plot Scorecard Rating" highlight note={scoreVerdict}>
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-3xl md:text-4xl">{totalScore}</span>
            <span className="text-paper/70 font-sans text-lg">/ 100</span>
            {premiumPct > 0 && <span className="ml-auto rounded-full bg-gold px-2.5 py-0.5 text-xs font-bold text-burgundy-deep">+{premiumPct}% Premium</span>}
          </div>
        </Stat>
        <div className="grid gap-3 sm:grid-cols-2">
          <Stat label="Estimated Plot Value" note={`Includes ${premiumPct}% category premium`}>
            <span className="font-semibold text-burgundy">{full(lowVal)} – {full(highVal)}</span>
          </Stat>
          <Stat label="Plot Dimensions" note={`Standard RDA/Society standard`}>
            <span className="font-semibold">{dim}</span>
          </Stat>
          <Stat label="Est. Grey Structure Build" note={`≈ ${num(covered)} sq ft covered area`}>
            <Money value={greyEst} />
          </Stat>
          <Stat label="Est. A+ Turnkey Build" note={`Full designer finish with solar`}>
            <Money value={turnkeyEst} />
          </Stat>
        </div>
        <div className="rounded-xl border border-sand/60 bg-paper p-4 text-xs space-y-1.5 text-ink/80">
          <p className="font-bold text-burgundy uppercase tracking-wider">Setback & Construction Rules for this Plot:</p>
          <p>• <strong>Front Setback:</strong> {size === '1k' ? '15 ft open front lawn' : size === '10m' ? '7.5 to 10 ft front lawn' : '5 ft mandatory front open space'}.</p>
          <p>• <strong>Rear & Side Setbacks:</strong> 5 ft rear open space; {size === '1k' ? '5 ft on both sides' : size === '10m' ? '5 ft on one side' : 'Zero side setbacks (attached row design)'}.</p>
          <p>• <strong>Orientation Note:</strong> {advice.summary}</p>
        </div>
      </>}
      note="Values reflect Q1/Q2 2026 ground transactions in Faisal Hills & B-17 sectors. Actual market prices depend on specific street series, soil depth, and utility proximity. Consult our engineers for on-ground validation."
    />
  );
}

// ── Master Plan & Block Navigator Tool ───────────────────────────────────────
function MasterPlanMapTool() {
  const [society, setSociety] = useState<'faisal-hills' | 'b-17'>('faisal-hills');
  const [selectedBlock, setSelectedBlock] = useState<string>('executive');

  const blocksData: Record<string, Record<string, {
    name: string;
    possession: string;
    possessionBadge: string;
    prices: { size: string; range: string }[];
    features: string[];
    landmarks: string[];
    builderTip: string;
  }>> = {
    'faisal-hills': {
      executive: {
        name: 'Executive Block (Main Entrance)',
        possession: '100% On-Ground Physical Possession',
        possessionBadge: 'Ready to Build',
        prices: [
          { size: '5 Marla (25×50)', range: 'PKR 58 Lacs – 75 Lacs' },
          { size: '10 Marla (35×70)', range: 'PKR 1.10 Cr – 1.40 Cr' },
          { size: '1 Kanal (50×90)', range: 'PKR 2.15 Cr – 2.90 Cr' },
        ],
        features: ['Direct access from GT Road through monumental entrance', '225ft wide Main Central Boulevard', 'Full commercial hub and completed mosque', 'Highest rental yield and immediate family settlement'],
        landmarks: ['Faisal Hills Grand Monument', 'Executive Civic Commercial', 'Roots Millennium Campus'],
        builderTip: 'Ideal for instant living or fast commercial rental. Immediate map approvals by RDA and society.',
      },
      blockA: {
        name: 'Block A (Central Civic & Head Office)',
        possession: '100% Possession with Peak Construction Activity',
        possessionBadge: 'Active Community',
        prices: [
          { size: '5 Marla (25×50)', range: 'PKR 52 Lacs – 70 Lacs' },
          { size: '8 Marla (30×60)', range: 'PKR 75 Lacs – 92 Lacs' },
          { size: '10 Marla (35×70)', range: 'PKR 1.05 Cr – 1.32 Cr' },
          { size: '1 Kanal (50×90)', range: 'PKR 1.95 Cr – 2.65 Cr' },
        ],
        features: ['Home of Al-Ammana Head Office (Plot 46, Main Civic Centre)', 'Operational high schools, banks, and grocery supermarkets', 'Central Park and Grand Jamia Masjid', 'Paved 40ft to 150ft street grid with underground power'],
        landmarks: ['Al-Ammana Developers Head Office', 'Main Civic Centre Commercial', 'Block A Central Park'],
        builderTip: 'Our construction teams are actively building 8+ turnkey villas in Block A. Fast site inspections available daily.',
      },
      blockB: {
        name: 'Block B (Scenic Foothills & Cricket Ground)',
        possession: '95% Possession with Fast Inhabitation',
        possessionBadge: 'Ready to Build',
        prices: [
          { size: '5 Marla (25×50)', range: 'PKR 46 Lacs – 62 Lacs' },
          { size: '8 Marla (30×60)', range: 'PKR 68 Lacs – 84 Lacs' },
          { size: '10 Marla (35×70)', range: 'PKR 86 Lacs – 1.15 Cr' },
          { size: '1 Kanal (50×90)', range: 'PKR 1.65 Cr – 2.25 Cr' },
        ],
        features: ['Picturesque Margalla foothills backdrop with natural air ventilation', 'Faisal Hills Cricket Stadium and sports arena', 'Direct connectivity to Block A and Executive Boulevard', 'Solid natural clay terrain minimizing foundation piling costs'],
        landmarks: ['Faisal Hills Sports Ground', 'Block B Mini Commercial', 'Sector Green Belt Park'],
        builderTip: 'Optimal soil bearing capacity across most streets; lower foundation earthwork overheads compared to depression zones.',
      },
      blockC: {
        name: 'Block C (Lake View & Extended Residential)',
        possession: 'Possession Available across Sector Streets',
        possessionBadge: 'Rapid Construction',
        prices: [
          { size: '5 Marla (25×50)', range: 'PKR 40 Lacs – 56 Lacs' },
          { size: '8 Marla (30×60)', range: 'PKR 60 Lacs – 76 Lacs' },
          { size: '10 Marla (35×70)', range: 'PKR 76 Lacs – 98 Lacs' },
          { size: '1 Kanal (50×90)', range: 'PKR 1.45 Cr – 2.05 Cr' },
        ],
        features: ['Planned central artificial lake and leisure waterpark', 'Spacious residential zoning with large community parks', 'Direct route to future Margalla Avenue northern extension', 'Attractive price-to-size ratio for long-term family residence'],
        landmarks: ['Proposed Central Lake', 'Block C Markaz', 'Primary Sector School'],
        builderTip: 'Check specific street filling depth before buying — street numbers near natural depression benefit from deep foundation beam design.',
      },
      blockD: {
        name: 'Block D (Margalla Skyline & Mountain View)',
        possession: 'Developing & Early Possession Phases',
        possessionBadge: 'Emerging Value',
        prices: [
          { size: '5 Marla (25×50)', range: 'PKR 36 Lacs – 50 Lacs' },
          { size: '8 Marla (30×60)', range: 'PKR 54 Lacs – 70 Lacs' },
          { size: '10 Marla (35×70)', range: 'PKR 68 Lacs – 88 Lacs' },
          { size: '1 Kanal (50×90)', range: 'PKR 1.30 Cr – 1.80 Cr' },
        ],
        features: ['Elevated ridgeline with direct unblocked Margalla mountain views', 'Cooler summer temperature due to mountain elevation', 'Low entry price points offering high upside potential', 'Wide internal arterial roads connected to Prime Block'],
        landmarks: ['Block D Skyline Viewpoint', 'Sector D Commercial Zone'],
        builderTip: 'Great for future residential build with breathtaking rooftop views; require contour-specific basement architectural planning.',
      },
      prime: {
        name: 'Prime Block (New Master Planned Sector)',
        possession: 'Rapid Development with Balloting Completed',
        possessionBadge: 'High Appreciation',
        prices: [
          { size: '5 Marla (25×50)', range: 'PKR 34 Lacs – 46 Lacs' },
          { size: '8 Marla (30×60)', range: 'PKR 50 Lacs – 65 Lacs' },
          { size: '10 Marla (35×70)', range: 'PKR 62 Lacs – 80 Lacs' },
          { size: '1 Kanal (50×90)', range: 'PKR 1.20 Cr – 1.60 Cr' },
        ],
        features: ['State-of-the-art underground utility infrastructure planned', '150ft central arterial boulevard connecting to Margalla Highway', 'Modern commercial boulevard and corporate towers zone', 'Strongest capital appreciation trajectory for 2026–2028'],
        landmarks: ['Prime Central Boulevard', 'Future Commercial High-Street'],
        builderTip: 'Recommended for investors seeking maximum 24-month returns before full home construction rollout.',
      },
    },
    'b-17': {
      blockA: {
        name: 'Block A (CDA Sector Adjacent)',
        possession: '100% Mature Sector, Fully Built',
        possessionBadge: 'Established City',
        prices: [
          { size: '10 Marla (35×70)', range: 'PKR 1.40 Cr – 1.90 Cr' },
          { size: '1 Kanal (50×90)', range: 'PKR 2.50 Cr – 3.60 Cr' },
        ],
        features: ['Immediate proximity to GT Road and Sector B-17 main gate', 'Established commercial banks, branded food chains, and clinics', 'Fully mature tree-lined avenues with underground gas/electricity', 'Highest rental stability in Zone II Islamabad'],
        landmarks: ['B-17 Main Entrance', 'Block A Commercial Complex', 'Masjid-e-Quba'],
        builderTip: 'High rental demand for executive tenants working in Islamabad and Taxila heavy industries.',
      },
      blockB: {
        name: 'Block B (Central Community)',
        possession: '100% Possession, Highly Populated',
        possessionBadge: 'Active Community',
        prices: [
          { size: '10 Marla (35×70)', range: 'PKR 1.25 Cr – 1.70 Cr' },
          { size: '1 Kanal (50×90)', range: 'PKR 2.20 Cr – 3.10 Cr' },
        ],
        features: ['Large community parks, badminton courts, and walking tracks', 'Central commercial hub with active departmental stores', 'High security gated sector with 24/7 surveillance'],
        landmarks: ['Block B Central Park', 'Markaz B-17'],
        builderTip: 'Well suited for double-unit Spanish or contemporary family villas with dual rental income.',
      },
      blockC: {
        name: 'Block C (Scenic Central)',
        possession: '100% Possession with Steady Construction',
        possessionBadge: 'Ready to Build',
        prices: [
          { size: '10 Marla (35×70)', range: 'PKR 1.15 Cr – 1.55 Cr' },
          { size: '1 Kanal (50×90)', range: 'PKR 2.00 Cr – 2.80 Cr' },
        ],
        features: ['Elevated natural slope offering natural drainage and valley vistas', 'Direct access to Multi Zoo and family recreation areas', 'Active street lighting and water filtration plants'],
        landmarks: ['Multi Zoo B-17', 'Block C Commercial Zone'],
        builderTip: 'Ideal foundation stability with rocky substrate; excellent for multi-storey residential builds.',
      },
      blockG: {
        name: 'Block G (Motorway M-1 Interchange Gateway)',
        possession: 'Possession Live with Rapid Expansion',
        possessionBadge: 'High Growth Sector',
        prices: [
          { size: '5 Marla (25×50)', range: 'PKR 38 Lacs – 54 Lacs' },
          { size: '8 Marla (30×60)', range: 'PKR 56 Lacs – 72 Lacs' },
          { size: '10 Marla (35×70)', range: 'PKR 75 Lacs – 1.05 Cr' },
          { size: '1 Kanal (50×90)', range: 'PKR 1.40 Cr – 1.95 Cr' },
        ],
        features: ['Direct dedicated interchange connecting to M-1 Islamabad-Peshawar Motorway', 'Newest master planned sector of MPCHS Multi Gardens', 'Modern commercial civic layout with expansive wide avenues', 'Fastest travel time to New Islamabad International Airport (15 mins)'],
        landmarks: ['B-17 Motorway M-1 Interchange', 'Block G Central Boulevard'],
        builderTip: 'Top sector choice for overseas Pakistanis and frequent flyers due to instant motorway connectivity.',
      },
    },
  };

  const currentSocietyBlocks = blocksData[society] ?? blocksData['faisal-hills'];
  const blockKeys = Object.keys(currentSocietyBlocks);
  const activeKey = currentSocietyBlocks[selectedBlock] ? selectedBlock : blockKeys[0];
  const info = currentSocietyBlocks[activeKey] ?? currentSocietyBlocks[blockKeys[0]];

  return (
    <Layout
      inputs={<>
        <Choice
          label="Select Housing Project"
          value={society}
          onChange={(s) => {
            setSociety(s);
            setSelectedBlock(s === 'faisal-hills' ? 'executive' : 'blockA');
          }}
          options={[
            { value: 'faisal-hills', label: 'Faisal Hills (Taxila / Isb)' },
            { value: 'b-17', label: 'MPCHS B-17 Multi Gardens' },
          ]}
        />
        <Choice
          label="Select Sector / Block"
          value={activeKey}
          onChange={setSelectedBlock}
          options={blockKeys.map((k) => ({
            value: k,
            label: currentSocietyBlocks[k].name.split(' (')[0],
          }))}
        />
        <div className="rounded-xl border border-sand bg-paper p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-burgundy">Possession Status</span>
            <span className="rounded-full bg-burgundy/10 px-2.5 py-1 text-xs font-semibold text-burgundy">{info.possessionBadge}</span>
          </div>
          <p className="text-sm font-medium text-ink">{info.possession}</p>
          <div className="border-t border-sand/50 pt-2.5">
            <p className="text-xs font-bold uppercase tracking-wider text-burgundy mb-1">Key Landmarks & Points of Interest</p>
            <ul className="text-xs text-ink/70 space-y-1">
              {info.landmarks.map((l) => <li key={l}>📍 {l}</li>)}
            </ul>
          </div>
        </div>
      </>}
      results={<>
        <Stat label={`Verified 2026 Ground Rates · ${info.name}`} highlight note="Verified cash market transaction brackets">
          <div className="space-y-1.5 mt-2">
            {info.prices.map((p) => (
              <div key={p.size} className="flex items-center justify-between border-b border-paper/20 pb-1 text-sm font-sans">
                <span className="text-paper/90">{p.size}</span>
                <span className="font-semibold text-gold">{p.range}</span>
              </div>
            ))}
          </div>
        </Stat>
        <div className="rounded-xl border border-sand/60 bg-paper p-4 space-y-2">
          <p className="text-xs font-bold uppercase tracking-wider text-burgundy">Block Features & Infrastructure</p>
          <ul className="text-xs text-ink/80 space-y-1.5">
            {info.features.map((f) => <li key={f} className="flex items-start gap-1.5"><span>✓</span><span>{f}</span></li>)}
          </ul>
        </div>
        <div className="rounded-xl border border-sand/60 bg-paper p-4 space-y-1.5 text-xs text-ink/80">
          <p className="font-bold text-burgundy uppercase tracking-wider">Al-Ammana Construction Engineering Advice:</p>
          <p>{info.builderTip}</p>
        </div>
      </>}
      note="Block rates are updated bi-weekly by Al-Ammana Developers based on executed registry & transfer records in Faisal Hills & B-17."
    />
  );
}

const TOOL_UI: Record<string, () => ReactNode> = {
  'construction-cost': ConstructionCostTool,
  materials: MaterialsTool,
  'buildable-area': BuildableAreaTool,
  area: AreaTool,
  installments: InstallmentsTool,
  'home-finance': HomeFinanceTool,
  affordability: AffordabilityTool,
  'transfer-costs': TransferCostsTool,
  'buy-vs-build': BuyVsBuildTool,
  investment: InvestmentTool,
  'rent-yield': RentYieldTool,
  partnership: PartnershipTool,
  portfolio: PortfolioTool,
  'rooftop-solar': RooftopSolarTool,
  'plot-orientation': OrientationTool,
  'prime-plot': PrimePlotTool,
  'master-plan-map': MasterPlanMapTool,
};

export default function ToolClient({ slug }: { slug: string }) {
  const meta = toolBySlug(slug);
  const Tool = TOOL_UI[slug];

  useEffect(() => {
    trackClarityEvent('calculator_opened');
    setClarityTag('active_calculator', slug);
    if (meta?.group) {
      setClarityTag('calculator_group', meta.group);
    }
  }, [slug, meta?.group]);

  const wa = useMemo(() => `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(`Assalam o Alaikum, I used your ${meta?.name ?? 'calculator'} and would like exact figures.`)}`, [meta?.name]);
  if (!meta || !Tool) return null;
  return (
    <div className="pt-20">
      <section className="bg-beige">
        <div className="mx-auto max-w-[1600px] px-4 py-10 md:py-14">
          <Link href="/tools" className="text-sm text-burgundy hover:underline">← All tools</Link>
          <p className="mt-4 text-[12px] font-bold uppercase tracking-[0.3em] text-burgundy">{meta.group}</p>
          <h1 className="mt-2 max-w-4xl font-serif text-4xl leading-tight text-ink md:text-5xl">{meta.name}</h1>
          <p className="mt-3 max-w-3xl text-ink/70">{meta.description}</p>
        </div>
      </section>
      <section className="mx-auto max-w-[1600px] px-4 pb-16">
        <Tool />
        <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl bg-burgundy p-6 text-paper md:flex-row md:items-center md:justify-between md:p-8">
          <div>
            <p className="font-serif text-2xl">Want exact figures for your plot?</p>
            <p className="text-paper/70">Our team prices real projects in Faisal Hills and the Twin Cities every day.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackClarityEvent('whatsapp_tool_inquiry');
                setClarityTag('tool_inquired', slug);
                upgradeClaritySession('calculator_whatsapp_conversion');
              }}
              className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 font-semibold text-burgundy-deep"
            >
              <MessageCircle size={18} /> WhatsApp us
            </a>
            <Link
              href="/contact"
              onClick={() => {
                trackClarityEvent('tool_contact_form_click');
                setClarityTag('tool_inquired', slug);
              }}
              className="inline-flex items-center rounded-full border border-paper/40 px-5 py-3"
            >
              Contact form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
