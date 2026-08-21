import Link from "next/link";
import { TeamAvatar } from "@/components/TeamAvatar";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";
import type { TeamMember } from "@/lib/team";

export function DoctorTrust({
  member,
  members,
  eyebrow = "Doctor Led, Women-Centred Care",
  heading,
  body,
  bullets,
}: {
  member?: TeamMember;
  members?: readonly TeamMember[];
  eyebrow?: string;
  heading: string;
  body: string;
  bullets: readonly string[];
}) {
  const teamList =
    members && members.length > 0
      ? members
      : member
      ? [member]
      : [];

  if (teamList.length === 0) return null;

  if (teamList.length > 1) {
    return (
      <section className="bg-white py-16 md:py-20">
        <Container className="grid items-center gap-12 xl:grid-cols-[1.15fr_0.85fr] xl:gap-16">
          <Reveal>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              {teamList.map((doc) => (
                <div
                  key={doc.slug}
                  className="group relative flex flex-col overflow-hidden rounded-[24px] border border-border/80 bg-cream/35 p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brown/30 hover:bg-white hover:shadow-[0_12px_32px_rgba(46,36,33,0.08)]"
                >
                  <div className="relative aspect-[4/4.8] w-full overflow-hidden rounded-[18px] bg-sky">
                    <TeamAvatar member={doc} className="h-full w-full" />
                  </div>
                  <div className="mt-4 flex flex-1 flex-col">
                    <p className="font-display text-[16px] sm:text-[17px] font-bold leading-snug text-ink">
                      {doc.name}
                    </p>
                    {doc.credential && (
                      <p className="mt-0.5 text-[12px] font-semibold text-link">
                        {doc.credential}
                      </p>
                    )}
                    <p className="mt-1.5 text-[13px] leading-relaxed text-muted line-clamp-3">
                      {doc.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-rose">
                {eyebrow}
              </p>
              <h2 className="mt-3 max-w-xl font-display text-[30px] sm:text-[34px] font-bold leading-tight text-ink whitespace-pre-line">
                {heading}
              </h2>
              <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-muted">{body}</p>

              <ul className="mt-6 space-y-2.5">
                {bullets.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-[15px] font-medium text-ink/80"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral"
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>

              <Link
                href="/doctors"
                className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-link"
              >
                Meet the care team <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    );
  }

  const singleMember = teamList[0];

  return (
    <section className="bg-white py-16 md:py-20">
      <Container className="grid items-center gap-12 xl:grid-cols-[420px_1fr] xl:gap-16">
        <Reveal>
          <div className="relative mx-auto h-[380px] w-full max-w-sm xl:h-[440px]">
            <TeamAvatar member={singleMember} className="h-full w-full" />
            <div className="absolute bottom-5 left-5 rounded-2xl bg-white p-4 shadow-[0_8px_24px_rgba(46,36,33,0.08)]">
              <p className="font-display text-[15px] font-bold text-ink">{singleMember.name}</p>
              <p className="text-[13px] text-muted">{singleMember.role}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-rose">
              {eyebrow}
            </p>
            <h2 className="mt-3 max-w-xl font-display text-[32px] font-bold leading-tight text-ink whitespace-pre-line">
              {heading}
            </h2>
            <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-muted">{body}</p>

            <ul className="mt-6 space-y-2.5">
              {bullets.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-[15px] font-medium text-ink/80"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral"
                    aria-hidden="true"
                  />
                  {point}
                </li>
              ))}
            </ul>

            <Link
              href="/doctors"
              className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-link"
            >
              Meet the care team <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
