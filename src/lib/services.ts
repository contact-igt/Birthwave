import type { LineArtVariant } from "@/components/illustrations/LineArt";

export type ServiceContent = {
  slug: string;
  expertSlug: string;
  title: string;
  shortDescription: string;
  accent: "rose" | "blue" | "coral";
  image?: { src: string; alt: string };
  illustration: LineArtVariant;
  hero: {
    eyebrow: string;
    heading: string;
    intro: string;
  };
  explanation: {
    heading: string;
    body: string;
    points: readonly string[];
  };
  whoItsFor: readonly string[];
  doctorTrust: {
    heading: string;
    body: string;
    bullets: readonly string[];
  };
  journey: {
    eyebrow: string;
    heading: string;
    intro: string;
    steps: readonly { title: string; body: string }[];
  };
  faqs: readonly { q: string; a: string }[];
  cta: {
    heading: string;
    body: string;
  };
};

// Content follows the project's healthcare-content-safety rules: no invented
// credentials, success rates, delivery counts, or guaranteed outcomes.
// Hedge language ("assess", "discuss", "may", "individual factors") is used
// deliberately wherever an outcome depends on individual assessment.
export const services: readonly ServiceContent[] = [
  {
    slug: "pregnancy-care",
    expertSlug: "santoshi-nandigam",
    title: "Pregnancy & Antenatal Care",
    shortDescription:
      "Routine and high-touch pregnancy care with a clear plan for each trimester.",
    accent: "blue",
    image: {
      src: "/images/birthwave/birthwave-antenatal-movement-coaching.png",
      alt: "Antenatal movement coaching session at Birthwave",
    },
    illustration: "pregnancy",
    hero: {
      eyebrow: "Pregnancy & Antenatal Care",
      heading: "Antenatal care built around your trimester, not a checklist.",
      intro:
        "Regular visits, scans coordinated with your timeline, and a birth plan that develops alongside your pregnancy — with the same doctor from your first consult.",
    },
    explanation: {
      heading: "What antenatal care at Birthwave covers",
      body: "Care is structured around where you are in pregnancy, with space to discuss preferences, concerns and preparation as they come up — not only at scheduled milestones.",
      points: [
        "Regular prenatal visits with screening appropriate to each trimester",
        "Scan and test coordination, explained in plain language",
        "Birth planning conversations that start early, not at the last visit",
        "Nutrition and movement guidance suited to your stage of pregnancy",
      ],
    },
    whoItsFor: [
      "You're newly pregnant and want continuous care from one doctor",
      "You're switching providers and want your history understood from visit one",
      "Your pregnancy needs closer monitoring and you want a consistent care team",
      "You want birth preparation woven into your routine antenatal visits",
    ],
    doctorTrust: {
      heading: "The same doctor, every visit",
      body: "Birthwave is designed so you're not repeating your history at each appointment — your care plan carries forward, and questions are addressed as they arise.",
      bullets: [
        "Clear explanations before decisions",
        "Care plans that connect pregnancy, birth and recovery",
        "Continuity from your first consult through delivery",
      ],
    },
    journey: {
      eyebrow: "From First Question To Follow Up",
      heading: "A simpler care journey, with fewer gaps between steps.",
      intro: "What happens next, not just a list of services.",
      steps: [
        { title: "Discover", body: "Understand what antenatal care looks like at each stage." },
        { title: "Book", body: "Choose a time by phone or WhatsApp." },
        { title: "Consult", body: "Meet Dr. Santoshi with your context already understood." },
        { title: "Continue", body: "Regular visits through to delivery and beyond." },
      ],
    },
    faqs: [
      {
        q: "When should I book my first antenatal visit?",
        a: "As soon as you have a positive test or missed period — an early visit helps confirm dates and plan your antenatal schedule.",
      },
      {
        q: "Will I see the same doctor at every visit?",
        a: "Yes — continuity of care with Dr. Santoshi is central to how Birthwave is structured.",
      },
      {
        q: "Can we start discussing my birth plan early?",
        a: "Yes, birth preferences are discussed progressively through your antenatal visits, not left to the end.",
      },
      {
        q: "Do you coordinate scans and lab tests?",
        a: "Yes — scans and tests are scheduled around your trimester and explained during your visit.",
      },
    ],
    cta: {
      heading: "Ready to book your antenatal visit?",
      body: "Reach out by phone or WhatsApp and we'll help you find a time.",
    },
  },
  {
    slug: "normal-birth-delivery",
    expertSlug: "santoshi-nandigam",
    title: "Normal Birth & Delivery Care",
    shortDescription:
      "Personalised discussions around birth preferences, eligibility and preparation.",
    accent: "coral",
    image: {
      src: "/images/birthwave/birthwave-birth-position-practice.png",
      alt: "Birthing position practice during a Birthwave childbirth workshop",
    },
    illustration: "birth",
    hero: {
      eyebrow: "Normal Birth & Delivery Care",
      heading: "Birth preparation and clinical flexibility, discussed together.",
      intro:
        "Birth planning, labour guidance and childbirth education — with an honest conversation about what's appropriate for your pregnancy, including when a caesarean may be the right path.",
    },
    explanation: {
      heading: "What birth preparation involves",
      body: "Preparing for a normal birth means discussing preferences early and revisiting them as your pregnancy progresses — always alongside a clear, judgement-free conversation about clinical circumstances.",
      points: [
        "Birth planning conversations that start well before your due date",
        "Childbirth education and labour-preparation guidance",
        "Birth partner support and involvement in preparation",
        "A clear, non-judgemental conversation about caesarean birth when it's the appropriate pathway",
      ],
    },
    whoItsFor: [
      "You're hoping for a normal birth and want a clear preparation plan",
      "You want your birth partner involved in preparation, not just the delivery day",
      "You want to understand labour stages and what to expect at each one",
      "You want an honest conversation about all birth pathways, without pressure either way",
    ],
    doctorTrust: {
      heading: "Preparation, not pressure",
      body: "Every birth is different. Birthwave's approach is to prepare you thoroughly for a normal birth while staying clinically flexible — a caesarean, when appropriate, is never presented as a failure.",
      bullets: [
        "Clear explanations before decisions",
        "Support for sensitive conversations without judgement",
        "Care plans that connect pregnancy, birth and recovery",
      ],
    },
    journey: {
      eyebrow: "From First Question To Follow Up",
      heading: "A simpler care journey, with fewer gaps between steps.",
      intro: "What happens next, not just a list of services.",
      steps: [
        { title: "Discover", body: "Understand what birth preparation looks like." },
        { title: "Book", body: "Choose a time by phone or WhatsApp." },
        { title: "Consult", body: "Discuss preferences with your context already understood." },
        { title: "Continue", body: "Preparation continues through to your birth." },
      ],
    },
    faqs: [
      {
        q: "Can I discuss my birth preferences with the doctor?",
        a: "Yes — birth preferences are discussed as part of your regular antenatal visits, revisited as your pregnancy progresses.",
      },
      {
        q: "Do you offer childbirth education classes?",
        a: "Yes, childbirth education workshops run alongside regular antenatal care.",
      },
      {
        q: "Can my birth partner join preparation sessions?",
        a: "Yes — birth partner involvement is part of how we approach preparation.",
      },
      {
        q: "What if a normal birth isn't appropriate for me?",
        a: "We'll talk through it directly — clinical circumstances are assessed individually, and a caesarean is discussed as an appropriate pathway when needed, not a last resort to avoid mentioning.",
      },
    ],
    cta: {
      heading: "Ready to start birth preparation?",
      body: "Reach out by phone or WhatsApp and we'll help you find a time.",
    },
  },
  {
    slug: "vbac",
    expertSlug: "santoshi-nandigam",
    title: "VBAC (Vaginal Birth After Caesarean)",
    shortDescription:
      "Individual assessment and planning for patients considering VBAC.",
    accent: "rose",
    image: {
      src: "/images/birthwave/birthwave-childbirth-workshop-02.png",
      alt: "Birth preparation workshop group session at Birthwave",
    },
    illustration: "vbac",
    hero: {
      eyebrow: "VBAC — Vaginal Birth After Caesarean",
      heading: "Had a caesarean before? Let's discuss your options for this pregnancy.",
      intro:
        "VBAC isn't right for everyone, and it isn't ruled out for everyone either. We assess your previous birth history and this pregnancy individually, and plan from there.",
    },
    explanation: {
      heading: "What a VBAC conversation covers",
      body: "Whether vaginal birth after a caesarean is appropriate depends on your specific history and this pregnancy — it's assessed individually, not assumed either way. Another caesarean may still be recommended, and that's discussed openly, not as a fallback to avoid.",
      points: [
        "A review of your previous caesarean(s) and the reasons behind them",
        "Assessment of this pregnancy's individual factors",
        "An honest discussion of what VBAC would involve, including monitoring during labour",
        "Planning that stays open to a repeat caesarean if that's the safer path",
      ],
    },
    whoItsFor: [
      "You've had one previous caesarean and want to understand your options this time",
      "You want an individual assessment, not a blanket yes or no",
      "You want to understand what closer monitoring during a VBAC labour involves",
      "You want a doctor who will discuss a repeat caesarean honestly if that's the better path",
    ],
    doctorTrust: {
      heading: "An individual assessment, not a default answer",
      body: "VBAC eligibility depends on factors specific to you — the reason for your previous caesarean, how this pregnancy is progressing, and how labour unfolds if you choose to attempt VBAC. We won't promise an outcome either way.",
      bullets: [
        "Clear explanations before decisions",
        "Care plans that connect your birth history to this pregnancy",
        "Support for sensitive conversations without judgement",
      ],
    },
    journey: {
      eyebrow: "How A Vbac Conversation Unfolds",
      heading: "From your previous birth to a plan for this one.",
      intro: "Every step is based on your individual history — nothing is assumed in advance.",
      steps: [
        {
          title: "Previous caesarean",
          body: "We start with what happened and why, in your own words and your records.",
        },
        {
          title: "Consultation",
          body: "An open conversation about what VBAC would involve for you.",
        },
        {
          title: "Assessment",
          body: "Your history and this pregnancy are assessed together, individually.",
        },
        {
          title: "Planning",
          body: "A plan that stays realistic about both a VBAC and a repeat caesarean.",
        },
        {
          title: "Birth care",
          body: "Closer monitoring through labour, with the plan adjusted as needed.",
        },
      ],
    },
    faqs: [
      {
        q: "Am I automatically eligible for VBAC after one caesarean?",
        a: "No — eligibility depends on individual factors, including why your previous caesarean was needed and how this pregnancy is progressing. It's assessed, not assumed.",
      },
      {
        q: "Is VBAC riskier than a repeat caesarean?",
        a: "Both pathways carry different considerations, which we'll walk through for your specific situation during consultation — this isn't something we generalise.",
      },
      {
        q: "What happens if I start labour and VBAC isn't progressing safely?",
        a: "Labour is monitored closely, and the plan can shift to a caesarean if that becomes the safer option at any point.",
      },
      {
        q: "Can we still plan a repeat caesarean instead?",
        a: "Yes — a repeat caesarean is a valid, openly discussed option if that's what's appropriate or what you prefer.",
      },
    ],
    cta: {
      heading: "Want to talk through your VBAC options?",
      body: "Reach out by phone or WhatsApp — we'll start with your previous birth history.",
    },
  },
  {
    slug: "fertility-preconception",
    expertSlug: "bharathy-kandasamy",
    title: "Fertility & Preconception",
    shortDescription: "Evaluation, counselling and planning before pregnancy.",
    accent: "blue",
    image: {
      src: "/images/birthwave/dr-bharathy-kandasamy.png",
      alt: "Dr. Bharathy Kandasamy, Advanced Fertility Specialist",
    },
    illustration: "fertility",
    hero: {
      eyebrow: "Fertility & Preconception",
      heading: "Planning a pregnancy starts with understanding where you are now.",
      intro:
        "Cycle guidance, preconception evaluation and planning conversations — for anyone thinking about pregnancy, whether you're just starting to plan or have been trying for a while.",
    },
    explanation: {
      heading: "What preconception care covers",
      body: "Preconception evaluation looks at your cycle, general health and any relevant history, so planning conversations are based on your actual situation rather than general advice.",
      points: [
        "Cycle and ovulation guidance",
        "Preconception health evaluation and counselling",
        "Discussion of individual factors that may affect conception timing",
        "A plan for what to monitor once you start trying, or while you continue",
      ],
    },
    whoItsFor: [
      "You're starting to plan a pregnancy and want a preconception check-in",
      "You've been trying for a while and want an individual evaluation",
      "You want cycle guidance that's specific to you, not generic advice",
      "You want a consistent doctor if evaluation leads into pregnancy care",
    ],
    doctorTrust: {
      heading: "Planning conversations, not assumptions",
      body: "Every fertility conversation starts with your individual history and current cycle — evaluation comes before any recommendation.",
      bullets: [
        "Clear explanations before decisions",
        "Individual evaluation rather than general advice",
        "Continuity into pregnancy care if and when that's next",
      ],
    },
    journey: {
      eyebrow: "From First Question To Follow Up",
      heading: "A simpler care journey, with fewer gaps between steps.",
      intro: "What happens next, not just a list of services.",
      steps: [
        { title: "Discover", body: "Understand what preconception evaluation involves." },
        { title: "Book", body: "Choose a time by phone or WhatsApp." },
        { title: "Consult", body: "Discuss your cycle and history with Dr. Santoshi." },
        { title: "Continue", body: "A plan for what's next, reviewed as needed." },
      ],
    },
    faqs: [
      {
        q: "When should I have a preconception check-in?",
        a: "Whenever you start thinking about pregnancy — there's no fixed timeline, and earlier conversations simply give more time to plan.",
      },
      {
        q: "Do you offer cycle tracking guidance?",
        a: "Yes, cycle and ovulation guidance is part of preconception care.",
      },
      {
        q: "What if I've been trying for a while without success?",
        a: "We'll start with an individual evaluation of your cycle and relevant history to understand what to look at next.",
      },
      {
        q: "Does this lead into pregnancy care with the same doctor?",
        a: "Yes — if and when you become pregnant, care continues with the same doctor.",
      },
    ],
    cta: {
      heading: "Ready for a preconception conversation?",
      body: "Reach out by phone or WhatsApp and we'll help you find a time.",
    },
  },
  {
    slug: "vaginismus",
    expertSlug: "adithi-nair",
    title: "Vaginismus & Intimate Wellness",
    shortDescription: "Private, sensitive support for pain, fear and intimacy-related concerns.",
    accent: "rose",
    illustration: "vaginismus",
    hero: {
      eyebrow: "Vaginismus & Intimate Wellness",
      heading: "Private, unhurried support for pain and fear around intimacy.",
      intro:
        "A calm, judgement-free space to discuss vaginismus and related concerns — at a pace that's comfortable for you.",
    },
    explanation: {
      heading: "What this consultation involves",
      body: "Conversations start with listening, not examination — you set the pace, and next steps are only discussed once you feel ready.",
      points: [
        "A private, unhurried first conversation",
        "Discussion of pain, fear or anxiety around intimacy without judgement",
        "An individual plan for next steps, at your pace",
        "Ongoing support rather than a single consultation",
      ],
    },
    whoItsFor: [
      "You experience pain or fear around intimacy and want to talk it through privately",
      "You've found it hard to raise this with a doctor before",
      "You want a plan that moves at your pace, not a fixed protocol",
      "You want ongoing, judgement-free support rather than a one-off visit",
    ],
    doctorTrust: {
      heading: "A judgement-free starting point",
      body: "This is a sensitive area, and the first conversation is designed to be exactly that — a conversation. There's no assumption about what happens next until you're ready to discuss it.",
      bullets: [
        "Support for sensitive conversations without judgement",
        "Clear explanations before decisions",
        "A pace set by you, not a fixed process",
      ],
    },
    journey: {
      eyebrow: "From First Question To Follow Up",
      heading: "A simpler care journey, with fewer gaps between steps.",
      intro: "What happens next, not just a list of services.",
      steps: [
        { title: "Discover", body: "Understand what a first conversation looks like." },
        { title: "Book", body: "Choose a time by phone or WhatsApp, privately." },
        { title: "Consult", body: "A private, unhurried conversation with Dr. Santoshi." },
        { title: "Continue", body: "Ongoing support at a pace that's comfortable for you." },
      ],
    },
    faqs: [
      {
        q: "Is the first appointment just a conversation?",
        a: "Yes — the first visit is about listening and understanding your situation, not examination.",
      },
      {
        q: "Can I book privately, without discussing why on the phone?",
        a: "Yes — you can book by phone or WhatsApp without needing to explain the reason in advance.",
      },
      {
        q: "How long does support typically continue?",
        a: "That depends on your individual situation and pace — it's discussed with you rather than following a fixed schedule.",
      },
      {
        q: "Will I be examined at the first visit?",
        a: "Not unless you're ready for that — the pace is set by you.",
      },
    ],
    cta: {
      heading: "Ready to talk, privately?",
      body: "Reach out by phone or WhatsApp — this stays between you and Dr. Santoshi.",
    },
  },
  {
    slug: "newborn-pediatric-care",
    expertSlug: "deepika-sivathanu",
    title: "Newborn & Pediatric Care",
    shortDescription: "Newborn review, vaccination guidance and continuing pediatric care.",
    accent: "coral",
    image: {
      src: "/images/birthwave/hero2.png",
      alt: "Newborn and pediatric care at The Birth Wave",
    },
    illustration: "newborn",
    hero: {
      eyebrow: "Newborn, Pediatric & Vaccination Care",
      heading: "Continuity from delivery into your baby's early care.",
      intro:
        "Newborn review, vaccination guidance and continuing pediatric care — so your baby's early months aren't a handoff to someone new right after delivery.",
    },
    explanation: {
      heading: "What newborn and pediatric care covers",
      body: "Care continues past delivery, with newborn review and a vaccination schedule discussed clearly as your baby grows.",
      points: [
        "Newborn review following delivery",
        "Vaccination guidance and scheduling",
        "Continuing pediatric check-ins through early months",
        "A direct line back to the same care team for questions",
      ],
    },
    whoItsFor: [
      "You're expecting and want continuity of care after delivery",
      "You want vaccination guidance explained clearly, on schedule",
      "You want newborn concerns addressed by a familiar care team",
      "You're looking for ongoing pediatric check-ins, not a one-time visit",
    ],
    doctorTrust: {
      heading: "Continuity that doesn't stop at delivery",
      body: "Newborn and pediatric care is treated as part of the same care journey as your pregnancy and birth, not a separate handoff.",
      bullets: [
        "Care plans that connect pregnancy, birth and recovery",
        "Clear explanations before decisions",
        "A consistent point of contact for early newborn questions",
      ],
    },
    journey: {
      eyebrow: "From First Question To Follow Up",
      heading: "A simpler care journey, with fewer gaps between steps.",
      intro: "What happens next, not just a list of services.",
      steps: [
        { title: "Discover", body: "Understand what newborn follow-up involves." },
        { title: "Book", body: "Choose a time by phone or WhatsApp." },
        { title: "Consult", body: "Newborn review with your birth history already known." },
        { title: "Continue", body: "Vaccination guidance and ongoing check-ins." },
      ],
    },
    faqs: [
      {
        q: "When is the first newborn review?",
        a: "This is scheduled following delivery — timing is discussed as part of your birth care plan.",
      },
      {
        q: "Do you provide a vaccination schedule?",
        a: "Yes, vaccination guidance and scheduling are part of continuing pediatric care.",
      },
      {
        q: "Can I continue pediatric care with the same team after delivery?",
        a: "Yes — that continuity is a core part of how Birthwave is structured.",
      },
      {
        q: "What if I have questions between scheduled visits?",
        a: "You can reach out by phone or WhatsApp — a consistent point of contact is part of ongoing care.",
      },
    ],
    cta: {
      heading: "Planning ahead for newborn care?",
      body: "Reach out by phone or WhatsApp and we'll help you find a time.",
    },
  },
] as const;

