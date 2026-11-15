/**
 * Official Payment Plans & Construction Rates for Faisal Hills.
 * Transcribed directly from Al Ammana Developers' certified rate sheets and PDF brochures.
 * Covers Block A, Block B, Block C, Block D, and Executive Block.
 */

export interface GrayPlanRow {
  srNo: number;
  plotSeries: string;
  block: string;
  size: string; // e.g. "25×50"
  marla: string; // e.g. "5 Marla"
  measuringSqYds: number;
  coveredAreaSqFt: number;
  storey: string; // e.g. "G+1+Mumty"
  totalPriceLuxury: number; // in PKR
  downPayment30: number; // 30% in PKR
  duration: string; // "1.5 Years"
}

export interface FinishedPlanRow {
  srNo: number;
  plotSeries: string;
  block: string;
  size: string;
  marla: string;
  measuringSqYds: number;
  coveredAreaSqFt: number;
  storey: string;
  priceExecutive: number; // in PKR
  downPaymentExecutive20: number; // 20%
  pricePremium: number; // in PKR
  downPaymentPremium20: number; // 20%
  priceLuxury: number; // in PKR
  downPaymentLuxury20: number; // 20%
  duration: string; // "2 Years"
}

export const BANK_DETAILS = {
  accountTitle: 'MUHAMMAD ABDULLAH',
  iban: 'PK 12MEZN 0003260114221513',
  bankName: 'MEEZAN BANK LTD',
  branch: 'B-17, Islamabad, Pakistan',
} as const;

export const TERMS_AND_CONDITIONS = [
  'A discount is available for lump-sum (full) payment at booking.',
  'In compliance with Islamic Shariah, no discount is available on early payment of installments once an installment plan has started.',
  'Construction work will be suspended if three consecutive installments are missed.',
  'There is a refund policy under which, if the purchaser defaults during the payment plan, the payment can be refunded after deduction of the contract amount.',
  'For Special Category Plots (Corner, Main Double Road, Park Facing, etc.), an additional 10% charge applies to the total cost.',
  'The total payment duration is flexible; payment plans can be customized from 3 months up to 2 years based on client preference.',
  'There are zero extra hidden charges on the construction.',
  'These rates apply to plots with solid natural land; if soil test reveals filled-in land, extra cost is charged only as per society bylaws for piling work and foundation bed.',
] as const;

