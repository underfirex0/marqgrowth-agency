import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Scroll effect and Active Section Detection
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Logic inside RAF
          const scrollY = window.scrollY;
          setScrolled(scrollY > 20);

          // Detect active section for highlighting (simplified for performance)
          // Only run this heavier calculation every few frames or just rely on RAF
          const sections = NAV_LINKS.map(link => link.href.substring(1));
          let current = '';
          
          // Optimization: Check middle of screen instead of full rect calculation for every element if possible,
          // but getBoundingClientRect is usually okay in RAF.
          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              // Check if the section is roughly in the viewport
              if (rect.top <= 300 && rect.bottom >= 300) {
                current = section;
              }
            }
          }
          setActiveSection(current);
          
          ticking = false;
        });
        
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      setIsOpen(false);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
        scrolled 
          ? 'py-4' 
          : 'py-6 md:py-8'
      }`}
    >
      <div 
        className={`mx-auto flex items-center justify-between transition-all duration-500 ${
            scrolled 
            ? 'container max-w-5xl bg-dark-900/80 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
            : 'container px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 bg-transparent'
        }`}
      >
        {/* Custom Built Logo - MarqGrowth */}
        <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="flex items-center gap-3 group relative z-50">
          {/* Logo Icon (Recreated in Vector) */}
          <div className="w-9 h-9 relative flex-shrink-0">
             <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_10px_rgba(204,255,0,0.4)] transition-transform duration-300 group-hover:scale-110">
                <defs>
                   <linearGradient id="logoGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#84cc16" /> {/* Lime 500 */}
                      <stop offset="100%" stopColor="#ccff00" /> {/* Brand Accent */}
                   </linearGradient>
                </defs>
                <circle cx="8" cy="30" r="4" fill="url(#logoGradient)" />
                <path d="M8 30 C 18 30, 18 18, 28 18" stroke="url(#logoGradient)" strokeWidth="4" strokeLinecap="round"/>
                <path d="M26 15 L 32 18 L 27 22" fill="url(#logoGradient)" />
                <path d="M12 18 C 20 18, 20 8, 30 8" stroke="url(#logoGradient)" strokeWidth="4" strokeLinecap="round" />
                <path d="M28 5 L 34 8 L 29 12" fill="url(#logoGradient)" />
             </svg>
          </div>

          {/* Logo Text (Hidden on scroll on mobile to save space, visible on desktop) */}
          <span className={`font-display font-extrabold text-xl tracking-wide text-white group-hover:text-brand-accent transition-colors select-none ${scrolled ? 'hidden md:block' : 'block'}`}>
            MARQGROWTH
          </span>
        </a>

        {/* Desktop Navigation - Centered Island Style */}
        <div className="hidden md:flex items-center">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => {
               const isActive = activeSection === link.href.substring(1);
               return (
                <li key={link.label}>
                    <a 
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`
                        relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300
                        ${isActive 
                            ? 'text-dark-900 bg-white shadow-[0_0_15px_rgba(255,255,255,0.3)] font-bold' 
                            : 'text-gray-300 hover:text-white hover:bg-white/10'
                        }
                    `}
                    >
                    {link.label}
                    </a>
                </li>
               );
            })}
          </ul>
        </div>

        {/* Right Side - Button & Mobile Toggle */}
        <div className="flex items-center gap-4 relative z-50">
          <Button 
            variant="primary" 
            className={`
                hidden md:inline-flex text-xs px-6 py-2.5 
                ${scrolled ? 'h-10' : 'h-11'}
            `}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Talk <ArrowUpRight className="ml-1 w-3 h-3" />
          </Button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2 bg-white/5 rounded-full border border-white/10 active:scale-95 transition-transform"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </nav>

    {/* Mobile Menu Overlay - Full Screen with Blur */}
    <div 
        className={`md:hidden fixed inset-0 bg-dark-950/95 backdrop-blur-xl z-40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}
    >
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
          {NAV_LINKS.map((link, idx) => (
            <a 
              key={link.label}
              href={link.href} 
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 hover:to-brand-accent transition-all transform hover:scale-105"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
          <div className="w-full max-w-xs h-px bg-white/10 my-4"></div>
          <Button variant="primary" className="w-full max-w-xs text-center justify-center py-4 text-lg" onClick={() => setIsOpen(false)}>
            Let's Talk
          </Button>
        </div>
    </div>
    </>
  );
};

export default Navbar;