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
  {
    slug: "acupunctuur-bij-nekklachten",
    topic: "Helpt acupunctuur bij nekklachten en nekpijn?",
    category: "Pijn & Beweging",
    primaryKlacht: "/klachten/nekklachten",
  },
  {
    slug: "acupunctuur-bij-hoofdpijn",
    topic: "Acupunctuur bij hoofdpijn: wanneer helpt het en wanneer niet?",
    category: "Hoofd & Zenuwstelsel",
    primaryKlacht: "/klachten/hoofdpijn",
  },
  {
    slug: "acupunctuur-bij-migraine",
    topic: "Acupunctuur als preventieve behandeling bij migraine",
    category: "Hoofd & Zenuwstelsel",
    primaryKlacht: "/klachten/migraine",
  },
  {
    slug: "acupunctuur-bij-lage-rugklachten",
    topic: "Acupunctuur bij lage rugpijn: wat kun je verwachten?",
    category: "Pijn & Beweging",
    primaryKlacht: "/klachten/lage-rugklachten",
  },
  {
    slug: "acupunctuur-bij-schouderklachten",
    topic: "Schouderklachten en acupunctuur: van frozen shoulder tot spierspanning",
    category: "Pijn & Beweging",
    primaryKlacht: "/klachten/schouderklachten",
  },
  {
    slug: "acupunctuur-bij-kniepijn",
    topic: "Acupunctuur bij kniepijn en artrose van de knie",
    category: "Pijn & Beweging",
    primaryKlacht: "/klachten/kniepijn",
  },
  {
    slug: "wat-is-ischias",
    topic: "Wat is ischias en hoe helpt acupunctuur bij ischiasklachten?",
    category: "Pijn & Beweging",
    primaryKlacht: "/klachten/ischias",
  },
  {
    slug: "acupunctuur-bij-fibromyalgie",
    topic: "Fibromyalgie en acupunctuur: wat is realistisch te verwachten?",
    category: "Pijn & Beweging",
    primaryKlacht: "/klachten/fibromyalgie",
  },
  // — Stress & Energie —
  {
    slug: "burn-out-herstel-met-acupunctuur",
    topic: "Burn-out herstel: hoe acupunctuur bijdraagt aan het herstelproces",
    category: "Stress & Energie",
    primaryKlacht: "/klachten/burn-out",
  },
  {
    slug: "chronische-vermoeidheid-acupunctuur",
    topic: "Chronische vermoeidheid en acupunctuur: aanpak van de oorzaak",
    category: "Stress & Energie",
    primaryKlacht: "/klachten/chronische-vermoeidheid",
  },
  {
    slug: "overprikkeling-rustiger-worden",
    topic: "Overprikkeling en een druk hoofd: wat kun je zelf doen en hoe helpt acupunctuur?",
    category: "Stress & Energie",
    primaryKlacht: "/klachten/overprikkeling",
  },
  {
    slug: "angstklachten-acupunctuur",
    topic: "Acupunctuur bij angstklachten: het zenuwstelsel kalmeren van binnenuit",
    category: "Stress & Energie",
    primaryKlacht: "/klachten/angstklachten",
  },
  // — Slaap —
  {
    slug: "tips-beter-slapen-zonder-slaapmiddelen",
    topic: "Beter slapen zonder slaapmiddelen: praktische tips en de rol van acupunctuur",
    category: "Slaap & Herstel",
    primaryKlacht: "/klachten/slaapproblemen",
  },
  // — Spijsvertering —
  {
    slug: "acupunctuur-bij-prikkelbare-darm",
    topic: "Prikkelbare darm syndroom (PDS) en acupunctuur: wat helpt?",
    category: "Spijsvertering",
    primaryKlacht: "/klachten/prikkelbare-darm-syndroom",
  },
  {
    slug: "acupunctuur-bij-reflux",
    topic: "Zuurbranden en reflux behandelen met acupunctuur",
    category: "Spijsvertering",
    primaryKlacht: "/klachten/reflux",
  },
  {
    slug: "opgeblazen-gevoel-acupunctuur",
    topic: "Opgeblazen gevoel en een trage spijsvertering: hoe acupunctuur kan helpen",
    category: "Spijsvertering",
    primaryKlacht: "/klachten/opgeblazen-gevoel",
  },
  // — Vrouwenklachten —
  {
    slug: "acupunctuur-bij-menstruatieklachten",
    topic: "Menstruatieklachten verminderen met acupunctuur",
    category: "Vrouwenklachten",
    primaryKlacht: "/klachten/menstruatieklachten",
  },
  {
    slug: "acupunctuur-bij-overgangsklachten",
    topic: "Overgangsklachten en acupunctuur: opvliegers, slaap en stemming",
    category: "Vrouwenklachten",
    primaryKlacht: "/klachten/overgangsklachten",
  },
  {
    slug: "vruchtbaarheid-en-acupunctuur",
    topic: "Acupunctuur ter ondersteuning van de vruchtbaarheid: wat is de rol?",
    category: "Vrouwenklachten",
    primaryKlacht: "/klachten/vruchtbaarheidsproblemen",
  },
  {
    slug: "zwangerschapsklachten-acupunctuur",
    topic: "Zwangerschapsklachten verlichten met acupunctuur: veilig en effectief?",
    category: "Vrouwenklachten",
    primaryKlacht: "/klachten/zwangerschapsklachten",
  },
  // — Luchtwegen & Immuniteit —
  {
    slug: "hooikoorts-acupunctuur",
    topic: "Hooikoorts behandelen met acupunctuur: minder niezen, minder medicatie",
    category: "Luchtwegen & Allergie",
    primaryKlacht: "/klachten/hooikoorts",
  },
  {
    slug: "acupunctuur-bij-sinusitis",
    topic: "Acupunctuur bij sinusitis en neusklachten: hoe werkt het?",
    category: "Luchtwegen & Allergie",
    primaryKlacht: "/klachten/sinusitis",
  },
  {
    slug: "weerstand-verbeteren-acupunctuur",
    topic: "Je weerstand versterken met acupunctuur: minder snel ziek in de winter",
    category: "Immuniteit",
    primaryKlacht: "/klachten/verminderde-weerstand",
  },
  {
    slug: "long-covid-vermoeidheid-acupunctuur",
    topic: "Long COVID en vermoeidheid: acupunctuur als onderdeel van herstel",
    category: "Immuniteit",
    primaryKlacht: "/klachten/long-covid",
  },
  // — Hoofd & Zenuwstelsel —
  {
    slug: "duizeligheid-acupunctuur",
    topic: "Duizeligheid en oorsuizen: wat kan acupunctuur betekenen?",
    category: "Hoofd & Zenuwstelsel",
    primaryKlacht: "/klachten/duizeligheid",
  },
  {
    slug: "acupunctuur-bij-tinnitus",
    topic: "Tinnitus en acupunctuur: kan oorsuizen verminderd worden?",
    category: "Hoofd & Zenuwstelsel",
    primaryKlacht: "/klachten/tinnitus",
  },
  // — Algemeen & Informatief —
  {
    slug: "eerste-acupunctuur-behandeling",
    topic: "Wat kun je verwachten bij je eerste acupunctuurbehandeling?",
    category: "Over Acupunctuur",
    primaryKlacht: "/behandeling-werkwijze",
  },
  {
    slug: "acupunctuur-vergoed-zorgverzekering",
    topic: "Wordt acupunctuur vergoed door de zorgverzekering?",
    category: "Tarieven & Vergoeding",
    primaryKlacht: "/tarieven-vergoeding",
  },
  {
    slug: "acupunctuur-vs-fysiotherapie",
    topic: "Acupunctuur of fysiotherapie bij pijnklachten: wat past bij jou?",
    category: "Over Acupunctuur",
    primaryKlacht: "/klachten/pijnklachten-en-beweging",
  },
  {
    slug: "seizoensgebonden-klachten-herfst-winter",
    topic: "Herfst en winter: waarom acupunctuur nu extra waardevol is",
    category: "Seizoenen & Gezondheid",
    primaryKlacht: "/klachten/verminderde-weerstand",
  },
  {
    slug: "stoppen-met-roken-acupunctuur",
    topic: "Stoppen met roken met behulp van acupunctuur: realistische verwachtingen",
    category: "Leefstijl",
    primaryKlacht: "/klachten/stoppen-met-roken",
  },
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
  "status": "draft",
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
  post.status = "draft";

  // Write file
  const outputPath = join(BLOG_DIR, `${entry.slug}.json`);
  writeFileSync(outputPath, JSON.stringify(post, null, 2) + "\n", "utf8");

  console.log(`✅  Draft saved to: content/blog/${entry.slug}.json`);
  console.log(`\n    To publish: remove or change the "status": "draft" line.`);
  console.log(`    To preview locally: run npm run dev and visit /blog/${entry.slug}\n`);
}

main().catch((err) => {
  console.error("❌  Unexpected error:", err.message);
  process.exit(1);
});
