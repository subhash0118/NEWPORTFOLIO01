"use client"

import { MinimalistHero } from "@/components/ui/minimalist-hero"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function HeroSection() {
  const navLinks = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#aboutme" },
    { label: "SKILLS", href: "#skills" },
    { label: "PROJECTS", href: "#projects123" },
    { label: "RESUME", href: "#resume12" },
    { label: "CONTACT", href: "#contact" },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/subhash0118" },
    { icon: Linkedin, href: "https://linkedin.com/in/ksaixsubhash" },
    { icon: Mail, href: "mailto:subhash0118@gmail.com" },
    // { icon: Twitter, href: "#" }, // Removed Twitter as I don't have the link, can add back if needed
  ]

  return (
    <MinimalistHero
      logoText="SUBHASH."
      navLinks={navLinks}
      mainText="SOFTWARE ENGINEER | Web Developer | AI/ML."
      readMoreLink="#aboutme"
      imageSrc="/portpfp.png"
      imageAlt="K SAI SURYA SUBHASH"
      overlayText={{
        part1: "I AM",
        part2: "SUBHASH",
      }}
      socialLinks={socialLinks}
      locationText="Visakhapatnam, India"
      className="bg-transparent" // Transparent to show particles if needed, or remove to have solid background
    />
  )
}
