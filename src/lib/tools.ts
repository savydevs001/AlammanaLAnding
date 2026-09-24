/** Registry of the public calculators under /tools. Adding a tool here adds
 *  it to the hub, the sitemap and its static route. */
export interface ToolMeta {
  slug: string;
  name: string;
  short: string;
  description: string;
  group: 'Build' | 'Buy & finance' | 'Invest' | 'Plot & solar';
  keywords: string[];
}

export const TOOLS: ToolMeta[] = [
  { slug: 'construction-cost', name: 'Construction Cost Calculator', short: 'Grey structure + finishing cost by quality.', group: 'Build', description: 'Estimate the cost of building a house in Islamabad, Rawalpindi or Faisal Hills — covered area, grey structure and finishing cost by quality, for any plot size and number of floors.', keywords: ['house construction cost Pakistan', 'grey structure cost per sq ft', '5 marla construction cost', '10 marla house cost'] },
  { slug: 'materials', name: 'Material Quantity & Cost', short: 'Cement, steel, bricks, sand and crush for your house.', group: 'Build', description: 'Estimate cement bags, steel, bricks, sand and crush needed for a grey structure, and their cost at today’s rates.', keywords: ['cement bags per sq ft', 'steel required for house', 'bricks for 5 marla house'] },
  { slug: 'buildable-area', name: 'Buildable Area', short: 'Footprint and covered area from setbacks.', group: 'Build', description: 'Work out how much you can build on your plot: footprint after front, rear and side setbacks, coverage limit and total covered area across floors.', keywords: ['buildable area calculator', 'setbacks 5 marla', 'covered area 10 marla'] },
  { slug: 'area', name: 'Area Converter', short: 'Marla, kanal, sq ft, sq m, sq yd, acre.', group: 'Plot & solar', description: 'Convert between marla, kanal, square feet, square metres, square yards and acres — with both the 225 and 272.25 sq ft marla.', keywords: ['marla to sq ft', 'kanal to marla', 'marla calculator'] },
  { slug: 'installments', name: 'Instalment Plan', short: 'Down payment, possession and monthly instalments.', group: 'Buy & finance', description: 'Split a property price into down payment, possession payment and equal monthly or quarterly instalments.', keywords: ['plot installment calculator', 'property payment plan calculator'] },
  { slug: 'home-finance', name: 'Home Finance Decision Engine', short: 'Compare loans: EMI, true cost, prepay vs invest.', group: 'Buy & finance', description: 'Compare up to three home-finance options by EMI, total interest, present worth and annual worth, check affordability against your income, and decide whether to prepay or invest a windfall.', keywords: ['home loan calculator Pakistan', 'EMI calculator', 'Mera Ghar Mera Ashiana calculator'] },
  { slug: 'affordability', name: 'Affordability', short: 'What property price you can afford.', group: 'Buy & finance', description: 'Find the property price you can afford from your income, existing EMIs and savings — with and without financing.', keywords: ['how much house can I afford Pakistan', 'property affordability calculator'] },
  { slug: 'transfer-costs', name: 'Transfer Taxes & Fees', short: 'Buyer and seller costs on a property transfer.', group: 'Buy & finance', description: 'Estimate the advance taxes (236K / 236C), stamp duty, CVT, society transfer fee and commission on buying or selling property. Rates are editable — confirm current FBR and Punjab rates before paying.', keywords: ['property transfer tax Pakistan', '236K 236C calculator', 'stamp duty Punjab'] },
  { slug: 'buy-vs-build', name: 'Buy vs Build', short: 'Ready house vs plot + construction.', group: 'Buy & finance', description: 'Compare buying a ready house with buying a plot and building — including rent paid while you build.', keywords: ['buy or build house Pakistan', 'ready house vs construction'] },
  { slug: 'investment', name: 'Investment ROI', short: 'Future value, rent and inflation-adjusted return.', group: 'Invest', description: 'Project a property’s future value, rental income and real (inflation-adjusted) return under conservative, base and optimistic growth.', keywords: ['property ROI calculator', 'plot investment return Pakistan'] },
  { slug: 'rent-yield', name: 'Rental Yield', short: 'Gross and net yield on any property.', group: 'Invest', description: 'Calculate gross and net rental yield and payback period after vacancy and running costs.', keywords: ['rental yield calculator', 'rent return on property'] },
  { slug: 'partnership', name: 'Partnership Profit Analyzer', short: 'Landowner + cash partner: split, tax and real gain.', group: 'Invest', description: 'For a landowner and a cash partner building together: profit split, taxes, each side’s return in today’s money, and whether building beats selling the plot now.', keywords: ['construction partnership profit split', 'landowner builder partnership'] },
  { slug: 'portfolio', name: 'Portfolio Ranker', short: 'Rank your plots: buy more, hold or sell.', group: 'Invest', description: 'List the plots you own and rank each as buy more, hold or sell from its historical and expected return against your target.', keywords: ['property portfolio calculator', 'sell or hold plot'] },
  { slug: 'rooftop-solar', name: 'Rooftop Solar Planner', short: 'System size, panels, roof space and payback.', group: 'Plot & solar', description: 'Size a rooftop solar system from your monthly units: panels, kW, roof space used, generation, savings and payback for Islamabad / Rawalpindi.', keywords: ['solar system size calculator Pakistan', 'solar payback calculator'] },
  { slug: 'plot-orientation', name: 'Plot Orientation Guide', short: 'Sun-path, room layout and airflow by facing.', group: 'Plot & solar', description: 'What your plot’s facing means for sunlight, heat and room layout in Pakistan — and where to put the lawn, bedrooms and solar panels.', keywords: ['north facing house Pakistan', 'best plot facing direction'] },
];

export const toolBySlug = (slug: string) => TOOLS.find((t) => t.slug === slug);
