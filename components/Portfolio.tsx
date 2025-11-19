import React, { useState, useMemo } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { PortfolioItem } from '../types';

// Sub-component to handle individual image loading/errors
const PortfolioCard: React.FC<{ item: PortfolioItem }> = ({ item }) => {
  const [imgSrc, setImgSrc] = useState(item.imageUrl);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      // Fallback to a nice reliable Unsplash image if local file is missing
      setImgSrc('https://images.unsplash.com/photo-1511285560982-1356c11d4606?auto=format&fit=crop&w=800&q=80');
    }
  };

  return (
    <div className="group relative overflow-hidden bg-brand-navy shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer rounded-sm h-full">
      {/* Image Container */}
      <div className="overflow-hidden h-[500px] w-full relative bg-gray-200">
        <img 
          src={imgSrc} 
          alt={item.title} 
          onError={handleError}
          className="w-full h-full object-cover transform transition-all duration-700 ease-out 
            group-hover:scale-110 
            group-hover:blur-[3px] 
            group-hover:opacity-85"
        />
        
        {/* Color Overlay */}
        <div className="absolute inset-0 bg-brand-navy/50 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      {/* Text Content - Centered on Hover */}
      <div className="absolute inset-0 flex flex-col justify-center items-center p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
        <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 text-center">
          <span className="text-brand-gold text-xs uppercase tracking-[0.3em] block mb-4 font-bold drop-shadow-md">{item.category}</span>
          <h3 className="text-white text-3xl font-serif italic mb-6 drop-shadow-lg leading-tight">{item.title}</h3>
          <div className="w-12 h-0.5 bg-white/80 mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100"></div>
        </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  // Dynamically calculate which categories actually have items
  const availableCategories = useMemo(() => {
    const cats = new Set(PORTFOLIO_ITEMS.map(item => item.category));
    return ['All', ...Array.from(cats)];
  }, []);

  const filteredItems = filter === 'All' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-brand-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold mb-3 block">Nuestra Obra</span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-navy mb-6">Portafolio Selecto</h2>
          <p className="text-brand-slate max-w-2xl mx-auto font-light">
            Una colección curada de historias de amor, celebraciones de vida y la belleza natural de Acapulco.
          </p>
        </div>

        {/* Filters - Only showing categories that exist */}
        {availableCategories.length > 2 && (
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {availableCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-xs uppercase tracking-[0.15em] pb-2 border-b transition-all duration-300 ${
                  filter === cat 
                    ? 'border-brand-gold text-brand-navy font-bold' 
                    : 'border-transparent text-brand-slate hover:text-brand-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;