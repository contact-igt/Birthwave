import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceLandingPage } from "@/components/service/ServiceLandingPage";
import { getService } from "@/lib/services";

const service = getService("pregnancy-care")!;

export const metadata: Metadata = {
  title: "Pregnancy & Antenatal Care in Nungambakkam, Chennai – The Birth Wave",
  description:
    "Doctor-led antenatal care with Dr. Santoshi Nandigam — regular prenatal visits, scan coordination and birth planning, continuous through every trimester.",
};

export default function Page() {
  return (
    <>
      <Header />
      <ServiceLandingPage service={service} />
      <Footer />
    </>
  );
}
