"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-20"
    >
      <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-linear-to-r from-pink-500 to-violet-500">
        Get in Touch
      </h2>
      <form className="max-w-md mx-auto">
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 ">
            Name
          </label>
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-3 bg-gray-800 rounded-lg  focus:outline-hidden focus:ring-2 focus:ring-pink-500 transition-all duration-300"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 bg-gray-800 rounded-lg  focus:outline-hidden focus:ring-2 focus:ring-pink-500 transition-all duration-300"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block mb-2">
            Message
          </label>
          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-3 bg-gray-800 rounded-lg  focus:outline-hidden focus:ring-2 focus:ring-pink-500 transition-all duration-300"
            required
          ></motion.textarea>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-linear-to-r from-pink-500 to-violet-500  font-semibold px-6 py-3 rounded-full hover:from-pink-600 hover:to-violet-600 transition-all duration-300"
        >
          Send Message
        </motion.button>
      </form>
    </motion.section>
  );
}
