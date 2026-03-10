"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, X, Sparkles } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What coding standards do you follow for robust development?",
      answer: "I follow industry-best practices including clean code principles, SOLID design patterns, and comprehensive testing. I use TypeScript for type safety, implement proper error handling, maintain consistent code formatting with Prettier and ESLint, and document all critical functions. I also follow Git best practices with meaningful commit messages and pull request workflows.",
    },
    {
      question: "How do you ensure optimal performance for web applications?",
      answer: "Performance optimization is built into every stage of development. I implement server-side rendering (SSR) and static site generation (SSG) with Next.js, optimize images with modern formats (WebP, AVIF), use lazy loading for components, implement efficient caching strategies, minimize bundle sizes with code splitting, and leverage CDNs for global delivery. I also conduct regular performance audits using Lighthouse and WebPageTest.",
    },
    {
      question: "What is your approach to Search Engine Optimization (SEO) in web development?",
      answer: "SEO is integrated from the ground up, not added as an afterthought. I implement proper semantic HTML structure, optimize meta tags and Open Graph data, ensure mobile-first responsive design, create XML sitemaps and robots.txt, implement structured data (Schema.org), optimize page load speeds, and ensure proper internal linking. I also focus on creating high-quality, accessible content that ranks well organically.",
    },
    {
      question: "What technologies do you specialize in for AI-powered applications?",
      answer: "I specialize in cutting-edge AI technologies including Agentic AI systems, multi-agent orchestration, RAG (Retrieval-Augmented Generation) pipelines, and autonomous AI agents. My stack includes Python, FastAPI, LangChain, OpenAI SDK, Gemini API, vector databases (Qdrant, pgvector), and modern frontend frameworks like Next.js and React for building intuitive AI interfaces.",
    },
    {
      question: "What is your typical project timeline and development process?",
      answer: "Project timelines vary based on complexity, but I follow an agile development methodology with clear milestones. A typical project includes: Discovery & Requirements (1-2 weeks), Design & Prototyping (1-2 weeks), Development Sprints (2-6 weeks), Testing & QA (1-2 weeks), and Deployment & Support (ongoing). I maintain transparent communication throughout with regular updates and demos.",
    },
    {
      question: "Do you provide post-launch support and maintenance?",
      answer: "Yes! I offer comprehensive post-launch support including monitoring, bug fixes, performance optimization, security updates, and feature enhancements. I believe in building long-term partnerships with clients to ensure their applications evolve with their business needs and stay current with technological advancements.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a3030] via-[#0a3d3d] to-[#0d4a4a] overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
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
            FAQ
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white block">FREQUENTLY</span>
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent block">
              ASKED QUESTIONS.
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Deep dive into our development practices, methodologies, and technical expertise.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div
                className={`rounded-2xl border transition-all duration-300 ${
                  openIndex === index
                    ? "bg-white/10 border-emerald-400/30"
                    : "bg-white/5 border-white/10 hover:border-emerald-400/20"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-lg font-medium text-white pr-8">
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openIndex === index
                        ? "bg-emerald-500 text-white rotate-45"
                        : "bg-white/10 text-emerald-400 group-hover:bg-emerald-500/20"
                    }`}
                  >
                    {openIndex === index ? (
                      <X className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
