"use client";
import { ReactNode, useRef, useState } from "react";
import { motion } from "framer-motion";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = "",
  glowColor = "rgba(5, 206, 145, 0.4)",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden rounded-xl ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Glow effect */}
      {isHovered && (
        <div
          className="absolute pointer-events-none transition-opacity duration-300 blur-2xl"
          style={{
            left: mousePosition.x - 100,
            top: mousePosition.y - 100,
            width: 200,
            height: 200,
            background: `radial-gradient(circle, ${glowColor}, transparent 70%)`,
          }}
        />
      )}

      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 dark:from-white/10 dark:to-white/0 backdrop-blur-sm" />

      {/* Border glow */}
      <div className="absolute inset-0 rounded-xl border border-white/10 dark:border-white/20" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default GlowCard;
