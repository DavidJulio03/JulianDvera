import React from 'react';
import { Film, Zap, Music, Sparkles } from 'lucide-react';

const Services = () => {
  const servicesList = [
    { 
      icon: <Music className="text-brand-orange" />, 
      title: "Beat Synchronization", 
      desc: "Perfectly timed cuts and transitions synced to the track's rhythm for maximum impact and energy." 
    },
    { 
      icon: <Zap className="text-brand-amber" />, 
      title: "Dynamic Flow & Transitions", 
      desc: "High-speed, smooth transitions and professional cuts that keep your viewers hooked from start to finish." 
    },
    { 
      icon: <Sparkles className="text-brand-green" />, 
      title: "VFX & Color Grading", 
      desc: "Custom color enhancement and impactful visual effects to give your AMV a cinematic and unique look." 
    }
  ];

  return (
    <section id="services" className="relative py-20 bg-transparent overflow-visible z-0">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Epic Anime Services</h2>
          <p className="text-brand-white/70 mb-6">Bringing your vision to life through high-energy editing and visual storytelling.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-orange to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesList.map((service, idx) => (
            <div key={idx} className="glass-card p-8 rounded-xl flex flex-col gap-4 group hover:bg-white/5 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-brand-dark-soft flex items-center justify-center border border-brand-white/5 group-hover:border-brand-orange/50 transition-colors shadow-lg shadow-brand-orange/10">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold group-hover:text-brand-orange transition-colors">{service.title}</h3>
              <p className="text-brand-white/60 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm italic text-brand-white/40">
            * Optimized for TikTok, YouTube Shorts, Instagram Reels, and classic AMVs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;