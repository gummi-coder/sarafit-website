import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Target, Smartphone, Utensils, Brain, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();
  const testimonials = [
    {
      name: "Jón Þór",
      age: "34",
      result: "Lost 15kg in 3 months",
      text: "The 3-month program was perfect for my goals. My coach understood exactly what I needed to achieve my dream physique."
    },
    {
      name: "Einar",
      age: "28", 
      result: "Gained 8kg muscle in 6 months",
      text: "The 6-month program gave me the time and support I needed to build lasting habits and see real results."
    },
    {
      name: "Guðmundur",
      age: "41",
      result: "Transformed his body composition",
      text: "At 41, I thought it was too late to get in shape. Sarafit proved me wrong - I'm in the best shape of my life."
    }
  ];


  return (
    <div className="min-h-screen bg-background page-glow">
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
                Veldu prógram sem hentar þínum markmiðum og getustigi
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {[
                {
                  name: "Styrkur byrjandi",
                  subtitle: "3x viku",
                  price: "7.990 kr.",
                  period: "á mánuði",
                  description: "Fyrir þá sem eru að byrja í styrktarþjálfun",
                  features: [
                    "3 æfingar á viku",
                    "Fullur aðgangur að appinu",
                    "Myndbönd og leiðbeiningar",
                    "Sniðið fyrir byrjendur"
                  ],
                  popular: false
                },
                {
                  name: "Styrkur & vöðvabygging",
                  subtitle: "4x viku",
                  price: "9.990 kr.",
                  period: "á mánuði",
                  description: "Fyrir þá sem vilja byggja upp styrk og vöðva",
                  features: [
                    "4 æfingar á viku",
                    "Fullur aðgangur að appinu",
                    "Myndbönd og leiðbeiningar",
                    "Sniðið fyrir lengra komna"
                  ],
                  popular: true
                },
                {
                  name: "Fitu tap",
                  subtitle: "30 daga áskorun",
                  price: "12.990 kr.",
                  period: "einu sinni",
                  description: "30 daga prógram fyrir fitu tap",
                  features: [
                    "30 daga prógram",
                    "Fullur aðgangur að appinu",
                    "Myndbönd og leiðbeiningar",
                    "Næringarráðgjöf"
                  ],
                  popular: false
                },
                {
                  name: "Heimaæfingar",
                  subtitle: "Engin tæki",
                  price: "6.990 kr.",
                  period: "á mánuði",
                  description: "Prógram sem þú getur gert heima án tækja",
                  features: [
                    "Æfingar án tækja",
                    "Fullur aðgangur að appinu",
                    "Myndbönd og leiðbeiningar",
                    "Hægt að gera hvar sem er"
                  ],
                  popular: false
                }
              ].map((program, index) => (
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
                    <h3 className="text-xl font-bold mb-1 font-display">{program.name}</h3>
                    <p className="text-sm text-primary font-semibold font-sans">{program.subtitle}</p>
                  </div>
                  <p className="text-sm text-foreground/70 font-sans mb-4">{program.description}</p>
                  <div className="flex items-baseline mb-6">
                    <span className="text-3xl font-black font-display">{program.price}</span>
                    <span className="text-foreground/50 ml-2 text-sm">/{program.period}</span>
                  </div>
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
                    onClick={() => navigate("/signup")}
                  >
                    Velja prógram
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3️⃣ What's Included Section */}
        <section className="pt-12 pb-8 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black mb-6 font-display">
                <span className="text-foreground">What's Included in</span>{" "}
                <span className="text-primary">Every Plan</span>
              </h2>
              <p className="text-lg text-foreground/80">
                This builds perceived value before people judge the price.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="text-primary mb-4 flex justify-center">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Training plan tailored to your goal</h3>
              </div>
              
              <div className="text-center">
                <div className="text-primary mb-4 flex justify-center">
                  <Utensils className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Meal plan or macro guidance</h3>
              </div>
              
              <div className="text-center">
                <div className="text-primary mb-4 flex justify-center">
                  <Smartphone className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-foreground mb-2">App access with exercise demos</h3>
              </div>
              
              <div className="text-center">
                <div className="text-primary mb-4 flex justify-center">
                  <Brain className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Accountability check-ins</h3>
              </div>
              
              <div className="text-center">
                <div className="text-primary mb-4 flex justify-center">
                  <BarChart3 className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Progress tracking & habit system</h3>
              </div>
            </div>
          </div>
        </section>

        {/* 4️⃣ Social Proof Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black mb-6 font-display">
                <span className="text-foreground">Real Results From</span>{" "}
                <span className="text-primary">Real Clients</span>
              </h2>
              <p className="text-lg text-foreground/80">
                These are everyday people who decided to commit — just like you can.
              </p>
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
                      <div className="font-bold text-foreground">{testimonial.name}, {testimonial.age}</div>
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
  );
};

export default Pricing;