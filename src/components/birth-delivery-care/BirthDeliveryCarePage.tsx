import { Suspense } from "react";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/page/PageHero";
import { PageFAQ } from "@/components/page/PageFAQ";
import { EnquiryForm } from "@/components/page/EnquiryForm";
import { TeamAvatar } from "@/components/TeamAvatar";
import { site } from "@/lib/site";
import { getTeamMember } from "@/lib/team";

const pathwayCards = [
  {
    title: "Normal & Natural Birth",
    body: "Birth planning, labour guidance and childbirth education, alongside a clear conversation about what's appropriate for your pregnancy.",
    href: "#normal-birth",
  },
  {
    title: "VBAC After a Caesarean",
    body: "Vaginal birth after a previous caesarean, assessed individually — never assumed either way.",
    href: "#vbac",
  },
  {
    title: "Preparing for Birth",
    body: "Childbirth education, birth partner involvement and practical preparation for labour.",
    href: "#preparing-for-birth",
  },
  {
    title: "When Plans Need to Change",
    body: "An honest conversation about caesarean birth and other changes, without judgement.",
    href: "#changing-plans",
  },
] as const;

const preparationPoints = [
  {
    title: "Childbirth education",
    body: "Workshops covering labour stages, pain-coping options and what to expect, run alongside your regular antenatal visits.",
  },
  {
    title: "Birth partner preparation",
    body: "Your birth partner is part of the preparation, not just the delivery day — with guidance on how to support you through labour.",
  },
  {
    title: "Working through labour questions",
    body: "Space to ask about pain relief, monitoring, positions and anything else on your mind, revisited as your due date gets closer.",
  },
  {
    title: "Practical preparation",
    body: "What to pack, when to head in, and who to call — the logistical questions, answered clearly ahead of time.",
  },
] as const;

const faqs = [
  {
    q: "Do I need to decide on a birth plan early in pregnancy?",
    a: "No — birth planning conversations start early but develop over time. Nothing needs to be decided at a single visit.",
  },
  {
    q: "What's the difference between this page and the Normal Birth or VBAC pages?",
    a: "This page is a starting point covering birth care as a whole. The Normal Birth and VBAC pages go into more detail on those specific pathways.",
  },
  {
    q: "Can my birth partner be involved in preparation?",
    a: "Yes — birth partner involvement is part of how we approach preparation, not only delivery day.",
  },
  {
    q: "What happens if my birth plan needs to change during labour?",
    a: "It's discussed with you as it happens. A caesarean, if needed, is presented as an appropriate pathway — not a departure from the plan to be treated as a failure.",
  },
  {
    q: "Do you offer childbirth education classes?",
    a: "Yes, alongside regular antenatal care — see Preparing for Birth on this page for what's covered.",
  },
  {
    q: "Who do I talk to about VBAC after a previous caesarean?",
    a: "Dr. Santoshi assesses VBAC individually. Visit the VBAC page for a fuller explanation, or start the conversation directly using the form below.",
  },
] as const;

