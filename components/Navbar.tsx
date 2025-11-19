import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Reusable elegant arrow icon
  const ArrowIcon = () => (
    <svg 
      className="w-4 h-4 ml-1 animate-slide-right text-brand-gold" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        <button 
          onClick={() => scrollToSection('top')} 
          className="hover:opacity-90 transition-opacity focus:outline-none"
        >
          <Logo variant={scrolled ? 'dark' : 'light'} />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 items-center">
          <button onClick={() => scrollToSection('portfolio')} className={`font-medium text-xs uppercase tracking-[0.15em] hover:text-brand-gold transition-colors focus:outline-none ${scrolled ? 'text-brand-navy' : 'text-white'}`}>Portafolio</button>
          
          <button 
            onClick={() => scrollToSection('concept')} 
            className={`font-medium text-xs uppercase tracking-[0.15em] hover:text-brand-gold transition-colors focus:outline-none flex items-center group ${scrolled ? 'text-brand-navy' : 'text-white'}`}
          >
            Tu Sesión IA
            <ArrowIcon />
          </button>
          
          <button onClick={() => scrollToSection('contact')} className={`font-medium text-xs uppercase tracking-[0.15em] hover:text-brand-gold transition-colors focus:outline-none ${scrolled ? 'text-brand-navy' : 'text-white'}`}>Contacto</button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`text-2xl focus:outline-none ${scrolled ? 'text-brand-navy' : 'text-white'}`}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-navy/95 backdrop-blur-md py-6 flex flex-col items-center space-y-6 shadow-xl animate-fade-in-up">
           <button onClick={() => scrollToSection('portfolio')} className="text-white font-medium text-sm uppercase tracking-[0.15em] hover:text-brand-gold">Portafolio</button>
           
           <button onClick={() => scrollToSection('concept')} className="text-white font-medium text-sm uppercase tracking-[0.15em] hover:text-brand-gold flex items-center">
             Tu Sesión IA
             <ArrowIcon />
           </button>
           
           <button onClick={() => scrollToSection('contact')} className="text-white font-medium text-sm uppercase tracking-[0.15em] hover:text-brand-gold">Contacto</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;