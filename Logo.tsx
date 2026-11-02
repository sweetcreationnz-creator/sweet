import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'plum';
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'plum',
  size = 'md'
}) => {
  const [imageError, setImageError] = useState(false);

  // Height mappings for the official banner logo (3:1 aspect ratio)
  const sizeClasses = {
    sm: 'h-10 max-w-[180px]',
    md: 'h-[58px] sm:h-[70px] lg:h-[78px] max-w-[340px]',
    lg: 'h-20 sm:h-24 max-w-[380px]',
    xl: 'h-28 sm:h-36 max-w-[480px]'
  };

  const logoSrc = '/assets/aistudio/Sweet_Creations_Luxury_Cake_Logo_a07647de.png';

  // If on a dark background (such as the footer), provide a refined luxury backing plaque
  if (variant === 'dark') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <div className="bg-[#FFF9F6] px-3.5 py-1.5 rounded-lg shadow-sm border border-[#C69A59]/40 hover:border-[#C69A59] transition-all">
          <img
            src={logoSrc}
            alt="Sweet Creations — Cakes, Desserts, Mehendi & Party Hire"
            className={`${sizeClasses[size]} w-auto object-contain select-none`}
            onError={() => setImageError(true)}
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    );
  }

  if (imageError) {
    // Graceful fallback in case of any loading issue
    return (
      <div className={`flex items-center gap-2 select-none ${className}`}>
        <span className="font-heading text-xl font-bold uppercase tracking-widest text-[#4B142D]">
          Sweet Creations
        </span>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="Sweet Creations — Cakes, Desserts, Mehendi & Party Hire"
        className={`${sizeClasses[size]} w-auto object-contain transition-transform duration-300 hover:scale-[1.02]`}
        onError={() => setImageError(true)}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
