import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, TrendingUp, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const About = () => {
  const stats = [
    { number: "5,000+", label: "Men Transformed", icon: <Users className="w-8 h-8" /> },
    { number: "15+", label: "GF Ambassadors", icon: <Award className="w-8 h-8" /> },
    { number: "50+", label: "GF Team Members", icon: <Users className="w-8 h-8" /> },
  ];

  const faqs = [
    {
      question: "How do I get started with Sarafit?",
      answer: "Getting started is easy! Simply click the 'APPLY NOW' button on our website, fill out the application form, and our team will contact you within 24 hours to discuss your goals and match you with the perfect coach."
    },
    {
      question: "What makes Sarafit different from other fitness programs?",
      answer: "Sarafit offers personalized 1-on-1 coaching, custom nutrition plans, and a supportive community. Our coaches are certified professionals who work with you to create a sustainable plan that fits your lifestyle and goals."
    },
    {
      question: "How much does the program cost?",
      answer: "Our pricing varies depending on the program you choose. We offer different packages to fit various budgets and goals. Contact us for a personalized quote based on your specific needs."
    },
    {
      question: "Do I need any special equipment?",
      answer: "No special equipment is required! Our programs are designed to work with whatever you have available, whether that's a full gym, home equipment, or just bodyweight exercises. Your coach will adapt your workouts to your available resources."
    },
    {
      question: "How often will I communicate with my coach?",
      answer: "You'll have regular check-ins with your coach, typically weekly or bi-weekly depending on your program. Plus, you'll have 24/7 support through our app, so you can ask questions anytime."
    },
    {
      question: "What if I'm a complete beginner?",
      answer: "Perfect! Our programs are designed for all fitness levels, from complete beginners to advanced athletes. Your coach will start where you are and progress you at the right pace for your body and goals."
    },
    {
      question: "Can I pause or cancel my membership?",
      answer: "Yes, we offer flexible membership options. You can pause your membership for up to 3 months or cancel with 30 days notice. We want you to succeed, so we'll work with you to find the best solution."
    },
    {
      question: "Do you offer nutrition coaching?",
      answer: "Absolutely! Nutrition is a core part of our program. Your coach will create a personalized nutrition plan based on your goals, preferences, and lifestyle. We focus on sustainable habits that you can maintain long-term."
    }
  ];

  const timeline = [
    {
      year: "2016",
      title: "The Garage Gym Era",
      description: "A bold vision started. While working in the ER and training for a pro bodybuilding show, GF started coaching coworkers out of a garage. This early hands-on experience laid the foundation for what would become a transformative approach to men's fitness — rooted in strength, science, and empowerment."
    },
    {
      year: "2017",
      title: "Blending Online and In-Person Expertise",
      description: "As demand grew, GF evolved into a hybrid model, combining in-person coaching with an online presence. This marked the start of delivering expert-level fitness and nutrition strategies on a larger scale, helping more men achieve their goals with proven results."
    },
    {
      year: "2018",
      title: "The Birth of Sarafit",
      description: "The Sarafit Blueprint was born, setting a new standard in fitness education. This program empowered men with the tools and knowledge to transform their health for life. The establishment of Sarafit signaled the start of a movement, establishing expertise in personalized fitness solutions for men."
    },
    {
      year: "2019",
      title: "Innovation and Experimentation",
      description: "Sarafit solidified its position as a leader in fitness education, testing and refining new programs to ensure the best client outcomes with unmatched support in the space. Through strategic innovation, the company expanded its reach and impact while maintaining its core commitment to delivering unmatched expertise."
    },
    {
      year: "2020",
      title: "Thriving Through Adversity",
      description: "As the world faced unprecedented challenges, Sarafit stepped up to deliver strength and stability to its growing community. The release of version 2 of the Sarafit Blueprint provided men with actionable strategies to stay consistent and healthy, even at home. This year solidified the GF Method as an essential resource for men navigating their health journeys."
    },
    {
      year: "2021",
      title: "Elevating the Client Experience",
      description: "This year, Sarafit introduced its VIP Coaching Program, providing an elite 1:1 coaching experience based on the GF Method. We started to welcome the best of the best personal trainers to our team. The program expanded the brand's ability to deliver tailored solutions for men navigating life transitions."
    },
    {
      year: "2022",
      title: "Redefining Fitness Education",
      description: "The release of Sarafit Blueprint version 3 showcased our commitment to delivering cutting-edge education in fitness and nutrition. The GF Method was integrated into high-quality video content and expanded onto YouTube, growing Sarafit's reach and establishing it as a trusted authority for men."
    },
    {
      year: "2023",
      title: "Breaking Records, Changing Lives",
      description: "Sarafit launched The GF Hour podcast, bringing the GF Method to a larger audience with expert advice on fitness, nutrition, and mindset. The podcast stayed in the top 10 fitness podcasts and featured big-name guests and leading experts in the space. The VIP program was revamped to set a new standard for personalized coaching."
    },
    {
      year: "2024",
      title: "Revolutionizing Men's Health",
      description: "Sarafit partnered with leading health companies to integrate advanced insights into its programs, creating a truly personalized approach to fitness and nutrition. This partnership brought a new dimension to the GF Method, addressing every facet of a man's health. With its innovative strategies and industry-leading products, Sarafit continues to transform lives and lead the fitness space for men."
    }
  ];

  return (
    <div className="min-h-screen bg-background page-glow">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 font-display">
            <span className="text-primary">About</span>{" "}
            <span className="text-foreground">Sarafit</span>
          </h1>
          
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto mb-12 leading-relaxed">
            Sarafit is a results-driven company empowering men through personalized fitness, nutrition, and education. 
            With online programs, world-class coaching, and community support, we help men take control of their health 
            and achieve life-changing transformations.
          </p>

          <p className="text-lg text-foreground/70 max-w-4xl mx-auto mb-16 leading-relaxed">
            Founded by GF and later joined by partners, Sarafit has grown into a movement trusted by thousands of men worldwide. 
            We are on a mission to help men regain their personal power and feel confident in their skin.
          </p>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="text-primary mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-black text-primary mb-2">{stat.number}</div>
                <div className="text-foreground/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-6 font-display">
                <span className="text-foreground">Our Mission</span>
              </h2>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Since we started in 2016, our mission has been to transform lives.
              </p>
              <p className="text-xl text-foreground/90 font-bold mb-8">
                <span className="text-primary">Our goal is to empower men</span>{" "}
                <span className="text-foreground">to build strength, confidence, and</span>{" "}
                <span className="text-foreground">a body they love at any</span>{" "}
                <span className="text-foreground">stage of life.</span>
              </p>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                <span className="font-bold text-foreground">To become the ultimate solution for men seeking strength, confidence, and lasting transformation.</span>
              </p>
              <p className="text-foreground/70 mt-4">
                Imagine everything you need — fitness, nutrition, education, and support — under one roof, tailored just for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 font-display">
              <span className="text-foreground">Frequently Asked</span>{" "}
              <span className="text-primary">Questions</span>
            </h2>
            <p className="text-lg text-foreground/80">
              Find answers to the most common questions about Sarafit programs and services.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl">
                <AccordionTrigger className="text-left px-6 py-4 hover:no-underline">
                  <span className="text-lg font-semibold text-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-foreground/80 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 font-display">
              <span className="text-foreground">Contact</span>{" "}
              <span className="text-primary">Information</span>
            </h2>
            <p className="text-lg text-foreground/80">
              Reach out anytime—I'm here to help you get started and stay on track.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-primary mb-4 flex justify-center">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Email</h3>
              <p className="text-foreground/80 text-sm">support@sarafit.com</p>
              <p className="text-foreground/60 text-xs">We respond within 24 hours</p>
            </div>

            <div className="text-center">
              <div className="text-primary mb-4 flex justify-center">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Phone</h3>
              <p className="text-foreground/80 text-sm">+1 (555) 123-4567</p>
              <p className="text-foreground/60 text-xs">Mon–Fri 9 AM – 6 PM EST</p>
            </div>

            <div className="text-center">
              <div className="text-primary mb-4 flex justify-center">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Location</h3>
              <p className="text-foreground/80 text-sm">Online Worldwide</p>
              <p className="text-foreground/60 text-xs">Serving clients globally</p>
            </div>

            <div className="text-center">
              <div className="text-primary mb-4 flex justify-center">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Live Chat</h3>
              <p className="text-foreground/80 text-sm">Available on our website</p>
              <p className="text-foreground/60 text-xs">Get instant answers to your questions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 font-display">
            <span className="text-foreground">Ready to Start Your</span>{" "}
            <span className="text-primary">Transformation Journey?</span>
          </h2>
          
          <p className="text-lg text-foreground/80 mb-12 leading-relaxed">
            Join thousands of men who have already transformed their lives with Sarafit. 
            Your journey to a stronger, more confident you starts today.
          </p>

          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-black text-xl px-16 py-8 rounded-full shadow-lg hover:shadow-primary/50 transition-all hover:scale-105"
          >
            START YOUR JOURNEY
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
