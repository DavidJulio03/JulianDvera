import React from 'react';
import { Play, TrendingUp, Zap, MousePointer2 } from 'lucide-react';
import VideoPlayer from './VideoPlayer';

// UPDATED DATA WITH URLS
const HERO_DATA = {
  content: {
    badge: "Epic Anime Editor & AMV Creator",
    titleLine1: "Edits that hit",
    titleLine2: "different",
    description: "I create high-energy anime edits with perfect beat sync, smooth transitions, and professional VFX designed to capture attention instantly on TikTok, YouTube, and Reels.",
    primaryBtn: "Watch My Edits",
    primaryUrl: "https://www.youtube.com/@Buzssj",
    secondaryBtn: "Fiverr Gig",
    secondaryUrl: "https://www.fiverr.com/juliandvera",
    stats: [
      { label: "Total Views", value: "+10M" },
      { label: "Styles", value: "VFX/Raw" }
    ]
  },
  video: {
    thumbnail: "https://m.media-amazon.com/images/M/MV5BMjBlNTExMDAtMWZjZi00MDc5LWFkMjgtZDU0ZWQ5ODk3YWY5XkEyXkFqcGc@._V1_.jpg",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
    accent: "#D45113",
  }
};

const Hero = () => {
  const { content, video } = HERO_DATA;

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-32 pb-16 px-4 md:px-8 bg-transparent overflow-visible z-10">

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* 2. TEXT COLUMN */}
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

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-6 tracking-tight text-[var(--color-brand-white)] uppercase">
            {content.titleLine1} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-orange)] to-[var(--color-brand-amber)] drop-shadow-sm italic">
              {content.titleLine2}
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-[var(--color-brand-white)]/70 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
            {content.description}
          </p>

          {/* Action Buttons Wrapped in <a> */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 md:mb-12">
            <a 
              href={content.primaryUrl}
              className="h-14 md:h-16 px-8 md:px-10 bg-[var(--color-brand-orange)] text-white rounded-full font-bold text-base md:text-lg hover:shadow-[0_0_30px_-5px_var(--color-brand-orange)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Zap fill="currentColor" size={18} />
              {content.primaryBtn}
            </a>
            
            <a 
              href={content.secondaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 md:h-16 px-8 md:px-10 glass-panel rounded-full font-bold text-base md:text-lg hover:bg-[var(--color-brand-white)]/10 text-[var(--color-brand-white)] transition-all flex items-center justify-center border border-white/10"
            >
              {content.secondaryBtn}
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto lg:mx-0 border-t border-[var(--color-brand-white)]/10 pt-6">
            {content.stats.map((stat, i) => (
              <div key={i} className="text-left">
                <p className="text-2xl md:text-3xl font-bold text-[var(--color-brand-white)]">{stat.value}</p>
                <p className="text-xs md:text-sm text-[var(--color-brand-white)]/50 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. VIDEO COLUMN (Phone Mockup) */}
        <div className="lg:col-span-5 flex justify-center items-center relative mt-8 lg:mt-0">
          <div className="relative w-[280px] sm:w-[320px] lg:w-[360px]">
            <div className="relative p-2 bg-[var(--color-brand-white)]/10 backdrop-blur-2xl rounded-[3rem] border border-[var(--color-brand-white)]/20 shadow-2xl ring-1 ring-[var(--color-brand-white)]/5">
              
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[var(--color-brand-dark)] rounded-b-xl z-30 border-b border-[var(--color-brand-white)]/10 flex items-center justify-center">
                 <div className="w-12 h-1 bg-[var(--color-brand-dark-soft)] rounded-full border border-[var(--color-brand-white)]/5"></div>
              </div>

              <div className="relative z-10 rounded-[2.5rem] overflow-hidden bg-[var(--color-brand-black)] aspect-[9/16] shadow-inner">
                <VideoPlayer 
                    thumbnail={video.thumbnail}
                    videoUrl={video.url}
                    accentColor={video.accent}
                    showTimeline={false}
                    className="w-full h-full" 
                />
                <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-20"></div>
              </div>

              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-[var(--color-brand-white)]/10 via-transparent to-transparent rounded-[3rem] z-30 opacity-50"></div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] bg-[var(--color-brand-orange)] blur-[90px] opacity-20 -z-10 rounded-full"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;