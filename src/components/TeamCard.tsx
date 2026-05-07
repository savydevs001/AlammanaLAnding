import { motion } from 'motion/react';
import Link from 'next/link';
import { TeamMember } from '../types';

interface TeamCardProps {
  member: TeamMember;
  key?: string | number;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link href={`/team/${member.id}`} className="block">
        <div className="relative aspect-square overflow-hidden mb-6 transition-all duration-500 rounded-3xl">
          <img
            src={member.image}
            alt={member.name}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 border border-sand/40 group-hover:border-burgundy/30 transition-colors rounded-3xl" />
        </div>
        
        <div className="text-center">
          <h3 className="text-xl font-serif text-burgundy">{member.name}</h3>
          <p className="text-[10px] uppercase tracking-widest font-semibold opacity-60 mt-1">{member.role}</p>
        </div>
      </Link>
    </motion.div>
  );
}
