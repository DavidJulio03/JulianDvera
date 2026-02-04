// src/components/VideoPlayer.jsx
import React, { useState } from 'react';
import { Play, Loader2 } from 'lucide-react';

const VideoPlayer = ({ 
  thumbnail, 
  videoUrl, 
  className = "", 
  accentColor = "var(--color-brand-orange)",
  showTimeline = true 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Función para manejar la URL del video
  const getVideoContent = () => {
    // Si es YouTube
    if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
      let embedUrl = videoUrl;
      // Convertir link normal a embed si es necesario
      if (videoUrl.includes('watch?v=')) {
        const videoId = videoUrl.split('watch?v=')[1].split('&')[0];
        embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
      } else if (videoUrl.includes('youtu.be/')) {
        const videoId = videoUrl.split('youtu.be/')[1];
        embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
      }
      
      return (
        <iframe 
          src={embedUrl}
          title="Video player"
          className="w-full h-full absolute inset-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => setIsLoading(false)}
        ></iframe>
      );
    } 
    
    // Si es un archivo directo (.mp4, etc)
    return (
      <video 
        src={videoUrl} 
        className="w-full h-full object-cover" 
        controls 
        autoPlay
        onLoadedData={() => setIsLoading(false)}
      >
        Tu navegador no soporta el tag de video.
      </video>
    );
  };

  const handlePlay = () => {
    setIsLoading(true);
    setIsPlaying(true);
  };

  return (
    <div className={`glass-card rounded-2xl overflow-hidden relative group border border-brand-white/10 ${className}`}>
      
      {/* --- ESTADO: REPRODUCIENDO --- */}
      {isPlaying ? (
        <div className="w-full h-full relative bg-black">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <Loader2 className="animate-spin text-brand-white/50" size={32} />
            </div>
          )}
          {getVideoContent()}
        </div>
      ) : (
        /* --- ESTADO: PORTADA (Cover) --- */
        <>
          {/* Overlay de interacción */}
          <div className="absolute inset-0 bg-brand-black/40 flex items-center justify-center group-hover:bg-brand-black/20 transition-all z-10">
            <button 
              onClick={handlePlay}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-brand-white/10 backdrop-blur-md flex items-center justify-center border border-brand-white/20 transition-transform cursor-pointer"
              style={{ boxShadow: `0 0 20px ${accentColor}44` }}
              aria-label="Reproducir video"
            >
              <Play size={32} className="ml-1 text-brand-white" fill="currentColor" />
            </button>
          </div>

          {/* Miniatura */}
          <img 
            src={thumbnail} 
            alt="Video thumbnail" 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          />

          {/* Timeline decorativa (Solo visible si NO se está reproduciendo) */}
          {showTimeline && (
            <div className="absolute bottom-4 left-4 right-4 h-1.5 glass-panel rounded-full overflow-hidden z-20 pointer-events-none">
              <div 
                className="h-full w-1/3 animate-pulse" 
                style={{ backgroundColor: accentColor }}
              ></div>
            </div>
          )}

          {/* Efecto de escaneo sutil */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-brand-white/5 to-transparent -translate-y-full transition-transform duration-[2s]"></div>
        </>
      )}
    </div>
  );
};

export default VideoPlayer;