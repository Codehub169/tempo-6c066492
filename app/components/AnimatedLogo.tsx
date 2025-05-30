import React from 'react';

interface AnimatedLogoProps {
  className?: string;
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ className = '' }) => {
  const logoText = "hueneu";

  return (
    <div 
      className={`font-poppins text-6xl md:text-7xl lg:text-8xl font-bold text-neutral-forest select-none ${className}`}
      aria-label="hueneu logo"
    >
      {logoText.split('').map((char, index) => (
        <span 
          key={index} 
          className="inline-block opacity-0 animate-fadeInUp"
          style={{ animationDelay: `${index * 0.1 + 0.5}s` }} // Staggered animation delay
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default AnimatedLogo;
