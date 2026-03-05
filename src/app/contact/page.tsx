import { Metadata } from "next";
import ContactSection from "@/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact - Ramesha Javed | Let's Build Something Amazing",
  description: "Get in touch with Ramesha Javed for AI development projects, consulting, or collaboration opportunities. Available for freelance and full-time opportunities.",
  keywords: [
    "Contact AI Developer",
    "Hire Agentic AI Developer",
    "AI Consulting",
    "Freelance AI Developer",
    "Collaboration",
  ],
  openGraph: {
    title: "Contact - Ramesha Javed | Let's Connect",
    description: "Get in touch for AI development projects, consulting, or collaboration opportunities.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactSection />
    </main>
  );
}
