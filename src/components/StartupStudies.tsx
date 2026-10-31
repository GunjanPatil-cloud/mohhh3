import React, { useState } from 'react';
import { STARTUP_STUDIES, StartupStudy } from '../data/startupContent';
import { ArrowRight, X, Check, BarChart3, Clock, FolderGit2 } from 'lucide-react';

interface StartupStudiesProps {
  onGoToProjectsPage?: () => void;
  onSelectStudy?: (projectId: string) => void;
}

export const StartupStudies: React.FC<StartupStudiesProps> = ({ onGoToProjectsPage, onSelectStudy }) => {
  const [activeStudy, setActiveStudy] = useState<StartupStudy | null>(null);

  const getCorrespondingProjectId = (studyId: string): string => {
    switch (studyId) {
      case 'study-1':
        return 'sustainability-audit';
      case 'study-2':
        return 'risk-management';
      case 'study-3':
        return 'supply-chain-operations';
      case 'study-4':
        return 'esg-impact';
      default:
        return 'sustainability-audit';
    }
  };

  const handleOpenInProjects = (studyId: string) => {
    const projId = getCorrespondingProjectId(studyId);
    if (onSelectStudy) {
      onSelectStudy(projId);
    } else if (onGoToProjectsPage) {
      onGoToProjectsPage();
    }
  };

  return (
    <section id="studies" className="py-16 bg-[#F8F7F4] border-t border-[#E5E1D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C85A32] mb-1">
              Research, Operations &amp; Engineering
            </div>
            <h2 className="text-3xl font-extrabold text-[#16191D] tracking-tight">
              DailyMate Startup Studies &amp; Research
            </h2>
            <p className="text-sm text-[#676E79] mt-1 max-w-xl">
              We publish empirical research on workspace ergonomics, everyday carry physics, and circular manufacturing before launching each product family.
            </p>
          </div>
          <div className="flex items-center gap-3">
            {onGoToProjectsPage && (
              <button
                onClick={onGoToProjectsPage}
                className="text-xs font-semibold text-[#16191D] hover:text-[#C85A32] flex items-center gap-1.5 cursor-pointer bg-white px-3 py-1.5 rounded-lg border border-[#E5E1D8]"
              >
                <FolderGit2 className="w-3.5 h-3.5 text-[#C85A32]" />
                <span>Open All 8 Studies Page</span>
                <ArrowRight className="w-3 h-3 text-[#C85A32]" />
              </button>
            )}
            <div className="hidden sm:flex text-xs font-medium text-[#676E79] items-center gap-1.5">
              <BarChart3 className="w-4 h-4 text-[#C85A32]" />
              <span>Open Access Papers</span>
            </div>
          </div>
        </div>

        {/* 4 Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {STARTUP_STUDIES.map((study, idx) => (
            <div
              key={study.id}
              className="bg-white rounded-2xl border border-[#E5E1D8] p-6 sm:p-7 hover:border-[#C85A32]/40 transition-all flex flex-col justify-between shadow-2xs group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#676E79] mb-2">
                  <span className="font-bold text-[#C85A32]">STUDY 0{idx + 1} · {study.category}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {study.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#16191D] group-hover:text-[#C85A32] transition-colors leading-snug">
                  {study.title}
                </h3>

                <p className="text-xs text-[#676E79] mt-2 leading-relaxed">
                  {study.executiveSummary}
                </p>

                {/* Quantitative Impact Highlights */}
                <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-[#E5E1D8]">
                  {study.impactMetrics.map((m, i) => (
                    <div key={i} className="bg-[#F8F7F4] p-2 rounded-lg text-center">
                      <div className="text-sm sm:text-base font-extrabold text-[#16191D] tabular-nums">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-[#676E79] mt-0.5 truncate">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5E1D8] flex items-center justify-between">
                <span className="text-xs text-[#676E79]">Peer-reviewed protocol</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleOpenInProjects(study.id)}
                    className="text-xs font-semibold text-[#C85A32] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Full Study &amp; Data</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setActiveStudy(study)}
                    className="text-xs font-semibold text-[#16191D] hover:text-[#C85A32] cursor-pointer"
                  >
                    Quick View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Quick View */}
        {activeStudy && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div
              className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[85vh] overflow-y-auto border border-[#E5E1D8] shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveStudy(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#F8F7F4] text-[#16191D] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-bold text-[#C85A32] mb-2 uppercase tracking-wider">
                <span>{activeStudy.category}</span>
                <span aria-hidden="true">·</span>
                <span>{activeStudy.readTime}</span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#16191D] leading-snug">
                {activeStudy.title}
              </h3>

              <div className="mt-4 p-4 rounded-xl bg-[#F8F7F4] border border-[#E5E1D8] space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-[#16191D]">Executive Summary</div>
                <p className="text-xs text-[#16191D]/80 leading-relaxed">{activeStudy.executiveSummary}</p>
              </div>

              <div className="mt-6 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#16191D]">Key Empirical Takeaways:</div>
                {activeStudy.keyFindings.map((finding, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#16191D]/85">
                    <Check className="w-4 h-4 text-[#C85A32] shrink-0 mt-0.5" />
                    <span>{finding}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5E1D8]">
                <div className="text-xs font-bold uppercase tracking-wider text-[#16191D] mb-1">
                  Testing &amp; Measurement Methodology
                </div>
                <p className="text-xs text-[#676E79] leading-relaxed">
                  {activeStudy.methodology}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5E1D8] flex items-center justify-between">
                <button
                  onClick={() => {
                    const id = activeStudy.id;
                    setActiveStudy(null);
                    handleOpenInProjects(id);
                  }}
                  className="text-xs font-semibold text-[#C85A32] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Open Deep Dive in Projects Hub</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setActiveStudy(null)}
                  className="px-4 py-2 bg-[#16191D] text-white rounded-lg text-xs font-semibold cursor-pointer ml-auto"
                >
                  Close Document
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
