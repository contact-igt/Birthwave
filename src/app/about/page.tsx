import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/page/PageHero";
import { DoctorTrust } from "@/components/page/DoctorTrust";
import { VideoSlot } from "@/components/page/VideoSlot";
import { PageCTA } from "@/components/page/PageCTA";
import { TeamAvatar } from "@/components/TeamAvatar";
import { getTeamMember } from "@/lib/team";

const santoshi = getTeamMember("santoshi-nandigam")!;
const teamPreview = ["bharathy-kandasamy", "sheethal-sathya", "deepika-sivathanu"]
  .map(getTeamMember)
  .filter((m): m is NonNullable<typeof m> => Boolean(m));

export const metadata: Metadata = {
  title: "About The Birth Wave — Dr. Santoshi Nandigam, Nungambakkam, Chennai",
  description:
    "The Birth Wave is a doctor-led obstetrics & gynaecology practice in Nungambakkam, Chennai, built around one continuous care journey from pregnancy through newborn care.",
};

const gallery = [
  {
    src: "/images/birthwave/birthwave-childbirth-workshop-01.png",
    alt: "Childbirth education workshop session at Birthwave",
    caption: "Childbirth education workshops",
  },
  {
    src: "/images/birthwave/birthwave-birth-partner-session.png",
    alt: "Birth partner preparation session at Birthwave",
    caption: "Birth partner preparation",
  },
  {
    src: "/images/birthwave/birthwave-community-event.png",
    alt: "Birthwave community health event",
    caption: "Community health events",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="About Birthwave"
          heading="Care that feels like one continuous journey, not a series of appointments."
          intro="Birthwave was built around a simple idea: patients shouldn't have to re-explain their history at every visit. One doctor, one care plan, from your first question through follow-up."
          accent="rose"
          image={{
            src: "/images/birthwave/birthwave-workshop-facilitator.png",
            alt: "Dr. Santoshi Nandigam leading a Birthwave workshop",
          }}
        />

        <section className="bg-white py-16 md:py-20">
          <Container className="max-w-2xl">
            <h2 className="font-display text-[28px] font-bold leading-tight text-ink">
              Our approach
            </h2>
            <p className="mt-4 text-[14.5px] leading-relaxed text-muted">
              Birthwave is designed to feel less like moving between disconnected
              appointments and more like one continuous care journey, with space for
              questions, preferences, preparation and follow up — across pregnancy,
              birth and recovery, and into newborn and pediatric care.
            </p>
          </Container>
        </section>

        <DoctorTrust
          member={santoshi}
          heading="Led by Dr. Santoshi Nandigam"
          body="Dr. Santoshi Nandigam is an obstetrician & gynaecologist practising in Nungambakkam, Chennai, with care built around continuity — the same doctor across your pregnancy, birth and follow-up care."
          bullets={[
            "Clear explanations before decisions",
            "Care plans that connect pregnancy, birth and recovery",
            "Support for sensitive conversations without judgement",
          ]}
        />

        <section className="bg-cream py-16 md:py-20">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="max-w-xl font-display text-[28px] font-bold leading-tight text-ink">
                Meet our care team
              </h2>
              <Link
                href="/doctors"
                className="text-[11px] font-semibold text-link"
              >
                See the full team &rarr;
              </Link>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {teamPreview.map((member) => (
                <Link
                  key={member.slug}
                  href="/doctors"
                  className="group rounded-[22px] bg-white p-5 transition-shadow hover:shadow-[0_8px_24px_rgba(46,36,33,0.08)]"
                >
                  <TeamAvatar member={member} className="aspect-[4/3] w-full" />
                  <p className="mt-4 font-display text-base font-bold text-ink">
                    {member.name}
                  </p>
                  <p className="mt-1 text-xs text-muted">{member.role}</p>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-cream py-16 md:py-20">
          <Container>
            <h2 className="max-w-xl font-display text-[28px] font-bold leading-tight text-ink">
              From workshops to consultations
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {gallery.map((item) => (
                <figure key={item.src} className="overflow-hidden rounded-[22px] bg-white">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 90vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="p-4 text-xs font-medium text-ink/70">
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-white py-16 md:py-20">
          <Container className="max-w-3xl">
            <h2 className="font-display text-[26px] font-bold leading-tight text-ink">
              Hear from Birthwave
            </h2>
            <div className="mt-6">
              <VideoSlot />
            </div>
          </Container>
        </section>

        <PageCTA
          heading="Want to know if Birthwave is right for you?"
          body="Reach out by phone or WhatsApp — we're happy to answer questions before you book."
        />
      </main>
      <Footer />
    </>
  );
}
