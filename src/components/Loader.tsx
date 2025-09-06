"use client";  
import { useEffect, useRef } from "react";
import gsap from "gsap";

type Props = {
  children: React.ReactNode;
};

const Loader: React.FC<Props> = ({ children }) => {
  const loadingRef = useRef(null);

  useEffect(() => {
    const q = gsap.utils.selector(loadingRef);

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      q(".loading-text"),
      { y: 120, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 1 }
    )
      .to(q(".loading-text"), {
        y: -40,
        opacity: 0,
        scale: 1.1,
        duration: 0.6,
        delay: 0.5,
      })
      .to(q(".white-bg"), { y: "-100%", duration: 0.8, ease: "power4.inOut" })
      .to(
        q(".dark-bg"),
        { y: "-100%", duration: 0.6, ease: "power4.inOut" },
        "-=0.5"
      );
  }, []);

  return (
    <div ref={loadingRef} aria-hidden="true">
      {/* White Overlay */}
      <div className="white-bg fixed top-0 left-0 w-full h-screen bg-[#f0f5fa] dark:bg-[#0e141a] z-[9999] flex justify-center items-center text-center px-4">
  <div className="overflow-hidden">
    <span className="loading-text block text-bgdark dark:text-bglight font-bold text-3xl sm:text-5xl lg:text-7xl tracking-wide sm:tracking-widest drop-shadow-lg">
      {children}
    </span>
  </div>
</div>

      {/* Accent Overlay */}
      <div className="dark-bg fixed top-0 left-0 w-full h-screen bg-marrsgreen dark:bg-carrigreen z-[9998]"></div>
    </div>
  );
};

export default Loader;
