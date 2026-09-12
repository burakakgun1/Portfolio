import React from 'react';
import logo from "../assets/BurakLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { PERSONAL_INFO } from '../constants';

const Navbar = () => {
  return (
    <header className="sticky top-4 z-50 mb-8">
      <nav className="flex items-center justify-between py-4 px-6 glass rounded-2xl border border-neutral-800/80 bg-neutral-900/60 backdrop-blur-xl shadow-xl transition-all duration-300">
        <a href="#hero" className="flex items-center gap-3 group">
          <img 
            className="w-10 sm:w-12 h-auto transition-transform duration-300 group-hover:scale-110" 
            src={logo} 
            alt="Burak Akgün" 
          /> 
          <div className="hidden sm:block">
            <span className="text-white font-semibold text-sm tracking-tight block">Burak Akgün</span>
            <span className="text-[11px] text-neutral-400 block">Software Engineer</span>
          </div>
        </a>

        {/* Section Links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-neutral-400">
          <a href="#about" className="hover:text-white transition-colors">Hakkımda</a>
          <a href="#technologies" className="hover:text-white transition-colors">Yetenekler</a>
          <a href="#experience" className="hover:text-white transition-colors">Deneyim</a>
          <a href="#projects" className="hover:text-white transition-colors">Projeler</a>
          <a href="#contact" className="hover:text-white transition-colors">İletişim</a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3 text-lg">
          <a 
            href={PERSONAL_INFO.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800 text-neutral-300 hover:text-blue-400 hover:border-blue-500/40 hover:scale-110 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a 
            href={PERSONAL_INFO.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-600 hover:scale-110 transition-all duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a 
            href={PERSONAL_INFO.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800 text-neutral-300 hover:text-pink-400 hover:border-pink-500/40 hover:scale-110 transition-all duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
