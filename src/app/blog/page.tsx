/* eslint-disable @typescript-eslint/no-explicit-any */
import { Metadata } from "next";
import BlogSection from "@/sections/BlogSection";
import { getAllPosts } from "@/utils/api";
import { MdxMeta } from "@/types/mxd";

export const metadata: Metadata = {
  title: "Blog - Ramesha Javed | AI Development Insights",
  description: "Insights on Agentic AI, RAG systems, and modern web development. Learn from real-world AI projects and implementations.",
  keywords: ["AI Blog", "Agentic AI Tutorials", "RAG Systems", "Next.js", "TypeScript", "AI Development"],
};

export default async function BlogPage() {
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
    <div className="min-h-screen bg-gradient-to-b from-[#0a3d3d] via-[#0d4a4a] to-[#0a3030] pt-20">
      <BlogSection posts={blogPosts} />
    </div>
  );
}
