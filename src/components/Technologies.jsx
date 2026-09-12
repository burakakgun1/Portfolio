import React, { useState } from "react";
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
  { id: "all", label: "Tümü" },
  { id: "backend", label: "Backend & Mimari" },
  { id: "languages", label: "Diller" },
  { id: "database", label: "Veritabanı & Cache" },
  { id: "testing", label: "Test & DevOps" },
  { id: "spoken", label: "Konuşma Dilleri" },
];

const techItems = [
  // Backend
  { name: ".NET 9", category: "backend", desc: "Clean Architecture & CQRS", color: "text-purple-400", icon: SiDotnet },
  { name: "ASP.NET Core", category: "backend", desc: "High Concurrency RESTful Web API", color: "text-purple-300", icon: SiDotnet },
  { name: "NestJS", category: "backend", desc: "Modüler Kurumsal REST API", color: "text-red-400", icon: SiNestjs },
  { name: "Node.js", category: "backend", desc: "V8 JavaScript/TypeScript Runtime", color: "text-emerald-400", icon: SiNodedotjs },
  { name: "Next.js", category: "backend", desc: "Full Stack SSR & App Router", color: "text-zinc-200", icon: SiNextdotjs },
  { name: "React", category: "backend", desc: "Modern UI Bileşenleri & Hook Mimarisi", color: "text-sky-400", icon: RiReactjsLine },
  { name: "RESTful APIs", category: "backend", desc: "Uçtan Uca Servis & Güvenlik Mimarisi", color: "text-zinc-300", icon: FaServer },

  // Languages
  { name: "C#", category: "languages", desc: "Modern Nesne Yönelimli Sistem Geliştirme", color: "text-purple-400", icon: TbBrandCSharp },
  { name: "TypeScript", category: "languages", desc: "Tip Güvenli Enterprise Kod Tabanı", color: "text-blue-400", icon: SiTypescript },
  { name: "JavaScript", category: "languages", desc: "Modern ES6+ Standartları", color: "text-amber-300", icon: SiJavascript },
  { name: "Python", category: "languages", desc: "YOLOv8 Görüntü İşleme & Pipeline", color: "text-yellow-400", icon: FaPython },
  { name: "SQL", category: "languages", desc: "İlişkisel Veri Sorgulama & İndeksleme", color: "text-cyan-400", icon: FaDatabase },
  { name: "C++", category: "languages", desc: "ROS & Sistem Programlama", color: "text-blue-500", icon: SiCplusplus },

  // Database & Caching
  { name: "PostgreSQL", category: "database", desc: "xmin Concurrency Token & İlişkisel Veritabanı", color: "text-sky-400", icon: SiPostgresql },
  { name: "Redis", category: "database", desc: "Dağıtık Kilit (Distributed Locks) & Caching", color: "text-red-400", icon: SiRedis },
  { name: "MongoDB", category: "database", desc: "NoSQL Doküman Veritabanı", color: "text-emerald-400", icon: SiMongodb },
  { name: "EF Core", category: "database", desc: "Entity Framework Core & Migration", color: "text-purple-300", icon: FaDatabase },
  { name: "Prisma ORM", category: "database", desc: "Type-safe ORM Şemaları", color: "text-teal-300", icon: SiPrisma },

  // Testing & DevOps
  { name: "Playwright", category: "testing", desc: "Page Object Model (POM) E2E Test Suite", color: "text-emerald-400", icon: PlaywrightIcon },
  { name: "Docker", category: "testing", desc: "Compose ile Servis Konteynerizasyonu", color: "text-sky-400", icon: SiDocker },
  { name: "Testcontainers", category: "testing", desc: "İzole DB/Redis Entegrasyon Testleri", color: "text-cyan-300", icon: TestcontainersIcon },
  { name: "GitHub Actions", category: "testing", desc: "Otomatik CI/CD Test Boru Hatları", color: "text-blue-400", icon: SiGithubactions },
  { name: "Postman", category: "testing", desc: "API Doğrulama & Otomasyon Testleri", color: "text-orange-400", icon: SiPostman },
  { name: "Git", category: "testing", desc: "Sürüm Kontrolü & Ekip İşbirliği", color: "text-orange-500", icon: FaGitAlt },

  // Spoken Languages
  { name: "Türkçe", category: "spoken", desc: "Anadil", color: "text-zinc-300", icon: FaLanguage },
  { name: "İngilizce", category: "spoken", desc: "B2 - Profesyonel Çalışma Yetkinliği", color: "text-zinc-300", icon: FaLanguage },
];

const Technologies = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all" 
    ? techItems 
    : techItems.filter(item => item.category === activeCategory);

  return (
    <section id="technologies" className="border-t border-zinc-900 pt-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
            Teknik Yetenekler
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl">
            Clean Architecture, dağıtık sistemler, test otomasyonu ve modern web ekosisteminde uzmanlaştığım teknolojiler.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-1.5 p-1 rounded-lg bg-zinc-900/80 border border-zinc-800">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                activeCategory === cat.id
                  ? "bg-zinc-800 text-white shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {filteredItems.map((tech) => {
          const IconComponent = tech.icon;
          return (
            <div
              key={tech.name}
              className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700/80 transition-colors flex flex-col justify-between"
            >
              <div className="flex items-center gap-3 mb-2.5">
                <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800">
                  <IconComponent className={`text-xl ${tech.color}`} />
                </div>
                <div>
                  <h3 className="text-zinc-100 font-medium text-sm">
                    {tech.name}
                  </h3>
                  <span className="text-[10px] uppercase font-mono text-zinc-500 block">
                    {tech.category}
                  </span>
                </div>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed">
                {tech.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Technologies;
