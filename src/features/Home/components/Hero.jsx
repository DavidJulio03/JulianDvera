import React from 'react';
import { Play, TrendingUp, Zap, MousePointer2 } from 'lucide-react';
import VideoPlayer from './VideoPlayer';

// Datos (Mantenemos tu estructura)
const HERO_DATA = {
  content: {
    badge: "Especialista en Short-Form Content",
    titleLine1: "Retención que",
    titleLine2: "se vuelve viral",
    description: "Ayudo a creadores y marcas a dominar el algoritmo con edición dinámica, subtítulos magnéticos y storytelling de alto impacto.",
    primaryBtn: "Ver Portfolio",
    secondaryBtn: "Tarifas",
    stats: [
      { label: "Vistas generadas", value: "+50M" },
      { label: "Retención media", value: "45s" }
    ]
  },
  video: {
    thumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800",
    url: "https://www.youtube.com/embed/ah89O_xqP4Y",
    accent: "#D45113",
  }
};

const Hero = () => {
  const { content, video } = HERO_DATA;

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-32 pb-16 px-4 md:px-8 overflow-hidden bg-[var(--color-brand-dark)]">
      
      {/* 1. FONDO AMBIENTAL (Glows & Blobs) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blob Naranja - Top Izquierda */}
        <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-[var(--color-brand-orange-45)] rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob"></div>
        {/* Blob Ambar - Bottom Derecha */}
        <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-[var(--color-brand-amber-45)] rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-2000"></div>
        {/* Grid sutil */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* 2. COLUMNA TEXTO */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left pt-6 lg:pt-0">
          
          {/* Badge Glass */}
          <div className="flex justify-center lg:justify-start mb-6">
            <span className="glass-panel px-4 py-2 rounded-full text-xs md:text-sm font-medium tracking-wide text-[var(--color-brand-amber)] border border-[var(--color-brand-amber-45)] flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-brand-amber)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-brand-amber)]"></span>
              </span>
              {content.badge}
            </span>
          </div>

          {/* Título Principal Responsive */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-6 tracking-tight text-[var(--color-brand-white)]">
            {content.titleLine1} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-orange)] to-[var(--color-brand-amber)] drop-shadow-sm italic">
              {content.titleLine2}
            </span>
          </h1>
          
          {/* Descripción */}
          <p className="text-base sm:text-lg md:text-xl text-[var(--color-brand-white)]/70 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
            {content.description}
          </p>

          {/* Botones y CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 md:mb-12">
            <button className="h-14 md:h-16 px-8 md:px-10 bg-[var(--color-brand-orange)] text-white rounded-full font-bold text-base md:text-lg hover:shadow-[0_0_30px_-5px_var(--color-brand-orange)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              <Play fill="currentColor" size={18} />
              {content.primaryBtn}
            </button>
            <button className="h-14 md:h-16 px-8 md:px-10 glass-panel rounded-full font-bold text-base md:text-lg hover:bg-[var(--color-brand-white)]/10 text-[var(--color-brand-white)] transition-all flex items-center justify-center">
              {content.secondaryBtn}
            </button>
          </div>

          {/* Mini Stats (Social Proof) */}
          <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto lg:mx-0 border-t border-[var(--color-brand-white)]/10 pt-6">
            {content.stats.map((stat, i) => (
              <div key={i} className="text-left">
                <p className="text-2xl md:text-3xl font-bold text-[var(--color-brand-white)]">{stat.value}</p>
                <p className="text-xs md:text-sm text-[var(--color-brand-white)]/50 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. COLUMNA VIDEO (Phone Mockup) */}
        <div className="lg:col-span-5 flex justify-center items-center relative mt-8 lg:mt-0">
          <div className="relative w-[280px] sm:w-[320px] lg:w-[360px]">

            {/* MARCO DEL TELÉFONO */}
            <div className="relative p-2 bg-[var(--color-brand-white)]/10 backdrop-blur-2xl rounded-[3rem] border border-[var(--color-brand-white)]/20 shadow-2xl ring-1 ring-[var(--color-brand-white)]/5">
              
              {/* Notch Dinámico */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[var(--color-brand-dark)] rounded-b-xl z-30 border-b border-[var(--color-brand-white)]/10 flex items-center justify-center">
                 <div className="w-12 h-1 bg-[var(--color-brand-dark-soft)] rounded-full border border-[var(--color-brand-white)]/5"></div>
              </div>

              {/* Contenedor Video */}
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden bg-[var(--color-brand-black)] aspect-[9/16] shadow-inner">
                <VideoPlayer 
                    thumbnail={video.thumbnail}
                    videoUrl={video.url}
                    accentColor={video.accent}
                    showTimeline={false}
                    className="w-full h-full" 
                />
                
                {/* Overlay Gradiente inferior para legibilidad si hay texto sobre video */}
                <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-20"></div>
              </div>

              {/* Reflejo Glass sobre la pantalla */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-[var(--color-brand-white)]/10 via-transparent to-transparent rounded-[3rem] z-30 opacity-50"></div>
            </div>

            {/* Glow Detrás del Teléfono */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] bg-[var(--color-brand-orange)] blur-[90px] opacity-20 -z-10 rounded-full"></div>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;