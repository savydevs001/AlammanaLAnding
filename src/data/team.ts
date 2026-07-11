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
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const team: TeamMember[] = [
  {
    id: 'muhammad-abdullah',
    name: 'Muhammad Abdullah',
    role: 'Chairman',
    bio: 'Visionary leader steering Alammana Developers toward premium real estate excellence in Islamabad and Faisal Hills.',
    longBio: 'Muhammad Abdullah brings strategic vision and decisive leadership to Alammana Developers. With a proven track record in real estate development, he shapes the company\'s direction in luxury construction and Faisal Hills real estate. His commitment to quality and innovation drives the organization\'s growth in Islamabad\'s premier development sector.',
    image: '/assets/Abdullah1.png',
    specialization: 'Visionary Leadership & Strategic Direction',
    email: 'muhammad@alammana.com',
    education: 'MBA in Business Administration',
    experience: '20+ Years'
  },
  {
    id: 'ashal',
    name: 'Ashhal Ch',
    role: 'Director of Finance',
    bio: 'Digital engagement strategist building Alammana\'s brand presence across social platforms and digital channels.',
    longBio: 'Ashhal Ch directs Alammana\'s comprehensive social media strategy, leveraging modern digital platforms to connect with investors and clients interested in Faisal Hills and Islamabad real estate. With expertise in social engagement and community building, Ashhal Ch ensures Alammana maintains a strong, authentic digital presence.',
    image: '/assets/Ashhal Ch.jpg',
    specialization: 'Digital Strategy & Social Engagement',
    email: 'ashal@alammana.com',
    education: 'Bachelor\'s in Marketing & Communications',
    experience: '8+ Years'
  },
  {
    id: 'haseeb-bhatti',
    name: 'Haseeb Bhatti',
    role: 'Director of Sales',
    bio: 'Construction excellence leader ensuring quality delivery and timely project completion across all Alammana developments.',
    longBio: 'Haseeb Bhatti oversees all construction operations for Alammana\'s Faisal Hills and Islamabad projects. With extensive experience in luxury construction and project management, he ensures every development meets the highest standards of quality, safety, and engineering excellence.',
    image: '/assets/Haseeb1.png',
    specialization: 'Construction Management & Quality Assurance',
    email: 'haseeb@alammana.com',
    education: 'BS in Civil Engineering',
    experience: '18+ Years'
  },
  {
    id: 'muhammad-mohsin',
    name: 'Mohsin Ali',
    role: 'Director of Construction',
    bio: 'Financial strategist managing capital allocation, investments, and fiscal planning for sustainable growth.',
    longBio: 'Mohsin Ali directs Alammana\'s financial operations with meticulous planning and strategic investment management. His expertise ensures robust financial health and sustainable growth in the competitive Faisal Hills and Islamabad real estate market.',
    image: '/assets/Mohsin1.png',
    specialization: 'Financial Planning & Investment Management',
    email: 'mohsin@alammana.com',
    education: 'CFA Level III, Masters in Finance',
    experience: '15+ Years'
  },
  {
    id: 'shahzeb',
    name: 'Muhammad Shahzeb',
    role: 'Director of Media',
    bio: 'Sales leader driving revenue growth and client acquisition for Alammana\'s Faisal Hills and Islamabad projects.',
    longBio: 'Shahzeb spearheads Alammana\'s sales strategy, connecting investors and end-users with premium real estate opportunities in Faisal Hills and Islamabad. His dynamic approach and market insights drive consistent sales performance and client satisfaction.',
    image: '/assets/shahzeb2.png',
    specialization: 'Sales Excellence & Client Relations',
    email: 'shahzeb@alammana.com',
    education: 'MBA in Sales & Marketing',
    experience: '12+ Years'
  },
  {
    id: 'muhammad-bilal-gul',
    name: 'Muhammad Bilal Gul',
    role: 'Director of Technology',
    bio: 'Tech innovator modernizing Alammana\'s digital infrastructure and digital presence.',
    longBio: 'Muhammad Bilal Gul leads Alammana\'s technological initiatives, ensuring cutting-edge solutions for real estate management, client engagement, and digital innovation. His expertise modernizes how Alammana connects with clients interested in Faisal Hills and Islamabad properties.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop',
    specialization: 'Technology & Digital Innovation',
    email: 'bilal@alammana.com',
    education: 'BS in Computer Science, MS in Software Engineering',
    experience: '10+ Years'
  }
];
