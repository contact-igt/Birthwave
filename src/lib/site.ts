// Verified business details — sourced from the official Birthwave Brand Guideline PDF
// (business card / letterhead / envelope pages). Do not alter without a verified source.
export const site = {
  name: "The Birth Wave",
  shortName: "Birthwave",
  tagline: "Obstetrician & Gynaecologist in Nungambakkam, Chennai",
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

export const nav = [
  { label: "Care Pathways", href: "#care-pathways" },
  { label: "Services", href: "#services" },
  { label: "Doctor-Led Care", href: "#doctor-led-care" },
  { label: "Birth Stories", href: "#patient-experience" },
  { label: "FAQ", href: "#faq" },
] as const;
