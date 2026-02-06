import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const LOGOS = [
  'FoxHub', 'HexLab', 'Muzica', 'Radiyal', 'Kanba', 'Aven', 'Atica', 'Treva',
  'Circle', 'Niva', 'Zot', 'Viro', 'Luma', 'Opex'
];

const Partners: React.FC = () => {
  // Quadruple the logos for seamless infinite scroll
  const DISPLAY_LOGOS = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <section className="py-12 md:py-20 bg-dark-950 border-y border-white/5 relative overflow-hidden">
      
      {/* --- BACKGROUND INTEGRATION --- */}
      <div className="absolute inset-0 bg-dark-950"></div>
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none mix-blend-overlay"></div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 w-full">
        
        {/* Simple White Title */}
        <RevealOnScroll className="flex justify-center mb-8 md:mb-10 container mx-auto px-6">
          <p className="text-sm font-medium text-white tracking-[0.2em] uppercase text-center opacity-70">
            Trusted by industry leaders
          </p>
        </RevealOnScroll>
        
        {/* Mask for fading edges */}
        <div className="relative w-full overflow-hidden mask-fade-sides">
            {/* CSS-Only Infinite Scroll - GPU Accelerated */}
            <div className="flex whitespace-nowrap animate-scroll-continuous w-max hover:[animation-play-state:paused]">
                {DISPLAY_LOGOS.map((logo, i) => (
                    <div 
                        key={i} 
                        className="inline-flex items-center justify-center mx-8 md:mx-12"
                    >
                        <span 
                            className="text-2xl md:text-3xl font-display font-bold text-white/20 hover:text-white transition-colors duration-500 cursor-default select-none"
                        >
                            {logo}
                        </span>
                    </div>
                ))}
            </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } 
        }
        .animate-scroll-continuous {
          animation: scroll 60s linear infinite;
          will-change: transform;
        }
        .mask-fade-sides {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
};

export default Partners;