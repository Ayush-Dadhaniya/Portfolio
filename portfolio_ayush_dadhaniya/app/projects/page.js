"use client";

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Chillflick',
    desc: 'Built a watch party app enabling users to watch YouTube videos in sync and chat with friends in real-time.',
    tech: ['ReactJS', 'Node.js', 'Socket.IO', 'Vercel'],
    link: 'https://chillflick.vercel.app/'
  },
  {
    title: 'DoTrack - Task Management System',
    desc: 'Designed a task management platform where teams can create, assign, and manage tasks with admin controls.',
    tech: ['ReactJS', 'Node.js', 'Express', 'PostgreSQL', 'Vercel'],
    link: 'https://dotrack.vercel.app/'
  },
  {
    title: 'Chasko Coffee Stop',
    desc: 'Developed an online coffee shop platform with ReactJS frontend and Django backend.',
    tech: ['ReactJS', 'Django', 'PostgreSQL', 'Vercel'],
    link: 'https://chasko-coffee-stop.vercel.app/'
  },
  {
    title: 'DiagnosAI',
    desc: 'Created a disease prediction platform based on a machine learning model trained on Kaggle data.',
    tech: ['ReactJS', 'Django', 'Kaggle', 'Vercel'],
    link: 'https://diagnos-ai.vercel.app/'
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-cyan-900 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-12 text-center"
        >
          Projects
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <motion.a
              key={i}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="block bg-white/10 border border-purple-500/20 rounded-2xl p-6 shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              <div className="text-2xl font-bold mb-2 text-purple-200">{proj.title}</div>
              <div className="text-gray-200 mb-4">{proj.desc}</div>
              <div className="flex flex-wrap gap-2">
                {proj.tech.map((t, j) => (
                  <span key={j} className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-xs font-semibold">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
} 