import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark relative py-12">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-neon-blue/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Burak Akgün</h3>
              <p className="text-gray-400">
                Full Stack Web Developer olarak modern ve yenilikçi web uygulamaları geliştiriyorum.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Hızlı Bağlantılar</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-neon-blue transition-colors">
                    Hakkımda
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-neon-purple transition-colors">
                    Projeler
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-neon-pink transition-colors">
                    İletişim
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">İletişim</h3>
              <p className="text-gray-400">
                İstanbul, Türkiye
              </p>
              <p className="text-gray-400">
                contact@example.com
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://www.linkedin.com/in/burak-akgün-541767219/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-neon-blue transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/burakakgun1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-neon-purple transition-all duration-300 hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/burak.kgn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-neon-pink transition-all duration-300 hover:scale-110"
            >
              <FaInstagram />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center border-t border-gray-800 pt-8">
            <p className="text-gray-400 flex items-center justify-center">
              <span>© {currentYear} Burak Akgün. Made with</span>
              <FaHeart className="text-neon-pink mx-2" />
              <span>using React & Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
