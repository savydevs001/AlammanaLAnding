/**
 * 3-Tier Finishing Materials Specifications: Executive, Premium, and Luxury.
 * Sourced directly from Al Ammana Developers' engineering specification sheet.
 */

export interface MaterialSpecItem {
  srNo: number;
  category: string;
  name: string;
  executive: string;
  premium: string;
  luxury: string;
}

export const FINISHING_TIERS = [
  {
    id: 'executive',
    name: 'Executive Finishing',
    sqftRate: 'PKR 5,500 / sq ft',
    description: 'High-quality domestic brands engineered for durability, modern aesthetics, and optimal value.',
    badge: 'Popular Value',
    accentColor: '#3D0A11',
  },
  {
    id: 'premium',
    name: 'Premium Finishing',
    sqftRate: 'PKR 6,500 / sq ft',
    description: 'Tier-1 national standards (Pakistan Cables, Master, Porta, Knauf, Berger) with refined craftsmanship.',
    badge: 'Most Chosen',
    accentColor: '#8C1D2F',
  },
  {
    id: 'luxury',
    name: 'Luxury Finishing',
    sqftRate: 'PKR 9,000 / sq ft',
    description: 'Imported European fixtures, Italian marble/granite, smart home automation, and bespoke architectural woodwork.',
    badge: 'Bespoke Luxury',
    accentColor: '#B8860B',
  },
] as const;

