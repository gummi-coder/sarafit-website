import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import { scrollToSignupSection } from "@/lib/scroll-to-signup";

const Approach = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignupClick = () => {
    scrollToSignupSection(navigate, location.pathname);
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">
              <span className="text-white">Fjarþjálfun sem er</span> <span className="text-primary">byggð með þín markmið í huga.</span>
            </h2>
            <p className="text-xl font-semibold text-foreground/90 mb-6 font-sans">
              Plan sem hentar þér svo þú getur hætt að byrja og gefast upp eftir nokkrar vikur.
            </p>
            <div className="space-y-4 text-lg text-foreground/80">
              <p className="font-sans">
                👉 Sérsniðið æfingarprógram sem er byggt fyrir þinn lífsstíl og þín markmið.
              </p>
              <p className="font-sans">
                👉 Næringarþjálfun þar sem við förum yfir þínar venjur og aðlögum ofan á þær.
              </p>
              <p className="font-sans">
                👉 Fullur aðgangur að appinu SARAFIT þar sem þú heldur utan um allan árangur. Þú hefur einnig aðgang að spjallþræði við þjálfara beint í appinu.
              </p>
            </div>
            <div className="mt-8">
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-12 py-7 rounded-full text-lg"
                onClick={handleSignupClick}
              >
                SKRÁ MIG NÚNA!
              </Button>
            </div>
          </div>

          {/* Video */}
          <div>
            <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-primary/10 shadow-xl">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/KPyBoqPhAF4"
                title="Fjarþjálfun með Sarafit"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
