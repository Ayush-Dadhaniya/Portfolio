import React from "react";
import {  
  FaJs, 
  FaReact, 
  FaGit, 
  FaPython, 
  FaJava,
  FaNodeJs,
} from "react-icons/fa";
import { 
  SiMysql, 
  SiMongodb, 
  SiPostgresql, 
  SiCplusplus, 
  SiDocker,
  SiVercel,
  SiExpress,
  SiDjango,
  SiGithub
} from "react-icons/si";
import { DiSqllite } from "react-icons/di";

const Skills = () => {
  return (
    <section className="pt-20 pb-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-white">My </span>
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Skills</span>
        </h2>

        {/* Languages & Frameworks */}
        <h3 className="col-span-full text-3xl font-bold mb-6">Languages & Frameworks</h3>
        <div className="flex flex-wrap gap-6 items-center justify-center sm:justify-start mb-20">
          <div className="skill-card">
            <SiCplusplus className="text-pink-500 mb-4 text-4xl" />
            <h4 className="text-xl font-semibold">C/C++</h4>
          </div>
          <div className="skill-card">
            <FaJava className="text-pink-500 mb-4 text-4xl" />
            <h4 className="text-xl font-semibold">Java</h4>
          </div>
          <div className="skill-card">
            <FaPython className="text-pink-500 mb-4 text-4xl" />
            <h4 className="text-xl font-semibold">Python</h4>
          </div>
          <div className="skill-card">
            <FaJs className="text-pink-500 mb-4 text-4xl" />
            <h4 className="text-xl font-semibold">JavaScript</h4>
          </div>
          <div className="skill-card">
            <FaReact className="text-pink-500 mb-4 text-4xl" />
            <h4 className="text-xl font-semibold">ReactJS</h4>
          </div>
          <div className="skill-card">
            <SiDjango className="text-pink-500 mb-4 text-4xl" />
            <h4 className="text-xl font-semibold">Django</h4>
          </div>
          <div className="skill-card">
            <SiExpress className="text-pink-500 mb-4 text-4xl" />
            <h4 className="text-xl font-semibold">ExpressJS</h4>
          </div>
          <div className="skill-card">
            <FaNodeJs className="text-pink-500 mb-4 text-4xl" />
            <h4 className="text-xl font-semibold">NodeJS</h4>
          </div>
        </div>

        {/* Databases & Query Languages */}
        <h3 className="col-span-full text-3xl font-bold mb-6">Databases & Query Languages</h3>
        <div className="flex flex-wrap gap-6 justify-center sm:justify-start mb-20">
          <div className="skill-card">
            <SiPostgresql className="text-pink-500 mb-4 text-4xl" />
            <h4 className="text-xl font-semibold">PostgreSQL</h4>
          </div>
          <div className="skill-card">
            <SiMysql className="text-pink-500 mb-4 text-4xl" />
            <h4 className="text-xl font-semibold">MySQL</h4>
          </div>
          <div className="skill-card">
            <DiSqllite className="text-pink-500 mb-4 text-4xl" />
            <h4 className="text-xl font-semibold">SQLite</h4>
          </div>
          <div className="skill-card">
            <SiMongodb className="text-pink-500 mb-4 text-4xl" />
            <h4 className="text-xl font-semibold">MongoDB</h4>
          </div>
        </div>

        {/* Tools & Others */}
        <h3 className="col-span-full text-3xl font-bold mb-6">Tools & Others</h3>
        <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
          <div className="skill-card">
            <FaGit className="text-pink-500 mb-4 text-4xl" />
            <h4 className="text-xl font-semibold">Git</h4>
          </div>
          <div className="skill-card">
            <SiVercel className="text-pink-500 mb-4 text-4xl" />
            <h4 className="text-xl font-semibold">Vercel</h4>
          </div>
          <div className="skill-card">
            <SiDocker className="text-pink-500 mb-4 text-4xl" />
            <h4 className="text-xl font-semibold">Docker</h4>
          </div>
          <div className="skill-card">
            <SiGithub className="text-pink-500 mb-4 text-4xl" />
            <h4 className="text-xl font-semibold">Github</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
