import Link from "next/link";
import { Container } from "@/components/Container";
import { services } from "@/lib/services";

export function RelatedSupport({ currentSlug }: { currentSlug: string }) {
  const related = services.filter((s) => s.slug !== currentSlug).slice(0, 3);

  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <h2 className="font-display text-[26px] font-bold leading-tight text-ink">
          Related Birthwave support
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {related.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}`}
              className="group rounded-2xl border border-border bg-cream p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brown hover:shadow-[0_10px_28px_rgba(46,36,33,0.08)]"
            >
              <h3 className="font-display text-base font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">{s.shortDescription}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold text-link">
                Learn more <span aria-hidden="true">&rarr;</span>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
