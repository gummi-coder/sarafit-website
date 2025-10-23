import { CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Method = () => {
  const benefits = [
    "Byggja upp heilbrigt samband við hreyfingu og næringu",
    "Tóna líkamann og byggja upp styrk",
    "Ná markmiðum með lausnum sem virka",
    "Loksins ná að byggja upp sjálfstraust og andlega vellíðan",
  ];

  const avoids = [
    "Hætta að gefast upp og falla aftur í slæma vana sem hafa ekki góð áhrif á heilsuna þína",
    "Hætta að detta í binge og leti alla daga",
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">
            <span className="text-white">Engin diets og engar skyndilausnir. Við notum lausnir sem eru byggðar á</span> <span className="text-primary">rannsóknum svo þú sjáir alvöru árangur sem endist til lengri tíma.</span>
          </h2>
          <p className="text-xl text-foreground/80 font-bold font-sans">
            SARAFIT hjálpar konum eins og ÞÉR
          </p>
        </div>

        <div className="space-y-6 mb-8">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg md:text-xl font-semibold font-sans">
                {benefit}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-6 mb-12">
          {avoids.map((avoid, i) => (
            <div key={i} className="flex items-start gap-4">
              <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
              <p className="text-lg md:text-xl font-sans">{avoid}</p>
            </div>
          ))}
        </div>

        <div className="space-y-6 mb-12">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <p className="text-lg md:text-xl font-sans">
              Ég mun hjálpa þér að byggja upp ótrúlegt sjálfstraust með hreyfingu og venjum sem virka.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-black px-12 py-7 rounded-full text-lg"
            onClick={() => window.location.href = 'http://localhost:8082/apply'}
          >
            SKRÁ MIG NÚNA!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Method;
