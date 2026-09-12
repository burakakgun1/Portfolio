import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { PERSONAL_INFO } from '../constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-20 pt-8 pb-10 border-t border-zinc-900 text-xs text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        <span className="text-zinc-300 font-medium">{PERSONAL_INFO.name}</span>
        <span className="mx-2">•</span>
        <span>Software Engineer</span>
      </div>

      <div className="flex items-center gap-4">
        <a
          href={PERSONAL_INFO.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-300 transition-colors"
          aria-label="LinkedIn"
        >
          LinkedIn
        </a>
        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-300 transition-colors"
          aria-label="GitHub"
        >
          GitHub
        </a>
        <a
          href={PERSONAL_INFO.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-300 transition-colors"
          aria-label="Instagram"
        >
          Instagram
        </a>
      </div>

      <div>
        <span>© {currentYear} Tüm hakları saklıdır.</span>
      </div>
    </footer>
  );
};

export default Footer;
