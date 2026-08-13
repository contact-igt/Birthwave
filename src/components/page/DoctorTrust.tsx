import Image from "next/image";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export function DoctorTrust({
  eyebrow = "Doctor Led, Patient Centred",
  heading,
  body,
  bullets,
}: {
  eyebrow?: string;
  heading: string;
  body: string;
  bullets: readonly string[];
}) {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container className="grid items-center gap-12 xl:grid-cols-[420px_1fr] xl:gap-16">
        <div className="relative mx-auto h-[380px] w-full max-w-sm overflow-hidden rounded-[28px] bg-sky xl:h-[440px]">
          <Image
            src="/images/dr-santoshi-nandigam.png"
            alt={`${site.doctor.name}, ${site.doctor.title}`}
            fill
            sizes="(min-width: 1280px) 420px, 90vw"
            className="object-contain"
          />
          <div className="absolute bottom-5 left-5 rounded-2xl bg-white p-4 shadow-[0_8px_24px_rgba(46,36,33,0.08)]">
            <p className="font-display text-sm font-bold text-ink">{site.doctor.name}</p>
            <p className="text-xs text-muted">{site.doctor.title}</p>
          </div>
        </div>

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-rose">
            {eyebrow}
          </p>
          <h2 className="mt-3 max-w-xl font-display text-[32px] font-bold leading-tight text-ink">
            {heading}
          </h2>
          <p className="mt-4 max-w-xl text-[14.5px] leading-relaxed text-muted">{body}</p>

          <ul className="mt-6 space-y-2.5">
            {bullets.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2.5 text-xs font-medium text-ink/80"
              >
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral"
                  aria-hidden="true"
                />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
