"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection: React.FC = () => {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-20 py-20 overflow-hidden"
    >
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-[#0a1f1c] dark:via-[#0d2b27] dark:to-[#1B2731] -z-10"></div>

      {/* Top Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="inline-flex items-center gap-2 px-6 py-2 mb-12 rounded-full border-2 border-marrsgreen/30 dark:border-carrigreen/30 bg-marrsgreen/5 dark:bg-carrigreen/5"
      >
        <span className="w-2 h-2 bg-marrsgreen dark:bg-carrigreen rounded-full animate-pulse"></span>
        <span className="text-sm md:text-base font-medium text-marrsgreen dark:text-carrigreen uppercase tracking-wider">
          Powered by Ramesha Javed
        </span>
      </motion.div>

      {/* Main Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center max-w-6xl mx-auto"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4">
          <span className="block text-gray-900 dark:text-white mb-2">
            ARCHITECTING THE FUTURE
          </span>
          <span className="block text-marrsgreen dark:text-carrigreen relative inline-block">
            OF AGENTIC AI SYSTEMS.
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute left-0 -bottom-2 w-full h-1 bg-marrsgreen dark:bg-carrigreen origin-left"
            ></motion.span>
          </span>
        </h1>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-8 mb-12 px-4"
      >
        Expertly Blending Next.js, TypeScript & Python to Craft Cutting-Edge Agentic AI
        Agents, Intelligent Chatbots & Scalable Full-Stack Solutions.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="flex flex-col sm:flex-row gap-4 items-center justify-center"
      >
        {/* Deployed Projects Button */}
        <Link
          href="#projects"
          className="group relative px-8 py-4 bg-marrsgreen dark:bg-carrigreen text-white rounded-full font-semibold text-base md:text-lg transition-all duration-300 hover:shadow-lg hover:shadow-marrsgreen/50 dark:hover:shadow-carrigreen/50 hover:scale-105 flex items-center gap-2"
        >
          Deployed Projects
          <svg
            className="w-5 h-5 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>

        {/* Download CV Button */}
        <a
          href="https://ramesha-javed-web-cv.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 border-2 border-gray-800 dark:border-white text-gray-800 dark:text-white rounded-full font-semibold text-base md:text-lg transition-all duration-300 hover:bg-gray-800 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 hover:scale-105"
        >
          View CV
        </a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.a
        href="#whoami"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="group absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center flex-col animate-bounce"
      >
        <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-marrsgreen dark:group-hover:text-carrigreen mb-1">
          Scroll
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className="fill-gray-600 dark:fill-gray-400 group-hover:fill-marrsgreen dark:group-hover:fill-carrigreen"
        >
          <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
        </svg>
      </motion.a>
    </section>
  );
};

export default HeroSection;
