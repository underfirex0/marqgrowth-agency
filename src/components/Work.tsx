import React, { useState, useEffect, useRef, useCallback } from 'react';
import { CASE_STUDIES } from '../constants';
import { ArrowUpRight, X, ArrowRight, ChevronLeft, ChevronRight, Play, Pause, Check } from 'lucide-react';
import { CaseStudy } from '../types';
import Button from './Button';
import RevealOnScroll from './RevealOnScroll';

const Work: React.FC = () => {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  
  // Visibility State
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Controls the specific image being shown within the active project (0 = main, 1+ = gallery)
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedStudy) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedStudy]);

  // Intersection Observer to start loop only when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 } // Start when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.disconnect();
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedStudy(null);
      setIsClosing(false);
    }, 500);
  };

  // --- CAROUSEL LOGIC ---

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % CASE_STUDIES.length);
    setActiveImageIndex(0); // Reset to main image when slide changes
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);
    setActiveImageIndex(0);
  }, []);

  // MASTER SEQUENCER: Rotates images within a project, then moves to next project
  // Runs only when section is in view. Does NOT pause on hover.
  useEffect(() => {
    if (!isInView || selectedStudy) return;

    // Time per image in milliseconds
    const IMAGE_DURATION = 3000; 

    const interval = setInterval(() => {
        const currentStudy = CASE_STUDIES[activeIndex];
        // Total images = Main Image (1) + Gallery Images
        const totalImages = 1 + (currentStudy.gallery?.length || 0);

        if (activeImageIndex < totalImages - 1) {
            // Move to next image in the current project
            setActiveImageIndex(prev => prev + 1);
        } else {
            // Finished showing all images for this project, move to next project
            nextSlide();
        }
    }, IMAGE_DURATION);

    return () => clearInterval(interval);
  }, [isInView, selectedStudy, activeIndex, activeImageIndex, nextSlide]);


  // Touch/Drag Handlers
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const currentPosition = clientX;
    setCurrentTranslate(prevTranslate + currentPosition - startX);
  };

  const handleTouchEnd = (e: React.TouchEvent | React.MouseEvent) => {
    setIsDragging(false);
    const clientX = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX;
    const movedBy = clientX - startX;

    if (movedBy < -100) nextSlide();
    if (movedBy > 100) prevSlide();
  };

  // Helper to get image based on state
  const getDisplayImage = (study: CaseStudy, isActive: boolean) => {
      if (!isActive) return study.image;
      if (activeImageIndex === 0) return study.image;
      return study.gallery[activeImageIndex - 1] || study.image;
  };

  return (
    <section ref={sectionRef} id="work" className="py-16 md:py-24 lg:py-32 relative bg-dark-950 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[80px] -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold-glow/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 relative z-10">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 md:mb-12 gap-4 md:gap-8">
          <RevealOnScroll className="max-w-3xl">
            <span className="text-brand-accent font-bold tracking-widest text-sm uppercase mb-4 block text-glow-sm">Case Studies</span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl text-white">
              Our recent <br/><span className="text-gray-400">masterpieces.</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={200} className="flex items-center gap-4 self-end md:self-auto">
            {/* Progress Bar */}
            <div className="hidden md:flex flex-col gap-2 w-32 mr-4">
                 <div className="flex justify-between text-xs text-gray-500 font-bold uppercase tracking-wider">
                    <span>0{activeIndex + 1}</span>
                    <span>0{CASE_STUDIES.length}</span>
                 </div>
                 <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-brand-accent transition-all duration-500"
                        style={{ width: `${((activeIndex + 1) / CASE_STUDIES.length) * 100}%` }}
                    ></div>
                 </div>
            </div>

            <button 
              onClick={prevSlide}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 active:scale-95"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white text-black flex items-center justify-center transition-all duration-300 hover:bg-brand-accent hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              <ChevronRight size={24} />
            </button>
          </RevealOnScroll>
        </div>

        {/* --- 3D CAROUSEL --- */}
        <div 
            className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] perspective-[1000px] flex items-center justify-center touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleTouchStart}
            onMouseUp={handleTouchEnd}
            onMouseMove={(e) => isDragging && handleTouchMove(e)}
        >
             {CASE_STUDIES.map((study, index) => {
                 // Calculate position relative to active index
                 let offset = index - activeIndex;
                 // Handle infinite loop visual logic for standard array
                 if (offset < -1 && activeIndex === 0 && index === CASE_STUDIES.length - 1) offset = -1; // Show last as prev
                 
                 // Determine style state
                 const isActive = index === activeIndex;
                 const isPrev = index === (activeIndex - 1 + CASE_STUDIES.length) % CASE_STUDIES.length;
                 const isNext = index === (activeIndex + 1) % CASE_STUDIES.length;
                 
                 // We only really render Prev, Active, Next prominently. Others hidden or far off.
                 // Simple logic: render all, transform them.
                 
                 let transform = 'translate-x-[100%] scale-[0.8] opacity-0 z-0'; // Default hidden right
                 
                 if (isActive) {
                     transform = 'translate-x-0 scale-100 opacity-100 z-20 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.8)]';
                 } else if (isPrev) {
                     transform = '-translate-x-[60%] md:-translate-x-[70%] scale-[0.85] opacity-40 hover:opacity-60 z-10 grayscale hover:grayscale-0 cursor-pointer';
                 } else if (isNext) {
                     transform = 'translate-x-[60%] md:translate-x-[70%] scale-[0.85] opacity-40 hover:opacity-60 z-10 grayscale hover:grayscale-0 cursor-pointer';
                 }

                 // Fix for far off items to not overlap weirdly
                 if (Math.abs(index - activeIndex) > 1 && !isPrev && !isNext) {
                     transform = 'translate-x-0 scale-0 opacity-0 z-0 pointer-events-none';
                 }

                 return (
                    <div 
                        key={study.id}
                        onClick={() => {
                            if (isActive) setSelectedStudy(study);
                            else if (isPrev) prevSlide();
                            else if (isNext) nextSlide();
                        }}
                        className={`absolute w-[85vw] md:w-[60vw] max-w-[800px] aspect-[16/10] md:aspect-[16/9] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${transform}`}
                    >
                        {/* Card Container */}
                        <div className="w-full h-full rounded-[2rem] overflow-hidden relative border border-white/10 bg-dark-900 group">
                            
                            {/* Image with Cross-fade transition */}
                            {isActive && (
                                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white flex items-center gap-2 transition-opacity duration-300 pointer-events-none">
                                    <Play size={8} className="fill-current animate-pulse" />
                                    Showcase Playing
                                </div>
                            )}

                            <img 
                                src={getDisplayImage(study, isActive)} 
                                alt={study.client} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                loading={isActive ? "eager" : "lazy"}
                            />
                            
                            {/* Dark Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-80' : 'opacity-60'}`}></div>

                            {/* Content */}
                            <div className={`absolute bottom-0 left-0 w-full p-6 md:p-10 transition-all duration-500 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                                <div className="flex justify-between items-end">
                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-brand-accent font-bold tracking-wider text-xs uppercase px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 backdrop-blur-md">
                                                {study.category}
                                            </span>
                                            {/* Image Indicators */}
                                            {isActive && study.gallery.length > 0 && (
                                                <div className="flex gap-1.5 ml-2">
                                                    {Array.from({ length: study.gallery.length + 1 }).map((_, i) => (
                                                        <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === activeImageIndex ? 'bg-white scale-125' : 'bg-white/30'}`} />
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-2">{study.client}</h3>
                                        <p className="text-gray-400 max-w-md hidden md:block">{study.summary}</p>
                                    </div>

                                    <div className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center hover:bg-brand-accent transition-colors shadow-lg">
                                        <ArrowUpRight size={24} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 );
             })}
        </div>
        
        {/* Mobile Swipe Indicator */}
        <div className="md:hidden flex justify-center mt-4 gap-2">
            {CASE_STUDIES.map((_, i) => (
                <div 
                    key={i} 
                    className={`w-2 h-2 rounded-full transition-all ${i === activeIndex ? 'bg-brand-accent w-6' : 'bg-gray-700'}`} 
                />
            ))}
        </div>

      </div>

      {/* Full Screen Modal */}
      {selectedStudy && (
        <div 
          className={`fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-dark-950/95 backdrop-blur-xl"
            onClick={handleClose}
          ></div>

          {/* Modal Content */}
          <div 
            className={`relative w-full max-w-[90rem] h-full md:h-[95vh] overflow-y-auto bg-dark-900 md:rounded-[2.5rem] border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isClosing ? 'scale-95 translate-y-10' : 'scale-100 translate-y-0'}`}
          >
            {/* Close Button */}
            <button 
              onClick={handleClose}
              className="fixed md:absolute top-6 right-6 z-50 w-12 h-12 bg-black/50 hover:bg-white text-white hover:text-black backdrop-blur-md rounded-full flex items-center justify-center transition-all border border-white/10 group shadow-xl"
            >
              <X size={24} className="group-hover:scale-110 transition-transform" />
            </button>

            {/* Header / Hero Section (Full Bleed) */}
            <div className="relative h-[50vh] md:h-[60vh] shrink-0 overflow-hidden bg-dark-950">
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent z-10"></div>
              <img 
                src={selectedStudy.image} 
                alt={selectedStudy.client} 
                className="w-full h-full object-cover opacity-80" 
              />
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-20">
                   <div className="max-w-5xl">
                       <span className="text-brand-accent font-bold tracking-widest text-sm uppercase mb-3 inline-block px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-brand-accent/30">{selectedStudy.category}</span>
                       <h2 className="text-4xl sm:text-5xl md:text-8xl font-display font-bold text-white mb-6 leading-none">
                         {selectedStudy.client}
                       </h2>
                   </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="relative z-20 bg-dark-900 pb-20">
              
              {/* 1. Quick Stats Bar */}
              <div className="border-y border-white/5 bg-dark-950/50 backdrop-blur-md">
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 sm:px-8 md:px-16 py-8">
                     <div>
                        <span className="text-gray-500 text-xs uppercase tracking-widest block mb-1">Industry</span>
                        <span className="text-white font-bold">{selectedStudy.industry}</span>
                     </div>
                     <div>
                        <span className="text-gray-500 text-xs uppercase tracking-widest block mb-1">Impact</span>
                        <span className="text-brand-accent font-bold">{selectedStudy.resultHook}</span>
                     </div>
                     <div className="col-span-2 md:col-span-2">
                        <span className="text-gray-500 text-xs uppercase tracking-widest block mb-1">Goal</span>
                        <span className="text-white font-medium">{selectedStudy.summary}</span>
                     </div>
                 </div>
              </div>

              <div className="px-6 sm:px-8 md:px-16 pt-16 md:pt-24 max-w-[90rem] mx-auto">
                {/* 2. THE CHALLENGE */}
                <div className="grid md:grid-cols-12 gap-12 md:gap-24 mb-24 items-start">
                    <div className="md:col-span-4 sticky top-10">
                         <h3 className="text-white font-bold text-3xl md:text-4xl font-display mb-4">The Challenge</h3>
                         <div className="w-20 h-1 bg-brand-accent rounded-full"></div>
                    </div>
                    <div className="md:col-span-8">
                        <p className="text-gray-300 text-xl md:text-2xl leading-relaxed mb-8 font-light">
                            {selectedStudy.problem}
                        </p>
                        <ul className="grid sm:grid-cols-2 gap-4">
                            {selectedStudy.painPoints.map((point, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-400">
                                     <span className="text-red-400 mt-1.5 font-bold">•</span> {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* 3. VISUAL GALLERY - FEATURE 1 */}
                {selectedStudy.gallery[0] && (
                    <div className="mb-24 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group bg-dark-950 relative">
                        <div className="absolute top-6 left-6 z-10 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-xs font-bold text-white uppercase tracking-wider border border-white/10">
                            User Interface Design
                        </div>
                        <img 
                            src={selectedStudy.gallery[0]} 
                            alt="Project Feature" 
                            className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                        />
                    </div>
                )}

                {/* 4. STRATEGY */}
                <div className="grid md:grid-cols-12 gap-12 md:gap-24 mb-24 items-start">
                    <div className="md:col-span-4 sticky top-10">
                         <h3 className="text-white font-bold text-3xl md:text-4xl font-display mb-4">The Strategy</h3>
                         <div className="w-20 h-1 bg-brand-accent rounded-full"></div>
                    </div>
                    <div className="md:col-span-8">
                        <p className="text-gray-300 text-xl leading-relaxed mb-10">
                            {selectedStudy.strategy}
                        </p>
                         <div className="grid sm:grid-cols-2 gap-6">
                            {selectedStudy.strategyBullets.map((point, i) => (
                                <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-brand-accent/30 transition-colors">
                                     <div className="w-2 h-2 rounded-full bg-brand-accent mb-4 shadow-[0_0_10px_rgba(204,255,0,0.6)]"></div>
                                     <span className="text-white font-medium text-lg leading-snug">{point}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 5. VISUAL GALLERY - GRID */}
                {(selectedStudy.gallery.length > 1) && (
                    <div className="grid md:grid-cols-2 gap-8 mb-24">
                        {selectedStudy.gallery.slice(1).map((img, idx) => (
                            <div key={idx} className={`relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group bg-dark-950 ${idx === 2 ? 'md:col-span-2' : ''}`}>
                                 <div className="absolute top-6 left-6 z-10 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-xs font-bold text-white uppercase tracking-wider border border-white/10">
                                    {idx === 0 ? 'Mobile Responsiveness' : 'Core Features'}
                                </div>
                                <img 
                                    src={img} 
                                    alt={`Gallery ${idx}`} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 min-h-[400px]"
                                />
                            </div>
                        ))}
                    </div>
                )}

                {/* 6. EXECUTION & TECH */}
                <div className="grid md:grid-cols-2 gap-12 mb-24 p-8 md:p-12 rounded-[2rem] bg-white/5 border border-white/5">
                     <div>
                          <h4 className="text-brand-accent font-bold text-sm uppercase tracking-widest mb-6">What We Delivered</h4>
                          <ul className="space-y-4">
                              {selectedStudy.execution.map((item, i) => (
                                  <li key={i} className="text-white text-lg flex items-center gap-4">
                                      <div className="w-6 h-6 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent">
                                         <Check size={14} strokeWidth={3} />
                                      </div>
                                      {item}
                                  </li>
                              ))}
                          </ul>
                      </div>
                       <div>
                          <h4 className="text-gray-500 font-bold text-sm uppercase tracking-widest mb-6">Tech Stack</h4>
                           <div className="flex flex-wrap gap-3">
                              {selectedStudy.technical.map((item, i) => (
                                  <span key={i} className="px-5 py-2 rounded-lg bg-black/30 border border-white/10 text-gray-300 text-sm font-medium font-mono hover:text-white hover:border-white/30 transition-colors cursor-default">
                                      {item}
                                  </span>
                              ))}
                          </div>
                      </div>
                </div>

                {/* 7. RESULTS - HIGH IMPACT */}
                <div className="border-t border-white/10 pt-20 mb-20 text-center">
                     <span className="text-brand-accent font-bold tracking-[0.2em] uppercase text-sm mb-6 block">The Outcome</span>
                     <h3 className="text-white font-bold text-4xl md:text-5xl font-display mb-12">Numbers don't lie.</h3>
                     
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                          {selectedStudy.results.map((res, i) => (
                            <div key={i} className="relative p-8 rounded-3xl bg-gradient-to-br from-dark-800 to-dark-950 border border-white/10 group hover:border-brand-accent/30 transition-all duration-300">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-20 group-hover:opacity-100 transition-opacity"></div>
                                <div className="text-5xl md:text-6xl font-bold text-white mb-2 font-display tracking-tight">{res.value}</div>
                                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">{res.label}</div>
                            </div>
                          ))}
                     </div>
                     {selectedStudy.resultContext && (
                         <p className="mt-12 text-gray-400 max-w-2xl mx-auto italic text-xl leading-relaxed">
                             "{selectedStudy.resultContext}"
                         </p>
                     )}
                 </div>
              
              </div>

              {/* 8. CTA - FOOTER */}
              <div className="sticky bottom-0 p-6 md:p-8 bg-dark-900/90 backdrop-blur-xl border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 z-50">
                  <div className="text-center md:text-left">
                     <p className="text-white font-bold text-lg">Ready to build your legacy?</p>
                     <p className="text-gray-500 text-sm">Let's replicate this success for you.</p>
                  </div>
                   <Button 
                      variant="primary" 
                      className="w-full md:w-auto px-8 py-3 shadow-[0_0_20px_rgba(163,230,53,0.3)]"
                      onClick={() => {
                        handleClose();
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;