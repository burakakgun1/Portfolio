import React from "react";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiMongodb, SiPostgresql, SiNodedotjs, SiNextdotjs, SiJira, SiNestjs, SiSanity, SiPrisma, SiCplusplus, SiPostman } from "react-icons/si";
import { FaHtml5, FaPython, FaGitAlt, FaGithub, FaJava, FaSwift } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const technologies = [
  { icon: RiReactjsLine, name: "React", desc: "Kullanıcı Arayüzü", color: "text-cyan-400", duration: 2.5 },
  { icon: SiNextdotjs, name: "Next.js", desc: "Full Stack Framework", color: "text-white", duration: 3 },
  { icon: SiTypescript, name: "TypeScript", desc: "Tip Güvenliği", color: "text-blue-500", duration: 3 },
  { icon: FaHtml5, name: "HTML5", desc: "Web Standartı", color: "text-orange-500", duration: 5 },
  { icon: RiTailwindCssFill, name: "Tailwind CSS", desc: "Modern CSS", color: "text-sky-500", duration: 6 },
  { icon: SiNodedotjs, name: "Node.js", desc: "Backend Runtime", color: "text-green-500", duration: 4 },
  { icon: SiNestjs, name: "Nest.js", desc: "Backend Framework", color: "text-red-600", duration: 4 },
  { icon: SiMongodb, name: "MongoDB", desc: "NoSQL Veritabanı", color: "text-green-400", duration: 2.5 },
  { icon: SiPostgresql, name: "PostgreSQL", desc: "İlişkisel Veritabanı", color: "text-blue-400", duration: 4.5 },
  { icon: SiSanity, name: "Sanity", desc: "Headless CMS", color: "text-red-500", duration: 3 },
  { icon: SiPrisma, name: "Prisma", desc: "Modern ORM", color: "text-white", duration: 5 },
  { icon: FaPython, name: "Python", desc: "AI & Backend", color: "text-yellow-500", duration: 3.5 },
  { icon: FaJava, name: "Java", desc: "Nesne Yönelimli Dil", color: "text-orange-400", duration: 2 },
  { icon: SiCplusplus, name: "C++", desc: "Sistem Programlama", color: "text-blue-600", duration: 4 },
  { icon: FaSwift, name: "Swift", desc: "iOS Geliştirme", color: "text-orange-500", duration: 3 },
  { icon: FaGitAlt, name: "Git", desc: "Versiyon Kontrol", color: "text-orange-600", duration: 4 },
  { icon: FaGithub, name: "GitHub", desc: "Kod Platformu", color: "text-white", duration: 2 },
  { icon: SiJira, name: "Jira", desc: "Proje Yönetimi", color: "text-blue-600", duration: 5 },
  { icon: SiPostman, name: "Postman", desc: "API Test Aracı", color: "text-orange-500", duration: 3 },
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 py-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center text-4xl lg:text-5xl font-light"
      >
        <span className="gradient-text">Teknolojiler</span>
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap justify-center items-center gap-6"
      >
        {technologies.map((tech, index) => (
          <div key={index} className="relative group">
            <motion.div
              variants={iconVariants(tech.duration)}
              initial="initial"
              animate="animate"
              className="glass rounded-2xl p-6 card-hover border border-neutral-700 cursor-pointer relative z-10"
            >
              <tech.icon className={`text-6xl lg:text-7xl ${tech.color}`} />
            </motion.div>

            <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20 w-max">
              <div className="glass px-4 py-3 rounded-xl border border-neutral-700 bg-neutral-900/90 backdrop-blur-md shadow-xl text-center">
                <h3 className="text-white font-semibold text-sm mb-1">{tech.name}</h3>
                <p className="text-neutral-400 text-xs">{tech.desc}</p>
              </div>
              <div className="w-3 h-3 bg-neutral-900 border-r border-b border-neutral-700 transform rotate-45 absolute left-1/2 -translate-x-1/2 -bottom-1.5"></div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
