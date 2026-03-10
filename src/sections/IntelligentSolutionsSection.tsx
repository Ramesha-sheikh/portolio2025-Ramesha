"use client";
import { motion } from "framer-motion";
import { Brain, Code, Palette, Sparkles } from "lucide-react";

const IntelligentSolutionsSection: React.FC = () => {
  // Container animation for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const solutions = [
    {
      icon: Brain,
      title: "AGENTIC AI & CHATBOTS",
      description: "Intelligent conversational AI systems that understand, learn, and adapt to user needs",
      features: [
        "Advanced Natural Language Processing",
        "Custom AI Workflow Automation",
        "Conversational Interface Design",
        "Enterprise AI API Integration",
        "Intelligent Decision Making Systems",
      ],
      featured: false,
    },
    {
      icon: Code,
      title: "FULL-STACK DEVELOPMENT",
      description: "Scalable, high-performance web applications built with modern technologies",
      features: [
        "Next.js, React.js & TypeScript",
        "Node.js Backend Architecture",
        "Database Design & API Development",
        "Cloud Deployment & DevOps",
        "Performance & SEO Optimization",
      ],
      featured: true,
    },
    {
      icon: Palette,
      title: "UI/UX DESIGN & SEO OPTIMIZATION",
      description: "Beautiful, intuitive interfaces optimized for search engines and user experience",
      features: [
        "Mobile-First Responsive Design",
        "Advanced SEO & Performance",
        "User Experience Research",
        "Accessibility & WCAG Compliance",
        "Analytics & Conversion Optimization",
      ],
      featured: false,
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a3d3d] via-[#0d4a4a] to-[#0a3030] overflow-hidden">
      {/* Background Tech Icons */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/50 to-transparent opacity-20">
        <div className="flex justify-center gap-8 text-gray-500">
          {/* Tech stack icons placeholder */}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Professional Services
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white block">INTELLIGENT</span>
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent block">
              SOLUTIONS I BUILD
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-transparent mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Combining cutting-edge AI with modern web development to deliver exceptional digital experiences
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`relative group ${
                solution.featured
                  ? "lg:-mt-8 lg:mb-8"
                  : ""
              }`}
            >
              <div
                className={`h-full rounded-3xl p-8 transition-all duration-500 ${
                  solution.featured
                    ? "bg-gradient-to-b from-emerald-500 to-emerald-600 text-white shadow-2xl shadow-emerald-500/30"
                    : "bg-white/5 backdrop-blur-xl border border-white/10 hover:border-emerald-400/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-emerald-500/20"
                }`}
              >
                {/* Icon with rotation animation on hover */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    solution.featured
                      ? "bg-white/20 backdrop-blur-sm"
                      : "bg-emerald-400/10"
                  }`}
                >
                  <solution.icon
                    className={`w-8 h-8 ${
                      solution.featured ? "text-white" : "text-emerald-400"
                    }`}
                  />
                </motion.div>

                {/* Title */}
                <h3
                  className={`text-2xl font-bold mb-4 ${
                    solution.featured ? "text-white" : "text-white"
                  }`}
                >
                  {solution.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-base mb-6 ${
                    solution.featured
                      ? "text-white/90"
                      : "text-gray-400"
                  }`}
                >
                  {solution.description}
                </p>

                {/* Features List with stagger animation */}
                <ul className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + featureIndex * 0.05 }}
                      className={`flex items-start gap-3 text-sm ${
                        solution.featured
                          ? "text-white/90"
                          : "text-gray-400"
                      }`}
                    >
                      <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.05 + 0.1 }}
                        className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                          solution.featured
                            ? "bg-white/80"
                            : "bg-emerald-400"
                        }`}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IntelligentSolutionsSection;
