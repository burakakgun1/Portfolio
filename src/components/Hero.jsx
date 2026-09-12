import React from "react";
import { HERO_CONTENT, PERSONAL_INFO } from "../constants";
import profilePic from "../assets/BurakPP.jpg";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { SiDotnet, SiNestjs } from "react-icons/si";
import { PlaywrightIcon } from "./Icons";

const Hero = () => {
  return (
    <section id="hero" className="pb-8 pt-4">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <div className="w-full lg:w-3/5 text-left">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-zinc-800 bg-zinc-900/80 text-zinc-300 text-xs font-medium mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            <span>İstanbul, Türkiye</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Software Engineer & Full Stack Developer</span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3">
            {PERSONAL_INFO.name}
          </h1>

          {/* Subtitle */}
          <div className="flex items-center gap-2.5 text-xl sm:text-2xl font-medium text-zinc-400 mb-6">
            <span className="text-zinc-100">Software Engineer</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Full Stack Developer</span>
          </div>

          {/* Bio from CV */}
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-normal">
            {HERO_CONTENT}
          </p>

          {/* Core Tech Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium">
              <SiDotnet className="text-purple-400 text-sm" />
              <span>.NET 9 (C#)</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium">
              <SiNestjs className="text-red-400 text-sm" />
              <span>NestJS & Node.js</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium">
              <PlaywrightIcon className="w-3.5 h-3.5 text-emerald-400 inline-block" />
              <span>Playwright E2E</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium">
              <span className="text-zinc-400 font-mono">/</span>
              <span>Clean Architecture & CQRS</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="pro-btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium"
            >
              <span>Projeleri İncele</span>
              <FaArrowRight className="text-xs" />
            </a>

            <a
              href="#contact"
              className="pro-btn-secondary inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium"
            >
              <span>İletişime Geç</span>
            </a>

            <div className="flex items-center gap-2 pl-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="text-base" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-base" />
              </a>
            </div>
          </div>
        </div>

        {/* Profile Headshot */}
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
          <div className="relative group">
            <div className="w-64 sm:w-72 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-xl">
              <img 
                className="w-full h-auto object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-300" 
                src={profilePic} 
                alt={PERSONAL_INFO.name}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
