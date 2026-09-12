import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { FaExternalLinkAlt, FaGithub, FaCheck, FaLock, FaTerminal, FaCode } from 'react-icons/fa';

const projectTabs = [
  { id: 'featured', label: 'Öne Çıkan Sistem Projeleri' },
  { id: 'client', label: 'Canlı Müşteri Platformları' },
  { id: 'all', label: 'Tümü' },
];

const VaultCoreCodeSnippet = () => (
  <div className="w-full h-full bg-[#0d1117] text-zinc-300 font-mono text-[11px] leading-relaxed flex flex-col justify-between select-none">
    {/* Editor Header */}
    <div className="flex items-center justify-between px-3 py-2 bg-[#161b22] border-b border-zinc-800 text-zinc-400 text-[11px]">
      <div className="flex items-center gap-2">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
        </div>
        <span className="ml-2 px-2 py-0.5 rounded bg-[#0d1117] text-zinc-300 text-[10px] font-semibold flex items-center gap-1 border border-zinc-800">
          <FaCode className="text-purple-400 text-[10px]" />
          PostJournalEntryCommandHandler.cs
        </span>
      </div>
      <span className="text-[10px] text-purple-400 font-medium">.NET 9 • CQRS</span>
    </div>

    {/* Code Content */}
    <div className="p-4 space-y-1 overflow-x-auto text-[11px] bg-[#0d1117]">
      <p className="text-zinc-500">// Clean Architecture CQRS Command Handler</p>
      <p>
        <span className="text-purple-400">public class</span>{" "}
        <span className="text-yellow-200 font-semibold">PostJournalEntryCommandHandler</span> :
      </p>
      <p className="pl-4 text-zinc-400">
        IRequestHandler&lt;<span className="text-cyan-300">PostTransactionCommand</span>, <span className="text-cyan-300">Result&lt;TransactionId&gt;</span>&gt;
      </p>
      <p className="text-zinc-400">&#123;</p>
      <p className="pl-4 text-zinc-500">// 1. Redis Dağıtık Kilit & Idempotency</p>
      <p className="pl-4">
        <span className="text-purple-400">await using var</span> handle ={" "}
        <span className="text-purple-400">await</span> _redisLock.<span className="text-blue-400">AcquireLockAsync</span>(
      </p>
      <p className="pl-8 text-emerald-300">$"acc:&#123;cmd.AccountId&#125;", ct);</p>
      <p className="pl-4 text-zinc-500 mt-1">// 2. Çift Taraflı Muhasebe (Double-Entry)</p>
      <p className="pl-4">
        <span className="text-purple-400">var</span> debit = <span className="text-purple-400">new</span> <span className="text-cyan-300">Entry</span>(cmd.From, EntryType.Debit, cmd.Amount);
      </p>
      <p className="pl-4">
        <span className="text-purple-400">var</span> credit = <span className="text-purple-400">new</span> <span className="text-cyan-300">Entry</span>(cmd.To, EntryType.Credit, cmd.Amount);
      </p>
      <p className="pl-4 text-zinc-500 mt-1">// 3. PostgreSQL xmin Concurrency Token</p>
      <p className="pl-4">
        <span className="text-purple-400">return await</span> _ledger.<span className="text-blue-400">CommitWithConcurrencyCheckAsync</span>(
      </p>
      <p className="pl-8 text-zinc-300">debit, credit, ct);</p>
      <p className="text-zinc-400">&#123;</p>
    </div>

    {/* Editor Status Footer */}
    <div className="flex items-center justify-between px-3 py-1 bg-[#161b22] border-t border-zinc-800 text-[10px] text-zinc-400">
      <div className="flex items-center gap-3">
        <span>git: main</span>
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
  <div className="w-full h-full bg-[#0d1117] text-zinc-300 font-mono text-[11px] leading-relaxed flex flex-col justify-between select-none">
    {/* Terminal Header */}
    <div className="flex items-center justify-between px-3 py-2 bg-[#161b22] border-b border-zinc-800 text-zinc-400 text-[11px]">
      <div className="flex items-center gap-2">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
        </div>
        <span className="ml-2 px-2 py-0.5 rounded bg-[#0d1117] text-zinc-300 text-[10px] font-semibold flex items-center gap-1 border border-zinc-800">
          <FaTerminal className="text-emerald-400 text-[10px]" />
          bash — npx playwright test
        </span>
      </div>
      <span className="text-[10px] text-emerald-400 font-medium">CI Pipeline: PASS</span>
    </div>

    {/* Terminal Execution Body */}
    <div className="p-4 space-y-1.5 bg-[#0d1117] text-[11px]">
      <p className="text-zinc-400">
        <span className="text-emerald-400 font-semibold">$</span> npx playwright test --reporter=list
      </p>
      <p className="text-zinc-500">Running 195 tests using 4 workers across Chromium & WebKit</p>
      
      <div className="pt-2 space-y-1">
        <p className="flex items-center gap-2 text-zinc-300">
          <span className="text-emerald-400 font-bold">✓</span>
          <span className="text-zinc-500 font-mono">[e2e]</span>
          <span className="text-white">ledger-concurrency.spec.ts</span>
          <span className="text-zinc-500">› 10 parallel debit requests</span>
          <span className="text-zinc-500 ml-auto">2.1s</span>
        </p>
        <p className="flex items-center gap-2 text-zinc-300">
          <span className="text-emerald-400 font-bold">✓</span>
          <span className="text-zinc-500 font-mono">[api]</span>
          <span className="text-white">idempotency-token.spec.ts</span>
          <span className="text-zinc-500">› reject duplicate UUID (409)</span>
          <span className="text-zinc-500 ml-auto">340ms</span>
        </p>
        <p className="flex items-center gap-2 text-zinc-300">
          <span className="text-emerald-400 font-bold">✓</span>
          <span className="text-zinc-500 font-mono">[pom]</span>
          <span className="text-white">banking-page-object.spec.ts</span>
          <span className="text-zinc-500">› verify journal posting state</span>
          <span className="text-zinc-500 ml-auto">1.2s</span>
        </p>
        <p className="flex items-center gap-2 text-zinc-300">
          <span className="text-emerald-400 font-bold">✓</span>
          <span className="text-zinc-500 font-mono">[ci]</span>
          <span className="text-white">github-actions-workflow.spec.ts</span>
          <span className="text-zinc-500">› automated PR gate check</span>
          <span className="text-zinc-500 ml-auto">890ms</span>
        </p>
      </div>

      <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-emerald-400 font-semibold text-[10px]">
        <span>195 passed (18.4s)</span>
        <span className="text-zinc-500 font-normal">0 flaky, 0 failed</span>
      </div>
    </div>

    {/* Terminal Footer */}
    <div className="px-3 py-1 bg-[#161b22] border-t border-zinc-800 text-[10px] text-zinc-400 flex items-center justify-between">
      <span>GitHub Actions: build #42 passed</span>
      <span className="text-emerald-400 font-medium">Exit Code: 0</span>
    </div>
  </div>
);

