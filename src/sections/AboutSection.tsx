"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useSection } from "../context/section";
import useOnScreen from "@/hooks/useOnScreen";
import useScrollActive from "@/hooks/useScrollActive";
import satNaing from "../../public/rmm.jpg";
import AboutBgSvg from "@/components/AboutBgSvg";
import EduGroup from "@/components/EduGroup";

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isSecOnScreen = useOnScreen(sectionRef);
  const { theme } = useTheme();
  const aboutSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();

  useEffect(() => {
    if (onSectionChange) {
      aboutSection ? onSectionChange("who am i?") : onSectionChange("");
    }
  }, [aboutSection, onSectionChange]);

  return (
    <div
      ref={sectionRef}
      className="about-panel bg-white dark:bg-[#1B2731] relative"
    >
      <section id="whoami" className="section">
        <div className="text-center">
          {/* Animated heading with underline effect */}
          <motion.h2
            className="section-heading inline-block relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Who am I?
            <motion.span
              className="absolute left-0 bottom-0 w-full h-[3px]"
              style={{
                backgroundColor:
                  theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)",
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            />
          </motion.h2>
        </div>

        <div className="md:grid grid-rows-5 lg:grid-rows-6 grid-cols-5">
          {/* Profile Image */}
          <motion.div
            className="col-start-1 col-end-3 row-start-1 row-end-4 lg:row-end-7 lg:col-start-1 lg:col-end-3 flex justify-center items-center py-4 lg:mb-[20%]"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-72">
              <div className="profile-picture overflow-hidden md:overflow-visible rounded-md md:shadow-2xl">
                <Image
                  src={satNaing}
                  width={1700}
                  height={1790}
                  priority
                  alt="ramesha profile picture"
                  className="rounded-md"
                />
              </div>
            </div>
          </motion.div>

          {/* About Intro */}
          <motion.p
            className="col-start-1 col-end-4 row-start-3 row-end-6 lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-6 lg:ml-8 lg:mt-auto about-intro"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            I&apos;m an <strong>Agentic AI Engineer & Full-Stack Developer</strong> specializing in
            autonomous AI systems, multi-agent orchestration, and production-grade AI deployments.
            As the <strong>Founder & CEO of VisionDX AI</strong>, I&apos;m building next-generation
            medical imaging diagnostics powered by AI.
            <br /><br />
            My expertise spans <strong>OpenAI Agents SDK, Gemini API, RAG systems with Qdrant</strong>,
            and deploying intelligent solutions using <strong>Python, TypeScript, Next.js</strong>, and
            cloud-native architectures with <strong>Kubernetes & Docker</strong>. I&apos;ve successfully
            delivered projects ranging from 24/7 AI CRM employees to medical AI platforms analyzing
            25+ imaging types, bridging cutting-edge AI research with real-world production systems.
          </motion.p>

          {/* Education */}
          <motion.div
            className="col-start-3 col-end-6 row-start-1 row-end-6 lg:row-start-2 lg:row-end-7 md:ml-8 place-content-end"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <p className="edu-bg my-4">Here is my educational background.</p>
            {educationInfo.map((edu) => (
              <EduGroup edu={edu} key={edu.id} />
            ))}
          </motion.div>
        </div>
      </section>

      <AboutBgSvg />
    </div>
  );
};

const educationInfo = [
  {
    id: 1,
    title: "Certified Agentic & Robotic AI Engineer",
    subTitle: "PIAIC - Presidential Initiative for AI & Computing | Q4 Ongoing",
    list: [
      "Multi-Agent Orchestration & MCP Servers",
      "Spec-Kit Framework & Agentic Systems",
      "Production AI Deployment & Cloud Architecture"
    ],
  },
  {
    id: 2,
    title: "Full Stack + Agentic AI Specialization",
    subTitle: "Governor Sindh Initiative (GIAIC) | 2024 - Present",
    list: [
      "Advanced Agentic AI Development",
      "RAG Systems & Vector Databases",
      "OpenAI Agents SDK & Gemini API"
    ],
  },
  {
    id: 3,
    title: "Bachelor's Degree in Computer Science",
    subTitle: "University of Karachi | 2019 - 2022",
    list: ["Foundation in Computer Science & Software Engineering"],
  },
  {
    id: 4,
    title: "Hackathon Achievements",
    subTitle: "Multiple AI Hackathons | 2025-2026",
    list: [
      "Physical AI Textbook with RAG (Nov 2025)",
      "Personal AI Employee System (Jan-Feb 2026)",
      "CRM Digital FTE Factory (Feb 2026)"
    ],
  },
];

export default AboutSection;
