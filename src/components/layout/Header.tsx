// CSS-only mobile menu via checkbox peer trick – no "use client" needed
import Link from "next/link";

export default function Header() {
  return (
    <nav aria-label="Hoofdnavigatie" className="fixed top-0 left-0 right-0 z-50 flex flex-col">

      {/* Hidden checkbox that drives the mobile menu toggle via CSS peer */}
      <input
        type="checkbox"
        id="mobile-menu-toggle"
        className="hidden peer"
        autoComplete="off"
        defaultChecked={false}
      />

      {/* Main navigation bar */}
      <div className="bg-[#FAF8F3]/95 backdrop-blur-md border-b border-[#1F3A36]/5 relative z-20">
        <div className="flex h-20 max-w-6xl mr-auto ml-auto pr-4 sm:pr-6 pl-4 sm:pl-6 items-center justify-between">

          <a
            href="#"
            aria-label="Home Acupunctuur Zaandam"
            className="shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-4 focus-visible:ring-offset-[#FAF8F3] rounded-sm inline-flex items-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/68f83157-af01-4d10-a1e0-6bb35e6e923d_320w.png"
              alt="Acupunctuur Zaandam Logo"
              className="w-auto h-6 sm:h-8 object-cover bg-center"
            />
          </a>

          {/* Desktop menu */}
          <ul
            className="hidden lg:flex gap-6 list-none mt-0 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-0 items-center"
            role="list"
          >
            <li>
              <Link href="/#klachten" className="hover:text-[#4A6559] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-4 text-sm font-normal text-[#1F3A36]/80 rounded-sm pt-0.5 pr-1 pb-0.5 pl-1">
                Welke klachten
              </Link>
            </li>
            <li>
              <a href="#behandeling-werkwijze" className="text-sm font-normal text-[#1F3A36]/80 hover:text-[#4A6559] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-4 rounded-sm px-1 py-0.5">
                Behandeling &amp; werkwijze
              </a>
            </li>
            <li>
              <a href="#tarieven" className="hover:text-[#4A6559] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-4 text-sm font-normal text-[#1F3A36]/80 rounded-sm pt-0.5 pr-1 pb-0.5 pl-1">
                Tarieven &amp; vergoeding
              </a>
            </li>
            <li>
              <a href="#over-ons" className="hover:text-[#4A6559] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-4 text-sm font-normal text-[#1F3A36]/80 rounded-sm pt-0.5 pr-1 pb-0.5 pl-1">
                Over ons
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#4A6559] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-4 text-sm font-normal text-[#1F3A36]/80 rounded-sm pt-0.5 pr-1 pb-0.5 pl-1">
                Veelgestelde vragen
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-3 py-2 sm:px-6 sm:py-2.5 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-[10px] sm:text-xs font-normal hover:bg-[#4A6559] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F3] whitespace-nowrap"
            >
              Plan een afspraak
            </a>

            {/* Mobile hamburger – clicking the label toggles the checkbox */}
            <label
              htmlFor="mobile-menu-toggle"
              className="lg:hidden flex items-center justify-center cursor-pointer text-[#1F3A36] hover:text-[#4A6559] transition-colors p-1 sm:p-2 -mr-1 sm:-mr-2 shrink-0"
            >
              <iconify-icon
                icon="solar:hamburger-menu-linear"
                className="text-2xl sm:text-3xl"
                stroke-width="1.5"
              />
            </label>
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

      {/* Mobile dropdown – shown when checkbox is checked */}
      <div className="hidden peer-checked:flex absolute top-[100%] left-0 w-full bg-[#FAF8F3] flex-col border-b border-[#1F3A36]/10 shadow-2xl p-6 gap-6 lg:hidden z-0">
        <ul className="flex flex-col gap-4 list-none p-0 m-0">
          <li>
            <a href="#klachten" className="text-base font-normal text-[#1F3A36] block pb-3 border-b border-[#1F3A36]/5">
              Klachten
            </a>
          </li>
          <li>
            <a href="#behandeling" className="text-base font-normal text-[#1F3A36] block pb-3 border-b border-[#1F3A36]/5">
              Behandeling
            </a>
          </li>
          <li>
            <a href="#werkwijze" className="text-base font-normal text-[#1F3A36] block pb-3 border-b border-[#1F3A36]/5">
              Werkwijze
            </a>
          </li>
          <li>
            <a href="#tarieven" className="text-base font-normal text-[#1F3A36] block pb-3 border-b border-[#1F3A36]/5">
              Tarieven &amp; vergoeding
            </a>
          </li>
          <li>
            <a href="#over-ons" className="text-base font-normal text-[#1F3A36] block pb-3 border-b border-[#1F3A36]/5">
              Over ons
            </a>
          </li>
        </ul>
      </div>

    </nav>
  );
}
