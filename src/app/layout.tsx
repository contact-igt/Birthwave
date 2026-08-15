import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Poppins } from "next/font/google";
import { QuickActions } from "@/components/QuickActions";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Obstetrician Gynaecologist in Nungambakkam Chennai – The BirthWave",
  description:
    "The Birth Wave is a doctor-led obstetrics & gynaecology practice in Nungambakkam, Chennai, offering continuous care across pregnancy, birth and recovery.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink pb-24 xl:pb-0">
        {children}
        <QuickActions />
      </body>
    </html>
  );
}
