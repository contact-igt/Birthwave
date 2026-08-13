import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-brown py-12 text-cream md:py-16">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <Logo variant="light" />
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              {site.address.line1}
              <br />
              {site.address.line2}
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-2.5">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-cream/75 transition-colors hover:text-rose-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-2.5">
            <a href={site.phoneHref} className="text-sm font-semibold text-cream/85 hover:text-rose-300">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="text-sm text-cream/75 hover:text-rose-300">
              {site.email}
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-cream/75 hover:text-rose-300"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-cream/15 pt-6 text-xs text-cream/50">
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
