"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <nav aria-label="Hoofdnavigatie" className="fixed top-0 left-0 right-0 z-50 flex flex-col">

      {/* Main navigation bar */}
      <div className="bg-[#FAF8F3]/95 backdrop-blur-md border-b border-[#1F3A36]/5 relative z-20">
        <div className="flex h-20 max-w-6xl mr-auto ml-auto pr-4 sm:pr-6 pl-4 sm:pl-6 items-center justify-between">

          <Link
            href="/"
            aria-label="Home Acupunctuur Zaandam"
            onClick={close}
            className="shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-4 focus-visible:ring-offset-[#FAF8F3] rounded-sm inline-flex items-center"
          >
            <Image
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/68f83157-af01-4d10-a1e0-6bb35e6e923d_320w.png"
              alt="Acupunctuur Zaandam Logo"
              width={160}
              height={32}
              priority
              className="!w-auto !h-6 sm:!h-8 object-contain"
            />
          </Link>

          {/* Desktop menu */}
          <ul
            className="hidden lg:flex gap-6 list-none mt-0 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-0 items-center"
            role="list"
          >
            <li>
              <Link href="/welke-klachten" className="hover:text-[#4A6559] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-4 text-sm font-normal text-[#1F3A36]/80 rounded-sm pt-0.5 pr-1 pb-0.5 pl-1">
                Welke klachten
              </Link>
            </li>
            <li>
              <Link href="/behandeling-werkwijze" className="text-sm font-normal text-[#1F3A36]/80 hover:text-[#4A6559] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-4 rounded-sm px-1 py-0.5">
                Behandeling &amp; werkwijze
              </Link>
            </li>
            <li>
              <Link href="/tarieven-vergoeding" className="hover:text-[#4A6559] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-4 text-sm font-normal text-[#1F3A36]/80 rounded-sm pt-0.5 pr-1 pb-0.5 pl-1">
                Tarieven &amp; vergoeding
              </Link>
            </li>
            <li>
              <Link href="/over-de-praktijk" className="hover:text-[#4A6559] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-4 text-sm font-normal text-[#1F3A36]/80 rounded-sm pt-0.5 pr-1 pb-0.5 pl-1">
                Over ons
              </Link>
            </li>
            <li>
              <Link href="/veelgestelde-vragen" className="hover:text-[#4A6559] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-4 text-sm font-normal text-[#1F3A36]/80 rounded-sm pt-0.5 pr-1 pb-0.5 pl-1">
                Veelgestelde vragen
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-[#4A6559] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-4 text-sm font-normal text-[#1F3A36]/80 rounded-sm pt-0.5 pr-1 pb-0.5 pl-1">
                Blog
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="#contact"
              onClick={close}
              className="inline-flex items-center justify-center px-3 py-2 sm:px-6 sm:py-2.5 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-[10px] sm:text-xs font-normal hover:bg-[#4A6559] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F3] whitespace-nowrap"
            >
              Plan een afspraak
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Menu sluiten" : "Menu openen"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="lg:hidden flex items-center justify-center cursor-pointer text-[#1F3A36] hover:text-[#4A6559] transition-colors p-1 sm:p-2 -mr-1 sm:-mr-2 shrink-0"
            >
              <iconify-icon
                icon={menuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"}
                className="text-2xl sm:text-3xl"
                stroke-width="1.5"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Review strip */}
      <div className="flex z-10 bg-[#F2EDE3]/95 border-[#1F3A36]/10 border-b pt-1.5 pb-1.5 px-4 relative backdrop-blur-md items-center justify-center">
        <div
          className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3 text-[10px] sm:text-xs font-medium tracking-widest text-[#1F3A36]/80 uppercase text-center"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5 text-[#fbbc04]">
              <iconify-icon icon="solar:star-bold" className="text-sm" stroke-width="1.5" />
              <iconify-icon icon="solar:star-bold" className="text-sm" stroke-width="1.5" />
              <iconify-icon icon="solar:star-bold" className="text-sm" stroke-width="1.5" />
              <iconify-icon icon="solar:star-bold" className="text-sm" stroke-width="1.5" />
              <iconify-icon icon="solar:star-half-circle-bold" className="text-sm" stroke-width="1.5" />
            </div>
            <span>4.6/5 Klantervaring</span>
          </div>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-[#1F3A36]/30" />
          <span className="font-normal text-[#1F3A36]">Tijdelijk 10% korting op uw eerste sessie</span>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="absolute top-[100%] left-0 w-full bg-[#FAF8F3] flex flex-col border-b border-[#1F3A36]/10 shadow-2xl p-6 gap-6 lg:hidden z-0"
        >
          <ul className="flex flex-col gap-4 list-none p-0 m-0">
            <li>
              <Link href="/welke-klachten" onClick={close} className="text-base font-normal text-[#1F3A36] block pb-3 border-b border-[#1F3A36]/5">
                Welke klachten
              </Link>
            </li>
            <li>
              <Link href="/behandeling-werkwijze" onClick={close} className="text-base font-normal text-[#1F3A36] block pb-3 border-b border-[#1F3A36]/5">
                Behandeling &amp; werkwijze
              </Link>
            </li>
            <li>
              <Link href="/tarieven-vergoeding" onClick={close} className="text-base font-normal text-[#1F3A36] block pb-3 border-b border-[#1F3A36]/5">
                Tarieven &amp; vergoeding
              </Link>
            </li>
            <li>
              <Link href="/over-de-praktijk" onClick={close} className="text-base font-normal text-[#1F3A36] block pb-3 border-b border-[#1F3A36]/5">
                Over ons
              </Link>
            </li>
            <li>
              <Link href="/veelgestelde-vragen" onClick={close} className="text-base font-normal text-[#1F3A36] block pb-3 border-b border-[#1F3A36]/5">
                Veelgestelde vragen
              </Link>
            </li>
            <li>
              <Link href="/blog" onClick={close} className="text-base font-normal text-[#1F3A36] block pb-3 border-b border-[#1F3A36]/5">
                Blog
              </Link>
            </li>
          </ul>
          <a
            href="#contact"
            onClick={close}
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-normal hover:bg-[#4A6559] transition-colors duration-300"
          >
            Plan een afspraak
          </a>
        </div>
      )}

    </nav>
  );
}
