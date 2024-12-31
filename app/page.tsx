import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { SkillsShowcase } from "@/components/skills-showcase";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4">
      <Header />
      <Hero />
      <SkillsShowcase />
      {/* <ProjectsGrid /> */}
      {/* <Contact /> */}
    </main>
  );
}
