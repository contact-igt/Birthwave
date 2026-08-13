import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";

const columns = [
  {
    heading: "Care",
    links: [
      { label: "Pregnancy", href: "#care-pathways" },
      { label: "Fertility", href: "#care-pathways" },
      { label: "VBAC & Birth", href: "#services" },
      { label: "Women’s Wellness", href: "#services" },
      { label: "Pediatrics", href: "#services" },
    ],
  },
  {
    heading: "Explore",
    links: [
      { label: "About", href: "#doctor-led-care" },
      { label: "Doctor", href: "#doctor-led-care" },
      { label: "Patient Stories", href: "#patient-experience" },
      { label: "Resources", href: "#faq" },
      { label: "Contact", href: "#conversion-cta" },
    ],
  },
] as const;

const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.address.line1}, ${site.address.line2}`
)}`;

export function Footer() {
  return (
    <footer className="flex min-h-[400px] flex-col justify-between bg-footer py-14 text-white">
      <Container>
        <div className="flex flex-col gap-10 xl:flex-row xl:justify-between">
          <div className="max-w-xs">
            <Logo variant="light" textClassName="text-[23px]" />
            <p className="mt-4 text-[11px] leading-relaxed text-footer-secondary">
              Women&rsquo;s health, pregnancy, birth, postpartum and newborn care,
              connected in one patient journey.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {columns.map((col) => (
              <nav key={col.heading} aria-label={col.heading}>
                <p className="text-[11.5px] font-semibold text-white">{col.heading}</p>
                <ul className="mt-3 flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[10.5px] text-footer-secondary transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <nav aria-label="Contact">
              <p className="text-[11.5px] font-semibold text-white">Contact</p>
              <ul className="mt-3 flex flex-col gap-2.5">
                <li className="text-[10.5px] text-footer-secondary">
                  Nungambakkam, Chennai
                </li>
                <li>
                  <a
                    href="#conversion-cta"
                    className="text-[10.5px] text-footer-secondary transition-colors hover:text-white"
                  >
                    Book an appointment
                  </a>
                </li>
                <li>
                  <a
                    href={site.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10.5px] text-footer-secondary transition-colors hover:text-white"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10.5px] text-footer-secondary transition-colors hover:text-white"
                  >
                    Google Maps
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Container>

      <Container>
        <div className="mt-10 border-t border-footer-divider pt-6 text-[9.5px] text-footer-legal">
          &copy; Birthwave. All rights reserved. Privacy Policy &bull; Terms &amp;
          Conditions &bull; Medical Disclaimer
        </div>
      </Container>
    </footer>
  );
}
