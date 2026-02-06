import React from 'react';
import { TEAM } from '../constants';
import { Linkedin, Twitter, ArrowUpRight } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Team: React.FC = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-dark-900 relative overflow-hidden border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 relative z-10">
        <RevealOnScroll className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-8">
           <div className="max-w-3xl">
               <span className="text-brand-accent font-bold tracking-widest text-sm uppercase mb-4 block text-glow-sm">Our Squad</span>
               <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
                 Meet experts behind your <br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">growth business.</span>
               </h2>
           </div>
           <p className="text-gray-400 text-lg max-w-md text-right md:text-left hidden md:block border-l border-white/10 pl-6">
             A multidisciplinary team of strategists, designers, and engineers obsessed with ROI.
           </p>
        </RevealOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
           {TEAM.map((member, idx) => (
             <RevealOnScroll key={idx} delay={idx * 100}>
               <div className="group relative cursor-default">
                 {/* Image Card */}
                 <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-dark-800 border border-white/10 aspect-[3/4] mb-4 md:mb-6 shadow-2xl transition-all duration-500 group-hover:border-brand-accent/50 group-hover:shadow-[0_0_30px_rgba(204,255,0,0.15)] group-hover:-translate-y-2">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500"></div>
                    
                    {/* Floating Socials */}
                    <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 flex flex-col gap-2 md:gap-3 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                        {member.socials.linkedin && (
                          <a href={member.socials.linkedin} className="w-8 h-8 md:w-10 md:h-10 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full flex items-center justify-center hover:bg-brand-accent hover:text-black hover:border-brand-accent transition-all duration-300">
                             <Linkedin size={16} className="md:w-[18px] md:h-[18px]" />
                          </a>
                        )}
                        {member.socials.twitter && (
                          <a href={member.socials.twitter} className="w-8 h-8 md:w-10 md:h-10 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full flex items-center justify-center hover:bg-brand-accent hover:text-black hover:border-brand-accent transition-all duration-300">
                             <Twitter size={16} className="md:w-[18px] md:h-[18px]" />
                          </a>
                        )}
                    </div>
                 </div>

                 {/* Text Info */}
                 <div className="pl-1 md:pl-2">
                    <h3 className="text-lg md:text-2xl font-display font-bold text-white mb-1 group-hover:text-brand-accent transition-colors duration-300 flex items-center gap-2">
                        {member.name.split(' ')[0]} {/* Show first name on small screens if full name too long? No, usually fine. */}
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 hidden md:block" />
                    </h3>
                    <p className="text-[10px] md:text-sm font-medium text-gray-500 tracking-wider uppercase group-hover:text-gray-400 transition-colors">{member.role}</p>
                 </div>
               </div>
             </RevealOnScroll>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Team;