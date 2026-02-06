import React, { useEffect, useRef } from 'react';

const ScrollProgress: React.FC = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (barRef.current) {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight;
            const winHeight = window.innerHeight;
            // Avoid divide by zero
            const total = docHeight - winHeight;
            const scrollPercent = total > 0 ? (scrollTop / total) * 100 : 0;
            
            barRef.current.style.width = `${scrollPercent}%`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[100] pointer-events-none">
      <div 
        ref={barRef}
        className="h-full bg-brand-accent shadow-[0_0_20px_#ccff00] transition-none"
        style={{ width: '0%' }}
      />
    </div>
  );
};

export default ScrollProgress;