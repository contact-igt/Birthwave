import { Container } from "@/components/Container";

// No verified patient testimonials exist yet. Per project guidance we keep a
// story-ready structural treatment (categories, not quotes) rather than inventing
// names, quotes or outcomes. Swap in real stories as they're collected — see
// HUMAN REVIEW in the delivery report.
const categories = [
  {
    title: "First-time mothers",
    body: "Stories from patients navigating their first pregnancy, start to finish.",
  },
  {
    title: "High-risk pregnancy",
    body: "How closer monitoring and a consistent care team shaped the journey.",
  },
  {
    title: "Postpartum recovery",
    body: "What follow-up and lactation support looked like after birth.",
  },
] as const;

export function PatientExperience() {
  return (
    <section id="patient-experience" className="bg-cream py-16 md:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-primary-600">
            Birth Stories
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            Patient experience, by stage of care.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/65">
            We&rsquo;re building a collection of real, consented birth stories. Browse by
            what&rsquo;s closest to your own journey.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {categories.map((c) => (
            <div key={c.title} className="rounded-2xl bg-white p-6">
              <div
                className="h-32 w-full rounded-xl bg-gradient-to-br from-primary-200 via-primary-300 to-blue-500/40"
                aria-hidden="true"
              />
              <h3 className="mt-5 text-lg font-bold text-ink">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{c.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
