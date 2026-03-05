"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, ArrowRight, Calendar, Users, Target, CheckCircle2, Code2, Sparkles, TrendingUp, MessageSquare, Lightbulb } from "lucide-react";
import { ProjectDetail } from "@/types/project";
import { getAllProjectSlugs, getProjectBySlug } from "@/data/projects";

interface ProjectDetailLayoutProps {
  project: ProjectDetail;
}

const ProjectDetailLayout: React.FC<ProjectDetailLayoutProps> = ({ project }) => {
  // Get next project for navigation
  const allSlugs = getAllProjectSlugs();
  const currentIndex = allSlugs.indexOf(project.slug);
  const nextSlug = allSlugs[(currentIndex + 1) % allSlugs.length];
  const nextProject = getProjectBySlug(nextSlug);

  return (
    <div className="bg-bglight dark:bg-bgdark min-h-screen">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-marrsgreen dark:hover:text-carrigreen transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Projects
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Project Type */}
          <div className="text-sm font-semibold text-marrsgreen dark:text-carrigreen mb-4">
            {project.type}
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {project.title}
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-4xl">
            {project.desc}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            {project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-marrsgreen to-marrsgreen/80 dark:from-carrigreen dark:to-carrigreen/80 text-white rounded-xl hover:shadow-lg hover:shadow-marrsgreen/30 dark:hover:shadow-carrigreen/30 transition-all duration-300 font-semibold"
              >
                <ExternalLink className="w-5 h-5" />
                View Live Project
              </a>
            )}
            {project.codeUrl !== "#" && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 font-semibold"
              >
                <Github className="w-5 h-5" />
                View Source Code
              </a>
            )}
          </div>

          {/* Hero Image */}
          {project.heroImage && (
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-auto"
              />
            </div>
          )}
        </motion.div>
      </section>

      {/* Overview Section */}
      <section className="bg-white/50 dark:bg-gray-900/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 flex items-center gap-3">
              <Target className="w-8 h-8 text-marrsgreen dark:text-carrigreen" />
              Project Overview
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Problem */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">The Problem</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.overview.problem}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">The Solution</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.overview.solution}
                </p>
              </div>

              {/* Role & Timeline */}
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <Users className="w-6 h-6 text-marrsgreen dark:text-carrigreen mb-3" />
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">My Role</div>
                  <div className="font-semibold text-gray-900 dark:text-white">{project.overview.role}</div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <Calendar className="w-6 h-6 text-marrsgreen dark:text-carrigreen mb-3" />
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Timeline</div>
                  <div className="font-semibold text-gray-900 dark:text-white">{project.overview.timeline}</div>
                </div>

                {project.overview.team && project.overview.team.length > 0 && (
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <Users className="w-6 h-6 text-marrsgreen dark:text-carrigreen mb-3" />
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Team</div>
                    <div className="font-semibold text-gray-900 dark:text-white">{project.overview.team.join(", ")}</div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-marrsgreen dark:text-carrigreen" />
              Challenges & Solutions
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
              {project.challenge.description}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Technical Challenges */}
              <div className="bg-red-50 dark:bg-red-900/10 rounded-xl p-8 border border-red-200 dark:border-red-800">
                <h3 className="text-xl font-bold text-red-900 dark:text-red-300 mb-6">Technical Challenges</h3>
                <ul className="space-y-4">
                  {project.challenge.technicalChallenges.map((challenge, index) => (
                    <li key={index} className="flex gap-3 text-gray-700 dark:text-gray-300">
                      <span className="text-red-500 font-bold mt-1">✗</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div className="bg-green-50 dark:bg-green-900/10 rounded-xl p-8 border border-green-200 dark:border-green-800">
                <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-6">How I Solved Them</h3>
                <ul className="space-y-4">
                  {project.challenge.solutions.map((solution, index) => (
                    <li key={index} className="flex gap-3 text-gray-700 dark:text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white/50 dark:bg-gray-900/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 flex items-center gap-3">
              <Code2 className="w-8 h-8 text-marrsgreen dark:text-carrigreen" />
              Development Process
            </h2>

            <div className="space-y-8">
              {/* Research */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">1. Research & Discovery</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.process.research}
                </p>
              </div>

              {/* Design */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">2. Design & Planning</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.process.design}
                </p>
              </div>

              {/* Development */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">3. Development</h3>
                <ul className="space-y-3">
                  {project.process.development.map((phase, index) => (
                    <li key={index} className="flex gap-3 text-gray-600 dark:text-gray-400">
                      <CheckCircle2 className="w-5 h-5 text-marrsgreen dark:text-carrigreen flex-shrink-0 mt-1" />
                      <span>{phase}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testing */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">4. Testing & Validation</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.process.testing}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Implementation Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Code2 className="w-8 h-8 text-marrsgreen dark:text-carrigreen" />
              Technical Implementation
            </h2>

            {/* Architecture */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Architecture</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.technicalDetails.architecture}
              </p>
            </div>

            {/* Key Features */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Key Features</h3>
              <div className="space-y-6">
                {project.technicalDetails.keyFeatures.map((feature, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{feature.description}</p>
                    {feature.codeSnippet && (
                      <pre className="bg-gray-900 dark:bg-black rounded-lg p-4 overflow-x-auto text-sm">
                        <code className="text-green-400">{feature.codeSnippet}</code>
                      </pre>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Optimizations */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Performance Optimizations</h3>
              <ul className="space-y-3">
                {project.technicalDetails.performanceOptimizations.map((optimization, index) => (
                  <li key={index} className="flex gap-3 text-gray-600 dark:text-gray-400">
                    <TrendingUp className="w-5 h-5 text-marrsgreen dark:text-carrigreen flex-shrink-0 mt-1" />
                    <span>{optimization}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results & Impact Section */}
      <section className="bg-gradient-to-br from-marrsgreen/10 to-transparent dark:from-carrigreen/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-marrsgreen dark:text-carrigreen" />
              Results & Impact
            </h2>

            {/* Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {project.results.metrics.map((metric, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{metric.label}</div>
                  <div className="text-sm text-red-500 line-through mb-1">{metric.before}</div>
                  <div className="text-xl font-bold text-marrsgreen dark:text-carrigreen">{metric.after}</div>
                </div>
              ))}
            </div>

            {/* User Feedback */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-marrsgreen dark:text-carrigreen" />
                User Feedback
              </h3>
              <ul className="space-y-3">
                {project.results.userFeedback.map((feedback, index) => (
                  <li key={index} className="flex gap-3 text-gray-600 dark:text-gray-400">
                    <span className="text-marrsgreen dark:text-carrigreen font-bold">"</span>
                    <span className="italic">{feedback}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lessons Learned */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-marrsgreen dark:text-carrigreen" />
                Lessons Learned
              </h3>
              <ul className="space-y-3">
                {project.results.lessonsLearned.map((lesson, index) => (
                  <li key={index} className="flex gap-3 text-gray-600 dark:text-gray-400">
                    <Lightbulb className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12">Project Gallery</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.gallery.map((item, index) => (
                  <div key={index} className="rounded-xl overflow-hidden shadow-lg">
                    {item.type === "image" ? (
                      <img src={item.url} alt={item.caption} className="w-full h-auto" />
                    ) : (
                      <video src={item.url} controls className="w-full h-auto" />
                    )}
                    <div className="bg-white dark:bg-gray-800 p-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Next Project CTA */}
      {nextProject && (
        <section className="bg-gradient-to-r from-marrsgreen to-marrsgreen/80 dark:from-carrigreen dark:to-carrigreen/80 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              <div className="text-sm font-semibold mb-2">NEXT PROJECT</div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">{nextProject.title}</h3>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">{nextProject.desc}</p>
              <Link
                href={`/projects/${nextProject.slug}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-marrsgreen dark:text-carrigreen rounded-xl hover:shadow-2xl transition-all duration-300 font-bold"
              >
                View Case Study
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProjectDetailLayout;
