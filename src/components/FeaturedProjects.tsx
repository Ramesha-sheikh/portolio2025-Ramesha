"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, ExternalLink, Sparkles } from "lucide-react";

interface Project {
  id: number;
  title: string;
  type: string;
  category: "nextjs" | "python" | "agents" | "typescript" | "fte";
  description: string;
  longDescription: string;
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
  featured?: boolean;
  icon: string;
}

const allProjects: Project[] = [
  // Next.js Projects
  {
    id: 1,
    title: "VisionDX AI - Medical Imaging Platform",
    type: "Next.js + AI",
    category: "nextjs",
    description: "AI-powered medical imaging analysis platform for X-ray, MRI, CT scan with 95%+ accuracy",
    longDescription: "Production-grade medical imaging analysis platform supporting 25+ imaging types. Powered by state-of-the-art vision models with 95%+ accuracy. Features include automated report generation, radiologist workflow optimization, and HIPAA-compliant data handling. Backed by National Incubation Center (NIC) Karachi.",
    tags: ["Next.js 15", "Computer Vision", "Medical AI", "TypeScript", "TailwindCSS"],
    liveUrl: "https://visiondx.vercel.app",
    codeUrl: "https://github.com/RameshaKaru/visiondx-ai",
    featured: true,
    icon: "🏥"
  },
  {
    id: 2,
    title: "Professional Portfolio Website",
    type: "Next.js 15",
    category: "nextjs",
    description: "Modern portfolio with AI chatbot, certifications slider, and smooth animations",
    longDescription: "Ultra-modern portfolio website built with Next.js 15, featuring an AI-powered chatbot, automatic certifications slider, smooth Framer Motion animations, dark mode support, and SEO optimization. Includes contact form with email integration and responsive design.",
    tags: ["Next.js 15", "React 19", "Framer Motion", "TailwindCSS", "TypeScript"],
    liveUrl: "#",
    codeUrl: "#",
    featured: true,
    icon: "👨‍💻"
  },
  {
    id: 3,
    title: "CRM Digital FTE Factory",
    type: "Next.js + Multi-Agent",
    category: "fte",
    description: "Production CRM powered by autonomous agents with RAG and function calling",
    longDescription: "Enterprise-grade CRM system powered by multiple autonomous AI agents. Features RAG-based customer intelligence, function calling for automated actions, MCP server integrations, and end-to-end sales workflow automation. Built for scalability and production use.",
    tags: ["Next.js", "RAG", "Multi-Agent", "Pinecone", "Function Calling"],
    liveUrl: "#",
    codeUrl: "https://github.com/RameshaKaru/crm-digital-fte",
    featured: true,
    icon: "🏭"
  },
  
  // Python Projects
  {
    id: 4,
    title: "AI-Native Autonomous Agent Suite",
    type: "Python + OpenAI SDK",
    category: "python",
    description: "Complete ecosystem of autonomous AI agents with multi-agent orchestration",
    longDescription: "Comprehensive suite of autonomous AI agents including Spec-Kit (requirements to specifications converter), multi-modal agents, and MCP server integrations. Built with OpenAI SDK, featuring streaming responses, intelligent routing, and production-grade error handling.",
    tags: ["Python", "OpenAI SDK", "Agentic AI", "LangChain", "FastAPI"],
    liveUrl: "#",
    codeUrl: "https://github.com/RameshaKaru/agentic-ai-suite",
    featured: true,
    icon: "🤖"
  },
  {
    id: 5,
    title: "RAG-Powered Document Processor",
    type: "Python + Vector DB",
    category: "python",
    description: "Intelligent document processing system with vector search and AI analysis",
    longDescription: "Advanced document processing system using Retrieval Augmented Generation (RAG) with vector databases. Supports multiple document formats, semantic search, intelligent chunking, and context-aware responses. Built for enterprise document management.",
    tags: ["Python", "RAG", "Vector DB", "Qdrant", "LangChain"],
    liveUrl: "#",
    codeUrl: "#",
    featured: false,
    icon: "📄"
  },
  
  // OpenAI Agents SDK Projects
  {
    id: 6,
    title: "Gemini CLI Multi-Modal Agent",
    type: "OpenAI Agents SDK",
    category: "agents",
    description: "Multi-modal AI agent with vision, text, and code capabilities",
    longDescription: "Advanced CLI tool powered by Google's Gemini model with multi-modal capabilities. Supports image analysis, code generation, natural language understanding, and tool integration. Features include conversation history, context management, and streaming responses.",
    tags: ["OpenAI SDK", "Gemini", "Multi-Modal", "CLI", "Python"],
    liveUrl: "#",
    codeUrl: "#",
    featured: true,
    icon: "💻"
  },
  {
    id: 7,
    title: "MCP Server Integration Hub",
    type: "OpenAI Agents SDK",
    category: "agents",
    description: "Model Context Protocol servers for AI agent integrations",
    longDescription: "Implementation of Model Context Protocol (MCP) servers enabling seamless integration between AI agents and external tools/services. Supports multiple MCP servers, secure authentication, and real-time data synchronization.",
    tags: ["MCP", "OpenAI SDK", "Integration", "APIs", "Python"],
    liveUrl: "#",
    codeUrl: "#",
    featured: false,
    icon: "🔌"
  },
  {
    id: 8,
    title: "Spec-Kit Requirements Engine",
    type: "OpenAI Agents SDK",
    category: "agents",
    description: "AI-powered requirements gathering and specification generation",
    longDescription: "Intelligent system that converts natural language requirements into detailed technical specifications. Uses OpenAI Agents SDK for multi-step reasoning, validation, and documentation generation. Integrates with project management tools.",
    tags: ["OpenAI Agents", "Requirements", "Documentation", "AI", "Python"],
    liveUrl: "#",
    codeUrl: "#",
    featured: false,
    icon: "📋"
  },
  
  // TypeScript Projects
  {
    id: 9,
    title: "Type-Safe API Framework",
    type: "TypeScript + tRPC",
    category: "typescript",
    description: "End-to-end type-safe API framework with automatic validation",
    longDescription: "Modern API framework built with TypeScript and tRPC providing end-to-end type safety. Features automatic validation, Zod schemas, error handling, and seamless frontend integration. Reduces bugs and improves developer experience.",
    tags: ["TypeScript", "tRPC", "Zod", "Node.js", "API"],
    liveUrl: "#",
    codeUrl: "#",
    featured: false,
    icon: "🔒"
  },
  {
    id: 10,
    title: "React Component Library",
    type: "TypeScript + Storybook",
    category: "typescript",
    description: "Reusable component library with Storybook documentation",
    longDescription: "Comprehensive React component library built with TypeScript. Includes 50+ accessible components, Storybook documentation, dark mode support, and comprehensive test coverage. Published as npm package.",
    tags: ["TypeScript", "React", "Storybook", "Components", "npm"],
    liveUrl: "#",
    codeUrl: "#",
    featured: false,
    icon: "🧩"
  },
  
  // Digital FTE Employee Projects
  {
    id: 11,
    title: "AI Sales Agent",
    type: "Digital FTE Employee",
    category: "fte",
    description: "Autonomous sales agent for lead qualification and follow-ups",
    longDescription: "Intelligent sales automation agent that qualifies leads, schedules meetings, and follows up with prospects. Integrates with CRM systems, email platforms, and calendar tools. Uses AI for natural conversation and decision-making.",
    tags: ["Digital FTE", "Sales AI", "Automation", "CRM", "NLP"],
    liveUrl: "#",
    codeUrl: "#",
    featured: false,
    icon: "💼"
  },
  {
    id: 12,
    title: "Customer Support AI Agent",
    type: "Digital FTE Employee",
    category: "fte",
    description: "24/7 customer support agent with RAG knowledge base",
    longDescription: "AI-powered customer support agent providing 24/7 assistance. Features RAG-based knowledge base, multi-channel support (email, chat, social), sentiment analysis, and escalation to human agents when needed. Reduces support ticket resolution time by 70%.",
    tags: ["Digital FTE", "Support AI", "RAG", "Chatbot", "NLP"],
    liveUrl: "#",
    codeUrl: "#",
    featured: false,
    icon: "🎧"
  },
  {
    id: 13,
    title: "HR Recruitment Agent",
    type: "Digital FTE Employee",
    category: "fte",
    description: "Automated recruitment agent for resume screening and interviews",
    longDescription: "AI recruitment assistant that screens resumes, conducts initial interviews, and ranks candidates. Uses NLP for resume parsing, video interview analysis, and skills assessment. Integrates with ATS systems and reduces hiring time by 60%.",
    tags: ["Digital FTE", "HR AI", "Recruitment", "ATS", "NLP"],
    liveUrl: "#",
    codeUrl: "#",
    featured: false,
    icon: "👥"
  },
];

