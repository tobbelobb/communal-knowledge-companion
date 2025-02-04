import React from 'react';

interface SlideContentProps {
  heading?: string;
  question?: string;
  paragraph?: string;
  listItems?: string[];
  image?: string;
  buttons?: string[];
}

const SlideContent = ({ heading, question, paragraph, listItems, image, buttons }: SlideContentProps) => {
  return (
    <div className="space-y-6">
      {heading && (
        <h2 className="text-3xl font-bold text-presentation-primary mb-6">
          {heading}
        </h2>
      )}

      {question && (
        <div className="text-2xl font-semibold text-presentation-primary mb-6 italic">
          {question}
        </div>
      )}

      {paragraph && (
        <p className="text-xl text-presentation-secondary whitespace-pre-wrap">
          {paragraph}
        </p>
      )}

      {listItems && (
        <ul className="list-disc list-inside space-y-3 text-lg text-presentation-secondary">
          {listItems.map((item, index) => (
            <li key={index} className="ml-4">{item}</li>
          ))}
        </ul>
      )}

      {image && (
        <div className="flex justify-center my-8">
           <img
             src={`images/${image}`}
             alt="Slide illustration" className="max-w-full h-auto rounded-lg shadow-lg" />
        </div>
      )}

      {buttons && (
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          {buttons.map((button, index) => (
            <button
              key={index}
              className="px-6 py-2 bg-presentation-accent text-white rounded-lg
                       hover:bg-presentation-primary transition-colors duration-200"
            >
              {button}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SlideContent;
