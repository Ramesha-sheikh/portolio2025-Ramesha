import { Metadata } from "next";
import AboutSection from "@/sections/AboutSection";
import SkillsSection from "@/sections/SkillsSection";

export const metadata: Metadata = {
  title: "About - Ramesha Javed | Agentic AI Developer",
  description: "Learn about Ramesha Javed, a Certified Agentic AI Developer and Founder of VisionDX AI. Specializing in autonomous AI agents, RAG systems, and full-stack development.",
  keywords: [
    "Agentic AI Developer",
    "AI Engineer",
    "Full-Stack Developer",
    "VisionDX AI",
    "Autonomous Agents",
    "RAG Systems",
    "Pakistan AI Developer",
  ],
  openGraph: {
    title: "About - Ramesha Javed | Agentic AI Developer",
    description: "Learn about Ramesha Javed, a Certified Agentic AI Developer and Founder of VisionDX AI.",
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutSection />
      <SkillsSection />
    </main>
  );
}
