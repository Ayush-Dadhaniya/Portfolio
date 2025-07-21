import React from "react"
import { GlitchText } from "@/components/glitch-text"
import SpotlightCard2 from '../ui/SpotlightCard2';

const education = [
  {
    degree: "Bachelor in Information Technology",
    school: "LJ Institute of Engineering and Technology",
    period: "2021 – 2025",
    gpa: "CGPA: 8.8/10.0",
  },
]

export default function EducationSection() {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6"><GlitchText text="Education" /></h2>
        </div>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <SpotlightCard2 key={edu.degree} className="bg-white/10 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-purple-400 font-medium">{edu.school}</p>
                </div>
                <span className="border border-pink-400 text-pink-400 w-fit rounded px-2 py-1 text-xs ml-5 font-semibold">{edu.period}</span>
              </div>
              <p className="text-gray-300">{edu.gpa}</p>
            </SpotlightCard2>
          ))}
        </div>
      </div>
    </section>
  )
} 