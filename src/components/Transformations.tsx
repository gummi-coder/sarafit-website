import { Button } from "@/components/ui/button";

const Transformations = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Real Transformations from <span className="text-primary">real women</span>
          </h2>
          <p className="text-xl text-foreground/80">
            We have helped thousands of women get toned and change their body composition.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="aspect-[3/4] bg-secondary rounded-xl overflow-hidden hover:scale-105 transition-transform"
            >
              <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                <span className="text-foreground/40 font-bold">Before/After {i}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 py-6 rounded-full text-lg">
            SEE MORE REVIEWS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Transformations;
