import { useEffect, useRef } from "react";
import SEO from "@/components/SEO";

const Exercises = () => {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!formContainerRef.current) return;

    // Check if script already exists to prevent duplicates
    const formId = "87e60b0204";
    const existingScript = document.querySelector(`script[data-uid="${formId}"]`);
    if (existingScript) return;

    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-uid", formId);
    script.src = `https://sarafit.kit.com/${formId}/index.js`;
    formContainerRef.current.appendChild(script);

    return () => {
      // Cleanup script if component unmounts and script is still attached to the container
      if (formContainerRef.current && script.parentNode === formContainerRef.current) {
        formContainerRef.current.removeChild(script);
      }
      
      // Also check if it was appended elsewhere or if the global script persists
      const scriptToRemove = document.querySelector(`script[data-uid="${formId}"]`);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background w-full overflow-x-hidden relative">
      <div className="absolute inset-0 pointer-events-none page-glow"></div>
      
      <SEO
        title="Mínar uppáhalds æfingar - SARAFIT"
        description="Fáðu lista yfir þær æfingar sem hafa gefið mér og mínum kúnnum mestan árangur. Engin tæki, bara árangur."
        url="https://sarafit.is/aefingar"
        keywords="æfingar, uppáhalds æfingar, rassæfingar, styrktaræfingar, SARAFIT"
      />

      <div className="relative z-10 flex items-center justify-center min-h-screen py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-black mb-6 font-display leading-tight">
              <span className="text-foreground">Mínar uppáhalds</span>{" "}
              <span className="text-primary">æfingar</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto leading-relaxed font-sans mb-8">
              Hér hef ég tekið saman þær æfingar sem hafa reynst mér best í gegnum árin. Skráðu þig hér að neðan til að fá PDF skjalið sent beint í pósthólfið.
            </p>
          </div>

          {/* ConvertKit Form Container */}
          <div 
            ref={formContainerRef}
            className="min-h-[200px] max-w-lg mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Exercises;
