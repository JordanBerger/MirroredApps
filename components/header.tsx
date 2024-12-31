"use client";

import { motion } from "framer-motion";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="flex justify-between items-center sticky top-0 z-10 rounded-b p-3 bg-card"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
      >
        <a onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Home
        </a>
      </motion.div>
      <nav>
        <ul className="flex space-x-6">
          {["Skills", "Projects", "Contact"].map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="hover:text-pink-400 transition-colors duration-300"
              >
                {item}
              </Link>
            </motion.li>
          ))}
          <motion.li whileHover={{ scale: 1.1 }}>
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:text-pink-400 transition-colors duration-300"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </motion.li>
        </ul>
      </nav>
    </motion.header>
  );
}
