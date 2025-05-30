import React from 'react';

interface AnimatedLogoProps {
  className?: string;
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ className = '' }) => {
  const logoText = "hueneu";

  return (
    <div 
      className={`font-heading text-6xl md:text-7xl lg:text-8xl font-bold text-neutral-forest select-none ${className}`}
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

// Add these keyframes and class to your globals.css or a relevant global CSS file:
/*
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation-name: fadeInUp;
  animation-duration: 0.5s; 
  animation-fill-mode: forwards;
}
*/

export default AnimatedLogo;
