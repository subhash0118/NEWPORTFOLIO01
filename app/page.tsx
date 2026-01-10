"use client"

import { useState, useEffect } from "react"
import ParticleBackground from "@/components/particle-background"
import MobileResizableNavbar from "@/components/mobile-resizable-nav"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ResumeSection from "@/components/resume-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import ThemeSwitchCircular from "@/components/ui/theme-switch-circular"
import { ClassicLoader } from "@/components/ui/loader"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-black">
        <ClassicLoader />
      </div>
    )
  }

  return (
    <main>
      <ParticleBackground />
      <div className="fixed bottom-4 right-4 z-50">
        <ThemeSwitchCircular />
      </div>
      <div className="md:hidden">
        <MobileResizableNavbar />
      </div>
      <div className="hidden md:block">
        <Navigation />
      </div>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
