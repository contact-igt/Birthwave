import { Container } from "@/components/Container";

// No verified patient testimonials exist yet — copy locked to the approved PDF,
// which itself keeps this story-ready rather than inventing quotes/names.
const categories = [
  {
    label: "Pregnancy Care",
    body: "Clear guidance across scans, appointments and birth preparation.",
  },
  {
    label: "Birth Support",
    body: "Conversations that help patients understand preferences and options.",
  },
  {
    label: "Postpartum + Baby",
    body: "Continuity from recovery into newborn and pediatric care.",
  },
] as const;

export function PatientExperience() {
  return (
    <section id="patient-experience" className="scroll-mt-[100px] bg-white py-14 md:py-16">
      <Container>
        <div className="max-w-2xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-rose">
            Patient Experience
          </p>
          <h2 className="mt-3 font-display text-[35px] font-bold leading-tight text-ink">
            Trust grows when patients can see the experience, not just the treatment.
          </h2>
          <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
            Use verified patient stories, birth experiences and care journeys here
            once approved for publication.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {categories.map((c) => (
            <div key={c.label} className="min-h-[182px] rounded-[22px] bg-cream p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-rose">
                {c.label}
              </p>
              <p className="mt-3 text-[16.5px] font-medium leading-snug text-ink">
                {c.body}
              </p>
              <p className="mt-4 text-xs italic text-muted">
                Verified patient story / video can be placed here
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
