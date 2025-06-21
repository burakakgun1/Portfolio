import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-800 pb-8 py-16">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: -100 }} 
        transition={{ duration: 0.6 }} 
        className="mb-16 text-center text-4xl lg:text-5xl font-light"
      >
        <span className="gradient-text">Deneyim</span>
      </motion.h2>
      <div className="space-y-8">
        {EXPERIENCES.map((experience, index) => (
          <motion.div 
            key={index} 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass rounded-2xl p-8 card-hover"
          >
            <div className="flex flex-wrap lg:items-start gap-6">
              <div className="w-full lg:w-1/4">
                <p className="text-sm text-neutral-400 font-medium">{experience.date}</p>
              </div>
              <div className="w-full lg:w-3/4">
                <h6 className="mb-3 text-xl font-semibold">
                  {experience.role} - <span className="text-purple-400">{experience.company}</span>
                </h6>
                <p className="mb-6 text-neutral-300 leading-relaxed">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
