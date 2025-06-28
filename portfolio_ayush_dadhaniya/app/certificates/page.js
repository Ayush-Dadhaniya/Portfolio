"use client";

import { motion } from 'framer-motion';

const certificates = [
  {
    title: 'Ethical Hacking Essentials (EHE)',
    org: 'EC-Council',
    img: '/ethical_kacking_page-0001.jpg',
    link: 'https://coursera.org/verify/QJPHUCXN5LDQ'
  },
  {
    title: 'Employee of the month',
    org: 'CEREBULB',
    img: '/Employee of the month_page-0001.jpg',
    link: 'https://drive.google.com/file/d/1kcBM89fBt_5vr0QzHDMXh-4pwkjGjTuP/view?usp=drive_link'
  },
  {
    title: 'Building Generative AI-Powered Applications with Python',
    org: 'IBM',
    img: '/AI_pow_appl_page-0001.jpg',
    link: 'https://coursera.org/verify/GJCU8V6NRK7E'
  },
  {
    title: 'Algorithmic Thinking (Part 1)',
    org: 'Rice University',
    img: '/algorithm_think_1_page-0001.jpg',
    link: 'https://coursera.org/verify/QSMHADPCAQV5'
  },
  {
    title: 'Algorithmic Thinking (Part 2)',
    org: 'Rice University',
    img: '/algorithm_think_2_page-0001.jpg',
    link: 'https://coursera.org/verify/RG5MYHFA37P6'
  },
  {
    title: 'Exploratory Data Analysis for Machine Learning',
    org: 'IBM',
    img: '/data_analysis_ml_page-0001.jpg',
    link: 'https://coursera.org/verify/GPLH4YZXYJVA'
  },
  {
    title: 'HTML, CSS, and Javascript for Web Developers',
    org: 'Johns Hopkins University',
    img: '/web_dev_page-0001.jpg',
    link: 'https://coursera.org/verify/HUYWPXHU5HTX'
  },
  {
    title: 'Data Structures',
    org: 'UC San Diego',
    img: '/Data_Structure_page-0001.jpg',
    link: 'https://coursera.org/verify/BXBDXTZZBL8Q'
  },
  {
    title: 'The Structured Query Language (SQL)',
    org: 'University of Colorado Boulder',
    img: '/SQL_page-0001.jpg',
    link: 'https://coursera.org/verify/UPZNJ7HDHJEK'
  },
  {
    title: 'C for Everyone: Programming Fundamentals',
    org: 'UC Santa Cruz',
    img: '/C_Language_page-0001.jpg',
    link: 'https://coursera.org/verify/G7Q2SZLET7EE'
  }
];

export default function Certificates() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-cyan-900 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-12 text-center"
        >
          Certificates
        </motion.h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, i) => (
            <motion.a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="block bg-white/10 border border-cyan-500/20 rounded-2xl p-4 shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              <img src={cert.img} alt={cert.title} className="w-full h-40 object-cover rounded-lg mb-4 border border-white/10" />
              <div className="text-lg font-bold mb-1 text-cyan-200">{cert.title}</div>
              <div className="text-gray-300 text-sm mb-2">{cert.org}</div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
} 