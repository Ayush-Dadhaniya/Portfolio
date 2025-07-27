import React from "react"
import ShinyText from '../ui/ShinyText';
import { Download, Github, Linkedin, Mail } from "lucide-react";

export default function HomeSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-2 sm:px-4 pt-16 relative z-10 overflow-x-hidden bg-gradient-to-br from-black via-purple-900/20 to-pink-900/20">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 md:gap-8 w-full">
        {/* Original Rectangle Photo on Left */}
        <div className="relative w-32 h-44 sm:w-40 sm:h-56 md:w-56 md:h-72 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-lg flex items-center justify-center">
          <img
            src="/image.png"
            alt="Ayush Dadhaniya"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Data on Right */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center w-full min-w-0">
          <div className="w-full">
            <div className="overflow-hidden text-center md:text-left px-2 sm:px-0">
              <ShinyText text="Full-Stack Developer" disabled={false} speed={3} />
            </div>
            <p className="text-sm sm:text-base md:text-lg italic mt-2 md:text-2xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto md:mx-0 px-2 sm:px-0">
              <b className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">" </b>IT graduate with experience in software development, machine learning, and web development. I love building real-world projects and creating digital experiences that blend creativity with code.<b className="text-lg sm:text-xl md:text-2xl lg:text-3xl"> "</b>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start items-center md:items-start px-2 sm:px-0">
              <a
                href="/Ayush_Dadhaniya_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-bold shadow-lg hover:scale-105 hover:shadow-pink-500/40 transition-all duration-300 group text-xs sm:text-sm md:text-base"
              >
                <Download className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:animate-bounce" />
                Download Resume
              </a>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                <a
                  href="https://github.com/Ayush-Dadhaniya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-2 sm:py-3 bg-gray-900 text-white rounded-xl font-bold shadow-lg hover:bg-purple-700 hover:scale-105 transition-all duration-300 text-xs sm:text-sm md:text-base"
                >
                  <Github className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/ayushdadhaniya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-2 sm:py-3 bg-blue-700 text-white rounded-xl font-bold shadow-lg hover:bg-blue-800 hover:scale-105 transition-all duration-300 text-xs sm:text-sm md:text-base"
                >
                  <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  LinkedIn
                </a>
                <a
                  href="mailto:ayushdadhaniya05@gmail.com"
                  className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-2 sm:py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-bold shadow-lg hover:scale-105 hover:shadow-purple-500/40 transition-all duration-300 text-xs sm:text-sm md:text-base"
                >
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 