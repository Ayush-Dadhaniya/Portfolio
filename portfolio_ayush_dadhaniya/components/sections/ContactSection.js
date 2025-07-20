import React from "react"
import { GlitchText } from "@/components/glitch-text"

export default function ContactSection() {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6"><GlitchText text="Contact" /></h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">Want to collaborate or just say hi? Reach out via email or connect on LinkedIn!</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <a href="mailto:ayushdadhaniya05@gmail.com" className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold shadow hover:bg-purple-700 transition">ayushdadhaniya05@gmail.com</a>
          <a href="https://linkedin.com/in/ayushdadhaniya" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold shadow hover:bg-purple-700 transition">LinkedIn</a>
        </div>
      </div>
    </section>
  )
} 