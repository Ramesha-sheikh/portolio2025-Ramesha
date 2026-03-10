"use client";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const ModernHeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "INTELLIGENT WEB-APPS";

  // Typing effect - continuous loop
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isDeleting) {
        // Typing
        if (typedText.length < fullText.length) {
          setTypedText(fullText.substring(0, typedText.length + 1));
        } else {
          // Complete - start deleting after pause
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (typedText.length > 0) {
          setTypedText(fullText.substring(0, typedText.length - 1));
        } else {
          // Start typing again
          setIsDeleting(false);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearInterval(timer);
  }, [typedText, isDeleting, fullText]);

  // Tech stack icons
  const techIcons = [
    { name: "Next.js", icon: "⚛️" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "AI", icon: "🤖" },
    { name: "TypeScript", icon: "📘" },
    { name: "AWS", icon: "☁️" },
    { name: "MongoDB", icon: "🍃" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Dark Teal Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a3d3d] via-[#0d4a4a] to-[#0a3030]">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px]" />

        {/* Animated Gradient Overlays */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Tech Stack Icons Row - Top */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 0.2, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-32 left-0 right-0 z-0 hidden md:flex justify-center items-center gap-8 text-4xl text-gray-400"
      >
        {techIcons.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            whileHover={{ scale: 1.3, opacity: 0.6 }}
            className="grayscale hover:grayscale-0 transition-all"
          >
            {tech.icon}
          </motion.div>
        ))}
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-12 rounded-full border border-emerald-400/30 bg-emerald-400/10 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span className="text-sm font-semibold text-emerald-400 uppercase tracking-wide">
            Powered by Ramesha Javed
          </span>
        </motion.div>

        {/* Main Heading with Typing Effect */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight"
        >
          <span className="block text-white mb-2">
            ARCHITECTING THE FUTURE
          </span>
          <span className="block">
            <span className="text-white">OF </span>
            <span className="relative inline-block">
              <span className="text-emerald-400">
                {typedText}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block"
                >
                  |
                </motion.span>
              </span>
              <motion.svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 400 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: typedText.length >= fullText.length ? 1 : 0 }}
                transition={{ duration: 2, delay: 0.5 }}
              >
                <path
                  d="M0 4C50 4 50 4 100 4C150 4 150 4 200 4C250 4 250 4 300 4C350 4 350 4 400 4"
                  stroke="#10b981"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>
            <span className="text-white">.</span>
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
        >
          Expertly Blending Next.js & React.js to Craft Cutting-Edge Agentic AI
          <br className="hidden sm:block" />
          Agents & Chatbots.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          {/* Primary Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-bold text-base sm:text-lg shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300"
            >
              <span>Deployed Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Secondary Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <a
              href="https://ramesha-javed-web-cv.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-emerald-400/50 hover:border-emerald-400 text-white rounded-xl font-bold text-base sm:text-lg backdrop-blur-sm hover:bg-emerald-500/10 transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Quick Questions Pills - Ultra Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-6xl mx-auto mt-12 mb-8"
        >
          {/* Animated Glow Background */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 blur-3xl rounded-full animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-l from-emerald-500/10 via-transparent to-teal-500/10 blur-2xl rounded-full" />
            
            <div className="relative flex flex-wrap justify-center gap-3">
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
                  initial={{ opacity: 0, scale: 0.5, y: 20, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                  transition={{ delay: 0.9 + index * 0.05, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.12, y: -8, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
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
                  className="group relative px-6 py-3.5 rounded-full text-sm font-semibold overflow-hidden transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/40 cursor-pointer backdrop-blur-xl border border-emerald-500/30 dark:border-emerald-400/30"
                  style={{
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(5, 206, 145, 0.1) 50%, rgba(45, 212, 191, 0.15) 100%)',
                  }}
                >
                  {/* Animated Gradient Border Glow */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 blur-lg opacity-50" />
                  </div>
                  
                  {/* Hover Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  {/* Sparkle Effect */}
                  <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <span className="relative inline-flex items-center gap-2.5">
                    <span className="text-emerald-400 group-hover:text-white transition-all duration-300 drop-shadow-lg group-hover:drop-shadow-none">
                      <motion.svg 
                        className="w-4.5 h-4.5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </motion.svg>
                    </span>
                    <span className="bg-gradient-to-r from-emerald-300 to-teal-300 dark:from-emerald-200 dark:to-teal-200 bg-clip-text text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-emerald-100 transition-all duration-500">
                      {question}
                    </span>
                  </span>
                  
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-emerald-400/50 group-hover:border-white/80 transition-colors duration-300 rounded-tl-full" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-emerald-400/50 group-hover:border-white/80 transition-colors duration-300 rounded-br-full" />
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats Cards - Enhanced with Dark Theme */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mt-16 sm:mt-20"
        >
          {[
            { label: "Projects", value: "10+", icon: "💼" },
            { label: "AI Models", value: "25+", icon: "🤖" },
            { label: "Users Impacted", value: "50K+", icon: "⚡" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-emerald-500/20 hover:border-emerald-400/50 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
              <div className="relative">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400 group-hover:text-emerald-400 transition-colors">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-emerald-400/50 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-3 bg-emerald-400 rounded-full" />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Orbs - Emerald/Teal Only */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
};

export default ModernHeroSection;
