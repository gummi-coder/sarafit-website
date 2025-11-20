import { useEffect, useRef } from "react";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";

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
    <div className="min-h-screen bg-background page-glow">
      <SEO
        title="6 vikna Byrjenda blueprint - SARAFIT"
        description="Fáðu blueprint með hjálplegum upplýsingum hvernig þú getur byrjað! Tips frá einkaþjálfara og raunverulegur árangur - engin diet og ekkert bull."
        url="https://sarafit.is/blueprint"
        keywords="blueprint, byrjenda blueprint, 6 vikna plan, SARAFIT, byrjenda tips"
        noindex={false}
      />
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
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
          <Card className="bg-card/60 backdrop-blur border border-white/10 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div 
                ref={formContainerRef}
                id="convertkit-form-container" 
                data-form="c842c19290"
                className="min-h-[200px]"
                style={{ pointerEvents: 'auto' }}
              >
                {/* ConvertKit form will be injected here by the script */}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Blueprint;

