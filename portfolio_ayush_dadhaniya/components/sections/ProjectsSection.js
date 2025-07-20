import React from "react"
import { GlitchText } from "@/components/glitch-text"
import { NeonButton } from "@/components/neon-button"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Chillflick",
    description: "Watch party app for YouTube. Sync, chat, chill.",
    tech: ["ReactJS", "Node.js", "Socket.IO", "Vercel"],
    github: "https://github.com/Ayush-Dadhaniya/ChillFlicks",
    live: "https://chillflick.vercel.app/",
    image: "/chillflicks.png",
  },
  {
    title: "DoTrack",
    description: "Task management for teams. Create, assign, win.",
    tech: ["ReactJS", "Node.js", "Express", "PostgreSQL", "Vercel"],
    github: "https://github.com/Ayush-Dadhaniya/stamuraiTask",
    live: "https://dotrack.vercel.app/",
    image: "/dotrack.png",
  },
  {
    title: "Chasko Coffee Stop",
    description: "Online coffee shop. React frontend, Django backend.",
    tech: ["ReactJS", "Django", "PostgreSQL", "Vercel"],
    github: "https://github.com/Ayush-Dadhaniya/ChaskoCoffeeStop",
    live: "https://chasko-coffee-stop.vercel.app/",
    image: "/chaskocoffeestop.png",
  },
  {
    title: "DiagnosAI",
    description: "Disease prediction with ML. Health meets code.",
    tech: ["ReactJS", "Django", "Kaggle", "Vercel"],
    github: "https://github.com/Ayush-Dadhaniya/DiagnosAI",
    live: "https://diagnos-ai.vercel.app/",
    image: "/diagnosAI.png",
  },
]

export default function ProjectsSection() {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6"><GlitchText text="Featured Projects" /></h2>
          <p className="text-lg italic text-gray-300"><b className="text-2xl">" </b>Some of my recent work that I'm proud of<b className="text-2xl"> "</b></p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
            >
              <div className="bg-white/10 backdrop-blur-xl border border-purple-500/20 shadow-xl hover:shadow-purple-500/40 rounded-3xl flex flex-col max-w-sm mx-auto p-0 overflow-hidden transition-shadow duration-300">
                {/* Image */}
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title + ' thumbnail'}
                    className="w-full h-48 object-cover rounded-t-3xl"
                  />
                )}
                {/* Content */}
                <div className="flex flex-col flex-1 px-6 py-5 bg-gradient-to-b from-transparent to-purple-900/20 box-shadow-lg">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-200 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(tech => (
                      <span key={tech} className="bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-purple-100 border border-purple-400/30 rounded-full px-3 py-1 text-xs font-semibold shadow shadow-pink-500/10 backdrop-blur-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4 mt-auto pb-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <NeonButton variant="secondary" className="px-5 py-2 text-sm">Code</NeonButton>
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <NeonButton variant="primary" className="px-5 py-2 text-sm">Live</NeonButton>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 