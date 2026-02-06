import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Button from './Button';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-dark-800 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Info Side */}
          <div>
            <span className="text-brand-accent font-medium tracking-wider text-sm uppercase mb-2 block">Contact Us</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">Let's Talk About <br/> Your <span className="text-brand-accent">Next Project</span></h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              We're here to help you grow. Get in touch with our start building a winning digital strategy today.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-accent group-hover:text-dark-900 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Call Us</h4>
                  <p className="text-gray-400 text-sm hover:text-brand-accent transition-colors cursor-pointer">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-accent group-hover:text-dark-900 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email Us</h4>
                  <p className="text-gray-400 text-sm hover:text-brand-accent transition-colors cursor-pointer">hello@vortex.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-accent group-hover:text-dark-900 transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Visit Us</h4>
                  <p className="text-gray-400 text-sm">22 Creative Avenue, Suite 12B</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-brand-accent/20 to-transparent border border-brand-accent/20">
               <p className="text-white font-display font-medium text-lg">"The best way to predict the future is to create it."</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="relative">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-3xl transform rotate-1"></div>
            <div className="relative bg-dark-900 p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Email</label>
                    <input type="email" placeholder="john@example.com" className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Subject</label>
                  <select className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all appearance-none">
                    <option>General Inquiry</option>
                    <option>Project Proposal</option>
                    <option>Career</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Message</label>
                  <textarea rows={4} placeholder="Tell us about your project..." className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all resize-none"></textarea>
                </div>

                <Button className="w-full justify-center group">
                  Send Message <Send className="ml-2 w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;