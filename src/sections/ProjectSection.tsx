"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "../context/section";
import useOnScreen from "@/hooks/useOnScreen";
import useScrollActive from "@/hooks/useScrollActive";

import gov from "../../public/nextjs/gov1.png";
import bur from "@/public/nextjs/bur.png";
import blog from "../../public/nextjs/blog.png";


import eco from "../../public/nextjs/eco.png";
import jew from "../../public/nextjs/jew.png";
import burger from "../../public/nextjs/burger.png";
import port from "../../public/nextjs/prot.png";
import tech from "../../public/nextjs/technology.png";
import resume from "../../public/nextjs/python1.png";
import BMI from "../../public/nextjs/python2.png";
import Data from "../../public/nextjs/python3.png";
import mindset from "../../public/nextjs/python4.png";
import pass from "../../public/nextjs/python5.png";
import lib from "../../public/nextjs/python6.png"

const ProjectSection: React.FC = () => {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  const projectSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();

  // 🔹 Category state
  const [activeCategory, setActiveCategory] = useState<string>("All");
  // 🔹 Load More state (default 3 projects = 1 row)
  const [visibleCount, setVisibleCount] = useState<number>(3);

  useEffect(() => {
    projectSection && onSectionChange!("projects");
  }, [onSectionChange, projectSection]);

  // ✅ Fixed categories
  const categories = ["All", "Agentic AI", "RAG Systems", "Medical AI", "Next.js", "Full-Stack"];

  // 🔹 Filtered projects
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.type === activeCategory);

  // 🔹 Visible Projects (limited by Load More)
  const visibleProjects = filteredProjects.slice(0, visibleCount);

  // Reset visible count when category changes
  useEffect(() => {
    setVisibleCount(3); // har category change pe sirf 3 show honge
  }, [activeCategory]);

  return (
    <section ref={sectionRef} id="projects" className="section">
      {/* Title */}
      <motion.div
        className="project-title text-center relative inline-block"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="section-heading relative inline-block">
          Featured Projects
          <motion.span
            className="absolute left-0 -bottom-2 h-[3px] w-full"
            style={{
              backgroundColor:
                theme === "light" ? "rgb(0, 122, 122)" : "rgb(5, 206, 145)",
            }}
            initial={{ scaleX: 0 }}
            animate={isOnScreen ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </h2>
      </motion.div>

      {/* Description */}
      <motion.span
        className="project-desc text-center block mb-6"
        ref={elementRef}
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn&apos;t miss
      </motion.span>

      {/* 🔹 Category Filter Tabs */}
      <div className="flex justify-center mb-6 flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full border transition-all ${
              activeCategory === cat
                ? "bg-marrsgreen text-white dark:bg-carrigreen"
                : "bg-gray-200 dark:bg-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="flex flex-wrap">
        {visibleProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.15,
            }}
            className="w-full sm:w-1/2 lg:w-1/3 p-2"
          >
            <ProjectCard index={index} project={project} />
          </motion.div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < filteredProjects.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setVisibleCount((prev) => prev + 3)} // ab 3-3 load hoga
            className="px-6 py-2 rounded-full bg-marrsgreen text-white dark:bg-carrigreen hover:opacity-90 transition"
          >
            Load More
          </button>
        </div>
      )}

      {/* GitHub Link */}
      <motion.div
        className="others text-center mb-16 mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        Other projects can be explored in{" "}
        <a
          href="https://github.com/Ramesha-sheikh"
          className="font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap"
        >
          my github profile
        </a>
      </motion.div>
    </section>
  );
};

