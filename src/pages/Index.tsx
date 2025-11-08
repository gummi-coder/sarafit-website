import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Transformations from "@/components/Transformations";
import Approach from "@/components/Approach";
import Method from "@/components/Method";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Approach />
      <Method />
      <Testimonials />
      <Pricing />
      <Transformations />
      <Blog />
      <Footer />
    </div>
  );
};

export default Index;
