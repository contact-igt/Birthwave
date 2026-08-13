"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

const faqs = [
  {
    q: "How do I book my first appointment?",
    a: `Call or WhatsApp us at ${site.phone} and we'll find a time that works for you.`,
  },
  {
    q: "What should I bring to my first visit?",
    a: "Any previous reports or scans you have, a list of current medications, and your questions.",
  },
  {
    q: "Can I stay with the same doctor throughout pregnancy and birth?",
    a: "Yes — Birthwave is built around continuous, doctor-led care from your first consult through postpartum follow-up.",
  },
  {
    q: "Do you offer childbirth education or antenatal classes?",
    a: "Yes, childbirth education workshops and antenatal yoga classes run alongside regular prenatal care.",
  },
] as const;

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-16 md:py-24">
      <Container className="max-w-3xl">
        <div>
          <p className="text-sm font-semibold tracking-wide text-primary-600">FAQ</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            Questions, answered.
          </h2>
        </div>

        <dl className="mt-10 divide-y divide-primary-100 border-y border-primary-100">
          {faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q}>
                <dt>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="flex min-h-14 w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold text-ink"
                  >
                    {item.q}
                    <span
                      className={`shrink-0 text-primary-500 transition-transform duration-200 ${
                        open ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M8 1v14M1 8h14"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd
                  id={`faq-panel-${i}`}
                  className={`grid overflow-hidden text-sm leading-relaxed text-ink/65 transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    open ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="min-h-0">{item.a}</p>
                </dd>
              </div>
            );
          })}
        </dl>
      </Container>
    </section>
  );
}
