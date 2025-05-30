import React from 'react';

const WhyHueneu: React.FC = () => {
  return (
    <section id="why-hueneu" className="py-16 md:py-24 bg-neutral-creamy text-neutral-forest">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-10 md:mb-12">
          Why <span className="text-primary">hue</span><span className="text-accent">neu</span>?
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <p className="text-2xl md:text-3xl font-body italic leading-relaxed md:leading-loose">
            “We don’t just design—<span className="font-semibold text-primary">we decode stories</span>.”
          </p>
          
          <p className="text-xl md:text-2xl font-body leading-relaxed md:leading-loose">
            In a world that often shouts, we believe in the power of the whisper. Hueneu is a sanctuary for ideas that seek not just visibility, but <span className="font-medium">true resonance</span>. We embrace the calm, the mystery, and the delicate balance between vibrant expression and grounding neutrality.
          </p>

          <p className="text-2xl md:text-3xl font-body italic leading-relaxed md:leading-loose">
            “Designs that speak <span className="font-semibold text-accent">quietly</span> but <span className="font-semibold text-accent">stay with you</span>.”
          </p>

          <p className="text-xl md:text-2xl font-body leading-relaxed md:leading-loose">
            Our approach is rooted in story-first intentionality. We listen deeply, explore with curiosity, and craft with a quiet confidence that allows your narrative to unfold authentically. With hueneu, you find more than a design studio; you find a partner dedicated to revealing the <span className="font-medium">soul of your story</span>.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhyHueneu;
