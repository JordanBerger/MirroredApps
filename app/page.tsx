"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold"
          >
            Your Name
          </motion.h1>
          <ul className="flex space-x-4">
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <Button
                  variant="ghost"
                  className={activeSection === section ? 'text-primary' : 'text-muted-foreground'}
                  onClick={() => scrollToSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Button>
              </li>
            ))}
            <li>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              </Button>
            </li>
          </ul>
        </nav>
      </header>

      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  )
}

function SectionWrapper({ children, id }: { children: React.ReactNode, id: string }) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen flex items-center justify-center"
    >
      {children}
    </motion.section>
  )
}

function HeroSection() {
  return (
    <SectionWrapper id="home">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Name</h1>
        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">Software Engineer</h2>
        <Button size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
          View My Work
        </Button>
      </div>
    </SectionWrapper>
  )
}

function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <p className="text-lg mb-4">
          I'm a software engineer specializing in web applications. With a passion for creating
          elegant and efficient solutions, I strive to build user-friendly experiences that make
          a difference.
        </p>
        <p className="text-lg">
          My expertise includes front-end technologies like React and Vue.js, as well as back-end
          development with Node.js and Python. I'm always eager to learn new technologies and
          apply them to solve real-world problems.
        </p>
      </div>
    </SectionWrapper>
  )
}

function SkillsSection() {
  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python",
    "HTML5", "CSS3", "Tailwind CSS", "Git", "REST APIs", "GraphQL"
  ]

  return (
    <SectionWrapper id="skills">
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
    </SectionWrapper>
  )
}

function ProjectsSection() {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of Project 1",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Project 2",
      description: "A brief description of Project 2",
      technologies: ["Vue.js", "Express", "PostgreSQL"]
    },
    {
      title: "Project 3",
      description: "A brief description of Project 3",
      technologies: ["Next.js", "GraphQL", "Tailwind CSS"]
    }
  ]

  return (
    <SectionWrapper id="projects">
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
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

function ContactSection() {
  return (
    <SectionWrapper id="contact">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <p className="text-lg mb-8">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <Button size="lg">
          Contact Me
        </Button>
      </div>
    </SectionWrapper>
  )
}

