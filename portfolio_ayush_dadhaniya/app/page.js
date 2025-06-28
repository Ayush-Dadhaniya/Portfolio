"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-purple-900 via-black to-cyan-900 overflow-x-hidden">
      <div className="w-full h-full px-4 md:px-8 py-6 flex flex-col items-center justify-center">
        {/* Profile Section - Horizontal Layout */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-6 md:mb-8 max-w-4xl">
          {/* Large Circular Photo */}
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl flex-shrink-0">
            <img 
              src="/image.png" 
              alt="Ayush Dadhaniya" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Name and Role */}
          <div className="text-center md:text-left max-w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-2 md:mb-4 break-words">
              Ayush Dadhaniya
            </h1>
            <h2 className="text-base sm:text-lg md:text-xl text-cyan-200 break-words">
              IT Graduate & Full-Stack Developer
            </h2>
          </div>
        </div>

        <div className="w-full text-center mb-8 md:mb-12 max-w-4xl px-4">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed break-words">
          <i><b className='font-bold text-cyan-400 text-lg sm:text-xl md:text-2xl'>"</b></i> IT graduate with experience in software development, machine learning, and web development. Contributed to real-world projects for a leading power generation and distribution company in India. In addition, I worked with a cybersecurity company, where I developed intentionally vulnerable web applications as practical laboratories for aspiring ethical hackers. Looking for a software development role to apply my skills and continue growing professionally.<i><b className='font-bold text-cyan-400 text-lg sm:text-xl md:text-2xl'>"</b></i>
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 md:px-8 py-3 md:py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-cyan-500 font-bold shadow-lg transition-all duration-300 text-white flex items-center gap-2 text-sm md:text-base lg:text-lg"
          onClick={() => {
            const link = document.createElement('a');
            link.href = '/Ayush_Dadhaniya_Resume.pdf';
            link.download = 'Ayush_Dadhaniya_Resume.pdf';
            link.click();
          }}
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download Resume
        </motion.button>
      </div>
      <style>{`
        .animate-spin-slow { animation: spin 6s linear infinite; }
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
