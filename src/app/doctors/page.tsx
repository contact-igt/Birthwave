import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/page/PageHero";
import { PageCTA } from "@/components/page/PageCTA";
import { TeamAvatar } from "@/components/TeamAvatar";
import { team, getTeamMember } from "@/lib/team";

export const metadata: Metadata = {
  title: "Meet the Birthwave Care Team — Nungambakkam, Chennai",
  description:
    "The doctors and allied-care professionals behind The Birth Wave — obstetrics & gynaecology, pediatrics, fertility, pelvic health, lactation and emotional well-being, in Nungambakkam, Chennai.",
};

const founder = getTeamMember("santoshi-nandigam")!;
const clinical = team.filter((m) => m.group === "clinical");
const allied = team.filter((m) => m.group === "allied");

const connectedCare = [
  { label: "Pregnancy", href: "/pregnancy-care" },
  { label: "Birth & VBAC", href: "/vbac" },
  { label: "Fertility", href: "/fertility-preconception" },
  { label: "Pelvic Health", href: "/vaginismus" },
  { label: "Lactation", href: "/normal-birth-delivery" },
  { label: "Nutrition", href: "/services" },
  { label: "Emotional Well-being", href: "/services" },
  { label: "Newborn & Pediatric Care", href: "/newborn-pediatric-care" },
] as const;

export default function DoctorsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Our Care Team"
          heading="Connected care, from one doctor to a whole team."
          intro="Birthwave brings obstetrics, pediatrics, fertility, pelvic health, lactation and emotional well-being together — so your care doesn't stop at one specialty."
          accent="rose"
          illustration="pregnancy"
          bookHref="/contact#contact-form"
        />

        {/* Founder feature */}
        <section className="bg-white py-16 md:py-20">
          <Container className="grid items-center gap-12 xl:grid-cols-[420px_1fr] xl:gap-16">
            <TeamAvatar member={founder} className="mx-auto h-[420px] w-full max-w-sm xl:h-[460px]" />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-rose">
                Founder
              </p>
              <h2 className="mt-3 font-display text-[32px] font-bold leading-tight text-ink">
                {founder.name}
              </h2>
              <p className="mt-1 text-sm font-medium text-muted">{founder.role}</p>
              {founder.credential && (
                <p className="mt-1 text-xs font-semibold text-link">{founder.credential}</p>
              )}
              <p className="mt-4 max-w-lg text-[14.5px] leading-relaxed text-muted">
                {founder.bio}
              </p>
              <Link
                href="/contact#contact-form"
                className="mt-7 inline-flex rounded-full bg-brown px-7 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-brown-600 active:bg-brown-700"
              >
                Book an Appointment
              </Link>
            </div>
          </Container>
        </section>

        {/* Clinical team */}
        <section className="bg-cream py-16 md:py-20">
          <Container>
            <h2 className="max-w-xl font-display text-[28px] font-bold leading-tight text-ink">
              Medical &amp; clinical team
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {clinical.map((member) => (
                <div key={member.slug} className="flex flex-col rounded-[22px] bg-white p-5">
                  <TeamAvatar member={member} className="aspect-square w-full" />
                  <p className="mt-4 font-display text-base font-bold text-ink">
                    {member.name}
                  </p>
                  {member.credential && (
                    <p className="mt-1 text-[11px] font-semibold text-link">
                      {member.credential}
                    </p>
                  )}
                  <p className="mt-1 flex-1 text-xs leading-relaxed text-muted">
                    {member.role}
                  </p>
                  {member.expertiseHref && (
                    <Link
                      href={member.expertiseHref}
                      className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-link"
                    >
                      Related care <span aria-hidden="true">&rarr;</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Allied care team */}
        <section className="bg-white py-16 md:py-20">
          <Container>
            <h2 className="max-w-xl font-display text-[28px] font-bold leading-tight text-ink">
              Allied care team
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
              {allied.map((member) => (
                <div key={member.slug} className="flex flex-col rounded-[22px] bg-cream p-5">
                  <TeamAvatar member={member} className="aspect-square w-full" />
                  <p className="mt-4 font-display text-sm font-bold text-ink">
                    {member.name}
                  </p>
                  {member.credential && (
                    <p className="mt-1 text-[10.5px] font-semibold text-link">
                      {member.credential}
                    </p>
                  )}
                  <p className="mt-1 text-xs leading-relaxed text-muted">{member.role}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Connected care */}
        <section className="bg-brown py-16 text-white md:py-20">
          <Container>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-journey-eyebrow">
              One Team, Every Stage
            </p>
            <h2 className="mt-3 max-w-xl font-display text-[28px] font-bold leading-tight text-white">
              How the team supports your care
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {connectedCare.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-2xl bg-journey-card px-5 py-4 text-sm font-medium text-white transition-colors hover:bg-journey-card/80"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <PageCTA
          heading="Ready to meet your care team?"
          body="Reach out by phone or WhatsApp, or send an enquiry and we'll match you with the right person."
        />
      </main>
      <Footer />
    </>
  );
}
