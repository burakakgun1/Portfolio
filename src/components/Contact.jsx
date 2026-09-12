import React from 'react';
import { CONTACT } from '../constants';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="border-t border-zinc-900 pt-16">
      <div className="mb-10 text-left">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
          İletişim
        </h2>
        <p className="text-zinc-400 text-sm max-w-xl">
          İş fırsatları, teknik iş birlikleri veya projeler hakkında konuşmak için dilediğiniz kanaldan ulaşabilirsiniz.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {/* Email */}
        <a
          href={`mailto:${CONTACT.email}`}
          className="pro-card rounded-xl p-4 flex flex-col justify-between group"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-zinc-500 font-mono uppercase">E-Posta</span>
            <FaEnvelope className="text-zinc-400 group-hover:text-purple-400 transition-colors" />
          </div>
          <p className="text-sm font-medium text-white truncate group-hover:text-purple-300 transition-colors">
            {CONTACT.email}
          </p>
        </a>

        {/* Phone */}
        <a
          href={`tel:${CONTACT.phoneNo.replace(/\s+/g, '')}`}
          className="pro-card rounded-xl p-4 flex flex-col justify-between group"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-zinc-500 font-mono uppercase">Telefon</span>
            <FaPhone className="text-zinc-400 group-hover:text-purple-400 transition-colors" />
          </div>
          <p className="text-sm font-medium text-white truncate group-hover:text-purple-300 transition-colors">
            {CONTACT.phoneNo}
          </p>
        </a>

        {/* Location */}
        <div className="pro-card rounded-xl p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-zinc-500 font-mono uppercase">Konum</span>
            <FaMapMarkerAlt className="text-zinc-400" />
          </div>
          <p className="text-sm font-medium text-white">
            {CONTACT.address}
          </p>
        </div>

        {/* Portfolio */}
        <a
          href={CONTACT.portfolio}
          target="_blank"
          rel="noopener noreferrer"
          className="pro-card rounded-xl p-4 flex flex-col justify-between group"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-zinc-500 font-mono uppercase">Portfolyo</span>
            <FaGlobe className="text-zinc-400 group-hover:text-purple-400 transition-colors" />
          </div>
          <p className="text-sm font-medium text-white truncate group-hover:text-purple-300 transition-colors">
            burakakgun-portfolio
          </p>
        </a>
      </div>

      {/* Social Links Bar */}
      <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs text-zinc-400">
          Açık kaynak çalışmalarım ve profesyonel profilim:
        </span>
        <div className="flex items-center gap-2">
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
          >
            <FaLinkedin className="text-sm" />
            <span>LinkedIn</span>
          </a>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
          >
            <FaGithub className="text-sm" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;