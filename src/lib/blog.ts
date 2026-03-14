import { readdirSync, readFileSync } from "fs";
import { join } from "path";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type RelatedLink = {
  href: string;
  label: string;
};

export type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  /** ISO date string, e.g. "2026-03-14" */
  date: string;
  /** Optional. Omit (or set to anything other than "draft") to publish automatically.
   *  Set to "draft" to hide a post from the live site. */
  status?: "draft" | string;
  category: string;
  tags: string[];
  seoTitle: string;
  metaDescription: string;
  readingTime: string;
  /** Internal links shown in the "Gerelateerde klachten" block */
  relatedKlachten?: RelatedLink[];
  /** HTML string — rendered as the article body */
  body: string;
};

// ---------------------------------------------------------------------------
// File-system helpers
// ---------------------------------------------------------------------------

const BLOG_DIR = join(process.cwd(), "content", "blog");

function readAllPosts(): BlogPost[] {
  const files = readdirSync(BLOG_DIR).filter((f) => f.endsWith(".json"));
  return files
    .map((f) => {
      const raw = readFileSync(join(BLOG_DIR, f), "utf8");
      return JSON.parse(raw) as BlogPost;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/** Returns ALL posts. Used internally. */
export function getAllPosts(): BlogPost[] {
  return readAllPosts();
}

/** Returns all posts except explicit drafts.
 *  Posts are live by default — only `"status": "draft"` hides them. */
export function getPublishedPosts(): BlogPost[] {
  return readAllPosts().filter((p) => p.status !== "draft");
}

/** Looks up a single non-draft post by slug. Returns undefined for drafts. */
export function getPublishedPostBySlug(slug: string): BlogPost | undefined {
  return getPublishedPosts().find((p) => p.slug === slug);
}

/** Format an ISO date string to Dutch long format, e.g. "14 maart 2026" */
export function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
