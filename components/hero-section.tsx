"use client"

import { MinimalistHero } from "@/components/ui/minimalist-hero"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { motion } from "framer-motion"

export default function HeroSection() {
  const navLinks = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#aboutme" },
    { label: "SKILLS", href: "#skills" },
    { label: "PROJECTS", href: "#projects123" },
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
      taglines={["SOFTWARE ENGINEER", "Web Developer", "AI/ML."]}
      imageSrc="/portpfp.png"
      imageAlt="K SAI SURYA SUBHASH"
      overlayText={{
        part1: (
          <>
            HI!{" "}
            <motion.span
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut",
              }}
              style={{ display: "inline-block", originX: 0.7, originY: 0.7 }}
            >
              👋
            </motion.span>
            <br /> I AM
          </>
        ),
        part2: "K SUBHASH",
      }}
      socialLinks={socialLinks}
      locationText="Visakhapatnam, India"
      className="bg-transparent" // Transparent to show particles if needed, or remove to have solid background
    />
  )
}
