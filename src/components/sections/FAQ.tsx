const vragen = [
  {
    vraag: "1. Wat zijn de kosten van een behandeling?",
    antwoord: (
      <ul className="list-disc pl-5 space-y-2">
        <li>De intake duurt 1.5 uur en de behandeling kost €80</li>
        <li>Een sessie kost €60 en duurt 1 uur</li>
      </ul>
    ),
    defaultOpen: true,
  },
  {
    vraag: "2. Vergoeding acupunctuur zorgverzekering",
    antwoord:
      "Acupunctuur wordt door de meeste zorgverzekeraars geheel of gedeeltelijk vergoed vanuit uw aanvullende verzekering. Omdat wij zijn aangesloten bij erkende beroepsverenigingen (zoals de NVA), kunt u de factuur direct indienen. Raadpleeg de polisvoorwaarden van uw eigen verzekeraar voor de exacte vergoeding.",
    defaultOpen: true,
  },
  {
    vraag: "3. Doet acupunctuur pijn?",
    antwoord:
      "Nee, een acupunctuurbehandeling doet over het algemeen geen pijn. De naaldjes die we gebruiken zijn haardun. U voelt wellicht een klein prikje als de naald wordt gezet of een milde tinteling (het zogenaamde 'De Qi' gevoel). Dit is volkomen normaal en geeft aan dat de energie begint te stromen.",
    defaultOpen: true,
  },
  {
    vraag: "4. Hoe werkt acupunctuur?",
    antwoord:
      "Acupunctuur stimuleert het zelfhelend vermogen van uw lichaam. Door strategische punten op de meridianen (energiebanen) aan te prikken, heffen we blokkades op en bevorderen we een vrije stroom van uw levensenergie (Qi). Hierdoor kan uw lichaam weer terugkeren naar de natuurlijke balans.",
    defaultOpen: false,
  },
  {
    vraag: "5. Hoeveel sessies heb ik nodig?",
    antwoord:
      "Dit is afhankelijk van de aard en duur van uw klachten. Bij acute klachten merkt u vaak al na 3 tot 5 sessies aanzienlijk verschil. Voor chronische of langdurige klachten is vaak een wat langer traject nodig. Tijdens uw eerste consult bespreken we altijd een reëel en persoonlijk behandelplan.",
    defaultOpen: false,
  },
  {
    vraag: "6. Kan acupunctuur mij helpen met zowel lichamelijke als geestelijke klachten?",
    antwoord:
      "Absoluut. Binnen de Traditionele Chinese Geneeskunde worden lichaam en geest niet als gescheiden gezien, maar als één verbonden geheel. Fysieke klachten hebben vaak een mentale of emotionele weerslag, en vice versa. We behandelen altijd de totale disbalans, in plaats van slechts een enkel symptoom.",
    defaultOpen: false,
  },
  {
    vraag: "7. Kan acupunctuur elke ziekte oplossen?",
    antwoord:
      "Nee, acupunctuur is geen wondermiddel voor alles. Het is een zeer effectieve methode voor pijnverlichting, stressreductie en het behandelen van diverse chronische aandoeningen, maar het vervangt nooit noodzakelijke medische behandelingen door een arts. Wel is het vaak een uitstekende en complementaire aanvulling op de reguliere zorg.",
    defaultOpen: false,
  },
  {
    vraag: "8. Moet ik me speciaal voorbereiden op een behandeling?",
    antwoord:
      "Draag bij voorkeur comfortabele, loszittende kleding, zodat de acupunctuurpunten (vaak op de onderarmen en onderbenen) makkelijk bereikbaar zijn. Zorg er tevens voor dat u niet met een volledig lege, maar ook niet met een overvolle maag naar de praktijk komt. Het is ook aan te raden om zware fysieke inspanning vlak voor en direct na uw afspraak te vermijden.",
    defaultOpen: false,
  },
  {
    vraag: "9. Zijn er bijwerkingen na een acupunctuurbehandeling?",
    antwoord:
      "Na een behandeling kunt u zich soms even moe, loom of juist heel energiek voelen. Soms kan een klacht kortstondig iets verergeren voordat de werkelijke verbetering intreedt (ook wel een 'beginverergering' genoemd). Dit is een volkomen natuurlijke en onschuldige reactie die aangeeft dat uw lichaam hard aan het werk is met het herstel.",
    defaultOpen: false,
  },
];

export default function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-titel" className="bg-[#FAF8F3] pt-32 pb-32">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2
            id="faq-titel"
            className="md:text-5xl text-4xl font-normal text-[#1F3A36] tracking-tight mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Veelgestelde vragen
          </h2>
          <p className="text-base text-[#1F3A36]/80 max-w-2xl mx-auto font-light leading-relaxed">
            Hier vindt u antwoorden op de meest gestelde vragen over onze behandelingen, tarieven en de werking van acupunctuur.
          </p>
        </div>

        <div className="space-y-4">
          {vragen.map((item) => (
            <details
              key={item.vraag}
              className="group bg-white rounded-xl border border-[#1F3A36]/5 shadow-sm open:bg-[#F2EDE3]/30 transition-colors duration-300"
              open={item.defaultOpen}
            >
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-[#1F3A36] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-2 rounded-xl">
                <span>{item.vraag}</span>
                <span className="transition-transform duration-300 group-open:rotate-180 text-[#8A6B3D]">
                  <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl" />
                </span>
              </summary>
              <div className="text-[#1F3A36]/80 text-sm font-light px-6 pb-6 leading-relaxed">
                {item.antwoord}
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}
