"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="sticky top-0 h-fit z-50 bg-black text-white shadow-lg px-4 py-4">
      <nav className="bg-black text-white flex justify-between items-center">
        <div className="text-3xl md:text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Ayush Dadhaniya.
        </div>
        <ul className="hidden md:flex space-x-6">
          <li><Link href="#about" className="hover:text-red-400 animate-spin">About</Link></li>
          <li><Link href="#education" className="hover:text-red-400">Education</Link></li>
          <li><Link href="#skills" className="hover:text-red-400">Skills</Link></li>
          <li><Link href="#experience" className="hover:text-red-400">Experience</Link></li>
          <li><Link href="#projects" className="hover:text-red-400">Projects</Link></li>
          <li><Link href="#certificates" className="hover:text-red-400">Certificates</Link></li>
          <li><Link href="#contact" className="hover:text-red-400">Contact</Link></li>
        </ul>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center text-white bg-black space-y-4 py-4">
          <li><a href="#about" className="hover:text-red-400" onClick={toggleMenu}>About</a></li>
          <li><a href="#education" className="hover:text-red-400" onClick={toggleMenu}>Education</a></li>
          <li><a href="#skills" className="hover:text-red-400" onClick={toggleMenu}>Skills</a></li>
          <li><a href="#experience" className="hover:text-red-400" onClick={toggleMenu}>Experience</a></li>
          <li><a href="#projects" className="hover:text-red-400" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#certificates" className="hover:text-red-400" onClick={toggleMenu}>Certificates</a></li>
          <li><a href="#contact" className="hover:text-red-400" onClick={toggleMenu}>Contact</a></li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
