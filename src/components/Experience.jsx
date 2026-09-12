import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCalendarAlt, FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience" className="border-b border-neutral-800/80 pb-16 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl lg:text-5xl font-light tracking-tight">
          <span className="gradient-text font-normal">İş Deneyimi</span>
        </h2>
        <p className="mt-3 text-neutral-400 text-sm sm:text-base max-w-xl mx-auto">
          Staj ve mühendislik takımlarında gerçekleştirdiğim çalışmalar ve sorumluluklar
        </p>
      </motion.div>

      <div className="space-y-6 max-w-5xl mx-auto">
        {EXPERIENCES.map((exp, index) => (
          <motion.div 
            key={index} 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700/80 backdrop-blur-sm card-hover transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <FaBriefcase className="text-purple-400 text-sm" />
                  <h3 className="text-xl font-semibold text-white">
                    {exp.role}
                  </h3>
                </div>
                <h4 className="text-base font-medium text-purple-300">
                  {exp.company}
                </h4>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-neutral-400">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-950/80 border border-neutral-800">
                  <FaCalendarAlt className="text-neutral-500" />
                  <span>{exp.date}</span>
                </div>
                {exp.location && (
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-950/80 border border-neutral-800">
                    <FaMapMarkerAlt className="text-neutral-500" />
                    <span>{exp.location}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Bullets */}
            <div className="space-y-2 mb-6">
              {Array.isArray(exp.description) ? (
                exp.description.map((bullet, bIndex) => (
                  <div key={bIndex} className="flex items-start gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"></span>
                    <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                      {bullet}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                  {exp.description}
                </p>
              )}
            </div>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-800/60">
              {exp.technologies.map((tech, tIndex) => (
                <span 
                  key={tIndex} 
                  className="px-3 py-1 rounded-lg bg-neutral-950/80 border border-neutral-800 text-neutral-300 text-xs font-medium hover:border-neutral-700 hover:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
