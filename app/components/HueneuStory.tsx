import React from 'react';

const HueneuStory: React.FC = () => {
  return (
    <section 
      id="story"
      className="w-full py-16 md:py-24 px-6 sm:px-8 md:px-12 bg-secondary text-neutral-forest"
    >
      <div className="max-w-3xl mx-auto space-y-10 md:space-y-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-semibold text-neutral-forest text-center mb-10 md:mb-16">
          The <span className="text-primary">Hue</span><span className="text-accent font-bold">neu</span> Story
        </h2>

        <div className="space-y-6 font-inter text-base sm:text-lg leading-relaxed text-neutral-forest/90">
          <p className="text-center md:text-left">
            At hueneu, our name is our philosophy. <strong className="font-semibold text-neutral-forest">“Hue”</strong> embodies the vibrant bursts of creativity, the color, the lifeblood of every design. It’s the spark, the emotion, the unique fingerprint of your story.
          </p>
          <p className="text-center md:text-left">
            <strong className="font-semibold text-neutral-forest">“Neu”</strong> represents the grounding neutrality, the calm, intentional space where ideas take root and flourish. It’s the balance, the clarity, the sophisticated foundation that allows the hue to truly sing.
          </p>
          <p className="text-center md:text-left">
            Together, they form a harmonious dance – designs that are both quietly confident and boldly expressive, deeply thoughtful yet surprisingly playful.
          </p>
        </div>

        {/* "Who Knew?" Moment - Visual Pop-out */}
        {/* Future: This section is ideal for a scroll-triggered animation to make it 'pop' */}
        <div 
          className="my-12 md:my-16 p-6 sm:p-8 md:p-10 bg-neutral-creamy shadow-lg rounded-md transform transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl relative overflow-hidden border border-primary/30"
        >
          <div className="absolute top-0 left-0 w-12 h-12 md:w-16 md:h-16 bg-accent/70 opacity-50 rounded-br-full -translate-x-4 -translate-y-4"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-primary/60 opacity-40 rounded-tl-full translate-x-4 translate-y-4"></div>
          
          <h3 className="font-poppins text-2xl sm:text-3xl font-bold text-accent mb-4 text-center relative z-10">
            Who Knew?
          </h3>
          <p className="font-inter text-neutral-forest/90 text-center text-sm sm:text-base md:text-lg leading-relaxed max-w-md mx-auto relative z-10">
            It’s in this delightful intersection of calm and color, the expected and the surprising, that true magic happens. We believe in design moments that make you pause, smile, and think, “Who knew it could be like this?”
          </p>
        </div>

        <p className="font-inter text-base sm:text-lg text-center leading-relaxed text-neutral-forest/90 pt-4">
          We craft visual narratives that don't just tell your story, but allow others to truly feel it.
        </p>
      </div>
    </section>
  );
};

export default HueneuStory;
