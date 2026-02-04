import React from 'react';
import { Film } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glass-panel border-b border-brand-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-orange rounded flex items-center justify-center shadow-[0_0_15px_var(--color-brand-orange)]">
            <Film size={18} className="text-white" />
          </div>
          <span>Julian D'Vera<span className="text-brand-orange">.</span></span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-brand-white/80">
          <a href="#work" className="hover:text-brand-amber transition-colors">Trabajos</a>
          <a href="#services" className="hover:text-brand-amber transition-colors">Servicios</a>
          <a href="#about" className="hover:text-brand-amber transition-colors">Sobre Mí</a>
        </div>
        <button className="bg-brand-white text-brand-black px-5 py-2 rounded-full font-semibold hover:bg-brand-amber hover:text-white transition-all duration-300 shadow-[0_0_0_transparent] hover:shadow-[0_0_15px_var(--color-brand-amber)]">
          Contactar
        </button>
      </div>
    </nav>
  );
};

export default Navbar;