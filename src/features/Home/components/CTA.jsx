import React from 'react';
import { ArrowUpRight, Zap } from 'lucide-react';

const CTA = () => {
  return (
    <section id='cta' className="relative z-10 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative glass-card rounded-[2.5rem] p-10 md:p-16 border border-white/5 bg-transparentoverflow-hidden">
          
          {/* Sutil glow ambiental interno */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-orange/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-start">
            {/* Tag minimalista */}
            <div className="flex items-center gap-2 mb-8 opacity-60">
              <Zap size={14} className="text-brand-orange fill-brand-orange" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">Let's create magic</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Your next <span className="text-brand-orange">viral edit</span> <br className="hidden md:block" /> starts here.
            </h2>

            <p className="text-white/40 text-base md:text-lg max-w-xl mb-10 leading-relaxed">
              Ready for a stunning AMV or a high-energy short? Reach out and let's discuss your vision before getting started.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full">
              <a 
                href="https://www.fiverr.com/juliandvera?source=gig_page" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-8 bg-white text-black pl-8 pr-2 py-2 rounded-full font-bold text-lg transition-all hover:bg-brand-orange hover:text-white"
              >
                ORDER ON FIVERR
                <div className="bg-black text-white p-3 rounded-full group-hover:bg-white group-hover:text-black transition-colors">
                  <ArrowUpRight size={20} />
                </div>
              </a>
              
              <span className="text-[10px] font-mono text-white/20 tracking-widest uppercase">
                // @juliandvera
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;