// Single source of truth for the Birthwave care team. Credentials are
// published only where verified — either against thebirthwave.com's own
// existing pages or explicitly approved by the user. See CREDENTIAL REVIEW
// notes inline for anything intentionally withheld pending verification.

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  credential?: string; // verified academic/professional credential line
  group: "founder" | "clinical" | "allied";
  image?: string; // path under /public, when a verified portrait exists
  imageFocal?: string; // per-portrait object-position for consistent card framing
  bio?: string;
  expertiseHref?: string; // link to the most relevant service page
};

export const team: readonly TeamMember[] = [
  {
    slug: "santoshi-nandigam",
    name: "Dr. Santoshi Nandigam",
    role: "Founder · Obstetrician & Gynaecologist · Natural Birth & VBAC Specialist · Holistic Fertility Coach",
    credential: "MBBS, DNB — Obstetrics & Gynaecology",
    group: "founder",
    image: "/images/dr-santoshi-nandigam.png",
    bio: "The Birthwave is designed as one continuous care journey, with space for questions, preferences, preparation and follow-up — across pregnancy, birth and recovery.",
    expertiseHref: "/vbac",
  },
  {
    slug: "bharathy-kandasamy",
    name: "Dr. Bharathy Kandasamy",
    role: "Gynaecologist · Laparoscopic Surgeon · Advanced Fertility Specialist",
    credential: "MBBS, Fellowship in Reproductive Medicine and Laparoscopy",
    group: "clinical",
    image: "/images/birthwave/dr-bharathy.jpeg",
    imageFocal: "object-[center_58%]",
    expertiseHref: "/fertility-preconception",
  },
  {
    slug: "deepika-sivathanu",
    name: "Dr. Deepika Sivathanu",
    role: "Paediatrician",
    credential: "MBBS, MD — Pediatrics",
    group: "clinical",
    image: "/images/birthwave/dr-deepika.PNG",
    imageFocal: "object-center",
    expertiseHref: "/newborn-pediatric-care",
  },
  {
    slug: "amudha-varshini",
    name: "Dr. Amudha Varshini",
    role: "Naturopathy & Yoga · Prenatal & Postpartum Yoga Specialist",
    credential: "BNYS",
    group: "clinical",
    image: "/images/team/Dr. Amudha Varshini.JPG",
    imageFocal: "object-[center_55%]",
    expertiseHref: "/pregnancy-antenatal-care",
  },
  {
    slug: "adithi-nair",
    name: "Dr. Adithi Nair",
    role: "Pelvic Floor Therapy · Vaginismus Coach",
    // Academic credential intentionally withheld — the Practo profile supplied
    // as a source could not be verified (returned a bot-challenge page, no
    // content). Do not publish MPT/DPT/MS OBG until independently confirmed.
    group: "clinical",
    image: "/images/team/Dr Adithi Nair2.jpg",
    imageFocal: "object-top",
    expertiseHref: "/vaginismus",
  },
  {
    slug: "sheethal-sathya",
    name: "Sheethal Sathya",
    role: "Childbirth Educator · Lactation Consultant",
    credential: "DONA-certified Birth Doula, Lactation Counsellor",
    group: "allied",
    image: "/images/birthwave/sheethal-sathya.png",
    imageFocal: "object-[center_-40%]",
    expertiseHref: "/lactation",
  },
  {
    slug: "deepa",
    name: "Deepa",
    role: "Emotional Well-being Support",
    credential: "M.Sc Psychology",
    group: "allied",
    image: "/images/team/Deepa.png",
    imageFocal: "object-[center_45%]",
  },
  {
    slug: "rakshitha",
    name: "Rakshitha",
    role: "School Psychology",
    group: "allied",
    image: "/images/birthwave/dr-rakshitha.jpeg",
    imageFocal: "object-top",
  },
  {
    slug: "coach-tilak",
    name: "Coach Tilak",
    role: "Strength & Conditioning",
    group: "allied",
    image: "/images/team/coach tilak.JPG",
    imageFocal: "object-[50%_35%]",
  },
  {
    slug: "sherene",
    name: "Sherene",
    role: "Nutritionist",
    group: "allied",
    image: "/images/birthwave/dr-sherene.jpeg",
    imageFocal: "object-top",
  },
] as const;

export function getTeamMember(slug: string): TeamMember | undefined {
  return team.find((m) => m.slug === slug);
}
