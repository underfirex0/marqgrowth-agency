import React, { useEffect, useState, useRef } from 'react';

const CustomCursor: React.FC = () => {
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
    let isMoving = false;

    // Increased LERP factor for a "lighter", more responsive feel
    // 0.1 = Very slow/draggy
    // 0.25 = Snappy but smooth (Premium feel)
    const LERP_FACTOR = 0.25;

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const updateCursor = () => {
      if (cursorRef.current && isMoving) {
        // Smooth follow effect
        // We check distance to stop the loop when close enough to save resources
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;
        
        if (Math.abs(dx) < 0.01 && Math.abs(dy) < 0.01) {
             cursorX = mouseX;
             cursorY = mouseY;
             // Don't stop animation frame, just don't calc lerp to avoid micro-jitter
        } else {
             cursorX = lerp(cursorX, mouseX, LERP_FACTOR);
             cursorY = lerp(cursorY, mouseY, LERP_FACTOR);
        }

        cursorRef.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      }
      animationFrameId = requestAnimationFrame(updateCursor);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMoving = true;
      
      if (!isVisible) {
        setIsVisible(true);
        // Instant warp on first appearance to prevent flying in from top-left
        cursorX = mouseX;
        cursorY = mouseY;
      }
    };

    const onMouseDown = () => setIsHovering(true);
    const onMouseUp = () => setIsHovering(false);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Expanded detection for interactive elements
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' || 
        target.tagName === 'SELECT' ||
        target.closest('button') || 
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    window.addEventListener('mouseout', onMouseOut, { passive: true });

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
        marginLeft: '-16px',
        backfaceVisibility: 'hidden',
        WebkitFontSmoothing: 'antialiased'
      }}
    >
      <div 
        ref={cursorDotRef}
        className={`w-full h-full rounded-full bg-white transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          isHovering ? 'scale-[2.5] opacity-40' : 'scale-100 opacity-100'
        }`}
      />
    </div>
  );
};

export default CustomCursor;
