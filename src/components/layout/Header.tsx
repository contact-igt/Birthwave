"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { Container } from "@/components/Container";
import { nav, site } from "@/lib/site";

type NavItem = (typeof nav)[number];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="9"
      height="6"
      viewBox="0 0 9 6"
      fill="none"
      aria-hidden="true"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path d="M1 1l3.5 3.5L8 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function DesktopNavItem({ item }: { item: NavItem }) {
  if (!("children" in item) || !item.children) {
    return (
      <Link
        href={item.href}
        className="text-[14px] font-medium text-ink/80 transition-colors hover:text-brown"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="group relative">
      <Link
        href={item.href}
        className="flex items-center gap-1 text-[14px] font-medium text-ink/80 transition-colors hover:text-brown focus-visible:text-brown"
      >
        {item.label}
        <Chevron open={false} />
      </Link>
      <div
        className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 translate-y-1 rounded-2xl border border-border bg-white p-2 opacity-0 shadow-[0_16px_40px_rgba(46,36,33,0.12)] transition-[opacity,transform,visibility] duration-200 ease-out group-hover:visible group-hover:translate-y-2 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-2 group-focus-within:opacity-100"
      >
        {item.children.map((child) => (
          <Link
            key={child.href}
            href={child.href}
            className="block rounded-xl px-3.5 py-2.5 text-[14px] font-medium text-ink/80 transition-colors hover:bg-cream hover:text-brown"
          >
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function MobileNavItem({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = "children" in item && !!item.children;

  return (
    <div className="border-b border-border/60 last:border-b-0">
      <div className="flex items-center justify-between">
        <Link
          href={item.href}
          onClick={onNavigate}
          className="min-h-11 flex-1 py-2.5 text-base font-medium text-ink/85"
        >
          {item.label}
        </Link>
        {hasChildren && (
          <button
            type="button"
            aria-label={`${expanded ? "Collapse" : "Expand"} ${item.label} submenu`}
            aria-expanded={expanded}
            onClick={() => setExpanded((v) => !v)}
            className="flex h-11 w-11 items-center justify-center text-ink/60"
          >
            <Chevron open={expanded} />
          </button>
        )}
      </div>
      {hasChildren && (
        <div
          className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-250 ease-out ${
            expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="flex min-h-0 flex-col gap-0.5 pb-2 pl-3">
            {item.children!.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={onNavigate}
                className="min-h-11 flex items-center py-2 text-[13.5px] text-ink/70"
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 h-[88px] border-b bg-white transition-shadow duration-200 ${
        scrolled ? "border-border shadow-[0_2px_12px_rgba(46,36,33,0.06)]" : "border-border/70"
      }`}
    >
      <Container className="flex h-full items-center justify-between">
        <Link href="/" className="flex shrink-0 flex-col gap-1.5 leading-none">
          <BrandMark size="sm" />
          <span className="pl-0.5 text-[8.5px] font-semibold uppercase tracking-[0.12em] text-muted">
            {site.byline}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 xl:flex" aria-label="Primary">
          {nav.map((item) => (
            <DesktopNavItem key={item.label} item={item} />
          ))}
        </nav>

        <Link
          href="/contact#contact-form"
          className="hidden rounded-full bg-brown px-5 py-2.5 text-[14.5px] font-semibold text-white transition-all duration-150 hover:bg-brown-600 active:scale-[0.98] xl:inline-block"
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
        className={`overflow-hidden border-t border-border bg-white transition-[grid-template-rows,opacity] duration-300 ease-out xl:hidden grid ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
        style={{ display: "grid" }}
      >
        <div className="min-h-0 overflow-hidden">
          <Container className="flex flex-col py-2">
            {nav.map((item) => (
              <MobileNavItem key={item.label} item={item} onNavigate={() => setOpen(false)} />
            ))}
            <div className="mt-3 flex flex-col gap-3 pb-2">
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
      </div>
    </header>
  );
}
