"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-center py-20"
    >
      <motion.h1
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: "spring" }}
        className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-pink-500 to-violet-600"
      >
        John Doe
      </motion.h1>
      <motion.p
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.4, type: "spring" }}
        className="text-2xl text-gray-300"
      >
        Full-Stack Web Developer
      </motion.p>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, type: "spring" }}
        className="mt-8"
      >
        <a 
          href="#contact" 
          className="bg-gradient-to-r from-pink-500 to-violet-500 text-white px-6 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-violet-600 transition-all duration-300"
        >
          Get in Touch
        </a>
      </motion.div>
    </motion.section>
  )
}

