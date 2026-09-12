import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { PERSONAL_INFO } from '../constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-neutral-800/80 text-neutral-400">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-white font-semibold text-base mb-1">{PERSONAL_INFO.name}</h3>
          <p className="text-xs text-neutral-400">
            Software Engineer | Full Stack Developer
          </p>
        </div>

        {/* Navigation Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs text-neutral-400">
          <a href="#about" className="hover:text-white transition-colors">Hakkımda</a>
          <a href="#technologies" className="hover:text-white transition-colors">Yetenekler</a>
          <a href="#experience" className="hover:text-white transition-colors">Deneyim</a>
          <a href="#projects" className="hover:text-white transition-colors">Projeler</a>
          <a href="#contact" className="hover:text-white transition-colors">İletişim</a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-blue-400 hover:border-blue-500/30 transition-all"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-base" />
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-all"
            aria-label="GitHub"
          >
            <FaGithub className="text-base" />
          </a>
          <a
            href={PERSONAL_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-pink-400 hover:border-pink-500/30 transition-all"
            aria-label="Instagram"
          >
            <FaInstagram className="text-base" />
          </a>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-neutral-900 text-center text-xs text-neutral-500">
        <p>© {currentYear} {PERSONAL_INFO.name}. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;
