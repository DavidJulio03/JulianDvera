import React from 'react';
import { Instagram, Twitter, Youtube, ExternalLink } from 'lucide-react';

const FOOTER_DATA = {
  copyright: "2026 Julian D'Vera",
  tagline: "High-Energy Anime Editing",
  socials: [
    { icon: <Instagram size={18} />, href: "https://instagram.com/tu_usuario", label: "Instagram" },
    { icon: <Twitter size={18} />, href: "https://twitter.com/tu_usuario", label: "Twitter" },
    { icon: <Youtube size={18} />, href: "https://www.youtube.com/@Buzssj", label: "YouTube" },
  ],
  links: [
    // { label: "Privacy Policy", href: "#" },
    // { label: "Terms of Service", href: "#" },
  ]
};

const Footer = () => {
  const { copyright, tagline, socials, links } = FOOTER_DATA;

  return (
    <footer className="relative z-10 pt-16 pb-8 border-t border-white/5 bg-transparent overflow-visible">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          {/* Lado Izquierdo: Branding Mini */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-black tracking-tighter text-white uppercase italic">
              Julian D'Vera<span className="text-brand-orange">.</span>
            </h2>
            <p className="text-white/40 text-xs font-medium uppercase tracking-[0.2em] mt-1">
              {tagline}
            </p>
          </div>

          {/* Centro: Redes Sociales */}
          <div className="flex items-center gap-6">
            {socials.map((social, idx) => (
              <a 
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-brand-orange transition-all duration-300 hover:-translate-y-1"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Lado Derecho: Fiverr Badge Sutil */}
          <a 
            href="https://www.fiverr.com/juliandvera" 
            target="_blank" 
            className="group flex items-center gap-2 text-xs font-bold text-white/60 hover:text-white transition-colors"
          >
            HIRE ME ON FIVERR
            <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Línea Final: Copyright y Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-[10px] uppercase tracking-widest text-white/20">
            &copy; {copyright} // All Rights Reserved
          </p>
          
          <div className="flex gap-6">
            {links.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-[10px] uppercase tracking-widest text-white/20 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Sutil glow de fondo para que no se vea cortado el final de la página */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent"></div>
    </footer>
  );
};

export default Footer;