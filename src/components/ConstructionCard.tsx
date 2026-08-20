import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { ConstructionProject } from '../types';

export default function ConstructionCard({ project }: { project: ConstructionProject }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Whole card is the link — see ProjectCard for why. */}
      <Link
        href={`/constructions/${project.id}`}
        className="group relative block overflow-hidden bg-white aspect-[4/5] rounded-3xl shadow-lg border border-sand/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy"
      >
        <img
          width={1600} height={1200} loading="lazy" decoding="async" src={project.elevationImage}
          alt={`${project.title} — front elevation, ${project.block}`}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />

        <div className="absolute top-5 left-5 flex flex-wrap gap-2 pr-5">
          <span className="bg-burgundy text-white px-3 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-wider">
            {project.status}
          </span>
          <span className="bg-white/90 text-ink px-3 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-wider">
            {project.finishType}
          </span>
        </div>

        <div className="absolute inset-0 p-8 flex flex-col justify-end text-paper">
          <span className="flex items-center gap-1.5 text-[12px] uppercase tracking-[0.25em] font-bold text-beige mb-2">
            <MapPin size={12} /> {project.block} — {project.plotSize}
          </span>
          <h3 className="text-2xl font-serif mb-1 leading-tight">{project.title}</h3>
          {project.plotAddress && (
            <p className="text-[12px] text-beige/90 font-semibold mb-2">{project.plotAddress}</p>
          )}
          <p className="text-sm text-paper/80 mb-6 italic line-clamp-2">{project.shortDescription}</p>

          <span className="flex items-center space-x-2 text-xs uppercase tracking-widest font-bold group-hover:text-beige transition-colors">
            <span>View Home</span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
