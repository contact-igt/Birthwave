import { Container } from "@/components/Container";

const services = [
  {
    title: "Pregnancy & Antenatal Care",
    description:
      "Routine and high touch pregnancy care with a clear plan for each trimester.",
  },
  {
    title: "Fertility & Preconception",
    description: "Evaluation, counselling and planning before pregnancy.",
  },
  {
    title: "Normal Birth & VBAC Support",
    description:
      "Personalised discussions around birth preferences, eligibility and preparation.",
  },
  {
    title: "Gynaecology & Women’s Wellness",
    description: "Care for menstrual, hormonal and common gynaecological concerns.",
  },
  {
    title: "Vaginismus & Intimate Wellness",
    description:
      "Private, sensitive support for pain, fear and intimacy related concerns.",
  },
  {
    title: "Newborn & Pediatric Care",
    description:
      "Newborn review, vaccination guidance and continuing pediatric care.",
  },
] as const;

export function Services() {
  return (
    <section id="services" className="scroll-mt-[100px] bg-cream py-16 md:py-[110px]">
      <Container>
        <div className="max-w-2xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-rose">
            Care Across Every Chapter
          </p>
          <h2 className="mt-3 font-display text-[38px] font-bold leading-tight text-ink">
            Specialist care, designed around your journey.
          </h2>
          <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
            Focused service pages help patients understand the concern, the care
            available and the next step without overwhelming them.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="flex min-h-[222px] flex-col rounded-[22px] border border-border bg-white p-6 shadow-[0_1px_2px_rgba(46,36,33,0.04)]"
            >
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-coral">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-1 w-1 rounded-full bg-coral" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-[17.5px] font-semibold text-ink">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-xs leading-relaxed text-muted">
                {service.description}
              </p>
              <a
                href="#conversion-cta"
                className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold text-link"
              >
                Explore service
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
