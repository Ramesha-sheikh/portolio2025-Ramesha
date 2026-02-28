"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

import ProjectCardNew from "@/components/ProjectCardNew";
import { useSection } from "../context/section";
import useOnScreen from "@/hooks/useOnScreen";
import useScrollActive from "@/hooks/useScrollActive";

import gov from "../../public/nextjs/gov1.png";
import eco from "../../public/nextjs/eco.png";
import burger from "../../public/nextjs/burger.png";
import jew from "../../public/nextjs/jew.png";
import tech from "../../public/nextjs/technology.png";
import blog from "../../public/nextjs/blog.png";
import resume from "../../public/nextjs/python1.png";
import BMI from "../../public/nextjs/python2.png";
import Data from "../../public/nextjs/python3.png";
import mindset from "../../public/nextjs/python4.png";
import pass from "../../public/nextjs/python5.png";
import lib from "../../public/nextjs/python6.png";

const ProjectSection: React.FC = () => {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  const projectSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();

  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState<number>(6);

  useEffect(() => {
    projectSection && onSectionChange!("projects");
  }, [onSectionChange, projectSection]);

  const categories = ["All", "Agentic AI", "RAG Systems", "Medical AI", "Full-Stack"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.type === activeCategory);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  useEffect(() => {
    setVisibleCount(6);
  }, [activeCategory]);

  return (
    <section ref={sectionRef} id="projects" className="section relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-marrsgreen/5 dark:bg-carrigreen/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 dark:bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Section Header */}
      <motion.div
        ref={elementRef}
        className="text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="gradient-text-green">Featured Projects</span>
          <motion.span
            className="block h-1 w-32 mx-auto mt-4 rounded-full"
            style={{
              backgroundColor:
                theme === "light" ? "rgb(0, 122, 122)" : "rgb(5, 206, 145)",
            }}
            initial={{ scaleX: 0 }}
            animate={isOnScreen ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          From AI-powered medical diagnostics to autonomous agents — here's what I've built
        </motion.p>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {categories.map((cat, index) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-marrsgreen to-marrsgreen/90 dark:from-carrigreen dark:to-carrigreen/90 text-white shadow-lg shadow-marrsgreen/50 dark:shadow-carrigreen/50"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-700 hover:border-marrsgreen dark:hover:border-carrigreen"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>

      {/* Projects Grid - Bento Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProjects.map((project, index) => (
          <ProjectCardNew key={project.title} project={project} index={index} />
        ))}
      </div>

      {/* Load More */}
      {visibleCount < filteredProjects.length && (
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-marrsgreen to-marrsgreen/90 dark:from-carrigreen dark:to-carrigreen/90 text-white rounded-full font-semibold text-lg shadow-xl shadow-marrsgreen/50 dark:shadow-carrigreen/50 hover:shadow-2xl transition-shadow"
          >
            Load More Projects
            <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.button>
        </motion.div>
      )}

      {/* GitHub CTA */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Want to see more? Check out my other projects
        </p>
        <motion.a
          href="https://github.com/Ramesha-sheikh"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-full font-semibold hover:border-marrsgreen dark:hover:border-carrigreen transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          View GitHub Profile
        </motion.a>
      </motion.div>
    </section>
  );
};

const projects = [
  {
    title: "VisionDX AI - Medical Imaging Platform",
    type: "Medical AI",
    image: (
      <div className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
        <div className="text-white text-center p-6">
          <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm-1-5h2v2H9v-2zm0-6h2v4H9V5z"/>
          </svg>
          <p className="font-bold text-lg">AI Medical Diagnostics</p>
        </div>
      </div>
    ),
    desc: "NIC Karachi-registered AI medical imaging startup. Analyzes X-rays, MRI, CT scans, and 25+ medical imaging types with AI-driven diagnostic reports.",
    tags: ["AI Vision", "Medical AI", "Python", "FastAPI", "Gemini API", "Production"],
    liveUrl: "#",
    codeUrl: "#",
    bgColor: "bg-gradient-to-br from-blue-500 to-purple-600",
  },
  {
    title: "AI-Native Autonomous Agent Suite",
    type: "Agentic AI",
    image: (
      <div className="w-full h-full bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 flex items-center justify-center">
        <div className="text-white text-center p-6">
          <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
          </svg>
          <p className="font-bold text-lg">Multi-Agent System</p>
        </div>
      </div>
    ),
    desc: "Production multi-agent system with real-time model routing between Gemini, Claude, and Grok. Features persistent memory and file processing.",
    tags: ["Multi-Agent", "Gemini CLI", "Claude", "MCP Server", "Python"],
    liveUrl: "#",
    codeUrl: "#",
    bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600",
  },
  {
    title: "CRM Digital FTE Factory",
    type: "Agentic AI",
    image: (
      <div className="w-full h-full bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 flex items-center justify-center">
        <div className="text-white text-center p-6">
          <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"/>
          </svg>
          <p className="font-bold text-lg">24/7 AI Employee</p>
        </div>
      </div>
    ),
    desc: "24/7 AI Customer Success employee with Claude Code, OpenAI Agents SDK, FastAPI, PostgreSQL, Kafka, Kubernetes, Gmail & WhatsApp API.",
    tags: ["OpenAI Agents", "FastAPI", "Kafka", "Kubernetes", "pgvector"],
    liveUrl: "#",
    codeUrl: "#",
    bgColor: "bg-gradient-to-br from-orange-500 to-pink-600",
  },
  {
    title: "Physical AI Textbook with RAG Chatbot",
    type: "RAG Systems",
    image: (
      <div className="w-full h-full bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-500 flex items-center justify-center">
        <div className="text-white text-center p-6">
          <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
          </svg>
          <p className="font-bold text-lg">RAG-Powered Book</p>
        </div>
      </div>
    ),
    desc: "Spec-Kit generated AI textbook with Qdrant-backed RAG chatbot, Better Auth authentication, and GitHub Pages deployment.",
    tags: ["RAG", "Qdrant", "Vector DB", "Better Auth", "Docusaurus"],
    liveUrl: "#",
    codeUrl: "#",
    bgColor: "bg-gradient-to-br from-violet-500 to-indigo-600",
  },
  {
    title: "E-Commerce Autonomous Chatbot",
    type: "Agentic AI",
    image: (
      <div className="w-full h-full bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 flex items-center justify-center">
        <div className="text-white text-center p-6">
          <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"/>
          </svg>
          <p className="font-bold text-lg">AI Shopping Assistant</p>
        </div>
      </div>
    ),
    desc: "Gemini-powered autonomous chatbot with real-time analytics. Built with Next.js, Node.js, Sanity CMS for customer queries and recommendations.",
    tags: ["Gemini API", "Next.js", "Node.js", "Sanity CMS", "Analytics"],
    liveUrl: "#",
    codeUrl: "#",
    bgColor: "bg-gradient-to-br from-green-500 to-teal-600",
  },
  {
    title: "Governor Sindh IT Initiative Platform",
    type: "Full-Stack",
    image: (
      <Image
        src={gov}
        sizes="100vw"
        fill
        alt="Governor Sindh Initiative"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Full-stack Next.js and PostgreSQL platform supporting 50,000+ student registrations. Production-grade scalable architecture.",
    tags: ["Next.js", "PostgreSQL", "TypeScript", "Tailwind CSS", "Production"],
    liveUrl: "https://govnorsindh-com.vercel.app/",
    codeUrl: "https://github.com/Ramesha-sheikh/govnorsindh.com",
    bgColor: "bg-[#B4BEE0]",
  },
  {
    title: "E-commerce Sofa Website",
    type: "Full-Stack",
    image: (
      <Image
        src={eco}
        sizes="100vw"
        fill
        alt="E-commerce Dashboard"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Full-stack e-commerce website with Sanity CMS, payment integration, and admin dashboard.",
    tags: ["Next.js", "Tailwind CSS", "Sanity", "TypeScript"],
    liveUrl: "https://next-js-ecommerce-hackthone.vercel.app/",
    codeUrl: "https://github.com/Ramesha-sheikh/Marketplace-EcommerceWebsite-nextjs-2025",
    bgColor: "bg-[#B4BEE0]",
  },
  {
    title: "Fast Food Website",
    type: "Full-Stack",
    image: (
      <Image
        src={burger}
        sizes="100vw"
        fill
        alt="Fast Food Website"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Restaurant website with menu management, online ordering system, and CMS integration.",
    tags: ["Next.js", "Tailwind CSS", "Sanity", "TypeScript"],
    liveUrl: "https://fast-foodwebsite-next-js.vercel.app/",
    codeUrl: "https://github.com/Ramesha-sheikh/FastFoodwebsite-next.js",
    bgColor: "bg-[#B4BEE0]",
  },
  {
    title: "Diamond Jewellery",
    type: "Full-Stack",
    image: (
      <Image
        src={jew}
        sizes="100vw"
        fill
        alt="Jewellery website"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Luxury jewellery e-commerce platform with product catalog and shopping cart.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity"],
    liveUrl: "https://milstone03-ecommerce-diamandjwellery-website-rameshajaved.vercel.app/",
    codeUrl: "https://github.com/Ramesha-sheikh/Milstone03-Ecommerce-Diamandjwellery-website-Rameshajaved",
    bgColor: "bg-[#FBFBFB]",
  },
  {
    title: "Technology Website",
    type: "Full-Stack",
    image: (
      <Image
        src={tech}
        sizes="100vw"
        fill
        alt="Technology website"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Modern technology blog with custom CSS animations and responsive design.",
    tags: ["Next.js", "TypeScript", "Custom CSS", "Sanity"],
    liveUrl: "https://technology-website-customcss-next-js.vercel.app/",
    codeUrl: "https://github.com/Ramesha-sheikh/Technology-website-customcss-next.js",
    bgColor: "bg-[#EBF4F4]",
  },
  {
    title: "Blog Website",
    type: "Full-Stack",
    image: (
      <Image
        src={blog}
        sizes="100vw"
        fill
        alt="Blog website"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Full-featured blog platform with Sanity CMS, markdown support, and SEO optimization.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity"],
    liveUrl: "https://milstone03-blog-website-with-sanity-3pgf.vercel.app/",
    codeUrl: "https://github.com/Ramesha-sheikh/milstone-03-blogwebsite-ramesha-javed-next.js",
    bgColor: "bg-[#EBF4F4]",
  },
  {
    title: "ResumeVault Python App",
    type: "Full-Stack",
    image: (
      <Image
        src={resume}
        sizes="100vw"
        fill
        alt="ResumeVault app"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Python and Streamlit application for resume management and generation.",
    tags: ["Python", "Streamlit", "Data Processing"],
    liveUrl: "https://resumevaultstreamli.streamlit.app/",
    codeUrl: "https://github.com/Ramesha-sheikh/ResumeVaultap-streamlit-python",
    bgColor: "bg-[#EBF4F4]",
  },
  {
    title: "Unit Convertor Python",
    type: "Full-Stack",
    image: (
      <Image
        src={BMI}
        sizes="100vw"
        fill
        alt="Unit converter"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Python Streamlit unit conversion application with multiple measurement types.",
    tags: ["Python", "Streamlit", "Math"],
    liveUrl: "https://bmi-calculator-rameshajaved.streamlit.app/",
    codeUrl: "https://github.com/Ramesha-sheikh/Unit-convertor--app-python",
    bgColor: "bg-[#EBF4F4]",
  },
  {
    title: "CSV to Excel Converter",
    type: "Full-Stack",
    image: (
      <Image
        src={Data}
        sizes="100vw"
        fill
        alt="Data converter"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Python application for converting CSV files to Excel with data processing features.",
    tags: ["Python", "Streamlit", "Data"],
    liveUrl: "https://bmi-calculator-rameshajaved.streamlit.app/",
    codeUrl: "https://github.com/Ramesha-sheikh/Streamlit-python-fullwebsite-csv-to-excelconverter",
    bgColor: "bg-[#EBF4F4]",
  },
  {
    title: "Growth Mindset Challenge",
    type: "Full-Stack",
    image: (
      <Image
        src={mindset}
        sizes="100vw"
        fill
        alt="Mindset app"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Interactive Python Streamlit app for personal development and mindset tracking.",
    tags: ["Python", "Streamlit", "Education"],
    liveUrl: "https://rameshajaved-mondset-challange-giaic.streamlit.app/",
    codeUrl: "https://github.com/Ramesha-sheikh/Mindset-project-python-GIAIC",
    bgColor: "bg-[#EBF4F4]",
  },
  {
    title: "Password Strength Checker",
    type: "Full-Stack",
    image: (
      <Image
        src={pass}
        sizes="100vw"
        fill
        alt="Password checker"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Advanced password strength analysis tool with security recommendations.",
    tags: ["Python", "Streamlit", "Security"],
    liveUrl: "https://password-strength-project-python-ramesha.streamlit.app/",
    codeUrl: "https://github.com/Ramesha-sheikh/Advance-password-strength-project-Giaic",
    bgColor: "bg-[#EBF4F4]",
  },
  {
    title: "Library Management System",
    type: "Full-Stack",
    image: (
      <Image
        src={lib}
        sizes="100vw"
        fill
        alt="Library system"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Complete library management system with book tracking and user management.",
    tags: ["Python", "Streamlit", "Database"],
    liveUrl: "https://library-manger-ramesha-javed-python.streamlit.app/",
    codeUrl: "https://github.com/Ramesha-sheikh/Advance-password-strength-project-Giaic",
    bgColor: "bg-[#EBF4F4]",
  },
];

export default ProjectSection;
