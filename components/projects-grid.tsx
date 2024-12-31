"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    image: "/placeholder.svg?height=200&width=300",
    color: "from-pink-500 to-red-500",
  },
  {
    id: 2,
    title: "Social Media Dashboard",
    image: "/placeholder.svg?height=200&width=300",
    color: "from-purple-500 to-indigo-500",
  },
  {
    id: 3,
    title: "Task Management App",
    image: "/placeholder.svg?height=200&width=300",
    color: "from-green-500 to-teal-500",
  },
  {
    id: 4,
    title: "Weather Forecast App",
    image: "/placeholder.svg?height=200&width=300",
    color: "from-blue-500 to-cyan-500",
  },
];

export function ProjectsGrid() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`bg-gradient-to-br ${project.color} rounded-lg overflow-hidden shadow-lg`}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-white">
                {project.title}
              </h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                View Project
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
