import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();
  const testimonials = [
    {
      name: "Halla Margrét",
      result: "Booty builder",
      text: "Þetta hentaði mér mjög vel þar sem ég þurfti ekki þjálfun en þurfti plan, appið er mjög flott og þægilegt í notkun"
    },
    {
      name: "Jóna",
      result: "Stronger & Bigger",
      text: "Magnað prógram sem fer vel yfir allt! Ég finn mikinn mun á styrk hjá mér."
    },
    {
      name: "Kristbjörg",
      result: "Melt Mode",
      text: "Fullkomið prógram í alla staði! Ég þurfti gott prógram til að komast af stað og það var akkúrat það sem ég fékk - takk Sara"
    }
  ];


  return (
    <div className="relative bg-background min-h-screen">
      <div className="absolute inset-0 pointer-events-none page-glow"></div>
      <div className="relative z-10">
      <SEO
        title="Tilbúin prógröm - Melt Mode, Stronger & Bigger, Booty Builder, Endurance"
        description="Veldu prógram sem hentar þínum markmiðum. Melt Mode, Stronger & Bigger, Booty Builder og Endurance - allt með fullum aðgangi að SARAFIT appinu."
        url="https://sarafit.is/pricing"
        keywords="tilbúin prógröm, Melt Mode, Stronger Bigger, Booty Builder, Endurance, æfingarprógram, SARAFIT"
      />
      <Navigation />
      
      <main className="pt-32">
        {/* Prebuilt Programs Pricing Table */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black mb-6 font-display">
                <span className="text-foreground">Tilbúin</span>{" "}
                <span className="text-primary">prógröm</span>
              </h2>
              <p className="text-lg text-foreground/80 font-sans max-w-3xl mx-auto">
                Veldu prógram sem hentar þínum markmiðum og getustigi: Með tilbúnu prógrami færðu aðgang að appinu sarafit þar sem þú heldur utan um æfingarnar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {[
                {
                  name: "Melt Mode",
                  frequency: "3x í viku",
                  description: "Fyrir byrjendur sem vilja taka fyrsta skrefið í fitubrennslu.",
                  features: [
                    "Byggt á því markmiði að brenna fitu",
                    "Hentar vel fyrir byrjendur",
                    "3 æfingadagar á viku",
                    "Kemur í 3 \"phases\""
                  ],
                  popular: false
                },
                {
                  name: "Stronger & Bigger",
                  frequency: "3x í viku",
                  description: "Fyrir þá sem vilja byggja upp styrk og vöðva.",
                  features: [
                    "Byggt á því markmiði að byggja upp styrk og vöðva",
                    "Hentar vel fyrir byrjendur og vana",
                    "3 eða 6 æfingadagar á viku",
                    "Kemur í 3 \"phases\""
                  ],
                  popular: true
                },
                {
                  name: "Booty Builder",
                  frequency: "5x í viku",
                  description: "Fyrir þá sem vilja byggja upp rassvöðvana",
                  features: [
                    "Byggt á því markmiði að vilja byggja upp rassvöðvana",
                    "Hentar vel fyrir vana eða þá sem hafa klárað phase 1 í öðrum prógrömmum.",
                    "5 æfingadagar á viku",
                    "Kemur í 3 \"phases\""
                  ],
                  popular: false
                },
                {
                  name: "Endurance",
                  frequency: "4x í viku",
                  description: "Fyrir þá sem vilja byggja upp úthald og þol",
                  features: [
                    "Byggt á því markmiði að bæta þolið",
                    "Hentar vel fyrir byrjendur og vana",
                    "4 æfingadagar á viku",
                    "Kemur í 3 \"phases\""
                  ],
                  popular: false
                }
              ].map((program, index) => {
                // Map program names to signup form values
                const programMap: { [key: string]: string } = {
                  "Melt Mode": "melt-mode",
                  "Stronger & Bigger": "stronger-bigger",
                  "Booty Builder": "booty-builder",
                  "Endurance": "endurance"
                };
                
                const programValue = programMap[program.name] || "";
                
                return (
                <div
                  key={index}
                  className={`relative bg-card border-2 rounded-2xl p-6 transition-all hover:scale-105 hover:shadow-xl ${
                    program.popular 
                      ? "border-primary shadow-lg shadow-primary/20" 
                      : "border-border/20 shadow-md"
                  }`}
                >
                  {program.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" /> vinsælast
                    </div>
                  )}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-1 font-display text-foreground">{program.name}</h3>
                    <p className="text-sm text-primary font-semibold font-sans">{program.frequency}</p>
                  </div>
                  <p className="text-sm text-foreground/70 font-sans mb-6">{program.description}</p>
                  <ul className="space-y-2 mb-6 text-left">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-foreground/80 font-sans">
                        <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full font-bold py-4 rounded-lg transition-all ${
                      program.popular 
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/25" 
                        : "bg-secondary hover:bg-secondary/80 text-secondary-foreground shadow-md"
                    }`}
                    onClick={() => navigate(`/signup?program=${programValue}`)}
                  >
                    Velja prógram
                  </Button>
                </div>
              );
              })}
            </div>
          </div>
        </section>

        {/* 4️⃣ Social Proof Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black mb-6 font-display">
                <span className="text-foreground">Hvað aðrir hafa sagt um </span>
                <span className="text-primary whitespace-nowrap">tilbúin prógröm hjá SARAFIT</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border border-white/10">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-star text-star" />
                      ))}
                    </div>
                    
                    <p className="text-foreground/80 mb-4 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="border-t border-border/20 pt-4">
                      <div className="font-bold text-foreground">{testimonial.name}</div>
                      <div className="text-primary text-sm font-medium">{testimonial.result}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
      </div>
    </div>
  );
};

export default Pricing;