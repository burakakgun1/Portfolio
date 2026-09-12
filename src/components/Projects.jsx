import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { FaExternalLinkAlt, FaGithub, FaCheckCircle, FaLock, FaTerminal, FaCode } from 'react-icons/fa';

const projectTabs = [
  { id: 'featured', label: 'Öne Çıkan Sistem Projeleri' },
  { id: 'client', label: 'Canlı Müşteri Platformları' },
  { id: 'all', label: 'Tüm Projeler' },
];

const VaultCoreCodeSnippet = () => (
  <div className="w-full h-full bg-[#0d1117] text-neutral-300 font-mono text-[11px] sm:text-xs leading-relaxed flex flex-col justify-between select-none">
    {/* Editor Tab Header */}
    <div className="flex items-center justify-between px-3 py-2 bg-[#161b22] border-b border-neutral-800 text-neutral-400 text-[11px]">
      <div className="flex items-center gap-2">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
        </div>
        <span className="ml-2 px-2 py-0.5 rounded bg-[#0d1117] text-neutral-300 text-[10px] font-semibold flex items-center gap-1 border border-neutral-800">
          <FaCode className="text-purple-400 text-[10px]" />
          PostJournalEntryCommandHandler.cs
        </span>
      </div>
      <span className="text-[10px] text-purple-400 font-medium">.NET 9 • Clean Architecture</span>
    </div>

    {/* Code Body */}
    <div className="p-4 space-y-1 overflow-x-auto text-[11px] sm:text-[12px] bg-[#0d1117]">
      <p className="text-neutral-500">// Clean Architecture CQRS Command Handler</p>
      <p>
        <span className="text-purple-400">public class</span>{" "}
        <span className="text-yellow-200 font-semibold">PostJournalEntryCommandHandler</span> :
      </p>
      <p className="pl-4 text-neutral-400">
        IRequestHandler&lt;<span className="text-cyan-300">PostTransactionCommand</span>, <span className="text-cyan-300">Result&lt;TransactionId&gt;</span>&gt;
      </p>
      <p className="text-neutral-400">&#123;</p>
      <p className="pl-4 text-neutral-500">// 1. Redis Dağıtık Kilit & Idempotency</p>
      <p className="pl-4">
        <span className="text-purple-400">await using var</span> handle ={" "}
        <span className="text-purple-400">await</span> _redisLock.<span className="text-blue-400">AcquireLockAsync</span>(
      </p>
      <p className="pl-8 text-emerald-300">$"acc:&#123;cmd.AccountId&#125;", ct);</p>
      <p className="pl-4 text-neutral-500 mt-1">// 2. Çift Taraflı Muhasebe (Double-Entry)</p>
      <p className="pl-4">
        <span className="text-purple-400">var</span> debit = <span className="text-purple-400">new</span> <span className="text-cyan-300">Entry</span>(cmd.From, EntryType.Debit, cmd.Amount);
      </p>
      <p className="pl-4">
        <span className="text-purple-400">var</span> credit = <span className="text-purple-400">new</span> <span className="text-cyan-300">Entry</span>(cmd.To, EntryType.Credit, cmd.Amount);
      </p>
      <p className="pl-4 text-neutral-500 mt-1">// 3. PostgreSQL xmin Concurrency Token</p>
      <p className="pl-4">
        <span className="text-purple-400">return await</span> _ledger.<span className="text-blue-400">CommitWithConcurrencyCheckAsync</span>(
      </p>
      <p className="pl-8 text-neutral-300">debit, credit, ct);</p>
      <p className="text-neutral-400">&#125;</p>
    </div>

    {/* Editor Status Bar */}
    <div className="flex items-center justify-between px-3 py-1 bg-[#161b22] border-t border-neutral-800 text-[10px] text-neutral-400">
      <div className="flex items-center gap-3">
        <span>git: main*</span>
        <span className="text-emerald-400">● 0 errors</span>
      </div>
      <div className="flex items-center gap-3">
        <span>UTF-8</span>
        <span>C# 13</span>
        <span className="text-purple-300">xUnit: 10/10 Passed</span>
      </div>
    </div>
  </div>
);

