import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/Container";
import { LineArtIllustration, type LineArtVariant } from "@/components/illustrations/LineArt";
import { site } from "@/lib/site";

const ACCENT = {
  rose: "text-rose",
  blue: "text-blue",
  coral: "text-coral",
} as const;

const ACCENT_BG = {
  rose: "bg-blush",
  blue: "bg-sky",
  coral: "bg-pink",
} as const;

export function PageHero({
  eyebrow,
  heading,
  intro,
  accent = "rose",
  image,
  illustration,
  bookHref = "#contact-form",
}: {
  eyebrow: string;
  heading: ReactNode;
  intro: string;
  accent?: keyof typeof ACCENT;
  image?: { src: string; alt: string };
  illustration?: LineArtVariant;
  bookHref?: string;
}) {
  return (
    <section className="bg-cream py-16 md:py-20">
      <Container className="grid items-center gap-12 xl:grid-cols-[1.1fr_0.9fr] xl:gap-16">
        <div>
          <p
            className={`text-[10.5px] font-semibold uppercase tracking-[0.16em] ${ACCENT[accent]}`}
          >
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-xl font-display text-[42px] font-bold leading-[1.1] text-ink sm:text-[46px]">
            {heading}
          </h1>
          <p className="mt-5 max-w-lg text-[16px] leading-[1.6] text-muted">{intro}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={bookHref}
              className="rounded-full bg-brown px-7 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-brown-600 active:bg-brown-700"
            >
              Book an Appointment
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border bg-white px-7 py-3.5 text-[13px] font-semibold text-ink transition-colors hover:border-brown hover:text-brown"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>

        <div
          className={`relative mx-auto flex h-[320px] w-full max-w-md items-center justify-center overflow-hidden rounded-[32px] ${ACCENT_BG[accent]} sm:h-[380px]`}
        >
          {image ? (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1280px) 420px, 90vw"
              className="object-cover"
              priority
            />
          ) : (
            <LineArtIllustration
              variant={illustration ?? "pregnancy"}
              className="h-40 w-40 opacity-90"
            />
          )}
        </div>
      </Container>
    </section>
  );
}
