import React from 'react';

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  iconPlaceholder: string; // Placeholder for icon/line visual
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: 'Branding',
    description: 'Crafting identities that resonate and endure.',
    iconPlaceholder: 'B'
  },
  {
    id: 2,
    title: 'Packaging',
    description: 'Packaging, but make it poetic.',
    iconPlaceholder: 'P'
  },
  {
    id: 3,
    title: 'Social Media',
    description: 'Curating digital narratives that connect.',
    iconPlaceholder: 'S'
  },
  {
    id: 4,
    title: 'Stationery',
    description: 'Tangible touches that tell your story.',
    iconPlaceholder: 'T'
  },
  {
    id: 5,
    title: 'Coffee Table Books',
    description: 'Designing keepsakes, chapter by chapter.',
    iconPlaceholder: 'C'
  },
  {
    id: 6,
    title: 'Creative Projects',
    description: 'Exploring unique visions, with intention.',
    iconPlaceholder: 'X'
  }
];

const WhatWeDo: React.FC = () => {
  return (
    <section id="what-we-do" className="py-16 md:py-24 bg-primary text-neutral-forest">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
          What We Do
        </h2>
        <p className="text-lg md:text-xl font-body text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          We weave artistry and intention into every detail, transforming ideas into evocative experiences.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-neutral-creamy p-6 rounded-soft shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1"
            >
              {/* Icon Placeholder: Replace with actual SVG icons or visual elements later */}
              <div className="w-12 h-12 bg-accent text-neutral-creamy rounded-full flex items-center justify-center font-heading text-2xl font-bold mb-4">
                {service.iconPlaceholder}
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-2 text-neutral-forest">
                {service.title}
              </h3>
              <p className="font-body text-neutral-forest leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
