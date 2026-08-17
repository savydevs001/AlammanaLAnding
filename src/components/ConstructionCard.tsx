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
      className="group relative overflow-hidden bg-white aspect-[4/5] rounded-3xl shadow-lg border border-sand/20"
    >
      <img
        src={project.elevationImage}
        alt={`${project.title} — front elevation in ${project.block}`}
        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

      <div className="absolute top-6 left-6 flex gap-2">
        <span className="bg-burgundy text-white px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
          {project.status}
        </span>
        <span className="bg-white/90 text-ink px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
          {project.finishType}
        </span>
      </div>

      <div className="absolute inset-0 p-8 flex flex-col justify-end text-paper">
        <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.3em] font-bold text-beige mb-2">
          <MapPin size={12} /> {project.block} — {project.plotSize}
        </span>
        <h3 className="text-2xl font-serif mb-1">{project.title}</h3>
        {project.plotAddress && (
          <p className="text-[11px] text-beige/90 font-semibold mb-2">{project.plotAddress}</p>
        )}
        <p className="text-sm text-paper/80 mb-6 italic line-clamp-2">{project.shortDescription}</p>

        <Link
          href={`/constructions/${project.id}`}
          className="flex items-center space-x-2 text-xs uppercase tracking-widest font-bold hover:text-beige transition-colors"
        >
          <span>View Home</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
}
