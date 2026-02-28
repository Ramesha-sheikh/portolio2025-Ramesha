"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import TypingAnimation from "@/components/TypingAnimation";

const HeroSection: React.FC = () => {
  const typingTexts = [
    "Agentic AI Systems",
    "Multi-Agent Orchestration",
    "RAG Solutions",
    "Medical AI Platforms",
    "Autonomous Agents",
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-20 py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 dark:from-[#0a1f1c] dark:via-[#0d2b27] dark:to-[#1B2731] -z-10" />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,122,122,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,122,122,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(5,206,145,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(5,206,145,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)] -z-10" />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto text-center z-10">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-6 py-3 mb-8 rounded-full bg-gradient-to-r from-marrsgreen/10 via-marrsgreen/5 to-transparent dark:from-carrigreen/10 dark:via-carrigreen/5 border border-marrsgreen/20 dark:border-carrigreen/20 backdrop-blur-sm"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-marrsgreen dark:bg-carrigreen opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-marrsgreen dark:bg-carrigreen"></span>
          </span>
          <span className="text-sm md:text-base font-semibold bg-gradient-to-r from-marrsgreen to-marrsgreen/70 dark:from-carrigreen dark:to-carrigreen/70 bg-clip-text text-transparent">
            Available for Agentic AI Projects
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-700 dark:text-gray-400 mb-4"
        >
          Hi, I'm
        </motion.h1>

        {/* Gradient Name */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text-green"
        >
          Ramesha Javed
        </motion.h2>

        {/* Title with Typing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
        >
          <span className="text-gray-800 dark:text-white">Building </span>
          <br className="sm:hidden" />
          <TypingAnimation
            texts={typingTexts}
            className="text-marrsgreen dark:text-carrigreen"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto mb-4 px-4 leading-relaxed"
        >
          <strong className="text-gray-800 dark:text-gray-200">Founder & CEO of VisionDX AI</strong> — Building production-grade autonomous agents using{" "}
          <span className="text-marrsgreen dark:text-carrigreen font-semibold">Spec-Kit</span>,{" "}
          <span className="text-marrsgreen dark:text-carrigreen font-semibold">Gemini CLI</span>,{" "}
          <span className="text-marrsgreen dark:text-carrigreen font-semibold">MCP servers</span>, and{" "}
          <span className="text-marrsgreen dark:text-carrigreen font-semibold">RAG systems</span>
        </motion.p>

        {/* Tech Stack Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10 px-4"
        >
          {["Next.js", "TypeScript", "Python", "OpenAI SDK", "Google Gemini", "Kubernetes"].map((tech, index) => (
            <span
              key={tech}
              className="px-4 py-2 text-sm font-medium bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full hover:border-marrsgreen dark:hover:border-carrigreen hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${1.2 + index * 0.1}s` }}
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16"
        >
          {/* Primary CTA */}
          <Link
            href="#projects"
            className="group relative px-8 py-4 bg-gradient-to-r from-marrsgreen to-marrsgreen/90 dark:from-carrigreen dark:to-carrigreen/90 text-white rounded-full font-semibold text-base md:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-marrsgreen/50 dark:hover:shadow-carrigreen/50 hover:scale-105 flex items-center gap-3 overflow-hidden"
          >
            <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 group-hover:w-full"></span>
            <span className="relative">View My AI Projects</span>
            <svg
              className="relative w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>

          {/* Secondary CTA */}
          <a
            href="https://ramesha-javed-web-cv.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white rounded-full font-semibold text-base md:text-lg transition-all duration-300 hover:border-marrsgreen dark:hover:border-carrigreen hover:shadow-xl hover:scale-105 flex items-center gap-3"
          >
            <span>Download CV</span>
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-y-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: "25+", label: "AI Projects" },
            { value: "50K+", label: "Users Impacted" },
            { value: "500+", label: "Community" },
            { value: "4", label: "Hackathons Won" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="p-4 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-marrsgreen dark:hover:border-carrigreen transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-3xl md:text-4xl font-bold text-marrsgreen dark:text-carrigreen mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#whoami"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 group"
      >
        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-marrsgreen dark:group-hover:text-carrigreen transition-colors">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-gray-300 dark:border-gray-600 group-hover:border-marrsgreen dark:group-hover:border-carrigreen flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-marrsgreen dark:bg-carrigreen"
          />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;
