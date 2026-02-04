const HERO_DATA = {
  content: {
    badge: "Especialista en Short-Form Content",
    titleLine1: "Retención que",
    titleLine2: "se vuelve viral",
    description: "Ayudo a creadores y marcas a dominar el algoritmo con edición dinámica, subtítulos magnéticos y storytelling de alto impacto para Reels y TikTok.",
    primaryBtn: "Ver Reels",
    secondaryBtn: "Tarifas",
  },
  video: {
    thumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800",
    url: "https://www.youtube.com/embed/ah89O_xqP4Y",
    accent: "#D45113",
  }
};

import React from 'react';
import { Play, ArrowUpRight, BarChart3 } from 'lucide-react';
import VideoPlayer from './VideoPlayer';

const Hero = () => {
  const { content, video } = HERO_DATA;

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 pb-12 px-4 md:px-8 overflow-hidden">
      
      {/* Contenedor Principal */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* COLUMNA TEXTO (Adaptada) */}
      <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-8xl font-black leading-none mb-6 tracking-tighter uppercase">
            {content.titleLine1} <br />
            <span className="text-brand-orange italic drop-shadow-sm">
              {content.titleLine2}
            </span>
          </h1>
          
          <p className="text-xl text-brand-white/70 mb-10 leading-relaxed font-light">
            {content.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="h-16 px-10 bg-brand-orange text-white rounded-full font-bold text-lg hover:brightness-110 transition-all flex items-center justify-center gap-3">
              {content.primaryBtn}
              <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
            </button>
            <button className="h-16 px-10 glass-panel rounded-full font-bold text-lg border border-brand-white/10 hover:bg-brand-white/5 transition-all">
              {content.secondaryBtn}
            </button>
          </div>
        </div>
      </div>

        {/* COLUMNA VIDEO (Reel-Style con Seguridad de Interfaz) */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center items-center px-4">
          <div className="relative w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[380px]">
            
            {/* Contenedor Principal de Cristal - Integrado a la página */}
            <div className="relative p-2 sm:p-3 bg-brand-white/5 backdrop-blur-xl rounded-[3rem] border border-brand-white/10 overflow-hidden shadow-2xl">
              
              {/* Notch / Muesca superior - Rediseñada para no tapar el video de YouTube */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 sm:w-28 h-5 sm:h-7 bg-brand-dark rounded-b-2xl z-30 border-x border-b border-brand-white/5 flex items-center justify-center">
                <div className="w-8 sm:w-10 h-1 bg-brand-white/10 rounded-full"></div>
              </div>

              {/* Contenedor de Video con Padding de Seguridad */}
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden bg-brand-black aspect-[9/16]">
                <VideoPlayer 
                  thumbnail={video.thumbnail}
                  videoUrl={video.url}
                  accentColor={video.accent}
                  showTimeline={false}
                  className="w-full h-full" 
                />
              </div>

              {/* Brillo de Cristal - Puesto por debajo de los controles (Z-0) */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-brand-white/5 via-transparent to-brand-white/10 z-0"></div>
            </div>

            {/* Glow ambiental (Sutil detrás del cristal) */}
            <div 
              className="absolute -inset-4 blur-[120px] rounded-full -z-10 opacity-30"
              style={{ backgroundColor: video.accent }}
            ></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;