"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";

// Scroll-linked "cinematic" reveal for the homepage brand video. The outer
// section reserves extra scroll height (md+ only); as the user scrolls
// through it, the sticky inner video widens/straightens from an inset
// preview into a near-full-width frame. Progress is computed in a
// rAF-throttled scroll handler and written directly to the video box's
// inline style — no React state per scroll tick, so this never re-renders.
//
// prefers-reduced-motion and mobile both skip the scroll-jacked treatment
// entirely (via CSS `motion-reduce:`/responsive classes, not JS branching,
// so server and client render the same markup and there's no hydration
// mismatch): the video simply sits at its final size in normal document
// flow, revealed once with the shared Reveal primitive.
export function VideoExperience() {
  const outerRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const outer = outerRef.current;
    const box = boxRef.current;
    if (!outer || !box) return;

    let raf = 0;
    function update() {
      raf = 0;
      if (!outer || !box) return;
      if (window.innerWidth < 768) {
        // Mobile never runs the scroll-linked treatment — clear any
        // inline overrides left over from a desktop→mobile resize.
        box.style.width = "";
        box.style.maxWidth = "";
        box.style.transform = "";
        box.style.borderRadius = "";
        return;
      }
      const rect = outer.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const progress = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 1;
      const tablet = window.innerWidth < 1024;
      const scale = (tablet ? 0.95 : 0.92) + (tablet ? 0.05 : 0.08) * progress;
      const width = (tablet ? 90 : 84) + (tablet ? 8 : 14) * progress;
      const maxWidth = (tablet ? 1000 : 1180) + 100 * progress;
      const radius = (tablet ? 28 : 32) - (tablet ? 16 : 22) * progress;
      box.style.width = `${width}vw`;
      box.style.maxWidth = `${maxWidth}px`;
      box.style.transform = `scale(${scale})`;
      box.style.borderRadius = `${radius}px`;
    }
    function onScroll() {
      if (!raf) raf = requestAnimationFrame(update);
    }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Play only while the video is actually on screen — saves bandwidth and
  // battery, and guarantees the (silent, since muted) loop never runs
  // somewhere the user can't see it.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.25 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  function toggleSound() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  }

  return (
    <section
      ref={outerRef}
      className="relative py-16 motion-safe:md:h-[135vh] motion-safe:md:py-0 motion-safe:lg:h-[160vh]"
    >
      <div className="flex flex-col items-center justify-center gap-8 motion-safe:md:sticky motion-safe:md:top-[84px] motion-safe:md:h-[72vh] motion-safe:md:overflow-hidden">
        <Container>
          <Reveal className="mx-auto max-w-xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-rose">
              Inside Birthwave
            </p>
            <h2 className="mt-3 font-display text-[28px] font-bold leading-tight text-ink md:text-[34px]">
              Care designed around the whole journey.
            </h2>
            <p className="mt-2 text-[16px] leading-relaxed text-muted">
              See how Birthwave brings pregnancy, birth, recovery and newborn care
              together in one connected experience.
            </p>
          </Reveal>
        </Container>

        <Reveal scaleFrom={0.97} className="w-full px-4 md:px-0">
          <div
            ref={boxRef}
            className="relative mx-auto w-full max-w-[900px] overflow-hidden rounded-[20px] bg-ink shadow-[0_30px_80px_rgba(46,36,33,0.25)] motion-reduce:md:w-full motion-reduce:md:max-w-4xl motion-reduce:md:rounded-2xl motion-safe:md:w-[84vw] motion-safe:md:max-w-[1180px] motion-safe:md:rounded-[32px] motion-safe:lg:w-[86vw]"
          >
            <video
              ref={videoRef}
              className="aspect-video w-full object-cover"
              src="/videos/birthwave-hospital-experience.mp4"
              poster="/images/birthwave/video/birthwave-hospital-poster.webp"
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
            />
            <button
              type="button"
              onClick={toggleSound}
              aria-pressed={!muted}
              aria-label={muted ? "Unmute video" : "Mute video"}
              className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink shadow-[0_4px_16px_rgba(0,0,0,0.2)] backdrop-blur transition-transform duration-150 hover:bg-white active:scale-[0.95]"
            >
              {muted ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 9v6h4l5 5V4L8 9H4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                  <path d="M17 8.5a5 5 0 0 1 0 7M19.5 6a8.5 8.5 0 0 1 0 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.35" />
                  <path d="M2 2l20 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 9v6h4l5 5V4L8 9H4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                  <path d="M17 8.5a5 5 0 0 1 0 7M19.5 6a8.5 8.5 0 0 1 0 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
