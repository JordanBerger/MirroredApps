import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { SkillsShowcase } from "@/components/skills-showcase"
import { ProjectsGrid } from "@/components/projects-grid"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Header />
      <Hero />
      <SkillsShowcase />
      <ProjectsGrid />
      <Contact />
    </div>
  )
}

