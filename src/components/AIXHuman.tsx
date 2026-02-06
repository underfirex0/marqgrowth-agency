import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const AIXHuman: React.FC = () => {
  return (
    <section className="py-32 bg-black relative border-t border-white/5 overflow-hidden">
       {/* Subtle background texture */}
       <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[150px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
       
       <div className="container mx-auto px-6 relative z-10">
         <RevealOnScroll className="max-w-4xl mx-auto">
            {/* Editorial Layout with Left Border */}
            <div className="md:border-l border-white/10 md:pl-12 lg:pl-20 py-8 relative">
                {/* Decorative accent line for mobile */}
                <div className="absolute top-0 left-0 w-12 h-1 bg-brand-accent md:hidden mb-8"></div>
                <div className="absolute top-8 -left-[1px] w-1 h-24 bg-brand-accent hidden md:block"></div>

                <span className="text-brand-accent font-bold tracking-[0.25em] text-xs uppercase mb-10 block">
                  A Framework for Modern Marketing
                </span>
                
                <h2 className="font-display font-bold text-6xl md:text-8xl mb-12 tracking-tight text-white leading-[0.9]">
                  AI<span className="text-brand-accent font-serif italic font-light px-1">X</span>HUMAN
                  <span className="block text-2xl md:text-4xl font-normal text-gray-500 mt-4 tracking-normal font-sans">The New Mind of Marketing</span>
                </h2>

                <div className="space-y-8 text-xl md:text-2xl font-light text-gray-300 leading-relaxed font-sans">
                  <p>
                    Marketing is no longer just creativity.<br/>
                    And it’s no longer just data.
                  </p>
                  
                  <p className="text-white font-normal">
                    AIXHUMAN is the space where artificial intelligence meets human intuition — 
                    where systems, psychology, emotion, and meaning work together.
                  </p>
                  
                  <p>
                    This framework guides how we think, design, and grow brands in a world shaped by algorithms, attention, and choice.
                  </p>
                </div>

                <div className="mt-16 pt-10 border-t border-dashed border-white/10 inline-block w-full">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
                    This thinking shapes every strategy we build at Vortex.
                  </p>
                </div>
            </div>
         </RevealOnScroll>
       </div>
    </section>
  );
};

export default AIXHuman;