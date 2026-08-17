import { TeamMember } from '../types';

/**
 * ─── HOW TO ADD A MEMBER'S CONTACT & SOCIAL LINKS ───────────────────────────
 *
 * Paste a `socials` block into the member's entry below. Every field is
 * optional — leave out anything they don't have, and it simply won't show.
 * Filled links appear as buttons on the member's page (alammana.pk/team/<id>)
 * AND get linked in their Google profile schema, which helps them appear in
 * Google searches for their name.
 *
 *   socials: {
 *     phone: '+92 300 1234567',
 *     whatsapp: '923001234567',                          // digits only, with country code
 *     facebook: 'https://www.facebook.com/username',
 *     instagram: 'https://www.instagram.com/username/',
 *     linkedin: 'https://www.linkedin.com/in/username/',
 *     tiktok: 'https://www.tiktok.com/@username',
 *     youtube: 'https://www.youtube.com/@username',
 *     twitter: 'https://x.com/username',
 *   },
 *
 * NOTE ON EMAIL: every member currently points at the company address
 * rabta@alammana.pk so that no enquiry is ever lost to a mailbox that doesn't
 * exist. Replace with a personal address only once that mailbox is live.
 * ─────────────────────────────────────────────────────────────────────────────
 */

const COMPANY_EMAIL = 'rabta@alammana.pk';

export const team: TeamMember[] = [
  {
    id: 'muhammad-abdullah',
    name: 'Ch. Muhammad Abdullah',
    role: 'Chairman',
    bio: 'Visionary leader steering Alammana Developers toward premium real estate excellence in Faisal Hills and Islamabad.',
    longBio:
      'Ch. Muhammad Abdullah brings strategic vision and decisive leadership to Alammana Developers. He sets the company\'s direction across construction, plot sales and partner projects in Faisal Hills and the wider Islamabad region, and holds the firm to its commitment of publishing transparent rates rather than negotiating in the dark.',
    image: '/assets/team/abdullah.webp',
    specialization: 'Visionary Leadership & Strategic Direction',
    email: COMPANY_EMAIL,
    education: 'MBA in Business Administration',
    experience: '20+ Years',
  },
  {
    id: 'ashal',
    name: 'Ashhal Ch',
    role: 'Director of Finance',
    bio: 'Financial lead overseeing costing, payment plans and the transparent rate lists Alammana publishes.',
    longBio:
      'Ashhal Ch directs Alammana\'s financial operations — costing every construction stage, structuring the instalment schedules clients pay against, and keeping the published block-wise rate lists honest and current. His work is what allows Alammana to quote openly instead of case by case.',
    image: '/assets/team/ashhal.webp',
    specialization: 'Financial Planning & Transparent Costing',
    email: COMPANY_EMAIL,
    education: 'Bachelor\'s in Finance & Accounting',
    experience: '8+ Years',
  },
  {
    id: 'haseeb-bhatti',
    name: 'Haseeb Bhatti',
    role: 'Director of Sales',
    bio: 'Sales lead connecting investors and families with the right plot, apartment or construction package.',
    longBio:
      'Haseeb Bhatti leads Alammana\'s sales across Faisal Hills plots, partner project inventory and turnkey construction packages. He guides clients from first enquiry through block selection, payment plan and booking, and is usually the first person a new client speaks to.',
    image: '/assets/team/haseeb.webp',
    specialization: 'Sales Excellence & Client Relations',
    email: COMPANY_EMAIL,
    education: 'MBA in Sales & Marketing',
    experience: '18+ Years',
  },
  {
    id: 'muhammad-mohsin',
    name: 'Mohsin Ali',
    role: 'Director of Construction',
    bio: 'Construction lead ensuring every home is built to the approved map and to Alammana\'s quality standard.',
    longBio:
      'Mohsin Ali oversees construction on every Alammana site in Faisal Hills and Faisal Town — from excavation and gray structure through to final finishing. He is responsible for building strictly to the society-approved map, holding material quality, and keeping milestones on the schedule clients are paying against.',
    image: '/assets/team/mohsin.webp',
    specialization: 'Construction Management & Quality Assurance',
    email: COMPANY_EMAIL,
    education: 'BS in Civil Engineering',
    experience: '15+ Years',
  },
  {
    id: 'shahzeb',
    name: 'Muhammad Shahzeb',
    role: 'Director of Media',
    bio: 'Media lead building Alammana\'s presence across social platforms and project marketing.',
    longBio:
      'Muhammad Shahzeb directs Alammana\'s media and social strategy, documenting live construction progress and presenting Faisal Hills opportunities to investors and end-buyers. His work keeps clients informed about what is actually being built, not just what is being sold.',
    image: '/assets/team/shahzeb.webp',
    specialization: 'Media Strategy & Social Engagement',
    email: COMPANY_EMAIL,
    education: 'Bachelor\'s in Marketing & Communications',
    experience: '12+ Years',
  },
  {
    id: 'muhammad-bilal-gul',
    name: 'Muhammad Bilal Gul',
    role: 'Director of Technology',
    bio: 'Technology lead modernising how Alammana manages projects and reaches clients online.',
    longBio:
      'Muhammad Bilal Gul leads Alammana\'s technology work — the website and published rate lists, internal project and payment tracking, and the systems that let clients find accurate information about Faisal Hills construction without having to ask for it first.',
    // TODO(team): replace with a real photograph of Bilal.
    image: '/assets/logo.webp',
    specialization: 'Technology & Digital Innovation',
    email: COMPANY_EMAIL,
    education: 'BS in Computer Science, MS in Software Engineering',
    experience: '10+ Years',
  },
];
