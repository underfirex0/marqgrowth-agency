import React from 'react';
import Button from './Button';
import RevealOnScroll from './RevealOnScroll';
import { ArrowRight, TrendingUp, Zap, ChevronDown } from 'lucide-react';

const FloatingCard: React.FC<{ 
    className?: string; 
    icon: React.ElementType; 
    label: string; 
    value: string; 
    delay?: number;
    color?: string;
}> = ({ className = '', icon: Icon, label, value, delay = 0, color = 'text-brand-accent' }) => (
  <div 
    className={`hidden lg:flex absolute p-5 rounded-2xl bg-dark-900/80 backdrop-blur-md border border-white/10 items-center gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-float-slow z-20 hover:border-brand-accent/50 transition-all duration-500 group pointer-events-auto cursor-default ${className}`} 
    style={{ animationDelay: `${delay}s` }}
  >
     <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center ${color} group-hover:scale-110 transition-transform duration-500`}>
        <Icon size={24} />
     </div>
     <div>
        <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">{label}</div>
        <div className="text-white font-display font-bold text-lg leading-none">{value}</div>
     </div>
  </div>
);

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20">
      
      {/* Static Background instead of heavy gradients if possible, or simplified */}
      <div className="absolute inset-0 bg-dark-950"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Grid Background - reduced opacity for performance */}
          <div className="absolute bottom-[-10%] left-[-50%] right-[-50%] h-[100vh] bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:5rem_5rem] [transform:perspective(1000px)_rotateX(60deg)] opacity-20 origin-bottom will-change-transform"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-dark-950/80"></div>
      </div>

      {/* Simplified Glow Blob - reduced blur radius for weak GPUs */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[80px] pointer-events-none will-change-transform"
      ></div>

      <div className="container mx-auto px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 relative z-30">
        <div className="absolute inset-0 pointer-events-none">
           <FloatingCard 
              className="top-[18%] left-[2%]"
              icon={TrendingUp}
              label="Growth Engine"
              value="+245% Avg."
              delay={0}
           />
           <FloatingCard 
              className="bottom-[25%] right-[2%]"
              icon={Zap}
              label="Real-time ROI"
              value="Tracked"
              delay={2}
              color="text-yellow-400"
           />
        </div>

        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
           
           <RevealOnScroll direction="down" delay={200}>
              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-10 group cursor-default hover:border-brand-accent/40 transition-colors duration-500">
                 <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
                 </span>
                 <span className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase group-hover:text-white transition-colors">
                   The New Standard of Growth
                 </span>
              </div>
           </RevealOnScroll>

           <RevealOnScroll delay={400} direction="scale">
             <h1 className="font-display font-bold text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.85] text-white mb-10 tracking-tighter select-none">
                <span className="block hover:translate-y-[-5px] transition-transform duration-500 ease-out">WE BUILD</span>
                <span className="block text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)] hover:[-webkit-text-stroke:1px_#ccff00] transition-colors duration-500">
                  LEGACIES
                </span>
                <span className="block text-brand-accent drop-shadow-[0_0_25px_rgba(204,255,0,0.3)]">
                  THAT WIN.
                </span>
             </h1>
           </RevealOnScroll>

           <RevealOnScroll delay={600} direction="up">
              <p className="text-xl md:text-2xl text-gray-400 mb-14 max-w-2xl mx-auto leading-relaxed font-light">
                 We are the <span className="text-white font-medium">anti-agency</span>. No fluff. No vanity metrics. <br className="hidden md:block" />
                 We design systems that turn traffic into <span className="text-white font-medium border-b border-brand-accent/50 pb-0.5">predictable revenue</span>.
              </p>
           </RevealOnScroll>

           <RevealOnScroll delay={800} direction="up" className="w-full">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  variant="primary" 
                  className="h-16 sm:h-20 px-12 sm:px-16 text-xl w-full sm:w-auto shadow-[0_0_30px_rgba(204,255,0,0.2)] hover:shadow-[0_0_50px_rgba(204,255,0,0.4)]"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Start Your Evolution
                </Button>
                <Button 
                  variant="outline" 
                  className="h-16 sm:h-20 px-12 sm:px-16 text-xl w-full sm:w-auto backdrop-blur-sm"
                  onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Work <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </div>
           </RevealOnScroll>

        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce">
         <div className="flex flex-col items-center gap-2 opacity-30 hover:opacity-100 transition-opacity cursor-pointer" onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}>
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">Discover</span>
            <ChevronDown className="w-5 h-5 text-brand-accent" />
         </div>
      </div>
    </section>
  );
};

export default Hero;