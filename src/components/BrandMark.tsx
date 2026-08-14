import Image from "next/image";

// The only verified Birthwave logo asset is a white-on-transparent wordmark
// (public/images/birthwave/birthwave-logo-white.png) — there is no dark or
// brand-coloured variant in the supplied assets. Rather than recreating the
// mark in text or faking a recoloured version, it's used unmodified on a
// small brand-coloured badge, which keeps it legible on light backgrounds.
// A true light-background variant is still needed — see HUMAN REVIEW.
export function BrandMark({ size = "md" }: { size?: "sm" | "md" }) {
  const h = size === "sm" ? "h-8" : "h-10";
  return (
    <span className={`inline-flex items-center rounded-lg bg-brown px-2.5 py-2`}>
      <Image
        src="/images/birthwave/birthwave-logo-white.png"
        alt="The Birth Wave"
        width={160}
        height={107}
        className={`w-auto ${h}`}
        priority
      />
    </span>
  );
}
