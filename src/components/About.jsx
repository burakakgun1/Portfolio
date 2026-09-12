import React from "react";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT, EDUCATION } from "../constants";
import { FaGraduationCap, FaCheck } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="border-t border-zinc-900 pt-16">
      <div className="mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
          Hakkımda & Mühendislik Yaklaşımı
        </h2>
        <p className="text-zinc-400 text-sm max-w-2xl">
          Akademik geçmişim, odaklandığım temel mimari standartlar ve mühendislik disiplinim.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: Bio & Highlights */}
        <div className="lg:col-span-8 space-y-6">
          <div className="pro-card rounded-xl p-6 sm:p-7">
            <p className="text-zinc-300 leading-relaxed text-base font-normal mb-6">
              {ABOUT_TEXT}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-zinc-800/80">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/60">
                <FaCheck className="text-purple-400 text-xs mt-1 flex-shrink-0" />
                <span className="text-xs text-zinc-300 leading-relaxed">
                  <strong className="text-white block font-medium mb-0.5">Clean Architecture & CQRS</strong>
                  Sürdürülebilir, gevşek bağlı (loosely coupled) ve test edilebilir katmanlı yapı.
                </span>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/60">
                <FaCheck className="text-purple-400 text-xs mt-1 flex-shrink-0" />
                <span className="text-xs text-zinc-300 leading-relaxed">
                  <strong className="text-white block font-medium mb-0.5">Bakiye Yarış Durumları (Race Condition)</strong>
                  PostgreSQL xmin token, sıralı kilitleme ve Redis dağıtık kilitleri ile tam veri tutarlılığı.
                </span>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/60">
                <FaCheck className="text-purple-400 text-xs mt-1 flex-shrink-0" />
                <span className="text-xs text-zinc-300 leading-relaxed">
                  <strong className="text-white block font-medium mb-0.5">Playwright E2E Test Otomasyonu</strong>
                  Page Object Model (POM) mimarisi ve GitHub Actions ile otomatik CI kalite kapısı.
                </span>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/60">
                <FaCheck className="text-purple-400 text-xs mt-1 flex-shrink-0" />
                <span className="text-xs text-zinc-300 leading-relaxed">
                  <strong className="text-white block font-medium mb-0.5">Canlı Müşteri Dağıtımları</strong>
                  Next.js, TypeScript ve Sanity CMS ile SEO ve performans odaklı ticari platform teslimatı.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Academic Card & Photo */}
        <div className="lg:col-span-4 space-y-6">
          <div className="pro-card rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-purple-400 text-lg">
                <FaGraduationCap />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block">Eğitim</span>
                <h3 className="text-white font-semibold text-base">{EDUCATION.school}</h3>
              </div>
            </div>
            
            <p className="text-sm text-zinc-200 font-medium mb-2">{EDUCATION.degree}</p>
            <p className="text-xs text-zinc-400 leading-relaxed mb-4">{EDUCATION.description}</p>
            
            <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
              <span>{EDUCATION.years}</span>
              <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-purple-300 font-mono font-medium">
                GNO: {EDUCATION.gpa}
              </span>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-md">
            <img 
              src={aboutImg} 
              alt="Burak Akgün" 
              className="w-full h-44 object-cover grayscale-[20%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
