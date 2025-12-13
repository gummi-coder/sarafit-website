import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import { scrollToSignupSection } from "@/lib/scroll-to-signup";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Guðrún Sara er yndisleg og vill svo mikið hjálpa manni að ná markmiðunum þínum. Hún hlustar á þínar óskir og peppar þig áfram sama hvað! Hún leggur sig alla fram í að gera æfingaprógrömin og myndböndin sem fylgja hverri æfingu sem er svo geggjað, appið er líka æðiiiislegt og hvetur þig mikið til þess að halda áfram🥰 mæli 100% með!",
      author: "Rúna",
      highlight: "mæli 100% með!",
    },
    {
      text: "Það er búið að vera frábært að vera í þjálfun hjá Söru. Hún er vingjarnleg og hress, en hvetur mann samt áfram og leyfir manni ekki að komast upp með neitt (samt án þess að vera leiðinleg). Mér finnst ég vita miklu betur núna hvað ég er að gera í ræktinni og hvernig ég get bætt mig. Takk Sara!",
      author: "Þóra",
      highlight: "Mér finnst ég vita miklu betur núna hvað ég er að gera í ræktinni",
    },
    {
      text: "Mjög flott! Guðrún Sara er alltaf til staðar ef maður er óviss með eitthvað eða þarf hvatningu 🫶🏼Prógramið líka mjög flott, allt mjög skýrt og það eru myndbönd sem maður getur skoðað ef maður er ekki viss hvernig á að framkvæma æfingu. Appið líka mjög þæginlegt og auðvelt að tracka allt! 🤍",
      author: "Aleksandra",
      highlight: "auðvelt að tracka allt!",
    },
    {
      text: "mér finnst ég loksins vera komin með jafnvægi á matræði og hreyfingu án þess að vera að banna mér hluti eða finnast ég þurfa að hreyfa mig sex sinnum í viku. Ég fékk rútínu sem passar vel inn í lífið mitt með 3 börn og fulla vinnu og ég hef ekki fundið fyrir neinni yfirkeyrslu.",
      author: "Karlotta",
      highlight: "Ég fékk rútínu sem passar vel inn í lífið mitt",
    },
    {
      text: "Ég hef aldrei séð jafn mikinn árangur í lífi mínu bæði líkamlega og á styrk. Er svo ánægð að hafa skráð mig hjá Söru.",
      author: "Ragnheiður",
      highlight: "Er svo ánægð að hafa skráð mig",
    },
    {
      text: "Sara hefur veitt mér svo mikinn stuðning og hjálpað mér að komast aftur af stað eftir meiðsli sem hafa tekið mikið á andlega og líkamlega. Ég er að sjá miklar framfarir í hreyfigetu og styrk. Ég var svo ánægð að hún gat byggt prógram fyrir mig því það voru svo margar æfingar sem ég gat ekki gert. En prógramið sem ég fékk frá Söru var alveg frábært!",
      author: "Lilja",
      highlight: "Best decision I ever made",
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  const handleSignupClick = () => {
    scrollToSignupSection(navigate, location.pathname);
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Star Rating */}
            <div className="lg:sticky lg:top-24 pt-8 self-start">
            <div className="text-center">
              <div className="flex justify-center gap-2 mb-8">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-8 h-8 fill-star text-star" />
                ))}
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black mb-6 font-display">
                <span className="text-primary">Með yfir 100+ meðmæli</span>
              </h2>
              
              <p className="text-xl text-foreground/80 font-sans mb-8 leading-relaxed">
                <span className="font-bold">Lestu af hverju fleiri en 100 viðskiptavinir hafa elskað SARAFIT og hvernig fjarþjálfun hefur breytt lífi þeirra!</span>
              </p>

              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-12 py-6 rounded-full text-lg shadow-lg hover:shadow-primary/25 transition-all hover:scale-105" onClick={handleSignupClick}>
                Skrá mig í fjarþjálfun
              </Button>
            </div>
          </div>

          {/* Right side - Testimonials */}
          <div className="columns-1 md:columns-2 gap-6 space-y-6">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="break-inside-avoid bg-card border border-border/20 rounded-2xl p-8 shadow-lg shadow-white/20 backdrop-blur-sm mb-6">
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-[#ffc800] text-[#ffc800]" />
                  ))}
                </div>
                
                {/* Headline Quote */}
                <h3 className="font-bold text-lg mb-4 font-display text-primary">
                  "{testimonial.highlight}"
                </h3>
                
                {/* Body Text */}
                <p className="text-foreground/80 text-sm leading-relaxed mb-4 font-sans font-medium">
                  "{testimonial.text}"
                </p>
                
                {/* Author Name */}
                <p className="text-foreground/60 font-sans text-sm">
                  {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
