import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, SlidersHorizontal, Leaf } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
  onOpenBuilder: () => void;
  onGoToSustainability: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onOpenBuilder, onGoToSustainability }) => {
  return (
    <section id="hero" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Story & Headline */}
          <div className="lg:col-span-6 space-y-6">
            {/* Clean unboxed kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C85A32]">
              <span>Everyday Carry &amp; Desk Architecture</span>
              <span aria-hidden="true">·</span>
              <span>Hardware Startup</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#16191D] tracking-tight leading-[1.08] text-balance">
              Engineered essentials. Built for everyday flow.
            </h1>

            <p className="text-base sm:text-lg text-[#676E79] leading-relaxed max-w-xl">
              DailyMate designs and manufactures durable daily-use accessories: solid aluminum mobile stands, silent titanium key holders, weatherproof tech slings, and sculpted walnut desk organizers.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExplore}
                className="px-6 py-3.5 bg-[#16191D] text-white hover:bg-[#23282E] active:scale-95 transition-all rounded-xl text-sm font-semibold shadow-sm flex items-center gap-2 group cursor-pointer whitespace-nowrap"
              >
                <span>Explore Catalog</span>
                <ArrowRight className="w-4 h-4 text-[#F07A4B] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenBuilder}
                className="px-6 py-3.5 bg-white text-[#16191D] border border-[#E5E1D8] hover:border-[#C85A32] hover:bg-[#FBF1EB]/30 active:scale-95 transition-all rounded-xl text-sm font-semibold shadow-2xs flex items-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <SlidersHorizontal className="w-4 h-4 text-[#C85A32]" />
                <span>Build Setup (Save 15%)</span>
              </button>
            </div>

            {/* Quiet trust markers */}
            <div className="pt-4 border-t border-[#E5E1D8] flex flex-wrap items-center gap-6 text-xs text-[#676E79] font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C85A32]" />
                <span>10-Year Mechanical Warranty</span>
              </div>
              <button
                onClick={onGoToSustainability}
                className="flex items-center gap-1.5 hover:text-[#C85A32] transition-colors cursor-pointer"
              >
                <Leaf className="w-4 h-4 text-[#C85A32]" />
                <span>100% Plastic-Free Lifecycle</span>
              </button>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#C85A32]" />
                <span>30-Day Risk-Free Trial</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden bg-[#16191D]/5 border border-[#E5E1D8] shadow-lg group">
              <img
                src="/src/assets/images/hero_daily_workspace_1793461811757.jpg"
                alt="DailyMate workspace setup with mobile stand, key organizer, sling bag, and desk tray"
                className="w-full h-auto object-cover aspect-16/10 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Discreet floating caption bar */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#16191D]/90 via-[#16191D]/60 to-transparent text-white flex items-center justify-between text-xs backdrop-blur-xs">
                <div>
                  <p className="font-semibold text-white">The DailyMate 4-Piece Minimalist Suite</p>
                  <p className="text-[#F07A4B] text-[11px]">Mobile Stand · Key Manager · Tech Sling · Desk Valet</p>
                </div>
                <span className="hidden sm:inline-block px-2.5 py-1 bg-white/20 backdrop-blur-md rounded-md text-[11px] font-medium text-white">
                  6061-T6 &amp; Walnut
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Architectural Highlights Strip */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-xl bg-white border border-[#E5E1D8] shadow-2xs hover:border-[#C85A32]/40 transition-colors">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C85A32] mb-1">01. Mobile Stands</div>
            <h3 className="text-base font-bold text-[#16191D]">Zero-Wobble Counterbalance</h3>
            <p className="text-xs text-[#676E79] mt-1 leading-relaxed">
              380g weighted brass dampening base with dual-axis 360° fluid detents.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-[#E5E1D8] shadow-2xs hover:border-[#C85A32]/40 transition-colors">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C85A32] mb-1">02. Key Holders</div>
            <h3 className="text-base font-bold text-[#16191D]">Silent Titanium Enclosure</h3>
            <p className="text-xs text-[#676E79] mt-1 leading-relaxed">
              Grade 5 titanium chassis and full-grain leather silencing key jangle forever.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-[#E5E1D8] shadow-2xs hover:border-[#C85A32]/40 transition-colors">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C85A32] mb-1">03. Everyday Bags</div>
            <h3 className="text-base font-bold text-[#16191D]">Weatherproof 500D Cordura</h3>
            <p className="text-xs text-[#676E79] mt-1 leading-relaxed">
              Waterproof YKK AquaGuard zippers and German Fidlock magnetic buckle systems.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-[#E5E1D8] shadow-2xs hover:border-[#C85A32]/40 transition-colors">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C85A32] mb-1">04. Desk Organizers</div>
            <h3 className="text-base font-bold text-[#16191D]">Sculpted Walnut &amp; Aluminum</h3>
            <p className="text-xs text-[#676E79] mt-1 leading-relaxed">
              CNC-milled solid American walnut with sandblasted valet modules and Qi2 charging.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
