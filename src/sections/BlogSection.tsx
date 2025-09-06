
"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { RoughNotation } from "react-rough-notation";
import { MdxMeta } from "@/types/mxd"; // Import global MdxMeta
import { useSection } from "../context/section";
import useOnScreen from "@/hooks/useOnScreen";
import useScrollActive from "@/hooks/useScrollActive";
import BlogImageCard from "@/components/BlogImageCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = {
  posts: MdxMeta[]; // Use global MdxMeta
};

const BlogSection: React.FC<Props> = ({ posts }) => {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);
  const blogSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();

  useEffect(() => {
    if (blogSection) {
      onSectionChange?.("blog");
    }
  }, [blogSection, onSectionChange]);

  return (
    <div className="bg-[#F5F5F5] dark:bg-[#1B2731]">
      <section ref={sectionRef} id="blog" className="section md:px-10">
        <div className="text-center">
          <RoughNotation
            type="underline"
            color={theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}
            strokeWidth={2}
            order={1}
            show={isOnScreen}
          >
            <h2 className="section-heading">Blog</h2>
          </RoughNotation>
        </div>
        <div className="text-center mb-8" ref={elementRef}>
          On my blog, I share practical insights and personal experiences about building scalable web applications and intelligent automation systems. I often write about Next.js, TypeScript, Python, OpenAI SDK, and n8n — blending modern development with AI-powered workflows.
        </div>
        <div>
          <Swiper
            modules={[Navigation, Pagination]}
            pagination={{
              dynamicBullets: true,
            }}
            wrapperTag="ul"
            navigation
            className="swiper-padding-mobile xs:swiper-padding"
            breakpoints={{
              100: {
                slidesPerView: "auto",
                spaceBetween: 50,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
                centeredSlides: true,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
                centeredSlides: false,
              },
            }}
          >
            {posts.map((post, index) => (
              <SwiperSlide key={post.slug} tag="li">
                <BlogImageCard
                  post={post}
                  className={`${index > 3 ? "hidden lg:block" : ""}`}
                  key={post.slug}
                  fullWH
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mt-4 text-center">
            <Link href="/blog" className="link">
              Saare blog posts parhein{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogSection;