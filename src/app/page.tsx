import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { CarePathways } from "@/components/home/CarePathways";
import { Services } from "@/components/home/Services";
import { DoctorLedCare } from "@/components/home/DoctorLedCare";
import { PatientJourney } from "@/components/home/PatientJourney";
import { PatientExperience } from "@/components/home/PatientExperience";
import { FAQ } from "@/components/home/FAQ";
import { ConversionCTA } from "@/components/home/ConversionCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CarePathways />
        <Services />
        <DoctorLedCare />
        <PatientJourney />
        <PatientExperience />
        <FAQ />
        <ConversionCTA />
      </main>
      <Footer />
    </>
  );
}
