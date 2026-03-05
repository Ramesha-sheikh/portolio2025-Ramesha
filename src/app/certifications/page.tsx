import { Metadata } from "next";
import CertificationsSection from "@/sections/CertificationsSection";

export const metadata: Metadata = {
  title: "Certifications - Ramesha Javed | PIAIC Certified Agentic AI Developer",
  description: "View my professional certifications including Agentic AI Level 1 & 2 Developer, Prompt Engineering, and Business certifications from PIAIC and PAFLA.",
  keywords: [
    "PIAIC Certification",
    "Agentic AI Certification",
    "AI Developer Certification",
    "Prompt Engineering",
    "PAFLA Certification",
    "Professional Certifications",
  ],
  openGraph: {
    title: "Certifications - Ramesha Javed | PIAIC Certified",
    description: "View my professional certifications in Agentic AI Development and Prompt Engineering.",
    type: "website",
  },
};

export default function CertificationsPage() {
  return (
    <main className="min-h-screen">
      <CertificationsSection />
    </main>
  );
}