const categories = [
  { id: "all", label: "All Projects", icon: "📋", color: "from-emerald-500 to-teal-500" },
  { id: "nextjs", label: "Next.js", icon: "⚛️", color: "from-blue-500 to-cyan-500" },
  { id: "python", label: "Python", icon: "🐍", color: "from-yellow-500 to-orange-500" },
  { id: "agents", label: "AI Agents", icon: "🤖", color: "from-purple-500 to-pink-500" },
  { id: "typescript", label: "TypeScript", icon: "📘", color: "from-blue-600 to-blue-400" },
  { id: "fte", label: "Digital FTE", icon: "🏭", color: "from-emerald-500 to-green-500" },
];

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === "all"
    ? allProjects
    : allProjects.filter(project => project.category === activeCategory);

  const featuredProjects = allProjects.filter(p => p.featured);

  return (
    <section id="projects" className="section bg-gradient-to-b from-white via-emerald-50/20 to-white dark:from-[#0a1f1c] dark:via-[#0d2b27] dark:to-[#1B2731] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30 dark:opacity-50">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-tr from-teal-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 relative z-10"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 mb-5 rounded-full bg-emerald-100/80 dark:bg-emerald-900/30 border border-emerald-500/30 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
          <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide">
            Portfolio Showcase
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-black mb-3"
        >
          <span className="text-gray-900 dark:text-white block">FEATURED</span>
          <span className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent block">
            PROJECTS
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          Explore cutting-edge projects in Next.js, Python, AI Agents, TypeScript, and Digital FTE solutions
        </motion.p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap justify-center gap-2 mb-10"
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2.5 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
              activeCategory === category.id
                ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                : "bg-white/70 dark:bg-gray-900/70 text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30"
            }`}
          >
            <span>{category.icon}</span>
            {category.label}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.03, y: -8 }}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer group relative rounded-2xl overflow-hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-emerald-500/20 dark:border-emerald-400/20 shadow-lg hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300"
            >
              {/* Gradient Border on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl" />

              <div className="p-5 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-2xl flex-shrink-0 shadow-md">
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
                      {project.type}
                    </span>
                    <h3 className="text-lg font-black text-gray-900 dark:text-white line-clamp-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-semibold bg-emerald-100/80 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-lg border border-emerald-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2.5 py-1 text-xs text-gray-500 dark:text-gray-400">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-2 pt-3 border-t border-gray-200 dark:border-gray-800">
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg text-xs font-bold hover:shadow-lg transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live
                    </a>
                  )}
                  {project.codeUrl && project.codeUrl !== "#" && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-3xl shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 bg-white/95 dark:bg-gray-800/95 backdrop-blur rounded-full flex items-center justify-center shadow-lg hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 transition-colors border border-emerald-500/30"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-3xl flex-shrink-0 shadow-xl">
                    {selectedProject.icon}
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
                      {selectedProject.type}
                    </span>
                    <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">
                      {selectedProject.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.liveUrl && selectedProject.liveUrl !== "#" && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg text-xs font-bold hover:shadow-lg transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Live Project
                        </a>
                      )}
                      {selectedProject.codeUrl && selectedProject.codeUrl !== "#" && (
                        <a
                          href={selectedProject.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                        >
                          <Github className="w-3.5 h-3.5" />
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide mb-2">
                    Project Overview
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Tags */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-sm font-bold bg-emerald-100/80 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-lg border border-emerald-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
