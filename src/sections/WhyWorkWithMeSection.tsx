"use client";
import { motion } from "framer-motion";
import { Brain, Rocket, Headphones, Sparkles } from "lucide-react";

const WhyWorkWithMeSection: React.FC = () => {
  const advantages = [
    {
      number: "[1]",
      icon: Brain,
      title: "ADVANCED AI INTEGRATION",
      description: "We specialize in crafting cutting-edge AI agents and chatbots using Next.js and React.js, delivering intelligent solutions tailored to your business needs.",
      featured: false,
    },
    {
      number: "[2]",
      icon: Rocket,
      title: "OPTIMIZED FOR PERFORMANCE & SCALABILITY",
      description: "Our applications are meticulously optimized for speed, performance, and future growth, ensuring fast load times and a seamless user experience on any device.",
      featured: true,
    },
    {
      number: "[3]",
      icon: Headphones,
      title: "DEDICATED SUPPORT & EVOLUTION",
      description: "We offer comprehensive support and continuous maintenance, ensuring your web solutions remain up-to-date, secure, and ready to adapt to future technological advancements.",
      featured: false,
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-[#0d4a4a] dark:to-[#0a3d3d]">
      <div className="max-w-7xl mx-auto">
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
            Why Choose Us
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gray-900 dark:text-gray-100 block">WHY WORK</span>
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent block">
              WITH ME?
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-transparent mx-auto mb-6 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Discover the unique advantages and expertise that set us apart in delivering cutting-edge AI solutions, 
            modern web development, and exceptional client experiences tailored to your business.
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div
                className={`h-full rounded-3xl p-8 text-center transition-all duration-500 ${
                  advantage.featured
                    ? "bg-gradient-to-b from-emerald-500 to-emerald-600 text-white shadow-2xl shadow-emerald-500/30 scale-105 lg:-mt-8 lg:mb-8"
                    : "bg-white dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 hover:border-emerald-400/30 hover:shadow-2xl hover:shadow-emerald-500/20"
                }`}
              >
                {/* Number Badge with pulse animation */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                  className={`text-2xl font-bold mb-4 ${
                    advantage.featured ? "text-white" : "text-emerald-400"
                  }`}
                >
                  {advantage.number}
                </motion.div>

                {/* Icon with float animation */}
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                  whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 ${
                    advantage.featured
                      ? "bg-white/20 backdrop-blur-sm"
                      : "bg-emerald-400/10"
                  }`}
                >
                  <advantage.icon
                    className={`w-8 h-8 ${
                      advantage.featured ? "text-white" : "text-emerald-400"
                    }`}
                  />
                </motion.div>

                {/* Title with slide-in animation */}
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                  className={`text-xl font-bold mb-4 ${
                    advantage.featured ? "text-white" : "text-gray-900 dark:text-white"
                  }`}
                >
                  {advantage.title}
                </motion.h3>

                {/* Description with fade-in animation */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
                  className={`text-base leading-relaxed ${
                    advantage.featured
                      ? "text-white/90"
                      : "text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {advantage.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMeSection;
