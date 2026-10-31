import React from 'react';
import { Recycle, RefreshCcw, Wrench, Package, ArrowRight, ShieldCheck } from 'lucide-react';

interface SustainabilitySectionProps {
  onGoToSustainability?: () => void;
  onOpenAudit?: () => void;
}

export const SustainabilitySection: React.FC<SustainabilitySectionProps> = ({
  onGoToSustainability,
  onOpenAudit
}) => {
  return (
    <section id="sustainability" className="py-16 bg-white border-t border-[#103D2E]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-7">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#1E7F55] mb-1">
              Verifiable Sustainability
            </div>
            <h2 className="text-3xl font-extrabold text-[#103D2E] tracking-tight">
              Responsible by Design. Built to Outlast Trends.
            </h2>
            <p className="text-sm text-[#103D2E]/75 mt-2 leading-relaxed">
              The most sustainable accessory is the one you never need to replace. We reject scheduled obsolescence in favor of modular, repairable construction with certified secondary alloys and zero-plastic packaging.
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-4">
              {onGoToSustainability && (
                <button
                  onClick={onGoToSustainability}
                  className="px-4 py-2 bg-[#103D2E] text-[#B5F45A] hover:bg-[#16533f] text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Explore Full Sustainability Charter</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
              {onOpenAudit && (
                <button
                  onClick={onOpenAudit}
                  className="px-4 py-2 bg-[#F5F7F4] text-[#103D2E] hover:bg-[#e8ece6] text-xs font-bold rounded-xl border border-[#103D2E]/15 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#1E7F55]" />
                  <span>ISO 14040/44 LCA Audit</span>
                </button>
              )}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-16/10 rounded-2xl overflow-hidden shadow-md border border-[#103D2E]/15 relative group">
              <img
                src="/images/sustainability_materials_craft_1793462549449.jpg"
                alt="Sustainable raw materials: recycled 6061 alloy, FSC walnut, post-consumer Cordura"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-[#103D2E]/90 to-transparent text-white text-[11px] flex justify-between items-center">
                <span className="font-semibold text-white">Ethical Material Provenance</span>
                <span className="text-[#B5F45A] font-mono">84% Recycled Feedstock</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-[#F5F7F4] border border-[#103D2E]/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#103D2E] text-[#B5F45A] flex items-center justify-center">
              <Recycle className="w-5 h-5" />
            </div>
            <div className="text-xl font-bold text-[#103D2E] tabular-nums">84% Recycled</div>
            <h3 className="text-sm font-semibold text-[#103D2E]">High-Grade Feedstock</h3>
            <p className="text-xs text-[#103D2E]/70 leading-relaxed">
              We source secondary 6061 aerospace alloy and post-consumer Cordura canvas to dramatically lower carbon footprint.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F5F7F4] border border-[#103D2E]/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#103D2E] text-[#B5F45A] flex items-center justify-center">
              <Wrench className="w-5 h-5" />
            </div>
            <div className="text-xl font-bold text-[#103D2E] tabular-nums">9.2 / 10 Score</div>
            <h3 className="text-sm font-semibold text-[#103D2E]">User-Repairable Design</h3>
            <p className="text-xs text-[#103D2E]/70 leading-relaxed">
              Zero glued seams or permanent ultrasonic welds. All mechanical components fasten with accessible metric hex hardware.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F5F7F4] border border-[#103D2E]/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#103D2E] text-[#B5F45A] flex items-center justify-center">
              <RefreshCcw className="w-5 h-5" />
            </div>
            <div className="text-xl font-bold text-[#103D2E] tabular-nums">Take-Back Credit</div>
            <h3 className="text-sm font-semibold text-[#103D2E]">Circular Lifecycle Program</h3>
            <p className="text-xs text-[#103D2E]/70 leading-relaxed">
              Send back any retired DailyMate product for scrap smelting and receive a $15 credit towards your next upgrade.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F5F7F4] border border-[#103D2E]/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#103D2E] text-[#B5F45A] flex items-center justify-center">
              <Package className="w-5 h-5" />
            </div>
            <div className="text-xl font-bold text-[#103D2E] tabular-nums">Zero Plastic</div>
            <h3 className="text-sm font-semibold text-[#103D2E]">Compostable Packaging</h3>
            <p className="text-xs text-[#103D2E]/70 leading-relaxed">
              Molded sugarcane bagasse pulp trays and water-activated gummed paper eliminate all single-use bubble wraps and polybags.
            </p>
          </div>
        </div>

        {/* Circularity Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#103D2E] text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-[#B5F45A]">10-Year Mechanical Longevity Pledge</h4>
            <p className="text-xs text-white/80 max-w-xl">
              If any pivot hinge, magnetic buckle, or fastener loosens or degrades through normal everyday usage, we will ship replacement precision hardware free of charge.
            </p>
          </div>
          <button
            onClick={onOpenAudit || onGoToSustainability}
            className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold whitespace-nowrap border border-white/20 transition-colors cursor-pointer"
          >
            Review Sustainability Audit
          </button>
        </div>
      </div>
    </section>
  );
};
