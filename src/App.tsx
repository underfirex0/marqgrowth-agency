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

  // Prevent scrolling during loading state
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
      // Scroll to top on refresh to ensure preloader experience is consistent
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [loading]);

  return (
    <>
      {/* Preloader stays mounted until it signals completion */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      <div className={`min-h-screen bg-dark-950 text-white selection:bg-brand-accent selection:text-dark-900 transition-transform duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1) ${loading ? 'scale-[0.95] opacity-0 translate-y-10' : 'scale-100 opacity-100 translate-y-0'}`}>
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
