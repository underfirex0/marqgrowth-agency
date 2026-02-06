import React from 'react';
import { PRICING } from '../constants';
import { Check, Star } from 'lucide-react';
import Button from './Button';
import RevealOnScroll from './RevealOnScroll';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 lg:py-32 bg-dark-900 relative overflow-hidden">
       {/* Background Elements */}
       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold-glow/5 rounded-full blur-[120px] pointer-events-none"></div>

       <div className="container mx-auto px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 relative z-10">
        <RevealOnScroll className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-brand-accent font-bold tracking-widest text-sm uppercase mb-4 block text-glow-sm">Investment</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6 text-white">Transparent <br/><span className="text-gray-500">Pricing.</span></h2>
          <p className="text-gray-300 text-lg">Choose the perfect plan to accelerate your digital growth.</p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {PRICING.map((tier, idx) => (
            <RevealOnScroll key={idx} delay={idx * 150} className="h-full">
              <div 
                className={`h-full rounded-[2.5rem] p-8 border transition-all duration-500 relative group flex flex-col ${
                  tier.highlighted 
                    ? 'bg-dark-900/80 backdrop-blur-md border-brand-accent shadow-[0_0_40px_-10px_rgba(204,255,0,0.15)] scale-105 z-10' 
                    : 'bg-dark-950/50 border-white/5 hover:border-white/20 hover:bg-dark-800'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-dark-900 text-xs font-bold px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(204,255,0,0.5)] flex items-center gap-1 uppercase tracking-wider">
                    <Star className="w-3 h-3 fill-current" /> Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className={`text-xl font-bold mb-2 font-display ${tier.highlighted ? 'text-brand-accent text-glow-sm' : 'text-white'}`}>{tier.name}</h3>
                  <p className="text-gray-400 text-sm min-h-[40px] leading-relaxed">{tier.description}</p>
                </div>
                
                <div className="flex items-baseline gap-1 mb-8">
                  <span className={`text-5xl font-bold font-display ${tier.highlighted ? 'text-white' : 'text-gray-200'}`}>{tier.price}</span>
                  {tier.period && <span className="text-gray-500 font-medium">{tier.period}</span>}
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${tier.highlighted ? 'bg-brand-accent text-black shadow-[0_0_10px_rgba(204,255,0,0.3)]' : 'bg-white/10 text-gray-400'}`}>
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant={tier.highlighted ? 'primary' : 'outline'} 
                  className={`w-full ${tier.highlighted ? 'shadow-[0_0_20px_rgba(163,230,53,0.3)]' : ''}`}
                >
                  Choose {tier.name}
                </Button>
              </div>
            </RevealOnScroll>
          ))}
        </div>
       </div>
    </section>
  );
};

export default Pricing;