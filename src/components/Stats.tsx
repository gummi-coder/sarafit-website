import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const Stats = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Get Toned & Feel Confident like{" "}
            <span className="text-primary">21,817+ other members</span>
          </h2>
          <p className="text-xl text-foreground/80">
            FitLife Elite is the Biggest 1:1 online fitness and nutrition coaching company For Women in the U.S.
          </p>
        </div>

        {/* Video Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-secondary border-2 border-primary/20 shadow-xl group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary to-background flex items-center justify-center">
              <Button
                size="lg"
                className="relative bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-20 h-20 group-hover:scale-110 transition-transform"
              >
                <Play className="w-10 h-10 fill-current" />
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-secondary/50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            The FitLife Method Is The Ultimate Metabolic Boosting, Body Toning System For Women
          </h3>
          <p className="text-lg text-foreground/80 text-center mb-8">
            Works Regardless of Background and Experience.
          </p>
          <div className="text-center">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-12 py-7 rounded-full text-lg">
              APPLY NOW
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
