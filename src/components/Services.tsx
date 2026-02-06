import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import Button from './Button';
import RevealOnScroll from './RevealOnScroll';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-dark-800 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <RevealOnScroll className="max-w-2xl">
            <span className="text-brand-accent font-bold tracking-widest text-sm uppercase mb-3 block text-glow-sm">Our Expertise</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight text-white">
              Capabilities designed <br/> for <span className="text-brand-accent text-glow-sm">maximum impact.</span>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <Button variant="outline">Start Your Project</Button>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {SERVICES.map((service, index) => {
            const isFirstRow = index < 3;
            const gridClass = isFirstRow ? 'lg:col-span-2' : 'lg:col-span-3';

            return (
              <RevealOnScroll key={index} delay={index * 100} className={`h-full ${gridClass}`}>
                <div 
                  className="group p-8 rounded-[2rem] bg-dark-900/60 backdrop-blur-md border border-white/5 hover:border-brand-accent/30 relative overflow-hidden h-full flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
                >
                  {/* Subtle Background Noise/Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Hover Glow Bloom */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-accent/20 rounded-full blur-[80px] group-hover:bg-brand-accent/30 transition-colors duration-500 pointer-events-none"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon Header */}
                    <div className="flex justify-between items-start mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-black transition-all duration-500 shadow-lg relative">
                             {/* Small dot accent */}
                             <div className="absolute top-0 right-0 w-2 h-2 bg-brand-accent rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <service.icon className="w-7 h-7 text-gray-300 group-hover:text-black transition-colors" />
                        </div>
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                           <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-black transition-colors" />
                        </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">{service.title}</h3>
                    <p className="text-gray-400 mb-8 leading-relaxed text-sm lg:text-base border-b border-white/5 pb-6">
                      {service.description}
                    </p>
                    
                    {/* Smooth Minimalist List Layout */}
                    <div className="mt-auto flex flex-col gap-1.5">
                      {service.features.map((feature, idx) => (
                        <div 
                            key={idx} 
                            className="flex items-center gap-3 px-2 py-1.5 -mx-2 rounded-lg hover:bg-white/5 transition-all duration-300 group/item cursor-default"
                        >
                          {/* Soft glowing bullet */}
                          <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover/item:bg-brand-accent group-hover/item:shadow-[0_0_8px_rgba(204,255,0,0.8)] transition-all duration-300"></div>
                          
                          <span className="text-sm font-medium text-gray-400 group-hover/item:text-white transition-colors">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;