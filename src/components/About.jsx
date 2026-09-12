import React from "react";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT, EDUCATION } from "../constants";
import { motion } from "framer-motion";
import { FaGraduationCap, FaLayerGroup, FaCheckCircle, FaAward } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="border-b border-neutral-800/80 pb-16 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl lg:text-5xl font-light tracking-tight">
          <span className="gradient-text font-normal">Hakkımda</span>
        </h2>
        <p className="mt-3 text-neutral-400 text-sm sm:text-base max-w-xl mx-auto">
          Mühendislik vizyonum, akademik geçmişim ve odaklandığım temel mimari standartlar
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side: Image & Fast Stats */}
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-5/12 flex flex-col items-center"
        >
          <div className="relative group w-full max-w-sm">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <img 
              className="relative rounded-3xl shadow-2xl w-full h-[360px] object-cover border border-neutral-800" 
              src={aboutImg} 
              alt="Burak Akgün - Hakkımda" 
            />
          </div>

          {/* Academic Badge */}
          <div className="mt-6 w-full max-w-sm p-5 rounded-2xl bg-neutral-900/80 border border-neutral-800 backdrop-blur-md">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xl">
                <FaGraduationCap />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-white font-semibold text-base">{EDUCATION.school}</h4>
                  <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                    Mezun
                  </span>
                </div>
                <p className="text-sm text-neutral-300 font-medium">{EDUCATION.degree}</p>
                <div className="mt-2 flex items-center justify-between text-xs text-neutral-400">
                  <span>{EDUCATION.years}</span>
                  <span className="font-semibold text-purple-300">GNO: {EDUCATION.gpa}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Detailed Summary & Engineering Pillars */}
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 60 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-7/12"
        >
          <div className="p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-md mb-8">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <FaLayerGroup className="text-indigo-400" />
              <span>Yazılım Mühendisliği & Mimari Yaklaşımım</span>
            </h3>
            <p className="text-neutral-300 leading-relaxed text-base sm:text-lg font-light mb-6">
              {ABOUT_TEXT}
            </p>

            {/* Key Engineering Pillars from CV */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-neutral-800">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/60">
                <FaCheckCircle className="text-emerald-400 text-sm mt-1 flex-shrink-0" />
                <span className="text-neutral-300 text-sm">
                  <strong className="text-white">Clean Architecture & CQRS:</strong> Sürdürülebilir, bağımsız ve test edilebilir katmanlı yapı.
                </span>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/60">
                <FaCheckCircle className="text-cyan-400 text-sm mt-1 flex-shrink-0" />
                <span className="text-neutral-300 text-sm">
                  <strong className="text-white">Veri Tutarlılığı & Race Condition:</strong> xmin token, sıralı kilitleme ve Redis dağıtık kilitleri.
                </span>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/60">
                <FaCheckCircle className="text-purple-400 text-sm mt-1 flex-shrink-0" />
                <span className="text-neutral-300 text-sm">
                  <strong className="text-white">E2E Test Otomasyonu:</strong> Playwright ve Page Object Model ile CI/CD kalite güvencesi.
                </span>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/60">
                <FaCheckCircle className="text-pink-400 text-sm mt-1 flex-shrink-0" />
                <span className="text-neutral-300 text-sm">
                  <strong className="text-white">Üretim Teslimatı:</strong> Next.js, Sanity CMS ve Vercel ile canlı müşteri platformları yönetimi.
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
