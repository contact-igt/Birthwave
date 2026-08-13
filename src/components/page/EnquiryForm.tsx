"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

// No backend exists yet, so this form does the one honest thing it can:
// build a WhatsApp message from what the patient entered and open it in a
// new tab. No fake "message sent" success state.
export function EnquiryForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("service") ?? "";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(preselected);
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const serviceLabel = services.find((s) => s.slug === service)?.title ?? service;
    const lines = [
      `Hi, I'd like to book an appointment with The Birth Wave.`,
      name && `Name: ${name}`,
      phone && `Phone: ${phone}`,
      serviceLabel && `Interested in: ${serviceLabel}`,
      message && `Message: ${message}`,
    ].filter(Boolean);
    const href = `https://wa.me/919840798472?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className="scroll-mt-[100px] grid gap-4 rounded-[24px] border border-border bg-white p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-semibold text-ink">Name</span>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="min-h-11 rounded-xl border border-border bg-cream px-4 text-sm text-ink outline-none focus:border-brown"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-semibold text-ink">Phone</span>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="min-h-11 rounded-xl border border-border bg-cream px-4 text-sm text-ink outline-none focus:border-brown"
          />
        </label>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className="text-xs font-semibold text-ink">What do you need help with?</span>
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="min-h-11 rounded-xl border border-border bg-cream px-4 text-sm text-ink outline-none focus:border-brown"
        >
          <option value="">Not sure yet</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-xs font-semibold text-ink">Message (optional)</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          className="rounded-xl border border-border bg-cream px-4 py-3 text-sm text-ink outline-none focus:border-brown"
        />
      </label>

      <button
        type="submit"
        className="mt-2 inline-flex min-h-11 items-center justify-center rounded-full bg-brown px-7 text-[13px] font-semibold text-white transition-colors hover:bg-brown-600 active:bg-brown-700"
      >
        Continue on WhatsApp
      </button>
      <p className="text-[11px] text-muted">
        Opens WhatsApp with your details filled in — nothing is sent until you do.
        Prefer to call? {site.phone}.
      </p>
    </form>
  );
}
