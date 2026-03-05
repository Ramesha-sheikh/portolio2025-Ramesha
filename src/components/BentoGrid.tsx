"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

interface BentoProject {
  title: string;
  type: string;
  desc: string;
  tags: string[];
  liveUrl: string;
  codeUrl: string;
  slug: string;
  featured?: boolean;
}

interface BentoGridProps {
  projects: BentoProject[];
}

const BentoGrid: React.FC<BentoGridProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => {
        // Featured projects get larger cards
        const isFeatured = project.featured;
        const gridClass = isFeatured && index < 2
          ? "md:col-span-2 lg:col-span-2"
          : "md:col-span-1";

        return (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-gray-200/50 dark:border-gray-700/50 hover:border-marrsgreen/50 dark:hover:border-carrigreen/50 transition-all duration-500 hover:shadow-2xl hover:shadow-marrsgreen/10 dark:hover:shadow-carrigreen/10 ${gridClass}`}
          >
            {/* Featured Badge */}
            {isFeatured && (
              <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-marrsgreen to-marrsgreen/80 dark:from-carrigreen dark:to-carrigreen/80 text-white text-xs font-bold rounded-full">
                FEATURED
              </div>
            )}

            {/* Project Type */}
            <div className="text-sm font-semibold text-marrsgreen dark:text-carrigreen mb-2">
              {project.type}
            </div>

            {/* Project Title */}
            <h3 className={`font-bold text-gray-900 dark:text-white mb-3 group-hover:text-marrsgreen dark:group-hover:text-carrigreen transition-colors ${
              isFeatured ? "text-2xl lg:text-3xl" : "text-xl"
            }`}>
              {project.title}
            </h3>

            {/* Project Description */}
            <p className={`text-gray-600 dark:text-gray-400 mb-4 leading-relaxed ${
              isFeatured ? "line-clamp-3" : "line-clamp-2"
            }`}>
              {project.desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.slice(0, isFeatured ? 5 : 3).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-lg"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > (isFeatured ? 5 : 3) && (
                <span className="px-3 py-1 text-gray-500 dark:text-gray-400 text-xs font-medium">
                  +{project.tags.length - (isFeatured ? 5 : 3)}
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/projects/${project.slug}`}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-marrsgreen to-marrsgreen/80 dark:from-carrigreen dark:to-carrigreen/80 text-white rounded-lg hover:shadow-lg hover:shadow-marrsgreen/30 dark:hover:shadow-carrigreen/30 transition-all duration-300 text-sm font-medium"
              >
                View Case Study
                <ArrowRight className="w-4 h-4" />
              </Link>

              {project.liveUrl !== "#" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 text-sm font-medium"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-4 h-4" />
                  Live
                </a>
              )}

              {project.codeUrl !== "#" && (
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 text-sm font-medium"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default BentoGrid;
