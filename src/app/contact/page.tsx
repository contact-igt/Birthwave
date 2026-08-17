import type { Metadata } from "next";
import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/page/PageHero";
import { EnquiryForm } from "@/components/page/EnquiryForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Book an Appointment | The Birth Wave, Nungambakkam, Chennai",
  description:
    "Call, WhatsApp or send an enquiry to book an appointment with Dr. Santoshi Nandigam at The Birth Wave in Nungambakkam, Chennai.",
};

const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.address.line1}, ${site.address.line2}`
)}`;

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Contact"
          heading="Get in touch, or book an appointment."
          intro="Call, message on WhatsApp, or send an enquiry below and we'll help you find the right time."
          accent="rose"
          illustration="support"
        />

        <section className="bg-white py-16 md:py-20 pb-24 md:pb-20">
          <Container className="grid gap-12 xl:grid-cols-[1fr_1.2fr] xl:gap-16">
            <div className="grid gap-4">
              <a
                href={site.phoneHref}
                className="rounded-2xl border border-border bg-cream p-6 transition-colors hover:border-brown"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-rose">Call</p>
                <p className="mt-1 font-display text-lg font-bold text-ink">{site.phone}</p>
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-border bg-cream p-6 transition-colors hover:border-brown"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-rose">
                  WhatsApp
                </p>
                <p className="mt-1 font-display text-lg font-bold text-ink">{site.phone}</p>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="rounded-2xl border border-border bg-cream p-6 transition-colors hover:border-brown"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-rose">Email</p>
                <p className="mt-1 font-display text-lg font-bold text-ink break-all">
                  {site.email}
                </p>
              </a>
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-border bg-cream p-6 transition-colors hover:border-brown"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-rose">Visit</p>
                <p className="mt-1 text-[15px] leading-relaxed text-ink">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </p>
              </a>
            </div>

            <Suspense fallback={null}>
              <EnquiryForm />
            </Suspense>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
