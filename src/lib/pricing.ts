/**
 * Price helpers for partner projects.
 *
 * Developers in this market quote a single rate per square foot and let the
 * unit size do the rest. So rather than maintaining a price against every unit
 * type — which goes stale the moment the rate moves — a project stores one
 * `pricing.pricePerSqft` and every unit price is derived from it here.
 *
 * When the rate is absent the UI shows "Price on request" instead of a number.
 * Never hard-code a computed figure back into the data file: the whole point is
 * that changing one rate updates every unit on the site at once.
 */

/** Pulls the numeric square footage out of strings like "1,295 sq ft". */
export function parseSqft(size: string): number | null {
  const m = size.replace(/,/g, '').match(/(\d+(?:\.\d+)?)/);
  return m ? parseFloat(m[1]) : null;
}

/** Pulls the numeric rate out of "PKR 30,000" or "30000". */
export function parseRate(rate: string): number | null {
  const m = rate.replace(/,/g, '').match(/(\d+(?:\.\d+)?)/);
  return m ? parseFloat(m[1]) : null;
}

/** Formats a PKR amount the way buyers here actually read it. */
export function formatPKR(amount: number): string {
  if (amount >= 10_000_000) {
    const cr = amount / 10_000_000;
    return `PKR ${cr % 1 === 0 ? cr.toFixed(0) : cr.toFixed(2)} crore`;
  }
  if (amount >= 100_000) {
    const lac = amount / 100_000;
    return `PKR ${lac % 1 === 0 ? lac.toFixed(0) : lac.toFixed(1)} lac`;
  }
  return `PKR ${new Intl.NumberFormat('en-PK').format(Math.round(amount))}`;
}

/**
 * Price for one unit at the project's rate, or null when no rate is set.
 * `surchargePct` covers corner units and view premiums where a project applies
 * one — pass it only when the developer has actually stated it.
 */
export function unitPrice(
  size: string,
  pricePerSqft?: string,
  surchargePct = 0
): string | null {
  if (!pricePerSqft) return null;
  const sqft = parseSqft(size);
  const rate = parseRate(pricePerSqft);
  if (!sqft || !rate) return null;
  return formatPKR(sqft * rate * (1 + surchargePct / 100));
}

/**
 * Range across a set of unit sizes, e.g. "PKR 3.9 crore – PKR 2.2 crore".
 * Returns null when there is no rate, so callers can fall back to a CTA.
 */
export function priceRange(sizes: string[], pricePerSqft?: string): string | null {
  if (!pricePerSqft) return null;
  const rate = parseRate(pricePerSqft);
  if (!rate) return null;
  const values = sizes.map(parseSqft).filter((n): n is number => n !== null).map(n => n * rate);
  if (!values.length) return null;
  const min = Math.min(...values);
  const max = Math.max(...values);
  return min === max ? formatPKR(min) : `${formatPKR(min)} – ${formatPKR(max)}`;
}
