'use client';

import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactClient() {
  return (
    <div className="pt-32 pb-24 bg-beige/20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-20">
          <span className="text-burgundy text-xs uppercase tracking-[0.5em] font-bold mb-6 block text-center">Get in Touch</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-center italic mb-12">Let&apos;s build your <span className="opacity-30">legacy</span>.</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-8 md:space-y-12">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-sand/20 space-y-8 md:space-y-10">
              <div className="flex items-start space-x-4 md:space-x-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-beige rounded-full flex items-center justify-center text-burgundy shrink-0">
                  <Mail size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-[10px] uppercase tracking-widest font-bold text-ink/40 mb-1">Electronic Mail</h3>
                  <a href="mailto:info@alammana.com" className="text-xl md:text-2xl font-serif hover:text-burgundy transition-colors break-all">info@alammana.com</a>
                </div>
              </div>

              <div className="flex items-start space-x-4 md:space-x-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-beige rounded-full flex items-center justify-center text-burgundy shrink-0">
                  <Phone size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-[10px] uppercase tracking-widest font-bold text-ink/40 mb-1">Direct Line</h3>
                  <a href="tel:+923001234567" className="text-xl md:text-2xl font-serif hover:text-burgundy transition-colors">+92 300 123 4567</a>
                </div>
              </div>

              <div className="flex items-start space-x-4 md:space-x-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-beige rounded-full flex items-center justify-center text-burgundy shrink-0">
                  <MapPin size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-[10px] uppercase tracking-widest font-bold text-ink/40 mb-1">Head Office</h3>
                  <address className="text-xl md:text-2xl font-serif not-italic">Allah hu chowk, Faisal Hills, Islamabad, Pakistan</address>
                </div>
              </div>
            </div>

            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format&fit=crop" 
                alt="Alammana Office in Faisal Hills"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-burgundy text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">Islamabad HQ</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-sand/20">
            <h2 className="text-2xl md:text-3xl font-serif mb-8 italic">Tell us about your project</h2>
            <form className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-black text-ink/30 block ml-1">Full Name</label>
                  <input type="text" className="w-full bg-paper px-6 py-4 rounded-2xl outline-none focus:ring-2 ring-burgundy/20 transition-all font-serif" placeholder="Enter your name" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-black text-ink/30 block ml-1">Email Address</label>
                  <input type="email" className="w-full bg-paper px-6 py-4 rounded-2xl outline-none focus:ring-2 ring-burgundy/20 transition-all font-serif" placeholder="email@address.com" />
                </div>
              </div>
              
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.2em] font-black text-ink/30 block ml-1">Service Required</label>
                <select className="w-full bg-paper px-6 py-4 rounded-2xl outline-none focus:ring-2 ring-burgundy/20 transition-all font-serif appearance-none">
                  <option>Architectural Consultation</option>
                  <option>Project Development</option>
                  <option>Real Estate Investment</option>
                  <option>Strategic Marketing</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.2em] font-black text-ink/30 block ml-1">Message</label>
                <textarea rows={6} className="w-full bg-paper px-6 py-4 rounded-2xl outline-none focus:ring-2 ring-burgundy/20 transition-all font-serif resize-none" placeholder="Tell us more about your vision..."></textarea>
              </div>

              <motion.button 
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-burgundy text-white py-4 rounded-full font-bold uppercase tracking-widest hover:opacity-90 transition-all"
              >
                Send Consultation Request
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
