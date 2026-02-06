import React, { useEffect, useState, useRef } from 'react';

const CustomCursor: React.FC = () => {
  // Use refs for direct DOM manipulation to avoid React render cycle on every mousemove
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    // Linear interpolation for smoothness
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const updateCursor = () => {
      if (cursorRef.current) {
        // Smooth follow effect
        cursorX = lerp(cursorX, mouseX, 0.15); // increased factor for snappier/lighter feel on weak pc
        cursorY = lerp(cursorY, mouseY, 0.15);
        
        cursorRef.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      }
      animationFrameId = requestAnimationFrame(updateCursor);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      if (!isVisible) {
        setIsVisible(true);
        cursorX = mouseX;
        cursorY = mouseY;
      }
    };

    const onMouseDown = () => setIsHovering(true);
    const onMouseUp = () => setIsHovering(false);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovering(true);
      }
    };

    const onMouseOut = () => setIsHovering(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mouseout', onMouseOut);

    // Start animation loop
    updateCursor();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mouseout', onMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div 
      ref={cursorRef}
      className="hidden lg:block fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference will-change-transform"
      style={{
        marginTop: '-16px',
        marginLeft: '-16px'
      }}
    >
      <div 
        ref={cursorDotRef}
        className={`w-full h-full rounded-full bg-white transition-all duration-300 ease-out ${
          isHovering ? 'scale-[2.5] opacity-50' : 'scale-100 opacity-100'
        }`}
      />
    </div>
  );
};

export default CustomCursor;