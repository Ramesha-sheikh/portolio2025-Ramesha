import { Metadata } from "next";
import ModernHeroSection from "@/sections/ModernHeroSection";
import IntelligentSolutionsSection from "@/sections/IntelligentSolutionsSection";
import WhyWorkWithMeSection from "@/sections/WhyWorkWithMeSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import TestimonialsSection from "@/sections/TestimonialsSection";
import FAQSection from "@/sections/FAQSection";
import PortfolioCTASection from "@/sections/PortfolioCTASection";

export const metadata: Metadata = {
  title: "Ramesha Javed - Agentic AI Developer & Founder VisionDX AI",
  description: "Certified Agentic AI Developer & Founder of VisionDX AI. Expert in building production-grade autonomous agents, RAG systems, and AI-powered applications.",
  keywords: ["Agentic AI", "VisionDX AI", "Autonomous Agents", "RAG Systems", "AI Developer", "Pakistan"],
  openGraph: {
    title: "Ramesha Javed - Agentic AI Developer",
    description: "Certified Agentic AI Developer building next-generation AI systems",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <ModernHeroSection />
      <IntelligentSolutionsSection />
      <WhyWorkWithMeSection />
      <FeaturedProjects />
      <PortfolioCTASection />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}
