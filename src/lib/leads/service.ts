import { randomUUID } from "crypto";
import type { LeadInput, LeadSinkResult, NormalizedLead } from "./types";
import { normalizePhone } from "./validation";
import { sendToIgtLeadPanel } from "./sinks/igtLeadPanel";

function buildNormalizedLead(input: LeadInput): NormalizedLead {
  return {
    lead_id: randomUUID(),
    created_at: new Date().toISOString(),

    name: input.name,
    phone: normalizePhone(input.phone),
    email: input.email ?? null,
    service: input.service,
    message: input.message ?? null,

    source: input.attribution.source,
    campaign: input.attribution.campaign,
    creative: input.attribution.creative,
    channel: "Form",

    landing_page: input.attribution.landing_page,
    referrer: input.attribution.referrer,

    utm_source: input.attribution.utm_source,
    utm_medium: input.attribution.utm_medium,
    utm_campaign: input.attribution.utm_campaign,
    utm_content: input.attribution.utm_content,
    utm_term: input.attribution.utm_term,

    gclid: input.attribution.gclid,
    fbclid: input.attribution.fbclid,

    lead_status: "new",
    lead_owner: null,
    follow_up_status: "pending",
    next_follow_up_at: null,

    appointment_status: null,
    appointment_date_time: null,

    outcome: null,
    next_action: "contact lead",

    consent: true,
  };
}

export type SubmitLeadResult =
  | { ok: true; lead_id: string }
  | { ok: false; reason: "sink_not_configured" | "sink_error" };

// Success is defined as an explicit sink acknowledgement — never a fake
// local 200. If no durable sink is configured, this returns ok:false with
// reason "sink_not_configured" rather than pretending the lead was saved.
export async function submitLead(input: LeadInput): Promise<SubmitLeadResult> {
  const lead = buildNormalizedLead(input);

  const result: LeadSinkResult = await sendToIgtLeadPanel(lead);

  if (!result.ok) {
    // No PII in logs — lead_id and reason only.
    console.error("[leads] sink failed", { lead_id: lead.lead_id, reason: result.reason });
    return { ok: false, reason: result.reason };
  }

  return { ok: true, lead_id: result.lead_id };
}
