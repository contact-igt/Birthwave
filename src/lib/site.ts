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

// Nav labels are locked to the approved PDF, now pointing to real routes.
export const nav = [
  { label: "About", href: "/about" },
  { label: "Care & Services", href: "/services" },
  { label: "Pregnancy", href: "/pregnancy-care" },
  { label: "Fertility", href: "/fertility-preconception" },
  { label: "Pediatrics", href: "/newborn-pediatric-care" },
  { label: "Resources", href: "/services" },
] as const;
