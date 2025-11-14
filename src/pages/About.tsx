import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useNavigate, useLocation } from "react-router-dom";
import { scrollToSignupSection } from "@/lib/scroll-to-signup";

const About = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignupClick = () => {
    scrollToSignupSection(navigate, location.pathname);
  };

  const faqs = [
    {
      question: "Þarf ég að telja kaloríur í fjarþjálfun?",
      answer: "Nei það er ekki nauðsynlegt að telja kaloríur í fjarþjálfun hjá SARAFIT. Að telja kaloríur er mjög mælanleg leið til að vera viss um að ná ákveðnu markmiði á ákveðnum tíma og öllum er velkomið að prófa í fjarþjálfun en það er alls ekki nauðsynlegt og við vinnum 100% í kringum þínar þarfir."
    },
    {
      question: "Hvað gerir þjálfun hjá SARAFIT öðruvísi en aðrar þjálfanir?",
      answer: "Allir fá alveg sérhannað prógram sem hentar þeim 100% - Hvernig vinnu þú ert í, hvernig lífið þitt er utan hreyfingu, meiðsli og margt annað spilar stóran part í því að fá prógram sem þú getur haldið sig við til lengri tíma. Þjálfunin er mjög persónuleg og þú hefur aðgang að þjálfaranum 24/7 í gegnum spjallþráðinn í appinu."
    },
    {
      question: "Er einhver binditími eða skuldbinding?",
      answer: "Nei! Engin binditími eða skuldbinding. Ég gef þér alla mína þekkingingu og leiðbeini þér hvernig þú getur náð þínu markmiði á þeim tíma sem þú vilt ná því - það er svo alveg upp að þér komið að standa við það og auðvitað ef þetta er ekki rétti tíminn fyrir þig þá hefur þú tök á því að hætta."
    },
    {
      question: "Fylgir matarprógram með þjálfun?",
      answer: "Þú færð ekki matarprógram í fjarþjálfun. Næringarþjálfunin byggir ofan á núverandi matarvenjur og þú færð fagmannlega leiðsögn sem kennir þér sjálf að byggja upp góðar venjur með matnum sem þú ert nú þegar að borða."
    },
    {
      question: "Hversu oft heyri ég í þjálfaranum?",
      answer: "Guðrún er til staðar 24/7 í spjallþræðinum í appinu svo þú getur sent á hana hvenær sem þér hentar. Það eru einnig vikulega check ins þar sem Guðrún tékkar á þér í spjallþræðinum og svo eru mánaðarleg árangurs check in líka."
    },
    {
      question: "Þarf ég að vera á einhverju sérstöku getustigi?",
      answer: "Nei, Guðrún gerir fyrir þig prógram sem hentar alveg þínum markmiðum og sem passa alveg við þitt getustig - sama hvort þú sért að byrja eða hvort þú sért með nokkra ára reynslu en vantar stuðning til að ná einhverju sérstöku markmiði."
    },
    {
      question: "Hversu löng er þjálfunin?",
      answer: "Þú ræður lengdinni alveg sjálf og það fer mjög mikið eftir því hvert markmiðið þitt er, hversu hratt þú vilt ná því og hversu vel þú fylgir planinu og þjálfuninni."
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
    <div className="min-h-screen bg-background page-glow" style={{ overflowY: 'clip' }}>
      <SEO
        title="Um mig - Guðrún Sara"
        description="Með yfir fjagra ára reynslu í þjálfun hjálpa ég bæði byrjendum og íþróttafólki að ná raunverulegum árangri. Persónuleg þjálfun sem hentar þínu lífi."
        url="https://sarafit.is/about"
        keywords="Guðrún Sara, þjálfari, fjarþjálfun, SARAFIT, um mig, reynsla"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-12 text-center font-display">
            <span className="text-primary">Um</span>{" "}
            <span className="text-foreground">SARAFIT</span>
          </h1>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Photo on the left */}
            <div className="order-2 lg:order-1 overflow-hidden rounded-2xl shadow-lg aspect-square">
              <img 
                src="/DSC02083.JPG" 
                alt="Guðrún Sara" 
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Text on the right */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-black mb-6 font-display">
                <span className="text-foreground">Guðrún </span>
                <span className="text-primary">Sara</span>
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed font-sans">
                Með yfir fjagra ára reynslu í þjálfun hef ég einbeitt mér að því að hjálpa bæði byrjendum og íþróttafólki að ná raunverulegum árangri. Ég vinn út frá nýjustu aðferðum og rannsóknum, því mér finnst mikilvægt að fylgja því sem virkar í raun og veru – ekki skyndilausnum eða trendum sem einhver úti í heimi bjó til af því það hljómaði vel. Markmiðið mitt er að bjóða upp á þjálfun sem er sniðin að þér, styður við þitt líf – og skilar árangri sem endist.
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
              <span className="text-foreground">Algengar</span>{" "}
              <span className="text-primary">spurningar</span>
            </h2>
            <p className="text-lg text-foreground/80 font-sans">
              Þú getur fundið algengar spurningar hér fyrir neðan um þjálfun hjá sarafit.
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
              <span className="text-foreground">Hafa</span>{" "}
              <span className="text-primary">samband</span>
            </h2>
            <p className="text-lg text-foreground/80 font-sans">
              ekki hika við að hafa samband ef þú ert með einhverjar spurningar!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-primary mb-4 flex justify-center">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-foreground mb-2 font-sans">Email</h3>
              <p className="text-foreground/80 text-sm font-sans">sara@sarafit.is</p>
            </div>

            <div className="text-center">
              <div className="text-primary mb-4 flex justify-center">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-foreground mb-2 font-sans">Staðsetning</h3>
              <p className="text-foreground/80 text-sm font-sans">Online worldwide</p>
            </div>

            <div className="text-center">
              <div className="text-primary mb-4 flex justify-center">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-foreground mb-2 font-sans">Instagram DM</h3>
              <p className="text-foreground/80 text-sm font-sans">@gudrunsaraxo</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 font-display">
            <span className="text-foreground">Ertu tilbúin að taka</span>{" "}
            <span className="text-primary">fyrsta skrefið?</span>
          </h2>
          
          <p className="text-lg text-foreground/80 mb-12 leading-relaxed font-sans">
            Vertu partur af fleiri en hundrað ánægðum sterkum konum sem hafa skráð sig í þjálfun hjá SARAFIT.
          </p>

          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-black text-xl px-16 py-8 rounded-full shadow-lg hover:shadow-primary/50 transition-all hover:scale-105"
            onClick={handleSignupClick}
          >
            Byrjaðu í dag
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