export const GRAY_STRUCTURE_PLANS: Record<string, GrayPlanRow[]> = {
  'block-a': [
    { srNo: 1, plotSeries: '1600-2300', block: 'A', size: '25×50', marla: '5 Marla', measuringSqYds: 139, coveredAreaSqFt: 2300, storey: 'G+1+Mumty', totalPriceLuxury: 16050000, downPayment30: 4815000, duration: '1.5 Years' },
    { srNo: 2, plotSeries: '3200-3900', block: 'A', size: '25×50', marla: '5 Marla', measuringSqYds: 139, coveredAreaSqFt: 2300, storey: 'G+1+Mumty', totalPriceLuxury: 15050000, downPayment30: 4515000, duration: '1.5 Years' },
    { srNo: 3, plotSeries: '4672-4873', block: 'A', size: '25×50', marla: '5 Marla', measuringSqYds: 139, coveredAreaSqFt: 2300, storey: 'G+1+Mumty', totalPriceLuxury: 16050000, downPayment30: 4815000, duration: '1.5 Years' },
    { srNo: 4, plotSeries: '4864-5000', block: 'A', size: '25×50', marla: '5 Marla', measuringSqYds: 139, coveredAreaSqFt: 2300, storey: 'G+1+Mumty', totalPriceLuxury: 15550000, downPayment30: 4665000, duration: '1.5 Years' },
    { srNo: 5, plotSeries: '5100-5390', block: 'A', size: '25×50', marla: '5 Marla', measuringSqYds: 139, coveredAreaSqFt: 2300, storey: 'G+1+Mumty', totalPriceLuxury: 17050000, downPayment30: 5115000, duration: '1.5 Years' },
    { srNo: 6, plotSeries: '5391-5700', block: 'A', size: '25×50', marla: '5 Marla', measuringSqYds: 139, coveredAreaSqFt: 2300, storey: 'G+1+Mumty', totalPriceLuxury: 17550000, downPayment30: 5265000, duration: '1.5 Years' },
    { srNo: 7, plotSeries: '5800-5900', block: 'A', size: '25×50', marla: '5 Marla', measuringSqYds: 139, coveredAreaSqFt: 2300, storey: 'G+1+Mumty', totalPriceLuxury: 16050000, downPayment30: 4815000, duration: '1.5 Years' },
    { srNo: 8, plotSeries: '900-1300', block: 'A', size: '30×60', marla: '8 Marla', measuringSqYds: 200, coveredAreaSqFt: 3200, storey: 'G+1+Mumty', totalPriceLuxury: 22700000, downPayment30: 6810000, duration: '1.5 Years' },
    { srNo: 9, plotSeries: '4000-4200', block: 'A', size: '30×60', marla: '8 Marla', measuringSqYds: 200, coveredAreaSqFt: 3200, storey: 'G+1+Mumty', totalPriceLuxury: 21200000, downPayment30: 6360000, duration: '1.5 Years' },
    { srNo: 10, plotSeries: '4500-4600', block: 'A', size: '30×60', marla: '8 Marla', measuringSqYds: 200, coveredAreaSqFt: 3200, storey: 'G+1+Mumty', totalPriceLuxury: 25200000, downPayment30: 7560000, duration: '1.5 Years' },
    { srNo: 11, plotSeries: '800-899', block: 'A', size: '35×70', marla: '10 Marla', measuringSqYds: 272, coveredAreaSqFt: 4200, storey: 'G+1+Mumty', totalPriceLuxury: 26700000, downPayment30: 8010000, duration: '1.5 Years' },
    { srNo: 12, plotSeries: '4300-4400', block: 'A', size: '35×70', marla: '10 Marla', measuringSqYds: 272, coveredAreaSqFt: 4200, storey: 'G+1+Mumty', totalPriceLuxury: 28200000, downPayment30: 8460000, duration: '1.5 Years' },
    { srNo: 13, plotSeries: '700-800', block: 'A', size: '40×80', marla: '14 Marla', measuringSqYds: 356, coveredAreaSqFt: 5400, storey: 'G+1+Mumty', totalPriceLuxury: 33400000, downPayment30: 10020000, duration: '1.5 Years' },
    { srNo: 14, plotSeries: '100-200', block: 'A', size: '50×90', marla: '1 Kanal', measuringSqYds: 500, coveredAreaSqFt: 6500, storey: 'G+1+Mumty', totalPriceLuxury: 42750000, downPayment30: 12825000, duration: '1.5 Years' },
    { srNo: 15, plotSeries: '500-600', block: 'A', size: '50×90', marla: '1 Kanal', measuringSqYds: 500, coveredAreaSqFt: 6500, storey: 'G+1+Mumty', totalPriceLuxury: 40250000, downPayment30: 12075000, duration: '1.5 Years' },
  ],
  'block-b': [
    { srNo: 1, plotSeries: '1800-2800', block: 'B', size: '25×50', marla: '5 Marla', measuringSqYds: 139, coveredAreaSqFt: 2300, storey: 'G+1+Mumty', totalPriceLuxury: 14550000, downPayment30: 4365000, duration: '1.5 Years' },
    { srNo: 2, plotSeries: '3800-4400', block: 'B', size: '25×50', marla: '5 Marla', measuringSqYds: 139, coveredAreaSqFt: 2300, storey: 'G+1+Mumty', totalPriceLuxury: 14050000, downPayment30: 4215000, duration: '1.5 Years' },
    { srNo: 3, plotSeries: '4500-5200', block: 'B', size: '25×50', marla: '5 Marla', measuringSqYds: 139, coveredAreaSqFt: 2300, storey: 'G+1+Mumty', totalPriceLuxury: 14550000, downPayment30: 4365000, duration: '1.5 Years' },
    { srNo: 4, plotSeries: '5700-6900', block: 'B', size: '25×50', marla: '5 Marla', measuringSqYds: 139, coveredAreaSqFt: 2300, storey: 'G+1+Mumty', totalPriceLuxury: 14550000, downPayment30: 4365000, duration: '1.5 Years' },
    { srNo: 5, plotSeries: '8 marla plot', block: 'B', size: '30×60', marla: '8 Marla', measuringSqYds: 200, coveredAreaSqFt: 3200, storey: 'G+1+Mumty', totalPriceLuxury: 19200000, downPayment30: 5760000, duration: '1.5 Years' },
    { srNo: 6, plotSeries: '300-1000', block: 'B', size: '35×70', marla: '10 Marla', measuringSqYds: 272, coveredAreaSqFt: 4200, storey: 'G+1+Mumty', totalPriceLuxury: 26200000, downPayment30: 7860000, duration: '1.5 Years' },
    { srNo: 7, plotSeries: '7100-7200', block: 'B', size: '35×70', marla: '10 Marla', measuringSqYds: 272, coveredAreaSqFt: 4200, storey: 'G+1+Mumty', totalPriceLuxury: 25000000, downPayment30: 7500000, duration: '1.5 Years' },
    { srNo: 8, plotSeries: '100-200', block: 'B', size: '40×80', marla: '14 Marla', measuringSqYds: 356, coveredAreaSqFt: 5400, storey: 'G+1+Mumty', totalPriceLuxury: 34500000, downPayment30: 10350000, duration: '1.5 Years' },
    { srNo: 9, plotSeries: '8100-8300', block: 'B', size: '40×80', marla: '14 Marla', measuringSqYds: 356, coveredAreaSqFt: 5400, storey: 'G+1+Mumty', totalPriceLuxury: 29800000, downPayment30: 8940000, duration: '1.5 Years' },
    { srNo: 10, plotSeries: '7400-7600', block: 'B', size: '50×90', marla: '1 Kanal', measuringSqYds: 500, coveredAreaSqFt: 6500, storey: 'G+1+Mumty', totalPriceLuxury: 37150000, downPayment30: 11145000, duration: '1.5 Years' },
  ],
  'block-c': [
    { srNo: 1, plotSeries: '700-1100', block: 'C', size: '25×50', marla: '5 Marla', measuringSqYds: 139, coveredAreaSqFt: 2300, storey: 'G+1+Mumty', totalPriceLuxury: 15050000, downPayment30: 4515000, duration: '1.5 Years' },
    { srNo: 2, plotSeries: '1300-1800', block: 'C', size: '25×50', marla: '5 Marla', measuringSqYds: 139, coveredAreaSqFt: 2300, storey: 'G+1+Mumty', totalPriceLuxury: 14550000, downPayment30: 4365000, duration: '1.5 Years' },
    { srNo: 3, plotSeries: '2300-3400', block: 'C', size: '25×50', marla: '5 Marla', measuringSqYds: 139, coveredAreaSqFt: 2300, storey: 'G+1+Mumty', totalPriceLuxury: 14550000, downPayment30: 4365000, duration: '1.5 Years' },
    { srNo: 4, plotSeries: '5500-5800', block: 'C', size: '25×50', marla: '5 Marla', measuringSqYds: 139, coveredAreaSqFt: 2300, storey: 'G+1+Mumty', totalPriceLuxury: 14250000, downPayment30: 4275000, duration: '1.5 Years' },
    { srNo: 5, plotSeries: '6800-7200', block: 'C', size: '25×50', marla: '5 Marla', measuringSqYds: 139, coveredAreaSqFt: 2300, storey: 'G+1+Mumty', totalPriceLuxury: 14250000, downPayment30: 4275000, duration: '1.5 Years' },
    { srNo: 6, plotSeries: '7400-8000', block: 'C', size: '25×50', marla: '5 Marla', measuringSqYds: 139, coveredAreaSqFt: 2300, storey: 'G+1+Mumty', totalPriceLuxury: 14250000, downPayment30: 4275000, duration: '1.5 Years' },
    { srNo: 7, plotSeries: '1900-2200', block: 'C', size: '30×60', marla: '8 Marla', measuringSqYds: 200, coveredAreaSqFt: 3200, storey: 'G+1+Mumty', totalPriceLuxury: 19000000, downPayment30: 5700000, duration: '1.5 Years' },
    { srNo: 8, plotSeries: '7200-7300', block: 'C', size: '30×60', marla: '8 Marla', measuringSqYds: 200, coveredAreaSqFt: 3200, storey: 'G+1+Mumty', totalPriceLuxury: 19800000, downPayment30: 5940000, duration: '1.5 Years' },
    { srNo: 9, plotSeries: '100-200', block: 'C', size: '50×90', marla: '1 Kanal', measuringSqYds: 500, coveredAreaSqFt: 6500, storey: 'G+1+Mumty', totalPriceLuxury: 37650000, downPayment30: 11295000, duration: '1.5 Years' },
  ],
  'block-d': [
    { srNo: 1, plotSeries: '5 marla series', block: 'D', size: '25×50', marla: '5 Marla', measuringSqYds: 139, coveredAreaSqFt: 2300, storey: 'G+1+Mumty', totalPriceLuxury: 13550000, downPayment30: 4065000, duration: '1.5 Years' },
    { srNo: 2, plotSeries: '8 marla series', block: 'D', size: '30×60', marla: '8 Marla', measuringSqYds: 200, coveredAreaSqFt: 3200, storey: 'G+1+Mumty', totalPriceLuxury: 19000000, downPayment30: 5700000, duration: '1.5 Years' },
    { srNo: 3, plotSeries: '10 marla series', block: 'D', size: '35×70', marla: '10 Marla', measuringSqYds: 272, coveredAreaSqFt: 4200, storey: 'G+1+Mumty', totalPriceLuxury: 23700000, downPayment30: 7110000, duration: '1.5 Years' },
  ],
  'executive-block': [
    { srNo: 1, plotSeries: '300-600', block: 'Executive', size: '25×50', marla: '5 Marla', measuringSqYds: 139, coveredAreaSqFt: 2300, storey: 'G+1+Mumty', totalPriceLuxury: 17050000, downPayment30: 5115000, duration: '1.5 Years' },
    { srNo: 2, plotSeries: '700-900', block: 'Executive', size: '25×50', marla: '5 Marla', measuringSqYds: 139, coveredAreaSqFt: 2300, storey: 'G+1+Mumty', totalPriceLuxury: 16050000, downPayment30: 4815000, duration: '1.5 Years' },
    { srNo: 3, plotSeries: '1000-1100', block: 'Executive', size: '25×50', marla: '5 Marla', measuringSqYds: 139, coveredAreaSqFt: 2300, storey: 'G+1+Mumty', totalPriceLuxury: 18050000, downPayment30: 5415000, duration: '1.5 Years' },
    { srNo: 4, plotSeries: '200-300', block: 'Executive', size: '30×60', marla: '8 Marla', measuringSqYds: 200, coveredAreaSqFt: 3200, storey: 'G+1+Mumty', totalPriceLuxury: 23700000, downPayment30: 7110000, duration: '1.5 Years' },
    { srNo: 5, plotSeries: '1200-1300', block: 'Executive', size: '30×60', marla: '8 Marla', measuringSqYds: 200, coveredAreaSqFt: 3200, storey: 'G+1+Mumty', totalPriceLuxury: 24700000, downPayment30: 7410000, duration: '1.5 Years' },
    { srNo: 6, plotSeries: '178-232', block: 'Executive', size: '35×70', marla: '10 Marla', measuringSqYds: 272, coveredAreaSqFt: 4200, storey: 'G+1+Mumty', totalPriceLuxury: 29200000, downPayment30: 8760000, duration: '1.5 Years' },
    { srNo: 7, plotSeries: '1300-1400', block: 'Executive', size: '35×70', marla: '10 Marla', measuringSqYds: 272, coveredAreaSqFt: 4200, storey: 'G+1+Mumty', totalPriceLuxury: 29200000, downPayment30: 8760000, duration: '1.5 Years' },
  ],
};

