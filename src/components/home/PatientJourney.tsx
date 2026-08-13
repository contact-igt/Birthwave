import { Container } from "@/components/Container";

// Steps 03 & 04 copy verified against the approved Figma. Steps 01 & 02 follow the
// same tone/pattern (kept minimal, no fabricated outcomes) to complete the flow.
const steps = [
  {
    n: "01",
    title: "Discover",
    body: "Explore care pathways and understand what to expect at each stage.",
  },
  {
    n: "02",
    title: "Book",
    body: "Choose a time that fits, by phone or WhatsApp.",
  },
  {
    n: "03",
    title: "Consult",
    body: "Meet the right doctor with your context already understood.",
  },
  {
    n: "04",
    title: "Continue",
    body: "Receive follow-up guidance and move into the next stage of care.",
  },
] as const;

export function PatientJourney() {
  return (
    <section className="bg-ink py-16 text-cream md:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-primary-300">
            Patient Journey
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
            Birthwave closes the gaps between pregnancy, birth and recovery.
          </h2>
        </div>

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.n} className="rounded-2xl bg-ink-soft p-6">
              <span className="text-xs font-bold text-coral-500">{step.n}</span>
              <h3 className="mt-3 text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
