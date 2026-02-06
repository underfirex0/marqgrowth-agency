import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Growth from './components/Growth'; 
import Ebook from './components/Ebook';
import Work from './components/Work';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  // Prevent scrolling during loading state
  useEffect(() => {
    if (loading) {
      // Lock scroll 
      document.body.style.overflow = 'hidden';
      // Force top position to ensure clean load
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [loading]);

  return (
    <>
      {/* 
        CRITICAL FIX: 
        These elements use 'position: fixed'. 
        They MUST be outside any container with a 'transform' property (like the main app div below).
        If inside a transformed container, 'fixed' behaves like 'absolute' relative to that container, 
        causing the cursor/navbar to scroll away with the page instead of staying in viewport.
      */}
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      {/* Preloader - Mounts on top, unmounts when onComplete fires */}
      {loading && (
        <Preloader 
          onExit={() => setShowContent(true)} 
          onComplete={() => setLoading(false)} 
        />
      )}

      {/* 
        Main Content 
        - Scales in when 'showContent' is true (triggered by Preloader curtain lift).
        - Transition provides the premium 'arrival' feel.
      */}
      <div 
        className={`min-h-screen bg-dark-950 text-white selection:bg-brand-accent selection:text-dark-900 transition-transform duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1) ${
          showContent 
            ? 'scale-100 opacity-100 translate-y-0' 
            : 'scale-[0.95] opacity-0 translate-y-10'
        }`}
      >
        <main>
          <Hero />
          <Partners />
          <Work />
          <Growth />
          <Services />
          <Ebook />
          <WhyChooseUs />
          <Team />
          <Contact />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
