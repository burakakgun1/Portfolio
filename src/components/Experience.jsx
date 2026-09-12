import React from "react";
import { EXPERIENCES } from "../constants";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience" className="border-t border-zinc-900 pt-16">
      <div className="mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
          İş Deneyimi
        </h2>
        <p className="text-zinc-400 text-sm max-w-xl">
          Yazılım stajları ve mühendislik takımlarında üstlendiğim roller ve pratikler.
        </p>
      </div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 sm:before:left-4 before:h-full before:w-px before:bg-zinc-800/80">
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className="relative pl-8 sm:pl-10">
            {/* Timeline node */}
            <div className="absolute left-1.5 sm:left-2.5 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-zinc-900 bg-purple-400"></div>

            <div className="pro-card rounded-xl p-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-medium text-purple-300">
                    {exp.company}
                  </p>
                </div>

                <div className="flex items-center gap-3 text-xs text-zinc-400 font-mono">
                  <div className="flex items-center gap-1">
                    <FaCalendarAlt className="text-zinc-500 text-[10px]" />
                    <span>{exp.date}</span>
                  </div>
                  {exp.location && (
                    <div className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-zinc-500 text-[10px]" />
                      <span>{exp.location}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Bullet points */}
              <ul className="space-y-2 mb-5 text-sm text-zinc-300">
                {Array.isArray(exp.description) ? (
                  exp.description.map((bullet, bIndex) => (
                    <li key={bIndex} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="text-zinc-500 mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))
                ) : (
                  <li className="leading-relaxed">{exp.description}</li>
                )}
              </ul>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/60">
                {exp.technologies.map((tech, tIndex) => (
                  <span 
                    key={tIndex} 
                    className="px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
