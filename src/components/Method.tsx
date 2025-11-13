import { Target, Utensils, Smartphone, Brain, BarChart3 } from "lucide-react";

const Method = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 font-display text-foreground">
            SARAFIT appið
          </h2>
        </div>

        {/* Main content: Text on left, two phones on right */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center mb-20">
          {/* Left side - Large descriptive text */}
          <div className="order-2 md:order-1 space-y-6">
            <h3 className="text-3xl md:text-5xl font-black font-display leading-tight">
              <span className="text-foreground">Fjarþjálfun sem </span>
              <span className="text-primary whitespace-nowrap">hentar þínu lífi</span>
            </h3>
            <p className="text-xl md:text-2xl text-foreground/90 font-sans leading-relaxed">
              SARAFIT appið er þitt fullkomna fjarþjálfunartól - byggt til að hjálpa þér að þjálfa betur, lifa heilbrigðara og ná raunverulegum árangri.
            </p>
            <p className="text-lg md:text-xl text-foreground/80 font-sans leading-relaxed">
              Frá æfingaleiðbeiningum til daglegs stuðnings, allt virkar með þínu lífi. Það er ástæðan fyrir að SARAFIT appið sameinar verkfærin sem þú þarft til að vera stöðug, bæði inni og úti í ræktinni.
            </p>
          </div>

          {/* Right side - Two phone images staggered */}
          <div className="relative flex justify-center md:justify-center order-1 md:order-2">
            <div className="relative">
              {/* First phone - "1 2.png" on the left, in front */}
              <img 
                src="/1 2.png" 
                alt="SARAFIT nutrition tracking" 
                className="w-[320px] md:w-[360px] h-auto relative z-20 transform rotate-[-8deg]"
              />
              {/* Second phone - "Untitled design (5).png" on the right, overlapping corner to corner, behind */}
              <img 
                src="/Untitled design (5).png" 
                alt="SARAFIT nutrition tracking" 
                className="w-[320px] md:w-[360px] h-auto absolute top-8 left-24 md:top-12 md:left-32 transform rotate-[4deg] z-10"
              />
            </div>
          </div>
        </div>

        {/* What's Included Section */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-black mb-4 font-display">
              <span className="text-foreground">Hvað er innifalið í</span>{" "}
              <span className="text-primary">hverjum pakka</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="text-primary mb-1">
                <Target className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <p className="text-xs md:text-sm text-foreground font-sans">
                Æfingaplan sérsniðinn að markmiðum þínum
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="text-primary mb-1">
                <Utensils className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <p className="text-xs md:text-sm text-foreground font-sans">
                Matarplan eða makró leiðbeiningar
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="text-primary mb-1">
                <Smartphone className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <p className="text-xs md:text-sm text-foreground font-sans">
                Aðgangur að appinu með kennslumyndböndum
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="text-primary mb-1">
                <Brain className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <p className="text-xs md:text-sm text-foreground font-sans">
                Ábyrgðar eftirfylgni til að halda þér á réttu brautinni
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="text-primary mb-1">
                <BarChart3 className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <p className="text-xs md:text-sm text-foreground font-sans">
                Framvinda eftirfylgni og vana kerfi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method;
