import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export function DoctorLedCare() {
  return (
    <section id="doctor-led-care" className="scroll-mt-20 bg-white py-16 md:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm order-2 lg:order-1">
          <div
            className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-500/30 via-primary-300/35 to-primary-500/45"
            aria-hidden="true"
          />
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white p-4 shadow-lg">
            <p className="font-display text-sm font-bold text-ink">{site.doctor.name}</p>
            <p className="text-xs text-ink/60">{site.doctor.title}</p>
            <a
              href="#conversion-cta"
              className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-primary-600"
            >
              Explore service <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-sm font-semibold tracking-wide text-primary-600">
            Doctor-led, patient-centred
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            Clinical care and the birth experience can belong together.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/70">
            Birthwave is designed as one continuous care journey, with space for
            questions, preferences, preparation and follow-up.
          </p>

          <blockquote className="mt-8 rounded-2xl bg-cream p-6">
            <p className="text-lg font-medium leading-relaxed text-ink/85">
              &ldquo;Patients should understand their options and feel supported
              through every stage of care.&rdquo;
            </p>
          </blockquote>
        </div>
      </Container>
    </section>
  );
}
