"use client";

import Link from "next/link";
import { useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { Container } from "@/components/Container";
import { nav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-[88px] border-b border-border bg-white">
      <Container className="flex h-full items-center justify-between">
        <Link href="/" className="flex shrink-0 flex-col gap-1.5 leading-none">
          <BrandMark size="sm" />
          <span className="pl-0.5 text-[8.5px] font-semibold uppercase tracking-[0.12em] text-muted">
            {site.byline}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 xl:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={`desktop-${item.label}`}
              href={item.href}
              className="text-[12.5px] font-medium text-ink/80 transition-colors hover:text-brown"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact#contact-form"
          className="hidden rounded-full bg-brown px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-brown-600 active:bg-brown-700 xl:inline-block"
        >
          Book Appointment
        </Link>

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
        className={`overflow-hidden border-t border-border bg-white transition-[max-height,opacity] duration-300 ease-out xl:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Container className="flex flex-col gap-1 py-4">
          {nav.map((item) => (
            <Link
              key={`mobile-${item.label}`}
              href={item.href}
              onClick={() => setOpen(false)}
              className="min-h-11 py-2.5 text-base font-medium text-ink/85"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 flex flex-col gap-3">
            <a
              href={site.phoneHref}
              className="min-h-11 rounded-full border border-border bg-white py-2.5 text-center text-sm font-semibold text-ink"
            >
              Call {site.phone}
            </a>
            <Link
              href="/contact#contact-form"
              onClick={() => setOpen(false)}
              className="min-h-11 rounded-full bg-brown py-2.5 text-center text-sm font-semibold text-white flex items-center justify-center"
            >
              Book Appointment
            </Link>
          </div>
        </Container>
      </div>
    </header>
  );
}
