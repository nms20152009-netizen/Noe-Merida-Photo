import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = '' }) => {
  const fillColor = variant === 'light' ? '#FFFFFF' : '#1B3B5A'; // White or Brand Navy
  const accentColor = variant === 'light' ? '#FFFFFF' : '#C5A065'; // White or Brand Gold

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="relative w-10 h-10 flex-shrink-0">
        <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Abstract Lens/Shutter/Sun Composition */}
          <circle cx="50" cy="50" r="46" stroke={fillColor} strokeWidth="1.5" />
          
          {/* Ocean Waves integrated into bottom half */}
          <path d="M15 60 C 30 50, 40 70, 50 60 S 70 50, 85 60" stroke={accentColor} strokeWidth="2" strokeLinecap="round" />
          <path d="M25 75 C 35 65, 45 80, 50 75 S 65 65, 75 75" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
          
          {/* Sun rays / Shutter focus at top */}
          <path d="M50 15 L50 25" stroke={fillColor} strokeWidth="2" strokeLinecap="round" />
          <path d="M85 50 L75 50" stroke={fillColor} strokeWidth="2" strokeLinecap="round" />
          <path d="M15 50 L25 50" stroke={fillColor} strokeWidth="2" strokeLinecap="round" />
          
          {/* Golden Hour Focus Point */}
          <circle cx="50" cy="40" r="4" fill={accentColor} />
        </svg>
      </div>
      
      <div className="flex flex-col">
        <span className={`font-serif text-lg leading-none tracking-wider font-bold`} style={{ color: fillColor }}>
          NOÉ MÉRIDA
        </span>
        <span className={`font-sans text-[9px] uppercase tracking-[0.35em] mt-1 opacity-90`} style={{ color: accentColor }}>
          Photography
        </span>
      </div>
    </div>
  );
};

export default Logo;