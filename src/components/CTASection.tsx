"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";

const CTASection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-marrsgreen via-marrsgreen/90 to-marrsgreen/80 dark:from-carrigreen dark:via-carrigreen/90 dark:to-carrigreen/80 rounded-3xl p-12 sm:p-16 overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="relative z-10 text-center text-white">
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              Let&apos;s Build Something{" "}
              <span className="block mt-2 text-white/90">Amazing Together</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto"
            >
              Have a project in mind? Whether it&apos;s AI agents, computer vision, or full-stack development - I&apos;m here to help bring your ideas to life.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-marrsgreen dark:text-carrigreen rounded-xl hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 text-lg font-bold"
              >
                <MessageCircle className="w-6 h-6" />
                Get In Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="https://calendly.com/ramesha-javed"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-xl text-white border-2 border-white/30 rounded-xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 text-lg font-bold"
              >
                <Calendar className="w-6 h-6" />
                Schedule a Call
              </a>
            </motion.div>

            {/* Stats or Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 pt-12 border-t border-white/20"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl sm:text-4xl font-bold mb-2">4+</div>
                  <div className="text-white/80 text-sm sm:text-base">Professional Certifications</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold mb-2">10+</div>
                  <div className="text-white/80 text-sm sm:text-base">AI Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold mb-2">50K+</div>
                  <div className="text-white/80 text-sm sm:text-base">Users Impacted</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
