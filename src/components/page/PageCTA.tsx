import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export function PageCTA({
  eyebrow = "Ready When You Are",
  heading,
  body,
}: {
  eyebrow?: string;
  heading: string;
  body: string;
}) {
  return (
    <section className="flex min-h-[260px] items-center bg-blush py-12">
      <Container className="flex flex-col items-start justify-between gap-8 xl:flex-row xl:items-center">
        <div className="max-w-lg">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-rose">
            {eyebrow}
          </p>
          <h2 className="mt-2 font-display text-[28px] font-bold leading-tight text-ink">
            {heading}
          </h2>
          <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{body}</p>
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-4">
          <a
            href={site.phoneHref}
            className="rounded-full bg-brown px-7 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-brown-600 active:bg-brown-700"
          >
            Call Now: {site.phone}
          </a>
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border bg-white px-7 py-3.5 text-[13px] font-semibold text-ink transition-colors hover:border-brown hover:text-brown"
          >
            Chat on WhatsApp
          </a>
        </div>
      </Container>
    </section>
  );
}
