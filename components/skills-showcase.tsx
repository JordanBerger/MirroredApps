"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", color: "from-yellow-200 to-yellow-400" },
  { name: "TypeScript", color: "from-blue-200 to-blue-400" },
  { name: "React", color: "from-cyan-200 to-cyan-400" },
  { name: "Next.js", color: "from-gray-200 to-gray-400" },
  { name: "Node.js", color: "from-green-200 to-green-400" },
  { name: "Express", color: "from-gray-200 to-gray-400" },
  { name: "MongoDB", color: "from-green-300 to-green-500" },
  { name: "PostgreSQL", color: "from-blue-300 to-blue-500" },
  { name: "GraphQL", color: "from-pink-200 to-pink-400" },
  { name: "Tailwind", color: "from-teal-200 to-teal-400" },
];

export function SkillsShowcase() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-linear-to-r from-pink-500 to-violet-500">
        Skills
      </h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
      >
        {skills.map((skill) => (
          <div
            key={skill.name}
            /*  initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1, type: "spring" }}
            whileHover={{ scale: 1.05, transition: { delay: 0 } }} */
            className={`bg-linear-to-br ${skill.color} rounded-lg p-4 text-center shadow-lg cursor-pointer`}
          >
            <span className="font-semibold text-gray-900">{skill.name}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
