import React from 'react';
import logo from "../assets/BurakLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <img className="mx-2 w-20 h-auto" src={logo} alt="logo" /> 
      </div>
      <div className='m-8 flex items-center justify-center gap-6 text-2xl'>
        <a href="https://www.linkedin.com/in/burak-akgün-541767219/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/burakakgun1" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/burak.kgn/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
