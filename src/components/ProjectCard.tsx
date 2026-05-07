import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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
      className="group relative overflow-hidden bg-white aspect-[4/5] rounded-3xl shadow-lg border border-sand/20"
    >
      <img
        src={project.thumbnail}
        alt={project.title}
        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
      
      <div className="absolute inset-0 p-8 flex flex-col justify-end text-paper">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-beige mb-2">{project.category}</span>
        <h3 className="text-2xl font-serif mb-2">{project.title}</h3>
        <p className="text-sm text-paper/80 mb-6 italic line-clamp-2">{project.description}</p>
        
        <Link 
          to={`/portfolio/${project.id}`}
          className="flex items-center space-x-2 text-xs uppercase tracking-widest font-bold hover:text-beige transition-colors"
        >
          <span>View Details</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
}
