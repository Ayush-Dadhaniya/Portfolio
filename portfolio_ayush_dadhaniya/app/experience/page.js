"use client";

import { motion } from 'framer-motion';

const timeline = [
  {
    year: 'May 2025 – Present',
    title: 'Core Developer',
    place: 'Barracks Technologies, Ahmedabad, Gujarat',
    desc: 'Spearheaded the development of a cybersecurity training platform offering realistic lab environments for aspiring ethical hackers. Created many intentionally vulnerable web applications to simulate real-world attack scenarios and help users practice vulnerability assessment and reporting. Enhanced learning effectiveness by 40% based on internal testing, leading to improved engagement and feedback from early adopters.'
  },
  {
    year: 'Nov 2023 – Dec 2024',
    title: 'System Engineer',
    place: 'CEREBULB, GIFT City, Gujarat',
    desc: 'Contributed to projects for a leading organization ranked 3rd in India\'s power generation and distribution sector. Developed real-time data collection systems and dashboards using IoT sensors. Designed solutions that improved management efficiency by 15% and reduced maintenance delays by 20%.'
  }
];

export default function Experience() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-cyan-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-12 text-center"
        >
          Experience
        </motion.h1>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-500 to-purple-500 h-full rounded-full"></div>
          
          <div className="relative z-10">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className={`flex items-center mb-16 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content side */}
                <div className={`w-1/2 ${i % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white/10 border border-cyan-500/30 rounded-2xl p-6 shadow-xl backdrop-blur-sm">
                    <div className="text-sm text-cyan-300 mb-2 font-semibold">{item.year}</div>
                    <div className="text-xl font-bold mb-2 text-white">{item.title}</div>
                    <div className="text-purple-300 mb-3 font-medium">{item.place}</div>
                    <div className="text-gray-300 text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                
                {/* Empty side */}
                <div className={`w-1/2 ${i % 2 === 0 ? 'pl-8' : 'pr-8'}`}></div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Skills section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mt-16"
        >
          <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Key Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-cyan-300 mb-4">Languages & Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {['C/C++', 'Java', 'Python', 'JavaScript','HTML','CSS','TailwindCSS','ReactJS', 'Django', 'ExpressJS', 'NodeJS'].map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-cyan-500/20 text-cyan-200 rounded-full text-sm font-medium border border-cyan-500/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-purple-300 mb-4">Databases & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['PostgreSQL', 'MySQL', 'SQL', 'MongoDB', 'Git', 'Vercel', 'Render', 'VS Code','Postman',].map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm font-medium border border-purple-500/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 