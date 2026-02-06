import React from 'react';
import { ABOUT_STATS } from '../constants';
import Button from './Button';
import RevealOnScroll from './RevealOnScroll';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image Side */}
          <RevealOnScroll className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-accent to-blue-500 rounded-2xl opacity-20 blur-lg"></div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop" 
                alt="MarqGrowth Strategy Team" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                  <div className="flex items-center gap-4">
                     <img 
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop" 
                        alt="Marwane Benmchich" 
                        className="w-12 h-12 rounded-full border-2 border-brand-accent object-cover" 
                     />
                     <div>
                       <h4 className="font-bold text-white">Marwane Benmchich</h4>
                       <p className="text-xs text-brand-accent">CEO & Founder</p>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Content Side */}
          <div>
            <RevealOnScroll delay={100}>
              <span className="text-brand-accent font-medium tracking-wider text-sm uppercase mb-2 block">About MarqGrowth</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-6 leading-tight">
                Smart digital solutions for <span className="text-white relative after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-full after:h-[0.2em] after:bg-brand-accent/40 after:-z-10">business growth</span>
              </h2>
            </RevealOnScroll>
            
            <RevealOnScroll delay={200}>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                We're an agile, expert creative team passionate about helping brands grow. 
                At MarqGrowth, creativity, strategy, and technology combine to deliver results that matter.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={300}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10">
                {ABOUT_STATS.map((stat, idx) => (
                  <div key={idx} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-brand-accent/50 transition-colors group">
                    <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">{stat.value}</h3>
                    <p className="text-sm font-semibold text-gray-300 mb-1">{stat.label}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{stat.description}</p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={400}>
              <Button variant="outline">Discover Our Story</Button>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;