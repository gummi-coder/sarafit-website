import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      text: "WarriorBabe has taken the guesswork out weight loss and strength building. Instead of taking time to build my own workouts and learn how to adjust my diet, I instead have a coach who helps me, provides feedback, and keeps me accountable. The results have been incredible in just my first 4 months. I am consistently building muscle, losing weight, increasing my endurance, and regaining energy. The program is sustainable, I am eating my favorite foods, and the amount of time spent in workouts easily fits into my schedule.",
      author: "Karen C.",
      highlight: "FitLife took out the guesswork",
    },
    {
      text: "They follow through on what they promise—education, nutrition and workout program to create a healthy and sustainable lifestyle. As a woman with hormone changes they knew exactly what to focus on, what coach to match me with and I started seeing results almost immediately. The support you receive is unsurpassed. Educated coaches and a community to help support you as well. Highly recommend!",
      author: "Melisa S.",
      highlight: "Outstanding and solid program",
    },
    {
      text: "You have actual one-on-one sessions with your coach, your workouts are tailored to you, and you are supported and encouraged the whole journey. It teaches you reasonable expectations, it heals your metabolism, and makes you stronger. If you are consistent and do the work, it works.",
      author: "Layla S.",
      highlight: "Real 1:1 coaching, real results",
    },
    {
      text: "I'm 60 years old and this is the first program that has really helped me make changes since menopause. They treat their clients like family. You're able to communicate with your coach daily, and the diet is just counting macros. You pick what goes into your body based on the science.",
      author: "Yvonne R.",
      highlight: "This program really works, even post-menopause",
    },
    {
      text: "Adding FitLife Elite to my life added the missing piece(s)—nutrition, coaching, and accountability. Having a coach to guide me through workouts and teach me how to follow macronutrients has been the missing link. My body composition, appearance and confidence have improved significantly, and most importantly, my overall lifestyle and eating habits have changed in a way that I can maintain for life.",
      author: "Lisa F.",
      highlight: "Life-changing results I can maintain",
    },
    {
      text: "This has been the most incredible journey! Best decision I ever made, for myself was to get a coach inside this program and completely transform my body in perimenopause when I didn't think it was possible. The support, the customization, and overall the entire journey has been life-changing!",
      author: "Shannon P.",
      highlight: "Best decision I ever made",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-primary text-lg font-bold mb-4">Read Client Stories</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-primary">4.9/5 Stars</span> from <span className="text-primary">1,500+ reviews</span>
          </h2>
          <p className="text-xl text-foreground/80">
            Read why thousands of clients love FitLife Elite and how it helped them get toned & feel confident in their skin!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-star text-star" />
                  ))}
                </div>
                <h3 className="font-bold text-lg mb-3">{testimonial.highlight}</h3>
                <p className="text-foreground/80 text-sm mb-4 line-clamp-6">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-primary">{testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-16">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 py-6 rounded-full text-lg">
            See all success stories
          </Button>
        </div>

        <div className="text-center py-12 border-y border-border">
          <p className="text-2xl md:text-3xl font-bold mb-4">
            "joining FitLife Elite has been the best gift to me, and everyone around me. 
            <br />
            <span className="text-primary">I feel so much younger, energetic & stronger"</span>
          </p>
          <p className="text-foreground/60">- FitLife Elite Member Jill</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
