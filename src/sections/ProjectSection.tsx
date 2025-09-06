"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "../context/section";
import useOnScreen from "@/hooks/useOnScreen";
import useScrollActive from "@/hooks/useScrollActive";

import ecom from "@/public/projects/ecom.jpg";
import sdk from "@/public/projects/sdkmodel.jpg";
import mediImag from "@/public/projects/mediImag.jpg";
import nexusAi from "@/public/projects/nexusAi.jpg";
import n8n from "@/public/projects/u8.jpg";
import cv from "@/public/projects/cv.jpg";

const ProjectSection: React.FC = () => {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  const projectSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();

  useEffect(() => {
    projectSection && onSectionChange!("projects");
  }, [onSectionChange, projectSection]);

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
          {/* Underline animation */}
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
        className="project-desc text-center block mb-4"
        ref={elementRef}
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn&apos;t miss
      </motion.span>

      {/* Projects Grid */}
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
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

      {/* GitHub Link */}
      <motion.div
        className="others text-center mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        Other projects can be explored in{" "}
        <a
          href="https://github.com/satnaing"
          className="font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap"
        >
          my github profile
        </a>
      </motion.div>
    </section>
  );
};

const projects = [
  {
    title: "NexusAI ChatBot",
    type: "Full-Stack",
    image: (
      <Image
        src={nexusAi}
        sizes="100vw"
        fill
        alt="NexusAI ChatBot"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "An advanced AI chatbot similar to ChatGPT, built using the assistant-ui starter with Next.js, Tailwind CSS, and OpenAI integration.",
    tags: ["Next.js", "Tailwind CSS", "OpenAI", "TypeScript", "Full-Stack"],
    liveUrl: "https://nexus-ai-iota.vercel.app/",
    codeUrl: "https://github.com/HumaizaNaz/NexusAI",
    bgColor: "bg-[#B4BEE0]",
    githubApi: "https://api.github.com/repos/HumaizaNaz/NexusAI",
  },
  {
    title: "Hackathon E-commerce",
    type: "Full-Stack",
    image: (
      <Image
        src={ecom}
        sizes="100vw"
        fill
        alt="Hackathon E-commerce Dashboard"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Full-stack e-commerce website for hackathon with frontend (Next.js, Tailwind) and backend (API routes, Sanity CMS).",
    tags: ["Next.js", "Tailwind CSS", "Sanity", "Full-Stack"],
    liveUrl: "https://hackathon-e-commerce-five.vercel.app/",
    codeUrl: "https://github.com/HumaizaNaz/Hackathon-E-commerce",
    bgColor: "bg-[#B4BEE0]",
    githubApi: "https://api.github.com/repos/HumaizaNaz/Hackathon-E-commerce",
  },
  {
    title: "OpenAI SDK Documentation Agent",
    type: "Full-Stack",
    image: (
      <Image
        src={sdk}
        sizes="100vw"
        fill
        alt="OpenAI SDK Documentation Agent"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "A specialized AI chatbot built with Next.js and OpenAI SDK, designed to answer queries related to OpenAI SDK documentation.",
    tags: ["Next.js", "Tailwind CSS", "OpenAI SDK", "TypeScript", "Full-Stack"],
    liveUrl: "https://sdk-agent.vercel.app/",
    codeUrl: "https://github.com/HumaizaNaz/sdk-agent",
    bgColor: "bg-[#A6CECE]",
    githubApi: "https://api.github.com/repos/HumaizaNaz/sdk-agent",
  },
  {
    title: "Medical Imaging Diagnosis Agent",
    type: "Full-Stack",
    image: (
      <Image
        src={mediImag}
        sizes="100vw"
        fill
        alt="Medical Imaging Diagnosis Agent"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "A Streamlit-based web application for educational and research purposes, analyzing medical images using Google Gemini 1.5 Flash AI.",
    tags: ["Streamlit", "Python", "Google Gemini", "PubMed API", "PIL"],
    liveUrl: "https://github.com/HumaizaNaz/Medical-Imaging-Diagnosis-Agent",
    codeUrl: "https://github.com/HumaizaNaz/Medical-Imaging-Diagnosis-Agent",
    bgColor: "bg-[#B4E0C5]",
    githubApi:
      "https://api.github.com/repos/HumaizaNaz/Medical-Imaging-Diagnosis-Agent",
  },
  {
    title: "Restaurant Inventory AI Workflow",
    type: "Workflow Automation",
    image: (
      <Image
        src={n8n}
        sizes="100vw"
        fill
        alt="Restaurant Inventory AI Workflow"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "An n8n workflow integrating Google Gemini AI and Airtable for automated restaurant inventory management.",
    tags: ["n8n", "Google Gemini", "Airtable", "JavaScript"],
    liveUrl: "https://github.com/HumaizaNaz/resturant-inventory-n8n",
    codeUrl: "https://github.com/HumaizaNaz/resturant-inventory-n8n",
    githubApi:
      "https://api.github.com/repos/HumaizaNaz/resturant-inventory-n8n",
    bgColor: "bg-[#EBF4F4]",
  },
  {
    title: "Responsive CV",
    type: "Front-End",
    image: (
      <Image
        src={cv}
        sizes="100vw"
        fill
        alt="Responsive CV"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "A professional, fast, and responsive CV built using modern technologies to showcase full-stack development skills.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://new-cv-theta.vercel.app/",
    codeUrl: "https://github.com/HumaizaNaz/new-cv",
    bgColor: "bg-[#FBFBFB]",
    githubApi: "https://api.github.com/repos/HumaizaNaz/new-cv",
  },
];

export default ProjectSection;
