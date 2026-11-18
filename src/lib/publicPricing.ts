/**
 * @file publicPricing.ts
 * @description Client-side fetcher for live construction rate plans and
 *              3-tier finishing material specifications.
 *              Gracefully falls back to static seed data if offline or during build.
 */
import {
  GRAY_STRUCTURE_PLANS,
  FINISHED_HOUSE_PLANS,
  type GrayPlanRow,
  type FinishedPlanRow,
} from '../data/paymentPlansData';
import {
  FINISHING_MATERIALS,
  type MaterialSpecItem,
} from '../data/finishingMaterialsData';

const API_BASE = process.env.NEXT_PUBLIC_ERP_API_URL ?? 'http://localhost:4000';

export interface PublicPlansData {
  [blockKey: string]: {
    greyPlans: GrayPlanRow[];
    finishedPlans: FinishedPlanRow[];
  };
}

export interface PublicMaterialsData {
  totalItems: number;
  categories: Record<string, Array<{
    srNo: number;
    name: string;
    executive: string;
    premium: string;
    luxury: string;
  }>>;
  rawList: MaterialSpecItem[];
}

/**
 * Fetch dynamic plans from ERP API with static fallback
 */
export async function fetchLivePlans(): Promise<PublicPlansData> {
  try {
    const res = await fetch(`${API_BASE}/api/v1/public/pricing/plans`, {
      method: 'GET',
      headers: { Accept: 'application/json' },
      cache: 'no-store',
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    if (json?.success && json?.data) {
      return json.data as PublicPlansData;
    }
  } catch {
    // Non-blocking fallback to static transcribed plans
  }

  // Fallback map
  const blocks = ['block-a', 'block-b', 'block-c', 'block-d', 'executive-block'];
  const fallback: PublicPlansData = {};
  for (const b of blocks) {
    fallback[b] = {
      greyPlans: GRAY_STRUCTURE_PLANS[b] ?? [],
      finishedPlans: FINISHED_HOUSE_PLANS[b] ?? [],
    };
  }
  return fallback;
}

/**
 * Fetch dynamic finishing materials from ERP API with static fallback
 */
export async function fetchLiveMaterials(): Promise<MaterialSpecItem[]> {
  try {
    const res = await fetch(`${API_BASE}/api/v1/public/pricing/materials`, {
      method: 'GET',
      headers: { Accept: 'application/json' },
      cache: 'no-store',
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    if (json?.success && json?.data?.rawList) {
      return json.data.rawList as MaterialSpecItem[];
    }
  } catch {
    // Non-blocking fallback
  }

  return FINISHING_MATERIALS;
}
