"use client";
import { Metadata } from "next";
import { motion } from "framer-motion";
import BentoGrid from "@/components/BentoGrid";
import { getAllProjects } from "@/data/projects";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main className="min-h-screen bg-bglight dark:bg-bgdark py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-marrsgreen to-marrsgreen/70 dark:from-carrigreen dark:to-carrigreen/70 bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore my portfolio of AI-powered projects including medical imaging, autonomous agents, and full-stack applications
          </p>
        </motion.div>

        {/* Projects Grid */}
        <BentoGrid projects={projects} />
      </div>
    </main>
  );
}
