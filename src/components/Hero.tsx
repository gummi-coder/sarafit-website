import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import { scrollToSignupSection } from "@/lib/scroll-to-signup";

const Hero = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignupClick = () => {
    scrollToSignupSection(navigate, location.pathname);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-32">
      <div className="container mx-auto max-w-6xl text-center">
        {/* Star Rating */}
        <div className="flex items-center justify-center gap-2 mb-12 animate-fade-in">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-star text-star drop-shadow-sm" />
          ))}
          <span className="text-foreground/90 ml-3 text-lg font-medium">
            Með yfir <span className="font-bold text-primary">100+</span> meðmæli
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 animate-fade-in font-display">
          <span className="text-primary">SJÁÐU LOKSINS ALVÖRU ÁRANGUR</span>{" "}
          <span className="text-foreground">SEM ENDIST</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-foreground/80 max-w-4xl mx-auto mb-12 animate-fade-in leading-relaxed font-sans">
          Tónum líkaman og byggjum upp sjálfstraust í ræktinni. Engin diet og engar skyndilausnir - bara árangur sem endist til lengri tíma.
        </p>

        {/* Video Section */}
        <div className="max-w-3xl mx-auto mb-8 animate-fade-in">
          <div className="relative aspect-video rounded-2xl overflow-hidden border-4 border-primary/10 shadow-2xl">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/tyIsKQaaBOM"
              title="SARAFIT video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        {/* CTA Button */}
        <Button 
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-black text-lg px-12 py-7 rounded-full animate-fade-in shadow-lg hover:shadow-primary/50 transition-all hover:scale-105"
          onClick={handleSignupClick}
        >
          SKRÁ MIG NÚNA!
        </Button>
      </div>
    </section>
  );
};

export default Hero;
