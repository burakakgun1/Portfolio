import React from "react";
import { HERO_CONTENT, PERSONAL_INFO } from "../constants";
import profilePic from "../assets/BurakPP.jpg";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowRight, FaCode } from "react-icons/fa";
import { SiDotnet, SiNestjs } from "react-icons/si";
import { PlaywrightIcon } from "./Icons";

const container = (delay) => ({
  hidden: { x: -60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: delay, duration: 0.6, ease: "easeOut" },
  },
});

const Hero = () => {
  return (
    <section id="hero" className="border-b border-neutral-800/80 pb-16 pt-6 lg:pb-24">
      <div className="flex flex-wrap items-center min-h-[calc(100vh-120px)]">
        <div className="w-full lg:w-3/5">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Engineering Status Pill */}
            <motion.div
              variants={container(0.1)}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/90 text-neutral-300 text-xs sm:text-sm font-medium mb-6 shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              <span>İstanbul, Türkiye</span>
              <span className="text-neutral-600">•</span>
              <span className="text-neutral-400">Software Engineer & Full Stack Developer</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={container(0.2)}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4"
            >
              {PERSONAL_INFO.name}
            </motion.h1>

            {/* Role Title */}
            <motion.div
              variants={container(0.4)}
              initial="hidden"
              animate="visible"
              className="mb-6 flex flex-wrap items-center justify-center lg:justify-start gap-2.5"
            >
              <span className="text-purple-400 text-2xl sm:text-3xl lg:text-4xl tracking-tight font-semibold">
                Software Engineer
              </span>
              <span className="text-neutral-600 text-2xl sm:text-3xl font-light hidden sm:inline">•</span>
              <span className="text-neutral-200 text-2xl sm:text-3xl font-normal">
                Full Stack Developer
              </span>
            </motion.div>

            {/* Summary Text */}
            <motion.p 
              variants={container(0.6)}
              initial="hidden"
              animate="visible" 
              className="max-w-2xl font-light tracking-normal text-base sm:text-lg leading-relaxed text-neutral-300 mb-8"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* Quick Tech Highlights */}
            <motion.div
              variants={container(0.8)}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-300 text-xs sm:text-sm">
                <SiDotnet className="text-purple-400 text-base" />
                <span>.NET 9 / C#</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-300 text-xs sm:text-sm">
                <SiNestjs className="text-red-500 text-base" />
                <span>NestJS & Node.js</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-300 text-xs sm:text-sm">
                <PlaywrightIcon className="w-4 h-4 text-emerald-400 inline-block" />
                <span>Playwright E2E</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-300 text-xs sm:text-sm">
                <FaCode className="text-cyan-400 text-base" />
                <span>Next.js & React</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-medium text-sm sm:text-base hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-105"
              >
                <span>Projeleri İncele</span>
                <FaArrowRight className="text-xs" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 font-medium text-sm sm:text-base transition-all duration-300 hover:scale-105"
              >
                <span>İletişime Geç</span>
              </a>

              <div className="flex items-center gap-3 pl-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-600 hover:scale-110 transition-all duration-300"
                  aria-label="GitHub Profil"
                >
                  <FaGithub className="text-lg" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-300 hover:text-blue-400 hover:border-blue-500/50 hover:scale-110 transition-all duration-300"
                  aria-label="LinkedIn Profil"
                >
                  <FaLinkedin className="text-lg" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Profile Visual */}
        <div className="w-full lg:w-2/5 lg:p-6 mt-12 lg:mt-0">
          <div className="flex justify-center">
            <motion.div
              initial={{ x: 60, opacity: 0, scale: 0.9 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="relative group"
            >
              {/* Dynamic decorative backdrop blur */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-700"></div>
              
              <div className="relative rounded-3xl overflow-hidden border border-neutral-800/80 bg-neutral-900/50 shadow-2xl backdrop-blur-sm">
                <img 
                  className="w-[320px] sm:w-[380px] h-auto object-cover transition duration-700 group-hover:scale-105" 
                  src={profilePic} 
                  alt={PERSONAL_INFO.name}
                  width={380}
                  height={380}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Micro floating info chip */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-neutral-900/90 border border-neutral-700/80 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-neutral-400">Lisans Mezuniyeti</p>
                      <p className="text-sm font-semibold text-white">Trakya Üni. Bilgisayar Müh.</p>
                    </div>
                    <div className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                      GNO: 3.06
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
