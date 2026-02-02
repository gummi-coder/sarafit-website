import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="relative bg-background min-h-screen w-full overflow-x-hidden">
      <div className="absolute inset-0 pointer-events-none page-glow"></div>
      <div className="relative z-10 w-full flex flex-col min-h-screen">
        <Navigation />
        
        <main className="flex-grow flex items-center justify-center px-4 py-32">
          <div className="container max-w-4xl mx-auto text-center">
            {/* 404 Typography */}
            <h1 className="text-[150px] md:text-[200px] font-black leading-none font-display text-primary/20 select-none">
              404
            </h1>
            
            <div className="-mt-12 md:-mt-16 relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-6 font-display text-foreground">
                Úps! Síðan fannst ekki
              </h2>
              <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto font-sans leading-relaxed">
                Það lítur út fyrir að þú hafir villst af leið. Síðan sem þú ert að leita að er annað hvort ekki til eða hefur verið færð.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 rounded-full text-lg shadow-lg shadow-primary/20 w-full sm:w-auto" asChild>
                  <Link to="/">
                    <ArrowLeft className="mr-2 w-5 h-5" /> Fara á forsíðu
                  </Link>
                </Button>
                
                <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-foreground font-bold px-8 py-6 rounded-full text-lg w-full sm:w-auto" asChild>
                  <Link to="/fjarþjálfun">
                    Skoða fjarþjálfun
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default NotFound;
