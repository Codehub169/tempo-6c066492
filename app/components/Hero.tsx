import React from 'react';
import AnimatedLogo from '@/app/components/AnimatedLogo';
import ScrollIndicator from '@/app/components/ScrollIndicator';

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

      <p className="text-base sm:text-lg md:text-xl font-sans text-neutral-forest/90 mb-12 max-w-sm sm:max-w-md md:max-w-lg">
        Designs that whisper loud stories.
      </p>

      <ScrollIndicator />
    </section>
  );
};

export default Hero;
