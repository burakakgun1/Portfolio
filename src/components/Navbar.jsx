import React from 'react';
import logo from "../assets/BurakLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='mb-8 flex items-center justify-between py-6 glass rounded-2xl px-6 sticky top-4 z-50 transition-all duration-500 ease-in-out'>
      <div className='flex flex-shrink-0 items-center'>
        <img 
          className="mx-2 w-16 h-auto transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-2" 
          src={logo} 
          alt="logo" 
        /> 
      </div>
      <div className='flex items-center justify-center gap-6 text-2xl'>
        <a 
          href="https://www.linkedin.com/in/burak-akgün-541767219/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transition-all duration-500 ease-in-out hover:text-blue-400 hover:scale-125 hover:rotate-6 hover:shadow-lg"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/burakakgun1" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transition-all duration-500 ease-in-out hover:text-gray-400 hover:scale-125 hover:rotate-6 hover:shadow-lg"
        >
          <FaGithub />
        </a>
        <a 
          href="https://www.instagram.com/burak.kgn/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transition-all duration-500 ease-in-out hover:text-pink-400 hover:scale-125 hover:rotate-6 hover:shadow-lg"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
