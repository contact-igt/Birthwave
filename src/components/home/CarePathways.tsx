import { Container } from "@/components/Container";

const pathways = [
  {
    label: "Pregnancy",
    description:
      "Regular prenatal visits, screening and guidance from your first trimester onward.",
  },
  {
    label: "Birth",
    description:
      "A birthing plan built around your preferences, with the same doctor you already know.",
  },
  {
    label: "Recovery",
    description:
      "Postpartum check-ins, lactation support and a clear path back to full health.",
  },
] as const;

export function CarePathways() {
  return (
    <section id="care-pathways" className="bg-white py-16 md:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-primary-600">
            Care Pathways
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            One practice, connecting pregnancy, birth and recovery.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {pathways.map((p, i) => (
            <div
              key={p.label}
              className="rounded-2xl border border-primary-100 bg-cream p-7"
            >
              <span className="text-xs font-bold text-coral-500">
                0{i + 1}
              </span>
              <h3 className="mt-3 text-xl font-bold text-ink">{p.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
