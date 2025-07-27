"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Download,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  User,
  Home,
  Menu,
  X,
} from "lucide-react"
import HomeSection from "@/components/sections/HomeSection"
import AboutSection from "@/components/sections/AboutSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import ExperienceSection from "@/components/sections/ExperienceSection"
import EducationSection from "@/components/sections/EducationSection"
import CertificatesSection from "@/components/sections/CertificatesSection"
import ContactSection from "@/components/sections/ContactSection"

const AnimatedText = dynamic(() => import("@/components/animated-text").then(mod => mod.AnimatedText), { ssr: false })
const FloatingElements = dynamic(() => import("@/components/floating-elements").then(mod => mod.FloatingElements), { ssr: false })
const GlitchText = dynamic(() => import("@/components/glitch-text").then(mod => mod.GlitchText), { ssr: false })
const NeonButton = dynamic(() => import("@/components/neon-button").then(mod => mod.NeonButton), { ssr: false })
const ParticleField = dynamic(() => import("@/components/particle-field").then(mod => mod.ParticleField), { ssr: false })
const MorphingCard = dynamic(() => import("@/components/morphing-card").then(mod => mod.MorphingCard), { ssr: false })

const navigation = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Projects", href: "#projects", icon: Code },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Education", href: "#education", icon: GraduationCap },
  { name: "Certificates", href: "#certificates", icon: Award },
  { name: "Contact", href: "#contact", icon: Mail },
]

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Remove scroll handler, not needed for tab navigation
    // window.addEventListener("scroll", handleScroll)
    // return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Remove scrollToSection function

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-gradient-to-br from-pink via-purple-900/20 to-pink-900/20">
      {/* Background Effects */}
      <ParticleField />
      <FloatingElements />

      {/* Sidebar Navigation */}
      <nav className="fixed top-0 left-0 h-full w-64 z-50 bg-black/30 backdrop-blur-lg border-r border-white/10 hidden md:flex flex-col justify-between py-8 px-4">
        <div>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-2xl font-bold mb-8">
            <GlitchText
              text="Ayush Dadhaniya"
              className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            />
          </motion.div>
          <div className="flex flex-col gap-2">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  setActiveSection(item.href.slice(1));
                  setIsMenuOpen(false);
                }}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg text-base font-medium transition-colors ${
                  activeSection === item.href.slice(1)
                    ? "bg-purple-500/20 text-purple-400"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-3 justify-center">
          <a href="https://github.com/Ayush-Dadhaniya" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 text-white hover:text-purple-400" />
          </a>
          <a href="https://linkedin.com/in/ayushdadhaniya" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 text-white hover:text-purple-400" />
          </a>
          <a href="mailto:ayushdadhaniya05@gmail.com">
            <Mail className="w-6 h-6 text-white hover:text-purple-400" />
          </a>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10 md:hidden">
        <div className="flex items-center justify-between h-16 px-4">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-2xl font-bold">
            <GlitchText
              text="Ayush Dadhaniya"
              className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            />
          </motion.div>
          <button className="text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-black/40 backdrop-blur-lg"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      setActiveSection(item.href.slice(1));
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center gap-3 px-4 py-2 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 w-full text-left"
                  >
                    <item.icon className="w-5 h-5" />
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content (shifted for sidebar on desktop) */}
      <div className="md:ml-64 overflow-x-hidden">
        <AnimatePresence mode="wait" initial={false}>
          {activeSection === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <HomeSection />
            </motion.div>
          )}
          {activeSection === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <AboutSection />
            </motion.div>
          )}
          {activeSection === "projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectsSection />
            </motion.div>
          )}
          {activeSection === "experience" && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <ExperienceSection />
            </motion.div>
          )}
          {activeSection === "education" && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <EducationSection />
            </motion.div>
          )}
          {activeSection === "certificates" && (
            <motion.div
              key="certificates"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <CertificatesSection />
            </motion.div>
          )}
          {activeSection === "contact" && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <ContactSection />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
