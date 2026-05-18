import { ImageResponse } from "next/og";
import { getPublishedPosts, getPublishedPostBySlug } from "@/lib/blog";

export const alt = "Acupunctuur Zaandam — Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateImageMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPublishedPostBySlug(slug);
  return [{ id: slug, alt: post?.title ?? alt, contentType, size }];
}

export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

/**
 * Per-blog-post Open Graph image. Renders the post title on top of the
 * site's signature green gradient so social previews are page-specific.
 */
export default async function BlogPostOgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPublishedPostBySlug(slug);
  const title = post?.title ?? "Acupunctuur Zaandam — Blog";
  const category = post?.category ?? "Blog";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #1F3A36 0%, #4A6559 100%)",
          color: "#FAF8F3",
          padding: "70px 80px",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 24,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#D4B88A",
              marginBottom: 18,
            }}
          >
            Acupunctuur Zaandam · Blog
          </div>
          <div
            style={{
              fontSize: 20,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "rgba(250, 248, 243, 0.7)",
            }}
          >
            {category}
          </div>
        </div>

        <div
          style={{
            fontSize: title.length > 80 ? 56 : 72,
            lineHeight: 1.1,
            maxWidth: 1050,
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "rgba(250, 248, 243, 0.7)",
            letterSpacing: 2,
          }}
        >
          <span>acupunctuurzaandam.nl</span>
          <span>Sam de Vries · NVA-geregistreerd</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
