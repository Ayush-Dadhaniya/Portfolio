import React from "react"
import { GlitchText } from "@/components/glitch-text"
import SpotlightCard from '../ui/SpotlightCard';
export default function AboutSection() {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6"><GlitchText text="About Me" /></h2>
          <p className="text-lg font-bold text-gray-300 max-w-3xl italic mx-auto"><b className="text-2xl">" </b>
            I’m a passionate full-stack developer with a focus on building impactful solutions. My journey in tech is driven by curiosity, creativity, and a love for turning ideas into reality.
          <b className="text-2xl"> "</b></p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {["C/C++","Java", "Python","JavaScript","ReactJS","Next.js", "Node.js", "Django", "PostgreSQL","MySQL","MongoDB","Git","Vercel","VS Code","Postman","Machine Learning", "TailwindCSS"].map(skill => (
                <span key={skill} className="bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded px-3 py-1 text-sm font-semibold">{skill}</span>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <SpotlightCard className="bg-white/10 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-2">Frontend Development</h4>
              <p className="text-gray-300">Creating responsive, interactive user interfaces with modern frameworks</p>
            </SpotlightCard>
            <SpotlightCard className="bg-white/10 rounded-xl p-6" spotlightColor="rgba(0, 229, 255, 0.2)">
              <h4 className="text-lg font-semibold text-white mb-2">Backend Development</h4>
              <p className="text-gray-300">Building scalable APIs and server-side applications</p>
            </SpotlightCard>
            <SpotlightCard className="bg-white/10 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-2">AI & Data</h4>
              <p className="text-gray-300">Experimenting with machine learning and data-driven solutions</p>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  )
} 