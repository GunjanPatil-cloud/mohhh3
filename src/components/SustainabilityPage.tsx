import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Recycle, 
  Wrench, 
  Package, 
  Leaf, 
  CheckCircle2, 
  ArrowLeft, 
  Calculator, 
  FileText, 
  Clock, 
  Sparkles,
  RefreshCw,
  Send
} from 'lucide-react';

interface SustainabilityPageProps {
  onBackToHome: () => void;
  onExploreProducts: () => void;
}

export const SustainabilityPage: React.FC<SustainabilityPageProps> = ({
  onBackToHome,
  onExploreProducts
}) => {
  // Interactive Calculator State
  const [hasStand, setHasStand] = useState<boolean>(true);
  const [hasKey, setHasKey] = useState<boolean>(true);
  const [hasBag, setHasBag] = useState<boolean>(true);
  const [hasTray, setHasTray] = useState<boolean>(true);

  // Trade-In Portal State
  const [tradeInItem, setTradeInItem] = useState<string>('stand');
  const [tradeInBrand, setTradeInBrand] = useState<string>('other');
  const [tradeInEmail, setTradeInEmail] = useState<string>('');
  const [voucherGenerated, setVoucherGenerated] = useState<string | null>(null);

  // ESG Modal
  const [showEsgReport, setShowEsgReport] = useState<boolean>(false);

  // Calculator calculations
  const calculateMetrics = () => {
    let carbon = 0;
    let plastic = 0;
    let years = 10;

    if (hasStand) { carbon += 6.4; plastic += 0.45; }
    if (hasKey) { carbon += 2.8; plastic += 0.20; }
    if (hasBag) { carbon += 8.2; plastic += 0.85; }
    if (hasTray) { carbon += 4.5; plastic += 0.60; }

    return {
      carbonSaved: carbon.toFixed(1),
      plasticDiverted: plastic.toFixed(2),
      lifecycleYears: years
    };
  };

  const metrics = calculateMetrics();

  const handleGenerateTradeIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tradeInEmail) return;
    const code = `RECYCLE-${Math.floor(1000 + Math.random() * 9000)}`;
    setVoucherGenerated(code);
  };

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
            <span className="text-[#C85A32]">Sustainability &amp; Circularity</span>
          </button>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowEsgReport(true)}
              className="text-[#16191D] hover:text-[#C85A32] font-semibold flex items-center gap-1 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#C85A32]" />
              <span className="hidden sm:inline">ESG Dossier</span>
            </button>
            <button
              onClick={onExploreProducts}
              className="px-3 py-1.5 bg-[#16191D] text-white hover:bg-[#C85A32] rounded-md text-xs font-semibold transition-colors cursor-pointer"
            >
              Shop Responsible Gear
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C85A32]">
              <Leaf className="w-4 h-4" />
              <span>Environmental &amp; Social Stewardship</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#16191D] tracking-tight leading-tight">
              Sustainability at DailyMate
            </h1>

            <p className="text-base sm:text-lg text-[#676E79] leading-relaxed">
              Our verified framework for responsible daily accessory manufacturing: prioritizing real material efficiency, zero-plastic packaging, user-repairable modularity, and honest milestones over hollow greenwashing.
            </p>

            {/* Transparency Commitment Box */}
            <div className="p-4 bg-[#FBF1EB] rounded-xl border border-[#C85A32]/20 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#C85A32] shrink-0 mt-0.5" />
              <div className="text-xs text-[#16191D]/90 leading-relaxed">
                <strong className="text-[#C85A32] font-bold">Transparency Commitment:</strong> All sustainability targets, material feedstock ratios, and emission reduction benchmarks are designated as <em>proposed &amp; tracked</em> until independently audited by accredited third-party life cycle evaluators.
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#pillars"
                className="px-5 py-2.5 bg-[#16191D] text-white hover:bg-[#23282E] rounded-xl text-xs font-bold transition-all shadow-sm"
              >
                Explore 3 Pillars
              </a>
              <a
                href="#calculator"
                className="px-5 py-2.5 bg-white border border-[#E5E1D8] text-[#16191D] hover:border-[#C85A32] rounded-xl text-xs font-bold transition-all"
              >
                Carbon Impact Calculator
              </a>
              <a
                href="#trade-in"
                className="px-5 py-2.5 bg-[#FBF1EB] text-[#C85A32] hover:bg-[#C85A32] hover:text-white rounded-xl text-xs font-bold transition-all"
              >
                Take-Back Program ($15 Voucher)
              </a>
            </div>
          </div>

          {/* Right Column: High Fidelity Verified Material Photography */}
          <div className="lg:col-span-5">
            <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-lg border border-[#E5E1D8] bg-[#F1EFEA] relative group">
              <img
                src="/images/sustainability_materials_craft_1793462549449.jpg"
                alt="DailyMate sustainable materials: recycled aerospace aluminum, natural American walnut, recycled Cordura, and molded pulp packaging"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white text-[11px] flex justify-between items-center">
                <span className="font-semibold">Pure Material Sourcing</span>
                <span className="text-[#F07A4B] font-mono">FSC · GRS · RoHS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Fundamental Pillars */}
      <section id="pillars" className="py-16 bg-white border-y border-[#E5E1D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-[#C85A32] mb-1">
              Three Fundamental Pillars
            </div>
            <h2 className="text-3xl font-extrabold text-[#16191D] tracking-tight">
              Our Comprehensive Approach
            </h2>
            <p className="text-xs sm:text-sm text-[#676E79] mt-2">
              How DailyMate eliminates the single-use mentality in everyday work and travel hardware.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="p-7 rounded-2xl bg-[#F8F7F4] border border-[#E5E1D8] flex flex-col justify-between space-y-4 hover:border-[#C85A32]/40 transition-colors">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#16191D] text-[#F07A4B] flex items-center justify-center">
                  <Recycle className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-[#C85A32] uppercase tracking-wider">Pillar 01</div>
                <h3 className="text-xl font-bold text-[#16191D]">
                  Recycled Feedstock &amp; Certified Provenance
                </h3>
                <p className="text-xs text-[#676E79] leading-relaxed">
                  We use minimum 84% post-industrial recycled 6061-T6 aluminum alloys. Hardwoods are strictly sourced from certified, sustainably managed North American forests (FSC-C152341). Bag textiles use GRS-certified 500D post-consumer recycled Cordura nylon.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5E1D8] space-y-1.5 text-xs">
                <div className="flex items-center gap-2 text-[#16191D] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#C85A32]" />
                  <span>84% Recycled Aerospace Alloy</span>
                </div>
                <div className="flex items-center gap-2 text-[#16191D] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#C85A32]" />
                  <span>100% FSC-Certified Hardwood</span>
                </div>
                <div className="flex items-center gap-2 text-[#16191D] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#C85A32]" />
                  <span>Zero Toxic Lead or Chromium Anodizing</span>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-7 rounded-2xl bg-[#F8F7F4] border border-[#E5E1D8] flex flex-col justify-between space-y-4 hover:border-[#C85A32]/40 transition-colors">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#16191D] text-[#F07A4B] flex items-center justify-center">
                  <Wrench className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-[#C85A32] uppercase tracking-wider">Pillar 02</div>
                <h3 className="text-xl font-bold text-[#16191D]">
                  Repairable Architecture &amp; Modular Fasteners
                </h3>
                <p className="text-xs text-[#676E79] leading-relaxed">
                  Disposable tech accessories are ultrasonic-welded and glued shut so you throw them away when a spring snaps. DailyMate components fasten with accessible metric hex bolts and friction pins that can be serviced with simple home tools.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5E1D8] space-y-1.5 text-xs">
                <div className="flex items-center gap-2 text-[#16191D] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#C85A32]" />
                  <span>9.2/10 Index of Repairability</span>
                </div>
                <div className="flex items-center gap-2 text-[#16191D] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#C85A32]" />
                  <span>Free Hardware &amp; Bushing Kits for 10 Yrs</span>
                </div>
                <div className="flex items-center gap-2 text-[#16191D] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#C85A32]" />
                  <span>100% Non-Glued Disassembly</span>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-7 rounded-2xl bg-[#F8F7F4] border border-[#E5E1D8] flex flex-col justify-between space-y-4 hover:border-[#C85A32]/40 transition-colors">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#16191D] text-[#F07A4B] flex items-center justify-center">
                  <Package className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-[#C85A32] uppercase tracking-wider">Pillar 03</div>
                <h3 className="text-xl font-bold text-[#16191D]">
                  100% Plastic-Free &amp; Molded Fiber Packaging
                </h3>
                <p className="text-xs text-[#676E79] leading-relaxed">
                  From factory dispatch to your front door, our packaging generates zero plastic landfill waste. We use custom molded sugarcane bagasse trays, unbleached FSC paperboard cartons, soy-based inks, and water-activated gummed paper tape.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5E1D8] space-y-1.5 text-xs">
                <div className="flex items-center gap-2 text-[#16191D] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#C85A32]" />
                  <span>0% Single-Use Plastics / Bubble Wraps</span>
                </div>
                <div className="flex items-center gap-2 text-[#16191D] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#C85A32]" />
                  <span>100% Home Compostable Inserts</span>
                </div>
                <div className="flex items-center gap-2 text-[#16191D] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#C85A32]" />
                  <span>Flat-pack Volumetric Optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Carbon & Waste Impact Calculator */}
      <section id="calculator" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#16191D] text-white rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F07A4B] uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Interactive Impact Modeler</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Calculate Your Environmental Savings
                </h2>
                <p className="text-xs text-white/70 mt-2">
                  Toggle your daily carry items to estimate how choosing machined aluminum and repairable Cordura prevents single-use plastic waste over 10 years.
                </p>
              </div>

              {/* Toggles */}
              <div className="space-y-2.5">
                <label className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
                  <div className="text-xs">
                    <div className="font-bold text-white">DailyMate OmniStand Pro</div>
                    <div className="text-[11px] text-white/60">Replaces 3-5 cracked plastic phone stands</div>
                  </div>
                  <input
                    type="checkbox"
                    checked={hasStand}
                    onChange={(e) => setHasStand(e.target.checked)}
                    className="w-4 h-4 accent-[#C85A32]"
                  />
                </label>

                <label className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
                  <div className="text-xs">
                    <div className="font-bold text-white">DailyMate OrbitKey Titanium Clip</div>
                    <div className="text-[11px] text-white/60">Replaces disposable plastic carabiners &amp; key tags</div>
                  </div>
                  <input
                    type="checkbox"
                    checked={hasKey}
                    onChange={(e) => setHasKey(e.target.checked)}
                    className="w-4 h-4 accent-[#C85A32]"
                  />
                </label>

                <label className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
                  <div className="text-xs">
                    <div className="font-bold text-white">DailyMate Commute Sling 4L</div>
                    <div className="text-[11px] text-white/60">500D Recycled Cordura vs synthetic fast-fashion bags</div>
                  </div>
                  <input
                    type="checkbox"
                    checked={hasBag}
                    onChange={(e) => setHasBag(e.target.checked)}
                    className="w-4 h-4 accent-[#C85A32]"
                  />
                </label>

                <label className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
                  <div className="text-xs">
                    <div className="font-bold text-white">DailyMate Horizon Desk Tray Trio</div>
                    <div className="text-[11px] text-white/60">FSC American Walnut &amp; aluminum vs injection molded trays</div>
                  </div>
                  <input
                    type="checkbox"
                    checked={hasTray}
                    onChange={(e) => setHasTray(e.target.checked)}
                    className="w-4 h-4 accent-[#C85A32]"
                  />
                </label>
              </div>
            </div>

            {/* Results Display */}
            <div className="lg:col-span-6 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="text-xs font-mono text-[#F07A4B] uppercase tracking-wider">
                10-Year Lifecycle Comparative Advantage
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-black/30 border border-white/10">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#F07A4B] tabular-nums">
                    {metrics.carbonSaved} kg
                  </div>
                  <div className="text-xs font-bold text-white mt-1">CO₂e Avoided</div>
                  <div className="text-[10px] text-white/50 mt-0.5">Amortized cradle-to-grave emissions reduction</div>
                </div>

                <div className="p-4 rounded-xl bg-black/30 border border-white/10">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#F07A4B] tabular-nums">
                    {metrics.plasticDiverted} kg
                  </div>
                  <div className="text-xs font-bold text-white mt-1">Virgin Plastic Diverted</div>
                  <div className="text-[10px] text-white/50 mt-0.5">Kept out of landfills and municipal incinerators</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-white/80 space-y-1">
                <div className="font-bold text-white">Equivalency Benchmark:</div>
                <p className="text-[11px] text-white/60 leading-relaxed">
                  Choosing DailyMate hardware instead of fast-replacement plastic items prevents approximately {Math.round(Number(metrics.plasticDiverted) * 45)} disposable plastic phone cases and organizers from being discarded over a decade.
                </p>
              </div>

              <button
                onClick={onExploreProducts}
                className="w-full py-3 bg-[#C85A32] text-white hover:bg-[#b24e27] active:scale-95 rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer"
              >
                Equip Your Sustainable Setup
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Targets & Milestones (Roadmap) */}
      <section className="py-16 bg-white border-y border-[#E5E1D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-[#C85A32] mb-1">
              Targets &amp; Milestones
            </div>
            <h2 className="text-3xl font-extrabold text-[#16191D] tracking-tight">
              Our Sustainability Roadmap
            </h2>
            <p className="text-sm text-[#676E79] mt-2">
              Concrete milestones mapped across our startup development horizons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8F7F4] border border-[#E5E1D8] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C85A32]">Phase 1</span>
                <span className="text-xs font-mono font-bold text-[#16191D] bg-white px-2 py-0.5 rounded border border-[#E5E1D8]">
                  2025 – 2026
                </span>
              </div>
              <h3 className="text-base font-bold text-[#16191D]">
                Tooling Refinement &amp; 84% Recycled Feedstock
              </h3>
              <p className="text-xs text-[#676E79] leading-relaxed">
                Establish high-purity recycled aluminum alloy batch verification, eliminate 100% of polybags from all supply channels, and audit supplier fair-labor certifications.
              </p>
              <div className="text-[11px] font-semibold text-[#C85A32]">Status: In Progress / On Schedule</div>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F7F4] border border-[#E5E1D8] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C85A32]">Phase 2</span>
                <span className="text-xs font-mono font-bold text-[#16191D] bg-white px-2 py-0.5 rounded border border-[#E5E1D8]">
                  2026 – 2027
                </span>
              </div>
              <h3 className="text-base font-bold text-[#16191D]">
                Closed-Loop Take-Back &amp; Hardware Refurbishment
              </h3>
              <p className="text-xs text-[#676E79] leading-relaxed">
                Roll out customer recycling incentives across global hubs, implement certified certified pre-owned (CPO) restored accessories program, and achieve ISO 14001 certification.
              </p>
              <div className="text-[11px] font-semibold text-[#676E79]">Status: Planned Rollout</div>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F7F4] border border-[#E5E1D8] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C85A32]">Phase 3</span>
                <span className="text-xs font-mono font-bold text-[#16191D] bg-white px-2 py-0.5 rounded border border-[#E5E1D8]">
                  2027 – 2028
                </span>
              </div>
              <h3 className="text-base font-bold text-[#16191D]">
                100% Recycled Neodymium &amp; Zero-Landfill Factory
              </h3>
              <p className="text-xs text-[#676E79] leading-relaxed">
                Transition to 100% recycled rare-earth magnets in all key docks and MagStands, solar-powered CNC milling cell conversion, and regional remanufacturing hubs.
              </p>
              <div className="text-[11px] font-semibold text-[#676E79]">Status: Long-Term Objective</div>
            </div>
          </div>
        </div>
      </section>

      {/* Take-Back & Circular Trade-In Program */}
      <section id="trade-in" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F1EFEA] rounded-3xl p-6 sm:p-10 border border-[#E5E1D8]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#C85A32] uppercase tracking-wider">
                <RefreshCw className="w-4 h-4" />
                <span>Circular Buyback Portal</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16191D]">
                Trade In Any Old Accessory for $15 Credit
              </h2>
              <p className="text-xs sm:text-sm text-[#676E79] leading-relaxed">
                Whether it is a broken plastic phone stand from another brand or a worn DailyMate key clip, ship it to our metal recycling partner. We will send you an immediate $15 store credit voucher and a pre-paid printable shipping label.
              </p>

              <div className="pt-2 space-y-2 text-xs text-[#16191D]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C85A32]" />
                  <span>Accepts all metals, alloys, and hardware accessories from ANY brand</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C85A32]" />
                  <span>100% melted down for secondary alloy billet reuse</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C85A32]" />
                  <span>Zero landfill guarantee on all collected components</span>
                </div>
              </div>
            </div>

            {/* Trade-in form */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-[#E5E1D8] shadow-sm">
              {voucherGenerated ? (
                <div className="space-y-4 text-center py-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                      Voucher Generated &amp; Registered!
                    </div>
                    <div className="text-xl font-extrabold text-[#16191D] mt-1 font-mono">
                      {voucherGenerated}
                    </div>
                    <p className="text-xs text-[#676E79] mt-2 max-w-xs mx-auto">
                      Use code <strong className="text-[#16191D]">{voucherGenerated}</strong> at checkout for $15 off. We have sent the pre-paid shipping label to <strong className="text-[#16191D]">{tradeInEmail}</strong>.
                    </p>
                  </div>
                  <button
                    onClick={() => setVoucherGenerated(null)}
                    className="text-xs text-[#C85A32] font-semibold hover:underline cursor-pointer"
                  >
                    Register another accessory trade-in
                  </button>
                </div>
              ) : (
                <form onSubmit={handleGenerateTradeIn} className="space-y-3.5">
                  <div className="text-xs font-bold text-[#16191D] uppercase tracking-wider mb-1">
                    Instant Voucher Registration
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#16191D] mb-1">
                      Type of Accessory Being Recycled:
                    </label>
                    <select
                      value={tradeInItem}
                      onChange={(e) => setTradeInItem(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-[#F8F7F4] border border-[#E5E1D8] rounded-lg text-[#16191D] focus:outline-none focus:border-[#C85A32]"
                    >
                      <option value="stand">Phone / Tablet Stand (Any Brand)</option>
                      <option value="key">Key Holder / Carabiner (Any Brand)</option>
                      <option value="bag">Tech Pouch / Sling Bag (Any Brand)</option>
                      <option value="tray">Desk Organizer / Tray (Any Brand)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#16191D] mb-1">
                      Brand / Condition:
                    </label>
                    <select
                      value={tradeInBrand}
                      onChange={(e) => setTradeInBrand(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-[#F8F7F4] border border-[#E5E1D8] rounded-lg text-[#16191D] focus:outline-none focus:border-[#C85A32]"
                    >
                      <option value="other">Non-DailyMate (Plastic or Aluminum)</option>
                      <option value="dailymate-older">DailyMate V1 or Past Generation</option>
                      <option value="broken">Damaged / Non-functional</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#16191D] mb-1">
                      Your Email (To receive $15 voucher &amp; shipping label):
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. name@domain.com"
                      value={tradeInEmail}
                      onChange={(e) => setTradeInEmail(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-[#F8F7F4] border border-[#E5E1D8] rounded-lg text-[#16191D] focus:outline-none focus:border-[#C85A32]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#16191D] text-white hover:bg-[#C85A32] active:scale-95 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 text-[#F07A4B]" />
                    <span>Claim $15 Trade-In Credit</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ESG Report Modal */}
      {showEsgReport && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div
            className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[85vh] overflow-y-auto border border-[#E5E1D8] shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#E5E1D8]">
              <div>
                <div className="text-xs font-bold text-[#C85A32] uppercase tracking-wider">
                  Verified Stakeholder Briefing
                </div>
                <h3 className="text-xl font-extrabold text-[#16191D] mt-0.5">
                  DailyMate ESG &amp; Sustainability Dossier
                </h3>
              </div>
              <button
                onClick={() => setShowEsgReport(false)}
                className="text-xs px-3 py-1 bg-[#F8F7F4] rounded-md hover:bg-[#E5E1D8] cursor-pointer"
              >
                Close
              </button>
            </div>

            <div className="mt-6 space-y-4 text-xs text-[#16191D]/80 leading-relaxed">
              <div className="p-4 bg-[#F8F7F4] rounded-xl border border-[#E5E1D8]">
                <strong className="text-[#16191D] block mb-1">Executive Summary:</strong>
                DailyMate operates a distributed manufacturing network utilizing certified secondary alloys (6061-T6), FSC wood supply lines, and zero-plastic downstream logistics. Our goal is full Scope 1 &amp; Scope 2 climate neutrality by Q4 2027.
              </div>

              <div>
                <strong className="text-[#16191D] block mb-1">Third-Party Verification Protocols:</strong>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>ISO 14001 Environmental Management:</strong> Annual third-party facility audits.</li>
                  <li><strong>RoHS &amp; REACH Compliance:</strong> 100% lead, cadmium, and hexavalent chromium free.</li>
                  <li><strong>Forest Stewardship Council (FSC):</strong> Chain-of-custody tracking on every walnut &amp; oak block.</li>
                  <li><strong>Global Recycled Standard (GRS):</strong> Verification of secondary textile yarn and plastic bottles diverted.</li>
                </ul>
              </div>

              <div className="pt-2">
                <strong className="text-[#16191D] block mb-1">Chemical Safety Disclosure:</strong>
                Anodized color treatments are sealed using non-nickel organic hot-water hydration seals, eliminating heavy-metal bath runoff.
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E5E1D8] flex justify-end">
              <button
                onClick={() => setShowEsgReport(false)}
                className="px-4 py-2 bg-[#16191D] text-white rounded-lg text-xs font-bold cursor-pointer"
              >
                Close Dossier
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
