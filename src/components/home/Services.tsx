import { Container } from "@/components/Container";

// Service names verified against the Birthwave Brand Guideline (Social Media page,
// "Our Services" list) and the approved Figma (service cards). Descriptions are
// short, non-clinical summaries — no outcomes or medical claims are asserted.
const services = [
  {
    title: "Pregnancy & Delivery",
    description: "Prenatal care and delivery support from the same doctor throughout.",
  },
  {
    title: "Lactation Counselling",
    description: "One-on-one guidance for feeding, latch and early postpartum weeks.",
  },
  {
    title: "Childbirth Education Workshops",
    description: "Small-group sessions to prepare for labour, birth and recovery.",
  },
  {
    title: "Antenatal Yoga Classes",
    description: "Guided movement and breathing through each trimester.",
  },
  {
    title: "Vaginismus & Intimate Wellness",
    description: "Private, sensitive support for pain and fear.",
  },
  {
    title: "Newborn & Pediatric Care",
    description: "Newborn review and continuing pediatric care.",
  },
] as const;

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-cream py-16 md:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-wide text-primary-600">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
              Every stage of care, under one roof.
            </h2>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-[0_1px_2px_rgba(58,38,32,0.06)] transition-shadow hover:shadow-[0_8px_24px_rgba(58,38,32,0.08)]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-bold text-ink">{service.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">
                {service.description}
              </p>
              <a
                href="#conversion-cta"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
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
