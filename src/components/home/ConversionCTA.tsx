import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export function ConversionCTA() {
  return (
    <section id="conversion-cta" className="scroll-mt-20 bg-ink py-16 text-cream md:py-20">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-xl text-3xl font-extrabold leading-tight sm:text-4xl">
          Ready to start your care journey?
        </h2>
        <p className="max-w-md text-base leading-relaxed text-cream/70">
          Reach out by phone or WhatsApp and we&rsquo;ll help you book a time with{" "}
          {site.doctor.name}.
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <a
            href={site.phoneHref}
            className="rounded-full bg-primary-500 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-600 active:bg-primary-700"
          >
            Call Now: {site.phone}
          </a>
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cream/30 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:border-cream/60"
          >
            Message on WhatsApp
          </a>
        </div>
      </Container>
    </section>
  );
}
