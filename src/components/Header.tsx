"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import gsap from "gsap";

import useScrollListener from "@/hooks/useScrollListener";
import { useSection } from "../context/section";

const navLinks = [
  { url: "#whoami", text: "Who am I?" },
  { url: "#projects", text: "Projects" },
  { url: "#blog", text: "Blog" },
  { url: "#contact", text: "Contact" },
];

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const { currentSection } = useSection();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [navClassList, setNavClassList] = useState<any>([]);
  const [mounted, setMounted] = useState(false); // ✅ hydration fix

  const scroll = useScrollListener();
  const mainRef = useRef(null);
  const themeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true); // ✅ mount hone ke baad hi theme render karega
  }, []);

  useEffect(() => {
    gsap.fromTo(
      mainRef.current,
      { top: -120 },
      { top: 0, duration: 0.7, delay: 0.5, ease: "power2.out" }
    );
  }, []);

  useEffect(() => {
    const themeBtn = themeBtnRef.current;
    if (themeBtn) themeBtn.ariaLabel = theme ?? "light";
  }, [theme]);

  useEffect(() => {
    const _classList = [];
    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      _classList.push("!shadow-md", "backdrop-blur-md");
    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  // ✅ hydration mismatch fix
  if (!mounted) return null;

  return (
    <header className="md:flex">
      <div
        ref={mainRef}
        className={`main-nav lower-glassmorphism bg-bglight/70 dark:bg-bgdark/70 backdrop-blur-md z-30 top-0 shadow-sm fixed transition-all duration-300 px-4 sm:px-8 h-16 w-full ${navClassList.join(
          " "
        )}`}
      >
        <div className="w-full h-full mx-auto max-w-6xl flex items-center justify-between">
          <Link
            href="/"
            className="text-xl sm:text-2xl font-bold tracking-wide md:hover:text-marrsgreen dark:md:hover:text-carrigreen"
          >
            Humaiza Naz
            <span className="text-marrsgreen dark:text-carrigreen">.dev</span>
          </Link>

          {/* Nav */}
          <nav className="flex items-center">
            <div className="glassmorphism md:bg-transparent md:dark:bg-transparent md:backdrop-blur-none fixed md:static bottom-4 z-30 left-1/2 md:left-auto transform -translate-x-1/2 md:transform-none bg-bglight/80 dark:bg-carddark/80 w-11/12 md:w-auto rounded-xl md:rounded-none drop-shadow-lg md:drop-shadow-none">
              <ul className="flex justify-evenly items-center py-1 md:py-0">
                {navLinks.map((navLink) => (
                  <li key={navLink.url}>
                    <a
                      href={navLink.url}
                      className={`relative text-sm md:text-lg px-2 py-1 md:mr-6 transition-colors duration-200 
                        ${
                          currentSection === navLink.text.toLowerCase()
                            ? "text-marrsgreen dark:text-carrigreen"
                            : "text-textdark dark:text-textlight"
                        }
                        group`}
                    >
                      {navLink.text}
                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-marrsgreen dark:bg-carrigreen transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Theme Toggle */}
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              title="Toggle light/dark theme"
              ref={themeBtnRef}
              aria-live="polite"
              className="w-9 h-9 ml-2 rounded-lg flex justify-center items-center hover:rotate-180 transition-transform duration-500"
            >
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  className="fill-yellow-400"
                >
                  <path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  className="fill-gray-700"
                >
                  <path d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224z" />
                </svg>
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
