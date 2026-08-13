// Verified business details — sourced from the official Birthwave Brand Guideline PDF
// (business card / letterhead / envelope pages). Do not alter without a verified source.
export const site = {
  name: "The Birth Wave",
  shortName: "Birthwave",
  byline: "By Dr. Santoshi Nandigam",
  doctor: {
    name: "Dr. Santoshi Nandigam",
    title: "Obstetrics & Gynaecology",
  },
  phone: "+91 9840798472",
  phoneHref: "tel:+919840798472",
  whatsappHref:
    "https://wa.me/919840798472?text=" +
    encodeURIComponent("Hi, I'd like to book an appointment with The Birth Wave."),
  email: "drsantoshi@thebirthwave.com",
  address: {
    line1: "8/15, Mahalingapuram Main Rd, Mahalingapuram",
    line2: "Nungambakkam, Chennai, Tamil Nadu, 600034",
  },
} as const;

// Nav labels are locked to the approved PDF. These point to the closest matching
// in-page section since dedicated sub-pages (About, Pregnancy, Fertility, etc.)
// don't exist yet — avoids introducing broken links this pass.
export const nav = [
  { label: "About", href: "#doctor-led-care" },
  { label: "Care & Services", href: "#services" },
  { label: "Pregnancy", href: "#care-pathways" },
  { label: "Fertility", href: "#care-pathways" },
  { label: "Pediatrics", href: "#services" },
  { label: "Resources", href: "#faq" },
] as const;
