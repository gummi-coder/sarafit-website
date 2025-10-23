import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const Approach = () => {
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
                onClick={() => window.location.href = 'http://localhost:8082/apply'}
              >
                SKRÁ MIG NÚNA!
              </Button>
            </div>
          </div>

          {/* Video */}
          <div>
            <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-primary/10 group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm flex items-center justify-center">
                <Button
                  size="lg"
                  className="relative bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-20 h-20 group-hover:scale-110 transition-transform"
                >
                  <Play className="w-10 h-10 fill-current" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
