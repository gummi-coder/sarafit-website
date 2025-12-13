import { useEffect, useRef } from "react";
import SEO from "@/components/SEO";

const Blueprint = () => {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!formContainerRef.current) return;

    // Check if script already exists
    const existingScript = document.querySelector('script[data-uid="c842c19290"]');
    if (existingScript) {
      return;
    }

    // Load ConvertKit script - similar to Footer component
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-uid", "c842c19290");
    script.src = "https://sarafit.kit.com/c842c19290/index.js";
    formContainerRef.current.appendChild(script);

    // Cleanup function
    return () => {
      const scriptToRemove = document.querySelector('script[data-uid="c842c19290"]');
      if (scriptToRemove && scriptToRemove.parentNode) {
        scriptToRemove.parentNode.removeChild(scriptToRemove);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background w-full overflow-x-hidden">
      <div className="absolute inset-0 pointer-events-none page-glow"></div>
      <div className="relative z-10">
      <SEO
        title="6 vikna Byrjenda blueprint - SARAFIT"
        description="Fáðu blueprint með hjálplegum upplýsingum hvernig þú getur byrjað! Tips frá einkaþjálfara og raunverulegur árangur - engin diet og ekkert bull."
        url="https://sarafit.is/blueprint"
        keywords="blueprint, byrjenda blueprint, 6 vikna plan, SARAFIT, byrjenda tips"
        noindex={false}
      />
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 overflow-x-hidden">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-black mb-6 font-display leading-tight">
              <span className="text-foreground">6 vikna</span>{" "}
              <span className="text-primary">Byrjenda blueprint</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto leading-relaxed font-sans">
              Þú færð sent blueprint með hjálplegum upplýsingum hvernig þú getur byrjað! Tips frá einkaþjálfara og raunverulegur árangur - engin diet og ekkert bull.
            </p>
          </div>

          {/* ConvertKit Signup Form */}
              <div 
                ref={formContainerRef}
                id="convertkit-form-container" 
                data-form="c842c19290"
            className="min-h-[200px]"
            style={{ pointerEvents: 'auto' }}
              >
                {/* ConvertKit form will be injected here by the script */}
              </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Blueprint;

