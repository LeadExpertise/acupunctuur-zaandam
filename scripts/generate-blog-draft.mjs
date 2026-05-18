/**
 * Blog Draft Generator — Acupunctuur Zaandam
 *
 * Generates a new blog post draft using the Claude API and saves it to
 * content/blog/ as a JSON file ready for review.
 *
 * Usage:
 *   node scripts/generate-blog-draft.mjs
 *
 * Environment variable required:
 *   ANTHROPIC_API_KEY=sk-ant-...
 *
 * Optional — pick a specific topic by index:
 *   node scripts/generate-blog-draft.mjs --topic 4
 */

import 'dotenv/config'
import Anthropic from "@anthropic-ai/sdk";
import { readFileSync, writeFileSync, readdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const BLOG_DIR = join(ROOT, "content", "blog");

// ---------------------------------------------------------------------------
// Topic bank
// Each entry has a unique slug (used to detect duplicates) and a topic
// description that is passed to Claude as the writing brief.
// ---------------------------------------------------------------------------

const TOPIC_BANK = [
  // — Pijnklachten —
  { slug: "acupunctuur-bij-nekklachten", topic: "Helpt acupunctuur bij nekklachten en nekpijn?", category: "Pijn & Beweging", primaryKlacht: "/klachten/nekklachten" },
  { slug: "acupunctuur-bij-hoofdpijn", topic: "Acupunctuur bij hoofdpijn: wanneer helpt het en wanneer niet?", category: "Hoofd & Zenuwstelsel", primaryKlacht: "/klachten/hoofdpijn" },
  { slug: "acupunctuur-bij-migraine", topic: "Acupunctuur als preventieve behandeling bij migraine", category: "Hoofd & Zenuwstelsel", primaryKlacht: "/klachten/migraine" },
  { slug: "acupunctuur-bij-lage-rugklachten", topic: "Acupunctuur bij lage rugpijn: wat kun je verwachten?", category: "Pijn & Beweging", primaryKlacht: "/klachten/lage-rugklachten" },
  { slug: "acupunctuur-bij-schouderklachten", topic: "Schouderklachten en acupunctuur: van frozen shoulder tot spierspanning", category: "Pijn & Beweging", primaryKlacht: "/klachten/schouderklachten" },
  { slug: "acupunctuur-bij-kniepijn", topic: "Acupunctuur bij kniepijn en artrose van de knie", category: "Pijn & Beweging", primaryKlacht: "/klachten/kniepijn" },
  { slug: "wat-is-ischias", topic: "Wat is ischias en hoe helpt acupunctuur bij ischiasklachten?", category: "Pijn & Beweging", primaryKlacht: "/klachten/ischias" },
  { slug: "acupunctuur-bij-fibromyalgie", topic: "Fibromyalgie en acupunctuur: wat is realistisch te verwachten?", category: "Pijn & Beweging", primaryKlacht: "/klachten/fibromyalgie" },

  // — Stress & Energie —
  { slug: "burn-out-herstel-met-acupunctuur", topic: "Burn-out herstel: hoe acupunctuur bijdraagt aan het herstelproces", category: "Stress & Energie", primaryKlacht: "/klachten/burn-out" },
  { slug: "chronische-vermoeidheid-acupunctuur", topic: "Chronische vermoeidheid en acupunctuur: aanpak van de oorzaak", category: "Stress & Energie", primaryKlacht: "/klachten/chronische-vermoeidheid" },
  { slug: "overprikkeling-rustiger-worden", topic: "Overprikkeling en een druk hoofd: wat kun je zelf doen en hoe helpt acupunctuur?", category: "Stress & Energie", primaryKlacht: "/klachten/overprikkeling" },
  { slug: "angstklachten-acupunctuur", topic: "Acupunctuur bij angstklachten: het zenuwstelsel kalmeren van binnenuit", category: "Stress & Energie", primaryKlacht: "/klachten/angstklachten" },

  // — Slaap —
  { slug: "tips-beter-slapen-zonder-slaapmiddelen", topic: "Beter slapen zonder slaapmiddelen: praktische tips en de rol van acupunctuur", category: "Slaap & Herstel", primaryKlacht: "/klachten/slaapproblemen" },
  { slug: "acupunctuur-bij-slaapproblemen", topic: "Acupunctuur bij slaapproblemen: hoe werkt het op het zenuwstelsel?", category: "Slaap & Herstel", primaryKlacht: "/klachten/slaapproblemen" },

  // — Spijsvertering —
  { slug: "acupunctuur-bij-prikkelbare-darm", topic: "Prikkelbare darm syndroom (PDS) en acupunctuur: wat helpt?", category: "Spijsvertering", primaryKlacht: "/klachten/prikkelbare-darm-syndroom" },
  { slug: "acupunctuur-bij-reflux", topic: "Zuurbranden en reflux behandelen met acupunctuur", category: "Spijsvertering", primaryKlacht: "/klachten/reflux" },
  { slug: "opgeblazen-gevoel-acupunctuur", topic: "Opgeblazen gevoel en een trage spijsvertering: hoe acupunctuur kan helpen", category: "Spijsvertering", primaryKlacht: "/klachten/opgeblazen-gevoel" },

  // — Vrouwenklachten —
  { slug: "acupunctuur-bij-menstruatieklachten", topic: "Menstruatieklachten verminderen met acupunctuur", category: "Vrouwenklachten", primaryKlacht: "/klachten/menstruatieklachten" },
  { slug: "acupunctuur-bij-overgangsklachten", topic: "Overgangsklachten en acupunctuur: opvliegers, slaap en stemming", category: "Vrouwenklachten", primaryKlacht: "/klachten/overgangsklachten" },
  { slug: "vruchtbaarheid-en-acupunctuur", topic: "Acupunctuur ter ondersteuning van de vruchtbaarheid: wat is de rol?", category: "Vrouwenklachten", primaryKlacht: "/klachten/vruchtbaarheidsproblemen" },
  { slug: "zwangerschapsklachten-acupunctuur", topic: "Zwangerschapsklachten verlichten met acupunctuur: veilig en effectief?", category: "Vrouwenklachten", primaryKlacht: "/klachten/zwangerschapsklachten" },

  // — Luchtwegen & Immuniteit —
  { slug: "hooikoorts-acupunctuur", topic: "Hooikoorts behandelen met acupunctuur: minder niezen, minder medicatie", category: "Luchtwegen & Allergie", primaryKlacht: "/klachten/hooikoorts" },
  { slug: "acupunctuur-bij-sinusitis", topic: "Acupunctuur bij sinusitis en neusklachten: hoe werkt het?", category: "Luchtwegen & Allergie", primaryKlacht: "/klachten/sinusitis" },
  { slug: "weerstand-verbeteren-acupunctuur", topic: "Je weerstand versterken met acupunctuur: minder snel ziek in de winter", category: "Immuniteit", primaryKlacht: "/klachten/verminderde-weerstand" },
  { slug: "long-covid-vermoeidheid-acupunctuur", topic: "Long COVID en vermoeidheid: acupunctuur als onderdeel van herstel", category: "Immuniteit", primaryKlacht: "/klachten/long-covid" },

  // — Hoofd & Zenuwstelsel —
  { slug: "duizeligheid-acupunctuur", topic: "Duizeligheid en oorsuizen: wat kan acupunctuur betekenen?", category: "Hoofd & Zenuwstelsel", primaryKlacht: "/klachten/duizeligheid" },
  { slug: "acupunctuur-bij-tinnitus", topic: "Tinnitus en acupunctuur: kan oorsuizen verminderd worden?", category: "Hoofd & Zenuwstelsel", primaryKlacht: "/klachten/tinnitus" },

  // — Stress & Burn-out extra —
  { slug: "acupunctuur-bij-stress-en-burn-out", topic: "Acupunctuur bij stress en burn-out: kalmte terugvinden in je lichaam", category: "Stress & Energie", primaryKlacht: "/klachten/burn-out" },

  // — Algemeen & Informatief —
  { slug: "eerste-acupunctuur-behandeling", topic: "Wat kun je verwachten bij je eerste acupunctuurbehandeling?", category: "Over Acupunctuur", primaryKlacht: "/behandeling-werkwijze" },
  { slug: "acupunctuur-vergoed-zorgverzekering", topic: "Wordt acupunctuur vergoed door de zorgverzekering?", category: "Tarieven & Vergoeding", primaryKlacht: "/tarieven-vergoeding" },
  { slug: "acupunctuur-vs-fysiotherapie", topic: "Acupunctuur of fysiotherapie bij pijnklachten: wat past bij jou?", category: "Over Acupunctuur", primaryKlacht: "/klachten/pijnklachten-en-beweging" },
  { slug: "seizoensgebonden-klachten-herfst-winter", topic: "Herfst en winter: waarom acupunctuur nu extra waardevol is", category: "Seizoenen & Gezondheid", primaryKlacht: "/klachten/verminderde-weerstand" },
  { slug: "stoppen-met-roken-acupunctuur", topic: "Stoppen met roken met behulp van acupunctuur: realistische verwachtingen", category: "Leefstijl", primaryKlacht: "/klachten/stoppen-met-roken" },

  // ===========================================================================
  // — Uitbreiding: Pijn & Beweging —
  // ===========================================================================
  { slug: "nekklachten-na-beeldschermwerk", topic: "Nekklachten door beeldschermwerk: oorzaken en hoe acupunctuur helpt", category: "Pijn & Beweging", primaryKlacht: "/klachten/nekklachten" },
  { slug: "chronische-nekpijn-oorzaken", topic: "Chronische nekpijn: veelvoorkomende oorzaken en behandelmogelijkheden", category: "Pijn & Beweging", primaryKlacht: "/klachten/nekklachten" },
  { slug: "nekhernia-acupunctuur", topic: "Nekhernia en acupunctuur: ondersteuning bij uitstralende pijn", category: "Pijn & Beweging", primaryKlacht: "/klachten/nekklachten" },
  { slug: "nekklachten-en-stress-verband", topic: "Het verband tussen stress en nekklachten — en wat eraan te doen", category: "Pijn & Beweging", primaryKlacht: "/klachten/nekklachten" },
  { slug: "spanningshoofdpijn-acupunctuur", topic: "Spanningshoofdpijn behandelen met acupunctuur", category: "Hoofd & Zenuwstelsel", primaryKlacht: "/klachten/hoofdpijn" },
  { slug: "clusterhoofdpijn-acupunctuur", topic: "Clusterhoofdpijn: kan acupunctuur de aanvallen verminderen?", category: "Hoofd & Zenuwstelsel", primaryKlacht: "/klachten/hoofdpijn" },
  { slug: "hormonale-hoofdpijn-acupunctuur", topic: "Hormonale hoofdpijn rond de menstruatie: hoe acupunctuur kan helpen", category: "Hoofd & Zenuwstelsel", primaryKlacht: "/klachten/hoofdpijn" },
  { slug: "ochtendhoofdpijn-oorzaken", topic: "Wakker worden met hoofdpijn: mogelijke oorzaken en oplossingen", category: "Hoofd & Zenuwstelsel", primaryKlacht: "/klachten/hoofdpijn" },
  { slug: "migraine-triggers-vermijden", topic: "Migraine-triggers herkennen en vermijden: een praktische gids", category: "Hoofd & Zenuwstelsel", primaryKlacht: "/klachten/migraine" },
  { slug: "migraine-en-voeding", topic: "Migraine en voeding: welke voedingsmiddelen kunnen aanvallen uitlokken?", category: "Hoofd & Zenuwstelsel", primaryKlacht: "/klachten/migraine" },
  { slug: "menstruele-migraine-acupunctuur", topic: "Menstruele migraine: acupunctuur als hormoonvriendelijke aanpak", category: "Hoofd & Zenuwstelsel", primaryKlacht: "/klachten/migraine" },
  { slug: "acupunctuur-bij-hernia", topic: "Acupunctuur bij een hernia: ondersteuning bij pijn en uitstraling", category: "Pijn & Beweging", primaryKlacht: "/klachten/lage-rugklachten" },
  { slug: "lage-rugpijn-houding", topic: "Lage rugpijn door verkeerde houding: wat kunt u zelf doen?", category: "Pijn & Beweging", primaryKlacht: "/klachten/lage-rugklachten" },
  { slug: "uitstralende-rugpijn-acupunctuur", topic: "Uitstralende pijn vanuit de rug: ischias en bekken", category: "Pijn & Beweging", primaryKlacht: "/klachten/lage-rugklachten" },
  { slug: "chronische-rugpijn-leven-met", topic: "Leven met chronische rugpijn: realistische verwachtingen van acupunctuur", category: "Pijn & Beweging", primaryKlacht: "/klachten/lage-rugklachten" },
  { slug: "bursitis-schouder-acupunctuur", topic: "Bursitis in de schouder: kan acupunctuur de ontsteking kalmeren?", category: "Pijn & Beweging", primaryKlacht: "/klachten/schouderklachten" },
  { slug: "kalkschouder-acupunctuur", topic: "Kalkschouder en acupunctuur: pijnverlichting tijdens herstel", category: "Pijn & Beweging", primaryKlacht: "/klachten/schouderklachten" },
  { slug: "acupunctuur-bij-frozen-shoulder", topic: "Frozen shoulder: hoe acupunctuur kan bijdragen aan herstel", category: "Pijn & Beweging", primaryKlacht: "/klachten/frozen-shoulder" },
  { slug: "rotator-cuff-blessure", topic: "Rotator cuff-blessures van de schouder: behandeling en herstel", category: "Pijn & Beweging", primaryKlacht: "/klachten/schouderklachten" },
  { slug: "acupunctuur-bij-artrose", topic: "Acupunctuur bij artrose: pijnvermindering en beweeglijkheid", category: "Pijn & Beweging", primaryKlacht: "/klachten/artrose" },
  { slug: "artrose-handen-vingers", topic: "Artrose in handen en vingers: ondersteuning vanuit acupunctuur", category: "Pijn & Beweging", primaryKlacht: "/klachten/artrose" },
  { slug: "artrose-heup-acupunctuur", topic: "Heupartrose en acupunctuur: behoud van mobiliteit", category: "Pijn & Beweging", primaryKlacht: "/klachten/heupklachten" },
  { slug: "kniepijn-na-sport-acupunctuur", topic: "Kniepijn na sporten: wanneer acupunctuur kan helpen", category: "Pijn & Beweging", primaryKlacht: "/klachten/kniepijn" },
  { slug: "meniscusklachten-acupunctuur", topic: "Meniscusklachten: pijnverlichting met acupunctuur", category: "Pijn & Beweging", primaryKlacht: "/klachten/kniepijn" },
  { slug: "patellofemoraal-syndroom", topic: "Patellofemoraal pijnsyndroom: pijn voor de knieschijf aanpakken", category: "Pijn & Beweging", primaryKlacht: "/klachten/kniepijn" },
  { slug: "acupunctuur-bij-heupklachten", topic: "Acupunctuur bij heupklachten: van bursitis tot slijtage", category: "Pijn & Beweging", primaryKlacht: "/klachten/heupklachten" },
  { slug: "acupunctuur-bij-bekkenklachten", topic: "Acupunctuur bij bekkenklachten: zwangerschap en daarna", category: "Pijn & Beweging", primaryKlacht: "/klachten/bekkenklachten" },
  { slug: "bekkeninstabiliteit-acupunctuur", topic: "Bekkeninstabiliteit: hoe acupunctuur het herstel kan ondersteunen", category: "Pijn & Beweging", primaryKlacht: "/klachten/bekkenklachten" },
  { slug: "acupunctuur-bij-spierpijn", topic: "Acupunctuur bij chronische spierpijn en triggerpoints", category: "Pijn & Beweging", primaryKlacht: "/klachten/spierpijn" },
  { slug: "acupunctuur-bij-rsi", topic: "Acupunctuur bij RSI-klachten: behandeling van overbelaste arm en pols", category: "Pijn & Beweging", primaryKlacht: "/klachten/rsi" },
  { slug: "muisarm-acupunctuur", topic: "Muisarm en acupunctuur: pijnvermindering bij beeldschermwerkers", category: "Pijn & Beweging", primaryKlacht: "/klachten/rsi" },
  { slug: "tenniselleboog-acupunctuur", topic: "Tenniselleboog behandelen met acupunctuur", category: "Pijn & Beweging", primaryKlacht: "/klachten/rsi" },
  { slug: "acupunctuur-bij-whiplash", topic: "Acupunctuur bij whiplash: herstel na een nekblessure", category: "Pijn & Beweging", primaryKlacht: "/klachten/whiplash" },
  { slug: "whiplash-langetermijn-klachten", topic: "Langdurige whiplashklachten: wat kan acupunctuur betekenen?", category: "Pijn & Beweging", primaryKlacht: "/klachten/whiplash" },
  { slug: "ischias-oefeningen-zelf", topic: "Oefeningen bij ischias die u zelf thuis kunt doen", category: "Pijn & Beweging", primaryKlacht: "/klachten/ischias" },
  { slug: "acupunctuur-bij-aangezichtspijn", topic: "Acupunctuur bij aangezichtspijn: een rustige aanpak", category: "Pijn & Beweging", primaryKlacht: "/klachten/aangezichtspijn" },
  { slug: "acupunctuur-bij-trigeminus-neuralgie", topic: "Trigeminus neuralgie: kan acupunctuur de zenuwpijn verzachten?", category: "Pijn & Beweging", primaryKlacht: "/klachten/trigeminus-neuralgie" },
  { slug: "acupunctuur-bij-pijnbestrijding", topic: "Acupunctuur als onderdeel van pijnbestrijding: hoe werkt het?", category: "Pijn & Beweging", primaryKlacht: "/klachten/pijnbestrijding" },
  { slug: "chronische-pijn-acupunctuur", topic: "Chronische pijn en acupunctuur: het zenuwstelsel resetten", category: "Pijn & Beweging", primaryKlacht: "/klachten/pijnbestrijding" },
  { slug: "acupunctuur-bij-restless-legs", topic: "Restless legs syndroom: hoe acupunctuur de onrust kan kalmeren", category: "Pijn & Beweging", primaryKlacht: "/klachten/restless-legs" },
  { slug: "nachtelijke-spierkrampen-acupunctuur", topic: "Nachtelijke spierkrampen: oorzaken en behandeling met acupunctuur", category: "Pijn & Beweging", primaryKlacht: "/klachten/spierpijn" },
  { slug: "ochtendstijfheid-acupunctuur", topic: "Ochtendstijfheid: wat zegt het over uw lichaam en hoe helpt acupunctuur?", category: "Pijn & Beweging", primaryKlacht: "/klachten/pijnklachten-en-beweging" },

  // ===========================================================================
  // — Uitbreiding: Hoofd & Zenuwstelsel —
  // ===========================================================================
  { slug: "duizeligheid-bij-opstaan-acupunctuur", topic: "Duizeligheid bij opstaan: oorzaken en acupunctuur als ondersteuning", category: "Hoofd & Zenuwstelsel", primaryKlacht: "/klachten/duizeligheid" },
  { slug: "positionele-duizeligheid-tcm", topic: "Positionele duizeligheid (BPPD) en TCM: een breder perspectief", category: "Hoofd & Zenuwstelsel", primaryKlacht: "/klachten/duizeligheid" },
  { slug: "acupunctuur-bij-meniere", topic: "De ziekte van Ménière: kan acupunctuur duizeligheid en oorsuizen verminderen?", category: "Hoofd & Zenuwstelsel", primaryKlacht: "/klachten/duizeligheid" },
  { slug: "tinnitus-en-stress-verband", topic: "Tinnitus en stress: waarom het oorsuizen heviger lijkt onder spanning", category: "Hoofd & Zenuwstelsel", primaryKlacht: "/klachten/tinnitus" },
  { slug: "acupunctuur-bij-evenwichtsproblemen", topic: "Evenwichtsproblemen: acupunctuur als aanvulling op reguliere zorg", category: "Hoofd & Zenuwstelsel", primaryKlacht: "/klachten/duizeligheid" },
  { slug: "acupunctuur-bij-concentratieproblemen", topic: "Acupunctuur bij concentratieproblemen: rust in het hoofd", category: "Hoofd & Zenuwstelsel", primaryKlacht: "/klachten/concentratieproblemen" },
  { slug: "brain-fog-acupunctuur", topic: "Brain fog: hoe acupunctuur de mentale helderheid kan ondersteunen", category: "Hoofd & Zenuwstelsel", primaryKlacht: "/klachten/concentratieproblemen" },

  // ===========================================================================
  // — Uitbreiding: Stress & Energie —
  // ===========================================================================
  { slug: "burn-out-vroege-signalen", topic: "Vroege signalen van een burn-out herkennen voordat het te laat is", category: "Stress & Energie", primaryKlacht: "/klachten/burn-out" },
  { slug: "herstellen-na-burn-out", topic: "Herstellen na een burn-out: het tempo van uw lichaam volgen", category: "Stress & Energie", primaryKlacht: "/klachten/burn-out" },
  { slug: "terug-aan-werk-na-burnout", topic: "Terug aan het werk na een burn-out: opbouwen zonder terugval", category: "Stress & Energie", primaryKlacht: "/klachten/burn-out" },
  { slug: "paniekaanvallen-acupunctuur", topic: "Paniekaanvallen verminderen met acupunctuur", category: "Stress & Energie", primaryKlacht: "/klachten/angstklachten" },
  { slug: "sociale-angst-acupunctuur", topic: "Sociale angst: acupunctuur ter ondersteuning van het zenuwstelsel", category: "Stress & Energie", primaryKlacht: "/klachten/angstklachten" },
  { slug: "faalangst-acupunctuur", topic: "Faalangst en spanning bij presteren: hoe acupunctuur kan helpen", category: "Stress & Energie", primaryKlacht: "/klachten/angstklachten" },
  { slug: "acupunctuur-bij-stressklachten", topic: "Acupunctuur bij algemene stressklachten: kalmte terugvinden", category: "Stress & Energie", primaryKlacht: "/klachten/stressklachten" },
  { slug: "werkstress-acupunctuur", topic: "Werkstress: lichamelijke signalen en hoe acupunctuur ondersteunt", category: "Stress & Energie", primaryKlacht: "/klachten/stressklachten" },
  { slug: "acupunctuur-bij-somberheid", topic: "Acupunctuur bij somberheid en lichte depressieve klachten", category: "Stress & Energie", primaryKlacht: "/klachten/somberheid" },
  { slug: "winterdepressie-acupunctuur", topic: "Winterdepressie: acupunctuur als seizoensondersteuning", category: "Stress & Energie", primaryKlacht: "/klachten/somberheid" },
  { slug: "stemmingswisselingen-acupunctuur", topic: "Stemmingswisselingen: hormonen, stress en acupunctuur", category: "Stress & Energie", primaryKlacht: "/klachten/somberheid" },
  { slug: "acupunctuur-bij-vermoeidheid", topic: "Acupunctuur bij vermoeidheid: meer dan symptoombestrijding", category: "Stress & Energie", primaryKlacht: "/klachten/vermoeidheid" },
  { slug: "ochtendmoeheid-acupunctuur", topic: "Niet uitgerust wakker worden: oorzaken van ochtendmoeheid", category: "Stress & Energie", primaryKlacht: "/klachten/vermoeidheid" },
  { slug: "mentale-vermoeidheid-acupunctuur", topic: "Mentale vermoeidheid: hoe acupunctuur het hoofd kan rusten", category: "Stress & Energie", primaryKlacht: "/klachten/vermoeidheid" },
  { slug: "acupunctuur-bij-uitputting", topic: "Acupunctuur bij uitputting: stap voor stap opbouwen", category: "Stress & Energie", primaryKlacht: "/klachten/uitputting" },
  { slug: "bijnieruitputting-acupunctuur", topic: "Bijnieruitputting in TCM-perspectief: nierenergie versterken", category: "Stress & Energie", primaryKlacht: "/klachten/uitputting" },
  { slug: "energietekort-acupunctuur", topic: "Energietekort en qi: hoe acupunctuur de levensenergie ondersteunt", category: "Stress & Energie", primaryKlacht: "/klachten/vitaliteit" },
  { slug: "acupunctuur-bij-overprikkeling", topic: "Acupunctuur bij overprikkeling: het zenuwstelsel tot rust brengen", category: "Stress & Energie", primaryKlacht: "/klachten/overprikkeling" },
  { slug: "hsp-acupunctuur", topic: "Hooggevoeligheid (HSP) en acupunctuur: balans vinden", category: "Stress & Energie", primaryKlacht: "/klachten/overprikkeling" },
  { slug: "acupunctuur-bij-vitaliteit", topic: "Acupunctuur voor meer vitaliteit en levensenergie", category: "Stress & Energie", primaryKlacht: "/klachten/vitaliteit" },
  { slug: "levensenergie-versterken-tcm", topic: "Levensenergie versterken: hoe TCM kijkt naar qi", category: "Over Acupunctuur", primaryKlacht: "/klachten/vitaliteit" },

  // ===========================================================================
  // — Uitbreiding: Slaap & Herstel —
  // ===========================================================================
  { slug: "doorslaapproblemen-acupunctuur", topic: "Doorslaapproblemen: waarom u 's nachts wakker wordt en wat helpt", category: "Slaap & Herstel", primaryKlacht: "/klachten/slaapproblemen" },
  { slug: "inslaapproblemen-acupunctuur", topic: "Niet in slaap kunnen komen: acupunctuur en avondrituelen", category: "Slaap & Herstel", primaryKlacht: "/klachten/slaapproblemen" },
  { slug: "vroeg-wakker-worden-acupunctuur", topic: "Te vroeg wakker worden en niet meer in slaap komen", category: "Slaap & Herstel", primaryKlacht: "/klachten/slaapproblemen" },
  { slug: "slaap-en-stress-cyclus", topic: "De vicieuze cirkel van slaap en stress doorbreken", category: "Slaap & Herstel", primaryKlacht: "/klachten/slaapproblemen" },
  { slug: "slaapproblemen-bij-ouderen-acupunctuur", topic: "Slaapproblemen bij ouderen: hoe acupunctuur ondersteunt", category: "Slaap & Herstel", primaryKlacht: "/klachten/slaapproblemen" },
  { slug: "acupunctuur-bij-herstel-na-ziekte", topic: "Acupunctuur bij herstel na ziekte: weer op krachten komen", category: "Slaap & Herstel", primaryKlacht: "/klachten/herstel-na-ziekte" },
  { slug: "herstel-na-griep-acupunctuur", topic: "Herstel na griep duurt lang: hoe acupunctuur kan helpen", category: "Slaap & Herstel", primaryKlacht: "/klachten/herstel-na-ziekte" },
  { slug: "herstel-na-operatie-acupunctuur", topic: "Herstel na een operatie: acupunctuur als aanvulling op de reguliere zorg", category: "Slaap & Herstel", primaryKlacht: "/klachten/herstel-na-ziekte" },

  // ===========================================================================
  // — Uitbreiding: Spijsvertering —
  // ===========================================================================
  { slug: "dieet-tips-prikkelbare-darm", topic: "Voedingstips bij prikkelbare darm: wat helpt en wat verergert?", category: "Spijsvertering", primaryKlacht: "/klachten/prikkelbare-darm-syndroom" },
  { slug: "pds-stress-darm-verband", topic: "Het verband tussen stress en prikkelbare darm uitgelegd", category: "Spijsvertering", primaryKlacht: "/klachten/prikkelbare-darm-syndroom" },
  { slug: "reflux-en-voeding", topic: "Reflux en voeding: welke leefstijl-aanpassingen helpen?", category: "Spijsvertering", primaryKlacht: "/klachten/reflux" },
  { slug: "acupunctuur-bij-maagklachten", topic: "Acupunctuur bij maagklachten: zuurbranden, druk en misselijkheid", category: "Spijsvertering", primaryKlacht: "/klachten/maagklachten" },
  { slug: "zuurbranden-leefstijl", topic: "Zuurbranden: leefstijl-aanpassingen die echt verschil maken", category: "Spijsvertering", primaryKlacht: "/klachten/reflux" },
  { slug: "acupunctuur-bij-darmklachten", topic: "Acupunctuur bij chronische darmklachten: een holistische aanpak", category: "Spijsvertering", primaryKlacht: "/klachten/darmklachten" },
  { slug: "ontstoken-darm-acupunctuur", topic: "Ontstoken darm en acupunctuur: ondersteuning bij IBD", category: "Spijsvertering", primaryKlacht: "/klachten/darmklachten" },
  { slug: "acupunctuur-bij-obstipatie", topic: "Acupunctuur bij obstipatie: weer een natuurlijk ritme", category: "Spijsvertering", primaryKlacht: "/klachten/obstipatie" },
  { slug: "obstipatie-bij-kinderen", topic: "Obstipatie bij kinderen: wanneer aan acupunctuur denken?", category: "Spijsvertering", primaryKlacht: "/klachten/obstipatie" },
  { slug: "acupunctuur-bij-buikpijn", topic: "Acupunctuur bij buikpijn: oorzaakgericht in plaats van symptomatisch", category: "Spijsvertering", primaryKlacht: "/klachten/buikpijn" },
  { slug: "chronische-buikpijn-acupunctuur", topic: "Chronische buikpijn zonder duidelijke oorzaak: wat te doen?", category: "Spijsvertering", primaryKlacht: "/klachten/buikpijn" },
  { slug: "buikpijn-na-eten-acupunctuur", topic: "Buikpijn na het eten: wanneer is acupunctuur zinvol?", category: "Spijsvertering", primaryKlacht: "/klachten/buikpijn" },
  { slug: "acupunctuur-bij-voedselintoleranties", topic: "Voedselintoleranties: hoe acupunctuur de spijsvertering ondersteunt", category: "Spijsvertering", primaryKlacht: "/klachten/voedselintoleranties" },
  { slug: "lactose-intolerantie-tcm", topic: "Lactose-intolerantie vanuit TCM-perspectief: vocht en milt", category: "Spijsvertering", primaryKlacht: "/klachten/voedselintoleranties" },
  { slug: "gluten-gevoeligheid-tcm", topic: "Glutengevoeligheid en TCM: het verteringsvuur versterken", category: "Spijsvertering", primaryKlacht: "/klachten/voedselintoleranties" },
  { slug: "opgeblazen-gevoel-na-eten", topic: "Opgeblazen gevoel na elke maaltijd: oorzaken en aanpak", category: "Spijsvertering", primaryKlacht: "/klachten/opgeblazen-gevoel" },

  // ===========================================================================
  // — Uitbreiding: Vrouwenklachten —
  // ===========================================================================
  { slug: "menstruatiepijn-acupunctuur", topic: "Menstruatiepijn (dysmenorroe) verminderen met acupunctuur", category: "Vrouwenklachten", primaryKlacht: "/klachten/menstruatieklachten" },
  { slug: "pms-acupunctuur", topic: "PMS-klachten verlichten met acupunctuur", category: "Vrouwenklachten", primaryKlacht: "/klachten/menstruatieklachten" },
  { slug: "hevige-menstruatie-acupunctuur", topic: "Hevige menstruatie: kan acupunctuur het bloedverlies reguleren?", category: "Vrouwenklachten", primaryKlacht: "/klachten/menstruatieklachten" },
  { slug: "uitblijven-menstruatie-acupunctuur", topic: "Uitblijvende menstruatie: hormonale balans en acupunctuur", category: "Vrouwenklachten", primaryKlacht: "/klachten/onregelmatige-menstruatie" },
  { slug: "opvliegers-acupunctuur", topic: "Opvliegers in de overgang: hoe acupunctuur de hevigheid kan verminderen", category: "Vrouwenklachten", primaryKlacht: "/klachten/overgangsklachten" },
  { slug: "overgang-stemming-acupunctuur", topic: "Stemmingswisselingen in de overgang: acupunctuur als steun", category: "Vrouwenklachten", primaryKlacht: "/klachten/overgangsklachten" },
  { slug: "overgang-slaapproblemen-acupunctuur", topic: "Slaapproblemen tijdens de overgang: acupunctuur en leefstijl", category: "Vrouwenklachten", primaryKlacht: "/klachten/overgangsklachten" },
  { slug: "acupunctuur-bij-endometriose", topic: "Acupunctuur bij endometriose: pijn en cyclus ondersteunen", category: "Vrouwenklachten", primaryKlacht: "/klachten/endometriose-pcos" },
  { slug: "acupunctuur-bij-pcos", topic: "Acupunctuur bij PCOS: cyclus, hormonen en vruchtbaarheid", category: "Vrouwenklachten", primaryKlacht: "/klachten/endometriose-pcos" },
  { slug: "acupunctuur-bij-ivf-icsi", topic: "Acupunctuur bij IVF en ICSI: ondersteuning tijdens het traject", category: "Vrouwenklachten", primaryKlacht: "/klachten/ivf-icsi-ondersteuning" },
  { slug: "ivf-voorbereiding-acupunctuur", topic: "IVF-voorbereiding met acupunctuur: ontspanning en doorbloeding", category: "Vrouwenklachten", primaryKlacht: "/klachten/ivf-icsi-ondersteuning" },
  { slug: "acupunctuur-bij-onregelmatige-menstruatie", topic: "Onregelmatige menstruatie: hoe acupunctuur de cyclus kan reguleren", category: "Vrouwenklachten", primaryKlacht: "/klachten/onregelmatige-menstruatie" },
  { slug: "hormonale-disbalans-acupunctuur", topic: "Hormonale disbalans bij vrouwen: acupunctuur als ondersteuning", category: "Vrouwenklachten", primaryKlacht: "/klachten/hormonale-disbalans" },
  { slug: "acupunctuur-bij-hormonen", topic: "Acupunctuur en vrouwenhormonen: cyclus, overgang en stemming", category: "Vrouwenklachten", primaryKlacht: "/klachten/hormonen-vrouwenklachten" },
  { slug: "vruchtbaarheid-vrouw-acupunctuur", topic: "Vrouwelijke vruchtbaarheid en acupunctuur: meer dan alleen ovulatie", category: "Vrouwenklachten", primaryKlacht: "/klachten/vruchtbaarheidsproblemen" },
  { slug: "mannelijke-vruchtbaarheid-acupunctuur", topic: "Mannelijke vruchtbaarheid en acupunctuur: spermakwaliteit verbeteren", category: "Vrouwenklachten", primaryKlacht: "/klachten/vruchtbaarheidsproblemen" },
  { slug: "zwangerschapsmisselijkheid-acupunctuur", topic: "Zwangerschapsmisselijkheid verminderen met acupunctuur", category: "Vrouwenklachten", primaryKlacht: "/klachten/zwangerschapsklachten" },
  { slug: "zwangerschapsrugpijn-acupunctuur", topic: "Rugpijn tijdens de zwangerschap: veilige aanpak met acupunctuur", category: "Vrouwenklachten", primaryKlacht: "/klachten/zwangerschapsklachten" },
  { slug: "bevallingsvoorbereiding-acupunctuur", topic: "Bevallingsvoorbereiding met acupunctuur: ontspanning en rijping", category: "Vrouwenklachten", primaryKlacht: "/klachten/zwangerschapsklachten" },

  // ===========================================================================
  // — Uitbreiding: Luchtwegen & Allergie —
  // ===========================================================================
  { slug: "hooikoorts-jaarrond-acupunctuur", topic: "Hooikoorts het hele jaar door voorkomen met acupunctuur", category: "Luchtwegen & Allergie", primaryKlacht: "/klachten/hooikoorts" },
  { slug: "hooikoorts-bij-kinderen", topic: "Hooikoorts bij kinderen: wanneer aan acupunctuur denken?", category: "Luchtwegen & Allergie", primaryKlacht: "/klachten/hooikoorts" },
  { slug: "preventieve-acupunctuur-pollen", topic: "Preventieve acupunctuur vóór het pollenseizoen", category: "Luchtwegen & Allergie", primaryKlacht: "/klachten/hooikoorts" },
  { slug: "acupunctuur-bij-chronische-sinusitis", topic: "Acupunctuur bij chronische sinusitis: druk en hoofdpijn verminderen", category: "Luchtwegen & Allergie", primaryKlacht: "/klachten/sinusitis" },
  { slug: "acuut-sinusitis-tcm", topic: "Acute sinusitis: TCM-aanpak naast reguliere zorg", category: "Luchtwegen & Allergie", primaryKlacht: "/klachten/sinusitis" },
  { slug: "acupunctuur-bij-ademhalingsproblemen", topic: "Acupunctuur bij ademhalingsproblemen: ruimte op de borst", category: "Luchtwegen & Allergie", primaryKlacht: "/klachten/ademhalingsproblemen" },
  { slug: "kortademig-acupunctuur", topic: "Kortademigheid zonder duidelijke oorzaak: wat te doen?", category: "Luchtwegen & Allergie", primaryKlacht: "/klachten/ademhalingsproblemen" },
  { slug: "acupunctuur-bij-astma", topic: "Acupunctuur bij astma: ondersteuning naast inhalatiemedicatie", category: "Luchtwegen & Allergie", primaryKlacht: "/klachten/astma" },
  { slug: "astma-bij-kinderen-acupunctuur", topic: "Astma bij kinderen: hoe acupunctuur kan ondersteunen", category: "Luchtwegen & Allergie", primaryKlacht: "/klachten/astma" },
  { slug: "acupunctuur-bij-allergische-klachten", topic: "Acupunctuur bij allergische klachten: het immuunsysteem reguleren", category: "Luchtwegen & Allergie", primaryKlacht: "/klachten/allergische-klachten" },
  { slug: "acupunctuur-bij-luchtwegklachten", topic: "Acupunctuur bij luchtwegklachten en allergieën", category: "Luchtwegen & Allergie", primaryKlacht: "/klachten/luchtwegen-allergieen" },
  { slug: "acupunctuur-bij-verkoudheid", topic: "Acupunctuur bij verkoudheid: sneller herstel en minder klachten", category: "Luchtwegen & Allergie", primaryKlacht: "/klachten/verkoudheid" },
  { slug: "preventie-verkoudheid-acupunctuur", topic: "Verkoudheid voorkomen: weerstand opbouwen met acupunctuur", category: "Luchtwegen & Allergie", primaryKlacht: "/klachten/verkoudheid" },
  { slug: "herhaalde-verkoudheid-acupunctuur", topic: "Steeds opnieuw verkouden: wat zegt het over uw weerstand?", category: "Luchtwegen & Allergie", primaryKlacht: "/klachten/verkoudheid" },

  // ===========================================================================
  // — Uitbreiding: Immuniteit —
  // ===========================================================================
  { slug: "immuunsysteem-herstel-acupunctuur", topic: "Immuunsysteem-herstel: acupunctuur na een lange ziekteperiode", category: "Immuniteit", primaryKlacht: "/klachten/immuunsysteem-herstel" },
  { slug: "acupunctuur-bij-verminderde-weerstand", topic: "Acupunctuur bij verminderde weerstand: terug naar veerkracht", category: "Immuniteit", primaryKlacht: "/klachten/verminderde-weerstand" },
  { slug: "acupunctuur-bij-chronische-ontstekingsklachten", topic: "Acupunctuur bij chronische ontstekingsklachten: het lichaam kalmeren", category: "Immuniteit", primaryKlacht: "/klachten/chronische-ontstekingsklachten" },
  { slug: "ontstekingen-verminderen-voeding", topic: "Ontstekingen verminderen met voeding en leefstijl", category: "Immuniteit", primaryKlacht: "/klachten/chronische-ontstekingsklachten" },
  { slug: "weerstand-versterken-winter-acupunctuur", topic: "Weerstand versterken in de winter: TCM-tips en acupunctuur", category: "Immuniteit", primaryKlacht: "/klachten/verminderde-weerstand" },

  // ===========================================================================
  // — Uitbreiding: Blaas & Urogenitaal —
  // ===========================================================================
  { slug: "acupunctuur-bij-blaasklachten", topic: "Acupunctuur bij blaasklachten: een rustige en effectieve aanpak", category: "Blaas & Urogenitaal", primaryKlacht: "/klachten/blaasklachten" },
  { slug: "terugkerende-blaasontsteking-acupunctuur", topic: "Steeds terugkerende blaasontstekingen: hoe doorbreekt u de cyclus?", category: "Blaas & Urogenitaal", primaryKlacht: "/klachten/blaasontstekingen" },
  { slug: "acupunctuur-bij-blaasontstekingen", topic: "Acupunctuur bij blaasontstekingen: ondersteuning en preventie", category: "Blaas & Urogenitaal", primaryKlacht: "/klachten/blaasontstekingen" },
  { slug: "acupunctuur-bij-overactieve-blaas", topic: "Overactieve blaas behandelen met acupunctuur", category: "Blaas & Urogenitaal", primaryKlacht: "/klachten/overactieve-blaas" },
  { slug: "acupunctuur-bij-urineverlies", topic: "Acupunctuur bij ongewild urineverlies: stille klachten bespreken", category: "Blaas & Urogenitaal", primaryKlacht: "/klachten/urineverlies" },
  { slug: "nachtelijk-plassen-acupunctuur", topic: "Nachtelijk plassen ('s nachts opstaan): TCM en acupunctuur", category: "Blaas & Urogenitaal", primaryKlacht: "/klachten/overactieve-blaas" },

  // ===========================================================================
  // — Uitbreiding: Over Acupunctuur (informatief) —
  // ===========================================================================
  { slug: "hoeveel-behandelingen-acupunctuur", topic: "Hoeveel behandelingen heeft u nodig? Een eerlijke uitleg", category: "Over Acupunctuur", primaryKlacht: "/behandeling-werkwijze" },
  { slug: "hoe-vaak-naar-acupunctuur", topic: "Hoe vaak moet u naar de acupuncturist? Het normale ritme", category: "Over Acupunctuur", primaryKlacht: "/behandeling-werkwijze" },
  { slug: "doet-acupunctuur-pijn", topic: "Doet acupunctuur pijn? Wat u echt voelt bij de behandeling", category: "Over Acupunctuur", primaryKlacht: "/behandeling-werkwijze" },
  { slug: "bijwerkingen-acupunctuur", topic: "Mogelijke bijwerkingen van acupunctuur: wat te verwachten?", category: "Over Acupunctuur", primaryKlacht: "/behandeling-werkwijze" },
  { slug: "traditionele-chinese-acupunctuur", topic: "Traditionele Chinese acupunctuur: de filosofie achter de naalden", category: "Over Acupunctuur", primaryKlacht: "/behandeling-werkwijze" },
  { slug: "wat-zijn-meridianen", topic: "Wat zijn meridianen? Een toegankelijke uitleg van de energiebanen", category: "Over Acupunctuur", primaryKlacht: "/behandeling-werkwijze" },
  { slug: "wat-is-qi-energie", topic: "Wat is qi? De levensenergie binnen de Chinese geneeskunde", category: "Over Acupunctuur", primaryKlacht: "/behandeling-werkwijze" },
  { slug: "vijf-elementen-tcm-uitleg", topic: "De vijf elementen in TCM: hout, vuur, aarde, metaal, water", category: "Over Acupunctuur", primaryKlacht: "/behandeling-werkwijze" },
  { slug: "yin-yang-in-acupunctuur", topic: "Yin en yang in de acupunctuur: balans in lichaam en geest", category: "Over Acupunctuur", primaryKlacht: "/behandeling-werkwijze" },
  { slug: "tongdiagnose-acupunctuur", topic: "Tongdiagnose: wat uw tong vertelt over uw gezondheid", category: "Over Acupunctuur", primaryKlacht: "/behandeling-werkwijze" },
  { slug: "polsdiagnose-acupunctuur", topic: "Polsdiagnose in de Chinese geneeskunde: wat de pols vertelt", category: "Over Acupunctuur", primaryKlacht: "/behandeling-werkwijze" },
  { slug: "elektroacupunctuur-uitleg", topic: "Elektroacupunctuur: wanneer wordt het gebruikt en is het veilig?", category: "Over Acupunctuur", primaryKlacht: "/behandeling-werkwijze" },
  { slug: "oorakupunctuur-uitleg", topic: "Oorakupunctuur (auriculotherapie): wat is het en waar helpt het?", category: "Over Acupunctuur", primaryKlacht: "/behandeling-werkwijze" },
  { slug: "droge-naalden-vs-acupunctuur", topic: "Dry needling en acupunctuur: wat is het verschil?", category: "Over Acupunctuur", primaryKlacht: "/behandeling-werkwijze" },
  { slug: "moxa-moxibustie-uitleg", topic: "Moxa (moxibustie) in de praktijk: wanneer en waarom?", category: "Over Acupunctuur", primaryKlacht: "/behandeling-werkwijze" },
  { slug: "cupping-acupunctuur-verschil", topic: "Cupping en acupunctuur: verschillen, overeenkomsten en gebruik", category: "Over Acupunctuur", primaryKlacht: "/behandeling-werkwijze" },

  // ===========================================================================
  // — Leefstijl & Voeding (TCM) —
  // ===========================================================================
  { slug: "voeding-volgens-tcm", topic: "Voeding volgens TCM: eten als medicijn", category: "Leefstijl", primaryKlacht: "/klachten/leefstijl-ondersteuning" },
  { slug: "warm-koud-voeding-tcm", topic: "Warm en koud in TCM-voeding: waarom dat verschil maakt", category: "Leefstijl", primaryKlacht: "/klachten/leefstijl-ondersteuning" },
  { slug: "seizoen-voeding-tcm", topic: "Eten met de seizoenen mee: TCM-voedingsadviezen door het jaar", category: "Leefstijl", primaryKlacht: "/klachten/leefstijl-ondersteuning" },
  { slug: "qigong-voor-beginners", topic: "Qigong voor beginners: zachte beweging voor energie en rust", category: "Leefstijl", primaryKlacht: "/klachten/leefstijl-ondersteuning" },
  { slug: "tai-chi-en-gezondheid", topic: "Tai Chi en gezondheid: bewegen vanuit de Chinese traditie", category: "Leefstijl", primaryKlacht: "/klachten/leefstijl-ondersteuning" },
  { slug: "ademhalingsoefeningen-stress", topic: "Ademhalingsoefeningen bij stress: rust binnen één minuut", category: "Leefstijl", primaryKlacht: "/klachten/stressklachten" },
  { slug: "kruiden-thee-gezondheid", topic: "Kruidenthee in TCM: welke thee past bij uw klacht?", category: "Leefstijl", primaryKlacht: "/klachten/leefstijl-ondersteuning" },
  { slug: "gember-tegen-misselijkheid", topic: "Gember tegen misselijkheid: oude wijsheid, moderne toepassing", category: "Leefstijl", primaryKlacht: "/klachten/maagklachten" },
  { slug: "acupressuurpunten-zelf-masseren", topic: "Acupressuurpunten die u zelf kunt masseren bij pijn en stress", category: "Leefstijl", primaryKlacht: "/klachten/leefstijl-ondersteuning" },

  // ===========================================================================
  // — Seizoenen —
  // ===========================================================================
  { slug: "lente-allergieen-voorbereiden", topic: "De lente voorbereiden: allergieën voor zijn met acupunctuur", category: "Seizoenen & Gezondheid", primaryKlacht: "/klachten/hooikoorts" },
  { slug: "zomerklachten-warmte-acupunctuur", topic: "Zomerklachten door warmte: hoe TCM uw lichaam koelt", category: "Seizoenen & Gezondheid", primaryKlacht: "/klachten/leefstijl-ondersteuning" },
  { slug: "winter-energiedip-acupunctuur", topic: "Wintermoeheid en energiedip: acupunctuur voor de donkere maanden", category: "Seizoenen & Gezondheid", primaryKlacht: "/klachten/vermoeidheid" },
  { slug: "herfstmoeheid-acupunctuur", topic: "Herfstmoeheid: waarom u zich in september slap voelt", category: "Seizoenen & Gezondheid", primaryKlacht: "/klachten/vermoeidheid" },

  // ===========================================================================
  // — Specifieke doelgroepen —
  // ===========================================================================
  { slug: "acupunctuur-bij-ouderen", topic: "Acupunctuur bij ouderen: zachte aanpak, breed inzetbaar", category: "Over Acupunctuur", primaryKlacht: "/behandeling-werkwijze" },
  { slug: "acupunctuur-bij-kinderen-wanneer", topic: "Acupunctuur bij kinderen: vanaf welke leeftijd en bij welke klachten?", category: "Over Acupunctuur", primaryKlacht: "/behandeling-werkwijze" },
  { slug: "acupunctuur-voor-sporters", topic: "Acupunctuur voor sporters: blessurepreventie en herstel", category: "Over Acupunctuur", primaryKlacht: "/klachten/pijnklachten-en-beweging" },
  { slug: "acupunctuur-bij-mannen", topic: "Acupunctuur bij mannen: stress, energie en hormonen", category: "Over Acupunctuur", primaryKlacht: "/behandeling-werkwijze" },
  { slug: "acupunctuur-na-bevalling", topic: "Acupunctuur na de bevalling: herstel van lichaam en energie", category: "Vrouwenklachten", primaryKlacht: "/klachten/zwangerschapsklachten" },
  { slug: "acupunctuur-tijdens-zwangerschap-veilig", topic: "Acupunctuur tijdens de zwangerschap: wat is veilig en wat niet?", category: "Vrouwenklachten", primaryKlacht: "/klachten/zwangerschapsklachten" },

  // ===========================================================================
  // — Praktisch / Werkwijze —
  // ===========================================================================
  { slug: "de-intake-acupunctuur", topic: "De intake bij de acupuncturist: waarom zo uitgebreid?", category: "Over Acupunctuur", primaryKlacht: "/behandeling-werkwijze" },
  { slug: "na-de-acupunctuur-behandeling", topic: "Wat te doen na een acupunctuurbehandeling? Praktische tips", category: "Over Acupunctuur", primaryKlacht: "/behandeling-werkwijze" },
  { slug: "naalden-steriel-veilig", topic: "Hoe veilig zijn acupunctuurnaalden? Steriliteit en kwaliteit", category: "Over Acupunctuur", primaryKlacht: "/behandeling-werkwijze" },
  { slug: "wat-aantrekken-naar-acupunctuur", topic: "Wat trek ik aan naar een acupunctuurbehandeling?", category: "Over Acupunctuur", primaryKlacht: "/behandeling-werkwijze" },
  { slug: "aanvullende-verzekering-acupunctuur", topic: "Aanvullende verzekering voor acupunctuur: waar moet u op letten?", category: "Tarieven & Vergoeding", primaryKlacht: "/tarieven-vergoeding" },
  { slug: "kosten-acupunctuur-uitleg", topic: "Kosten van acupunctuur: wat zit er in een behandeling?", category: "Tarieven & Vergoeding", primaryKlacht: "/tarieven-vergoeding" },

  // ===========================================================================
  // — Combinaties met andere therapieën —
  // ===========================================================================
  { slug: "acupunctuur-en-fysiotherapie-combineren", topic: "Acupunctuur en fysiotherapie combineren: kan dat samen?", category: "Over Acupunctuur", primaryKlacht: "/klachten/pijnklachten-en-beweging" },
  { slug: "acupunctuur-en-massage", topic: "Acupunctuur en massagetherapie: wanneer kiest u wat?", category: "Over Acupunctuur", primaryKlacht: "/behandeling-werkwijze" },
  { slug: "acupunctuur-en-yoga", topic: "Acupunctuur en yoga: een sterke combinatie voor lichaam en geest", category: "Leefstijl", primaryKlacht: "/klachten/leefstijl-ondersteuning" },
  { slug: "acupunctuur-en-mindfulness", topic: "Acupunctuur en mindfulness: rust van binnen én buiten", category: "Leefstijl", primaryKlacht: "/klachten/stressklachten" },
  { slug: "acupunctuur-naast-reguliere-zorg", topic: "Acupunctuur naast reguliere zorg: aanvullend, geen vervanging", category: "Over Acupunctuur", primaryKlacht: "/behandeling-werkwijze" },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function getExistingSlugs() {
  if (!existsSync(BLOG_DIR)) return new Set();
  return new Set(
    readdirSync(BLOG_DIR)
      .filter((f) => f.endsWith(".json"))
      .map((f) => f.replace(/\.json$/, ""))
  );
}

function pickTopic(forceIndex) {
  const existing = getExistingSlugs();
  if (forceIndex !== undefined) {
    const entry = TOPIC_BANK[forceIndex];
    if (!entry) throw new Error(`Topic index ${forceIndex} does not exist (max: ${TOPIC_BANK.length - 1})`);
    return entry;
  }
  const next = TOPIC_BANK.find((t) => !existing.has(t.slug));
  if (!next) throw new Error("All topics in the bank are already generated. Add new topics to TOPIC_BANK.");
  return next;
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

// ---------------------------------------------------------------------------
// Prompt
// ---------------------------------------------------------------------------

function buildPrompt(entry) {
  return `Je bent een professionele Nederlandse gezondheidscontent-schrijver voor Acupunctuur Zaandam, een traditionele Chinese geneeskundepraktijk in Zaandam.

Schrijf een blogartikel over het volgende onderwerp:
"${entry.topic}"

TOON EN STIJL:
- Rustig, betrouwbaar, professioneel, patiëntvriendelijk
- Schrijf in de u-vorm (beleefde aanspreking)
- Geen overdreven claims, geen valse hoop wekken
- Eerlijk en realistisch over wat acupunctuur wel en niet kan
- Geen verzonnen wetenschappelijke studies of statistieken
- Algemeen bekende feiten over acupunctuur zijn toegestaan

INHOUD:
- Lengte: 400–600 woorden in de body
- Gebruik alinea's, tussenkopjes (h2) en indien relevant een korte opsomming (ul/li)
- Sluit af met een call-to-action paragraaf die uitnodigt een afspraak te maken

INTERNE LINKS:
- Verwerk een natuurlijke interne link naar: ${entry.primaryKlacht}
- Verwerk een interne link naar /behandeling-werkwijze waar relevant
- Verwerk een interne link naar /#contact of /tarieven-vergoeding waar relevant

OUTPUT FORMAAT:
Geef ALLEEN een geldig JSON-object terug, zonder markdown code-blokken, zonder uitleg, zonder extra tekst.
Gebruik dit exacte schema:

{
  "title": "De volledige blogtitel",
  "slug": "${entry.slug}",
  "excerpt": "Korte samenvatting van 1-2 zinnen voor de blogkaart (max 160 tekens)",
  "date": "${today()}",
  "status": "published",
  "category": "${entry.category}",
  "tags": ["tag1", "tag2", "tag3", "tag4"],
  "seoTitle": "SEO-paginatitel (max 60 tekens) | Acupunctuur Zaandam",
  "metaDescription": "Meta beschrijving (max 155 tekens, pakkend, bevat zoekwoord)",
  "readingTime": "X min",
  "relatedKlachten": [
    { "href": "${entry.primaryKlacht}", "label": "Naam klacht" },
    { "href": "/klachten/...", "label": "Tweede gerelateerde klacht" }
  ],
  "body": "<p>HTML inhoud met <h2>, <p>, <ul>, <li>, <strong>, <em> tags. Geen andere HTML-elementen gebruiken. Interne links als <a href='...' class='klacht-link'>tekst</a>.</p>"
}`;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  // Check API key
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error("❌  ANTHROPIC_API_KEY is not set.");
    console.error("    Add it to your .env.local or export it before running:");
    console.error("    export ANTHROPIC_API_KEY=sk-ant-...");
    process.exit(1);
  }

  // Parse optional --topic flag
  const topicArg = process.argv.indexOf("--topic");
  const forceIndex = topicArg !== -1 ? parseInt(process.argv[topicArg + 1], 10) : undefined;

  // Pick topic
  const entry = pickTopic(forceIndex);
  console.log(`\n📝  Generating draft for: "${entry.topic}"`);
  console.log(`    Slug: ${entry.slug}`);
  console.log(`    Category: ${entry.category}\n`);

  // Call Claude API
  const client = new Anthropic({ apiKey });
  const message = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 4096,
    messages: [
      {
        role: "user",
        content: buildPrompt(entry),
      },
    ],
  });

  const rawText = message.content[0].type === "text" ? message.content[0].text : "";

  // Parse JSON — strip any accidental markdown fences
  const jsonText = rawText
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();

  let post;
  try {
    post = JSON.parse(jsonText);
  } catch {
    console.error("❌  Claude returned invalid JSON. Raw output:\n");
    console.error(rawText);
    process.exit(1);
  }

  // Force slug and status to match what we expect
  post.slug = entry.slug;
  post.status = "published";

  // Write file
  const outputPath = join(BLOG_DIR, `${entry.slug}.json`);
  writeFileSync(outputPath, JSON.stringify(post, null, 2) + "\n", "utf8");

  console.log(`✅  Draft saved to: content/blog/${entry.slug}.json`);
  console.log(`\n    To publish: remove or change the "status": "published" line.`);
  console.log(`    To preview locally: run npm run dev and visit /blog/${entry.slug}\n`);
}

main().catch((err) => {
  console.error("❌  Unexpected error:", err.message);
  process.exit(1);
});
