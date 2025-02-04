import React, { useState, useEffect } from 'react';
import Slide from '@/components/Slide';
import SlideContent from '@/components/SlideContent';
import Navigation from '@/components/Navigation';

const slides = [
  {
    question: "Hvilke administrative oppgaver i deres kommune tar mest tid og ressurser i dag?"
  },
  {
    heading: "Kommunal Kunnskapsagent - En mulig løsning",
    paragraph: "Se for deg Kommunal Kunnskapsagent som en AI-assistent for saksbehandlere. Det er som å ha en ekstra kollega som kan hjelpe til med å:",
    listItems: [
      "Automatisere rutineoppgaver, som f.eks. å fylle ut standardiserte skjemaer eller generere utkast til svar.",
      "Hente frem relevant informasjon raskt, som lovverk, forskrifter og tidligere sakspapirer.",
      "Effektivisere saksbehandlingen, ved å foreslå neste steg og identifisere potensielle flaskehalser."
    ]
  },
  {
    paragraph: "Med Kommunal Kunnskapsagent kan kommunens ansatte jobbe sammen med AI, direkte i deres eksisterende systemer, for å:",
    listItems: [
      "Spare tid og ressurser i administrative prosesser.",
      "Redusere byråkrati og øke effektiviteten.",
      "Forbedre tjenestene til innbyggerne gjennom raskere og mer konsistent saksbehandling."
    ]
  },
  {
    paragraph: "Tenk på Kunnskapsagenten som en ergonomisk sykkel for hjernen. Den hjelper ekspertene i kommunen å jobbe smartere, ikke hardere.",
    image: "images/brain_bicycle3.png"
  },
  {
    paragraph: "Kunnskapsagenten er ikke:",
    listItems: [
      "Særlig smart eller pålitelig uten brukerens hjelp.",
      "Ansvarlig for beslutninger eller endringer den foreslår."
    ],
    paragraph2: "Kunnskapsagenten er:",
    listItems2: [
      "Et godt hjelpemiddel for å raskt bygge forståelse.",
      "Et godt hjelpemiddel for å automatisere oppgaver som brukeren allerede forstår."
    ]
  },
  {
    heading: "Hoved-grensesnitt for vanlige brukere: Norsk språk",
    paragraph: "Brukere kan stille spørsmål, gi kommandoer og få svar på en naturlig måte, enten muntlig eller skriftlig."
  },
  {
    heading: "Grafisk Grensesnitt",
    image: "images/browser_interface2.png"
  },
  {
    paragraph: "For avanserte brukere finnes det spesialkommandoer som gir mer kontroll, slik som",
    buttons: ["hjelp", "ja/nei", "fortsett", "angre"]
  },
  {
    question: "Hvilke tanker har dere om dette? Ser dere potensiale for en slik løsning i deres kommune, for eksempel innen byggesak, sosiale tjenester eller innbyggerdialog?"
  }
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevious = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(slides.length - 1, prev + 1));
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        handlePrevious();
      } else if (event.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-presentation-light">
      {slides.map((slide, index) => (
        <Slide key={index} isActive={currentSlide === index}>
          <SlideContent {...slide} />
        </Slide>
      ))}

      <Navigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </div>
  );
};

export default Index;
