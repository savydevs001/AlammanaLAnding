'use client';

import { TeamMember } from '../../../../types';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowLeft, Mail, Phone, Linkedin, Instagram, Facebook, Youtube, Twitter } from 'lucide-react';

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function TikTokIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
    </svg>
  );
}

export default function TeamMemberClient({ member }: { member?: TeamMember }) {
  if (!member) {
    return (
      <div className="h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-4xl font-serif mb-4">Member Not Found</h1>
          <Link href="/team" className="text-burgundy underline uppercase tracking-widest text-xs font-bold">Back to Team</Link>
        </div>
      </div>
    );
  }

  // Person schema is emitted server-side in page.tsx (single source of truth).
  return (
    <div className="pt-32 pb-24 min-h-screen bg-paper">
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden transition-all duration-700">
               <img 
                 src={member.image} 
                 alt={`${member.name}, ${member.role} at Alammana Developers`}
                 className="w-full h-full object-cover"
                 referrerPolicy="no-referrer"
               />
            </div>
            <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 border border-burgundy/10 -z-10" />
          </motion.div>

          {/* Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <div>
              <Link href="/team" className="flex items-center space-x-2 text-[12px] uppercase tracking-[0.4em] font-bold mb-10 hover:text-burgundy transition-colors">
                <ArrowLeft size={14} />
                <span>Executive Team</span>
              </Link>
              <h1 className="text-6xl md:text-8xl font-serif text-burgundy">{member.name}</h1>
              <p className="text-xl font-serif italic mt-4 opacity-60 tracking-wide">{member.role}</p>
            </div>

            <div className="space-y-6">
              <h2 className="text-[12px] uppercase tracking-widest font-bold text-burgundy/40 underline decoration-burgundy/10 pb-2">Philosophy & Specialization</h2>
              <div className="text-3xl font-serif leading-tight italic">
                &quot;{member.specialization}&quot;
              </div>
              <p className="text-ink/80 text-lg leading-relaxed max-w-xl font-serif italic">
                {member.longBio}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-10 border-t border-sand/20">
               <div>
                 <span className="text-[12px] uppercase tracking-widest font-bold opacity-40 block mb-1 text-burgundy">Experience</span>
                 <p className="font-serif text-xl italic">{member.experience}</p>
               </div>
               <div>
                 <span className="text-[12px] uppercase tracking-widest font-bold opacity-40 block mb-1 text-burgundy">Education</span>
                 <p className="font-serif text-lg leading-tight italic">{member.education}</p>
               </div>
            </div>

            <div className="pt-10 space-y-6">
              <h2 className="text-[12px] uppercase tracking-widest font-bold text-burgundy/40">Connect with {member.name.split(' ')[0]}</h2>
              <div className="flex flex-wrap gap-3">
                <a href={`mailto:${member.email}`} className="flex items-center gap-2 border border-sand rounded-full px-5 py-2.5 text-xs uppercase tracking-widest font-bold hover:bg-burgundy hover:text-white hover:border-burgundy transition-all">
                  <Mail size={16} /> Email
                </a>
                {member.socials?.phone && (
                  <a href={`tel:${member.socials.phone.replace(/[^+\d]/g, '')}`} className="flex items-center gap-2 border border-sand rounded-full px-5 py-2.5 text-xs uppercase tracking-widest font-bold hover:bg-burgundy hover:text-white hover:border-burgundy transition-all">
                    <Phone size={16} /> Call
                  </a>
                )}
                {member.socials?.whatsapp && (
                  <a href={`https://wa.me/${member.socials.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-sand rounded-full px-5 py-2.5 text-xs uppercase tracking-widest font-bold hover:bg-burgundy hover:text-white hover:border-burgundy transition-all">
                    <WhatsAppIcon size={16} /> WhatsApp
                  </a>
                )}
                {member.socials?.facebook && (
                  <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-sand rounded-full px-5 py-2.5 text-xs uppercase tracking-widest font-bold hover:bg-burgundy hover:text-white hover:border-burgundy transition-all">
                    <Facebook size={16} /> Facebook
                  </a>
                )}
                {member.socials?.instagram && (
                  <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-sand rounded-full px-5 py-2.5 text-xs uppercase tracking-widest font-bold hover:bg-burgundy hover:text-white hover:border-burgundy transition-all">
                    <Instagram size={16} /> Instagram
                  </a>
                )}
                {member.socials?.linkedin && (
                  <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-sand rounded-full px-5 py-2.5 text-xs uppercase tracking-widest font-bold hover:bg-burgundy hover:text-white hover:border-burgundy transition-all">
                    <Linkedin size={16} /> LinkedIn
                  </a>
                )}
                {member.socials?.tiktok && (
                  <a href={member.socials.tiktok} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-sand rounded-full px-5 py-2.5 text-xs uppercase tracking-widest font-bold hover:bg-burgundy hover:text-white hover:border-burgundy transition-all">
                    <TikTokIcon size={16} /> TikTok
                  </a>
                )}
                {member.socials?.youtube && (
                  <a href={member.socials.youtube} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-sand rounded-full px-5 py-2.5 text-xs uppercase tracking-widest font-bold hover:bg-burgundy hover:text-white hover:border-burgundy transition-all">
                    <Youtube size={16} /> YouTube
                  </a>
                )}
                {member.socials?.twitter && (
                  <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-sand rounded-full px-5 py-2.5 text-xs uppercase tracking-widest font-bold hover:bg-burgundy hover:text-white hover:border-burgundy transition-all">
                    <Twitter size={16} /> X / Twitter
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
