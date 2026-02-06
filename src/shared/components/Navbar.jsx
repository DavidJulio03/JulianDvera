import React, { useState, useEffect } from 'react';
import { Film, Menu, X, Send } from 'lucide-react';

const NAV_DATA = {
  logo: {
    name: "Julian D'Vera",
    dot: ".",
    icon: <Film size={20} className="text-white" />
  },
  links: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
  ],
  cta: {
    label: "Let's Talk",
    href: "#cta"
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logo, links, cta } = NAV_DATA;

  // Bloquear el scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav className="fixed top-0 w-full z-[100] transition-all duration-300 border-b border-white/5 bg-brand-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* LOGO - Ligeramente más grande y centrado verticalmente */}
        <div className="flex items-center gap-3 relative z-[110]">
          <div className="w-10 h-10 bg-brand-orange rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(212,81,19,0.4)]">
            {logo.icon}
          </div>
          <span className="text-2xl md:text-3xl font-black tracking-tighter text-white">
            {logo.name}<span className="text-brand-orange">{logo.dot}</span>
          </span>
        </div>

        {/* DESKTOP LINKS - Fuentes aumentadas y mejor espaciado */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex gap-10 text-sm lg:text-base font-bold uppercase tracking-[0.15em] text-white/70">
            {links.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="hover:text-brand-orange transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* DESKTOP CTA - Más robusto */}
          <a 
            href={cta.href}
            className="bg-white text-black px-8 py-3 rounded-2xl font-black text-base hover:bg-brand-orange hover:text-white transition-all duration-300 shadow-xl shadow-white/5"
          >
            {cta.label}
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button 
          className="md:hidden relative z-[110] p-2 text-white hover:text-brand-orange transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* MOBILE MENU - Rediseñado completamente */}
        <div className={`
          fixed inset-0 w-full h-screen bg-brand-dark transition-all duration-500 ease-in-out md:hidden
          ${isOpen ? 'translate-x-0 opacity-100 visible' : 'translate-x-full opacity-0 invisible'}
        `}>
          {/* Fondo decorativo en el menú móvil para que no se vea plano */}
          <div className="absolute top-[-10%] right-[-10%] w-[70vw] h-[70vw] bg-brand-orange/10 rounded-full blur-[100px]"></div>
          
          <div className="flex flex-col items-center justify-center h-full gap-10 px-6 relative z-10">
            {links.map((link, idx) => (
              <a 
                key={link.label} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`
                  text-5xl font-black uppercase italic tracking-tighter text-white transition-all duration-300
                  ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                `}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {link.label}
              </a>
            ))}
            
            <a 
              href={cta.href}
              className={`
                mt-6 w-full max-w-xs flex items-center justify-center gap-4 bg-brand-orange text-white py-5 rounded-2xl font-black text-2xl shadow-[0_10px_40px_rgba(212,81,19,0.3)]
                ${isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'} 
                transition-all duration-500 delay-400
              `}
            >
              <Send size={24} />
              {cta.label}
            </a>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;