export const FINISHING_MATERIALS: MaterialSpecItem[] = [
  {
    "srNo": 1,
    "category": "Electrical & Solar Cables",
    "name": "ELECTRIC WIRE",
    "executive": "Fast cable, GM cable, wahid cables",
    "premium": "Pakistan Cables",
    "luxury": "Pakistan Cables"
  },
  {
    "srNo": 2,
    "category": "Electrical & Solar Cables",
    "name": "CAMERA WIRE",
    "executive": "Fast Cables, Newage / DVR",
    "premium": "China RG59, Belden / DVR",
    "luxury": "China RG59, Belden / NVR"
  },
  {
    "srNo": 3,
    "category": "Electrical & Solar Cables",
    "name": "SOLAR WIRE",
    "executive": "Fast Solar Cable",
    "premium": "IEC-certified Chinese cables",
    "luxury": "Pakistan Cables Solar, Newage Solar"
  },
  {
    "srNo": 4,
    "category": "Ceilings & Staircases",
    "name": "CEILING",
    "executive": "Local Gypsum Contractors",
    "premium": "Knauf, USG Boral, Diamond Ceiling,Chinoti  Spanish",
    "luxury": "USG Boral, Diamond Ceiling,Chinoti Spanish"
  },
  {
    "srNo": 5,
    "category": "Ceilings & Staircases",
    "name": "STAIRCASE",
    "executive": "Marble Medium Quality",
    "premium": "Marble High Quality",
    "luxury": "Marble/Granite High Quality"
  },
  {
    "srNo": 6,
    "category": "Tiles, Stone & Elevation",
    "name": "FLOORING \u2014 TILES",
    "executive": "Times/Orient/Oriel  max  2'x2'  1600-2400pkr",
    "premium": "Master tiles max 2'x4' 1800-3000pkr",
    "luxury": "Master Tiles, Sonex Tiles max 4'x4' 2000-4000"
  },
  {
    "srNo": 7,
    "category": "Tiles, Stone & Elevation",
    "name": "KITCHEN \u2014 TILES",
    "executive": "Times/Orient/Oriel max 1'x3' 1200-1800pkr",
    "premium": "Master tiles max 2'x4' 1800-3000pkr",
    "luxury": "Master Tiles, Sonex Tiles max 4'x4' 2000-4000"
  },
  {
    "srNo": 8,
    "category": "Tiles, Stone & Elevation",
    "name": "BATH \u2014 TILES",
    "executive": "Times/Orient/Oriel max 12''x36'' 1400-2000pkr",
    "premium": "Master tiles max 24''x48'' 2000-2500pkr",
    "luxury": "Master Tiles, Sonex Tiles max, Tukture 4'x4' 2000-4000"
  },
  {
    "srNo": 9,
    "category": "Tiles, Stone & Elevation",
    "name": "WALL  \u2014 STONE/TILE WORK",
    "executive": "Akhora Khattak, chakwal , sandstone",
    "premium": "Master Tiles Collection",
    "luxury": "Travertine 3D, Master Tiles Collection"
  },
  {
    "srNo": 10,
    "category": "Tiles, Stone & Elevation",
    "name": "FRONT-ELEVATION STONE/TILE WORK",
    "executive": "Times/Orient/Oriel",
    "premium": "Travertine",
    "luxury": "Travertine 3D or any other stone"
  },
  {
    "srNo": 11,
    "category": "Paints & Finishes",
    "name": "WALL PAINT",
    "executive": "brighto",
    "premium": "berger, diamond, deluxe",
    "luxury": "nipppon, master, diamond, deluxe"
  },
  {
    "srNo": 12,
    "category": "Paints & Finishes",
    "name": "GRILL PAINT",
    "executive": "brighto",
    "premium": "berger, diamond, deluxe",
    "luxury": "nipppon, master, diamond, deluxe"
  },
  {
    "srNo": 13,
    "category": "Paints & Finishes",
    "name": "STEEL DOOR PAINT",
    "executive": "brighto",
    "premium": "berger, diamond, deluxe",
    "luxury": "nipppon, master, diamond, deluxe"
  },
  {
    "srNo": 14,
    "category": "Paints & Finishes",
    "name": "WOOD DOOR PAINT/POLISH",
    "executive": "brighto",
    "premium": "berger, diamond, deluxe",
    "luxury": "nipppon, master, diamond, deluxe"
  },
  {
    "srNo": 15,
    "category": "Cabinets & Kitchen Slabs",
    "name": "ROOM CABINETS",
    "executive": "lasaani, lamination, zkr",
    "premium": "lamination, glass",
    "luxury": "interwood, MDF"
  },
  {
    "srNo": 16,
    "category": "Cabinets & Kitchen Slabs",
    "name": "KITCHEN CABINETS",
    "executive": "lasaani, lamination, zkr",
    "premium": "lamination, glass",
    "luxury": "interwood, MDF"
  },
  {
    "srNo": 17,
    "category": "Cabinets & Kitchen Slabs",
    "name": "KITCHEN SLABS",
    "executive": "Marble Medium Quality",
    "premium": "Tavera Marble, Granite House, Caesarstone",
    "luxury": "Tavera Marble, Granite House, Caesarstone, Jett Black"
  },
  {
    "srNo": 18,
    "category": "Lighting & Switchboards",
    "name": "LIGHTS",
    "executive": "Tuff, osaka",
    "premium": "opple, orient",
    "luxury": "philips, sensor lights"
  },
  {
    "srNo": 19,
    "category": "Lighting & Switchboards",
    "name": "GLOBE /FANOOS",
    "executive": "2x upto 25k pkr each",
    "premium": "3 x upto 40k pkr each",
    "luxury": "4 x upto 80k pkr each"
  },
  {
    "srNo": 20,
    "category": "Lighting & Switchboards",
    "name": "SWITCHBOARDS",
    "executive": "GMK, TNC,TJ",
    "premium": "Panasonic, galaxy",
    "luxury": "Iot based"
  },
  {
    "srNo": 21,
    "category": "Lighting & Switchboards",
    "name": "CEILING/ROOF LIGHTS",
    "executive": "Tuff, osaka",
    "premium": "opple, orient",
    "luxury": "philips, sensor lights"
  },
  {
    "srNo": 22,
    "category": "Aluminium, Glass & Door Hardware",
    "name": "ALUMINUM",
    "executive": "etihaad aluminum",
    "premium": "etihaad aluminum",
    "luxury": "UPVC, Top quality Aluminum"
  },
  {
    "srNo": 23,
    "category": "Aluminium, Glass & Door Hardware",
    "name": "GLASS",
    "executive": "1.2 mm glass",
    "premium": "Ghani Glass, Tempered Glass -- 1.6mm",
    "luxury": "Ghani Glass, Tempered Glass --1.6 mm"
  },
  {
    "srNo": 24,
    "category": "Aluminium, Glass & Door Hardware",
    "name": "DOOR HANDLES",
    "executive": "domestic door handles",
    "premium": "aluminum, zinc",
    "luxury": "aluminum, zinc,smart lock"
  },
  {
    "srNo": 25,
    "category": "Aluminium, Glass & Door Hardware",
    "name": "CABINETS LOCKS",
    "executive": "cabinet locks",
    "premium": "aluminum, zinc",
    "luxury": "smart lock"
  },
  {
    "srNo": 26,
    "category": "Aluminium, Glass & Door Hardware",
    "name": "DOOR LATCHES",
    "executive": "door latch",
    "premium": "door latch",
    "luxury": "brass latch"
  },
  {
    "srNo": 27,
    "category": "Aluminium, Glass & Door Hardware",
    "name": "DOOR HANDLES/LOCKS",
    "executive": "door locks",
    "premium": "aluminum, silver",
    "luxury": "aluminum, zinc"
  },
  {
    "srNo": 28,
    "category": "Aluminium, Glass & Door Hardware",
    "name": "SKIRTING",
    "executive": "black",
    "premium": "floor tile combinations",
    "luxury": "floor tile combinations"
  },
  {
    "srNo": 29,
    "category": "Sanitary Ware, Vanities & Tiling Bond",
    "name": "SHOWER SET",
    "executive": "Al-Faisal, Idrees ,dell max 30-40k",
    "premium": "Al-Faisal, Idrees max 70-80k",
    "luxury": "Porta, Sonex, Grohe upto150k"
  },
  {
    "srNo": 30,
    "category": "Sanitary Ware, Vanities & Tiling Bond",
    "name": "TOILET",
    "executive": "dell, super asia",
    "premium": "master fit, dell",
    "luxury": "master, porta"
  },
  {
    "srNo": 31,
    "category": "Sanitary Ware, Vanities & Tiling Bond",
    "name": "VANITIES",
    "executive": "dell, super asia",
    "premium": "master fit",
    "luxury": "porta"
  },
  {
    "srNo": 32,
    "category": "Sanitary Ware, Vanities & Tiling Bond",
    "name": "BATHTUBS",
    "executive": "X",
    "premium": "X",
    "luxury": "Faisal sanitary, Turkish import, local assemble"
  },
  {
    "srNo": 33,
    "category": "Sanitary Ware, Vanities & Tiling Bond",
    "name": "BATHROOM CABINETS",
    "executive": "UPVC",
    "premium": "MDF",
    "luxury": "MDF,Porta"
  },
  {
    "srNo": 34,
    "category": "HVAC, Fans & Solar Power System",
    "name": "TILING BOND",
    "executive": "bestway, maple leaf",
    "premium": "bestway, maple leaf",
    "luxury": "brighto, nippon , deluxe , diamond"
  },
  {
    "srNo": 35,
    "category": "HVAC, Fans & Solar Power System",
    "name": "FANS",
    "executive": "Wahid Fan and other",
    "premium": "GFC",
    "luxury": "royal fan, pak fan, khursheed fan"
  },
  {
    "srNo": 36,
    "category": "HVAC, Fans & Solar Power System",
    "name": "LED TUBELIGHTS",
    "executive": "Osaka, tulip,Orient",
    "premium": "Osaka, tulip,Orient",
    "luxury": "philips, sensor lights"
  },
  {
    "srNo": 37,
    "category": "HVAC, Fans & Solar Power System",
    "name": "AC",
    "executive": "X",
    "premium": "X",
    "luxury": "Gree, Haier, Dawlance, Kenwood"
  },
  {
    "srNo": 38,
    "category": "HVAC, Fans & Solar Power System",
    "name": "SOLAR PANELS",
    "executive": "X",
    "premium": "X",
    "luxury": "10 kva"
  },
  {
    "srNo": 39,
    "category": "HVAC, Fans & Solar Power System",
    "name": "LAMPLIGHTS 2 per room",
    "executive": "Osaka, tulip,Orient",
    "premium": "Osaka, tulip,Orient",
    "luxury": "philips, sensor lights"
  },
  {
    "srNo": 40,
    "category": "HVAC, Fans & Solar Power System",
    "name": "SOLAR BATTERY",
    "executive": "X",
    "premium": "X",
    "luxury": "5 Kilowatt"
  },
  {
    "srNo": 41,
    "category": "HVAC, Fans & Solar Power System",
    "name": "SOLAR INVERTER",
    "executive": "X",
    "premium": "X",
    "luxury": "15 kva + green meter"
  },
  {
    "srNo": 42,
    "category": "HVAC, Fans & Solar Power System",
    "name": "SOLAR WIRING",
    "executive": "X",
    "premium": "X",
    "luxury": "Fast Solar Cable, Pakistan Cables Solar, Newage Solar"
  },
  {
    "srNo": 43,
    "category": "Kitchen Appliances & Gas Fittings",
    "name": "BATH SET",
    "executive": "idrees, Al-Faisal",
    "premium": "idrees, Al-Faisal",
    "luxury": "idrees, Al-Faisal"
  },
  {
    "srNo": 44,
    "category": "Kitchen Appliances & Gas Fittings",
    "name": "KITCHEN SINK",
    "executive": "idrees, Al-Faisal",
    "premium": "idrees, Al-Faisal",
    "luxury": "turkish import, stainless steel"
  },
  {
    "srNo": 45,
    "category": "Kitchen Appliances & Gas Fittings",
    "name": "KITCHEN HOOD",
    "executive": "nasgas, super asia",
    "premium": "nasgas, super asia",
    "luxury": "hairer, orient, dawlence"
  },
  {
    "srNo": 46,
    "category": "Kitchen Appliances & Gas Fittings",
    "name": "KITCHEN FAUCET",
    "executive": "Al-Faisal",
    "premium": "Al-Faisal",
    "luxury": "Sonex, Grohe"
  },
  {
    "srNo": 47,
    "category": "Kitchen Appliances & Gas Fittings",
    "name": "GAS VALVES",
    "executive": "master fit",
    "premium": "master fit",
    "luxury": "master fit"
  },
  {
    "srNo": 48,
    "category": "Kitchen Appliances & Gas Fittings",
    "name": "WINDOWS MARBLE/GRANITE",
    "executive": "average marble/granite",
    "premium": "medium marble/granite",
    "luxury": "top quality marble/granite"
  },
  {
    "srNo": 49,
    "category": "Kitchen Appliances & Gas Fittings",
    "name": "KITCHEN STOVE",
    "executive": "nasgas",
    "premium": "nasgas",
    "luxury": "nasgas"
  },
  {
    "srNo": 50,
    "category": "Security, Geysers, Gates & Specialty",
    "name": "WALL TEXTURE",
    "executive": "X",
    "premium": "X",
    "luxury": "Berger, ICI Dulux, Nippon Paint"
  },
  {
    "srNo": 51,
    "category": "Security, Geysers, Gates & Specialty",
    "name": "GEYSER",
    "executive": "nasgas, super asia",
    "premium": "nasgas, super asia",
    "luxury": "canon,rinnai"
  },
  {
    "srNo": 52,
    "category": "Security, Geysers, Gates & Specialty",
    "name": "CAMERAS",
    "executive": "X",
    "premium": "Ip camera",
    "luxury": "Ip camera"
  },
  {
    "srNo": 53,
    "category": "Security, Geysers, Gates & Specialty",
    "name": "SAFETY GRILL",
    "executive": "X",
    "premium": "carrcentenna wire",
    "luxury": "Electric Fence"
  },
  {
    "srNo": 54,
    "category": "Security, Geysers, Gates & Specialty",
    "name": "MAIN GATE",
    "executive": "custom design up to 1.5 lac",
    "premium": "custom design up to 2.0 lac",
    "luxury": "custom design up to 3 lac"
  },
  {
    "srNo": 55,
    "category": "Security, Geysers, Gates & Specialty",
    "name": "MEDIA WALLS",
    "executive": "X",
    "premium": "X",
    "luxury": "custom design up to 1 lac"
  },
  {
    "srNo": 56,
    "category": "Security, Geysers, Gates & Specialty",
    "name": "WATER FILTER",
    "executive": "X",
    "premium": "X",
    "luxury": "Aquafina, Pureit, Kent, Aqua Safe"
  },
  {
    "srNo": 57,
    "category": "Security, Geysers, Gates & Specialty",
    "name": "KITCHEN ACCESSORIES",
    "executive": "X",
    "premium": "X",
    "luxury": "fridge space, mettal work for kitchenware"
  },
  {
    "srNo": 58,
    "category": "Security, Geysers, Gates & Specialty",
    "name": "CURTAIN FITTINGS",
    "executive": "Al-Fatah, Local Hardware Markets",
    "premium": "Al-Fatah, Local Hardware Markets",
    "luxury": "concealed design"
  },
  {
    "srNo": 59,
    "category": "Security, Geysers, Gates & Specialty",
    "name": "EARTH WIRE",
    "executive": "Fast cable, GM cable, wahid cables",
    "premium": "Pakistan Cables",
    "luxury": "Pakistan Cables"
  },
  {
    "srNo": 60,
    "category": "Security, Geysers, Gates & Specialty",
    "name": "WASHROOM",
    "executive": "comoode",
    "premium": "concealed design",
    "luxury": "concealed design"
  }
];
