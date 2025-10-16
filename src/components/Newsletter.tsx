import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="py-16 px-8 relative overflow-hidden">
      {/* Pink glow decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-[10%] w-[500px] h-[500px] rounded-full bg-primary/15 blur-[120px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-[10%] w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px] -translate-y-1/2" />
      </div>

      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        <h3 className="text-2xl md:text-3xl font-black mb-4">
          Get Your <span className="text-primary">free training</span> & Exclusive bonuses now
        </h3>
        <p className="text-foreground/70 mb-6">
          Just add your info here and get access to the free training & your bonuses!
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="bg-secondary border-border flex-1"
          />
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8">
            GET ACCESS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
