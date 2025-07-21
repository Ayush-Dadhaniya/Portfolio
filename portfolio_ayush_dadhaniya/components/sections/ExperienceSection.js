import React from "react"
import { GlitchText } from "@/components/glitch-text"
import SpotlightCard from '../ui/SpotlightCard2';

const experiences = [
  {
    title: "Core Developer",
    company: "Barracks Technologies, Ahmedabad, Gujarat",
    period: "May 2025 – Present",
    description:
      "Built a cybersecurity training platform with real-world labs for ethical hackers. Created intentionally vulnerable web apps for hands-on learning.",
  },
  {
    title: "System Engineer",
    company: "CEREBULB, GIFT City, Gujarat",
    period: "Nov 2023 – Dec 2024",
    description:
      "Developed IoT data systems and dashboards for a top power company. Improved efficiency and reduced delays.",
  },
]

export default function ExperienceSection() {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6"><GlitchText text="Experience" /></h2>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <SpotlightCard key={exp.title} className="bg-white/10 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <p className="text-purple-400 font-medium">{exp.company}</p>
                </div>
                <span className="border border-pink-400 text-pink-400 w-fit rounded px-2 py-1 text-xs font-semibold">{exp.period}</span>
              </div>
              <p className="text-gray-300">{exp.description}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  )
} 