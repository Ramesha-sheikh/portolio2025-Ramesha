"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TypingAnimation from "@/components/TypingAnimation";

const HeroSection: React.FC = () => {
  const typingTexts = [
    "Agentic AI Systems",
    "Multi-Agent Orchestration",
    "RAG-Powered Solutions",
    "Autonomous AI Agents",
    "Production AI Systems",
  ];

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background - Original Theme Only */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient - original colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-white dark:from-[#0a1f1c] dark:via-[#0d2b27] dark:to-[#1B2731]" />

        {/* Animated gradient orbs - only green theme */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-marrsgreen/20 to-transparent dark:from-carrigreen/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-marrsgreen/10 to-transparent dark:from-carrigreen/10 rounded-full blur-3xl"
        />

        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,122,122,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,122,122,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(5,206,145,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(5,206,145,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
      </div>

      {/* Main Content - Parallax Effect */}
      <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto text-center z-10 relative">
        {/* Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
          className="inline-flex items-center gap-3 px-6 py-3 mb-8 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-marrsgreen/30 dark:border-carrigreen/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          <span className="text-xl">🏆</span>
          <span className="text-sm md:text-base font-bold bg-gradient-to-r from-marrsgreen to-marrsgreen/70 dark:from-carrigreen dark:to-carrigreen/70 bg-clip-text text-transparent">
            4x Certified Agentic AI Developer
          </span>
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-marrsgreen dark:bg-carrigreen opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-marrsgreen dark:bg-carrigreen"></span>
          </span>
        </motion.div>

        {/* Main Heading with Modern Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mb-8"
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-600 dark:text-gray-400 mb-4 tracking-wide">
            Hello, I&apos;m
          </h1>
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-6 leading-none">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
              Ramesha
            </span>
            <br />
            <span className="bg-gradient-to-r from-marrsgreen to-marrsgreen/70 dark:from-carrigreen dark:to-carrigreen/70 bg-clip-text text-transparent">
              Javed
            </span>
          </h2>
        </motion.div>

        {/* Dynamic Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 min-h-[80px] flex items-center justify-center"
        >
          <span className="text-gray-800 dark:text-white mr-3">Building</span>
          <TypingAnimation
            texts={typingTexts}
            className="text-marrsgreen dark:text-carrigreen"
          />
        </motion.div>

        {/* Subtitle - Cleaner */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed font-light"
        >
          <span className="font-semibold text-marrsgreen dark:text-carrigreen">Founder of VisionDX AI</span> •
          Certified by Presidential Initiative for AI •
          Specializing in Autonomous AI Agents & Multi-Agent Systems
        </motion.p>

        {/* CTA Buttons - Modern Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-5 items-center justify-center mb-16"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-10 py-5 bg-gradient-to-r from-marrsgreen to-marrsgreen/90 dark:from-carrigreen dark:to-carrigreen/90 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-marrsgreen/30 dark:shadow-carrigreen/30 overflow-hidden transition-all duration-300"
          >
            <span className="absolute inset-0 bg-marrsgreen/90 dark:bg-carrigreen/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center gap-3">
              <span>Explore AI Projects</span>
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
            </span>
          </motion.a>

          <motion.a
            href="https://ramesha-javed-web-cv.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group px-10 py-5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-2xl font-bold text-lg hover:border-marrsgreen dark:hover:border-carrigreen shadow-xl transition-all duration-300"
          >
            <span className="flex items-center gap-3">
              <span>Download CV</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
              </svg>
            </span>
          </motion.a>
        </motion.div>

        {/* Quick Questions Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="max-w-5xl mx-auto mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Need a custom chatbot?",
              "Is React.js suitable for large-scale apps?",
              "Understanding AI agent capabilities",
              "Optimizing web performance",
              "Server-side rendering (SSR)",
              "What is the development process?",
              "Post-launch support options",
              "Mobile-first design strategies",
              "Migrating to Next.js",
              "User experience (UX) best practices",
              "Accessibility in web applications",
              "ROI of AI-powered solutions",
            ].map((question, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const chatButton = document.querySelector('button[aria-label="Open chat"]') as HTMLElement;
                  if (chatButton) chatButton.click();
                  setTimeout(() => {
                    const chatInput = document.querySelector('input[placeholder*="Ask anything"]') as HTMLInputElement;
                    if (chatInput) {
                      chatInput.focus();
                      chatInput.value = question;
                    }
                  }, 300);
                }}
                className="px-5 py-2.5 bg-gray-900/90 dark:bg-gray-800/90 text-gray-200 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-marrsgreen dark:hover:bg-carrigreen hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer backdrop-blur-sm border border-gray-700/50 dark:border-gray-600/50"
              >
                {question}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Stats Grid - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto"
        >
          {[
            { value: "4", label: "Certifications", icon: "🎓", color: "from-marrsgreen/20 to-marrsgreen/10" },
            { value: "25+", label: "AI Projects", icon: "💼", color: "from-marrsgreen/15 to-marrsgreen/5" },
            { value: "50K+", label: "Users Impacted", icon: "👥", color: "from-marrsgreen/20 to-marrsgreen/10" },
            { value: "500+", label: "Community", icon: "⭐", color: "from-marrsgreen/15 to-marrsgreen/5" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3 + index * 0.1, type: "spring" }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`relative p-6 rounded-2xl bg-gradient-to-br ${stat.color} backdrop-blur-sm border border-white/20 dark:border-gray-800/50 shadow-lg hover:shadow-2xl transition-all duration-300 group`}
            >
              <div className="absolute inset-0 bg-white/50 dark:bg-gray-900/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="text-3xl mb-3 transition-transform group-hover:scale-125 duration-300">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-black text-marrsgreen dark:text-carrigreen mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Animated Scroll Indicator */}
      <motion.a
        href="#whoami"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("whoami")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group z-10"
      >
        <motion.span
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-marrsgreen dark:group-hover:text-carrigreen transition-colors"
        >
          Scroll to Explore
        </motion.span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-12 rounded-full border-3 border-marrsgreen/50 dark:border-carrigreen/50 group-hover:border-marrsgreen dark:group-hover:border-carrigreen flex items-start justify-center pt-3 transition-colors"
        >
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-2 h-2 rounded-full bg-marrsgreen dark:bg-carrigreen"
          />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;
