# Lead Capture — How It Works Now, How To Put An API Behind It

Handoff note for whoever wires up the real backend.

## Why it works this way today

The site is a **static export** (`output: 'export'` in `next.config.ts`) deployed to
Cloudflare Pages. There is no Next.js server at runtime, so **API routes
(`app/api/**/route.ts`) do not exist in this deployment** — they are silently
dropped by `next build` when `output: 'export'` is set. Any server-side solution
has to live somewhere else (see options below).

Until an endpoint exists, every enquiry is composed into a **pre-filled WhatsApp
message** the visitor sends themselves, with a `mailto:` fallback. This was chosen
because it needs no backend, and WhatsApp is how this market actually contacts a
property firm. Nothing is silently dropped — before this change the forms had no
submit handler at all and enquiries vanished.

## The files involved

| File | Role |
| --- | --- |
| `src/lib/contact.ts` | Single source of truth: phone, WhatsApp number, email, socials. Also `whatsappLink()` and `mailtoLink()` helpers. |
| `src/components/LeadForm.tsx` | The form itself. **This is the only place to change to POST to an API.** |
| `src/components/WhatsAppFloat.tsx` | Persistent floating WhatsApp button. |

`LeadForm` is used in three places:

- `src/app/page.tsx` — homepage contact section (`variant="plain"`)
- `src/app/contact/ContactClient.tsx` — contact page (`variant="boxed"`)
- `src/app/portfolio/[id]/ProjectPageClient.tsx` — per-project, passes `context`
  and project-specific `interests`

Standalone WhatsApp CTAs (not the form) also exist on project pages — search for
`whatsappLink(` if you want those to change too.

## The data a submission carries

`LeadForm` holds this state:

```ts
{
  name: string;      // required
  phone: string;     // required
  email: string;     // optional
  interest: string;  // from the `interests` prop
  message: string;   // optional
}
```

Plus two props that identify **where the lead came from** — keep these, they are
the difference between "a lead" and "a lead about Faisal Jewel":

- `subjectPrefix` — e.g. `"Homepage Enquiry"`, `"Project Enquiry"`
- `context` — e.g. `"Faisal Jewel — Executive Block, Faisal Hills, Taxila"`

Suggested request body:

```json
{
  "name": "…",
  "phone": "…",
  "email": "…",
  "interest": "…",
  "message": "…",
  "source": "Homepage Enquiry",
  "context": "Faisal Jewel — Executive Block, Faisal Hills, Taxila",
  "pageUrl": "https://alammana.pk/portfolio/faisal-jewel",
  "submittedAt": "2026-08-17T10:00:00.000Z"
}
```

## Where the endpoint can live

Pick one — the static export rules out in-app API routes.

1. **Cloudflare Pages Functions** (recommended — same project, same domain, no CORS).
   Add `functions/api/lead.ts` at the repo root. Pages Functions are deployed
   alongside a static build and are *not* affected by `output: 'export'`.
   The form then POSTs to a same-origin `/api/lead`.
2. **Cloudflare Worker on a subdomain** (e.g. `api.alammana.pk`) — needs CORS
   headers allowing `https://alammana.pk`.
3. **The separate Alammana ERP API** already in this workspace
   (`D:/AlAmmana/Web/alammana-erp-api`, dev port 4000) — best if leads should land
   directly in the ERP/CRM. Needs a public URL and CORS.

## Making the swap

In `src/components/LeadForm.tsx`, replace the body of `submit()`. Current code:

```ts
function submit(e: React.FormEvent) {
  e.preventDefault();
  window.open(whatsappLink(compose()), '_blank', 'noopener,noreferrer');
  setSent(true);
}
```

Replace with something like:

```ts
const [status, setStatus] = useState<'idle'|'sending'|'error'>('idle');

async function submit(e: React.FormEvent) {
  e.preventDefault();
  setStatus('sending');
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_LEAD_API_URL!, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        source: subjectPrefix,
        context,
        pageUrl: window.location.href,
        submittedAt: new Date().toISOString(),
      }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    setSent(true);
  } catch {
    // Never lose the lead: fall back to the WhatsApp flow that works today.
    setStatus('error');
    window.open(whatsappLink(compose()), '_blank', 'noopener,noreferrer');
    setSent(true);
  }
}
```

**Keep the WhatsApp fallback on failure.** A failed POST with no fallback is a lost
customer; that is the exact bug this form was built to fix.

Set `NEXT_PUBLIC_LEAD_API_URL` in the Cloudflare Pages build environment
(alongside `NEXT_PUBLIC_SITE_URL=https://alammana.pk`). `NEXT_PUBLIC_*` values are
inlined at build time, so a redeploy is required after changing them.

Also update the success panel copy in `LeadForm` — it currently says WhatsApp
opened in a new tab, which stops being true once the API handles it.

## Don't forget

- **Spam.** A public unauthenticated endpoint will be scraped. Cloudflare Turnstile
  is free and works well here; also rate-limit by IP at the Worker.
- **Validation server-side.** `required` attributes are trivially bypassed.
- **Notification.** Storing a lead nobody reads is the same as losing it — send a
  WhatsApp Business API message or an email to `rabta@alammana.pk` on receipt.
- **Privacy policy.** `src/app/privacy/page.tsx` currently states that nothing is
  transmitted until the visitor presses send in WhatsApp. **That becomes false the
  moment the API goes live** — update the "What we collect" section in the same PR.
- **Test the fallback path** by pointing the URL at something that 500s.
