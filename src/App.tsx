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

  // Prevent scrolling during loading state & Fix Scroll Restoration
  useEffect(() => {
    // 1. Prevent browser from restoring scroll position on refresh
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    if (loading) {
      // Lock scroll completely on both body and html to prevent any jumps
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      // 2. Force scroll to top immediately when loading ends to ensure clean start
      window.scrollTo(0, 0);
      
      // Unlock scroll
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
  }, [loading]);

  return (
    <>
      {/* Preloader stays mounted until it signals completion */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* 
          Updated Transition: 
          Removed 'translate-y' to stop the "scroll" feeling.
          Added 'blur-sm' to 'blur-0' for a premium focus effect.
          Changed scale to 0.98 for subtle depth.
      */}
      <div className={`min-h-screen bg-dark-950 text-white selection:bg-brand-accent selection:text-dark-900 transition-all duration-[1500ms] cubic-bezier(0.19, 1, 0.22, 1) ${loading ? 'scale-[0.98] opacity-0 blur-sm' : 'scale-100 opacity-100 blur-0'}`}>
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
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
