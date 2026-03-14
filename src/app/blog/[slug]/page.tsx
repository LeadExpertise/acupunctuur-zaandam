import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPublishedPosts, getPublishedPostBySlug, formatDate } from "@/lib/blog";

// ---------------------------------------------------------------------------
// Static generation — only published posts get built as pages.
// Drafts return 404 at runtime even if the slug is guessed.
// ---------------------------------------------------------------------------

export async function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

// ---------------------------------------------------------------------------
// Per-post metadata
// ---------------------------------------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPublishedPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.seoTitle,
    description: post.metaDescription,
    keywords: post.tags,
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPublishedPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Sam de Vries",
      url: "https://www.acupunctuurzaandam.nl/over-de-praktijk",
    },
    publisher: {
      "@type": "MedicalClinic",
      name: "Acupunctuur Zaandam",
      url: "https://www.acupunctuurzaandam.nl",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.acupunctuurzaandam.nl/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main id="main-content" className="bg-[#FAF8F3] pt-40 pb-24">

        {/* Breadcrumb */}
        <div className="max-w-4xl mx-auto px-6 mb-10">
          <nav aria-label="Kruimelpad" className="flex items-center gap-2 text-xs text-[#1F3A36]/50 font-light flex-wrap">
            <Link href="/" className="hover:text-[#4A6559] transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog" className="hover:text-[#4A6559] transition-colors">Blog</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#1F3A36]/80 line-clamp-1">{post.title}</span>
          </nav>
        </div>

        {/* Article header */}
        <header className="max-w-4xl mx-auto px-6 mb-12">
          <div className="flex items-center gap-3 mb-5">
            <span
              className="inline-block bg-[#F2EDE3] text-[#8A6B3D] text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {post.category}
            </span>
          </div>

          <h1
            className="text-3xl md:text-5xl font-normal text-[#1F3A36] tracking-tight leading-tight mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {post.title}
          </h1>

          <div
            className="flex flex-wrap items-center gap-4 text-xs text-[#1F3A36]/50 font-light"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span>{formatDate(post.date)}</span>
            <span aria-hidden="true" className="w-1 h-1 rounded-full bg-[#1F3A36]/30" />
            <span>{post.readingTime} lezen</span>
            <span aria-hidden="true" className="w-1 h-1 rounded-full bg-[#1F3A36]/30" />
            <span>Acupunctuur Zaandam</span>
          </div>
        </header>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6 mb-12">
          <hr className="border-[#1F3A36]/10" />
        </div>

        {/* Article body */}
        {/* Body is developer/AI-generated HTML — not user input, safe to render */}
        <article className="max-w-4xl mx-auto px-6 mb-16">
          <div
            className="prose-custom text-[#1F3A36]/85 font-light leading-relaxed
              [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-normal [&_h2]:text-[#1F3A36]
              [&_h2]:tracking-tight [&_h2]:mt-10 [&_h2]:mb-4
              [&_h2]:font-[\'Cormorant_Garamond\',serif]
              [&_p]:text-base [&_p]:leading-relaxed
              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1
              [&_li]:text-base [&_li]:leading-relaxed
              [&_em]:italic [&_strong]:font-medium [&_strong]:text-[#1F3A36]"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        </article>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="max-w-4xl mx-auto px-6 mb-16">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-light text-[#1F3A36]/60 bg-[#F2EDE3] px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Related klachten */}
        {post.relatedKlachten && post.relatedKlachten.length > 0 && (
          <section
            aria-labelledby="gerelateerde-klachten-titel"
            className="bg-white border-y border-[#1F3A36]/10 py-16 mb-16"
          >
            <div className="max-w-4xl mx-auto px-6">
              <h2
                id="gerelateerde-klachten-titel"
                className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-2 text-center"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Gerelateerde klachten
              </h2>
              <p className="text-sm text-[#1F3A36]/50 font-light text-center mb-8">
                Acupunctuur helpt ook bij deze verwante klachten
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {post.relatedKlachten.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="klacht-card-link flex items-center justify-between gap-2 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/10 rounded-xl px-5 py-4 transition-colors duration-200 group"
                  >
                    <span className="text-sm font-medium text-[#1F3A36]">{item.label}</span>
                    <iconify-icon
                      icon="solar:alt-arrow-right-linear"
                      className="arrow-icon text-[#4A6559] text-base shrink-0 transition-transform duration-200"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA — afspraak */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#1F3A36] rounded-2xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2
                className="text-2xl md:text-3xl font-normal text-[#FAF8F3] tracking-tight mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Herkenbaar? Plan een afspraak
              </h2>
              <p className="text-sm font-light text-[#FAF8F3]/80 max-w-md leading-relaxed">
                Bespreek uw klachten vrijblijvend en ontdek of acupunctuur bij uw situatie past.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-sm bg-[#FAF8F3] text-[#1F3A36] text-sm font-normal hover:bg-[#F2EDE3] transition-colors duration-300 whitespace-nowrap"
              >
                Plan een afspraak
              </Link>
              <a
                href="https://wa.me/31657998330"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-[#25D366] text-white text-sm font-normal hover:bg-[#128C7E] transition-colors duration-300 whitespace-nowrap"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Back to blog */}
        <div className="max-w-4xl mx-auto px-6 mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-light text-[#1F3A36]/60 hover:text-[#4A6559] transition-colors group"
          >
            <iconify-icon
              icon="solar:alt-arrow-left-linear"
              className="text-base transition-transform duration-200 group-hover:-translate-x-1"
            />
            Terug naar blog
          </Link>
        </div>

      </main>
    </>
  );
}
