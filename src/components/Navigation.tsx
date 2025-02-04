import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
}

const Navigation = ({ currentSlide, totalSlides, onPrevious, onNext }: NavigationProps) => {
  return (
    <div className="absolute bottom-8 left-0 right-0 flex justify-between items-center px-8">
      <button
        onClick={onPrevious}
        disabled={currentSlide === 0}
        className="p-2 rounded-full bg-presentation-accent text-white 
                 hover:bg-presentation-primary transition-colors duration-200
                 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <div className="flex space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentSlide ? 'bg-presentation-accent' : 'bg-presentation-secondary opacity-50'
            }`}
          />
        ))}
      </div>
      
      <button
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className="p-2 rounded-full bg-presentation-accent text-white 
                 hover:bg-presentation-primary transition-colors duration-200
                 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Navigation;