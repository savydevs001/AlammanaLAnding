import { useParams, Link } from 'react-router-dom';
import { team } from '../data/team';
import SEO from '../components/SEO';
import { motion } from 'motion/react';
import { ArrowLeft, Mail, Linkedin, Instagram } from 'lucide-react';
import { useEffect } from 'react';

export default function TeamMember() {
  const { id } = useParams();
  const member = team.find(m => m.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!member) {
    return (
      <div className="h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-4xl font-serif mb-4">Member Not Found</h1>
          <Link to="/" className="text-burgundy underline uppercase tracking-widest text-xs font-bold">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-paper">
      <SEO 
        title={member.name} 
        description={`${member.name} - ${member.role} at Alammana Developers.`}
        image={member.image}
        article
      />

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
               <img 
                 src={member.image} 
                 alt={member.name} 
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
              <Link to="/#team" className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.4em] font-bold mb-10 hover:text-burgundy transition-colors">
                <ArrowLeft size={14} />
                <span>Executive Team</span>
              </Link>
              <h1 className="text-6xl md:text-8xl font-serif text-burgundy">{member.name}</h1>
              <p className="text-xl font-serif italic mt-4 opacity-60 tracking-wide">{member.role}</p>
            </div>

            <div className="space-y-6">
              <h2 className="text-[10px] uppercase tracking-widest font-bold text-burgundy/40 underline decoration-burgundy/10 pb-2">Philosophy & Specialization</h2>
              <div className="text-3xl font-serif leading-tight italic">
                "{member.specialization}"
              </div>
              <p className="text-ink/80 text-lg leading-relaxed max-w-xl font-serif italic">
                {member.longBio}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-10 border-t border-sand/20">
               <div>
                 <span className="text-[10px] uppercase tracking-widest font-bold opacity-40 block mb-1 text-burgundy">Experience</span>
                 <p className="font-serif text-xl italic">{member.experience}</p>
               </div>
               <div>
                 <span className="text-[10px] uppercase tracking-widest font-bold opacity-40 block mb-1 text-burgundy">Education</span>
                 <p className="font-serif text-lg leading-tight italic">{member.education}</p>
               </div>
            </div>

            <div className="pt-10 flex items-center space-x-8">
              <a href={`mailto:${member.email}`} className="flex items-center space-x-3 text-xs uppercase tracking-widest font-bold hover:text-burgundy">
                <Mail size={18} />
                <span>Get in touch</span>
              </a>
              <div className="flex space-x-6 opacity-40">
                <a href="#" className="hover:text-burgundy hover:opacity-100 transition-all"><Linkedin size={20} /></a>
                <a href="#" className="hover:text-burgundy hover:opacity-100 transition-all"><Instagram size={20} /></a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
