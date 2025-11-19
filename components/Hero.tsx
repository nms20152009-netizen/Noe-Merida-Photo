import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image - Tropical Sunset / Beach Vibe */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-slow-zoom"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&w=1920&q=80")' }} 
      >
        <div className="absolute inset-0 bg-brand-navy/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="border-t border-b border-white/30 py-2 px-6 mb-6 animate-fade-in-up">
            <p className="text-white/90 tracking-[0.3em] text-xs uppercase font-medium">
            Acapulco • Bodas • Destino
            </p>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-9xl text-white font-serif mb-6 animate-fade-in-up delay-100 drop-shadow-lg">
          Momentos<br/><span className="italic text-brand-gold">Eternos</span>
        </h1>
        
        <p className="text-brand-sand max-w-lg mx-auto text-lg font-light mb-10 animate-fade-in-up delay-200 leading-relaxed">
          Capturando la esencia del amor y la celebración en los escenarios más exclusivos del pacífico mexicano.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
            <button 
            onClick={() => scrollToSection('portfolio')}
            className="px-10 py-4 border border-white text-white hover:bg-white hover:text-brand-navy transition-all duration-300 uppercase tracking-[0.2em] text-xs font-bold focus:outline-none"
            >
            Ver Galería
            </button>
            <button 
            onClick={() => scrollToSection('concept')}
            className="px-10 py-4 bg-brand-gold text-white hover:bg-white hover:text-brand-gold transition-all duration-300 uppercase tracking-[0.2em] text-xs font-bold focus:outline-none shadow-lg"
            >
            Diseña tu Sesión
            </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;