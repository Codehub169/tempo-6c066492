import Hero from '@/app/components/Hero';
import HueneuStory from '@/app/components/HueneuStory';
// import WhatWeDo from '@/app/components/WhatWeDo'; // To be implemented in a future batch
// import WhyHueneu from '@/app/components/WhyHueneu'; // To be implemented in a future batch
// import ContactForm from '@/app/components/ContactForm'; // To be implemented in a future batch

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center overflow-x-hidden bg-neutral-creamy">
      {/* Hero Section: Establishes immediate brand identity and mood. */}
      <Hero />

      {/* The hueneu Story Section: Explains the meaning behind the name and core philosophy. */}
      <HueneuStory />

      {/* Placeholder for What We Do Section */}
      {/* <WhatWeDo /> */}
      
      {/* Placeholder for Why hueneu? Section */}
      {/* <WhyHueneu /> */}

      {/* Placeholder for Let's Work Together Section */}
      {/* <ContactForm /> */}
    </main>
  );
}