export function getService(slug: string): ServiceContent | undefined {
  return services.find((s) => s.slug === slug);
}

// Concise enquiry-only entries for the Services hub — services without a
// dedicated page yet route to /contact?service=<slug>.
export const supportingServices = [
  { slug: "womens-health", title: "Women's Health & Gynaecology" },
  { slug: "pcos", title: "PCOS" },
  { slug: "postpartum-recovery", title: "Postpartum & Recovery" },
  { slug: "lactation-support", title: "Lactation Support" },
  { slug: "pregnancy-yoga", title: "Pregnancy Yoga" },
  { slug: "nutrition", title: "Nutrition" },
  { slug: "prenatal-classes", title: "Prenatal Classes" },
  { slug: "birth-preparation", title: "Birth Preparation" },
  { slug: "childbirth-education", title: "Childbirth Education" },
  { slug: "workshops-events", title: "Workshops & Events" },
] as const;

// Lightweight option list for the enquiry form's service dropdown — the six
// full service pages plus the Birth & Delivery Care hub, which isn't a full
// ServiceContent (it's a hub page with its own bespoke layout).
export const formServiceOptions = [
  ...services.map((s) => ({ slug: s.slug, title: s.title })),
  { slug: "birth-delivery-care", title: "Birth & Delivery Care" },
] as const;

export function getFormServiceTitle(slug: string): string | undefined {
  return formServiceOptions.find((s) => s.slug === slug)?.title;
}
