"use client"

import { Home, Info, Code, Briefcase, FileText, Mail } from "lucide-react"
import { ExpandableTabs } from "@/components/ui/expandable-tabs"

export default function Navigation() {
  const navTabs = [
    { title: "Home", icon: Home },
    { title: "About Me", icon: Info },
    { title: "Skills", icon: Code },
    { type: "separator" as const },
    { title: "Projects", icon: Briefcase },
    { title: "Contact", icon: Mail },
  ]

  const handleNavClick = (index: number | null) => {
    if (index === null) return

    const sectionMap: { [key: number]: string } = {
      0: "#home",
      1: "#aboutme",
      2: "#skills",
      4: "#projects123",
      5: "#contact",
    }

    const sectionId = sectionMap[index]
    if (sectionId) {
      const element = document.querySelector(sectionId)
      element?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-full px-6 py-3 shadow-lg backdrop-blur-sm transition-colors duration-300">
        <ExpandableTabs
          tabs={navTabs}
          activeColor="text-neutral-900 dark:text-white"
          className="border-0 bg-transparent"
          onChange={handleNavClick}
        />
      </div>
    </nav>
  )
}
