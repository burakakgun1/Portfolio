import React from 'react';
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="border-b border-neutral-800/80 pb-20 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl lg:text-5xl font-light tracking-tight">
          <span className="gradient-text font-normal">İletişim</span>
        </h2>
        <p className="mt-3 text-neutral-400 text-sm sm:text-base max-w-xl mx-auto">
          Projeleriniz, iş fırsatları veya teknik iş birlikleri için doğrudan iletişime geçebilirsiniz
        </p>
      </motion.div>

      <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
        className="p-8 sm:p-10 rounded-3xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-md max-w-3xl mx-auto shadow-2xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Email */}
          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-950/70 border border-neutral-800 hover:border-purple-500/40 transition-all card-hover group"
          >
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 text-xl group-hover:scale-110 transition-transform">
              <FaEnvelope />
            </div>
            <div>
              <p className="text-xs text-neutral-400">E-Posta</p>
              <p className="text-sm sm:text-base font-medium text-white group-hover:text-purple-300 transition-colors">
                {CONTACT.email}
              </p>
            </div>
          </a>

          {/* Phone */}
          <a
            href={`tel:${CONTACT.phoneNo.replace(/\s+/g, '')}`}
            className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-950/70 border border-neutral-800 hover:border-blue-500/40 transition-all card-hover group"
          >
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 text-xl group-hover:scale-110 transition-transform">
              <FaPhone />
            </div>
            <div>
              <p className="text-xs text-neutral-400">Telefon</p>
              <p className="text-sm sm:text-base font-medium text-white group-hover:text-blue-300 transition-colors">
                {CONTACT.phoneNo}
              </p>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-950/70 border border-neutral-800">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 text-xl">
              <FaMapMarkerAlt />
            </div>
            <div>
              <p className="text-xs text-neutral-400">Konum</p>
              <p className="text-sm sm:text-base font-medium text-white">
                {CONTACT.address}
              </p>
            </div>
          </div>

          {/* Portfolio */}
          <a
            href={CONTACT.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-950/70 border border-neutral-800 hover:border-cyan-500/40 transition-all card-hover group"
          >
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 text-xl group-hover:scale-110 transition-transform">
              <FaGlobe />
            </div>
            <div>
              <p className="text-xs text-neutral-400">Portfolyo Web</p>
              <p className="text-sm sm:text-base font-medium text-white group-hover:text-cyan-300 transition-colors">
                burakakgun-portfolio.vercel.app
              </p>
            </div>
          </a>
        </div>

        {/* Social Bar */}
        <div className="pt-6 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-neutral-400">Sosyal profillerim üzerinden de bana ulaşabilirsiniz:</p>
          <div className="flex items-center gap-3">
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-300 hover:text-blue-400 hover:border-blue-500/40 transition-all text-sm font-medium"
            >
              <FaLinkedin className="text-base" />
              <span>LinkedIn</span>
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-600 transition-all text-sm font-medium"
            >
              <FaGithub className="text-base" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;