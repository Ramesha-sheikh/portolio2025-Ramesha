/* eslint-disable @typescript-eslint/no-explicit-any */
import { Metadata } from "next";
import ModernHeroSection from "@/sections/ModernHeroSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import TestimonialsSection from "@/sections/TestimonialsSection";
import BlogSection from "@/sections/BlogSection";
import CTASection from "@/components/CTASection";
import { getAllPosts } from "../utils/api";
import { MdxMeta } from "@/types/mxd";

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

export default async function Home() {
  const items: any[] = await getAllPosts([
    "coverImage",
    "coverImageAlt",
    "slug",
    "title",
    "excerpt",
    "datetime",
    "featured",
    "date",
  ]);

  const blogPosts: MdxMeta[] = items.map(item => ({
    slug: item.slug,
    title: item.title,
    excerpt: item.excerpt,
    coverImage: item.coverImage,
    coverImageAlt: item.coverImageAlt,
    datetime: item.datetime,
    featured: item.featured,
    date: item.date || item.datetime,
  }));

  return (
    <>
      <ModernHeroSection />
      <FeaturedProjects />
      <TestimonialsSection />
      <BlogSection posts={blogPosts} />
      <CTASection />
    </>
  );
}