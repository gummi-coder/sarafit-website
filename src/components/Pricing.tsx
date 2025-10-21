import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "SaraFit Basic",
      price: "£299",
      originalPrice: "£599",
      period: "one-time",
      description: "Perfect for getting started with your fitness journey",
      features: [
        "Personalized workout plan",
        "Nutrition guidance",
        "Weekly check-ins",
        "Access to SaraFit community",
        "Mobile app access",
        "Progress tracking"
      ],
      popular: false,
      cta: "GET STARTED"
    },
    {
      name: "SaraFit Premium",
      price: "£499",
      originalPrice: "£999",
      period: "one-time",
      description: "Most popular choice for serious transformation",
      features: [
        "Everything in Basic",
        "1-on-1 coaching calls",
        "Custom meal plans",
        "Priority support",
        "Advanced tracking tools",
        "Exclusive workout library",
        "Monthly progress reviews",
        "Lifetime access"
      ],
      popular: true,
      cta: "JOIN PREMIUM"
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">
            Choose Your <span className="text-primary">Transformation</span>
          </h2>
          <p className="text-xl text-foreground/80 font-sans max-w-3xl mx-auto">
            Get in control of your body with our proven system. No gimmicks, no fad diets. 
            Just sustainable results that last.
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
                  <Star className="w-3 h-3 fill-current" /> Most Popular
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
