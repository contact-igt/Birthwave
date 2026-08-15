import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { CarePathways } from "@/components/home/CarePathways";
import { Services } from "@/components/home/Services";
import { DoctorLedCare } from "@/components/home/DoctorLedCare";
import { VideoExperience } from "@/components/home/VideoExperience";
import { PatientJourney } from "@/components/home/PatientJourney";
import { PatientExperience } from "@/components/home/PatientExperience";
import { GoogleReviews } from "@/components/home/GoogleReviews";
import { FAQ } from "@/components/home/FAQ";
import { ConversionCTA } from "@/components/home/ConversionCTA";
import { EnquirySection } from "@/components/page/EnquirySection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <VideoExperience />
        <CarePathways />
        <Services />
        <DoctorLedCare />
        <PatientJourney />
        <PatientExperience />
        <GoogleReviews />
        <FAQ />
        <ConversionCTA />
        <EnquirySection />
      </main>
      <Footer />
    </>
  );
}
