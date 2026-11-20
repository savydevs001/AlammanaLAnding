/**
 * @file clarity.ts
 * @description Safe, centralized wrapper around Microsoft Clarity analytics.
 *              Ensures SSR safety, handles ad-blocker edge cases gracefully,
 *              and provides typed helpers for custom events, custom metadata tags,
 *              visitor identification, and session recording prioritization.
 */
import Clarity from '@microsoft/clarity';

export const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || 'yu93db6hwr';

/** Initialize Clarity safely on client-side */
export function initClarity(projectId: string = CLARITY_PROJECT_ID): void {
  if (typeof window === 'undefined') return;
  try {
    Clarity.init(projectId);
  } catch {
    // Graceful no-op if blocked by client extension or adblocker
  }
}

/** Track a custom smart event for conversion funnels */
export function trackClarityEvent(eventName: string): void {
  if (typeof window === 'undefined') return;
  try {
    Clarity.event(eventName);
  } catch {
    // Graceful no-op
  }
}

/** Attach metadata tags to filter recordings and heatmaps in Clarity dashboard */
export function setClarityTag(key: string, value: string | string[]): void {
  if (typeof window === 'undefined') return;
  try {
    const safeKey = key.slice(0, 255);
    const safeVal = Array.isArray(value)
      ? value.map((v) => String(v).slice(0, 255))
      : String(value).slice(0, 255);
    Clarity.setTag(safeKey, safeVal);
  } catch {
    // Graceful no-op
  }
}

/** Identify high-intent leads across sessions */
export function identifyClarityUser(
  customId: string,
  customSessionId?: string,
  customPageId?: string,
  friendlyName?: string
): void {
  if (typeof window === 'undefined') return;
  try {
    Clarity.identify(customId, customSessionId, customPageId, friendlyName);
  } catch {
    // Graceful no-op
  }
}

/** Prioritize session recording retention for converting users */
export function upgradeClaritySession(reason: string): void {
  if (typeof window === 'undefined') return;
  try {
    Clarity.upgrade(reason.slice(0, 255));
  } catch {
    // Graceful no-op
  }
}