// ✅ Projects array ka type field ab sirf fixed categories use karega
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
    desc: "NIC Karachi-registered AI medical imaging startup. Analyzes X-rays, MRI, CT scans, and 25+ medical imaging types with AI-driven diagnostic reports. Production-grade AI vision models for clinical diagnostics.",
    tags: ["AI Vision", "Medical AI", "Python", "FastAPI", "Gemini API", "Cloud AI"],
    liveUrl: "#",
    codeUrl: "#",
    bgColor: "bg-gradient-to-br from-blue-500 to-purple-600",
    githubApi: "",
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
    desc: "Production multi-agent system with real-time model routing between Gemini, Claude, and Grok. Features persistent memory, file processing, and autonomous task execution using MCP servers.",
    tags: ["Multi-Agent", "Gemini CLI", "Claude", "MCP Server", "Python", "HITL"],
    liveUrl: "#",
    codeUrl: "#",
    bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600",
    githubApi: "",
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
    desc: "24/7 AI Customer Success employee built with Claude Code, OpenAI Agents SDK, FastAPI, PostgreSQL, pgvector, Kafka, Kubernetes, Gmail API, and Twilio WhatsApp. Fully autonomous CRM agent.",
    tags: ["OpenAI Agents", "FastAPI", "Kafka", "Kubernetes", "pgvector", "Twilio"],
    liveUrl: "#",
    codeUrl: "#",
    bgColor: "bg-gradient-to-br from-orange-500 to-pink-600",
    githubApi: "",
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
    desc: "Spec-Kit generated AI textbook with Qdrant-backed RAG chatbot, Better Auth authentication, and GitHub Pages deployment. Features semantic search and intelligent Q&A.",
    tags: ["RAG", "Qdrant", "Vector DB", "Better Auth", "Docusaurus", "Spec-Kit"],
    liveUrl: "#",
    codeUrl: "#",
    bgColor: "bg-gradient-to-br from-violet-500 to-indigo-600",
    githubApi: "",
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
    desc: "Gemini-powered autonomous chatbot with real-time analytics dashboard. Built with Next.js, Node.js, Sanity CMS. Handles customer queries, product recommendations, and order tracking.",
    tags: ["Gemini API", "Next.js", "Node.js", "Sanity CMS", "Real-time Analytics"],
    liveUrl: "#",
    codeUrl: "#",
    bgColor: "bg-gradient-to-br from-green-500 to-teal-600",
    githubApi: "",
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
    desc: "Full-stack Next.js and PostgreSQL platform supporting 50,000+ student registrations. Production-grade scalable architecture with real-time data processing.",
    tags: ["Next.js", "PostgreSQL", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://govnorsindh-com.vercel.app/",
    codeUrl: "https://github.com/Ramesha-sheikh/govnorsindh.com",
    bgColor: "bg-[#B4BEE0]",
    githubApi: "https://api.github.com/repos/Ramesha-sheikh/govnorsindh.com",
  },
  {
    title: " E-commerce  Sofa Website",
    type: "Full-Stack",
    image: (
      <Image
        src={eco}
        sizes="100vw"
        fill
        alt="Hackathon E-commerce Dashboard"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Full-stack e-commerce website...",
    tags: ["Next.js", "Tailwind CSS", "Sanity","Typescript"],
    liveUrl: "https://next-js-ecommerce-hackthone.vercel.app/",
    codeUrl: "https://github.com/Ramesha-sheikh/Marketplace-EcommerceWebsite-nextjs-2025",
    bgColor: "bg-[#B4BEE0]",
    githubApi: "https://api.github.com/repos/Ramesha-sheikh/Marketplace-EcommerceWebsite-nextjs-2025",
  },
  {
    title: " Fast Food Website",
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
    desc: "Fast Food Website using nextjs",
    tags: ["Next.js", "Tailwind CSS", "Sanity","Typescript"],
    liveUrl: "https://fast-foodwebsite-next-js.vercel.app/",
    codeUrl: "https://github.com/Ramesha-sheikh/FastFoodwebsite-next.js",
    bgColor: "bg-[#B4BEE0]",
    githubApi: "https://api.github.com/repos/Ramesha-sheikh/FastFoodwebsite-next.js",
    
  },
  {
    title: "Diamandjwellery",
    type: "Full-Stack",
    image: (
      <Image
        src={jew}
        sizes="100vw"
        fill
        alt="jwellery web"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "A professional, nexjs and typescript website",
    tags: ["Next.js", "TypeScript", "Tailwind CSS,sanity"],
    liveUrl: "https://milstone03-ecommerce-diamandjwellery-website-rameshajaved.vercel.app/",
    codeUrl: "https://github.com/Ramesha-sheikh/Milstone03-Ecommerce-Diamandjwellery-website-Rameshajaved",
    bgColor: "bg-[#FBFBFB]",
    githubApi: "  https://api.github.com/repos/Ramesha-sheikh/Milstone03-Ecommerce-Diamandjwellery-website-Rameshajaved",
  },
  {
    title: "Technology webite",
    type: "Next.js",
    image: (
      <Image
        src={tech}
        sizes="100vw"
        fill
        alt="Technology webite"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Technology webite using typecript next.js tailwind css",
    tags: ["Next.js", "TypeScript", "Tailwind CSS,sanity"],
    liveUrl: "https://technology-website-customcss-next-js.vercel.app/",
    codeUrl: "https://github.com/Ramesha-sheikh/Technology-website-customcss-next.js",
    bgColor: "bg-[#EBF4F4]",
    githubApi: " https://api.github.com/repos/Ramesha-sheikh/Technology-website-customcss-next.js",
  },
   {
    title: "Blog website",
    type: "Next.js",
    image: (
      <Image
        src={blog}
        sizes="100vw"
        fill
        alt="Blog website"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Blog website using typecript next.js tailwind css",
    tags: ["tyescript", "tailwincss", "next.js", "Sanity"],
    liveUrl: "https://milstone03-blog-website-with-sanity-3pgf.vercel.app/",
    codeUrl: "https://github.com/Ramesha-sheikh/milstone-03-blogwebsite-ramesha-javed-next.js",
    bgColor: "bg-[#EBF4F4]",
    githubApi: "https://api.github.com/repos/Ramesha-sheikh/milstone-03-blogwebsite-ramesha-javed-next.js",
  },
  {
    title: "ResumeVault  Python app",
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
    desc: "Python and streamlit application",
    tags: ["Python", "Streamlit"],
    liveUrl: "https://resumevaultstreamli.streamlit.app/",
    codeUrl: "https://github.com/Ramesha-sheikh/ResumeVaultap-streamlit-python",
    bgColor: "bg-[#EBF4F4]",
    githubApi: "https://api.github.com/repos/Ramesha-sheikh/ResumeVaultap-streamlit-python",
    
    
  },
  {
    title: "Unit-convertor python ",
    type: "Full-Stack",
    image: (
      <Image
        src={BMI}
        sizes="100vw"
        fill
        alt="Unit-convertor"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Python and streamlit application",
    tags: ["Python", "Streamlit"],
    liveUrl: " https://bmi-calculator-rameshajaved.streamlit.app/",
    codeUrl: "https://github.com/Ramesha-sheikh/Unit-convertor--app-python?tab=readme-ov-file",
    bgColor: "bg-[#EBF4F4]",
    githubApi:"https://api.github.com/repos/Ramesha-sheikh/Unit-convertor--app-python?tab=readme-ov-file",
    
    
    
  },
   {
    title: "Streamlit-Python-fullwebsite-csv-to-excelconverter",
    type: "Full-Stack",
    image: (
      <Image
        src={Data}
        sizes="100vw"
        fill
        alt="csv-to-excelconverter"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Python and streamlit application",
    tags: ["Python", "Streamlit"],
    liveUrl: " https://bmi-calculator-rameshajaved.streamlit.app/",
    codeUrl: "https://github.com/Ramesha-sheikh/Streamlit-python-fullwebsite-csv-to-excelconverter",
    bgColor: "bg-[#EBF4F4]",
    githubApi:"https://api.github.com/repos/Ramesha-sheikh/Streamlit-python-fullwebsite-csv-to-excelconverter",
    
  },
  {
    title: "Streamlit-Python-Growth Mindset Challenge app",
    type: "Full-Stack",
    image: (
      <Image
        src={mindset}
        sizes="100vw"
        fill
        alt="Growth Mindset Challenge"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Python and streamlit application",
    tags: ["Python", "Streamlit"],
    liveUrl: "https://rameshajaved-mondset-challange-giaic.streamlit.app/",
    codeUrl: "https://github.com/Ramesha-sheikh/Mindset-project-python-GIAIC",
    bgColor: "bg-[#EBF4F4]",
    githubApi:" https://api.github.com/repos/Ramesha-sheikh/Mindset-project-python-GIAIC",
   
  },
  {
    title: " Password Strength Checker Python app",
    type: "Full-Stack",
    image: (
      <Image
        src={pass}
        sizes="100vw"
        fill
        alt="Password Strength Checker "
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Python and streamlit application",
    tags: ["Python", "Streamlit"],
    liveUrl: "https://password-strength-project-python-ramesha.streamlit.app/",
    codeUrl: "https://github.com/Ramesha-sheikh/Advance-password-strength-project-Giaic",
    bgColor: "bg-[#EBF4F4]",
    githubApi:"https://api.github.com/repos/Ramesha-sheikh/Advance-password-strength-project-Giaic",
    
   
  },
  {
    title: "Library Management System",
    type: "Full-Stack",
    image: (
      <Image
        src={lib}
        sizes="100vw"
        fill
        alt="Library Management System"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Python and streamlit application",
    tags: ["Python", "Streamlit"],
    liveUrl: "https://library-manger-ramesha-javed-python.streamlit.app/",
    codeUrl: "https://github.com/Ramesha-sheikh/Advance-password-strength-project-Giaic",
    bgColor: "bg-[#EBF4F4]",
    githubApi: "https://api.github.com/repos/Ramesha-sheikh/Advance-password-strength-project-Giaic",
   
   
  },
 
 
  
  
];

export default ProjectSection;
