import { Container } from "@/components/Container";
import { VideoSlot } from "@/components/page/VideoSlot";

export function VideoSection() {
  return (
    <section className="bg-cream py-14 md:py-16">
      <Container className="max-w-3xl">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-rose">
          Inside Birthwave
        </p>
        <h2 className="mt-3 font-display text-[28px] font-bold leading-tight text-ink">
          A closer look at how we care for you
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
          A short introduction to the clinic, the team and Birthwave&rsquo;s approach to
          care.
        </p>
        <div className="mt-6">
          <VideoSlot />
        </div>
      </Container>
    </section>
  );
}
