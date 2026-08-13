import Image from "next/image";
import { Container } from "@/components/Container";

const trustPoints = ["Pregnancy & birth", "Women's wellness", "Newborn & pediatric"];

export function Hero() {
  return (
    <section
      id="top"
      className="scroll-mt-[100px] flex min-h-[760px] items-center bg-cream py-16"
    >
      <Container className="grid items-center gap-12 xl:grid-cols-[585px_564px] xl:gap-16">
        <div>
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-rose">
            Women&rsquo;s Health &bull; Pregnancy &bull; Newborn Care
          </p>
          <h1 className="mt-4 max-w-[585px] font-display text-[54px] font-bold leading-[1.08] text-ink">
            Care that sees the
            <br />
            whole woman &mdash;
            <br />
            before, during and
            <br />
            after birth.
          </h1>

          <ul className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
            {trustPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-1.5 text-[10.5px] font-medium text-muted"
              >
                <span className="h-1.5 w-1.5 rounded-full border border-rose" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>

          <p className="mt-5 max-w-[560px] text-[17px] leading-[1.58] text-muted">
            From fertility and pregnancy to birth preparation, postpartum recovery and
            newborn care, Birthwave brings your care journey together with clarity,
            warmth and clinical guidance.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#conversion-cta"
              className="rounded-full bg-brown px-7 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-brown-600 active:bg-brown-700"
            >
              Book an Appointment
            </a>
            <a
              href="#services"
              className="rounded-full border border-border bg-white px-7 py-3.5 text-[13px] font-semibold text-ink transition-colors hover:border-brown hover:text-brown"
            >
              Explore Our Care
            </a>
          </div>
        </div>

        <div className="relative mx-auto h-[500px] w-full max-w-[564px] xl:h-[604px]">
          <div
            className="absolute inset-0 overflow-hidden rounded-[34px] bg-blush"
            aria-hidden="true"
          >
            <div className="absolute -left-10 top-16 h-64 w-64 rounded-full bg-rose/30" />
            <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-brown/15" />
            <div className="absolute bottom-10 left-16 h-72 w-72 rounded-full bg-blue/25" />
            <div className="absolute bottom-0 right-10 h-40 w-40 rounded-full bg-coral/20" />

            <Image
              src="/images/hero-flourish-left.png"
              alt=""
              width={233}
              height={236}
              className="absolute left-3 top-3 h-28 w-28"
            />
            <Image
              src="/images/hero-flourish-right.png"
              alt=""
              width={193}
              height={267}
              className="absolute bottom-32 right-3 h-32 w-24"
            />
          </div>

          <div className="absolute right-5 top-5 rounded-full bg-white px-4 py-2 shadow-sm">
            <p className="text-[9px] font-semibold uppercase tracking-[0.1em] text-rose">
              Appointments
            </p>
            <p className="text-[11px] font-medium text-ink">In-clinic + guided care</p>
          </div>

          <div className="absolute bottom-6 left-6 right-6 w-auto max-w-[318px] rounded-[20px] bg-white p-5 shadow-[0_8px_24px_rgba(46,36,33,0.08)]">
            <p className="text-[9px] font-semibold uppercase tracking-[0.1em] text-rose">
              Your Care Journey
            </p>
            <p className="mt-1.5 font-display text-base font-bold text-ink">
              One place for every chapter
            </p>
            <p className="mt-1 text-[11px] text-muted">
              Fertility &bull; Pregnancy &bull; Birth &bull; Postpartum &bull; Baby
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
