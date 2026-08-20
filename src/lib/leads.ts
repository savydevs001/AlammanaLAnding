/**
 * Sends website enquiries to the Al Ammana ERP so nothing depends on a visitor
 * actually pressing send in WhatsApp.
 *
 * This site is a static export with no server of its own, so the browser posts
 * straight to the ERP's public intake endpoint. That endpoint is unauthenticated
 * by design, rate limited, honeypot protected, and write-only — it returns no
 * record data, so nothing here can leak CRM contents.
 *
 * Failure is deliberately non-blocking: WhatsApp remains the primary path and
 * must open even if the API is unreachable. A dropped POST costs us a CRM row,
 * never the enquiry itself.
 */

const API_BASE = process.env.NEXT_PUBLIC_ERP_API_URL ?? 'https://api.alammana.pk';

export interface LeadSubmission {
  fullName: string;
  phone: string;
  email?: string;
  /** The form's "Interested In" selection. */
  interest?: string;
  message?: string;
  /** Which form was used — "Project Enquiry", "Homepage Enquiry", … */
  formName?: string;
  /** The specific project or society being viewed, when there is one. */
  context?: string;
  /** Honeypot. Always empty for real users; bots fill every field they find. */
  company?: string;
}

/**
 * Best-effort delivery to the CRM. Never throws and never blocks the UI.
 * Resolves true when the enquiry was recorded.
 */
export async function submitLead(input: LeadSubmission): Promise<boolean> {
  try {
    const res = await fetch(`${API_BASE}/api/v1/public/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...input,
        // Captured here rather than server-side: the ERP only sees an API
        // request, so the page a visitor was actually reading has to travel
        // with the submission.
        pageUrl: typeof window !== 'undefined' ? window.location.href : undefined,
      }),
      // No cookies — this endpoint is anonymous and must stay that way.
      credentials: 'omit',
    });
    return res.ok;
  } catch {
    // Offline, blocked, or the API is down. WhatsApp still opens.
    return false;
  }
}
