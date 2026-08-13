import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream pt-14 pb-20 md:pt-20 md:pb-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <p className="text-sm font-semibold tracking-wide text-rose-600">
            {site.name} &middot; Nungambakkam, Chennai
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl lg:text-[3.25rem]">
            Care that connects pregnancy, birth and recovery.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
            Doctor-led obstetrics &amp; gynaecology care in Nungambakkam — one continuous
            journey from your first consult through birth and postpartum follow-up.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#conversion-cta"
              className="rounded-full bg-brown px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brown-600 active:bg-brown-700"
            >
              Book Appointment
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-rose-300 bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-brown hover:text-brown"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-sm">
          <div
            className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-blue/35 via-rose-300/40 to-rose-500/50"
            aria-hidden="true"
          />
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur">
            <p className="font-display text-sm font-bold text-ink">{site.doctor.name}</p>
            <p className="text-xs text-ink/60">{site.doctor.title}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
