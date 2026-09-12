import React from 'react';
import logo from "../assets/BurakLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { PERSONAL_INFO } from '../constants';

const Navbar = () => {
  return (
    <header className="sticky top-4 z-50 mb-10">
      <nav className="pro-nav rounded-xl px-5 py-3 flex items-center justify-between shadow-sm">
        <a href="#hero" className="flex items-center gap-3">
          <img 
            className="w-9 h-auto rounded-lg" 
            src={logo} 
            alt="Burak Akgün" 
          /> 
          <div>
            <span className="text-white font-medium text-sm tracking-tight block">Burak Akgün</span>
            <span className="text-[11px] text-zinc-400 block">Software Engineer</span>
          </div>
        </a>

        {/* Section Links */}
        <div className="hidden md:flex items-center gap-6 text-xs text-zinc-400">
          <a href="#about" className="hover:text-white transition-colors">Hakkımda</a>
          <a href="#technologies" className="hover:text-white transition-colors">Yetenekler</a>
          <a href="#experience" className="hover:text-white transition-colors">Deneyim</a>
          <a href="#projects" className="hover:text-white transition-colors">Projeler</a>
          <a href="#contact" className="hover:text-white transition-colors">İletişim</a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-2 text-base">
          <a 
            href={PERSONAL_INFO.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a 
            href={PERSONAL_INFO.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a 
            href={PERSONAL_INFO.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-colors"
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