const BrowserMockup = ({ project }) => (
  <div className="w-full h-full bg-zinc-950 flex flex-col justify-between overflow-hidden">
    {/* Browser Bar */}
    <div className="flex items-center justify-between px-3 py-2 bg-zinc-900 border-b border-zinc-800 text-zinc-400 text-xs">
      <div className="flex gap-1.5 items-center">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
      </div>
      <div className="flex items-center gap-1.5 px-3 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-zinc-400 text-[11px] max-w-[200px] sm:max-w-xs truncate font-mono">
        <FaLock className="text-[9px] text-emerald-500" />
        <span className="truncate">{project.link ? project.link.replace(/^https?:\/\//, '') : 'production'}</span>
      </div>
      <div className="w-6"></div>
    </div>

    {/* Screenshot */}
    <div className="relative flex-1 overflow-hidden bg-zinc-950">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-300" 
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
    <section id="projects" className="border-t border-zinc-900 pt-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
            Projeler
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl">
            Çekirdek bankacılık motoru, E2E test otomasyonu ve ticari müşteriler için canlıya alınan kurumsal web platformları.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-1.5 p-1 rounded-lg bg-zinc-900/80 border border-zinc-800">
          {projectTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-zinc-800 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-6">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="pro-card rounded-xl p-6"
          >
            <div className="flex flex-col lg:flex-row items-stretch gap-6">
              {/* Visual Preview */}
              <div className="w-full lg:w-5/12 flex-shrink-0 min-h-[240px] sm:min-h-[260px]">
                <div className="h-full rounded-lg overflow-hidden border border-zinc-800 bg-[#0d1117] flex flex-col">
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
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-purple-300 font-medium">
                      {project.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>

                  <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Highlights / Bullets */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="space-y-2 mb-5 bg-zinc-900/40 p-3.5 rounded-lg border border-zinc-800/60">
                      {project.highlights.map((bullet, hIndex) => (
                        <div key={hIndex} className="flex items-start gap-2">
                          <FaCheck className="text-purple-400 text-[10px] mt-1 flex-shrink-0" />
                          <p className="text-xs text-zinc-300 leading-relaxed">
                            {bullet}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Tech Tags & CTA */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((tech, tIndex) => (
                      <span 
                        key={tIndex} 
                        className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div>
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white text-xs font-medium transition-colors"
                      >
                        {project.link.includes('github') ? (
                          <>
                            <FaGithub className="text-sm" />
                            <span>GitHub Deposu</span>
                          </>
                        ) : (
                          <>
                            <FaExternalLinkAlt className="text-[10px]" />
                            <span>Canlı Platform</span>
                          </>
                        )}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;