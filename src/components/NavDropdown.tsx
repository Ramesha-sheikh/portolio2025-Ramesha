"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface DropdownItem {
  url: string;
  text: string;
  icon: string;
}

interface NavDropdownProps {
  label: string;
  icon: string;
  items: DropdownItem[];
  isActive: boolean;
}

const NavDropdown: React.FC<NavDropdownProps> = ({ label, icon, items, isActive }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <motion.button
        type="button"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className={`group relative px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
          isActive
            ? "bg-gradient-to-r from-marrsgreen to-marrsgreen/80 dark:from-carrigreen dark:to-carrigreen/80 text-white shadow-lg shadow-marrsgreen/30 dark:shadow-carrigreen/30"
            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
        }`}
      >
        <span className="text-base">{icon}</span>
        <span>{label}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
        {!isActive && (
          <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-marrsgreen/10 to-transparent dark:from-carrigreen/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 min-w-[200px] bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-200/50 dark:border-gray-800/50 overflow-hidden"
          >
            {items.map((item) => (
              <Link
                key={item.url}
                href={item.url}
                className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-marrsgreen/10 hover:to-transparent dark:hover:from-carrigreen/10 transition-all duration-300 text-sm font-medium"
              >
                <span className="text-base">{item.icon}</span>
                <span>{item.text}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavDropdown;
