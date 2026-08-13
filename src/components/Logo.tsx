// Text-based approximation of the Birthwave wordmark (script "Birth" + heartbeat-pulse
// mark, per the brand guideline). The guideline's hand-lettered logo is a raster/vector
// asset we don't have an exported file for — swap in the real SVG when available.
// See HUMAN REVIEW in the delivery report.
export function Logo({
  variant = "dark",
  textClassName = "text-lg",
}: {
  variant?: "dark" | "light";
  textClassName?: string;
}) {
  const color = variant === "dark" ? "text-ink" : "text-white";
  return (
    <span className={`inline-flex items-center gap-2 ${color}`}>
      <svg
        width="26"
        height="20"
        viewBox="0 0 26 20"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M1 12h4l2-7 3 15 3-11 2 5h10"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className={`font-display font-bold tracking-tight ${textClassName}`}>
        The Birth Wave
      </span>
    </span>
  );
}
