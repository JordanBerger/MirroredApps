"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { SunIcon, MoonIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="flex justify-between items-center py-6"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
      >
        JD
      </motion.div>
      <nav>
        <ul className="flex space-x-6">
          {["Skills", "Projects", "Contact"].map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-pink-400 transition-colors duration-300"
              >
                {item}
              </Link>
            </motion.li>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </Button>
        </ul>
      </nav>
    </motion.header>
  );
}
