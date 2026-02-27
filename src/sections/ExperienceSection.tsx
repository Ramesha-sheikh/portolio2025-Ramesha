"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useSection } from "../context/section";
import useOnScreen from "@/hooks/useOnScreen";
import useScrollActive from "@/hooks/useScrollActive";
import GlowCard from "@/components/GlowCard";

const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);
  const { theme } = useTheme();

  const experienceSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();

  useEffect(() => {
    if (onSectionChange) {
      experienceSection ? onSectionChange("experience") : onSectionChange("");
    }
  }, [experienceSection, onSectionChange]);

  const experiences = [
    {
      title: "Founder & CEO",
      company: "VisionDX AI",
      period: "2026 - Present",
      location: "NIC Karachi, Pakistan",
      type: "Startup",
      achievements: [
        "Founded AI-powered medical imaging startup for X-ray, MRI, CT scan analysis",
        "Built diagnostic system analyzing 25+ types of medical images with AI-driven reports",
        "Deployed production-grade AI vision models for clinical diagnostics",
        "Registered startup with National Incubation Center (NIC) Karachi",
        "Bridging medical expertise with intelligent AI-based diagnostics"
      ],
      tags: ["AI Vision", "Medical AI", "Startup", "Leadership"],
      icon: "🏥"
    },
    {
      title: "AI Developer & Cloud Engineer",
      company: "Freelance / Self-Employed",
      period: "2026 - Present",
      location: "Remote",
      type: "Freelance",
      achievements: [
        "Developed autonomous agents using Gemini CLI and MCP server implementations",
        "Integrated Hugging Face models for advanced NLP applications",
        "Implemented cloud-based solutions using Google Cloud Platform and serverless architecture",
        "Built production-grade AI systems with Spec-Kit framework and multi-agent orchestration",
        "Created RAG-based systems with vector databases for intelligent document processing"
      ],
      tags: ["Gemini CLI", "MCP Server", "RAG", "Cloud"],
      icon: "🤖"
    }
  ];

  return (
    <section ref={sectionRef} id="experience" className="section bg-gray-50/50 dark:bg-gray-900/30">
      {/* Title */}
      <motion.div
        ref={elementRef}
        className="text-center relative"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="section-heading relative inline-block">
          Professional Experience
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

      <motion.p
        className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        Building the future of AI-powered solutions with cutting-edge technology
      </motion.p>

      {/* Experience Timeline */}
      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title + exp.company}
            initial={{ x: index % 2 === 0 ? -60 : 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <GlowCard className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg p-8">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-marrsgreen to-marrsgreen/70 dark:from-carrigreen dark:to-carrigreen/70 rounded-xl flex items-center justify-center text-3xl shadow-lg">
                    {exp.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-marrsgreen dark:text-carrigreen font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {exp.period}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                      >
                        <span className="text-marrsgreen dark:text-carrigreen mt-1">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs bg-marrsgreen/20 dark:bg-carrigreen/20 text-marrsgreen dark:text-carrigreen rounded-full font-medium">
                      {exp.type}
                    </span>
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
