import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
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

  return (
    <section className="py-20 px-4 overflow-x-hidden">
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
  );
};

export default FAQ;

