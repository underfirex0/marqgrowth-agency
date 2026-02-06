import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.Node;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
}

const RevealOnScroll: React.FC<RevealProps> = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = 'up'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a small buffer to ensure smooth paint
          window.requestAnimationFrame(() => {
             setIsVisible(true);
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.disconnect(); };
  }, []);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1)'; // translate3d forces GPU
    switch (direction) {
      case 'up': return 'translate3d(0, 40px, 0) scale(1)';
      case 'down': return 'translate3d(0, -40px, 0) scale(1)';
      case 'left': return 'translate3d(40px, 0, 0) scale(1)';
      case 'right': return 'translate3d(-40px, 0, 0) scale(1)';
      case 'scale': return 'translate3d(0, 0, 0) scale(0.9)';
      default: return 'translate3d(0, 40px, 0) scale(1)';
    }
  };

  return (
    <div 
      ref={ref} 
      className={`${className} transition-all duration-[1000ms] cubic-bezier(0.16, 1, 0.3, 1) will-change-transform`}
      style={{ 
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
      }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
