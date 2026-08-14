import { Container } from "@/components/Container";
import { getGoogleBusinessData } from "@/lib/google-business/provider";

function Stars({ rating }: { rating: number }) {
  return (
    <span className="text-coral" aria-hidden="true">
      {"★".repeat(Math.round(rating))}
      <span className="text-border">{"★".repeat(5 - Math.round(rating))}</span>
    </span>
  );
}

// Live Google reviews — server component, fetched at render time via the
// server-only provider. Renders nothing at all when Google Business
// credentials aren't configured or the API call fails (Gate C: no
// placeholder is ever shown in place of live review data).
export async function GoogleReviews() {
  const data = await getGoogleBusinessData();
  if (!data || data.reviews.length === 0) return null;

  const featured = data.reviews.slice(0, 3);

  return (
    <section className="bg-cream py-14 md:py-16">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-rose">
              On Google
            </p>
            <h2 className="mt-3 font-display text-[30px] font-bold leading-tight text-ink">
              {data.rating ? (
                <>
                  <Stars rating={data.rating} /> {data.rating.toFixed(1)} on Google
                </>
              ) : (
                "Reviews on Google"
              )}
              {typeof data.reviewCount === "number" && (
                <span className="ml-2 text-base font-medium text-muted">
                  ({data.reviewCount} reviews)
                </span>
              )}
            </h2>
          </div>
          {data.googleMapsUrl && (
            <a
              href={data.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-semibold text-link"
            >
              View all reviews on Google &rarr;
            </a>
          )}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {featured.map((review) => (
            <div key={review.id} className="flex flex-col rounded-[22px] bg-white p-6">
              <Stars rating={review.rating} />
              {review.text && (
                <p className="mt-3 flex-1 text-[13px] leading-relaxed text-ink/80">
                  &ldquo;{review.text}&rdquo;
                </p>
              )}
              <div className="mt-4 flex items-center gap-2">
                <p className="text-xs font-semibold text-ink">{review.authorName}</p>
                {review.relativeTime && (
                  <span className="text-[11px] text-muted">&middot; {review.relativeTime}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-[10.5px] text-muted">Reviews sourced live from Google.</p>
      </Container>
    </section>
  );
}
