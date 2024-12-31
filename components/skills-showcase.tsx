"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", color: "from-yellow-400 to-yellow-600" },
  { name: "TypeScript", color: "from-blue-400 to-blue-600" },
  { name: "React", color: "from-cyan-400 to-cyan-600" },
  { name: "Next.js", color: "from-gray-400 to-gray-600" },
  { name: "Node.js", color: "from-green-400 to-green-600" },
  { name: "Express", color: "from-gray-400 to-gray-600" },
  { name: "MongoDB", color: "from-green-500 to-green-700" },
  { name: "PostgreSQL", color: "from-blue-500 to-blue-700" },
  { name: "GraphQL", color: "from-pink-400 to-pink-600" },
  { name: "REST APIs", color: "from-indigo-400 to-indigo-600" },
  { name: "HTML5", color: "from-orange-400 to-orange-600" },
  { name: "CSS3", color: "from-blue-400 to-blue-600" },
  { name: "Tailwind CSS", color: "from-teal-400 to-teal-600" },
  { name: "Git", color: "from-orange-600 to-orange-800" },
  { name: "Docker", color: "from-blue-500 to-blue-700" },
];

export function SkillsShowcase() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
        Skills
      </h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1, type: "spring" }}
            whileHover={{ scale: 1.05 }}
            className={`bg-gradient-to-br ${skill.color} rounded-lg p-4 text-center shadow-lg cursor-pointer`}
          >
            <span className="font-semibold text-gray-900">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
