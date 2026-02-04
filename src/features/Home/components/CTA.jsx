import React from 'react';
import { Mail } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative z-10 py-24 px-6">
      <div className="max-w-4xl mx-auto glass-card rounded-3xl p-12 text-center border border-brand-green-45/30 relative overflow-hidden">
        {/* Green Glow for success/contact vibe */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-brand-green-45 rounded-full blur-[80px] -mt-32"></div>
        
        <h2 className="text-4xl font-bold mb-6 relative z-10">¿Listo para empezar?</h2>
        <p className="text-brand-white/70 mb-8 max-w-lg mx-auto relative z-10">
          Hablemos sobre tu próximo proyecto. Estoy disponible para trabajo freelance y colaboraciones a largo plazo.
        </p>
        <a href="mailto:hola@videoeditor.com" className="inline-flex items-center gap-3 bg-brand-green hover:bg-brand-green-65 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_var(--color-brand-green-45)] relative z-10">
          <Mail size={20} />
          Enviar Mensaje
        </a>
      </div>
    </section>
  );
};

export default CTA;