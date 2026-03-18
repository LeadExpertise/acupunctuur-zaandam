
import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Script from "next/script";
import "@/styles/globals.css";
import { defaultMetadata } from "@/lib/metadata";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${cormorantGaramond.variable} ${inter.variable} antialiased selection:bg-[#F2EDE3] selection:text-[#1F3A36] text-[#1F3A36] bg-[#FAF8F3]`}
      >
        <Script
          src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"
          strategy="afterInteractive"
        />
<Script
  id="sa-dynamic-optimization"
  strategy="afterInteractive"
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
