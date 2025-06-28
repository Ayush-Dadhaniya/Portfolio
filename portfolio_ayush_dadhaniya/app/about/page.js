"use client";

import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-cyan-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Passionate about technology and innovation, I'm a graduate developer with a focus on creating impactful solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-white/10 border border-purple-500/30 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-purple-300 mb-4">Who I Am</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              I'm a dedicated graduate with a passion for software development, machine learning, and web technologies. 
              My journey in tech has been driven by curiosity and a desire to solve real-world problems through innovative solutions.
            </p>
          </div>

          <div className="bg-white/10 border border-cyan-500/30 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-cyan-300 mb-4">What I Do</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              I specialize in full-stack development, creating web applications that are both functional and user-friendly. 
              My experience spans from frontend frameworks to backend systems, with a particular interest in AI and machine learning applications.
            </p>
          </div>

          <div className="bg-white/10 border border-pink-500/30 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-pink-300 mb-4">My Approach</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              I believe in writing clean, maintainable code and staying up-to-date with the latest technologies. 
              Every project is an opportunity to learn and grow, and I approach each challenge with enthusiasm and determination.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mt-12"
        >
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Key Highlights
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-purple-300 mb-2">Innovation</h3>
              <p className="text-gray-400">Creating cutting-edge solutions that push the boundaries of what's possible</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-cyan-300 mb-2">Performance</h3>
              <p className="text-gray-400">Building fast, efficient applications that deliver exceptional user experiences</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/20">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-pink-300 mb-2">Collaboration</h3>
              <p className="text-gray-400">Working effectively in teams to bring ideas to life and achieve common goals</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 