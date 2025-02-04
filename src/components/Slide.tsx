import React from 'react';
import { cn } from "@/lib/utils";

interface SlideProps {
  isActive: boolean;
  children: React.ReactNode;
}

const Slide = ({ isActive, children }: SlideProps) => {
  return (
    <div
      className={cn(
        "absolute top-0 left-0 w-full h-full transition-opacity duration-500",
        "flex flex-col items-center justify-center p-8",
        "bg-presentation-light text-presentation-primary",
        isActive ? "opacity-100 z-10" : "opacity-0 z-0"
      )}
    >
      <div className="max-w-4xl w-full animate-fade-in">
        {children}
      </div>
    </div>
  );
};

export default Slide;