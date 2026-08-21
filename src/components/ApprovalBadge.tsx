import { Locale } from '../lib/i18n';
import { getDictionary } from '../lib/dictionaries';

/**
 * Approval status, rendered identically everywhere it appears.
 *
 * This is the most consequential string on the site. "NOC under process" is a
 * legal position, not a marketing adjective, and a buyer who reads it as
 * "approved" can lose money. Centralising it means there is exactly one place
 * the wording can be got right — or wrong — rather than a dozen inline badges
 * drifting apart across locales.
 *
 * The colours are deliberately not green/amber/red traffic lights either. An
 * amber "In Process" reads as a mild warning; the point is that it is a
 * different legal state, not a slightly worse one.
 */
export type ApprovalStatus = 'Approved' | 'In Process' | 'Pre-Launch';

const STYLES: Record<ApprovalStatus, string> = {
  Approved: 'bg-status-approved text-white',
  'In Process': 'bg-status-pending text-white',
  'Pre-Launch': 'bg-ink/70 text-white',
};

export default function ApprovalBadge({
  status,
  locale = 'en',
}: {
  status: string;
  locale?: Locale;
}) {
  const t = getDictionary(locale).common;
  const key = (status as ApprovalStatus) in STYLES ? (status as ApprovalStatus) : 'Pre-Launch';

  const label =
    key === 'Approved' ? t.approved : key === 'In Process' ? t.inProcess : t.preLaunch;

  return (
    <span
      className={`inline-block text-[11px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full ${STYLES[key]}`}
    >
      {label}
    </span>
  );
}
