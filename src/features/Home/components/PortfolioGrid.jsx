import React, { useState } from 'react';
import { TrendingUp, ArrowUpRight } from 'lucide-react';
import VideoPlayer from './VideoPlayer';

const PortfolioGrid = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  // Datos (Mismos datos)
  const projects = [
    { 
      id: 1, 
      title: "Nike - Run Fast", 
      category: "commercial", 
      views: "1.2M",
      thumbnail: "https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/671b96ee-7787-4e5e-84a7-01c8f5471684/nike%C2%A0mind.jpg",
      videoUrl: "https://www.youtube.com/embed/ah89O_xqP4Y",
      accent: "#D45113" 
    },
    { 
      id: 2, 
      title: "Festival Vibes 2024", 
      category: "lifestyle", 
      views: "850K",
      thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800&h=1400",
      videoUrl: "https://www.youtube.com/embed/ah89O_xqP4Y",
      accent: "#F9A03F" 
    },
    { 
      id: 3, 
      title: "Tech Review: AI Tools", 
      category: "educational", 
      views: "2.5M",
      thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800&h=1400",
      videoUrl: "https://www.youtube.com/embed/ah89O_xqP4Y",
      accent: "#4D8B31" 
    },
    { 
      id: 4, 
      title: "Urban Fashion Edit", 
      category: "commercial", 
      views: "500K",
      thumbnail: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800&h=1400",
      videoUrl: "https://www.youtube.com/embed/ah89O_xqP4Y",
      accent: "#D45113" 
    },
  ];

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'commercial', label: 'Marcas' },
    { id: 'lifestyle', label: 'Lifestyle' },
    { id: 'educational', label: 'Edu' }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section className="relative py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-brand-dark)] overflow-hidden">
      
      {/* CSS inyectado para ocultar scrollbars globalmente en este componente */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* FONDO AMBIENTAL */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[var(--color-brand-green-45)] rounded-full mix-blend-screen filter blur-[100px] opacity-10"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[40vw] h-[40vw] bg-[var(--color-brand-orange-45)] rounded-full mix-blend-screen filter blur-[100px] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER Y CATEGORÍAS (WRAP) */}
        <div className="flex flex-col gap-8 mb-12 md:mb-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter uppercase italic leading-[0.9]">
              Resultados <span className="text-[var(--color-brand-orange)]">Virales</span>
            </h2>
            <p className="text-white/70 text-lg md:text-xl font-light max-w-md">
              Contenido de alto impacto diseñado para dominar el scroll.
            </p>
          </div>
          
          {/* Categorías con Flex Wrap */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2 md:px-7 md:py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeTab === cat.id 
                  ? 'bg-[var(--color-brand-orange)] text-white shadow-[0_10px_20px_rgba(212,81,19,0.3)] scale-105' 
                  : 'bg-white/5 text-white/50 border border-white/10 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* GRID DE PROYECTOS (No-scrollbar en móvil) */}
        <div className="
          flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-5 -mx-4 px-4 no-scrollbar
          sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 sm:mx-0 sm:px-0 sm:overflow-visible
        ">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative flex-shrink-0 snap-center w-[85vw] sm:w-full"
            >
              <div className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden bg-neutral-900 border border-white/5 transition-all duration-500 lg:group-hover:-translate-y-3">
                
                {/* Overlay superior */}
                <div className="absolute top-5 left-5 right-5 z-30 flex justify-between items-center">
                  <span className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-white">
                    {project.category}
                  </span>
                  <div className="hidden lg:flex opacity-0 group-hover:opacity-100 transition-all p-2 bg-white rounded-full text-black transform translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                <div className="absolute inset-0 z-10">
                  <VideoPlayer 
                    thumbnail={project.thumbnail}
                    videoUrl={project.videoUrl}
                    accentColor={project.accent}
                    showTimeline={false}
                    className="w-full h-full"                   
                  />
                </div>

                {/* Footer Info */}
                <div className="absolute inset-x-0 bottom-0 z-20 p-6 pt-20 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <div className="flex items-center gap-2 mb-2 text-[var(--color-brand-orange)]">
                    <TrendingUp size={16} strokeWidth={3} />
                    <span className="text-sm font-black tracking-tighter uppercase">{project.views} Views</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-none tracking-tight">
                    {project.title}
                  </h3>
                  
                  <div className="mt-4 h-[2px] w-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-[var(--color-brand-orange)] w-0 lg:group-hover:w-full transition-all duration-700"></div>
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