const PlaywrightTerminalSnippet = () => (
  <div className="w-full h-full bg-[#0d1117] text-neutral-300 font-mono text-[11px] sm:text-xs leading-relaxed flex flex-col justify-between select-none">
    {/* Terminal Header */}
    <div className="flex items-center justify-between px-3 py-2 bg-[#161b22] border-b border-neutral-800 text-neutral-400 text-[11px]">
      <div className="flex items-center gap-2">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
        </div>
        <span className="ml-2 px-2 py-0.5 rounded bg-[#0d1117] text-neutral-300 text-[10px] font-semibold flex items-center gap-1 border border-neutral-800">
          <FaTerminal className="text-emerald-400 text-[10px]" />
          bash — npx playwright test
        </span>
      </div>
      <span className="text-[10px] text-emerald-400 font-medium">CI Pipeline Status: PASS</span>
    </div>

    {/* Terminal Execution Body */}
    <div className="p-4 space-y-1.5 bg-[#0d1117] text-[11px]">
      <p className="text-neutral-400">
        <span className="text-emerald-400 font-semibold">$</span> npx playwright test --reporter=list
      </p>
      <p className="text-neutral-500">Running 195 tests using 4 workers across Chromium & WebKit</p>
      
      <div className="pt-2 space-y-1">
        <p className="flex items-center gap-2 text-neutral-300">
          <span className="text-emerald-400 font-bold">✓</span>
          <span className="text-neutral-400">[e2e]</span>
          <span className="text-white">ledger-concurrency.spec.ts</span>
          <span className="text-neutral-500">› 10 parallel debit requests</span>
          <span className="text-neutral-500 ml-auto">2.1s</span>
        </p>
        <p className="flex items-center gap-2 text-neutral-300">
          <span className="text-emerald-400 font-bold">✓</span>
          <span className="text-neutral-400">[api]</span>
          <span className="text-white">idempotency-token.spec.ts</span>
          <span className="text-neutral-500">› reject duplicate UUID (409)</span>
          <span className="text-neutral-500 ml-auto">340ms</span>
        </p>
        <p className="flex items-center gap-2 text-neutral-300">
          <span className="text-emerald-400 font-bold">✓</span>
          <span className="text-neutral-400">[pom]</span>
          <span className="text-white">banking-page-object.spec.ts</span>
          <span className="text-neutral-500">› verify journal posting state</span>
          <span className="text-neutral-500 ml-auto">1.2s</span>
        </p>
        <p className="flex items-center gap-2 text-neutral-300">
          <span className="text-emerald-400 font-bold">✓</span>
          <span className="text-neutral-400">[ci]</span>
          <span className="text-white">github-actions-workflow.spec.ts</span>
          <span className="text-neutral-500">› automated PR gate check</span>
          <span className="text-neutral-500 ml-auto">890ms</span>
        </p>
      </div>

      <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-emerald-400 font-semibold">
        <span>195 passed (18.4s)</span>
        <span className="text-[10px] text-neutral-400 font-normal">Artifacts: HTML report, traces & videos</span>
      </div>
    </div>

    {/* Terminal Footer */}
    <div className="px-3 py-1 bg-[#161b22] border-t border-neutral-800 text-[10px] text-neutral-400 flex items-center justify-between">
      <span>GitHub Actions: build #42 passed</span>
      <span className="text-emerald-400 font-medium">Exit Code: 0 (Success)</span>
    </div>
  </div>
);

const BrowserMockup = ({ project }) => (
  <div className="w-full h-full bg-neutral-950 flex flex-col justify-between overflow-hidden">
    {/* Browser Top Bar */}
    <div className="flex items-center justify-between px-3 py-2 bg-neutral-900 border-b border-neutral-800 text-neutral-400 text-xs">
      <div className="flex gap-1.5 items-center">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
      </div>
      <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-neutral-950 border border-neutral-800 text-neutral-400 text-[11px] max-w-[220px] sm:max-w-xs truncate">
        <FaLock className="text-[10px] text-emerald-500" />
        <span className="truncate">{project.link ? project.link.replace(/^https?:\/\//, '') : 'production.app'}</span>
      </div>
      <div className="w-8"></div>
    </div>

    {/* Actual Screenshot */}
    <div className="relative flex-1 overflow-hidden bg-neutral-950">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" 
      />
    </div>
  </div>
);

const Projects = () => {
  const [activeTab, setActiveTab] = useState('featured');

  const filteredProjects = activeTab === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="border-b border-neutral-800/80 pb-20 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl lg:text-5xl font-light tracking-tight">
          <span className="gradient-text font-normal">Geliştirdiğim Projeler</span>
        </h2>
        <p className="mt-3 text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto">
          Çekirdek bankacılık motoru, E2E test otomasyonu ve ticari müşteriler için canlıya alınan kurumsal web platformları
        </p>
      </motion.div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 px-4">
        {projectTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-neutral-800 text-white border border-neutral-700 shadow-md scale-105'
                : 'bg-neutral-900/60 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Projects List */}
      <motion.div layout className="space-y-8 max-w-5xl mx-auto">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div 
              layout
              key={project.id} 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 backdrop-blur-sm card-hover transition-all"
            >
              <div className="flex flex-col lg:flex-row items-stretch gap-8">
                {/* Visual Preview: Code, Terminal, or Real Browser Screenshot */}
                <div className="w-full lg:w-5/12 flex-shrink-0 min-h-[260px] sm:min-h-[280px]">
                  <div className="h-full rounded-2xl overflow-hidden border border-neutral-800 shadow-xl bg-[#0d1117] flex flex-col">
                    {project.previewType === 'code-vaultcore' ? (
                      <VaultCoreCodeSnippet />
                    ) : project.previewType === 'code-playwright' ? (
                      <PlaywrightTerminalSnippet />
                    ) : (
                      <BrowserMockup project={project} />
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div className="w-full lg:w-7/12 flex flex-col justify-between">
                  <div>
                    {/* Badge & Title */}
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2.5 py-1 rounded-md bg-neutral-950 border border-neutral-800 text-purple-300 text-xs font-semibold">
                        {project.badge}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                      {project.title}
                    </h3>

                    <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Architectural Highlights / Bullets */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div className="space-y-2 mb-6 bg-neutral-950/70 p-4 rounded-xl border border-neutral-800/80">
                        {project.highlights.map((bullet, hIndex) => (
                          <div key={hIndex} className="flex items-start gap-2.5">
                            <FaCheckCircle className="text-purple-400 text-xs mt-1 flex-shrink-0" />
                            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                              {bullet}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Technologies and Action Button */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech, tIndex) => (
                        <span 
                          key={tIndex} 
                          className="px-2.5 py-1 rounded-md bg-neutral-950 border border-neutral-800 text-neutral-300 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-100 hover:bg-white text-neutral-900 text-xs sm:text-sm font-semibold transition-all hover:scale-105 shadow-sm"
                        >
                          {project.link.includes('github') ? (
                            <>
                              <FaGithub className="text-sm" />
                              <span>GitHub'da İncele</span>
                            </>
                          ) : (
                            <>
                              <FaExternalLinkAlt className="text-xs" />
                              <span>Canlı Platformu Ziyaret Et</span>
                            </>
                          )}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;