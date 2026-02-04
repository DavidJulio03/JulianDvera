import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const PortfolioGrid = () => {
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    { id: 1, title: "Neon City Documentary", category: "documentary", image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800" },
    { id: 2, title: "Brand Commercial Nike", category: "commercial", image: "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?auto=format&fit=crop&q=80&w=800" },
    { id: 3, title: "Music Video - Echoes", category: "music", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800" },
    { id: 4, title: "Tech Review 2025", category: "commercial", image: "https://images.unsplash.com/photo-1535016120720-40c6874c3b13?auto=format&fit=crop&q=80&w=800" },
  ];

  // Filtrado simple
  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="work" className="relative z-10 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Proyectos Destacados</h2>
            <p className="text-brand-white/60">Una selección de mis mejores cortes.</p>
          </div>
          
          <div className="flex gap-2 p-1 glass-panel rounded-lg">
            {['all', 'documentary', 'commercial', 'music'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === tab 
                  ? 'bg-brand-orange text-white shadow-lg' 
                  : 'text-brand-white/60 hover:text-white'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative rounded-xl overflow-hidden cursor-pointer aspect-video border border-brand-white/10">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark-60/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="text-brand-amber text-xs font-bold uppercase tracking-wider mb-2 block">
                  {project.category}
                </span>
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-white group-hover:text-brand-orange transition-colors">
                    {project.title}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-brand-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                    <ChevronRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;