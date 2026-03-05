"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useSection } from "../context/section";
import useOnScreen from "@/hooks/useOnScreen";
import useScrollActive from "@/hooks/useScrollActive";
import GlowCard from "@/components/GlowCard";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  certificateNo: string;
  description: string;
  skills: string[];
  icon: string;
  gradient: string;
}

const CertificationsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLDivElement>(null);
  const isSecOnScreen = useOnScreen(elementRef);
  const { theme } = useTheme();
  const certSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  useEffect(() => {
    if (onSectionChange) {
      certSection ? onSectionChange("certifications") : onSectionChange("");
    }
  }, [certSection, onSectionChange]);

  const certificates: Certificate[] = [
    {
      id: 1,
      title: "Agentic AI Level 1 Developer",
      issuer: "Presidential Initiative for AI & Computing",
      date: "January 30, 2026",
      image: "/agentic ai level 1 exam  certification.jpg",
      certificateNo: "202603025261",
      description: "Certified in building autonomous AI agents and agentic systems",
      skills: ["Agentic AI", "Multi-Agent Systems", "AI Orchestration"],
      icon: "🤖",
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      id: 2,
      title: "Agentic AI Professional Level 2 Developer",
      issuer: "Presidential Initiative for AI & Computing",
      date: "January 30, 2026",
      image: "/agentic ai professioanl level 02 exam certification.jpg",
      certificateNo: "202603025261",
      description: "Advanced certification in professional-grade agentic AI development",
      skills: ["Advanced AI Agents", "Production Systems", "AI Architecture"],
      icon: "🚀",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: 3,
      title: "Prompt and Context Engineering: Level 1 Developer",
      issuer: "Presidential Initiative for AI & Computing",
      date: "January 30, 2026",
      image: "/prompt eng certification .jpg",
      certificateNo: "202603025261",
      description: "Expert in prompt engineering and context management for AI systems",
      skills: ["Prompt Engineering", "Context Design", "AI Communication"],
      icon: "💡",
      gradient: "from-green-500/20 to-teal-500/20"
    },
    {
      id: 4,
      title: "From Freelancers to Founder 3.0",
      issuer: "Pakistan Freelancers Association (PAFLA)",
      date: "August 18, 2025",
      image: "/pafla certification.jpg",
      certificateNo: "NIC - Karachi",
      description: "Building digital reputation engine for global opportunities",
      skills: ["Entrepreneurship", "Business Development", "Digital Marketing"],
      icon: "🎯",
      gradient: "from-orange-500/20 to-yellow-500/20"
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="section bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-[#1B2731] relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,122,122,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,122,122,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(5,206,145,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(5,206,145,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />

      {/* Section Title */}
      <motion.div
        ref={elementRef}
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 mb-6 rounded-full bg-gradient-to-r from-marrsgreen/10 via-marrsgreen/5 to-transparent dark:from-carrigreen/10 dark:via-carrigreen/5 border border-marrsgreen/20 dark:border-carrigreen/20 backdrop-blur-sm">
          <span className="text-2xl">🏆</span>
          <span className="text-sm font-semibold text-marrsgreen dark:text-carrigreen">
            Professional Certifications
          </span>
        </div>

        <h2 className="section-heading relative inline-block mb-4">
          <span className="gradient-text-green">Certifications & Achievements</span>
          <motion.span
            className="absolute left-0 -bottom-2 h-1 w-full rounded-full"
            style={{
              backgroundColor:
                theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)",
            }}
            initial={{ scaleX: 0 }}
            animate={isSecOnScreen ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Validated expertise in AI development, agentic systems, and entrepreneurship
        </p>
      </motion.div>

      {/* Stats Overview */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {[
          { icon: "🎓", value: "4", label: "Certifications" },
          { icon: "🏢", value: "2", label: "Institutions" },
          { icon: "⭐", value: "2026", label: "Latest Year" },
          { icon: "🔥", value: "100%", label: "Pass Rate" },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
          >
            <GlowCard className="p-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-center">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-marrsgreen dark:text-carrigreen mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </motion.div>

      {/* Certificates Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            onClick={() => setSelectedCert(cert)}
            className="cursor-pointer group"
          >
            <GlowCard className="h-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
              {/* Certificate Image - Fixed Aspect Ratio */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900">
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                  priority={index < 2}
                />
                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-center justify-center"
                >
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/50 dark:border-gray-800/50 shadow-2xl"
                  >
                    <span className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View Full Certificate
                    </span>
                  </motion.div>
                </motion.div>
              </div>

              {/* Certificate Info */}
              <div className="p-6 space-y-4">
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-marrsgreen/20 to-marrsgreen/10 dark:from-carrigreen/20 dark:to-carrigreen/10 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-marrsgreen dark:group-hover:text-carrigreen transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {cert.date}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                  {cert.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium bg-marrsgreen/10 dark:bg-carrigreen/10 text-marrsgreen dark:text-carrigreen rounded-full border border-marrsgreen/20 dark:border-carrigreen/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Certificate Number */}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
                  <div className="text-xs text-gray-500 dark:text-gray-500">
                    Certificate No: <span className="font-mono">{cert.certificateNo}</span>
                  </div>
                  <div className="flex items-center gap-1 text-marrsgreen dark:text-carrigreen">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs font-semibold">Verified</span>
                  </div>
                </div>
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>

      {/* Enhanced Modal for Full Certificate View */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-2xl z-[100] flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.85, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.85, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Enhanced Close Button */}
              <motion.button
                onClick={() => setSelectedCert(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-full flex items-center justify-center shadow-xl hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors border border-gray-200 dark:border-gray-700"
              >
                <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Certificate Image - Premium Display */}
              <div className="relative aspect-[16/10] bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedCert.gradient} opacity-20 blur-3xl`} />
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-contain p-8 sm:p-12"
                  priority
                  quality={100}
                />
              </div>

              {/* Certificate Details - Modern Card */}
              <div className="p-8 sm:p-10 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 border-t-2 border-marrsgreen/20 dark:border-carrigreen/20">
                <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
                  {/* Icon Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-20 h-20 bg-gradient-to-br from-marrsgreen/20 via-marrsgreen/10 to-transparent dark:from-carrigreen/20 dark:via-carrigreen/10 rounded-2xl flex items-center justify-center text-5xl border-2 border-marrsgreen/30 dark:border-carrigreen/30 shadow-lg"
                  >
                    {selectedCert.icon}
                  </motion.div>

                  {/* Title & Details */}
                  <div className="flex-1">
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-3 leading-tight"
                    >
                      {selectedCert.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 }}
                      className="text-lg font-semibold text-marrsgreen dark:text-carrigreen mb-3"
                    >
                      {selectedCert.issuer}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <span className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {selectedCert.date}
                      </span>
                      <span className="flex items-center gap-2 bg-marrsgreen/10 dark:bg-carrigreen/10 text-marrsgreen dark:text-carrigreen px-4 py-2 rounded-full font-medium border border-marrsgreen/20 dark:border-carrigreen/20">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Verified • {selectedCert.certificateNo}
                      </span>
                    </motion.div>
                  </div>
                </div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
                >
                  {selectedCert.description}
                </motion.p>

                {/* Skills Tags */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-3"
                >
                  {selectedCert.skills.map((skill, idx) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.35 + idx * 0.05 }}
                      className="px-5 py-2.5 text-sm font-bold bg-marrsgreen/10 dark:bg-carrigreen/10 text-marrsgreen dark:text-carrigreen rounded-xl border-2 border-marrsgreen/30 dark:border-carrigreen/30 hover:scale-105 transition-transform shadow-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom CTA */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-marrsgreen/5 to-transparent dark:from-carrigreen/5 rounded-2xl border border-marrsgreen/20 dark:border-carrigreen/20">
          <svg className="w-6 h-6 text-marrsgreen dark:text-carrigreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-gray-700 dark:text-gray-300">
            All certifications are <strong className="text-marrsgreen dark:text-carrigreen">verified</strong> and up-to-date
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default CertificationsSection;
