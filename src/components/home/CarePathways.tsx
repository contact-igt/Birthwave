import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";

const pathways = [
  {
    n: "01",
    bg: "bg-blush",
    title: "Planning a pregnancy",
    body: "Fertility, preconception and cycle guidance",
    link: "Fertility & Preconception",
    href: "#services",
  },
  {
    n: "02",
    bg: "bg-sky",
    title: "I’m pregnant",
    body: "Antenatal care, scans, birth planning and support",
    link: "Pregnancy Care",
    href: "#services",
  },
  {
    n: "03",
    bg: "bg-sand",
    title: "I want birth options",
    body: "Normal birth, VBAC conversations and preparation",
    link: "Birth & Delivery Care",
    href: "/birth-delivery-care",
  },
  {
    n: "04",
    bg: "bg-pink",
    title: "I need women’s care",
    body: "Gynaecology, vaginismus and wellness support",
    link: "Women’s Wellness",
    href: "#services",
  },
] as const;

export function CarePathways() {
  return (
    <section id="care-pathways" className="scroll-mt-[100px] bg-white py-16 md:py-[87px]">
      <Container>
        <div className="max-w-2xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-rose">
            Start With Your Need
          </p>
          <h2 className="mt-3 font-display text-[36px] font-bold leading-tight text-ink">
            Start with what you need today.
          </h2>
          <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
            Choose a care path and reach the right service without searching through
            the whole website.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {pathways.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div
                className={`flex min-h-[214px] flex-col rounded-[22px] ${p.bg} p-6 transition-transform duration-200 hover:-translate-y-1`}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[11px] font-bold text-coral">
                  {p.n}
                </span>
                <h3 className="mt-4 font-display text-[17px] font-semibold text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-muted">{p.body}</p>
                {p.href.startsWith("/") ? (
                  <Link
                    href={p.href}
                    className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-link"
                  >
                    {p.link} <span aria-hidden="true">&rarr;</span>
                  </Link>
                ) : (
                  <a
                    href={p.href}
                    className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-link"
                  >
                    {p.link} <span aria-hidden="true">&rarr;</span>
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
