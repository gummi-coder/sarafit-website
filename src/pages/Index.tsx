import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Approach from "@/components/Approach";
import Method from "@/components/Method";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { scrollToSignupSection } from "@/lib/scroll-to-signup";

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignupClick = () => {
    scrollToSignupSection(navigate, location.pathname);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Approach />
      <Method />
      <Testimonials />
      <Pricing />
      
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 font-display">
            <span className="text-foreground">Ertu tilbúin að taka</span>{" "}
            <span className="text-primary">fyrsta skrefið?</span>
          </h2>
          
          <p className="text-lg text-foreground/80 mb-12 leading-relaxed font-sans">
            Vertu partur af fleiri en hundrað ánægðum sterkum konum sem hafa skráð sig í þjálfun hjá SARAFIT.
          </p>

          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-black text-xl px-16 py-8 rounded-full shadow-lg hover:shadow-primary/50 transition-all hover:scale-105"
            onClick={handleSignupClick}
          >
            Byrjaðu í dag
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
