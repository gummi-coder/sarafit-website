import { Target, Utensils, Smartphone, Brain, BarChart3 } from "lucide-react";

const Method = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Main content: Text on left, two phones on right */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center mb-20">
          {/* Left side - Large descriptive text */}
          <div className="order-2 md:order-1 space-y-6">
            <h3 className="text-3xl md:text-5xl font-black font-display leading-tight">
              <span className="text-foreground">SARAFIT</span>{" "}
              <span className="text-primary">appið</span>
            </h3>
            <p className="text-xl md:text-2xl text-foreground/90 font-sans leading-relaxed">
              Fjarþjálfun fer fram í appinu SARAFIT og um leið og þú hefur skráð þig færðu fullan aðgang að appinu. Þar heldur þú utan um æfingarnar, næringuna, árangur og margt fleira
            </p>
            <p className="text-lg md:text-xl text-foreground/80 font-sans leading-relaxed">
              Þú heldur utan um æfingarnar, næringuna og árangurinn þinn - allt á einum stað. Það er spjallþráður í appinu þar sem þú hefur aðgang að Guðrúnu Söru 24/7 og getur spurt hana að hverju sem er hvenær sem er.
            </p>
          </div>

          {/* Right side - Two phone images staggered */}
          <div className="relative flex justify-center md:justify-center order-1 md:order-2 overflow-hidden">
            <div className="relative max-w-full">
              {/* First phone - "1 2.png" on the left, in front */}
              <img 
                src="/1 2.png" 
                alt="SARAFIT nutrition tracking" 
                className="w-[240px] md:w-[360px] h-auto relative z-20 transform rotate-[-8deg]"
              />
              {/* Second phone - "Untitled design (5).png" on the right, overlapping corner to corner, behind */}
              <img 
                src="/Untitled design (5).png" 
                alt="SARAFIT nutrition tracking" 
                className="w-[240px] md:w-[360px] h-auto absolute top-4 left-12 md:top-12 md:left-32 transform rotate-[4deg] z-10"
              />
            </div>
          </div>
        </div>

        {/* What's Included Section */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="text-primary mb-1">
                <Target className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <p className="text-xs md:text-sm text-foreground font-sans">
                Þú loggar æfingarnar og sérð árangurinn þinn.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="text-primary mb-1">
                <Utensils className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <p className="text-xs md:text-sm text-foreground font-sans">
                Þú loggar næringuna þína og sérð dagleg macros
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="text-primary mb-1">
                <Smartphone className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <p className="text-xs md:text-sm text-foreground font-sans">
                Leiðbeiningarmyndbönd með öllum æfingum
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="text-primary mb-1">
                <Brain className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <p className="text-xs md:text-sm text-foreground font-sans">
                Daily habits svo þú getur haldið utan um litlu hlutina
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="text-primary mb-1">
                <BarChart3 className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <p className="text-xs md:text-sm text-foreground font-sans">
                vítamín, vatnsinntaka og margt fleira
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method;
