"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useSection } from "../context/section";
import useOnScreen from "@/hooks/useOnScreen";
import useScrollActive from "@/hooks/useScrollActive";
import GlowCard from "@/components/GlowCard";

const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);
  const { theme } = useTheme();

  const skillsSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();

  useEffect(() => {
    if (onSectionChange) {
      skillsSection ? onSectionChange("skills") : onSectionChange("");
    }
  }, [skillsSection, onSectionChange]);

  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: ["Python", "TypeScript", "JavaScript (ES6+)", "Next.js", "Node.js", "Tailwind CSS", "Sanity CMS"],
      icon: "💻"
    },
    {
      title: "AI-Native & Agentic Systems",
      skills: ["Spec-Kit Framework", "Gemini CLI", "MCP Server", "Multi-Agent Orchestration", "HITL Patterns", "OpenAI SDK", "Gemini API", "Claude 3.5", "Pydantic"],
      icon: "🤖"
    },
    {
      title: "RAG & Vector Databases",
      skills: ["RAG", "Vector Embeddings", "Qdrant", "pgvector", "Cohere", "Semantic Search", "Document Processing"],
      icon: "🔍"
    },
    {
      title: "Backend & Cloud",
      skills: ["FastAPI", "SQLModel", "RESTful APIs", "Firebase", "Gmail API", "Twilio WhatsApp API", "Hugging Face", "Google Cloud Platform", "Serverless"],
      icon: "☁️"
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "Neon PostgreSQL", "Firebase Firestore", "SQLite"],
      icon: "🗄️"
    },
    {
      title: "DevOps / AI Deployment",
      skills: ["Docker", "Kubernetes", "Helm Charts", "Kafka", "Dapr"],
      icon: "🚀"
    },
    {
      title: "Auth & Tools",
      skills: ["Better Auth", "JWT", "Docusaurus", "GitHub Pages", "Vercel", "Netlify", "Git/GitHub", "Figma"],
      icon: "🔐"
    }
  ];

  return (
    <section ref={sectionRef} id="skills" className="section">
      {/* Title */}
      <motion.div
        ref={elementRef}
        className="text-center relative"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="section-heading relative inline-block">
          Technical Skills
          <motion.span
            className="absolute left-0 -bottom-2 h-[3px] w-full"
            style={{
              backgroundColor:
                theme === "light" ? "rgb(0, 122, 122)" : "rgb(5, 206, 145)",
            }}
            initial={{ scaleX: 0 }}
            animate={isOnScreen ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </h2>
      </motion.div>

      <motion.p
        className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        Expertise in cutting-edge AI technologies, full-stack development, and cloud-native architectures
      </motion.p>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <GlowCard className="h-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-marrsgreen/10 dark:bg-carrigreen/10 text-marrsgreen dark:text-carrigreen rounded-full border border-marrsgreen/20 dark:border-carrigreen/20 hover:bg-marrsgreen/20 dark:hover:bg-carrigreen/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>

      {/* Achievement Stats */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        {[
          { label: "Projects Deployed", value: "25+" },
          { label: "Community Members", value: "500+" },
          { label: "Hackathons", value: "4" },
          { label: "Users Impacted", value: "50K+" }
        ].map((stat, index) => (
          <GlowCard
            key={stat.label}
            className="text-center p-6 bg-gradient-to-br from-marrsgreen/5 to-transparent dark:from-carrigreen/5"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <div className="text-4xl font-bold text-marrsgreen dark:text-carrigreen mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          </GlowCard>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;
