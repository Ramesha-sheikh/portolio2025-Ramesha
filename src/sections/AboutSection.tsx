"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useSection } from "../context/section";
import useOnScreen from "@/hooks/useOnScreen";
import useScrollActive from "@/hooks/useScrollActive";
import satNaing from "@/public/rmm.jpg";
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
           
            I&apos;m a skilled full-stack developer with 4+ years of experience in HTML, CSS,
             TypeScript, Next.js, Node.js, and React.
             Since February 2024, I&apos;ve been enhancing my expertise at GIAIC and PIAIC, 
         focusing on Agentic AI and workflow automation with n8n. My work spans from
           e-commerce platforms to AI-driven chatbots, delivering scalable and innovative
      solutions that bridge full-stack development with advanced AI technologies.
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
    title: "Bachelor's Degree",
    subTitle: "University of Karachi | 2019 - 2022",
    list: ["Graduated in Computer Science"],
  },
  {
    id: 2,
    title: "Diploma in Information Technology",
    subTitle: "DIT Form, Korean Computer Academy | 2022",
    list: ["Completed Diploma in IT"],
  },
  {
    id: 3,
    title: "Governor House AI Initiative",
    subTitle: "Governor House, Sindh, Karachi | Quarter 4 Agentic AI",
    list: ["Participated in AI-focused initiatives"],
  },
  {
    id: 4,
    title: "PIAIC - Presidential Initiative for AI & Computing",
    subTitle: "Quarter 3 (Agentic AI) | Current",
    list: ["Learning Agentic AI, n8n automation, and full-stack development"],
  },
];

export default AboutSection;
