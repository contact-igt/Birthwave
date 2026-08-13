"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { nav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-rose-100 bg-cream/90 backdrop-blur">
      <Container className="flex h-18 items-center justify-between py-3.5">
        <a href="#top" className="shrink-0">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 xl:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-rose-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <a
            href={site.phoneHref}
            className="text-sm font-semibold text-ink/80 transition-colors hover:text-rose-600"
          >
            {site.phone}
          </a>
          <a
            href="#conversion-cta"
            className="rounded-full bg-brown px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brown-600 active:bg-brown-700"
          >
            Book Appointment
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-ink xl:hidden"
        >
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M1 1l20 14M21 1L1 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M0 1h22M0 8h22M0 15h22"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </Container>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-rose-100 bg-cream transition-[max-height,opacity] duration-300 ease-out xl:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Container className="flex flex-col gap-1 py-4">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="min-h-11 py-2.5 text-base font-medium text-ink/85"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-3 flex flex-col gap-3">
            <a
              href={site.phoneHref}
              className="min-h-11 rounded-full border border-rose-300 bg-white py-2.5 text-center text-sm font-semibold text-ink"
            >
              Call {site.phone}
            </a>
            <a
              href="#conversion-cta"
              onClick={() => setOpen(false)}
              className="min-h-11 rounded-full bg-brown py-2.5 text-center text-sm font-semibold text-white"
            >
              Book Appointment
            </a>
          </div>
        </Container>
      </div>
    </header>
  );
}
