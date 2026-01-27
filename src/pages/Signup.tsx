import { FormEvent, useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSearchParams, useNavigate } from "react-router-dom";

const Signup = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [programType, setProgramType] = useState<string>("");
  const [prebuiltPlan, setPrebuiltPlan] = useState<string>("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState<string | null>(null);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  // Map URL program values to form values
  const programValueMap: { [key: string]: { service: string; prebuilt: string } } = {
    "melt-mode": { service: "tilbuin", prebuilt: "melt-mode" },
    "stronger-bigger": { service: "tilbuin", prebuilt: "stronger-bigger" },
    "booty-builder": { service: "tilbuin", prebuilt: "booty-builder" },
    "endurance": { service: "tilbuin", prebuilt: "endurance" },
    "the-runner": { service: "tilbuin", prebuilt: "the-runner" },
    "homebody": { service: "tilbuin", prebuilt: "homebody" },
    "begin-now": { service: "tilbuin", prebuilt: "begin-now" },
    "busy-bee": { service: "tilbuin", prebuilt: "busy-bee" }
  };

  useEffect(() => {
    const programParam = searchParams.get("program");
    const serviceParam = searchParams.get("service");

    if (programParam && programValueMap[programParam]) {
      const { service, prebuilt } = programValueMap[programParam];
      setProgramType(service);
      setPrebuiltPlan(prebuilt);
    } else if (serviceParam) {
      setProgramType(serviceParam);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const service = (formData.get("thjonusta") as string) || "";
    const selectedPrebuilt = (formData.get("tilbuidProgram") as string) || "";
    const phone = (formData.get("simanumer") as string) || "";

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

    if (!phone.trim()) {
      setSubmissionMessage(null);
      setSubmissionError("Vinsamlegast fylltu út símanúmer áður en þú sendir inn.");
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

    formData.set("thjonusta", service);
    if (service === "tilbuin") {
      formData.set("tilbuidProgram", selectedPrebuilt);
    } else {
      formData.delete("tilbuidProgram");
      formData.set("tilbuidProgram", "");
    }
    formData.set("skilmalaSamthykkt", termsAccepted ? "yes" : "no");

    try {
      // Form backend: Basin (can switch back to Formspree if needed)
      // Formspree: https://formspree.io/f/xvgvzwyp
      const response = await fetch("https://usebasin.com/f/7dfdb40e769c", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        // Fire Meta Pixel Lead event
        if (window.fbq) {
          window.fbq('track', 'Lead');
        }
        
        form.reset();
        setProgramType("");
        setPrebuiltPlan("");
        setTermsAccepted(false);
        setSubmissionMessage("Takk fyrir! Við höfum móttekið skráningu þína og munum hafa samband við þig fljótlega.");
        setSubmissionError(null);
        setTimeout(() => navigate("/"), 2000);
      } else {
        const data = await response.json();
        if (data.error) {
          setSubmissionError(data.error);
        } else {
          setSubmissionError("Eitthvað fór úrskeiðis. Vinsamlegast reyndu aftur síðar.");
        }
        setSubmissionMessage(null);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmissionError("Eitthvað fór úrskeiðis. Vinsamlegast reyndu aftur síðar.");
      setSubmissionMessage(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative bg-background min-h-screen w-full overflow-x-hidden">
      <div className="absolute inset-0 pointer-events-none page-glow"></div>
      <div className="relative z-10 w-full">
      <Navigation />
      
      <main className="overflow-x-hidden">
        {/* Signup Form Section */}
        <section className="pt-32 pb-20 px-4 overflow-x-hidden">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-black mb-4 font-display">
                <span className="text-primary">Skráðu þig hér</span>
              </h2>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                Fylltu út upplýsingarnar hér að neðan og við sendum þér allt sem þú þarft til að byrja strax.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Card className="bg-card/60 backdrop-blur border border-border/20">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Skráning</CardTitle>
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
                        name="nafn"
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
                        name="netfang"
                        type="email"
                        placeholder="Netfang"
                        required
                        className="bg-background/60 border-border/30"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-phone" className="text-foreground">
                        Símanúmer *
                      </Label>
                      <Input
                        id="signup-phone"
                        name="simanumer"
                        type="tel"
                        placeholder="Símanúmer"
                        required
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
                        name="thjonusta"
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
                          <SelectItem value="fjar">
                            Fjarþjálfun <span className="text-foreground/50">- 24.990 kr. /á mánuði</span>
                          </SelectItem>
                          <SelectItem value="tilbuin">
                            Tilbúið prógram <span className="text-foreground/50">- 7.990 kr. /á mánuði</span>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {programType === "tilbuin" && (
                      <div className="space-y-2 animate-fade-in">
                        <Label className="text-foreground">
                          Veldu tilbúið prógram *
                        </Label>
                        <Select
                          name="tilbuidProgram"
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
                            <SelectItem value="melt-mode">Melt Mode</SelectItem>
                            <SelectItem value="stronger-bigger">Stronger & Bigger</SelectItem>
                            <SelectItem value="booty-builder">Booty Builder</SelectItem>
                            <SelectItem value="endurance">Endurance</SelectItem>
                            <SelectItem value="the-runner">The Runner</SelectItem>
                            <SelectItem value="homebody">Homebody</SelectItem>
                            <SelectItem value="begin-now">Begin NOW</SelectItem>
                            <SelectItem value="busy-bee">Busy Bee</SelectItem>
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
                        name="markmid"
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
        </section>
      </main>

      <Footer />
      </div>
    </div>
  );
};

export default Signup;

