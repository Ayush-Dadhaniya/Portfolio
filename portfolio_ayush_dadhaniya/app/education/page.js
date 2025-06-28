"use client";

import { motion } from 'framer-motion';

const timeline = [
  {
    year: '2021 – 2025',
    title: 'Bachelor in Information Technology',
    place: 'LJ Institute of Engineering and Technology',
    desc: "CPI: 8.6/10.0 [Oct 2024]"
  },
];

export default function Education() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-cyan-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-12 text-center"
        >
          Education
        </motion.h1>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 to-cyan-500 h-full rounded-full"></div>
          
          <div className="relative z-10">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center mb-16"
              >
                {/* Left side content */}
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white/10 border border-purple-500/30 rounded-2xl p-6 shadow-xl backdrop-blur-sm">
                    <div className="text-sm text-purple-300 mb-2 font-semibold">{item.year}</div>
                    <div className="text-xl font-bold mb-2 text-white">{item.title}</div>
                    <div className="text-cyan-300 mb-3 font-medium">{item.place}</div>
                    <div className="text-gray-300 text-sm">{item.desc}</div>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white shadow-lg"></div>
                
                {/* Right side - empty for single item */}
                <div className="w-1/2 pl-8"></div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Additional info section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mt-16"
        >
          <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Academic Focus
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-purple-300 mb-1">Software Development</h3>
              <p className="text-gray-400 text-sm">Full-stack web applications and software solutions</p>
            </div>
            
            <div className="text-center p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-cyan-300 mb-1">Machine Learning</h3>
              <p className="text-gray-400 text-sm">AI algorithms and data analysis techniques</p>
            </div>
            
            <div className="text-center p-4 rounded-xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/20">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-pink-300 mb-1">Web Technologies</h3>
              <p className="text-gray-400 text-sm">Modern frameworks and responsive design</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 