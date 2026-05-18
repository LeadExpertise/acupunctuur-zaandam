
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Script from "next/script";
import "@/styles/globals.css";
import { defaultMetadata } from "@/lib/metadata";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Cormorant Garamond is the LCP-critical font (H1 + H2 on every page).
// Only loading `400 normal` keeps the request to a single font file; italic
// is rarely used and the browser will synthesize it acceptably.
const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  display: "swap",
  preload: true,
});

// Inter is the body font. 400 (normal) + 500 (medium) covers >85% of usages;
// font-light (300) on body copy is hard to read on mobile anyway, so we drop it
// and let the browser fall back to 400 for class="font-light" elements.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF8F3" },
    { media: "(prefers-color-scheme: dark)", color: "#1F3A36" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        {/* Preconnect to third-party origins used by GTM, analytics, icons,
            booking widget, and image CDNs. Saves DNS+TLS handshake time
            (~150–300ms each on mobile) when these resources are actually
            requested later in the page lifecycle. */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://hoirqrkdgbmvpwutwuwj.supabase.co" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://code.iconify.design" />
        <link rel="dns-prefetch" href="https://api.leadconnectorhq.com" />
        <link rel="dns-prefetch" href="https://link.msgsndr.com" />
        <link rel="dns-prefetch" href="https://dashboard.searchatlas.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body
        className={`${cormorantGaramond.variable} ${inter.variable} antialiased selection:bg-[#F2EDE3] selection:text-[#1F3A36] text-[#1F3A36] bg-[#FAF8F3]`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TCXTQHNW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Google Tag Manager */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TCXTQHNW');`,
          }}
        />

        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QVP2D9QN30"
          strategy="afterInteractive"
        />
        <Script
          id="ga4-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-QVP2D9QN30');`,
          }}
        />

        {/* Iconify web component — decorative, loaded after page is idle */}
        <Script
          src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"
          strategy="lazyOnload"
        />

        {/* SearchAtlas dynamic optimization — non-critical, runs in idle time */}
        <Script
          id="sa-dynamic-optimization"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(){
              var script = document.createElement("script");
              script.setAttribute("nowprocket","");
              script.setAttribute("nitro-exclude","");
              script.src = "https://dashboard.searchatlas.com/scripts/dynamic_optimization.js";
              script.dataset.uuid = "22688c06-d420-48c8-9d36-a043272702e6";
              script.id = "sa-dynamic-optimization-loader";
              document.head.appendChild(script);
            })();`,
          }}
        />
        {/* LocalBusiness / MedicalBusiness structured data */}
        <Script
          id="schema-local-business"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "@id": "https://www.acupunctuurzaandam.nl/#practice",
              name: "Acupunctuur Zaandam — Sam de Vries",
              description:
                "NVA-erkende acupunctuurpraktijk in Zaandam. Behandelingen bij pijn, stress, burnout, slaapproblemen, migraine en vrouwenklachten.",
              url: "https://www.acupunctuurzaandam.nl",
              telephone: "+31657998330",
              logo: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/68f83157-af01-4d10-a1e0-6bb35e6e923d_320w.png",
              image:
                "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/68f83157-af01-4d10-a1e0-6bb35e6e923d_320w.png",
              priceRange: "€60 - €80",
              paymentAccepted: ["Cash", "Bank Transfer", "Invoice"],
              currenciesAccepted: "EUR",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Acupunctuurbehandelingen",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalTherapy",
                      name: "Intakeconsult acupunctuur (1,5 uur)",
                    },
                    price: "80",
                    priceCurrency: "EUR",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalTherapy",
                      name: "Vervolgbehandeling acupunctuur (1 uur)",
                    },
                    price: "60",
                    priceCurrency: "EUR",
                  },
                ],
              },
              founder: { "@id": "https://www.acupunctuurzaandam.nl/#sam-de-vries" },
              employee: { "@id": "https://www.acupunctuurzaandam.nl/#sam-de-vries" },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Lagendijk 3",
                addressLocality: "Koog aan de Zaan",
                postalCode: "1541 KA",
                addressCountry: "NL",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 52.4387,
                longitude: 4.8293,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "17:00",
                },
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+31657998330",
                contactType: "customer service",
                availableLanguage: ["Dutch"],
              },
              areaServed: [
                { "@type": "City", name: "Zaandam" },
                { "@type": "City", name: "Koog aan de Zaan" },
                { "@type": "City", name: "Wormerveer" },
                { "@type": "City", name: "Zaandijk" },
                { "@type": "City", name: "Krommenie" },
                { "@type": "City", name: "Assendelft" },
              ],
              medicalSpecialty: "Acupuncture",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "5",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  author: { "@type": "Person", name: "Koen Lindeman" },
                  reviewBody:
                    "In de voorbereiding op mijn eerste marathon kwam een oude enkelblessure opspelen. Drie behandelingen in drie weken en het had meteen al een enorm merkbaar effect. Ik kon probleemloos doortrainen en heb de marathon zonder pijn uitgelopen. Een aanrader!",
                },
                {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  author: { "@type": "Person", name: "Irene de Vries" },
                  reviewBody:
                    "Prima behandeld. Ik ben belast met een chronische kwaal en ben met een behandeling per drie weken goed geholpen.",
                },
                {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  author: { "@type": "Person", name: "Guntug Yardimci" },
                  reviewBody:
                    "Ik had nooit eerder acupunctuur geprobeerd, totdat ik bij Sam terechtkwam met vermoeidheidsklachten en stress. Sam luistert heel goed alvorens hij een behandeling toepast. Door hem ben ik heel snel opgeknapt.",
                },
                {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  author: { "@type": "Person", name: "Jasper Nederhoff" },
                  reviewBody:
                    "Fijne ervaring, open gesprekken, veilige setting en een resultaat meer dan ik had verwacht. Heel erg blij met Sam, zijn werk en passie.",
                },
                {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  author: { "@type": "Person", name: "Olga Steffhaan" },
                  reviewBody:
                    "Ik kwam vorige week heel slecht lopend en met veel pijn bij Sam binnen. Na de behandeling stond ik op van de behandeltafel en kon ik tot mijn grote verbazing rechtop en met redelijk weinig pijn lopen.",
                },
              ],
              hasMap:
                "https://www.google.com/maps/place/Lagendijk+3,+1541+KA+Koog+aan+de+Zaan",
            }),
          }}
        />

        {/* WebSite schema with SearchAction — enables sitelinks search box */}
        <Script
          id="schema-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://www.acupunctuurzaandam.nl/#website",
              url: "https://www.acupunctuurzaandam.nl",
              name: "Acupunctuur Zaandam",
              inLanguage: "nl-NL",
              publisher: { "@id": "https://www.acupunctuurzaandam.nl/#practice" },
            }),
          }}
        />

        {/* Skip to main content – accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-[#1F3A36] focus:text-[#FAF8F3] focus:rounded-sm focus:outline-none focus:ring-2 focus:ring-[#8A6B3D] focus:ring-offset-2 focus:ring-offset-[#FAF8F3]"
        >
          Ga naar hoofdinhoud
        </a>

        <Header />
        {children}
        <Footer />

        {/* Sticky WhatsApp button */}
        <a
          href="https://wa.me/31657998330"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Neem contact op via WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg shadow-[#25D366]/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-4 focus:ring-offset-[#FAF8F3]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
