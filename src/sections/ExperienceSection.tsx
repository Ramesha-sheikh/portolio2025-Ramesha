"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useSection } from "../context/section";
import useOnScreen from "@/hooks/useOnScreen";
import useScrollActive from "@/hooks/useScrollActive";

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  type: string;
  achievements: string[];
  tags: string[];
  icon: string;
  description: string;
}

const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);
  const { theme } = useTheme();
  const experienceSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  const [activeTab, setActiveTab] = useState<"all" | "startup" | "freelance">("all");

  useEffect(() => {
    if (onSectionChange) {
      onSectionChange(experienceSection ? "experience" : "");
    }
  }, [experienceSection, onSectionChange]);

  const experiences: Experience[] = [
    {
      title: "Founder & CEO",
      company: "VisionDX AI",
      period: "2026 - Present",
      location: "NIC Karachi, Pakistan",
      type: "startup",
      description: "Building AI-powered medical imaging solutions for next-generation diagnostics",
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
      type: "freelance",
      description: "Delivering cutting-edge AI solutions and cloud infrastructure for global clients",
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

  const filteredExperiences = activeTab === "all" 
    ? experiences 
    : experiences.filter(exp => exp.type === activeTab);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="section bg-gradient-to-b from-white via-emerald-50/20 to-white dark:from-[#0a1f1c] dark:via-[#0d2b27] dark:to-[#1B2731] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30 dark:opacity-50">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-tr from-teal-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Section Header */}
      <motion.div
        ref={elementRef}
        className="text-center mb-12 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 mb-5 rounded-full bg-emerald-100/80 dark:bg-emerald-900/30 border border-emerald-500/30 backdrop-blur-sm"
        >
          <span className="text-xl">💼</span>
          <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide">
            Professional Journey
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-black mb-3"
        >
          <span className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
            Work Experience
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          Building innovative AI solutions and leading technological advancement
        </motion.p>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex justify-center gap-2 mb-10"
      >
        {[
          { id: "all", label: "All", icon: "📋" },
          { id: "startup", label: "Startup", icon: "🚀" },
          { id: "freelance", label: "Freelance", icon: "💻" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
              activeTab === tab.id
                ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30 scale-105"
                : "bg-white/70 dark:bg-gray-900/70 text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30"
            }`}
          >
            <span>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </motion.div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto relative">
        {/* Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-500 to-cyan-500 hidden md:block" />

        {/* Experience Cards */}
        <div className="space-y-8">
          {filteredExperiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 top-8 w-4 h-4 -translate-x-1/2 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg shadow-emerald-500/50 z-10 hidden md:block" />

              {/* Card */}
              <div className={`md:flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                {/* Empty Space for Alternating Layout */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group relative rounded-2xl overflow-hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-emerald-500/20 dark:border-emerald-400/20 shadow-lg hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300"
                  >
                    {/* Gradient Border on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl" />

                    <div className="relative p-6">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        {/* Icon */}
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 flex items-center justify-center text-2xl flex-shrink-0 shadow-lg shadow-emerald-500/30"
                        >
                          {exp.icon}
                        </motion.div>

                        {/* Title & Company */}
                        <div className="flex-1">
                          <h3 className="text-lg font-black text-gray-900 dark:text-white mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-sm font-bold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center gap-4 mb-4 text-xs">
                        <span className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {exp.location}
                        </span>
                      </div>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wide mb-2 flex items-center gap-2">
                          <svg className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                          Key Achievements
                        </h4>
                        <ul className="space-y-1.5">
                          {exp.achievements.slice(0, 3).map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300"
                            >
                              <span className="text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0">✓</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        <span className="px-2.5 py-1 text-xs font-bold bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg shadow-md">
                          {exp.type === "startup" ? "🚀 Startup" : "💻 Freelance"}
                        </span>
                        {exp.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 text-xs font-semibold bg-emerald-100/80 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-lg border border-emerald-500/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-16"
      >
        {[
          { icon: "🏢", value: "2", label: "Companies", gradient: "from-emerald-500 to-teal-500" },
          { icon: "📅", value: "2+", label: "Years Experience", gradient: "from-teal-500 to-cyan-500" },
          { icon: "🎯", value: "25+", label: "Projects Done", gradient: "from-emerald-500 to-cyan-500" },
          { icon: "🌍", value: "Global", label: "Clients", gradient: "from-teal-500 to-emerald-500" },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ scale: 0.5, opacity: 0, rotate: -5 }}
            whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="group p-5 rounded-2xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-emerald-500/20 dark:border-emerald-400/20 text-center shadow-md hover:shadow-xl hover:shadow-emerald-500/20 transition-all"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-3xl mb-2"
            >
              {stat.icon}
            </motion.div>
            <div className={`text-2xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}>
              {stat.value}
            </div>
            <div className="text-xs font-semibold text-gray-600 dark:text-gray-400">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
