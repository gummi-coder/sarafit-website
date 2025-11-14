import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const Blueprint = () => {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Wait for container to be ready
    if (!formContainerRef.current) return;

    // Check if script already exists
    const existingScript = document.querySelector('script[data-uid="c842c19290"]');
    if (existingScript) {
      return;
    }

    // Function to find and move ConvertKit form
    const moveFormToContainer = () => {
      if (!formContainerRef.current) return;

      // Try multiple selectors to find the ConvertKit form
      const formSelectors = [
        '[data-form="c842c19290"]',
        '.kit-form',
        '[id*="convertkit"]',
        '[id*="ck_"]',
        '[class*="kit"]',
        'form[action*="convertkit"]',
        'form[action*="kit.com"]'
      ];

      for (const selector of formSelectors) {
        const form = document.querySelector(selector);
        if (form && formContainerRef.current && !formContainerRef.current.contains(form)) {
          // Check if form is not already in our container
          formContainerRef.current.innerHTML = '';
          // Move the form directly (not clone) to preserve functionality
          formContainerRef.current.appendChild(form as Node);
          return true;
        }
      }
      return false;
    };

    // Use MutationObserver to watch for ConvertKit form injection
    const observer = new MutationObserver(() => {
      moveFormToContainer();
    });

    // Start observing
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Also try immediately and after delays
    moveFormToContainer();
    setTimeout(moveFormToContainer, 500);
    setTimeout(moveFormToContainer, 1000);
    setTimeout(moveFormToContainer, 2000);

    // Load ConvertKit script
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-uid", "c842c19290");
    script.src = "https://sarafit.kit.com/c842c19290/index.js";
    
    // Add script to head for better compatibility
    const head = document.head || document.getElementsByTagName("head")[0];
    head.appendChild(script);

    // After script loads, try to move form
    script.onload = () => {
      setTimeout(moveFormToContainer, 500);
      setTimeout(moveFormToContainer, 1000);
      setTimeout(moveFormToContainer, 2000);
    };

    // Cleanup function
    return () => {
      observer.disconnect();
      const scriptToRemove = document.querySelector('script[data-uid="c842c19290"]');
      if (scriptToRemove && scriptToRemove.parentNode) {
        scriptToRemove.parentNode.removeChild(scriptToRemove);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background page-glow">
      <Helmet>
        <script
          async
          data-uid="c842c19290"
          src="https://sarafit.kit.com/c842c19290/index.js"
        />
      </Helmet>
      <SEO
        title="6 vikna Byrjenda blueprint - SARAFIT"
        description="Fáðu blueprint með hjálplegum upplýsingum hvernig þú getur byrjað! Tips frá einkaþjálfara og raunverulegur árangur - engin diet og ekkert bull."
        url="https://www.sarafit.is/blueprint"
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

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-start gap-3 p-6 bg-card/40 backdrop-blur-sm border border-white/10 rounded-xl">
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-foreground/90 font-sans">
                6 vikna plan sem hjálpar þér að byrja
              </p>
            </div>
            <div className="flex items-start gap-3 p-6 bg-card/40 backdrop-blur-sm border border-white/10 rounded-xl">
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-foreground/90 font-sans">
                Byrjenda tips and tricks til að koma þér af stað
              </p>
            </div>
            <div className="flex items-start gap-3 p-6 bg-card/40 backdrop-blur-sm border border-white/10 rounded-xl">
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-foreground/90 font-sans">
                Leiðbeiningar hvernig þú byggir þitt fyrsta prógram
              </p>
            </div>
          </div>

          {/* ConvertKit Signup Form */}
          <Card className="bg-card/60 backdrop-blur border border-white/10 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div 
                ref={formContainerRef}
                id="convertkit-form-container" 
                data-form="c842c19290"
                className="min-h-[200px] flex items-center justify-center"
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

