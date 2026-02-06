import React from 'react';
import { Target, Zap, LayoutDashboard, HeartHandshake, ArrowRight, ShieldCheck, Rocket } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-dark-900 relative overflow-hidden border-t border-white/5">
      {/* Animated Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-[-10%] w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[80px] animate-blob"></div>
          <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[80px] animate-blob animation-delay-2000"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Headlines & Content */}
            <div className="relative">
                <RevealOnScroll>
                    <span className="text-brand-accent font-bold tracking-widest text-sm uppercase mb-4 block text-glow-sm">Why Us?</span>
                    <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl mb-8 text-white leading-[0.95] tracking-tight">
                        Why smart <br/>
                        brands <br/>
                        choose <span className="text-brand-accent inline-block relative text-glow-sm">
                            MarqGrowth.
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg border-l-2 border-white/10 pl-6">
                        We bridge the gap between "creative agency" and "consultancy." 
                        No fluff, just engineered growth systems designed to scale your revenue.
                    </p>
                    
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4 group">
                             <div className="w-10 h-10 rounded-full bg-brand-accent flex items-center justify-center text-black shadow-[0_0_15px_rgba(204,255,0,0.5)] group-hover:scale-110 transition-transform">
                                <ShieldCheck size={20} />
                             </div>
                             <div>
                                <h4 className="text-white font-bold text-lg">Risk-Free Guarantee</h4>
                                <p className="text-sm text-gray-500">We don't win unless you do.</p>
                             </div>
                        </div>
                        <div className="flex items-center gap-4 group">
                             <div className="w-10 h-10 rounded-full bg-dark-800 border border-brand-accent/30 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-black transition-all">
                                <Rocket size={20} />
                             </div>
                             <div>
                                <h4 className="text-white font-bold text-lg">Rapid Deployment</h4>
                                <p className="text-sm text-gray-500">Strategies live in days, not months.</p>
                             </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>

            {/* Right Column: Floating Cards (Staggered Animation) - DESKTOP */}
            <div className="relative h-full min-h-[500px] hidden md:block">
                {/* Column 1 - Floats Slow */}
                <div className="absolute top-0 left-0 w-[48%] space-y-6 animate-float-slow">
                     <Card 
                        icon={Target}
                        title="Outcome Obsessed"
                        desc="We don't report on vanity metrics. We report on revenue, retention, and real growth."
                     />
                     <Card 
                        icon={LayoutDashboard}
                        title="Radical Clarity"
                        desc="No black boxes. You get 24/7 access to live dashboards showing exactly where every dollar goes."
                        variant="dark"
                     />
                </div>

                {/* Column 2 - Floats Slower & Reversed - Offset visually */}
                <div className="absolute top-12 right-0 w-[48%] space-y-6 animate-float-slower">
                     <Card 
                        icon={Zap}
                        title="Velocity Mode"
                        desc="We move fast. Strategies launched in days, optimized in hours. We adapt as the market shifts."
                        variant="dark"
                     />
                     <Card 
                        icon={HeartHandshake}
                        title="Extension of You"
                        desc="We’re not just a vendor. We work in your Slack, join your standups, and fight for your brand."
                     />
                </div>
            </div>

             {/* Mobile Cards (Grid 2x2 with animation) */}
             <div className="md:hidden grid grid-cols-2 gap-4 mt-8">
                <div className="animate-float-slow" style={{ animationDelay: '0s' }}>
                     <Card 
                        icon={Target}
                        title="Outcomes"
                        desc="We report on revenue & growth."
                     />
                </div>
                <div className="animate-float-slower" style={{ animationDelay: '1s' }}>
                     <Card 
                        icon={LayoutDashboard}
                        title="Clarity"
                        desc="24/7 access to live dashboards."
                        variant="dark"
                     />
                </div>
                <div className="animate-float-slow" style={{ animationDelay: '2s' }}>
                     <Card 
                        icon={Zap}
                        title="Velocity"
                        desc="Strategies launched in days."
                        variant="dark"
                     />
                </div>
                <div className="animate-float-slower" style={{ animationDelay: '3s' }}>
                     <Card 
                        icon={HeartHandshake}
                        title="Partners"
                        desc="We fight for your brand."
                     />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

// Internal Card Component for Cleaner Code
const Card: React.FC<{ icon: React.ElementType, title: string, desc: string, variant?: 'default' | 'dark' }> = ({ icon: Icon, title, desc, variant = 'default' }) => (
    <div className={`
        group p-5 md:p-6 rounded-3xl border backdrop-blur-md transition-all duration-500 hover:scale-[1.02] cursor-default h-full
        ${variant === 'default' 
            ? 'bg-gradient-to-br from-white/10 to-white/5 border-white/10 hover:border-brand-accent/50 hover:shadow-[0_0_30px_rgba(204,255,0,0.15)]' 
            : 'bg-dark-950/80 border-white/5 hover:border-white/20'}
    `}>
        <div className="flex justify-between items-start mb-3 md:mb-4">
            <div className={`
                w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center transition-colors duration-300
                ${variant === 'default' ? 'bg-brand-accent text-black' : 'bg-white/5 text-brand-accent'}
            `}>
                <Icon size={20} className="md:w-6 md:h-6" />
            </div>
            {/* Arrow hidden on mobile to save space, visible on md+ */}
            <ArrowRight className="hidden md:block w-5 h-5 text-gray-500 group-hover:text-brand-accent -rotate-45 group-hover:rotate-0 transition-all duration-300" />
        </div>
        <h3 className="text-white font-display font-bold text-lg md:text-xl mb-1 md:mb-2">{title}</h3>
        <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{desc}</p>
    </div>
);

export default WhyChooseUs;