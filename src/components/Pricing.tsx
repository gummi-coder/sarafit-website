import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Tilbúið prógram",
      price: "7.990 kr.",
      originalPrice: "",
      period: "á mánuði",
      description: "aðgangur að appi og tilbúnu prógrami án þjálfunar.",
      features: [
        "Tilbúið æfingarprógram",
        "Aðgangur að fitness appinu SARAFIT",
        "Myndbönd og leiðbeiningar af öllum æfingum"
      ],
      popular: false,
      cta: "Byrja núna"
    },
    {
      name: "Fjarþjálfun",
      price: "19.990kr.",
      originalPrice: "",
      period: "á mánuði",
      description: "Alvöru þjálfun sem er byggð á þínum lífsstíl.",
      features: [
        "Sérhannað æfingarprógram",
        "Fullur aðgangur að fitness appinu SARAFIT",
        "Myndbönd og leiðbeiningar af öllum æfingum",
        "Vikuleg check-in",
        "Mánaðarleg árangurs check-in",
        "Aðgangur að þjálfara í gegnum spjallþráð í appinu",
        "Næringarþjálfun",
        "NÝTT - fjarfundir þar sem þú færð kennslu á næringu og mataræði."
      ],
      popular: true,
      cta: "Byrja núna"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">
            Veldu þína <span className="text-primary">leið</span>
          </h2>
          <p className="text-xl text-foreground/80 font-sans max-w-3xl mx-auto">
            Taktu stjórn á þínu eigin lífi með plani sem hentar þér 100%. Engin diet og engar reglur.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card border-2 rounded-2xl p-8 transition-all hover:scale-105 ${
                plan.popular 
                  ? "border-primary shadow-xl shadow-primary/20" 
                  : "border-border/20 shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" /> vinsælast
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2 font-display">{plan.name}</h3>
              <p className="text-foreground/70 font-sans mb-6">{plan.description}</p>
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-black font-display">{plan.price}</span>
                <span className="text-foreground/50 ml-2 line-through">{plan.originalPrice}</span>
                <span className="text-foreground/70 ml-2">/{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-foreground/80 font-sans">
                    <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button 
                className={`w-full font-bold py-6 rounded-lg text-lg transition-all ${
                  plan.popular 
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/25" 
                    : "bg-secondary hover:bg-secondary/80 text-secondary-foreground shadow-md hover:shadow-foreground/10"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