export const FINISHED_HOUSE_PLANS: Record<string, FinishedPlanRow[]> = {
  'block-a': [
    { srNo: 1, plotSeries: '1600-2300', block: 'A', size: '25×50', marla: '5 Marla', measuringSqYds: 139, coveredAreaSqFt: 2300, storey: 'G+1+Mumty', priceExecutive: 21550000, downPaymentExecutive20: 4310000, pricePremium: 23950000, downPaymentPremium20: 4790000, priceLuxury: 29700000, downPaymentLuxury20: 5940000, duration: '2 Years' },
    { srNo: 2, plotSeries: '3200-3900', block: 'A', size: '25×50', marla: '5 Marla', measuringSqYds: 139, coveredAreaSqFt: 2300, storey: 'G+1+Mumty', priceExecutive: 20050000, downPaymentExecutive20: 4010000, pricePremium: 22450000, downPaymentPremium20: 4490000, priceLuxury: 28200000, downPaymentLuxury20: 5640000, duration: '2 Years' },
    { srNo: 3, plotSeries: '4672-4873', block: 'A', size: '25×50', marla: '5 Marla', measuringSqYds: 139, coveredAreaSqFt: 2300, storey: 'G+1+Mumty', priceExecutive: 21550000, downPaymentExecutive20: 4310000, pricePremium: 23950000, downPaymentPremium20: 4790000, priceLuxury: 29700000, downPaymentLuxury20: 5940000, duration: '2 Years' },
    { srNo: 4, plotSeries: '4864-5000', block: 'A', size: '25×50', marla: '5 Marla', measuringSqYds: 139, coveredAreaSqFt: 2300, storey: 'G+1+Mumty', priceExecutive: 21050000, downPaymentExecutive20: 4210000, pricePremium: 23450000, downPaymentPremium20: 4690000, priceLuxury: 29200000, downPaymentLuxury20: 5840000, duration: '2 Years' },
    { srNo: 5, plotSeries: '5100-5390', block: 'A', size: '25×50', marla: '5 Marla', measuringSqYds: 139, coveredAreaSqFt: 2300, storey: 'G+1+Mumty', priceExecutive: 22550000, downPaymentExecutive20: 4510000, pricePremium: 24950000, downPaymentPremium20: 4990000, priceLuxury: 30700000, downPaymentLuxury20: 6140000, duration: '2 Years' },
    { srNo: 6, plotSeries: '5391-5700', block: 'A', size: '25×50', marla: '5 Marla', measuringSqYds: 139, coveredAreaSqFt: 2300, storey: 'G+1+Mumty', priceExecutive: 23050000, downPaymentExecutive20: 4610000, pricePremium: 25450000, downPaymentPremium20: 5090000, priceLuxury: 31200000, downPaymentLuxury20: 6240000, duration: '2 Years' },
    { srNo: 7, plotSeries: '5800-5900', block: 'A', size: '25×50', marla: '5 Marla', measuringSqYds: 139, coveredAreaSqFt: 2300, storey: 'G+1+Mumty', priceExecutive: 21050000, downPaymentExecutive20: 4210000, pricePremium: 23450000, downPaymentPremium20: 4690000, priceLuxury: 29200000, downPaymentLuxury20: 5840000, duration: '2 Years' },
    { srNo: 8, plotSeries: '900-1300', block: 'A', size: '30×60', marla: '8 Marla', measuringSqYds: 200, coveredAreaSqFt: 3200, storey: 'G+1+Mumty', priceExecutive: 30000000, downPaymentExecutive20: 6000000, pricePremium: 33300000, downPaymentPremium20: 6660000, priceLuxury: 41300000, downPaymentLuxury20: 8260000, duration: '2 Years' },
    { srNo: 9, plotSeries: '4000-4200', block: 'A', size: '30×60', marla: '8 Marla', measuringSqYds: 200, coveredAreaSqFt: 3200, storey: 'G+1+Mumty', priceExecutive: 28500000, downPaymentExecutive20: 5700000, pricePremium: 31800000, downPaymentPremium20: 6360000, priceLuxury: 39800000, downPaymentLuxury20: 7960000, duration: '2 Years' },
    { srNo: 10, plotSeries: '4500-4600', block: 'A', size: '30×60', marla: '8 Marla', measuringSqYds: 200, coveredAreaSqFt: 3200, storey: 'G+1+Mumty', priceExecutive: 32500000, downPaymentExecutive20: 6500000, pricePremium: 35800000, downPaymentPremium20: 7160000, priceLuxury: 43800000, downPaymentLuxury20: 8760000, duration: '2 Years' },
    { srNo: 11, plotSeries: '800-899', block: 'A', size: '35×70', marla: '10 Marla', measuringSqYds: 272, coveredAreaSqFt: 4200, storey: 'G+1+Mumty', priceExecutive: 36000000, downPaymentExecutive20: 7200000, pricePremium: 40300000, downPaymentPremium20: 8060000, priceLuxury: 50800000, downPaymentLuxury20: 10160000, duration: '2 Years' },
    { srNo: 12, plotSeries: '4300-4400', block: 'A', size: '35×70', marla: '10 Marla', measuringSqYds: 272, coveredAreaSqFt: 4200, storey: 'G+1+Mumty', priceExecutive: 37500000, downPaymentExecutive20: 7500000, pricePremium: 41800000, downPaymentPremium20: 8360000, priceLuxury: 52300000, downPaymentLuxury20: 10460000, duration: '2 Years' },
    { srNo: 13, plotSeries: '700-800', block: 'A', size: '40×80', marla: '14 Marla', measuringSqYds: 356, coveredAreaSqFt: 5400, storey: 'G+1+Mumty', priceExecutive: 45100000, downPaymentExecutive20: 9020000, pricePremium: 50600000, downPaymentPremium20: 10120000, priceLuxury: 64100000, downPaymentLuxury20: 12820000, duration: '2 Years' },
    { srNo: 14, plotSeries: '100-200', block: 'A', size: '50×90', marla: '1 Kanal', measuringSqYds: 500, coveredAreaSqFt: 6500, storey: 'G+1+Mumty', priceExecutive: 56650000, downPaymentExecutive20: 11330000, pricePremium: 63250000, downPaymentPremium20: 12650000, priceLuxury: 79500000, downPaymentLuxury20: 15900000, duration: '2 Years' },
    { srNo: 15, plotSeries: '500-600', block: 'A', size: '50×90', marla: '1 Kanal', measuringSqYds: 500, coveredAreaSqFt: 6500, storey: 'G+1+Mumty', priceExecutive: 54150000, downPaymentExecutive20: 10830000, pricePremium: 60750000, downPaymentPremium20: 12150000, priceLuxury: 77000000, downPaymentLuxury20: 15400000, duration: '2 Years' },
  ],
  'block-b': [
    { srNo: 1, plotSeries: '1800-2800', block: 'B', size: '25×50', marla: '5 Marla', measuringSqYds: 139, coveredAreaSqFt: 2300, storey: 'G+1+Mumty', priceExecutive: 19550000, downPaymentExecutive20: 3910000, pricePremium: 21950000, downPaymentPremium20: 4390000, priceLuxury: 27700000, downPaymentLuxury20: 5540000, duration: '2 Years' },
    { srNo: 2, plotSeries: '3800-4400', block: 'B', size: '25×50', marla: '5 Marla', measuringSqYds: 139, coveredAreaSqFt: 2300, storey: 'G+1+Mumty', priceExecutive: 19050000, downPaymentExecutive20: 3810000, pricePremium: 21450000, downPaymentPremium20: 4290000, priceLuxury: 27200000, downPaymentLuxury20: 5440000, duration: '2 Years' },
    { srNo: 3, plotSeries: '4500-5200', block: 'B', size: '25×50', marla: '5 Marla', measuringSqYds: 139, coveredAreaSqFt: 2300, storey: 'G+1+Mumty', priceExecutive: 19550000, downPaymentExecutive20: 3910000, pricePremium: 21950000, downPaymentPremium20: 4390000, priceLuxury: 27700000, downPaymentLuxury20: 5540000, duration: '2 Years' },
    { srNo: 4, plotSeries: '5700-6900', block: 'B', size: '25×50', marla: '5 Marla', measuringSqYds: 139, coveredAreaSqFt: 2300, storey: 'G+1+Mumty', priceExecutive: 19550000, downPaymentExecutive20: 3910000, pricePremium: 21950000, downPaymentPremium20: 4390000, priceLuxury: 27700000, downPaymentLuxury20: 5540000, duration: '2 Years' },
    { srNo: 5, plotSeries: '8 marla plot', block: 'B', size: '30×60', marla: '8 Marla', measuringSqYds: 200, coveredAreaSqFt: 3200, storey: 'G+1+Mumty', priceExecutive: 26000000, downPaymentExecutive20: 5200000, pricePremium: 29300000, downPaymentPremium20: 5860000, priceLuxury: 37300000, downPaymentLuxury20: 7460000, duration: '2 Years' },
    { srNo: 6, plotSeries: '300-1000', block: 'B', size: '35×70', marla: '10 Marla', measuringSqYds: 272, coveredAreaSqFt: 4200, storey: 'G+1+Mumty', priceExecutive: 35000000, downPaymentExecutive20: 7000000, pricePremium: 39300000, downPaymentPremium20: 7860000, priceLuxury: 49800000, downPaymentLuxury20: 9960000, duration: '2 Years' },
    { srNo: 7, plotSeries: '7100-7200', block: 'B', size: '35×70', marla: '10 Marla', measuringSqYds: 272, coveredAreaSqFt: 4200, storey: 'G+1+Mumty', priceExecutive: 34000000, downPaymentExecutive20: 6800000, pricePremium: 38300000, downPaymentPremium20: 7660000, priceLuxury: 48800000, downPaymentLuxury20: 9760000, duration: '2 Years' },
    { srNo: 8, plotSeries: '100-200', block: 'B', size: '40×80', marla: '14 Marla', measuringSqYds: 356, coveredAreaSqFt: 5400, storey: 'G+1+Mumty', priceExecutive: 45600000, downPaymentExecutive20: 9120000, pricePremium: 51100000, downPaymentPremium20: 10220000, priceLuxury: 64600000, downPaymentLuxury20: 12920000, duration: '2 Years' },
    { srNo: 9, plotSeries: '8100-8300', block: 'B', size: '40×80', marla: '14 Marla', measuringSqYds: 356, coveredAreaSqFt: 5400, storey: 'G+1+Mumty', priceExecutive: 41100000, downPaymentExecutive20: 8220000, pricePremium: 46600000, downPaymentPremium20: 9320000, priceLuxury: 60100000, downPaymentLuxury20: 12020000, duration: '2 Years' },
    { srNo: 10, plotSeries: '7400-7600', block: 'B', size: '50×90', marla: '1 Kanal', measuringSqYds: 500, coveredAreaSqFt: 6500, storey: 'G+1+Mumty', priceExecutive: 50650000, downPaymentExecutive20: 10130000, pricePremium: 57250000, downPaymentPremium20: 11450000, priceLuxury: 73500000, downPaymentLuxury20: 14700000, duration: '2 Years' },
  ],
  'block-c': [
    { srNo: 1, plotSeries: '700-1100', block: 'C', size: '25×50', marla: '5 Marla', measuringSqYds: 139, coveredAreaSqFt: 2300, storey: 'G+1+Mumty', priceExecutive: 20050000, downPaymentExecutive20: 4010000, pricePremium: 22450000, downPaymentPremium20: 4490000, priceLuxury: 28200000, downPaymentLuxury20: 5640000, duration: '2 Years' },
    { srNo: 2, plotSeries: '1300-1800', block: 'C', size: '25×50', marla: '5 Marla', measuringSqYds: 139, coveredAreaSqFt: 2300, storey: 'G+1+Mumty', priceExecutive: 19550000, downPaymentExecutive20: 3910000, pricePremium: 21950000, downPaymentPremium20: 4390000, priceLuxury: 27700000, downPaymentLuxury20: 5540000, duration: '2 Years' },
    { srNo: 3, plotSeries: '2300-3400', block: 'C', size: '25×50', marla: '5 Marla', measuringSqYds: 139, coveredAreaSqFt: 2300, storey: 'G+1+Mumty', priceExecutive: 19550000, downPaymentExecutive20: 3910000, pricePremium: 21950000, downPaymentPremium20: 4390000, priceLuxury: 27700000, downPaymentLuxury20: 5540000, duration: '2 Years' },
    { srNo: 4, plotSeries: '5500-5800', block: 'C', size: '25×50', marla: '5 Marla', measuringSqYds: 139, coveredAreaSqFt: 2300, storey: 'G+1+Mumty', priceExecutive: 19250000, downPaymentExecutive20: 3850000, pricePremium: 21650000, downPaymentPremium20: 4330000, priceLuxury: 27400000, downPaymentLuxury20: 5480000, duration: '2 Years' },
    { srNo: 5, plotSeries: '6800-7200', block: 'C', size: '25×50', marla: '5 Marla', measuringSqYds: 139, coveredAreaSqFt: 2300, storey: 'G+1+Mumty', priceExecutive: 19250000, downPaymentExecutive20: 3850000, pricePremium: 21650000, downPaymentPremium20: 4330000, priceLuxury: 27400000, downPaymentLuxury20: 5480000, duration: '2 Years' },
    { srNo: 6, plotSeries: '7400-8000', block: 'C', size: '25×50', marla: '5 Marla', measuringSqYds: 139, coveredAreaSqFt: 2300, storey: 'G+1+Mumty', priceExecutive: 19250000, downPaymentExecutive20: 3850000, pricePremium: 21650000, downPaymentPremium20: 4330000, priceLuxury: 27400000, downPaymentLuxury20: 5480000, duration: '2 Years' },
    { srNo: 7, plotSeries: '1900-2200', block: 'C', size: '30×60', marla: '8 Marla', measuringSqYds: 200, coveredAreaSqFt: 3200, storey: 'G+1+Mumty', priceExecutive: 26000000, downPaymentExecutive20: 5200000, pricePremium: 29300000, downPaymentPremium20: 5860000, priceLuxury: 37300000, downPaymentLuxury20: 7460000, duration: '2 Years' },
    { srNo: 8, plotSeries: '7200-7300', block: 'C', size: '30×60', marla: '8 Marla', measuringSqYds: 200, coveredAreaSqFt: 3200, storey: 'G+1+Mumty', priceExecutive: 26500000, downPaymentExecutive20: 5300000, pricePremium: 29800000, downPaymentPremium20: 5960000, priceLuxury: 37800000, downPaymentLuxury20: 7560000, duration: '2 Years' },
    { srNo: 9, plotSeries: '100-200', block: 'C', size: '50×90', marla: '1 Kanal', measuringSqYds: 500, coveredAreaSqFt: 6500, storey: 'G+1+Mumty', priceExecutive: 51150000, downPaymentExecutive20: 10230000, pricePremium: 57750000, downPaymentPremium20: 11550000, priceLuxury: 74000000, downPaymentLuxury20: 14800000, duration: '2 Years' },
  ],
  'block-d': [
    { srNo: 1, plotSeries: '5 marla series', block: 'D', size: '25×50', marla: '5 Marla', measuringSqYds: 139, coveredAreaSqFt: 2300, storey: 'G+1+Mumty', priceExecutive: 18150000, downPaymentExecutive20: 3630000, pricePremium: 20950000, downPaymentPremium20: 4190000, priceLuxury: 26700000, downPaymentLuxury20: 5340000, duration: '2 Years' },
    { srNo: 2, plotSeries: '8 marla series', block: 'D', size: '30×60', marla: '8 Marla', measuringSqYds: 200, coveredAreaSqFt: 3200, storey: 'G+1+Mumty', priceExecutive: 25400000, downPaymentExecutive20: 5080000, pricePremium: 29100000, downPaymentPremium20: 5820000, priceLuxury: 37100000, downPaymentLuxury20: 7420000, duration: '2 Years' },
    { srNo: 3, plotSeries: '10 marla series', block: 'D', size: '35×70', marla: '10 Marla', measuringSqYds: 272, coveredAreaSqFt: 4200, storey: 'G+1+Mumty', priceExecutive: 32100000, downPaymentExecutive20: 6420000, pricePremium: 36800000, downPaymentPremium20: 7360000, priceLuxury: 47300000, downPaymentLuxury20: 9460000, duration: '2 Years' },
  ],
  'executive-block': [
    { srNo: 1, plotSeries: '300-600', block: 'Executive', size: '25×50', marla: '5 Marla', measuringSqYds: 139, coveredAreaSqFt: 2300, storey: 'G+1+Mumty', priceExecutive: 22550000, downPaymentExecutive20: 4510000, pricePremium: 24950000, downPaymentPremium20: 4990000, priceLuxury: 30700000, downPaymentLuxury20: 6140000, duration: '2 Years' },
    { srNo: 2, plotSeries: '700-900', block: 'Executive', size: '25×50', marla: '5 Marla', measuringSqYds: 139, coveredAreaSqFt: 2300, storey: 'G+1+Mumty', priceExecutive: 21550000, downPaymentExecutive20: 4310000, pricePremium: 23950000, downPaymentPremium20: 4790000, priceLuxury: 29700000, downPaymentLuxury20: 5940000, duration: '2 Years' },
    { srNo: 3, plotSeries: '1000-1100', block: 'Executive', size: '25×50', marla: '5 Marla', measuringSqYds: 139, coveredAreaSqFt: 2300, storey: 'G+1+Mumty', priceExecutive: 23550000, downPaymentExecutive20: 4710000, pricePremium: 25950000, downPaymentPremium20: 5190000, priceLuxury: 31700000, downPaymentLuxury20: 6340000, duration: '2 Years' },
    { srNo: 4, plotSeries: '200-300', block: 'Executive', size: '30×60', marla: '8 Marla', measuringSqYds: 200, coveredAreaSqFt: 3200, storey: 'G+1+Mumty', priceExecutive: 31000000, downPaymentExecutive20: 6200000, pricePremium: 34300000, downPaymentPremium20: 6860000, priceLuxury: 42300000, downPaymentLuxury20: 8460000, duration: '2 Years' },
    { srNo: 5, plotSeries: '1200-1300', block: 'Executive', size: '30×60', marla: '8 Marla', measuringSqYds: 200, coveredAreaSqFt: 3200, storey: 'G+1+Mumty', priceExecutive: 32000000, downPaymentExecutive20: 6400000, pricePremium: 35300000, downPaymentPremium20: 7060000, priceLuxury: 43300000, downPaymentLuxury20: 8660000, duration: '2 Years' },
    { srNo: 6, plotSeries: '178-232', block: 'Executive', size: '35×70', marla: '10 Marla', measuringSqYds: 272, coveredAreaSqFt: 4200, storey: 'G+1+Mumty', priceExecutive: 38500000, downPaymentExecutive20: 7700000, pricePremium: 42800000, downPaymentPremium20: 8560000, priceLuxury: 53300000, downPaymentLuxury20: 10660000, duration: '2 Years' },
    { srNo: 7, plotSeries: '1300-1400', block: 'Executive', size: '35×70', marla: '10 Marla', measuringSqYds: 272, coveredAreaSqFt: 4200, storey: 'G+1+Mumty', priceExecutive: 38500000, downPaymentExecutive20: 7700000, pricePremium: 42800000, downPaymentPremium20: 8560000, priceLuxury: 53300000, downPaymentLuxury20: 10660000, duration: '2 Years' },
  ],
};
