import { Metadata } from "next";
import ExperienceSection from "@/sections/ExperienceSection";

export const metadata: Metadata = {
  title: "Experience - Ramesha Javed | Professional Journey",
  description: "Explore my professional journey as an AI developer, including my work at VisionDX AI, freelance projects, and contributions to the AI community in Pakistan.",
  keywords: [
    "AI Developer Experience",
    "VisionDX AI Founder",
    "Freelance AI Developer",
    "Professional Journey",
    "Work History",
  ],
  openGraph: {
    title: "Experience - Ramesha Javed | Professional Journey",
    description: "Explore my professional journey in AI development and full-stack engineering.",
    type: "website",
  },
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen">
      <ExperienceSection />
    </main>
  );
}
