/**
 * Single source of truth for how visitors reach Alammana.
 * Change the number or email here and every button, form and link updates.
 */
export const CONTACT = {
  /** Display format, used in visible text. */
  phoneDisplay: '+92 335 8078262',
  /** tel: link format. */
  phoneHref: '+923358078262',
  /** wa.me format — country code + number, digits only, no leading +. */
  whatsapp: '923358078262',
  email: 'rabta@alammana.pk',
  addressLine: 'Allah Hu Chowk, Faisal Hills, Taxila',
  facebook: 'https://www.facebook.com/alammana.pk',
  instagram: 'https://www.instagram.com/alammanapk/',
} as const;

/** Builds a WhatsApp deep link with a pre-filled message. */
export function whatsappLink(message: string) {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Builds a mailto: link with subject and body. */
export function mailtoLink(subject: string, body: string) {
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
