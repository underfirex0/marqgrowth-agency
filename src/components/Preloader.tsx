import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Reveal content sequence
    const timer1 = setTimeout(() => setShowContent(true), 100);

    // Counter animation
    const duration = 2200; // Total loading time
    const start = performance.now();
    let animationFrameId: number;

    const animate = (time: number) => {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);
      
      // Exponential easing for a high-tech feel
      const easeValue = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeValue * 100));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        // Animation complete, start exit sequence
        setTimeout(() => {
            setIsExiting(true);
            // Allow exit animation to play before unmounting
            setTimeout(onComplete, 1000); 
        }, 200);
      }
    };
    
    animationFrameId = requestAnimationFrame(animate);

    return () => {
        clearTimeout(timer1);
        cancelAnimationFrame(animationFrameId);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-dark-950 transition-all duration-[1000ms] cubic-bezier(0.76, 0, 0.24, 1) ${
        isExiting ? '-translate-y-full rounded-b-[50%]' : 'translate-y-0 rounded-b-none'
      }`}
    >
        {/* Center Content */}
        <div className={`relative flex flex-col items-center transition-all duration-700 transform ${isExiting ? 'opacity-0 scale-90 translate-y-10' : 'opacity-100 scale-100 translate-y-0'}`}>
            
            {/* Animated Logo Icon */}
            <div className={`w-20 h-20 md:w-24 md:h-24 mb-8 transition-all duration-1000 cubic-bezier(0.34, 1.56, 0.64, 1) ${showContent ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-90'}`}>
                 <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_30px_rgba(204,255,0,0.6)]">
                    <defs>
                        <linearGradient id="loaderGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#84cc16" />
                            <stop offset="100%" stopColor="#ccff00" />
                        </linearGradient>
                    </defs>
                    <circle cx="8" cy="30" r="4" fill="url(#loaderGradient)" />
                    <path d="M8 30 C 18 30, 18 18, 28 18" stroke="url(#loaderGradient)" strokeWidth="4" strokeLinecap="round" className="opacity-90" />
                    <path d="M26 15 L 32 18 L 27 22" fill="url(#loaderGradient)" />
                    <path d="M12 18 C 20 18, 20 8, 30 8" stroke="url(#loaderGradient)" strokeWidth="4" strokeLinecap="round" className="opacity-90" />
                    <path d="M28 5 L 34 8 L 29 12" fill="url(#loaderGradient)" />
                 </svg>
            </div>

            {/* Text Reveal Mask */}
            <div className="overflow-hidden h-14 md:h-16 flex items-center">
                <h1 className={`font-display font-bold text-4xl md:text-5xl text-white tracking-widest transform transition-transform duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1) ${showContent ? 'translate-y-0' : 'translate-y-full'}`}>
                    MARQGROWTH
                </h1>
            </div>
            
             {/* Subtitle */}
             <div className="overflow-hidden mt-2">
                <div className={`flex items-center gap-3 transform transition-transform duration-[1200ms] delay-100 cubic-bezier(0.16, 1, 0.3, 1) ${showContent ? 'translate-y-0' : '-translate-y-full'}`}>
                    <div className="h-px w-8 bg-brand-accent/50"></div>
                    <p className="text-gray-400 text-xs md:text-sm tracking-[0.3em] uppercase font-medium">
                        System Initialized
                    </p>
                    <div className="h-px w-8 bg-brand-accent/50"></div>
                </div>
             </div>
        </div>

        {/* Big Counter Bottom Right */}
        <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 overflow-hidden pointer-events-none">
            <div className={`font-display font-bold text-[5rem] md:text-[8rem] leading-none text-transparent tracking-tighter transition-opacity duration-500 ${isExiting ? 'opacity-0' : 'opacity-10'}`} style={{ WebkitTextStroke: '1px white' }}>
                {count}%
            </div>
        </div>

        {/* Loading Bar at Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-dark-900">
            <div 
                className="h-full bg-brand-accent shadow-[0_0_20px_#ccff00]" 
                style={{ width: `${count}%`, transition: 'width 0.1s linear' }} 
            />
        </div>
    </div>
  );
};

export default Preloader;