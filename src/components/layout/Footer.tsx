import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-cream-deep py-12 md:py-16">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-ink/60">
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
                className="text-sm text-ink/70 transition-colors hover:text-primary-600"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-2.5">
            <a href={site.phoneHref} className="text-sm font-semibold text-ink/80 hover:text-primary-600">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="text-sm text-ink/70 hover:text-primary-600">
              {site.email}
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink/70 hover:text-primary-600"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-200/60 pt-6 text-xs text-ink/50">
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
