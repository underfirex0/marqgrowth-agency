import React from 'react';
import Button from './Button';
import RevealOnScroll from './RevealOnScroll';
import { Download, Brain, Cpu, Sparkles } from 'lucide-react';

const Ebook: React.FC = () => {
  return (
    <section
      id="ebook"
      className="relative py-24 md:py-32 bg-dark-900 overflow-hidden"
    >
      {/* BACKGROUND AMBIENCE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(204,255,0,0.03)_0%,transparent_55%)]" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[520px] h-[520px] bg-brand-accent/5 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-[520px] h-[520px] bg-white/5 rounded-full blur-[120px] animate-blob animation-delay-2000" />
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="relative bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-[3rem] p-8 md:p-16 backdrop-blur-sm box-glow-hover transition-all duration-500 overflow-hidden">
          
          {/* GRID OVERLAY */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] mask-fade-sides pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            
            {/* TEXT SIDE */}
            <RevealOnScroll className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_10px_rgba(204,255,0,0.2)]">
                <Sparkles size={12} />
                The Manifesto
              </div>

              <h2 className="font-display font-bold text-5xl md:text-6xl text-white leading-[0.95] tracking-tight mb-6">
                AI <span className="text-gray-600 font-light italic mx-1">x</span> HUMAN
                <span className="block text-2xl md:text-3xl font-sans font-normal text-brand-accent mt-4">
                  The New Mind of Marketing
                </span>
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
                In an era of infinite content, <span className="text-white font-medium">thinking</span> is the only differentiator left.
                We wrote this guide to define the convergence of algorithmic precision and human intuition.
                <br /><br />
                <span className="text-sm text-gray-500 font-mono">
                  Vol. 01 — Philosophy & Tactics
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
                <div className="relative flex-1 group">
                  <input
                    type="email"
                    placeholder="Enter email to unlock"
                    className="w-full bg-dark-950/50 border border-white/10 rounded-full px-6 py-4 pl-12 text-white placeholder:text-gray-600 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent focus:outline-none transition-all"
                  />
                  <Brain className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-brand-accent transition-colors" />
                </div>

                <Button variant="primary" icon className="py-4 shrink-0">
                  Get Free Copy
                </Button>
              </div>

              <div className="flex items-center gap-6 mt-8 pt-6 border-t border-white/5">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border border-dark-900 bg-gray-800 overflow-hidden"
                    >
                      <img
                        src={`https://picsum.photos/50/50?random=${i + 30}`}
                        alt="Reader"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500">
                  <strong className="text-white">2,000+</strong> marketers reading.
                </p>
              </div>
            </RevealOnScroll>

            {/* 3D BOOK */}
            <RevealOnScroll
              delay={200}
              className="order-1 lg:order-2 flex justify-center lg:justify-end perspective-[2000px]"
            >
              <div className="relative w-72 md:w-80 aspect-[3/4] animate-float-slow preserve-3d cursor-pointer group">
                
                {/* SPINE */}
                <div className="absolute top-2 bottom-2 right-4 w-12 bg-gray-900 rounded-r-md translate-x-6 translate-z-[-20px] shadow-2xl" />
                <div className="absolute top-1 bottom-1 right-3 w-12 bg-white/10 rounded-r-md translate-x-4 translate-z-[-10px]" />

                {/* COVER */}
                <div className="absolute inset-0 bg-dark-950 border border-white/20 rounded-r-xl rounded-l-sm shadow-2xl transform transition-transform duration-700 ease-out origin-left group-hover:rotate-y-[-10deg] group-hover:rotate-x-[5deg] overflow-hidden z-20">
                  
                  <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-black/80" />

                  <div className="relative z-10 h-full flex flex-col justify-between p-8">
                    <div className="flex justify-between items-start">
                      <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[10px] font-bold text-white">
                        V.
                      </div>
                      <Cpu className="w-6 h-6 text-brand-accent opacity-50" />
                    </div>

                    <div className="relative text-center py-10">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-48 h-48 border border-white/5 rounded-full animate-[spin_10s_linear_infinite]">
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-accent rounded-full shadow-[0_0_10px_rgba(204,255,0,1)]" />
                        </div>
                        <div className="absolute w-40 h-40 border border-white/10 rounded-full animate-pulse-slow" />
                        <div className="absolute w-32 h-32 border border-brand-accent/20 rounded-full" />
                      </div>

                      <h3 className="relative z-10 text-5xl font-display font-bold text-white tracking-tighter mb-2 mix-blend-overlay">
                        AI<span className="text-brand-accent">x</span>
                      </h3>
                      <h3 className="relative z-10 text-4xl font-display font-bold text-white tracking-widest opacity-80">
                        HUMAN
                      </h3>
                    </div>

                    <div className="border-t border-white/10 pt-4 flex justify-between items-end">
                      <div>
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">
                          The New Mind
                        </p>
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest">
                          Of Marketing
                        </p>
                      </div>
                      <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center hover:bg-brand-accent transition-colors">
                        <Download size={14} />
                      </div>
                    </div>
                  </div>

                  {/* GLASS SHINE */}
                  <div className="absolute -top-full -left-full w-[200%] h-[200%] bg-gradient-to-br from-white/10 via-transparent to-transparent rotate-45 translate-y-full transition-transform duration-1000 group-hover:translate-y-0 pointer-events-none" />
                </div>

                {/* BACK GLOW */}
                <div className="absolute inset-[-10%] bg-brand-accent/20 blur-[70px] -z-10 opacity-40 group-hover:opacity-80 transition-opacity duration-500" />
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Ebook;
