import { Container } from "@/components/Container";

const pathways = [
  {
    n: "01",
    bg: "bg-blush",
    title: "Planning a pregnancy",
    body: "Fertility, preconception and cycle guidance",
    link: "Fertility & Preconception",
  },
  {
    n: "02",
    bg: "bg-sky",
    title: "I’m pregnant",
    body: "Antenatal care, scans, birth planning and support",
    link: "Pregnancy Care",
  },
  {
    n: "03",
    bg: "bg-sand",
    title: "I want birth options",
    body: "Normal birth, VBAC conversations and preparation",
    link: "Birth & VBAC",
  },
  {
    n: "04",
    bg: "bg-pink",
    title: "I need women’s care",
    body: "Gynaecology, vaginismus and wellness support",
    link: "Women’s Wellness",
  },
] as const;

export function CarePathways() {
  return (
    <section id="care-pathways" className="scroll-mt-[100px] bg-white py-16 md:py-24">
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
          {pathways.map((p) => (
            <div
              key={p.title}
              className={`flex min-h-[214px] flex-col rounded-[22px] ${p.bg} p-6`}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[11px] font-bold text-coral">
                {p.n}
              </span>
              <h3 className="mt-4 font-display text-[17px] font-semibold text-ink">
                {p.title}
              </h3>
              <p className="mt-2 flex-1 text-xs leading-relaxed text-muted">{p.body}</p>
              <a
                href="#services"
                className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-link"
              >
                {p.link} <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
