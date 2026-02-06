import React from 'react';
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

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-950 text-white selection:bg-brand-accent selection:text-dark-900">
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
  );
};

export default App;
