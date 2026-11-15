/**
 * Single source of truth for how visitors reach Alammana.
 * Change the number or email here and every button, form and link updates.
 */
export const CONTACT = {
  /** Primary display format, used in visible text. */
  phoneDisplay: '+92 337 7503111',
  /** Primary tel: link format. */
  phoneHref: '+923377503111',
  /** Primary wa.me format — country code + number, digits only, no leading +. */
  whatsapp: '923377503111',

  /** Secondary display format. */
  phoneDisplayAlt: '+92 308 7750009',
  /** Secondary tel: link format. */
  phoneHrefAlt: '+923087750009',
  /** Secondary wa.me format. */
  whatsappAlt: '923087750009',

  /** Both official contact phone lines for structured directory listings. */
  phones: [
    {
      display: '+92 337 7503111',
      href: '+923377503111',
      raw: '03377503111',
      whatsapp: '923377503111',
      label: 'Main Office / Construction Enquiries',
    },
    {
      display: '+92 308 7750009',
      href: '+923087750009',
      raw: '03087750009',
      whatsapp: '923087750009',
      label: 'Sales & Plot Bookings',
    },
  ],

  email: 'rabta@alammana.pk',
  /** Short form for tight spaces (footer, cards). */
  addressShort: 'Vertical Four, A Block, Faisal Hills',
  /** Full postal address — keep this identical everywhere it appears, including
   *  Google Business Profile, so local-search signals stay consistent. */
  addressLine:
    'Office No. C-3, Lower Ground Floor, Vertical Four, Near Arch Monument, Main Boulevard, A Block, Faisal Hills',
  addressLocality: 'Taxila',
  addressRegion: 'Rawalpindi, Punjab',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=Vertical+Four+Arch+Monument+Faisal+Hills+Taxila&output=embed',
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
