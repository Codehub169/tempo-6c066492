import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 text-neutral-forest animate-bounce-slow cursor-pointer group">
      <span className="text-xs font-body opacity-75 group-hover:opacity-100 transition-opacity duration-300">
        Scroll
      </span>
      <ChevronDown size={24} className="opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default ScrollIndicator;
