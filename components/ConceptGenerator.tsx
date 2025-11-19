import React, { useState } from 'react';
import { ACAPULCO_LOCATIONS, LOCATION_PREVIEWS } from '../constants';
import { ConceptStyle } from '../types';
import { generateConceptImage } from '../services/geminiService';

const ConceptGenerator: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState(ACAPULCO_LOCATIONS[0].id);
  const [subject, setSubject] = useState("Novios Boda");
  const [style, setStyle] = useState(ConceptStyle.CINEMATIC);
  const [loading, setLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    setGeneratedImage(null);

    const locationName = ACAPULCO_LOCATIONS.find(l => l.id === selectedLocation)?.name || "Acapulco";

    try {
      const imageUrl = await generateConceptImage(locationName, subject, style);
      setGeneratedImage(imageUrl);
    } catch (err) {
      setError("Hubo un error generando tu concepto. Por favor intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="concept" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Controls */}
          <div className="lg:col-span-5">
            <div className="mb-8">
              <span className="text-brand-teal uppercase tracking-[0.2em] text-xs font-bold mb-3 block">Laboratorio Creativo IA</span>
              <h2 className="text-4xl font-serif text-brand-navy mb-4">Visualiza tu Sesión</h2>
              <div className="w-20 h-1 bg-brand-gold mb-6"></div>
              <p className="text-brand-slate leading-relaxed font-light">
                ¿La Quebrada al atardecer o Pie de la Cuesta? Usa nuestra herramienta exclusiva para pre-visualizar tu sesión de boda o XV años con estilo hiperrealista.
              </p>
            </div>

            <div className="space-y-6 bg-brand-sand p-8 border border-brand-navy/5 shadow-xl">
              <div>
                <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-3">Locación en Acapulco</label>
                <select 
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full p-4 border border-gray-200 text-brand-navy focus:ring-1 focus:ring-brand-gold focus:border-brand-gold outline-none bg-white font-serif"
                >
                  {ACAPULCO_LOCATIONS.map(loc => (
                    <option key={loc.id} value={loc.id}>{loc.name}</option>
                  ))}
                </select>
                <p className="text-xs text-brand-teal mt-2 italic">
                  ✦ {ACAPULCO_LOCATIONS.find(l => l.id === selectedLocation)?.description}
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-3">Protagonistas</label>
                <select 
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full p-4 border border-gray-200 text-brand-navy focus:ring-1 focus:ring-brand-gold focus:border-brand-gold outline-none bg-white font-serif"
                >
                  <option value="Pareja de Novios Boda Elegante">Pareja de Boda</option>
                  <option value="Quinceañera Vestido Ampuloso">Quinceañera (XV)</option>
                  <option value="Mujer Modelo Moda Playa">Editorial de Moda</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-3">Estilo Visual</label>
                <select 
                  value={style}
                  onChange={(e) => setStyle(e.target.value as ConceptStyle)}
                  className="w-full p-4 border border-gray-200 text-brand-navy focus:ring-1 focus:ring-brand-gold focus:border-brand-gold outline-none bg-white font-serif"
                >
                  {Object.values(ConceptStyle).map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleGenerate}
                disabled={loading}
                className={`w-full py-4 text-white font-bold tracking-[0.2em] uppercase transition-all shadow-lg ${
                  loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-brand-navy hover:bg-brand-gold hover:shadow-xl'
                }`}
              >
                {loading ? 'Revelando Imagen...' : 'Generar Concepto'}
              </button>
              
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
          </div>

          {/* Result Display */}
          <div className="lg:col-span-7">
            <div className="relative h-[700px] bg-brand-navy w-full flex items-center justify-center overflow-hidden shadow-2xl border-8 border-white">
              
              {/* Empty State */}
              {!generatedImage && !loading && (
                <div className="text-center p-10 opacity-40 z-10">
                  <div className="flex justify-center mb-6">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="4" />
                    </svg>
                  </div>
                  <p className="text-white font-serif text-xl">Tu concepto aparecerá aquí</p>
                </div>
              )}
              
              {/* Photographic Loading State with Composition Preview */}
              {loading && (
                <>
                  {/* Atmospheric Blurred Background Preview */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={LOCATION_PREVIEWS[selectedLocation] || LOCATION_PREVIEWS['pie_de_la_cuesta']} 
                      alt="Atmosphere Preview"
                      className="w-full h-full object-cover blur-2xl scale-110 opacity-30 animate-pulse"
                    />
                    <div className="absolute inset-0 bg-brand-navy/50 mix-blend-multiply"></div>
                  </div>

                  {/* Aperture Animation Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                    <div className="relative w-32 h-32 mb-8">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        {/* Outer Focus Ring */}
                        <circle 
                          cx="50" cy="50" r="48" 
                          stroke="#C5A065" strokeWidth="1" fill="none" 
                          strokeDasharray="10,5" 
                          className="animate-spin-slow opacity-50"
                        />
                        {/* Inner Detail Ring */}
                        <circle 
                          cx="50" cy="50" r="42" 
                          stroke="#fff" strokeWidth="0.5" fill="none" 
                          strokeDasharray="1,3" 
                          className="animate-spin-reverse-slow opacity-30"
                        />
                        
                        {/* Aperture Blades */}
                        <g className="animate-shutter-breathe origin-center">
                          {[0, 60, 120, 180, 240, 300].map((angle) => (
                            <path
                              key={angle}
                              d="M50 50 L50 10 L75 20 Z"
                              fill="#1B3B5A"
                              stroke="#C5A065"
                              strokeWidth="1"
                              transform={`rotate(${angle} 50 50)`}
                              className="opacity-90"
                            />
                          ))}
                        </g>

                        {/* Central Sensor Light */}
                        <circle cx="50" cy="50" r="8" fill="#C5A065" className="animate-pulse-glow" />
                      </svg>
                    </div>
                    
                    <p className="text-brand-gold animate-pulse tracking-[0.25em] text-xs uppercase font-bold mb-2 drop-shadow-lg">Revelando Negativo Digital</p>
                    <p className="text-brand-slate text-[10px] uppercase tracking-widest opacity-80">Ajustando Iluminación • {ACAPULCO_LOCATIONS.find(l => l.id === selectedLocation)?.name}</p>
                  </div>
                </>
              )}

              {generatedImage && (
                <img 
                  src={generatedImage} 
                  alt="Concepto Generado por IA" 
                  className="w-full h-full object-cover object-top animate-fade-in z-20"
                />
              )}
              
              {generatedImage && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 z-20">
                   <p className="text-brand-gold font-serif italic text-lg">Concepto Preliminar</p>
                   <p className="text-white text-xs opacity-80">Generado con IA para fines ilustrativos • Noé Mérida Photo</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConceptGenerator;