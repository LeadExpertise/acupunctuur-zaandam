import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Inzichten over Acupunctuur & Gezondheid | Acupunctuur Zaandam",
  description:
    "Lees artikelen over acupunctuur, traditionele Chinese geneeskunde, gezondheid en welzijn. Praktische inzichten van Acupunctuur Zaandam.",
  openGraph: {
    title: "Blog | Acupunctuur Zaandam",
    description:
      "Artikelen over acupunctuur, gezondheid en welzijn van Acupunctuur Zaandam.",
    type: "website",
  },
};

export default function BlogOverviewPage() {
  const posts = getPublishedPosts();

  return (
    <main id="main-content" className="pt-40 pb-24 min-h-screen bg-[#FAF8F3]">

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <nav aria-label="Kruimelpad" className="flex items-center gap-2 text-xs text-[#1F3A36]/50 font-light">
          <Link href="/" className="hover:text-[#4A6559] transition-colors">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-[#1F3A36]/80">Blog</span>
        </nav>
      </div>

      {/* Page header */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <div className="flex flex-col items-start gap-3 mb-4">
          <span
            className="uppercase text-xs font-medium text-[#8A6B3D] tracking-widest"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Acupunctuur Zaandam
          </span>
          <div aria-hidden="true" className="h-px w-8 bg-[#8A6B3D]/60" />
        </div>
        <h1
          className="text-4xl md:text-5xl font-normal text-[#1F3A36] tracking-tight mb-6"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Blog
        </h1>
        <p className="text-base font-light text-[#1F3A36]/70 max-w-xl leading-relaxed">
          Inzichten over acupunctuur, traditionele Chinese geneeskunde en gezondheid — voor iedereen die meer wil begrijpen over zijn of haar klachten en behandelmogelijkheden.
        </p>
      </div>

      {/* Post grid */}
      <div className="max-w-6xl mx-auto px-6">
        {posts.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-[#1F3A36]/50 font-light">Er zijn nog geen gepubliceerde artikelen.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col bg-white border border-[#1F3A36]/8 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* Category bar */}
                <div className="bg-[#F2EDE3] px-6 py-3 shrink-0">
                  <span
                    className="text-[10px] font-semibold uppercase tracking-widest text-[#8A6B3D]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-6">
                  <div
                    className="text-xs text-[#1F3A36]/40 font-light mb-3"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {formatDate(post.date)} · {post.readingTime} lezen
                  </div>

                  <h2
                    className="text-xl font-normal text-[#1F3A36] tracking-tight leading-snug mb-3 group-hover:text-[#4A6559] transition-colors"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {post.title}
                  </h2>

                  <p className="text-sm font-light text-[#1F3A36]/70 leading-relaxed flex-grow mb-6">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-normal text-[#4A6559] hover:text-[#1F3A36] transition-colors self-start group/link"
                  >
                    Lees artikel
                    <iconify-icon
                      icon="solar:alt-arrow-right-linear"
                      className="text-base transition-transform duration-200 group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* CTA block */}
      <div className="max-w-6xl mx-auto px-6 mt-24">
        <div className="bg-[#1F3A36] rounded-2xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2
              className="text-2xl md:text-3xl font-normal text-[#FAF8F3] tracking-tight mb-3"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Klaar om te starten?
            </h2>
            <p className="text-sm font-light text-[#FAF8F3]/80 max-w-md leading-relaxed">
              Lees genoeg? Plan een vrijblijvende kennismaking en ontdek of acupunctuur bij uw klachten past.
            </p>
          </div>
          <Link
            href="/#contact"
            className="shrink-0 inline-flex items-center justify-center px-8 py-3.5 rounded-sm bg-[#FAF8F3] text-[#1F3A36] text-sm font-normal hover:bg-[#F2EDE3] transition-colors duration-300 whitespace-nowrap"
          >
            Plan een afspraak
          </Link>
        </div>
      </div>

    </main>
  );
}
