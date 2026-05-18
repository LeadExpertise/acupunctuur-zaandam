"use client";

import Script from "next/script";
import { useState } from "react";

/**
 * Booking widget façade. The third-party LeadConnector iframe (~500KB-1MB) is
 * only loaded after the user clicks. Saves the entire payload on initial
 * page load — single biggest Core Web Vitals win for the site.
 *
 * Visual chrome (window header with three dots) is rendered immediately so
 * the layout does not shift when the iframe loads.
 *
 * @param id  Optional unique iframe id for analytics/debugging.
 */
export default function BookingWidget({ id }: { id?: string }) {
  const [loaded, setLoaded] = useState(false);
  const iframeId = id ? `booking_${id}` : "booking";

  return (
    <div className="w-full relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-[#8A6B3D]/30 to-[#4A6559]/30 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-300" />
      <div className="relative w-full bg-[#FAF8F3] rounded-xl shadow-2xl border border-[#1F3A36]/10 overflow-hidden flex flex-col">

        {/* Window chrome — kept above the fold for visual stability */}
        <div className="flex shrink-0 bg-[#F2EDE3] h-10 border-[#1F3A36]/5 border-b pr-4 pl-4 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#1F3A36]/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#1F3A36]/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#1F3A36]/20" />
          </div>
          <span className="text-[10px] font-semibold tracking-widest uppercase text-[#1F3A36]/40">
            Online Planner
          </span>
          <div className="w-10" />
        </div>

        {/* Body */}
        <div className="w-full bg-[#FAF8F3] min-h-[600px] flex-grow relative">
          {loaded ? (
            <>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg
                  className="animate-spin h-8 w-8 text-[#4A6559]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-label="Planner wordt geladen"
                  role="status"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              </div>
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/D8uouGkFZH4Alr37y5z4"
                style={{
                  width: "100%",
                  border: "none",
                  overflow: "auto",
                  minHeight: "650px",
                  height: "100%",
                  position: "relative",
                  zIndex: 10,
                }}
                scrolling="yes"
                id={iframeId}
                title="Maak een afspraak"
              />
              <Script
                src="https://link.msgsndr.com/js/form_embed.js"
                strategy="afterInteractive"
              />
            </>
          ) : (
            <button
              type="button"
              onClick={() => setLoaded(true)}
              className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-[#1F3A36] hover:bg-[#F2EDE3]/60 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36] cursor-pointer"
              aria-label="Open de online afsprakenplanner"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#8A6B3D]"
                aria-hidden="true"
              >
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
                <path d="m9 16 2 2 4-4" />
              </svg>
              <span
                className="text-base font-medium"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Open online planner
              </span>
              <span className="text-xs font-light text-[#1F3A36]/60 max-w-xs text-center px-6">
                Klik om de afsprakenplanner te laden — direct beschikbaar.
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
