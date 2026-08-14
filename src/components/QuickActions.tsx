"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { site } from "@/lib/site";

const BOOK_HREF = "/contact#contact-form";

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

export function QuickActions() {
  const pathname = usePathname();
  const hidden = useHideOnFocus();

  // Thank-you page already offers Call/WhatsApp/Home explicitly — no need
  // to duplicate the rail there.
  if (pathname === "/thank-you") return null;

  function track(action: "call" | "whatsapp" | "book") {
    trackEvent(`birthwave_${action}_click`, { page: pathname });
  }

  return (
    <>
      {/* Mobile fixed bottom bar */}
      <nav
        aria-label="Quick actions"
        className={`fixed inset-x-0 bottom-0 z-40 flex items-stretch gap-2 border-t border-border bg-white px-3 pt-2 transition-transform duration-200 xl:hidden ${
          hidden ? "translate-y-full" : "translate-y-0"
        }`}
        style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
      >
        <a
          href={site.phoneHref}
          onClick={() => track("call")}
          aria-label="Call Birthwave"
          className="flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-full border border-border text-[13px] font-semibold text-ink"
        >
          Call
        </a>
        <a
          href={site.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("whatsapp")}
          aria-label="Message Birthwave on WhatsApp"
          className="flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-full border border-border text-[13px] font-semibold text-ink"
        >
          WhatsApp
        </a>
        <a
          href={BOOK_HREF}
          onClick={() => track("book")}
          aria-label="Book an appointment"
          className="flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-full bg-brown text-[13px] font-semibold text-white"
        >
          Book
        </a>
      </nav>

      {/* Desktop fixed right rail — compact icon circles only. The site
          container's right gutter is a fixed 96px from xl (1280px) up to
          its 1440px max-width, so the rail must stay well inside that to
          never overlap hero/content at any width in that range. */}
      <div
        className="group fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2.5 xl:flex"
        aria-label="Quick actions"
      >
        <a
          href={site.phoneHref}
          onClick={() => track("call")}
          aria-label="Call Birthwave"
          title="Call"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-ink shadow-[0_4px_16px_rgba(46,36,33,0.1)] transition-colors hover:border-brown hover:text-brown"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3.9c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <a
          href={site.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("whatsapp")}
          aria-label="Message Birthwave on WhatsApp"
          title="WhatsApp"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-ink shadow-[0_4px_16px_rgba(46,36,33,0.1)] transition-colors hover:border-brown hover:text-brown"
        >
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
        </a>
        <a
          href={BOOK_HREF}
          onClick={() => track("book")}
          aria-label="Book an appointment"
          title="Book"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-brown text-white shadow-[0_4px_16px_rgba(97,62,55,0.3)] transition-colors hover:bg-brown-600"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.6" />
            <path d="M4 9.5h16M8 3v3M16 3v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M8.5 13.5l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </>
  );
}
