import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const sections = [
  {
    id: "terms",
    title: "Skilmálar SARAFIT",
    items: [
      {
        heading: "1. Almennt",
        body: [
          "SARAFIT er í eigu Sarafit ehf kt. 640124-0750. Skráning í áskrift eða kaup á tilbúnu æfingarprógrami, fjarþjálfun, næringarráðgjöf, hóp áskorunum, eða annarri þjónustu hjá SARAFIT er háð eftirfarandi skilmálum.",
          "Skilmálar þessir kveða á um réttindi og skyldur viðskiptavinar og eru kaupendur hvattir til að lesa þá vandlega yfir áður en greiðsla fer fram. Skilmálar gilda allan þann tíma sem áskrift eða þjónusta er virk.",
          "Vinsamlegast athugið að sé kaupandi undir 18 ára aldri er þess krafist að forráðamenn hans samþykki skráningu. Með kaupum á hvers kyns þjónustu eða skráningu í áskrift samþykkir kaupandi eftirfarandi skilmála."
        ]
      },
      {
        heading: "2. Skyldur SARAFIT",
        body: [
          "SARAFIT skuldbindur sig til að hafa aðgang að SARAFIT appinu og fjarþjónustu virkan meðan áskrift eða þjónusta stendur. Ef um námskeið eða hóp áskorun er að ræða, þá fer hún aðeins fram ef nægur fjöldi þátttakenda skráir sig."
        ]
      },
      {
        heading: "3. Skyldur iðkanda",
        body: [
          "Með kaupum á æfingarprógrami, fjarþjálfun, áskrift eða þátttöku í námskeiði staðfestir viðkomandi að honum sé óhætt að stunda líkamsrækt og að hann stundi æfingar á eigin ábyrgð.",
          "SARAFIT ber ekki ábyrgð á slysum eða meiðslum sem kunna að hljótast af æfingum eða ráðleggingum. Allar æfingar og næringar leiðbeiningar eru framkvæmdar á eigin ábyrgð. Iðkandi er hvattur til að hlusta á líkama sinn og hætta æfingu sem veldur óþægindum.",
          "Ef iðkandi hefur sögu um meiðsl eða heilsufarsvandamál er hann hvattur til að ráðfæra sig við lækni áður en hann hefst handa. SARAFIT ábyrgist ekki ákveðinn árangur (fitutap, vöðvauppbyggingu, þolaukningu o.s.frv.). Árangur er háður því hversu vel iðkandi fylgir æfingaplani, næringarráðgjöf og öðrum leiðbeiningum."
        ]
      },
      {
        heading: "4. Áskriftarsamningur",
        subHeading: "4.1 Greiðslur, binding og uppsögn",
        body: [
          "Áskrift er ótímabundin og innheimt mánaðarlega í gegnum Payday. Kaupandi getur sagt áskrift upp með 30 daga fyrirvara. Áskriftargjöld endurgreiðast ekki eftir að nýr áskriftar mánuður hefur hafist. Uppsagnir skulu berast skriflega á sara@sarafit.is eða í gegnum spjallþráðinn í appinu SARAFIT."
        ]
      },
      {
        heading: "",
        subHeading: "4.2 Áskriftargjald",
        body: [
          "Eftirfarandi gjöld eiga við:",
          "19.990 kr. á mánuði: Full fjarþjálfun, sérhannað æfingaprógram, næringarráðgjöf og aðgangur að SARAFIT appinu.",
          "7.990 kr. á mánuði: Tilbúið æfingaprógram, aðgangur að SARAFIT appinu.",
          "SARAFIT áskilur sér rétt til breytinga á verði."
        ]
      },
      {
        heading: "5. Aðgangur að þjónustu og höfundaréttur",
        body: [
          "Aðgangur að SARAFIT appinu er persónulegur og eingöngu ætlaður þeim sem greiðir fyrir þjónustuna. Allt efni í SARAFIT appinu, á vefsíðu og í öðrum miðlum (æfingaplön, myndbönd, næringarefni, fræðsluefni o.fl.) er í eigu SARAFIT og ætlað til einkanota viðskiptavinar. Óheimilt er að deila aðgangi, afrita, dreifa eða deila efni með öðrum nema með skriflegu samþykki."
        ]
      },
      {
        heading: "7. Greiðslur",
        body: [
          "Öll gjöld eru í ISK og greiðslur fara fram í gegnum Payday. Viðskiptavinur fær reikning sendan í heimabanka og fær tölvupóst þegar reikningur hefur verið sendur."
        ]
      },
      {
        heading: "8. Skilaréttur og endurgreiðsla",
        body: [
          "Æfingaprógröm og áskriftir fást ekki endurgreidd þegar þjónusta hefur hafist. Eftir að greiðsluseðill hefur verið sendur út í tengslum við áskrift er ekki hægt að fá endurgreitt."
        ]
      },
      {
        heading: "9. Force majeure",
        body: [
          "Á við um truflun á þjónustu SARAFIT vegna ytri aðstæðna sem ekki eru á ábyrgð fyrirtækisins, þ.e. aðstæðna sem eru ófyrirséðar og ekki hægt að koma í veg fyrir (t.d. bilanir á netþjónum, rafmagnsleysi eða náttúruhamfarir).",
          "Ekki er hægt að fá endurgreitt fyrir þegar hafið áskriftar tímabil, en viðskiptavinur verður ekki krafinn um greiðslu fyrir næstu tímabil þar til ástandið er liðið hjá."
        ]
      },
      {
        heading: "10. Lög og varnarþing",
        body: [
          "Skilmála þessa ber að túlka í samræmi við íslensk lög. Komi upp ágreiningur verður honum vísað til meðferðar hjá íslenskum dómstólum. Heimili og varnarþing SARAFIT er í Reykjavík."
        ]
      },
      {
        heading: "11. Áskilnaður um breytingar",
        body: [
          "SARAFIT áskilur sér rétt til að breyta skilmálum sínum í samræmi við breytingar á lögum, reglum eða starfsemi. Breytingar taka gildi þegar þær hafa verið birtar á heimasíðu SARAFIT."
        ]
      }
    ]
  },
  {
    id: "privacy",
    title: "Persónuverndarstefna",
    items: [
      {
        heading: "1. Almennt",
        body: [
          "SARAFIT leggur mikla áherslu á persónuvernd iðkenda og gætir fyllstu varúðar við meðferð allra persónuupplýsinga. Í persónuverndarstefnu þessari kemur m.a. fram hvaða persónuupplýsinga iðkenda er aflað, með hvaða hætti, í hvaða tilgangi og hvernig þær eru varðveittar.",
          "Iðkanda er skylt að kynna sér persónuverndarstefnu SARAFIT. Með því að kaupa þjónustu, vöru eða skrá persónuupplýsingar hjá SARAFIT er iðkandi að samþykkja skilmála og skilyrði persónuverndarstefnunnar."
        ]
      },
      {
        heading: "2. Persónuverndarlöggjöf",
        body: [
          "Lög um persónuvernd og vinnslu persónuupplýsinga, eins og þau eru á hverjum tíma, gilda um meðferð persónuupplýsinga. Lögin taka m.a. til vinnslu, vörslu og miðlunar persónuupplýsinga.",
          "SARAFIT tryggir að meðferð persónuupplýsinga sé ávallt í samræmi við gildandi lög og reglur um persónuvernd."
        ]
      },
      {
        heading: "3. Ábyrgð",
        body: [
          "SARAFIT ber ábyrgð á skráningu og meðferð persónuupplýsinga í starfsemi sinni. SARAFIT er ábyrgðaraðili þeirra persónuupplýsinga sem fyrirtækinu eru veittar.",
          "Allar fyrirspurnir er varða persónuverndarstefnu fyrirtækisins skulu berast skriflega á netfangið sara@sarafit.is."
        ]
      },
      {
        heading: "4. Söfnun og meðhöndlun persónuupplýsinga",
        subHeading: "4.1 Í hvaða tilgangi?",
        body: [
          "SARAFIT safnar upplýsingum um viðskiptavini og þá birgja sem fyrirtækið á í viðskiptum við. Persónuupplýsingum er safnað til þess að SARAFIT geti veitt sem bestu þjónustu hverju sinni.",
          "Í því felst að veita aðgang að vörum, þjónustu og upplýsingum, tryggja að sú þjónusta sem iðkendum sé veitt sé sniðin að þeirra þörfum, gæta öryggis og miðla til þeirra upplýsingum í markaðslegum tilgangi.",
          "SARAFIT safnar eingöngu þeim upplýsingum sem eru nauðsynlegar til að veita þjónustu. Varðveisla þessi er að fullu í samræmi við gildandi lög og reglur um persónuvernd."
        ]
      },
      {
        heading: "",
        subHeading: "4.2 Hvaða persónuupplýsingar og með hvaða hætti?",
        body: [
          "Kaup á vöru eða þjónustu: Upplýsingar um nafn, kennitölu, símanúmer og netfang eru varðveittar ásamt upplýsingum um þá þjónustu sem keypt er. Allar upplýsingar sem kaupandi skráir með pöntun munu vistast með pöntuninni.",
          "Viðkvæmar persónuupplýsingar: Æfinga- og heilsutengdar upplýsingar, svo sem markmið, æfingasaga, næringarvenjur og líðan, geta komið fram í samtölum, í SARAFIT appinu eða í gegnum Google Meet.",
          "Þessar upplýsingar eru aðeins geymdar með samþykki viðkomandi til að fylgjast með árangri og veita viðeigandi ráðgjöf.",
          "Póstlisti: Við skráningu á póstlista eru varðveittar upplýsingar um netfang. Póstlistinn er notaður til að senda út fræðsluefni, tilboð og upplýsingar tengdar þjónustu SARAFIT. Viðskiptavinur getur afskráð sig hvenær sem er."
        ]
      },
      {
        heading: "5. Miðlun",
        subHeading: "5.1 Almennt",
        body: [
          "SARAFIT miðlar ekki áfram persónuupplýsingum til þriðja aðila nema til þjónustuaðila SARAFIT til að veita iðkanda þá vöru eða þjónustu sem gerður hefur verið samningur um.",
          "Þær upplýsingar eru ekki notaðar í öðrum en upphaflegum tilgangi. Persónuupplýsingarnar eru ekki undir neinum kringumstæðum framseldar eða leigðar.",
          "Payday: Við útgáfu reikninga er persónuupplýsingum (nafn, netfang og greiðsluupplýsingar) deilt með Payday í þeim tilgangi að ganga frá greiðslu og bókhaldi.",
          "SARAFIT app (Kahunas): Þjálfun fer fram í SARAFIT appinu, sem byggir á lausn frá Kahunas. Þar eru persónuupplýsingar varðveittar á öruggum netþjónum sem verndaðir eru með viðeigandi öryggisráðstöfunum.",
          "Calendly og Google Meet: Við bókanir og fjarfundi er notast við Calendly og Google Meet. Þjónustuaðilarnir gæta öryggis í samræmi við evrópsk lög um persónuvernd.",
          "Meta (Facebook/Instagram) auglýsingar: Í markaðslegum tilgangi geta upplýsingar um samskipti og hegðun á samfélagsmiðlum verið nýttar í auglýsingakerfi Meta. Þetta felur ekki í sér miðlun viðkvæmra persónuupplýsinga."
        ]
      },
      {
        heading: "6. Öryggi",
        body: [
          "Öryggi og trúnaður persónuupplýsinga skiptir SARAFIT miklu máli. Því eru gerðar ríkar kröfur um öryggi persónuupplýsinga og aðgangur að þeim er aðgangsstýrður og takmarkaður.",
          "Persónuupplýsingar eru ekki geymdar lengur en nauðsynlegt er og er þeim eytt eftir að þeirra er ekki lengur þörf."
        ]
      },
      {
        heading: "7. Réttur iðkanda",
        body: [
          "Líkt og lög kveða á um á iðkandi m.a. rétt á upplýsingum um hvort verið sé að afla persónuupplýsinga um hann og aðgang að þeim upplýsingum.",
          "Telji iðkandi að meðferð persónuupplýsinga sé ekki í samræmi við lög getur hann sent Persónuvernd kvörtun.",
          "Iðkandi getur hvenær sem er óskað eftir því að persónuupplýsingum um hann sé eytt, þær leiðréttar eða afturkallað samþykki um vinnslu persónuupplýsinga með því að senda tölvupóst á sara@sarafit.is."
        ]
      },
      {
        heading: "8. Áskilnaður um breytingar",
        body: [
          "SARAFIT áskilur sér rétt til þess að breyta persónuverndarstefnu sinni í samræmi við laga- og/eða reglugerðarbreytingar eða vegna þess hvernig fyrirtækið vinnur með persónuupplýsingar.",
          "Taka þær breytingar gildi þegar uppfærð persónuverndarstefna hefur verið birt á heimasíðu SARAFIT.",
          "Með því að halda áfram í greiðsluferli samþykkir kaupandi skilmála og persónuverndarstefnu SARAFIT."
        ]
      }
    ]
  }
];

