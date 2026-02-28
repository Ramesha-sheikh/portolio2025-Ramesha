"use client";
import { motion } from "framer-motion";

const FloatingShapes: React.FC = () => {
  const shapes = [
    {
      id: 1,
      size: 200,
      top: "10%",
      left: "5%",
      duration: 20,
      gradient: "from-blue-400/20 to-purple-500/20",
      blur: "blur-3xl",
    },
    {
      id: 2,
      size: 300,
      top: "60%",
      left: "80%",
      duration: 25,
      gradient: "from-pink-400/20 to-red-500/20",
      blur: "blur-3xl",
    },
    {
      id: 3,
      size: 250,
      top: "40%",
      left: "50%",
      duration: 30,
      gradient: "from-green-400/20 to-teal-500/20",
      blur: "blur-3xl",
    },
    {
      id: 4,
      size: 180,
      top: "80%",
      left: "10%",
      duration: 22,
      gradient: "from-yellow-400/20 to-orange-500/20",
      blur: "blur-3xl",
    },
    {
      id: 5,
      size: 220,
      top: "20%",
      left: "75%",
      duration: 28,
      gradient: "from-indigo-400/20 to-blue-500/20",
      blur: "blur-3xl",
    },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute rounded-full bg-gradient-to-br ${shape.gradient} ${shape.blur}`}
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            left: shape.left,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;
