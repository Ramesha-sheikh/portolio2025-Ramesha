/* eslint-disable @typescript-eslint/no-explicit-any */
// src/app/page.tsx
import AppHead from "@/components/AppHead";
import Loader from "@/components/Loader";
import SkipToMain from "@/components/SkipToMain";
import Header from "@/components/Header";
import SocialLinks from "@/components/SocialLinks";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ProjectSection from "@/sections/ProjectSection";
import BlogSection from "@/sections/BlogSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/components/Footer";
import { getAllPosts } from "../utils/api";
import { MdxMeta } from "@/types/mxd"; // Import shared MdxMeta type

const meta = {
  description:
    "Ramesha is a full-stack developer based in Yangon, Myanmar. She is passionate about writing codes and developing web applications to solve real-life challenges.",
  author: "Ramesha Javed",
  type: "website",
  ogImage: `${process.env.NEXT_PUBLIC_URL}/favicons/mstile-150x150.png`,
  siteName: "Ramesha Javed",
  imageAlt: "Ramesha portfolio website",
};

// Async server component
export default async function Home() {
  const items: any[] = await getAllPosts([
    "coverImage",
    "coverImageAlt",
    "slug",
    "title",
    "excerpt",
    "datetime",
    "featured",
    "date", // Add date to the fields fetched
  ]);
  const blogPosts: MdxMeta[] = items.map(item => ({
    slug: item.slug,
    title: item.title,
    excerpt: item.excerpt,
    coverImage: item.coverImage,
    coverImageAlt: item.coverImageAlt,
    datetime: item.datetime,
    featured: item.featured,
    date: item.date || item.datetime, // Fallback to datetime if date is missing
  }));

  return (
    <>
      <AppHead
        title="Ramesha - A Full-stack Developer"
        url={`${process.env.NEXT_PUBLIC_URL}`}
        meta={meta}
      />
      <Loader>Ramesha.dev</Loader>
      <div className="bg-bglight dark:bg-bgdark overflow-hidden">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          <Header />
          <main id="main">
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <BlogSection posts={blogPosts} />
            <ContactSection />
          </main>
          <SocialLinks page="index" />
          <Footer />
        </div>
      </div>
    </>
  );
}