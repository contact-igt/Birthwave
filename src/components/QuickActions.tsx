"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { site } from "@/lib/site";

const BOOK_HREF = "/contact#contact-form";

// Instagram is part of the required action set, but no verified handle
// exists in the approved brand material for this business (the only
// Instagram URLs found in the sourced site content are ambiguous — two
// different unverified handles) — so it's omitted rather than guessed,
// per the "only render an action when a verified URL exists" rule.

function useHideOnFocus() {
  // Hide the mobile bar while a text field is focused so it doesn't fight
  // the on-screen keyboard — simple hide/show, no keyboard-height engineering.
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    function onFocusIn(e: FocusEvent) {
      const el = e.target as HTMLElement;
      if (el.matches("input, textarea, select")) setHidden(true);
    }
    function onFocusOut(e: FocusEvent) {
      const el = e.target as HTMLElement;
      if (el.matches("input, textarea, select")) setHidden(false);
    }
    document.addEventListener("focusin", onFocusIn);
    document.addEventListener("focusout", onFocusOut);
    return () => {
      document.removeEventListener("focusin", onFocusIn);
      document.removeEventListener("focusout", onFocusOut);
    };
  }, []);
  return hidden;
}

function DirectionsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2C7.6 2 4 5.6 4 10c0 5.6 8 12 8 12s8-6.4 8-12c0-4.4-3.6-8-8-8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 8.8c.3-.7.6-.7 1-.7h.6c.2 0 .4 0 .6.5l.6 1.5c.1.3 0 .5-.1.7l-.5.6c-.1.2-.2.4 0 .7.4.8 1.5 1.9 2.3 2.3.3.2.5.1.7 0l.6-.6c.2-.2.4-.2.7-.1l1.5.7c.4.2.4.4.4.6-.1 1-1.2 1.6-1.9 1.6-1.7 0-4.4-1.5-5.7-4.4-.3-.7-.5-1.4-.5-2 0-.6.2-1 .3-1.2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CallIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3.9c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 9.5h16M8 3v3M16 3v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8.5 13.5l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function QuickActions() {
  const pathname = usePathname();
  const hidden = useHideOnFocus();

  // Thank-you page already offers Call/WhatsApp/Home explicitly — no need
  // to duplicate the rail there.
  if (pathname === "/thank-you") return null;

  function track(action: "call" | "whatsapp" | "book" | "directions") {
    trackEvent(`birthwave_${action}_click`, { page: pathname });
  }

  return (
    <>
      {/* Mobile fixed bottom dock — icon-first, Call centred and enlarged
          as the visual anchor. */}
      <nav
        aria-label="Quick actions"
        className={`fixed inset-x-0 bottom-0 z-40 flex items-end justify-between gap-1 border-t border-border bg-white px-2 pt-2 transition-transform duration-200 xl:hidden ${
          hidden ? "translate-y-full" : "translate-y-0"
        }`}
        style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
      >
        <a
          href={site.mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("directions")}
          aria-label="Get directions to Birthwave"
          className="flex min-h-11 flex-1 flex-col items-center justify-center gap-0.5 rounded-2xl py-1.5 text-ink/80 transition-colors active:bg-cream"
        >
          <DirectionsIcon />
          <span className="text-[11px] font-medium">Directions</span>
        </a>
        <a
          href={site.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("whatsapp")}
          aria-label="Message Birthwave on WhatsApp"
          className="flex min-h-11 flex-1 flex-col items-center justify-center gap-0.5 rounded-2xl py-1.5 text-ink/80 transition-colors active:bg-cream"
        >
          <WhatsAppIcon />
          <span className="text-[11px] font-medium">WhatsApp</span>
        </a>
        <a
          href={site.phoneHref}
          onClick={() => track("call")}
          aria-label="Call Birthwave"
          className="flex flex-1 flex-col items-center gap-1"
        >
          <span className="flex h-[58px] w-[58px] -translate-y-3 items-center justify-center rounded-full bg-brown text-white shadow-[0_8px_22px_rgba(97,62,55,0.4)] transition-transform duration-150 active:scale-[0.96]">
            <CallIcon size={24} />
          </span>
          <span className="-mt-2 text-[11px] font-semibold text-ink">Call</span>
        </a>
        <a
          href={BOOK_HREF}
          onClick={() => track("book")}
          aria-label="Book an appointment"
          className="flex min-h-11 flex-1 flex-col items-center justify-center gap-0.5 rounded-2xl py-1.5 text-ink/80 transition-colors active:bg-cream"
        >
          <BookIcon />
          <span className="text-[11px] font-medium">Book</span>
        </a>
      </nav>

      {/* Desktop fixed right rail — compact icon circles with a label that
          reveals on hover/focus. The site container's right gutter is a
          fixed 96px from xl (1280px) up to its 1440px max-width, so the
          rail must stay well inside that to never overlap hero/content at
          any width in that range. */}
      <div
        className="fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2.5 xl:flex"
        aria-label="Quick actions"
      >
        <a
          href={site.mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("directions")}
          aria-label="Get directions to Birthwave"
          className="group/rail relative flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-ink shadow-[0_4px_16px_rgba(46,36,33,0.1)] transition-colors hover:border-brown hover:text-brown"
        >
          <DirectionsIcon />
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-[12px] font-medium text-white opacity-0 transition-[opacity,transform] duration-150 translate-x-1 group-hover/rail:translate-x-0 group-hover/rail:opacity-100 group-focus-visible/rail:translate-x-0 group-focus-visible/rail:opacity-100">
            Directions
          </span>
        </a>
        <a
          href={site.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("whatsapp")}
          aria-label="Message Birthwave on WhatsApp"
          className="group/rail relative flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-ink shadow-[0_4px_16px_rgba(46,36,33,0.1)] transition-colors hover:border-brown hover:text-brown"
        >
          <WhatsAppIcon />
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-[12px] font-medium text-white opacity-0 transition-[opacity,transform] duration-150 translate-x-1 group-hover/rail:translate-x-0 group-hover/rail:opacity-100 group-focus-visible/rail:translate-x-0 group-focus-visible/rail:opacity-100">
            WhatsApp
          </span>
        </a>
        <a
          href={site.phoneHref}
          onClick={() => track("call")}
          aria-label="Call Birthwave"
          className="group/rail relative flex h-14 w-14 items-center justify-center rounded-full bg-brown text-white shadow-[0_6px_20px_rgba(97,62,55,0.35)] transition-colors hover:bg-brown-600"
        >
          <CallIcon size={20} />
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-[12px] font-medium text-white opacity-0 transition-[opacity,transform] duration-150 translate-x-1 group-hover/rail:translate-x-0 group-hover/rail:opacity-100 group-focus-visible/rail:translate-x-0 group-focus-visible/rail:opacity-100">
            Call
          </span>
        </a>
        <a
          href={BOOK_HREF}
          onClick={() => track("book")}
          aria-label="Book an appointment"
          className="group/rail relative flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-ink shadow-[0_4px_16px_rgba(46,36,33,0.1)] transition-colors hover:border-brown hover:text-brown"
        >
          <BookIcon />
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-[12px] font-medium text-white opacity-0 transition-[opacity,transform] duration-150 translate-x-1 group-hover/rail:translate-x-0 group-hover/rail:opacity-100 group-focus-visible/rail:translate-x-0 group-focus-visible/rail:opacity-100">
            Book
          </span>
        </a>
      </div>
    </>
  );
}
