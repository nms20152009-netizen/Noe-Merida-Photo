import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-navy text-white py-20 border-t border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="md:col-span-2">
            <div className="mb-6">
                <Logo variant="light" />
            </div>
            <p className="leading-relaxed text-brand-slate text-sm max-w-sm font-light">
              Especialista en capturar la elegancia atemporal y la emoción auténtica. 
              Radicado en Acapulco, disponible para viajar a cualquier destino de playa en México.
            </p>
          </div>
          
          <div>
            <h4 className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold mb-8">Especialidades</h4>
            <ul className="space-y-4 text-sm font-light text-brand-sand">
              <li className="hover:text-brand-gold transition-colors cursor-default">Bodas de Destino</li>
              <li className="hover:text-brand-gold transition-colors cursor-default">XV Años Cinematic</li>
              <li className="hover:text-brand-gold transition-colors cursor-default">Sesiones de Compromiso</li>
              <li className="hover:text-brand-gold transition-colors cursor-default">Fotografía Editorial</li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold mb-8">Contacto</h4>
            <ul className="space-y-4 text-sm font-light text-brand-sand">
              <li>Acapulco, Gro.</li>
              <li className="text-lg font-serif">+52 (744) 532-0228</li>
              <li>nms20152009@gmail.com</li>
              <li className="pt-6 flex gap-6">
                <span className="text-brand-gold hover:text-white transition-colors uppercase text-xs tracking-widest cursor-pointer">Instagram</span>
                <span className="text-brand-gold hover:text-white transition-colors uppercase text-xs tracking-widest cursor-pointer">Facebook</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-slate">
          <p>&copy; {new Date().getFullYear()} Noé Mérida Photography.</p>
          <p className="mt-2 md:mt-0">Diseñado con Estilo & IA</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;