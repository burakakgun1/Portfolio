import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbBrandCSharp } from "react-icons/tb";
import { 
  SiDotnet, 
  SiTypescript, 
  SiJavascript, 
  SiPostgresql, 
  SiRedis, 
  SiMongodb, 
  SiNodedotjs, 
  SiNestjs, 
  SiPrisma, 
  SiDocker, 
  SiGithubactions, 
  SiPostman, 
  SiCplusplus,
  SiNextdotjs
} from "react-icons/si";
import { FaPython, FaGitAlt, FaDatabase, FaServer, FaLanguage } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { PlaywrightIcon, TestcontainersIcon } from "./Icons";

const categories = [
  { id: "all", label: "Tüm Yetenekler" },
  { id: "backend", label: "Backend & Mimari" },
  { id: "languages", label: "Programlama Dilleri" },
  { id: "database", label: "Database & Caching" },
  { id: "testing", label: "Testing & DevOps" },
  { id: "spoken", label: "Diller" },
];

const techItems = [
  // Backend
  { name: ".NET 9", category: "backend", desc: "Clean Architecture & CQRS", color: "text-purple-400", icon: SiDotnet },
  { name: "ASP.NET Core", category: "backend", desc: "High Concurrency RESTful Web APIs", color: "text-indigo-400", icon: SiDotnet },
  { name: "NestJS", category: "backend", desc: "Modüler Kurumsal REST API", color: "text-red-500", icon: SiNestjs },
  { name: "Node.js", category: "backend", desc: "V8 JavaScript/TypeScript Runtime", color: "text-green-500", icon: SiNodedotjs },
  { name: "RESTful APIs", category: "backend", desc: "Uçtan Uca Servis & Güvenlik Mimarisi", color: "text-emerald-400", icon: FaServer },
  { name: "Next.js", category: "backend", desc: "Full Stack & SSR Mimari", color: "text-white", icon: SiNextdotjs },
  { name: "React", category: "backend", desc: "Kullanıcı Arayüzü & Durum Yönetimi", color: "text-cyan-400", icon: RiReactjsLine },

  // Languages
  { name: "C#", category: "languages", desc: "Modern Nesne Yönelimli Sistem Geliştirme", color: "text-purple-400", icon: TbBrandCSharp },
  { name: "TypeScript", category: "languages", desc: "Tip Güvenli Enterprise Kod Tabanı", color: "text-blue-400", icon: SiTypescript },
  { name: "JavaScript", category: "languages", desc: "Modern ES6+ Ekosistemi", color: "text-yellow-400", icon: SiJavascript },
  { name: "Python", category: "languages", desc: "YOLOv8 Görüntü İşleme & Scripting", color: "text-yellow-500", icon: FaPython },
  { name: "SQL", category: "languages", desc: "İlişkisel Sorgu & İndeksleme Optimizasyonu", color: "text-sky-400", icon: FaDatabase },
  { name: "C++", category: "languages", desc: "ROS & Yüksek Performanslı Sistemler", color: "text-blue-600", icon: SiCplusplus },

  // Database & Caching
  { name: "PostgreSQL", category: "database", desc: "xmin Concurrency Token & İlişkisel Veritabanı", color: "text-sky-400", icon: SiPostgresql },
  { name: "Redis", category: "database", desc: "Dağıtık Kilit (Distributed Locks) & Caching", color: "text-red-500", icon: SiRedis },
  { name: "MongoDB", category: "database", desc: "NoSQL Doküman Tabanlı Veritabanı", color: "text-green-400", icon: SiMongodb },
  { name: "EF Core", category: "database", desc: "Entity Framework Core & Migration Yönetimi", color: "text-purple-300", icon: FaDatabase },
  { name: "Prisma ORM", category: "database", desc: "Type-safe ORM & Veritabanı Şemaları", color: "text-teal-300", icon: SiPrisma },

  // Testing & DevOps
  { name: "Playwright", category: "testing", desc: "Page Object Model (POM) E2E Test Suite", color: "text-emerald-400", icon: PlaywrightIcon },
  { name: "Docker", category: "testing", desc: "Compose ile Servis Konteynerizasyonu", color: "text-sky-400", icon: SiDocker },
  { name: "Testcontainers", category: "testing", desc: "İzole DB/Redis Entegrasyon Testleri", color: "text-cyan-400", icon: TestcontainersIcon },
  { name: "GitHub Actions", category: "testing", desc: "Otomatik CI/CD Test Boru Hatları", color: "text-blue-400", icon: SiGithubactions },
  { name: "Postman", category: "testing", desc: "API Senaryo & Doğrulama Testleri", color: "text-orange-500", icon: SiPostman },
  { name: "Git", category: "testing", desc: "Sürüm Kontrolü & Ekip İşbirliği", color: "text-orange-600", icon: FaGitAlt },

  // Spoken Languages
  { name: "Türkçe", category: "spoken", desc: "Anadil", color: "text-red-400", icon: FaLanguage },
  { name: "İngilizce", category: "spoken", desc: "B2 - Profesyonel Çalışma Yetkinliği", color: "text-blue-400", icon: FaLanguage },
];

const Technologies = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all" 
    ? techItems 
    : techItems.filter(item => item.category === activeCategory);

  return (
    <section id="technologies" className="border-b border-neutral-800/80 pb-20 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl lg:text-5xl font-light tracking-tight">
          <span className="gradient-text font-normal">Teknik Yetenekler & Teknolojiler</span>
        </h2>
        <p className="mt-3 text-neutral-400 text-sm sm:text-base max-w-xl mx-auto">
          Clean Architecture, dağıtık sistemler, test otomasyonu ve modern web ekosisteminde kullandığım araçlar
        </p>
      </motion.div>

      {/* Category Pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-12 px-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
              activeCategory === cat.id
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-900/30 scale-105"
                : "bg-neutral-900/80 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Tech Cards Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <AnimatePresence>
          {filteredItems.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                key={tech.name}
                className="group p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700/80 backdrop-blur-sm card-hover flex flex-col justify-between"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 rounded-xl bg-neutral-950/80 border border-neutral-800/80 group-hover:border-purple-500/30 transition-colors">
                    <IconComponent className={`text-3xl ${tech.color}`} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base group-hover:text-purple-300 transition-colors">
                      {tech.name}
                    </h3>
                    <span className="text-[11px] uppercase tracking-wider text-neutral-500 font-medium">
                      {tech.category}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed pl-1">
                  {tech.desc}
                </p>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Technologies;
