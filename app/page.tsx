"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold"
          >
            Jordan Berger
          </motion.h1>
          <div className="flex space-x-4">
            <Link href="#hero">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#contact">Contact</Link>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </Button>
        </nav>
      </header>

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}

function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Name</h1>
        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
          Software Engineer
        </h2>
        <Button size="lg">View My Work</Button>
      </motion.div>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <p className="text-lg mb-4">
          I&apos;m a software engineer specializing in web applications. With a
          passion for creating elegant and efficient solutions, I strive to
          build user-friendly experiences that make a difference.
        </p>
        <p className="text-lg">
          My expertise includes front-end technologies like React and Vue.js, as
          well as back-end development with Node.js and Python. I&apos;m always
          eager to learn new technologies and apply them to solve real-world
          problems.
        </p>
      </div>
    </section>
  );
}

function SkillsSection() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Git",
    "REST APIs",
    "GraphQL",
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-muted/30 p-4 rounded-lg text-center"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of Project 1",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Project 2",
      description: "A brief description of Project 2",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
    },
    {
      title: "Project 3",
      description: "A brief description of Project 3",
      technologies: ["Next.js", "GraphQL", "Tailwind CSS"],
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-card p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-primary/10 text-primary px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <p className="text-lg mb-8">
          I&apos;m always open to new opportunities and collaborations. Feel
          free to reach out!
        </p>
        <Button size="lg">Contact Me</Button>
      </div>
    </section>
  );
}
