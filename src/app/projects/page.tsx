import { Metadata } from "next";
import ProjectSection from "@/sections/ProjectSection";

export const metadata: Metadata = {
  title: "Projects - Ramesha Javed | AI & Full-Stack Portfolio",
  description: "Explore my portfolio of AI-powered projects including VisionDX AI medical imaging platform, autonomous agent suites, CRM systems, and more. Built with Next.js, Python, and cutting-edge AI.",
  keywords: [
    "AI Projects",
    "Agentic AI Portfolio",
    "VisionDX AI",
    "Medical AI",
    "Autonomous Agents",
    "RAG Projects",
    "Full-Stack Projects",
    "Next.js Portfolio",
  ],
  openGraph: {
    title: "Projects - Ramesha Javed | AI & Full-Stack Portfolio",
    description: "Explore my portfolio of AI-powered projects including VisionDX AI, autonomous agents, and full-stack applications.",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <ProjectSection />
    </main>
  );
}
