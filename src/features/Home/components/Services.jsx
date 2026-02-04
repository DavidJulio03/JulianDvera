import React from 'react';
import { MonitorPlay, Zap, Layers } from 'lucide-react';

const Services = () => {
  const servicesList = [
    { icon: <MonitorPlay className="text-brand-orange" />, title: "Edición Offline/Online", desc: "Cortes precisos, ritmo narrativo y finalización para broadcast o web." },
    { icon: <Zap className="text-brand-amber" />, title: "Motion Graphics", desc: "Títulos animados, efectos visuales y composiciones dinámicas." },
    { icon: <Layers className="text-brand-green" />, title: "Color Grading", desc: "Corrección de color y creación de looks cinematográficos." }
  ];

  return (
    <section id="services" className="relative z-10 py-20 bg-brand-dark/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mis Servicios</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-orange to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesList.map((service, idx) => (
            <div key={idx} className="glass-card p-8 rounded-xl flex flex-col gap-4 group">
              <div className="w-12 h-12 rounded-lg bg-brand-dark-soft flex items-center justify-center border border-brand-white/5 group-hover:border-brand-orange-45 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-brand-white/60 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;