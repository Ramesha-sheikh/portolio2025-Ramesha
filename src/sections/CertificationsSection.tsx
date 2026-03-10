"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useSection } from "../context/section";
import useOnScreen from "@/hooks/useOnScreen";
import useScrollActive from "@/hooks/useScrollActive";

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
}

const CertificationsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLDivElement>(null);
  const isSecOnScreen = useOnScreen(elementRef);
  const { theme } = useTheme();
  const certSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const certificates: Certificate[] = [
    {
      id: 1,
      title: "Agentic AI Level 1 Developer",
      issuer: "Presidential Initiative for AI & Computing",
      date: "January 30, 2026",
      image: "/agentic ai level 1 exam  certification.jpg",
      certificateNo: "202603025261",
      description: "Certified in building autonomous AI agents and agentic systems with multi-agent orchestration capabilities.",
      skills: ["Agentic AI", "Multi-Agent Systems", "AI Orchestration"],
      icon: "🤖",
    },
    {
      id: 2,
      title: "Agentic AI Professional Level 2 Developer",
      issuer: "Presidential Initiative for AI & Computing",
      date: "January 30, 2026",
      image: "/agentic ai professioanl level 02 exam certification.jpg",
      certificateNo: "202603025261",
      description: "Advanced certification in professional-grade agentic AI development and production AI systems architecture.",
      skills: ["Advanced AI Agents", "Production Systems", "AI Architecture"],
      icon: "🚀",
    },
    {
      id: 3,
      title: "Prompt and Context Engineering: Level 1 Developer",
      issuer: "Presidential Initiative for AI & Computing",
      date: "January 30, 2026",
      image: "/prompt eng certification .jpg",
      certificateNo: "202603025261",
      description: "Expert in prompt engineering and context management for AI systems with advanced communication strategies.",
      skills: ["Prompt Engineering", "Context Design", "AI Communication"],
      icon: "💡",
    },
    {
      id: 4,
      title: "From Freelancers to Founder 3.0",
      issuer: "Pakistan Freelancers Association (PAFLA)",
      date: "August 18, 2025",
      image: "/pafla certification.jpg",
      certificateNo: "NIC - Karachi",
      description: "Building digital reputation engine for global opportunities with entrepreneurship and business development skills.",
      skills: ["Entrepreneurship", "Business Development", "Digital Marketing"],
      icon: "🎯",
    },
    {
      id: 5,
      title: "Microsoft Certification",
      issuer: "Microsoft",
      date: "2025",
      image: "/certification/microsoft certifaction.jpg",
      certificateNo: "MS-CERT-2025",
      description: "Microsoft certified professional with expertise in cloud technologies and modern development tools.",
      skills: ["Cloud Computing", "Microsoft Technologies", "Azure"],
      icon: "🪟",
    },
    {
      id: 6,
      title: "PIAIC Agent Factory",
      issuer: "Presidential Initiative for AI & Computing",
      date: "2026",
      image: "/certification/piaic agent factory.jpg",
      certificateNo: "PIAIC-AF-2026",
      description: "Specialized certification in AI agent factory systems and autonomous agent development.",
      skills: ["Agent Factory", "Autonomous Agents", "AI Development"],
      icon: "🤖",
    },
    {
      id: 7,
      title: "Prompt Engineering Result",
      issuer: "Presidential Initiative for AI & Computing",
      date: "2026",
      image: "/certification/prompt eng result.jpg",
      certificateNo: "PIAIC-PE-2026",
      description: "Advanced prompt engineering techniques and best practices for AI systems.",
      skills: ["Prompt Design", "AI Optimization", "LLM Tuning"],
      icon: "✨",
    },
    {
      id: 8,
      title: "Skills Certification",
      issuer: "Presidential Initiative for AI & Computing",
      date: "2026",
      image: "/certification/skills certification.jpg",
      certificateNo: "PIAIC-SK-2026",
      description: "Comprehensive skills certification covering multiple domains of AI and software development.",
      skills: ["Full Stack", "AI Integration", "Software Architecture"],
      icon: "📜",
    },
    {
      id: 9,
      title: "Achievement Certificate",
      issuer: "Presidential Initiative for AI & Computing",
      date: "2026",
      image: "/certification/result.jpg",
      certificateNo: "PIAIC-ACH-2026",
      description: "Recognition of outstanding achievement in AI development and technical excellence.",
      skills: ["Technical Excellence", "Innovation", "Leadership"],
      icon: "🏆",
    },
  ];

  // Auto-play slider
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % certificates.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, certificates.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % certificates.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + certificates.length) % certificates.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="section bg-gradient-to-b from-white via-emerald-50/20 to-white dark:from-[#0a1f1c] dark:via-[#0d2b27] dark:to-[#1B2731] relative overflow-hidden"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 opacity-30 dark:opacity-50">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-teal-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Section Header */}
      <motion.div
        ref={elementRef}
        className="text-center mb-10 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 mb-5 rounded-full bg-emerald-100/80 dark:bg-emerald-900/30 border border-emerald-500/30 backdrop-blur-sm"
        >
          <span className="text-xl">🏆</span>
          <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide">
            Professional Certifications
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-black mb-3"
        >
          <span className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
            Certifications & Achievements
          </span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          Validated expertise in AI development and agentic systems
        </motion.p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {[
          { icon: "🎓", value: "9", label: "Certifications" },
          { icon: "🏢", value: "2", label: "Institutions" },
          { icon: "⭐", value: "2026", label: "Latest Year" },
          { icon: "🔥", value: "100%", label: "Pass Rate" },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index, type: "spring" }}
            whileHover={{ scale: 1.05, y: -3 }}
            className="p-4 rounded-xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border border-emerald-500/20 dark:border-emerald-400/20 text-center shadow-md hover:shadow-lg transition-all"
          >
            <div className="text-2xl mb-1">{stat.icon}</div>
            <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mb-0.5">
              {stat.value}
            </div>
            <div className="text-xs font-medium text-gray-600 dark:text-gray-400">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Compact Slider */}
      <div className="relative mb-12 max-w-5xl mx-auto">
        <div className="overflow-hidden rounded-2xl shadow-xl shadow-emerald-500/10">
          <motion.div
            className="flex"
            animate={{ x: `-${currentSlide * 100}%` }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            {certificates.map((cert, index) => (
              <div key={cert.id} className="w-full flex-shrink-0">
                <div className="p-3 sm:p-4">
                  <motion.div
                    className="relative rounded-xl overflow-hidden bg-white dark:bg-gray-900 border border-emerald-500/20 dark:border-emerald-400/20 shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedCert(cert)}
                  >
                    {/* Image Container */}
                    <div className="relative aspect-[16/9] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                        className="object-cover"
                        priority={index < 2}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.background = "linear-gradient(135deg, #10b981 0%, #059669 100%)";
                          target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450'%3E%3Crect fill='%2310b981' width='800' height='450'/%3E%3Ccircle cx='400' cy='180' r='60' fill='white' fill-opacity='0.2'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='white' font-weight='bold'%3E📜%3C/text%3E%3Ctext x='50%25' y='60%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='white' fill-opacity='0.8'%3ECertificate%3C/text%3E%3C/svg%3E";
                        }}
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-2xl shadow-lg flex-shrink-0">
                            {cert.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base sm:text-lg font-bold text-white truncate">
                              {cert.title}
                            </h3>
                            <p className="text-xs text-gray-300 truncate">
                              {cert.issuer}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-gray-300 flex items-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {cert.date}
                          </span>
                          <span className="text-xs text-emerald-400 font-bold flex items-center gap-1 bg-emerald-500/20 px-2.5 py-1 rounded-full">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Verified
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/95 dark:bg-gray-900/95 backdrop-blur rounded-full flex items-center justify-center shadow-lg hover:bg-emerald-500 dark:hover:bg-emerald-600 hover:text-white transition-all z-10 border border-emerald-500/30"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/95 dark:bg-gray-900/95 backdrop-blur rounded-full flex items-center justify-center shadow-lg hover:bg-emerald-500 dark:hover:bg-emerald-600 hover:text-white transition-all z-10 border border-emerald-500/30"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 mt-4">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index
                  ? "w-6 h-2 bg-emerald-500"
                  : "w-2 h-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        {isAutoPlaying && (
          <div className="flex justify-center mt-3">
            <div className="w-32 h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>
        )}
      </div>

      {/* All Certificates Grid */}
      <div className="mb-8">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl font-bold text-center mb-6 text-gray-900 dark:text-white"
        >
          All Certifications
        </motion.h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ y: 30, opacity: 0, scale: 0.95 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              onClick={() => setSelectedCert(cert)}
              className="cursor-pointer group"
            >
              <div className="relative rounded-xl overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-emerald-500/20 dark:border-emerald-400/20 shadow-md hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300 hover:scale-105">
                {/* Image */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    priority={index < 8}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.background = "linear-gradient(135deg, #10b981 0%, #059669 100%)";
                      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%2310b981' width='400' height='300'/%3E%3Ccircle cx='200' cy='120' r='40' fill='white' fill-opacity='0.2'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='18' fill='white' font-weight='bold'%3E📜%3C/text%3E%3Ctext x='50%25' y='65%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='14' fill='white' fill-opacity='0.8'%3ECertificate%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Info */}
                <div className="p-2.5">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-7 h-7 rounded-md bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-base flex-shrink-0">
                      {cert.icon}
                    </div>
                    <h4 className="text-xs font-bold text-gray-900 dark:text-white line-clamp-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {cert.title}
                    </h4>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-1.5 line-clamp-1">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-500 font-medium">
                      {cert.date}
                    </span>
                    <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                      <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Verified
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-3 right-3 z-20 w-9 h-9 bg-white/95 dark:bg-gray-800/95 backdrop-blur rounded-full flex items-center justify-center shadow-lg hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 transition-colors border border-emerald-500/30"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Certificate Image */}
              <div className="relative aspect-[16/9] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover rounded-t-2xl"
                  priority
                  quality={100}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.background = "linear-gradient(135deg, #10b981 0%, #059669 100%)";
                    target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450'%3E%3Crect fill='%2310b981' width='800' height='450'/%3E%3Ccircle cx='400' cy='180' r='60' fill='white' fill-opacity='0.2'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='white' font-weight='bold'%3E📜%3C/text%3E%3Ctext x='50%25' y='60%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='white' fill-opacity='0.8'%3ECertificate%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>

              {/* Details */}
              <div className="p-5 sm:p-6">
                {/* Header */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-3xl flex-shrink-0 shadow-lg">
                    {selectedCert.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mb-1.5">
                      {selectedCert.title}
                    </h3>
                    <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                      {selectedCert.issuer}
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded-full">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {selectedCert.date}
                      </span>
                      <span className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-100 dark:bg-emerald-900/30 px-2.5 py-1 rounded-full border border-emerald-500/30">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {selectedCert.certificateNo}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-5 p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                  <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wide mb-1.5">
                    About This Certification
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {selectedCert.description}
                  </p>
                </div>

                {/* Skills */}
                <div className="mb-5">
                  <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wide mb-2">
                    Skills Validated
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs font-bold bg-emerald-100/80 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-lg border border-emerald-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-5 border-t border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg">
                    <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>This certification is <strong className="text-emerald-600 dark:text-emerald-400">verified and authentic</strong></span>
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

export default CertificationsSection;