export function BirthDeliveryCarePage() {
  const santoshi = getTeamMember("santoshi-nandigam")!;
  const sheethal = getTeamMember("sheethal-sathya")!;

  return (
    <main>
      <PageHero
        eyebrow="Birth & Delivery Care"
        heading="Birth care built around preparation, preferences and clinical guidance."
        intro="Birth planning, labour preparation and an honest conversation about your options — with no promised outcome, and no pressure toward one pathway over another."
        accent="coral"
        image={{
          src: "/images/birthwave/birthwave-childbirth-workshop-01.png",
          alt: "Birth preparation workshop at Birthwave",
        }}
        illustration="birth"
      />

      <section className="bg-white py-16 md:py-20">
        <Container className="max-w-2xl">
          <h2 className="font-display text-[28px] font-bold leading-tight text-ink">
            Your birth plan starts with a conversation
          </h2>
          <p className="mt-4 text-[14.5px] leading-relaxed text-muted">
            Birth care at Birthwave isn&rsquo;t a single decision made at one appointment
            — it&rsquo;s a conversation that starts early in your pregnancy and develops
            as your due date approaches. What you&rsquo;re hoping for, what you&rsquo;re
            unsure about, and what your options are: all of it is discussed together,
            with room to change your mind as things become clearer.
          </p>
        </Container>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <Container>
          <h2 className="max-w-xl font-display text-[26px] font-bold leading-tight text-ink">
            Find your starting point
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {pathwayCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="group flex min-h-[190px] flex-col rounded-[22px] border border-border bg-white p-6 transition-colors hover:border-brown"
              >
                <h3 className="font-display text-[16px] font-semibold text-ink">
                  {card.title}
                </h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-muted">{card.body}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-link">
                  Read more <span aria-hidden="true">&darr;</span>
                </span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section id="normal-birth" className="scroll-mt-[100px] bg-white py-16 md:py-20">
        <Container className="grid gap-8 xl:grid-cols-2 xl:gap-16">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-coral">
              Normal &amp; Natural Birth
            </p>
            <h2 className="mt-3 font-display text-[26px] font-bold leading-tight text-ink">
              Preparation, not pressure.
            </h2>
          </div>
          <div>
            <p className="text-[14.5px] leading-relaxed text-muted">
              Preparing for a normal birth means discussing preferences early and
              revisiting them as your pregnancy progresses — birth planning, childbirth
              education and birth partner involvement, alongside a clear,
              judgement-free conversation about clinical circumstances. A caesarean,
              when it&rsquo;s the appropriate pathway, is never presented as a failure.
            </p>
            <Link
              href="/normal-birth-delivery"
              className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-semibold text-link"
            >
              Learn more about Normal Birth &amp; Delivery Care{" "}
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </Container>
      </section>

      <section id="vbac" className="scroll-mt-[100px] bg-cream py-16 md:py-20">
        <Container className="grid gap-8 xl:grid-cols-2 xl:gap-16">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-rose">
              VBAC — Vaginal Birth After Caesarean
            </p>
            <h2 className="mt-3 font-display text-[26px] font-bold leading-tight text-ink">
              An individual assessment, not a default answer.
            </h2>
          </div>
          <div>
            <p className="text-[14.5px] leading-relaxed text-muted">
              VBAC isn&rsquo;t right for everyone, and it isn&rsquo;t ruled out for
              everyone either. Your previous caesarean and this pregnancy are assessed
              individually — including what closer monitoring during labour would
              involve — and planning stays open to a repeat caesarean if that&rsquo;s
              the safer path.
            </p>
            <Link
              href="/vbac"
              className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-semibold text-link"
            >
              Learn more about VBAC <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </Container>
      </section>

      <section id="preparing-for-birth" className="scroll-mt-[100px] bg-white py-16 md:py-20">
        <Container>
          <h2 className="max-w-xl font-display text-[28px] font-bold leading-tight text-ink">
            Preparing for birth
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
            Practical, unhurried preparation — for you and whoever is supporting you
            through labour.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {preparationPoints.map((point) => (
              <li
                key={point.title}
                className="rounded-2xl border border-border bg-cream p-5"
              >
                <h3 className="font-display text-sm font-semibold text-ink">
                  {point.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">{point.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="changing-plans" className="scroll-mt-[100px] bg-blush py-16 md:py-20">
        <Container className="max-w-2xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-rose">
            An Honest Part Of The Conversation
          </p>
          <h2 className="mt-3 font-display text-[28px] font-bold leading-tight text-ink">
            When birth plans need to change
          </h2>
          <p className="mt-4 text-[14.5px] leading-relaxed text-ink/80">
            Not every birth follows the plan discussed in advance, and that&rsquo;s
            expected — labour is assessed as it happens, not against a fixed script
            agreed weeks earlier. If a caesarean becomes the safer path, it&rsquo;s
            discussed as exactly that: an appropriate pathway, not a failure or a
            departure from &ldquo;doing it right.&rdquo; Birthwave doesn&rsquo;t promise
            a specific outcome for any birth. What&rsquo;s promised is an honest
            conversation, at every stage, about what&rsquo;s happening and why.
          </p>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20">
        <Container>
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-rose">
            Doctor Led, Patient Centred
          </p>
          <h2 className="mt-3 max-w-xl font-display text-[30px] font-bold leading-tight text-ink">
            Your birth plan, led by Dr. Santoshi — supported by Sheethal.
          </h2>
          <div className="mt-10 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col gap-5 rounded-[28px] border border-border bg-cream p-6 sm:flex-row sm:items-center">
              <div className="relative h-[220px] w-full shrink-0 sm:h-[200px] sm:w-[180px]">
                <TeamAvatar member={santoshi} className="h-full w-full" />
              </div>
              <div>
                <p className="font-display text-lg font-bold text-ink">{santoshi.name}</p>
                <p className="mt-1 text-xs text-muted">{santoshi.role}</p>
                <p className="mt-3 text-[13px] leading-relaxed text-ink/80">
                  Leads birth planning conversations from your first antenatal visit
                  through delivery — discussing preferences, preparation and, when
                  needed, a change in plan, honestly and without judgement.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5 rounded-[28px] border border-border bg-cream p-6 sm:flex-row sm:items-center">
              <div className="relative h-[220px] w-full shrink-0 sm:h-[200px] sm:w-[180px]">
                <TeamAvatar member={sheethal} className="h-full w-full" />
              </div>
              <div>
                <p className="font-display text-lg font-bold text-ink">{sheethal.name}</p>
                <p className="mt-1 text-xs text-muted">{sheethal.role}</p>
                <p className="mt-3 text-[13px] leading-relaxed text-ink/80">
                  Supports birth preparation as a certified birth doula and childbirth
                  educator — running childbirth education sessions and helping birth
                  partners feel ready for labour.
                </p>
              </div>
            </div>
          </div>
          <Link
            href="/doctors"
            className="mt-6 inline-flex items-center gap-1.5 text-[11px] font-semibold text-link"
          >
            Meet the full care team <span aria-hidden="true">&rarr;</span>
          </Link>
        </Container>
      </section>

      <PageFAQ heading="Questions about Birth & Delivery Care" faqs={faqs} />

      <section className="flex min-h-[260px] items-center bg-blush py-12">
        <Container className="flex flex-col items-start justify-between gap-8 xl:flex-row xl:items-center">
          <div className="max-w-lg">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-rose">
              Ready When You Are
            </p>
            <h2 className="mt-2 font-display text-[28px] font-bold leading-tight text-ink">
              Ready to talk through your birth plan?
            </h2>
            <p className="mt-2 text-[13.5px] leading-relaxed text-muted">
              Every birth plan starts with a conversation — reach out and we&rsquo;ll
              take it from there.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-4">
            <a
              href="#contact-form"
              className="rounded-full bg-brown px-7 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-brown-600 active:bg-brown-700"
            >
              Discuss Your Birth Plan
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border bg-white px-7 py-3.5 text-[13px] font-semibold text-ink transition-colors hover:border-brown hover:text-brown"
            >
              WhatsApp Birthwave
            </a>
          </div>
        </Container>
      </section>

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
              <EnquiryForm defaultService="birth-delivery-care" />
            </Suspense>
          </div>
        </Container>
      </section>
    </main>
  );
}
