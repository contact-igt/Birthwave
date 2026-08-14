import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BirthDeliveryCarePage } from "@/components/birth-delivery-care/BirthDeliveryCarePage";

export const metadata: Metadata = {
  title: "Birth & Delivery Care in Nungambakkam, Chennai – The Birth Wave",
  description:
    "Birth care built around preparation, preferences and clinical guidance — normal birth, VBAC, childbirth education and honest planning with Dr. Santoshi Nandigam.",
};

export default function Page() {
  return (
    <>
      <Header />
      <BirthDeliveryCarePage />
      <Footer />
    </>
  );
}
