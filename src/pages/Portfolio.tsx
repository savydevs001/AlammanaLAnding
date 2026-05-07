import { motion } from 'motion/react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import SEO from '../components/SEO';
import { useState } from 'react';

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Residential', 'Commercial', 'Development', 'Marketing'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24">
      <SEO 
        title="Portfolio" 
        description="Explore the architectural and development portfolio of Alammana Developers."
      />

      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-20">
          <span className="text-burgundy text-xs uppercase tracking-[0.5em] font-bold mb-6 block">Our Legacy</span>
          <h1 className="text-6xl md:text-8xl font-serif mb-12">Building the <br /> <span className="italic text-burgundy opacity-40">Extraordinary</span></h1>
          
          <div className="flex flex-wrap gap-8 items-center border-b border-burgundy/10 pb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-xs uppercase tracking-widest font-bold transition-all ${
                  filter === cat ? 'text-burgundy border-b-2 border-burgundy pb-2' : 'opacity-40 hover:opacity-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
