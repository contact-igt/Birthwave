import { Suspense } from "react";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/page/PageHero";
import { WhoItsFor } from "@/components/page/WhoItsFor";
import { DoctorTrust } from "@/components/page/DoctorTrust";
import { JourneySteps } from "@/components/page/JourneySteps";
import { RelatedSupport } from "@/components/page/RelatedSupport";
import { PageFAQ } from "@/components/page/PageFAQ";
import { PageCTA } from "@/components/page/PageCTA";
import { EnquiryForm } from "@/components/page/EnquiryForm";
import type { ServiceContent } from "@/lib/services";
import { getTeamMember, team } from "@/lib/team";

// Shared structure for all six priority landing pages (patient-intent hero →
// explanation → who it's for → doctor trust → journey → related support →
// FAQ → CTA → form). Per-page copy, imagery and accent color come from
// lib/services.ts so pages share a system without being visual clones.
export function ServiceLandingPage({ service }: { service: ServiceContent }) {
  const expert = getTeamMember(service.expertSlug) ?? team[0];

  return (
    <main>
      <PageHero
        eyebrow={service.hero.eyebrow}
        heading={service.hero.heading}
        intro={service.hero.intro}
        accent={service.accent}
        image={service.image}
        illustration={service.illustration}
      />

      <section className="bg-white py-16 md:py-20">
        <Container>
          <h2 className="max-w-xl font-display text-[28px] font-bold leading-tight text-ink">
            {service.explanation.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-[14.5px] leading-relaxed text-muted">
            {service.explanation.body}
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {service.explanation.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-2xl border border-border bg-cream p-5 text-sm leading-relaxed text-ink/80"
              >
                <span
                  className="mt-1 h-2 w-2 shrink-0 rounded-full bg-coral"
                  aria-hidden="true"
                />
                {point}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <WhoItsFor points={service.whoItsFor} />

      <DoctorTrust
        member={expert}
        heading={service.doctorTrust.heading}
        body={service.doctorTrust.body}
        bullets={service.doctorTrust.bullets}
      />

      <JourneySteps
        eyebrow={service.journey.eyebrow}
        heading={service.journey.heading}
        intro={service.journey.intro}
        steps={service.journey.steps}
      />

      <RelatedSupport currentSlug={service.slug} />

      <PageFAQ heading={`Questions about ${service.title}`} faqs={service.faqs} />

      <PageCTA heading={service.cta.heading} body={service.cta.body} />

      <section className="bg-white py-16 md:py-20">
        <Container className="max-w-2xl">
          <h2 className="font-display text-[26px] font-bold leading-tight text-ink">
            Send an enquiry
          </h2>
          <p className="mt-2 text-sm text-muted">
            Prefer to write ahead? Fill this in and continue on WhatsApp.
          </p>
          <div className="mt-6">
            <Suspense fallback={null}>
              <EnquiryForm />
            </Suspense>
          </div>
        </Container>
      </section>
    </main>
  );
}
