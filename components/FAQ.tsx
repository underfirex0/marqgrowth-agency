import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-dark-950 relative">
      <div className="container mx-auto px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 max-w-5xl">
         <RevealOnScroll className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
               <span className="text-brand-accent font-bold tracking-widest text-sm uppercase mb-4 block">FAQ</span>
               <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">Common <br/> Questions</h2>
               <p className="text-gray-400 text-lg mb-8">
                 Everything you need to know about working with us.
               </p>
            </div>

            <div className="md:col-span-8 space-y-4">
              {FAQS.map((faq, idx) => (
                <div 
                  key={idx} 
                  className={`border-b border-white/10 transition-colors duration-300 ${openIndex === idx ? 'border-brand-accent/50' : ''}`}
                >
                  <button 
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full flex items-center justify-between py-6 text-left group"
                  >
                    <span className={`font-display font-medium text-xl transition-colors duration-300 ${openIndex === idx ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                      {faq.question}
                    </span>
                    <span className={`ml-4 flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${
                      openIndex === idx 
                        ? 'bg-brand-accent border-brand-accent text-black rotate-180' 
                        : 'border-white/20 text-gray-400 group-hover:border-white group-hover:text-white'
                    }`}>
                      {openIndex === idx ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  <div 
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      openIndex === idx ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-gray-400 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
         </RevealOnScroll>
      </div>
    </section>
  );
};

export default FAQ;