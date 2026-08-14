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
// Optional `children` render as an accessible dropdown (desktop) / accordion
// (mobile) rather than adding more top-level clutter.
export const nav = [
  { label: "About", href: "/about" },
  {
    label: "Care & Services",
    href: "/services",
    children: [
      { label: "Pregnancy Care", href: "/pregnancy-care" },
      { label: "Birth & Delivery Care", href: "/birth-delivery-care" },
      { label: "Fertility", href: "/fertility-preconception" },
      { label: "Vaginismus", href: "/vaginismus" },
      { label: "Newborn & Pediatrics", href: "/newborn-pediatric-care" },
    ],
  },
  {
    label: "Pregnancy",
    href: "/pregnancy-care",
    children: [
      { label: "Pregnancy Care", href: "/pregnancy-care" },
      { label: "Birth & Delivery Care", href: "/birth-delivery-care" },
      { label: "Normal Birth", href: "/normal-birth-delivery" },
      { label: "VBAC", href: "/vbac" },
    ],
  },
  { label: "Fertility", href: "/fertility-preconception" },
  { label: "Pediatrics", href: "/newborn-pediatric-care" },
  { label: "Our Team", href: "/doctors" },
] as const;
