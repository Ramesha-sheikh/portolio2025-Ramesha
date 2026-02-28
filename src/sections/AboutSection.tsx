"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useSection } from "../context/section";
import useOnScreen from "@/hooks/useOnScreen";
import useScrollActive from "@/hooks/useScrollActive";
import satNaing from "../../public/rmm.jpg";
import GlowCard from "@/components/GlowCard";

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLDivElement>(null);
  const isSecOnScreen = useOnScreen(elementRef);
  const { theme } = useTheme();
  const aboutSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();

  useEffect(() => {
    if (onSectionChange) {
      aboutSection ? onSectionChange("who am i?") : onSectionChange("");
    }
  }, [aboutSection, onSectionChange]);

  return (
    <section
      ref={sectionRef}
      id="whoami"
      className="section bg-gradient-to-b from-white to-gray-50/50 dark:from-[#1B2731] dark:to-gray-900/50 relative overflow-hidden"
    >
      {/* Section Title */}
      <motion.div
        ref={elementRef}
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="section-heading relative inline-block mb-4">
          <span className="gradient-text-green">My Story</span>
          <motion.span
            className="absolute left-0 -bottom-2 h-1 w-full rounded-full"
            style={{
              backgroundColor:
                theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)",
            }}
            initial={{ scaleX: 0 }}
            animate={isSecOnScreen ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          From code enthusiast to AI startup founder — here's my journey
        </p>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
        {/* Left Column - Image & Quick Facts */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Profile Image with Glow */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-marrsgreen/30 to-purple-500/30 dark:from-carrigreen/30 dark:to-blue-500/30 blur-3xl" />
            <GlowCard className="relative overflow-hidden">
              <Image
                src={satNaing}
                width={600}
                height={600}
                priority
                alt="Ramesha Javed - AI Developer"
                className="rounded-2xl w-full h-auto"
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg rounded-xl p-4 border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-marrsgreen to-marrsgreen/70 dark:from-carrigreen dark:to-carrigreen/70 rounded-lg flex items-center justify-center text-2xl">
                      🚀
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">Founder & CEO</p>
                      <p className="text-sm text-marrsgreen dark:text-carrigreen">VisionDX AI</p>
                    </div>
                  </div>
                </div>
              </div>
            </GlowCard>
          </div>

          {/* Quick Facts */}
          <div className="grid grid-cols-2 gap-4">
            {quickFacts.map((fact, index) => (
              <motion.div
                key={fact.label}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <GlowCard className="p-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-center">
                  <div className="text-3xl mb-2">{fact.icon}</div>
                  <div className="text-2xl font-bold text-marrsgreen dark:text-carrigreen mb-1">
                    {fact.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {fact.label}
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Story & Details */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Intro Paragraph */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              Hey there! 👋 I'm <span className="font-bold text-marrsgreen dark:text-carrigreen">Ramesha Javed</span>,
              an <strong>Agentic AI Engineer</strong> who loves turning complex AI concepts into
              production-ready solutions that actually solve real problems.
            </p>

            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              As the <strong className="text-gray-800 dark:text-gray-200">Founder & CEO of VisionDX AI</strong>,
              I'm on a mission to revolutionize medical diagnostics using AI. We're building systems that
              analyze <strong className="text-marrsgreen dark:text-carrigreen">25+ types of medical images</strong> —
              from X-rays to MRIs — helping doctors make faster, more accurate diagnoses.
            </p>

            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              But that's not all! I specialize in building <strong className="text-gray-800 dark:text-gray-200">autonomous AI agents</strong> using
              cutting-edge tech like <em className="text-marrsgreen dark:text-carrigreen not-italic font-semibold">Spec-Kit</em>,
              <em className="text-marrsgreen dark:text-carrigreen not-italic font-semibold">Gemini CLI</em>,
              <em className="text-marrsgreen dark:text-carrigreen not-italic font-semibold">MCP servers</em>, and
              <em className="text-marrsgreen dark:text-carrigreen not-italic font-semibold">RAG systems</em>.
              From multi-agent orchestration to 24/7 AI CRM employees — I've built them all.
            </p>
          </div>

          {/* Tech Stack Highlight */}
          <div className="bg-gradient-to-br from-marrsgreen/5 to-purple-500/5 dark:from-carrigreen/5 dark:to-blue-500/5 rounded-2xl p-6 border border-marrsgreen/10 dark:border-carrigreen/10">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
              <span>🛠️</span> My Tech Arsenal
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, type: "spring" }}
                  className="flex items-center gap-2 text-sm"
                >
                  <div className="w-2 h-2 rounded-full bg-marrsgreen dark:bg-carrigreen" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* What I Do Best */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span>⚡</span> What I Do Best
            </h3>
            {strengths.map((strength, index) => (
              <motion.div
                key={strength}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-marrsgreen/20 dark:bg-carrigreen/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-marrsgreen dark:text-carrigreen" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300">{strength}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Education Timeline */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="mt-20"
      >
        <h3 className="text-3xl font-bold text-center mb-12">
          <span className="gradient-text-green">Education & Achievements</span>
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {educationInfo.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <GlowCard className="h-full p-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-marrsgreen to-marrsgreen/70 dark:from-carrigreen dark:to-carrigreen/70 rounded-lg flex items-center justify-center flex-shrink-0 text-2xl">
                    {edu.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-1">
                      {edu.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {edu.subTitle}
                    </p>
                    <ul className="space-y-1">
                      {edu.list.map((item, i) => (
                        <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                          <span className="text-marrsgreen dark:text-carrigreen mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const quickFacts = [
  { icon: "🏆", value: "4", label: "Hackathons Won" },
  { icon: "💼", value: "25+", label: "Projects" },
  { icon: "👥", value: "50K+", label: "Users" },
  { icon: "⭐", value: "500+", label: "Community" },
];

const techStack = [
  "Python & TypeScript",
  "Next.js & Node.js",
  "OpenAI Agents SDK",
  "Gemini API",
  "RAG & Qdrant",
  "Kubernetes & Docker",
  "FastAPI & PostgreSQL",
  "Spec-Kit Framework",
];

const strengths = [
  "Building production-grade autonomous AI agents",
  "Multi-agent orchestration with real-time routing",
  "RAG systems with vector databases (Qdrant, pgvector)",
  "Cloud-native AI deployment (Kubernetes, Docker)",
  "Full-stack development (Next.js, TypeScript, Python)",
  "Bridging AI research with real-world solutions",
];

const educationInfo = [
  {
    id: 1,
    icon: "🤖",
    title: "Certified Agentic & Robotic AI Engineer",
    subTitle: "PIAIC - Presidential Initiative | Q4 Ongoing",
    list: [
      "Multi-Agent Orchestration & MCP Servers",
      "Spec-Kit Framework & Agentic Systems",
      "Production AI Deployment"
    ],
  },
  {
    id: 2,
    icon: "🎓",
    title: "Full Stack + Agentic AI Specialization",
    subTitle: "Governor Sindh Initiative (GIAIC) | 2024-Present",
    list: [
      "Advanced Agentic AI Development",
      "RAG Systems & Vector Databases",
      "OpenAI Agents SDK & Gemini API"
    ],
  },
  {
    id: 3,
    icon: "🎯",
    title: "Bachelor's in Computer Science",
    subTitle: "University of Karachi | 2019-2022",
    list: ["Software Engineering Foundation"],
  },
  {
    id: 4,
    icon: "🏅",
    title: "Hackathon Achievements",
    subTitle: "Multiple AI Competitions | 2025-2026",
    list: [
      "Physical AI Textbook with RAG",
      "Personal AI Employee System",
      "CRM Digital FTE Factory"
    ],
  },
];

export default AboutSection;