const Terms = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-32 pb-24 px-4">
        <div className="mx-auto max-w-5xl">
          <header className="mb-16 text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-black font-display">
              Skilmálar & Persónuvernd
            </h1>
            <p className="text-foreground/70 max-w-2xl mx-auto font-sans">
              Hér finnur þú allar upplýsingar um áskriftarskilmála, þjónustu og meðferð persónuupplýsinga hjá Sarafit.
            </p>
          </header>

          <div className="space-y-16">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="bg-black/30 border border-white/10 rounded-3xl p-8 md:p-12 shadow-lg shadow-primary/10"
              >
                <h2 className="text-2xl md:text-3xl font-display font-black mb-6 text-primary">
                  {section.title}
                </h2>

                <div className="space-y-10">
                  {section.items.map((item, index) => (
                    <div key={`${item.heading}-${index}`} className="space-y-4">
                      {item.heading && (
                        <h3 className="text-xl md:text-2xl font-bold text-foreground font-display">
                          {item.heading}
                        </h3>
                      )}
                      {item.subHeading && (
                        <h4 className="text-lg md:text-xl font-semibold text-foreground/80 font-display">
                          {item.subHeading}
                        </h4>
                      )}
                      <div className="space-y-3 text-sm md:text-base text-foreground/75 leading-relaxed font-sans">
                        {item.body.map((paragraph, idx) => (
                          <p key={idx}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;

