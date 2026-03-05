"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

interface FeaturedProject {
  title: string;
  type: string;
  desc: string;
  tags: string[];
  liveUrl: string;
  codeUrl: string;
  featured?: boolean;
}

const featuredProjects: FeaturedProject[] = [
  {
    title: "VisionDX AI - Medical Imaging Platform",
    type: "AI Vision & Medical AI",
    desc: "Production-grade medical imaging analysis platform supporting 25+ imaging types (X-ray, CT, MRI, ultrasound). Powered by state-of-the-art vision models with 95%+ accuracy. Backed by NIC Karachi.",
    tags: ["Computer Vision", "Medical AI", "Next.js", "Python", "FastAPI", "Production"],
    liveUrl: "https://visiondx.vercel.app",
    codeUrl: "https://github.com/RameshaKaru/visiondx-ai",
    featured: true,
  },
  {
    title: "AI-Native Autonomous Agent Suite",
    type: "Agentic AI Platform",
    desc: "Complete ecosystem of autonomous AI agents: Spec-Kit (requirements to specs), Gemini CLI (multi-modal agent), MCP servers integration. Built with OpenAI SDK, streaming responses, and intelligent routing.",
    tags: ["Agentic AI", "OpenAI SDK", "MCP", "Python", "LangChain", "Autonomous Agents"],
    liveUrl: "#",
    codeUrl: "https://github.com/RameshaKaru/agentic-ai-suite",
    featured: true,
  },
  {
    title: "CRM Digital FTE Factory",
    type: "Multi-Agent CRM System",
    desc: "Production-ready CRM powered by autonomous agents with RAG for customer intelligence, function calling for actions, and MCP for integrations. Automates sales workflows end-to-end.",
    tags: ["RAG", "Multi-Agent", "CRM", "Next.js", "Pinecone", "Function Calling"],
    liveUrl: "#",
    codeUrl: "https://github.com/RameshaKaru/crm-digital-fte",
    featured: true,
  },
];

const FeaturedProjects: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-50/50 dark:to-gray-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-marrsgreen to-marrsgreen/70 dark:from-carrigreen dark:to-carrigreen/70 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore my flagship AI-powered projects that demonstrate expertise in autonomous agents, computer vision, and production-grade systems
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:border-marrsgreen/50 dark:hover:border-carrigreen/50 transition-all duration-500 hover:shadow-2xl hover:shadow-marrsgreen/10 dark:hover:shadow-carrigreen/10"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-marrsgreen to-marrsgreen/80 dark:from-carrigreen dark:to-carrigreen/80 text-white text-xs font-bold rounded-full">
                  FEATURED
                </div>
              )}

              {/* Project Type */}
              <div className="text-sm font-semibold text-marrsgreen dark:text-carrigreen mb-2">
                {project.type}
              </div>

              {/* Project Title */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-marrsgreen dark:group-hover:text-carrigreen transition-colors">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {project.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 4 && (
                  <span className="px-3 py-1 text-gray-500 dark:text-gray-400 text-xs font-medium">
                    +{project.tags.length - 4} more
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                {project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-marrsgreen to-marrsgreen/80 dark:from-carrigreen dark:to-carrigreen/80 text-white rounded-lg hover:shadow-lg hover:shadow-marrsgreen/30 dark:hover:shadow-carrigreen/30 transition-all duration-300 text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live
                  </a>
                )}
                {project.codeUrl !== "#" && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-marrsgreen to-marrsgreen/80 dark:from-carrigreen dark:to-carrigreen/80 text-white rounded-xl hover:shadow-2xl hover:shadow-marrsgreen/30 dark:hover:shadow-carrigreen/30 transition-all duration-300 text-lg font-semibold group"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
