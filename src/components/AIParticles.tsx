"use client";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

const AIParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Enhanced Particle system with AI neural network effect
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      pulseSpeed: number;
      pulsePhase: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.speedY = Math.random() * 0.3 - 0.15;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.pulsePhase += this.pulseSpeed;

        // Wrap around screen
        if (this.x > canvas!.width) this.x = 0;
        if (this.x < 0) this.x = canvas!.width;
        if (this.y > canvas!.height) this.y = 0;
        if (this.y < 0) this.y = canvas!.height;
      }

      draw() {
        if (!ctx) return;
        const pulseOpacity = this.opacity * (0.7 + 0.3 * Math.sin(this.pulsePhase));
        ctx.fillStyle =
          theme === "dark"
            ? `rgba(5, 206, 145, ${pulseOpacity})`
            : `rgba(0, 122, 122, ${pulseOpacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Add glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor =
          theme === "dark"
            ? `rgba(5, 206, 145, ${pulseOpacity})`
            : `rgba(0, 122, 122, ${pulseOpacity})`;
      }
    }

    // Create particles
    const particles: Particle[] = [];
    const particleCount = 100;
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Draw neural network connections
    const drawConnections = () => {
      if (!ctx) return;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = 0.2 * (1 - distance / 150);
            ctx.strokeStyle =
              theme === "dark"
                ? `rgba(5, 206, 145, ${opacity})`
                : `rgba(0, 122, 122, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Draw floating data nodes (AI brain effect)
    const drawDataNodes = () => {
      if (!ctx) return;
      const time = Date.now() * 0.001;
      
      for (let i = 0; i < 5; i++) {
        const x = canvas!.width * (0.2 + 0.15 * Math.sin(time * 0.5 + i));
        const y = canvas!.height * (0.3 + 0.15 * Math.cos(time * 0.3 + i));
        const radius = 30 + 10 * Math.sin(time + i);

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(
          0,
          theme === "dark"
            ? "rgba(5, 206, 145, 0.1)"
            : "rgba(0, 122, 122, 0.1)"
        );
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Reset shadow
      ctx.shadowBlur = 0;

      // Draw data nodes first (background)
      drawDataNodes();

      // Draw and update particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw neural connections
      drawConnections();

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-50"
    />
  );
};

export default AIParticles;
