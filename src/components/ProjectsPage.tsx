import React, { useState } from 'react';
import { STARTUP_PROJECTS, StartupProject } from '../data/startupProjects';
import { 
  ArrowLeft, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  FileText, 
  Check, 
  Cpu, 
  Printer, 
  ShieldCheck, 
  BarChart3, 
  Search,
  BookOpen,
  Calendar,
  Users,
  Compass,
  Sparkles
} from 'lucide-react';

interface ProjectsPageProps {
  initialProjectId?: string;
  onBackToHome: () => void;
  onOpenEnquiry: (topic?: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  initialProjectId,
  onBackToHome,
  onOpenEnquiry
}) => {
  const [selectedId, setSelectedId] = useState<string>(
    initialProjectId || STARTUP_PROJECTS[0].id
  );
  const [activeTab, setActiveTab] = useState<'summary' | 'sections' | 'comparison' | 'methodology'>('summary');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const currentProject = STARTUP_PROJECTS.find((p) => p.id === selectedId) || STARTUP_PROJECTS[0];
  const currentIndex = STARTUP_PROJECTS.findIndex((p) => p.id === currentProject.id);

  const prevProject = currentIndex > 0 ? STARTUP_PROJECTS[currentIndex - 1] : null;
  const nextProject = currentIndex < STARTUP_PROJECTS.length - 1 ? STARTUP_PROJECTS[currentIndex + 1] : null;

  const handleSelectProject = (id: string) => {
    setSelectedId(id);
    setActiveTab('summary');
    const el = document.getElementById('project-detail-view');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrintStudy = () => {
    window.print();
  };

  const filteredProjects = STARTUP_PROJECTS.filter((p) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.shortDesc.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.number.includes(q)
    );
  });

  return (
    <div className="bg-[#F8F7F4] text-[#16191D] min-h-screen pb-20">
      {/* Sub-Header & Breadcrumb Bar */}
      <div className="bg-white border-b border-[#E5E1D8] sticky top-18 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-13 flex items-center justify-between text-xs">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-1.5 font-bold text-[#16191D] hover:text-[#C85A32] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Storefront</span>
            <span className="text-[#676E79]">/</span>
            <span className="text-[#C85A32]">Startup Studies Hub (8)</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="hidden md:inline text-[#676E79]">
              Study <strong className="text-[#16191D] font-mono">{currentProject.number}</strong> of 08: <strong className="text-[#16191D]">{currentProject.title}</strong>
            </span>
            <button
              onClick={handlePrintStudy}
              className="px-3 py-1.5 bg-[#F8F7F4] border border-[#E5E1D8] hover:border-[#C85A32] text-[#16191D] rounded-md text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5"
              title="Print or Save Study Dossier"
            >
              <Printer className="w-3.5 h-3.5 text-[#C85A32]" />
              <span className="hidden sm:inline">Print Study</span>
            </button>
            <button
              onClick={() => onOpenEnquiry(`Institutional Inquiry for Study ${currentProject.number}`)}
              className="px-3.5 py-1.5 bg-[#16191D] text-white hover:bg-[#C85A32] rounded-md text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span>Request Tech Pack</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C85A32]">
              <Cpu className="w-4 h-4" />
              <span>Research, Operations &amp; Strategy</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#16191D] tracking-tight leading-tight">
              DailyMate Startup Projects &amp; Strategic Studies
            </h1>

            <p className="text-base sm:text-lg text-[#676E79] leading-relaxed">
              In-depth operational documentation exploring DailyMate’s engineering viability, supply chain logistics, direct-to-consumer &amp; B2B business models, and verified ESG lifecycle benchmarks.
            </p>

            {/* Quick search input */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-[#676E79] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter studies by keyword (e.g. LCA, supply chain, financial, hedging)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 text-xs bg-white border border-[#E5E1D8] rounded-xl text-[#16191D] placeholder-[#676E79]/60 focus:outline-none focus:border-[#C85A32]"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#676E79] hover:text-[#16191D]"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right: Technical Blueprint Hero Image */}
          <div className="lg:col-span-5">
            <div className="aspect-16/10 rounded-2xl overflow-hidden shadow-lg border border-[#E5E1D8] bg-[#F1EFEA] relative group">
              <img
                src="/images/projects_engineering_blueprint_1793463395323.jpg"
                alt="DailyMate engineering CAD drawings and prototyping bench"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white text-[11px] flex justify-between items-center">
                <span className="font-semibold">CAD R&amp;D Prototyping Lab</span>
                <span className="text-[#F07A4B] font-mono">±0.02mm Optical CMM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Navigation Carousel for 8 Projects */}
        <div className="mt-8 border-b border-[#E5E1D8] pb-4 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-2 min-w-max">
            {filteredProjects.map((proj) => {
              const isSelected = proj.id === selectedId;
              return (
                <button
                  key={proj.id}
                  onClick={() => handleSelectProject(proj.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer flex items-center gap-2.5 ${
                    isSelected
                      ? 'bg-[#16191D] text-white font-semibold shadow-xs ring-2 ring-[#C85A32]'
                      : 'bg-white text-[#16191D]/80 hover:text-[#16191D] hover:bg-[#FBF1EB]/50 border border-[#E5E1D8]'
                  }`}
                >
                  <span
                    className={`font-mono font-bold text-[11px] px-1.5 py-0.5 rounded ${
                      isSelected ? 'bg-[#C85A32] text-white' : 'bg-[#FBF1EB] text-[#C85A32]'
                    }`}
                  >
                    {proj.number}
                  </span>
                  <span className="line-clamp-1">{proj.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Selected Project Detailed Deep Dive */}
      <section id="project-detail-view" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#E5E1D8] shadow-sm space-y-8">
          {/* Project Title Header */}
          <div className="border-b border-[#E5E1D8] pb-6 flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-2.5 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="font-mono font-bold px-2.5 py-1 bg-[#16191D] text-[#F07A4B] rounded-md">
                  STUDY {currentProject.number} OF 08
                </span>
                <span className="text-[#676E79]">·</span>
                <span className="font-semibold text-[#C85A32] uppercase tracking-wider">
                  {currentProject.category}
                </span>
                <span className="text-[#676E79]">·</span>
                <span className="text-[#676E79] flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {currentProject.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#16191D] tracking-tight">
                {currentProject.title}
              </h2>

              <p className="text-sm text-[#676E79] leading-relaxed">
                {currentProject.shortDesc}
              </p>

              <div className="flex items-center gap-1.5 text-xs text-[#676E79] pt-1">
                <Users className="w-3.5 h-3.5 text-[#C85A32]" />
                <span>Published by: <strong className="text-[#16191D]">{currentProject.authorSquad}</strong></span>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenEnquiry(`Inquiry for Study ${currentProject.number}: ${currentProject.title}`)}
                className="px-4 py-2.5 bg-[#C85A32] text-white hover:bg-[#b24e27] active:scale-95 text-xs font-bold rounded-xl shadow-xs transition-all cursor-pointer whitespace-nowrap"
              >
                Inquire for Organization
              </button>
            </div>
          </div>

          {/* Interactive Internal Tabs for the Active Study */}
          <div className="flex items-center gap-2 border-b border-[#E5E1D8] pb-3 overflow-x-auto scrollbar-none">
            <button
              onClick={() => setActiveTab('summary')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'summary'
                  ? 'bg-[#16191D] text-white'
                  : 'bg-[#F8F7F4] text-[#16191D] hover:bg-[#E5E1D8]'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>1. Executive Summary &amp; Takeaways</span>
            </button>

            <button
              onClick={() => setActiveTab('sections')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'sections'
                  ? 'bg-[#16191D] text-white'
                  : 'bg-[#F8F7F4] text-[#16191D] hover:bg-[#E5E1D8]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>2. Operational Sections ({currentProject.sections.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'comparison'
                  ? 'bg-[#16191D] text-white'
                  : 'bg-[#F8F7F4] text-[#16191D] hover:bg-[#E5E1D8]'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>3. KPI Benchmarks &amp; Industry Delta</span>
            </button>

            <button
              onClick={() => setActiveTab('methodology')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'methodology'
                  ? 'bg-[#16191D] text-white'
                  : 'bg-[#F8F7F4] text-[#16191D] hover:bg-[#E5E1D8]'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>4. Methodology &amp; Milestones</span>
            </button>
          </div>

          {/* Tab 1 Content: Executive Summary & Takeaways */}
          {activeTab === 'summary' && (
            <div className="space-y-8 animate-in fade-in duration-200">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 bg-[#F8F7F4] p-6 sm:p-8 rounded-2xl border border-[#E5E1D8] space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C85A32]">
                    <FileText className="w-4 h-4" />
                    <span>Executive Summary</span>
                  </div>

                  <p className="text-sm text-[#16191D]/85 leading-relaxed">
                    {currentProject.executiveSummary}
                  </p>

                  <div className="pt-4 border-t border-[#E5E1D8]">
                    <span className="text-[11px] font-bold text-[#16191D] uppercase tracking-wider block mb-2.5">
                      Key Strategic Takeaways:
                    </span>
                    <ul className="space-y-2.5 text-xs text-[#16191D]/85">
                      {currentProject.keyTakeaways.map((takeaway, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#C85A32] shrink-0 mt-0.5" />
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 3 KPI Cards */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#16191D] flex items-center gap-1.5">
                    <BarChart3 className="w-4 h-4 text-[#C85A32]" />
                    <span>Primary Operational Indicators</span>
                  </div>

                  <div className="space-y-3">
                    {currentProject.kpis.map((kpi, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-[#F8F7F4] border border-[#E5E1D8] flex items-center justify-between"
                      >
                        <div>
                          <div className="text-xs font-bold text-[#16191D]">{kpi.label}</div>
                          <div className="text-[11px] text-[#676E79] mt-0.5">{kpi.context}</div>
                        </div>
                        <div className="text-xl sm:text-2xl font-extrabold text-[#C85A32] font-mono tabular-nums">
                          {kpi.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-[#FBF1EB] border border-[#C85A32]/20 text-xs text-[#16191D]">
                    <div className="font-bold text-[#C85A32] mb-1 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Next Operational Horizon:</span>
                    </div>
                    <p className="text-[11px] text-[#16191D]/80 leading-relaxed">
                      {currentProject.futureMilestone}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2 Content: Detailed Operational Sections */}
          {activeTab === 'sections' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-[#16191D]">
                  Detailed Analytical &amp; Operational Breakdowns
                </h3>
                <span className="text-xs text-[#676E79]">
                  {currentProject.sections.length} Comprehensive Modules
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentProject.sections.map((section, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#F8F7F4] border border-[#E5E1D8] space-y-3"
                  >
                    <h4 className="text-sm font-bold text-[#16191D] flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#16191D] text-white text-[10px] flex items-center justify-center font-mono">
                        {idx + 1}
                      </span>
                      <span>{section.heading}</span>
                    </h4>
                    <p className="text-xs text-[#676E79] leading-relaxed">
                      {section.content}
                    </p>
                    {section.bulletPoints && (
                      <ul className="pt-2 space-y-2 text-xs text-[#16191D]/85 border-t border-[#E5E1D8]/60">
                        {section.bulletPoints.map((bp, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#C85A32] font-bold mt-0.5">•</span>
                            <span>{bp}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3 Content: KPI Benchmarks & Industry Comparison */}
          {activeTab === 'comparison' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h3 className="text-lg font-bold text-[#16191D]">
                  Industry Comparison &amp; Quantitative Benchmarking
                </h3>
                <p className="text-xs text-[#676E79] mt-0.5">
                  How DailyMate's engineered standards measure against traditional consumer accessory manufacturing.
                </p>
              </div>

              {currentProject.comparisonTable ? (
                <div className="overflow-x-auto rounded-2xl border border-[#E5E1D8]">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#16191D] text-white text-[11px] uppercase tracking-wider">
                      <tr>
                        <th className="p-3.5 font-bold">Operational Parameter</th>
                        <th className="p-3.5 font-bold">Industry Baseline (Traditional)</th>
                        <th className="p-3.5 font-bold text-[#F07A4B]">DailyMate Standard</th>
                        <th className="p-3.5 font-bold text-right">Advantage Delta</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E1D8] bg-white">
                      {currentProject.comparisonTable.map((row, idx) => (
                        <tr key={idx} className="hover:bg-[#F8F7F4] transition-colors">
                          <td className="p-3.5 font-bold text-[#16191D]">{row.parameter}</td>
                          <td className="p-3.5 text-[#676E79]">{row.industryBaseline}</td>
                          <td className="p-3.5 font-semibold text-[#16191D]">{row.dailyMateStandard}</td>
                          <td className="p-3.5 text-right font-mono font-bold text-[#C85A32]">
                            {row.variance}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="p-6 bg-[#F8F7F4] rounded-2xl text-xs text-[#676E79]">
                  Detailed benchmark matrix is integrated inside the technical pack documentation.
                </div>
              )}

              {/* KPI Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {currentProject.kpis.map((kpi, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#F8F7F4] border border-[#E5E1D8] text-center">
                    <div className="text-2xl font-extrabold text-[#C85A32] font-mono tabular-nums">
                      {kpi.value}
                    </div>
                    <div className="text-xs font-bold text-[#16191D] mt-1">{kpi.label}</div>
                    <div className="text-[11px] text-[#676E79] mt-0.5">{kpi.context}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 4 Content: Methodology & Milestones */}
          {activeTab === 'methodology' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="p-6 rounded-2xl bg-[#F8F7F4] border border-[#E5E1D8] space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#C85A32] flex items-center gap-1.5">
                  <Compass className="w-4 h-4" />
                  <span>Research &amp; Measurement Methodology</span>
                </div>
                <p className="text-sm text-[#16191D]/85 leading-relaxed">
                  {currentProject.methodologyNote}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FBF1EB] border border-[#C85A32]/20 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#C85A32] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>Long-Term Strategic Target</span>
                </div>
                <p className="text-sm text-[#16191D] font-medium leading-relaxed">
                  {currentProject.futureMilestone}
                </p>
                <div className="pt-2 text-xs text-[#676E79]">
                  Tracked and reported annually in DailyMate's Open-Source Operations Report.
                </div>
              </div>
            </div>
          )}

          {/* Pagination Controls */}
          <div className="pt-8 border-t border-[#E5E1D8] flex items-center justify-between">
            {prevProject ? (
              <button
                onClick={() => handleSelectProject(prevProject.id)}
                className="px-4 py-2.5 rounded-xl border border-[#E5E1D8] hover:border-[#C85A32]/40 bg-[#F8F7F4] text-xs font-semibold text-[#16191D] flex items-center gap-2 cursor-pointer transition-colors"
              >
                <ChevronLeft className="w-4 h-4 text-[#C85A32]" />
                <span className="hidden sm:inline">Study {prevProject.number}: {prevProject.title}</span>
                <span className="sm:hidden">Study {prevProject.number}</span>
              </button>
            ) : (
              <div />
            )}

            {nextProject ? (
              <button
                onClick={() => handleSelectProject(nextProject.id)}
                className="px-4 py-2.5 rounded-xl border border-[#E5E1D8] hover:border-[#C85A32]/40 bg-[#F8F7F4] text-xs font-semibold text-[#16191D] flex items-center gap-2 cursor-pointer transition-colors"
              >
                <span className="hidden sm:inline">Study {nextProject.number}: {nextProject.title}</span>
                <span className="sm:hidden">Study {nextProject.number}</span>
                <ChevronRight className="w-4 h-4 text-[#C85A32]" />
              </button>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* Master Index of All 8 Startup Studies */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <div className="text-xs font-bold uppercase tracking-wider text-[#C85A32] mb-1">
            Master Index
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16191D] tracking-tight">
            Complete Directory of All 8 Startup Studies
          </h2>
          <p className="text-xs sm:text-sm text-[#676E79] mt-1">
            Click on any study to view its separate executive analysis, KPI data table, and operational methodology.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STARTUP_PROJECTS.map((proj) => {
            const isSelected = proj.id === selectedId;
            return (
              <button
                key={proj.id}
                onClick={() => handleSelectProject(proj.id)}
                className={`p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between group ${
                  isSelected
                    ? 'border-[#C85A32] bg-[#FBF1EB] shadow-xs ring-2 ring-[#C85A32]'
                    : 'border-[#E5E1D8] bg-white hover:border-[#C85A32]/40 hover:bg-[#F8F7F4]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className={`font-mono font-bold text-xs ${isSelected ? 'text-[#C85A32]' : 'text-[#16191D]'}`}>
                      STUDY {proj.number}
                    </span>
                    <span className="text-[10px] text-[#676E79] uppercase">{proj.readTime}</span>
                  </div>

                  <h4 className="text-sm font-bold text-[#16191D] group-hover:text-[#C85A32] transition-colors line-clamp-2">
                    {proj.title}
                  </h4>

                  <p className="text-xs text-[#676E79] mt-2 line-clamp-2 leading-relaxed">
                    {proj.shortDesc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E5E1D8] flex items-center justify-between text-xs text-[#C85A32] font-semibold">
                  <span>{isSelected ? 'Currently Viewing' : 'Inspect Study'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
};
