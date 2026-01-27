import { FormEvent, useState, useEffect } from "react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Tilbuid25 = () => {
  const [prebuiltPlan, setPrebuiltPlan] = useState<string>("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState<string | null>(null);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [currentProgramIndex, setCurrentProgramIndex] = useState<number>(0);

  // Program list in order
  const programs = [
    { value: "booty-builder", name: "Booty Builder", image: "/tilbuid 1.png" },
    { value: "melt-mode", name: "Melt Mode", image: "/tilbuid 2.png" },
    { value: "homebody", name: "Homebody", image: "/tilbuid 3.png" },
    { value: "endurance", name: "Endurance", image: "/tilbuid 4.png" },
    { value: "stronger-bigger", name: "Stronger & Bigger", image: "/tilbuid 5.png" },
    { value: "the-runner", name: "The Runner", image: "/tilbuid 6.png" },
    { value: "busy-bee", name: "Busy Bee", image: "/tilbuid 7.png" },
    { value: "begin-now", name: "Begin NOW", image: "/tilbuid 8.png" }
  ];

  const currentProgram = programs[currentProgramIndex];
  const originalPrice = 7990;
  const discountPercent = 25;
  const discountedPrice = Math.round(originalPrice * (1 - discountPercent / 100));


  const handleNextProgram = () => {
    setCurrentProgramIndex((prev) => {
      const newIndex = prev === programs.length - 1 ? 0 : prev + 1;
      setPrebuiltPlan(programs[newIndex].value);
      return newIndex;
    });
  };

  const handlePreviousProgram = () => {
    setCurrentProgramIndex((prev) => {
      const newIndex = prev === 0 ? programs.length - 1 : prev - 1;
      setPrebuiltPlan(programs[newIndex].value);
      return newIndex;
    });
  };

  // Auto-select program on mount
  useEffect(() => {
    if (!prebuiltPlan) {
      setPrebuiltPlan(currentProgram.value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const selectedPrebuilt = (formData.get("tilbuidProgram") as string) || "";

    if (!selectedPrebuilt) {
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

    // Set service to "tilbuin" for this landing page
    formData.set("thjonusta", "tilbuin");
    formData.set("tilbuidProgram", selectedPrebuilt);
    formData.set("skilmalaSamthykkt", termsAccepted ? "yes" : "no");

    try {
      const response = await fetch("https://usebasin.com/f/57be82c478d8", {
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
        setPrebuiltPlan("");
        setTermsAccepted(false);
        setSubmissionMessage("Takk fyrir! Við höfum móttekið skráningu þína og munum hafa samband við þig fljótlega.");
        setSubmissionError(null);
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
    <div className="min-h-screen bg-background w-full overflow-x-hidden relative">
      <div className="absolute inset-0 pointer-events-none page-glow"></div>
      <div className="relative z-10">
      <SEO
        title="Tilbúið prógram - SARAFIT"
        description="Aðgangur að appi og tilbúnu prógrami án þjálfunar."
        url="https://sarafit.is/tilbuid25"
      />
      
      <main className="min-h-screen flex flex-col-reverse lg:flex-row">
        {/* Right Side - Signup Form (shows first on mobile) */}
        <div className="lg:w-1/2 flex items-center justify-center p-8 md:p-12 lg:p-16 order-2 lg:order-2">
          <Card className="bg-card/60 backdrop-blur border border-border/20 max-w-lg w-full shadow-xl">
            <CardContent className="p-6 md:p-8">
              {/* Pricing Header */}
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-black mb-4 font-display">
                  <span className="text-foreground">Tilbúið</span>{" "}
                  <span className="text-primary">prógram</span>
                </h2>
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-3 flex-wrap justify-center">
                    <span className="text-lg md:text-xl text-foreground/50 line-through">
                      {originalPrice.toLocaleString('is-IS')} kr.
                    </span>
                    <span className="text-xl md:text-2xl font-bold text-primary">
                      {discountedPrice.toLocaleString('is-IS')} kr.
                    </span>
                    <span className="text-base md:text-lg text-foreground/70 font-semibold">
                      /á mánuði
                    </span>
                  </div>
                  <div className="text-xl md:text-2xl text-primary font-semibold">
                    {discountPercent}% afsláttur
                  </div>
                </div>
              </div>

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

                <form className="space-y-5" onSubmit={handleFormSubmit} noValidate>
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
                    <Label className="text-foreground">
                      Veldu prógram *
                    </Label>
                    <Select
                      name="tilbuidProgram"
                      value={prebuiltPlan || currentProgram.value}
                      onValueChange={(value) => {
                        setPrebuiltPlan(value);
                        setSubmissionError(null);
                        setSubmissionMessage(null);
                        // Update image index when program is selected from dropdown
                        const index = programs.findIndex(p => p.value === value);
                        if (index !== -1) {
                          setCurrentProgramIndex(index);
                        }
                      }}
                    >
                      <SelectTrigger className="bg-background/60 border-border/30">
                        <SelectValue placeholder="Veldu prógram" />
                      </SelectTrigger>
                      <SelectContent>
                        {programs.map((program) => (
                          <SelectItem key={program.value} value={program.value}>
                            {program.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {prebuiltPlan && (
                      <p className="text-sm text-foreground/70 mt-1">
                        Valið: {programs.find(p => p.value === prebuiltPlan)?.name}
                      </p>
                    )}
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
                    <Label htmlFor="signup-terms" className="text-sm text-foreground/70 leading-relaxed">
                      Ég samþykki að Sarafit hafi samband við mig og hef lesið persónuverndarstefnu. *
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

        {/* Left Side - Photos (shows second on mobile) */}
        <div className="lg:w-1/2 flex items-center justify-center p-8 md:p-12 lg:p-16 bg-muted/20 order-1 lg:order-1">
          <div className="w-full max-w-2xl space-y-8">
            {/* Program Image */}
            <div className="flex flex-col items-center">
              <div className="w-full">
                <img 
                  src={currentProgram.image} 
                  alt={currentProgram.name} 
                  className="rounded-lg object-contain w-full h-auto max-h-[500px] md:max-h-[600px] shadow-xl"
                />
              </div>
              
              {/* Navigation arrows */}
              <div className="flex items-center justify-center gap-4 mt-6">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={handlePreviousProgram}
                  className="rounded-full h-12 w-12"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                
                <span className="text-sm md:text-base text-foreground/70 font-medium min-w-[120px] text-center">
                  {currentProgram.name}
                </span>
                
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={handleNextProgram}
                  className="rounded-full h-12 w-12"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      </div>
    </div>
  );
};

export default Tilbuid25;
