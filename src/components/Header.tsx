"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import gsap from "gsap";

import useScrollListener from "@/hooks/useScrollListener";
import NavDropdown from "./NavDropdown";

const navLinks = [
  { url: "/", text: "Home" },
  { url: "/about", text: "About" },
  { url: "/blog", text: "Blog" },
  { url: "/contact", text: "Contact" },
];

const workDropdownItems = [
  { url: "/projects", text: "Projects", icon: "💼" },
  { url: "/experience", text: "Experience", icon: "🎯" },
  { url: "/certifications", text: "Certifications", icon: "🏆" },
];

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [navClassList, setNavClassList] = useState<any>([]);
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scroll = useScrollListener();
  const mainRef = useRef(null);
  const themeBtnRef = useRef<HTMLButtonElement>(null);

  // Check if any work dropdown item is active
  const isWorkActive = workDropdownItems.some(item => pathname === item.url);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      mainRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    const themeBtn = themeBtnRef.current;
    if (themeBtn) themeBtn.ariaLabel = theme ?? "light";
  }, [theme]);

  useEffect(() => {
    const _classList = [];
    if (scroll.y > 50) {
      setIsScrolled(true);
      _classList.push("shadow-lg", "backdrop-blur-xl");
    } else {
      setIsScrolled(false);
    }
    setNavClassList(_classList);
  }, [scroll.y]);

  if (!mounted) return null;

  return (
    <header className="md:flex">
      <motion.div
        ref={mainRef}
        className={`main-nav z-50 top-0 fixed transition-all duration-500 w-full ${
          isScrolled
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-xl border-b border-gray-200/50 dark:border-gray-800/50"
            : "bg-white/60 dark:bg-gray-900/60 backdrop-blur-md"
        } ${navClassList.join(" ")}`}
      >
        <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Enhanced */}
            <Link
              href="/"
              className="group relative text-2xl sm:text-3xl font-bold tracking-tight flex items-center gap-3"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 bg-gradient-to-br from-marrsgreen to-marrsgreen/70 dark:from-carrigreen dark:to-carrigreen/70 rounded-xl flex items-center justify-center text-white text-xl shadow-lg"
              >
                🤖
              </motion.div>
              <div>
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  Ramesha
                </span>
                <span className="text-marrsgreen dark:text-carrigreen">.ai</span>
              </div>
            </Link>

            {/* Desktop Navigation - Multi-Page */}
            <nav className="hidden md:flex items-center gap-2">
              {navLinks.map((navLink, index) => {
                const isActive = pathname === navLink.url;
                return (
                  <motion.div
                    key={navLink.url}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <Link
                      href={navLink.url}
                      className={`group relative px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                        isActive
                          ? "bg-gradient-to-r from-marrsgreen to-marrsgreen/80 dark:from-carrigreen dark:to-carrigreen/80 text-white shadow-lg shadow-marrsgreen/30 dark:shadow-carrigreen/30"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      <span>{navLink.text}</span>
                      {!isActive && (
                        <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-marrsgreen/10 to-transparent dark:from-carrigreen/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Work Dropdown */}
              <NavDropdown
                label="Work"
                icon="💼"
                items={workDropdownItems}
                isActive={isWorkActive}
              />
            </nav>

            {/* Theme Toggle - Enhanced */}
            <motion.button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              title="Toggle theme"
              ref={themeBtnRef}
              aria-live="polite"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`relative w-12 h-12 rounded-xl flex justify-center items-center transition-all duration-300 ${
                isScrolled
                  ? "bg-gradient-to-br from-marrsgreen/10 to-marrsgreen/5 dark:from-carrigreen/10 dark:to-carrigreen/5 border border-marrsgreen/20 dark:border-carrigreen/20"
                  : "bg-gray-100 dark:bg-gray-800"
              } hover:shadow-lg`}
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === "dark" ? 180 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {theme === "dark" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="fill-yellow-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="fill-gray-700"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.977 6.977 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938 7.999 7.999 0 0 0 4 12z" />
                  </svg>
                )}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Navigation - Glassmorphism Bottom Bar */}
          <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-md">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-800/50 p-2"
            >
              <ul className="flex justify-around items-center">
                {workDropdownItems.map((navLink) => {
                  const isActive = pathname === navLink.url;
                  return (
                    <li key={navLink.url}>
                      <Link
                        href={navLink.url}
                        className={`flex flex-col items-center gap-1 px-2 py-2 rounded-xl transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-br from-marrsgreen to-marrsgreen/80 dark:from-carrigreen dark:to-carrigreen/80 text-white shadow-lg"
                            : "text-gray-600 dark:text-gray-400"
                        }`}
                      >
                        <span className="text-base">{navLink.icon}</span>
                        <span className="text-[9px] font-medium whitespace-nowrap">{navLink.text}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
