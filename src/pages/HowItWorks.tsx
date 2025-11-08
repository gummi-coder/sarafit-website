import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Users, MessageCircle, Clock, Smartphone, Target, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scrollToSignupSection } from "@/lib/scroll-to-signup";

const HowItWorks = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  
  const transformations = [
    { id: 1, title: "Mike's Journey" },
    { id: 2, title: "David's Transformation" },
    { id: 3, title: "John's Success" },
    { id: 4, title: "Chris's Results" },
    { id: 5, title: "Alex's Progress" },
    { id: 6, title: "Ryan's Achievement" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % transformations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  // Auto-slideshow every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getSlideIndex = (offset: number) => {
    return (currentSlide + offset + transformations.length) % transformations.length;
  };

  const handleSignupClick = () => {
    scrollToSignupSection(navigate, location.pathname);
  };

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Persónuleg þjálfun",
      description: "Allir sem skrá sig í fjarþjálfun hjá SARAFIT fá persónulega þjálfun frá einkaþjálfara sem býr til prógram og næringarplan svo þú fáir árangur sem endist.",
      benefits: [
        "Þjálfarinn þinn heldur utan um árangurinn þinn, breytir prógraminu eins og þarf og hjálpar þér að halda þér við efnið svo þú gefist ekki upp.",
        "Sama hvort markmiðið þitt er að byggja upp styrk, missa fitu eða bæta heilsuna almennt þá færðu plan sem hentar þínum þörfum fullkomlega.",
        "Vikuleg lítil check ins og mánaðarleg árangurs check ins tryggja að rútínan þín skili þér árangri."
      ]
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Check in’s",
      description: "Vikuleg persónuleg check ins frá Söru í spjall þræðinum í appinu og mánaðarleg árangurs check ins.",
      benefits: [
        "Við skoðum æfingarprógramið, næringarplanið og dagleg habits og breytum ef þess þarf.",
        "Fjarfundir þar sem við spjöllum um næringuna, hvernig við getum komið heilbrigðum kostum inn í núverandi rútínu, reiknum macros og almennt spjöllum um mataræði.",
        "Mánaðarleg check in þar sem við tökum árangursmælingar og tökum stöðuna á heilsunni, bæði andlegri og líkamlegri."
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Persónulegt æfingaprógram",
      description: "Sérhannað æfingaprógram sem er hannað fyrir þín markmið og þínar aðstæður, sama hverjar þær eru.",
      benefits: [
        "Ef þú ert nú þegar með upptekna rútínu eða hefur ekki mikinn tíma til að mæta þá getur þú samt fengið plan. Sara gerir fyrir þig æfingaprógram sem passar inn í þína uppteknu rútínu.",
        "Þú færð prógram sem vinnur með þér ef þú ert að ná þér eftir meiðsli, barneignir eða andleg veikindi.",
        "Hvort sem þú vilt læra að telja macros eða bæta inn hollari venjum inn í lífstílinn þinn — Sara hjálpar þér að finna það sem hentar best."
      ]
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Stuðningur 24/7",
      description: "Ertu með spurningu eða vantar þig aðstoð? Þú ert með þjálfarann í vasanum.",
      benefits: [
        "Sendu spurningar á þjálfarann þinn hvenær sem er og þú færð alltaf svar innan 24 klst.",
        "Öll samtöl við þjálfarann þinn eru bundin trúnaði svo þér líði vel með að tala um hvað sem er.",
        "Þú tekur æfingu hvenær sem þér hentar og loggar hana í appið. Þú loggar næringuna þína og heldur utan um árangur allt á einum stað."
      ]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "SARAFIT appið",
      description: "Haltu utan um þyngdir og reps, progress myndir og þyngdartap/aukningu allt á einum stað.",
      benefits: [
        "Það eru leiðbeiningar og myndbönd af öllum æfingum í appinu svo þú getur passað vel upp á formið þitt.",
        "Það er skeiðklukka sem telur niður hvíld á milli setta, þú skráir inn reps og sets eða tíma og heldur þannig alveg utan um árangurinn þinn á öllum æfingum. Þú getur meira að segja séð hvað þú tókst á síðustu æfingu.",
        "Ef þú vilt halda utan um macros og kaloríur þá getur þú skráð það beint í appið."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background page-glow">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 font-display">
            <span className="text-primary">Fjarþjálfun sem er byggð</span>{" "}
            <span className="text-foreground">fyrir þín markmið</span>
            <br />
            <span className="text-foreground">og þinn lífsstíl</span>
          </h1>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Persónuleg nálgun</h3>
              <p className="text-foreground/80">Þú vinnur með þjálfara sem byggir ofan á þínar þarfir og hjálpar þér að setja raunhæf markmið.</p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Byggt á þínum lífsstíl</h3>
              <p className="text-foreground/80">Hvort sem þú vilt telja macros eða ekki, fara eftir ítarlegu plani eða ekki, þá finnur Sara lausn sem virkar fyrir þig.</p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <Smartphone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Þjálfun fer fram í appi</h3>
              <p className="text-foreground/80">Þú heldur utan um æfingar, næringu og árangur allt á einum stað.</p>
            </div>
          </div>

          <p className="text-lg text-foreground/80 max-w-4xl mx-auto mb-12">
            The Sarafit VIP is a 1:1 personal training 12-month program tailored specifically to you. 
            Work with a coach to get your macronutrients, exercises, adjustments, etc., and reach your desired body goal.
          </p>

          {/* Progress Photos Slideshow */}
          <div className="mb-16">
            {/* Slideshow */}
            <div className="relative max-w-5xl mx-auto mb-12">
              <div className="flex items-center justify-center gap-10">
                {/* Left slide (blurred, clickable) */}
                <button 
                  onClick={prevSlide}
                  className="w-56 h-72 rounded-2xl overflow-hidden shadow-lg bg-card border border-border/20 opacity-50 blur-sm hover:opacity-70 transition-all cursor-pointer"
                >
                  <div className="w-full h-full bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-foreground/40 font-bold text-sm text-center">
                      {transformations[getSlideIndex(-1)].title}
                    </span>
                  </div>
                </button>

                {/* Center slide (focused) */}
                <div className="w-72 h-96 rounded-2xl overflow-hidden shadow-2xl bg-card border border-primary/30 scale-110">
                  <div className="w-full h-full bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-foreground/40 font-bold text-xl text-center">
                      {transformations[currentSlide].title}
                    </span>
                  </div>
                </div>

                {/* Right slide (blurred, clickable) */}
                <button 
                  onClick={nextSlide}
                  className="w-56 h-72 rounded-2xl overflow-hidden shadow-lg bg-card border border-border/20 opacity-50 blur-sm hover:opacity-70 transition-all cursor-pointer"
                >
                  <div className="w-full h-full bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-foreground/40 font-bold text-sm text-center">
                      {transformations[getSlideIndex(1)].title}
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>

           <Button 
             size="lg"
             className="bg-primary hover:bg-primary/90 text-primary-foreground font-black text-lg px-12 py-7 rounded-full shadow-lg hover:shadow-primary/50 transition-all hover:scale-105"
            onClick={handleSignupClick}
           >
             SKRÁ MIG NÚNA!
           </Button>
        </div>
      </section>

      {/* How It Works Section - Similar to Testimonials Layout */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-primary text-lg font-bold mb-4 font-sans">SARAFIT</p>
            <h2 className="text-3xl md:text-5xl font-black mb-6 font-display">
              <span className="text-foreground">Svona virkar þetta</span>
            </h2>
            <p className="text-lg text-foreground/80 max-w-4xl mx-auto">
              Til þess að sjá langtíma árangur þarftu prógram og rútínu sem hentar þér vel. SARAFIT veitir þér alla þá aðstoð sem þú þarft til að komast á betri stað — sama hvar þú ert stödd í lífinu.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left side - Photo/Content that scrolls */}
            <div className="lg:sticky lg:top-24 pt-8">
              <div className="text-center">
                <div className="flex justify-center gap-2 mb-8">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-8 h-8 fill-star text-star" />
                  ))}
                </div>
                
                <h2 className="text-5xl md:text-6xl font-black mb-6 font-display">
                  <span className="text-primary">Byggt á</span>
                  <br />
                  <span className="text-foreground">rannsóknum</span>
                </h2>
                
                <p className="text-xl text-foreground/80 font-sans mb-8 leading-relaxed">
                  Þú færð stuðning frá SARAFIT frá upphafi til enda með aðferðum sem hafa virkað fyrir yfir 100 konur.
                </p>

                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-12 py-6 rounded-full text-lg shadow-lg hover:shadow-primary/25 transition-all hover:scale-105">
                  Byrjaðu núna
                </Button>
              </div>
            </div>

            {/* Right side - Large text content */}
            <div className="space-y-12">
              {features.map((feature, i) => (
                <div key={i} className="space-y-6">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-4">
                    <div className="text-primary">
                      {feature.icon}
                    </div>
                    <h3 className="font-bold text-2xl font-display text-primary">
                      {feature.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-foreground/90 text-lg leading-relaxed font-sans">
                    {feature.description}
                  </p>
                  
                  {/* Benefits List */}
                  <ul className="space-y-4">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-4">
                        <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                        <span className="text-foreground/80 text-base leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 font-display">
              <span className="text-foreground">Sarafit Has</span>{" "}
              <span className="text-primary">Proven Results</span>
            </h2>
            <p className="text-lg text-foreground/80 max-w-4xl mx-auto">
              Does Sarafit work? There's only one way to find out, by seeing whether our students actually had success.
            </p>
          </div>

          {/* Video Embed */}
          <div className="max-w-4xl mx-auto mb-12">
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

          <div className="text-center">
            <p className="text-lg text-foreground/80 mb-8">
              <span className="font-bold text-foreground">Based on 1,500+ Reviews</span> from real clients who have transformed their lives
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 font-display">
            <span className="text-foreground">Are You Ready To</span>{" "}
            <span className="text-primary">Get In Control Of Your Body</span>{" "}
            <span className="text-foreground">& The Way It Looks</span>
            <br />
            <span className="text-foreground">For The Rest Of Your Life?</span>
          </h2>
          
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            Because of our strict requirements for hiring new world class, overqualified coaches,{" "}
            <span className="font-bold text-foreground">we only have so many openings available at any given time.</span>
          </p>
          
          <p className="text-lg text-foreground/80 mb-12 leading-relaxed">
            If you're ready to see if you qualify, just fill out the short 2 to 3-minute application below and book a time to chat with someone from our team.
            <br />
            <br />
            A new future you, is waiting for you...{" "}
            <span className="font-bold text-primary">Step into him today.</span>
          </p>

          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-black text-xl px-16 py-8 rounded-full shadow-lg hover:shadow-primary/50 transition-all hover:scale-105"
            onClick={() => window.location.href = 'http://localhost:8082/apply'}
          >
            SKRÁ MIG NÚNA!
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;