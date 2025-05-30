import React from 'react';

// Placeholder for AnimatedLogo component - to be implemented in a future batch with actual animation
const AnimatedLogo = () => (
  <div className="w-36 h-36 bg-primary rounded-full flex items-center justify-center text-neutral-creamy font-poppins text-3xl shadow-lg select-none">
    hueneu
  </div>
);

// Placeholder for ScrollIndicator component - to be implemented in a future batch with more playful animation
const ScrollIndicator = () => (
  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-1 opacity-75 animate-bounce">
    <span className="text-xs font-poppins text-neutral-forest tracking-wider">SCROLL</span>
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="text-neutral-forest"
    >
      <path d="M12 5v14M19 12l-7 7-7-7"/>
    </svg>
  </div>
);

const Hero: React.FC = () => {
  return (
    <section 
      id="hero"
      className="min-h-screen w-full flex flex-col items-center justify-center relative text-center p-6 md:p-8 bg-gradient-to-br from-primary/70 via-secondary/80 to-neutral-creamy overflow-hidden"
    >
      {/* Optional: Subtle background pattern for depth can be added here */}
      {/* <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'url(/path-to-subtle-pattern.svg)', backgroundSize: 'cover'}}></div> */}

      <div className="mb-8 transform transition-all duration-1000 ease-in-out hover:scale-105 cursor-default">
        <AnimatedLogo />
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-bold text-neutral-forest mb-4 leading-tight max-w-xs sm:max-w-md md:max-w-2xl">
        Where stories find their aesthetic.
      </h1>

      <p className="text-base sm:text-lg md:text-xl font-inter text-neutral-forest/90 mb-12 max-w-sm sm:max-w-md md:max-w-lg">
        Designs that whisper loud stories.
      </p>

      <ScrollIndicator />
    </section>
  );
};

export default Hero;
