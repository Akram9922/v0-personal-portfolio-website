'use client'

import { HeroSection } from '@/components/hero-section'
import { SkillsSection } from '@/components/skills-section'
import { ProjectsSection } from '@/components/projects-section'
import { HobbiesSection } from '@/components/hobbies-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <HobbiesSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
