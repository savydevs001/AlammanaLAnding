import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  key?: string | number;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* The whole card is the link. Previously only the small "View Details"
          text was clickable, which meant most of an 800px-tall card did nothing. */}
      <Link
        href={`/portfolio/${project.id}`}
        className="group relative block overflow-hidden bg-white aspect-[4/5] rounded-3xl shadow-lg border border-sand/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy"
      >
        <img
          src={project.thumbnail}
          alt={`${project.title} — ${project.location}`}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />

        {project.status && (
          <span className="absolute top-5 left-5 bg-burgundy text-white px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
            {project.status}
          </span>
        )}

        <div className="absolute inset-0 p-8 flex flex-col justify-end text-paper">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-beige mb-2">
            {project.category}
          </span>
          <h3 className="text-2xl font-serif mb-1 leading-tight">{project.title}</h3>
          <p className="flex items-center gap-1.5 text-[11px] text-paper/75 mb-3">
            <MapPin size={12} /> {project.location}
          </p>
          <p className="text-sm text-paper/80 mb-6 italic line-clamp-2">{project.description}</p>

          <span className="flex items-center space-x-2 text-xs uppercase tracking-widest font-bold group-hover:text-beige transition-colors">
            <span>View Details</span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
