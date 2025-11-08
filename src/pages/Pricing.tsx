import { FormEvent, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PricingSection from "@/components/Pricing";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Target, Smartphone, Utensils, Brain, BarChart3 } from "lucide-react";

const Pricing = () => {
  const [programType, setProgramType] = useState<string>("");
  const [prebuiltPlan, setPrebuiltPlan] = useState<string>("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState<string | null>(null);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
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

  const scrollToForm = () => {
    const formSection = document.getElementById("signup-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const service = (formData.get("service") as string) || "";
    const selectedPrebuilt = (formData.get("prebuiltPlan") as string) || "";

    if (!service) {
      setSubmissionMessage(null);
      setSubmissionError("Vinsamlegast veldu þjónustu áður en þú sendir inn.");
      return;
    }

    if (service === "tilbuin" && !selectedPrebuilt) {
      setSubmissionMessage(null);
      setSubmissionError("Vinsamlegast veldu tilbúið prógram áður en þú sendir inn.");
      return;
    }

    if (!termsAccepted) {
      setSubmissionMessage(null);
      setSubmissionError("Þú þarft að samþykkja skilmála og persónuverndarstefnu.");
      return;
    }

    setSubmissionError(null);
    setSubmissionMessage(null);
    setIsSubmitting(true);

    formData.set("service", service);
    if (service === "tilbuin") {
      formData.set("prebuiltProgram", selectedPrebuilt);
    } else {
      formData.delete("prebuiltPlan");
      formData.set("prebuiltProgram", "");
    }
    formData.set("termsAccepted", termsAccepted ? "yes" : "no");

    try {
      const response = await fetch("https://formspree.io/f/xvgvzwyp", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        form.reset();
        setProgramType("");
        setPrebuiltPlan("");
        setTermsAccepted(false);
        setSubmissionMessage("Takk fyrir skráninguna! Við höfum samband innan skamms.");
      } else {
        const data = await response.json().catch(() => null);
        const errorMessage =
          (data && (data.error || data.message)) ||
          "Eitthvað fór úrskeiðis við að senda inn formið. Reyndu aftur síðar.";
        setSubmissionError(errorMessage);
      }
    } catch (error) {
      setSubmissionError("Tókst ekki að tengjast netinu. Vinsamlegast reyndu aftur.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background page-glow">
      <Navigation />
      
      <main className="pt-32">
        <PricingSection />

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

        {/* 5️⃣ Call to Action */}
        <section id="signup-form" className="pt-6 pb-14 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-black mb-4 font-display">
                Skráning í <span className="text-primary">Tilbúið prógram</span>
              </h2>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                Fylltu út upplýsingarnar hér að neðan og við sendum þér allt sem þú þarft til að byrja strax.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div>
                <Card className="bg-card/60 backdrop-blur border border-border/20">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">Skráningareyðublað</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {submissionMessage && (
                      <div className="mb-6 rounded-xl border border-primary/30 bg-primary/10 px-6 py-4 text-sm font-medium text-primary">
                        {submissionMessage}
                      </div>
                    )}
                    {submissionError && (
                      <div className="mb-6 rounded-xl border border-destructive/40 bg-destructive/10 px-6 py-4 text-sm font-medium text-destructive">
                        {submissionError}
                      </div>
                    )}
                    <form className="space-y-6" onSubmit={handleFormSubmit} noValidate>
                      <div className="space-y-2">
                        <Label htmlFor="signup-name" className="text-foreground">
                          Fullt nafn *
                        </Label>
                        <Input
                          id="signup-name"
                          name="name"
                          placeholder="Fullt nafn"
                          required
                          className="bg-background/60 border-border/30"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="signup-email" className="text-foreground">
                          Netfang *
                        </Label>
                        <Input
                          id="signup-email"
                          name="email"
                          type="email"
                          placeholder="Netfang"
                          required
                          className="bg-background/60 border-border/30"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="signup-phone" className="text-foreground">
                          Símanúmer
                        </Label>
                        <Input
                          id="signup-phone"
                          name="phone"
                          type="tel"
                          placeholder="Símanúmer"
                          className="bg-background/60 border-border/30"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="signup-kennitala" className="text-foreground">
                          Kennitala *
                        </Label>
                        <Input
                          id="signup-kennitala"
                          name="kennitala"
                          placeholder="000000-0000"
                          required
                          className="bg-background/60 border-border/30"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-foreground">
                          Þjónusta *
                        </Label>
                        <Select
                          name="service"
                          value={programType || undefined}
                          onValueChange={(value) => {
                            setProgramType(value);
                            setSubmissionError(null);
                            setSubmissionMessage(null);
                            if (value !== "tilbuin") {
                              setPrebuiltPlan("");
                            }
                          }}
                        >
                          <SelectTrigger className="bg-background/60 border-border/30">
                            <SelectValue placeholder="Veldu þjónustu" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="fjar">Fjarþjálfun</SelectItem>
                            <SelectItem value="tilbuin">Tilbúið prógram</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {programType === "tilbuin" && (
                        <div className="space-y-2 animate-fade-in">
                          <Label className="text-foreground">
                            Veldu tilbúið prógram *
                          </Label>
                          <Select
                            name="prebuiltPlan"
                            value={prebuiltPlan || undefined}
                            onValueChange={(value) => {
                              setPrebuiltPlan(value);
                              setSubmissionError(null);
                              setSubmissionMessage(null);
                            }}
                          >
                            <SelectTrigger className="bg-background/60 border-border/30">
                              <SelectValue placeholder="Veldu prógram" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="styrkur-byrjandi">Styrkur byrjandi – 3x viku</SelectItem>
                              <SelectItem value="styrkur-framkoma">Styrkur & vöðvabygging – 4x viku</SelectItem>
                              <SelectItem value="fitutap-30">Fitu tap – 30 daga áskorun</SelectItem>
                              <SelectItem value="heimaaefingar">Heimaæfingar – engin tæki</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      )}

                      <div className="space-y-2">
                        <Label htmlFor="signup-goals" className="text-foreground">
                          Hvað er markmið þitt? *
                        </Label>
                        <Textarea
                          id="signup-goals"
                          name="goals"
                          placeholder="Segðu okkur frá helstu markmiðum þínum..."
                          required
                          className="bg-background/60 border-border/30 min-h-[120px]"
                        />
                      </div>

                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="signup-terms"
                          checked={termsAccepted}
                          onCheckedChange={(checked) => {
                            setTermsAccepted(checked === true);
                            setSubmissionError(null);
                          }}
                        />
                        <Label htmlFor="signup-terms" className="text-sm text-foreground/70">
                          Ég samþykki að Sarafit hafi samband við mig og hef lesið persónuverndarstefnu.
                        </Label>
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting || !termsAccepted}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 rounded-full text-lg disabled:cursor-not-allowed disabled:opacity-70"
                        aria-disabled={isSubmitting || !termsAccepted}
                      >
                        {isSubmitting ? "Sendi..." : "Senda skráningu"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;