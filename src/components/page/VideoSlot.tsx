// Reusable video slot. No approved Birthwave video exists yet, so this
// renders a clearly-labelled placeholder rather than a play button that does
// nothing. Pass `src` (a direct video/embed URL) once one is approved and it
// renders the real player — the calling page doesn't need to change.
export function VideoSlot({
  src,
  title = "Birthwave introduction",
}: {
  src?: string;
  title?: string;
}) {
  if (src) {
    return (
      <div className="aspect-video w-full overflow-hidden rounded-[24px] bg-ink">
        <iframe
          src={src}
          title={title}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-[24px] border border-dashed border-border bg-blush px-6 text-center">
      <p className="text-sm font-semibold text-ink">Clinic &amp; doctor introduction video</p>
      <p className="max-w-xs text-xs text-muted">
        A short introduction to Birthwave&rsquo;s care philosophy will go here once filmed
        and approved.
      </p>
    </div>
  );
}
