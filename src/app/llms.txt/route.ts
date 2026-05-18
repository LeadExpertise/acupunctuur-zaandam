import { readdirSync } from "fs";
import { join } from "path";
import { getPublishedPosts } from "@/lib/blog";

/**
 * /llms.txt — a curated index for LLM crawlers (ChatGPT, Claude, Perplexity,
 * Gemini). Spec: https://llmstxt.org
 *
 * Generated at build time from the actual klachten / behandelingen folder
 * structure plus published blog posts so it stays in sync automatically.
 */

const BASE = "https://www.acupunctuurzaandam.nl";

function humanize(slug: string): string {
  return slug
    .replace(/^acupunctuur-/, "")
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function getDirSlugs(rel: string): string[] {
  try {
    return readdirSync(join(process.cwd(), "src", "app", rel), { withFileTypes: true })
      .filter((e) => e.isDirectory())
      .map((e) => e.name)
      .sort();
  } catch {
    return [];
  }
}

export function GET() {
  const klachten = getDirSlugs("klachten");
  const behandelingen = getDirSlugs("behandelingen");
  const posts = getPublishedPosts();

  const lines: string[] = [];

  lines.push("# Acupunctuur Zaandam");
  lines.push("");
  lines.push(
    "> NVA-geregistreerde acupunctuurpraktijk van Sam de Vries in Koog aan de Zaan " +
      "(Zaanstreek). Behandelingen voor pijn, stress, burn-out, slaap, migraine, hormonale " +
      "en vrouwenklachten. Vergoed via aanvullende zorgverzekering."
  );
  lines.push("");
  lines.push("Adres: BedrijvigeBij Kamer A103, Lagendijk 3, 1541 KA Koog aan de Zaan");
  lines.push("Telefoon: +31 6 5799 8330");
  lines.push("Beroepsregister: NVA (Nederlandse Vereniging voor Acupunctuur)");
  lines.push("");

  lines.push("## Praktijkinformatie");
  lines.push("");
  lines.push(`- [Over de praktijk](${BASE}/over-de-praktijk): Acupuncturist Sam de Vries — achtergrond, filosofie en werkwijze`);
  lines.push(`- [Behandeling & werkwijze](${BASE}/behandeling-werkwijze): Verloop van intake en behandeling`);
  lines.push(`- [Tarieven & vergoeding](${BASE}/tarieven-vergoeding): €80 intake, €60 vervolg — vergoed via aanvullende verzekering`);
  lines.push(`- [Veelgestelde vragen](${BASE}/veelgestelde-vragen): Antwoorden op de meestgestelde vragen`);
  lines.push(`- [Welke klachten](${BASE}/welke-klachten): Overzicht van alle behandelbare klachten per categorie`);
  lines.push(`- [Behandelingen](${BASE}/behandelingen): Overzicht van alle acupunctuurbehandelingen`);
  lines.push("");

  lines.push("## Locatiepagina's");
  lines.push("");
  lines.push(`- [Acupunctuur Zaandam](${BASE}/acupunctuur-zaandam)`);
  lines.push(`- [Acupunctuur Koog aan de Zaan](${BASE}/acupunctuur-koog-aan-de-zaan)`);
  lines.push("");

  if (klachten.length) {
    lines.push("## Klachten");
    lines.push("");
    for (const slug of klachten) {
      lines.push(`- [${humanize(slug)}](${BASE}/klachten/${slug})`);
    }
    lines.push("");
  }

  if (behandelingen.length) {
    lines.push("## Behandelingen");
    lines.push("");
    for (const slug of behandelingen) {
      lines.push(`- [${humanize(slug)}](${BASE}/behandelingen/${slug})`);
    }
    lines.push("");
  }

  if (posts.length) {
    lines.push("## Blog");
    lines.push("");
    for (const post of posts) {
      const title = post.title.replace(/\s+/g, " ").trim();
      const excerpt = post.excerpt.replace(/\s+/g, " ").trim();
      lines.push(`- [${title}](${BASE}/blog/${post.slug}): ${excerpt}`);
    }
    lines.push("");
  }

  lines.push("## Juridisch");
  lines.push("");
  lines.push(`- [Privacyverklaring](${BASE}/privacyverklaring)`);
  lines.push(`- [Algemene voorwaarden](${BASE}/algemene-voorwaarden)`);
  lines.push("");

  return new Response(lines.join("\n"), {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
