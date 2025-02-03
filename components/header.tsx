"use client";

import { motion } from "framer-motion";
import { MenuIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";

const sections = ["Skills" /* "Projects", "Contact" */];

export function Header() {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="flex justify-between items-center sticky top-0 z-10 rounded-b p-3 bg-card"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 cursor-pointer"
      >
        <a onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Home
        </a>
      </motion.div>
      <nav>
        <button
          type="button"
          aria-label="Toggle Menu"
          className="sm:hidden flex items-center px-3 py-2 border rounded"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <MenuIcon />
        </button>
        <ul
          className={`${
            menuOpen
              ? "block absolute bg-primary-foreground p-2 right-3 rounded"
              : "hidden"
          } sm:flex sm:space-x-6 space-y-2 sm:space-y-0`}
        >
          {sections.map((item) => (
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
