import React from "react"
import { GlitchText } from "@/components/glitch-text"

const certificates = [
  "Ethical Hacking Essentials (EHE) - EC-Council",
  "Employee of the month - CEREBULB",
  "Building Generative AI-Powered Applications with Python - IBM",
  "Algorithmic Thinking (Part 1) - Rice University",
  "Algorithmic Thinking (Part 2) - Rice University",
  "Exploratory Data Analysis for Machine Learning - IBM",
  "HTML, CSS, and Javascript for Web Developers - Johns Hopkins University",
  "Data Structures - UC San Diego",
  "The Structured Query Language (SQL) - University of Colorado Boulder",
  "C for Everyone: Programming Fundamentals - UC Santa Cruz",
]

export default function CertificatesSection() {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6"><GlitchText text="Certificates" /></h2>
        </div>
        <ul className="space-y-4">
          {certificates.map((cert, idx) => (
            <li key={idx} className="bg-white/10 rounded-xl p-4 text-gray-200 font-medium">
              {cert}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
} 