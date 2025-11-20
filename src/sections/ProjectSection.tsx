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
  const categories = ["All", "Next.js", "Python", "Agentic AI", "TypeScript","Speckit Driven Development"];

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
    title: "Govnor Sindh Initative Website",
    type: "Next.js",
    image: (
      <Image
        src={gov}
        sizes="100vw"
        fill
        alt="govnor Sindh Initative"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Nextjs full stack website...",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://govnorsindh-com.vercel.app/",
    codeUrl: "https://github.com/Ramesha-sheikh/govnorsindh.com",
    bgColor: "bg-[#B4BEE0]",
    githubApi: " https://api.github.com/repos/Ramesha-sheikh/govnorsindh.com",
   
  },
  {
    title: " E-commerce  Sofa Website",
    type: "Next.js",
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
    type: "Next.js",
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
    type: "TypeScript",
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
    type: "Python",
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
    type: "Python",
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
    type: "Python",
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
    type: "Python",
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
    type: "Python",
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
    type: "Python",
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
