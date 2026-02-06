import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-900 pt-16 md:pt-24 pb-8 md:pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Decorative massive text background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none opacity-[0.03]">
        <span className="text-[20vw] font-display font-bold text-white leading-none">VORTEX</span>
      </div>

      <div className="container mx-auto px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 relative z-10">
        
        {/* Main CTA */}
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-24">
           <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-8xl mb-8 tracking-tight">
             Have an idea? <br/>
             <span className="text-brand-accent">Let's build it.</span>
           </h2>
           <button 
             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
             className="group relative inline-flex items-center gap-4 px-8 py-4 bg-white text-black rounded-full text-lg font-bold hover:bg-brand-accent transition-colors duration-300"
           >
             Start a Project
             <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
               <ArrowUp className="w-4 h-4" />
             </div>
           </button>
        </div>

        <div className="grid md:grid-cols-4 gap-12 mb-16 md:mb-20 border-t border-white/10 pt-16">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center text-dark-900 font-bold group-hover:rotate-12 transition-transform">V</div>
              <span className="font-display font-bold text-xl text-white">Vortex<span className="text-brand-accent">.</span></span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Refining digital presence for brands that dare to lead.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-display">Navigation</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Work', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-500 text-sm hover:text-brand-accent transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-display">Services</h4>
            <ul className="space-y-3">
              {['Web Design', 'Development', 'SEO', 'Branding', 'Marketing'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 text-sm hover:text-brand-accent transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-6 font-display">Socials</h4>
             <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-accent hover:text-black hover:border-brand-accent transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">© 2024 Vortex Agency. All rights reserved.</p>
          
          <button 
            onClick={scrollToTop} 
            className="flex items-center gap-2 text-white/50 text-xs font-bold uppercase hover:text-brand-accent transition-colors"
          >
            Back to Top <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;