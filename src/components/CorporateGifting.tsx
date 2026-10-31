import React, { useState } from 'react';
import { Building2, Sparkles, Send, CheckCircle2 } from 'lucide-react';

export const CorporateGifting: React.FC = () => {
  const [engravingText, setEngravingText] = useState<string>('ACME CORP');
  const [selectedProduct, setSelectedProduct] = useState<'stand' | 'key' | 'tray'>('stand');
  const [units, setUnits] = useState<number>(50);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [contactEmail, setContactEmail] = useState<string>('');

  const pricingPerUnit = {
    stand: 49,
    key: 39,
    tray: 59
  }[selectedProduct];

  const getDiscountPercent = (qty: number) => {
    if (qty >= 200) return 40;
    if (qty >= 50) return 30;
    return 20;
  };

  const discount = getDiscountPercent(units);
  const discountedUnitCost = Math.round(pricingPerUnit * (1 - discount / 100));
  const estimatedTotal = discountedUnitCost * units;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactEmail) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setContactEmail('');
    }, 4000);
  };

  return (
    <section id="corporate" className="py-16 bg-white border-t border-[#E5E1D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#C85A32] mb-1">
            B2B &amp; Corporate Gifting
          </div>
          <h2 className="text-3xl font-extrabold text-[#16191D] tracking-tight">
            Custom Laser Engraving &amp; Institutional Fleet Orders
          </h2>
          <p className="text-sm text-[#676E79] mt-2">
            Elevate employee onboarding, executive retreats, and investor gifting with precision laser-engraved DailyMate hardware. Zero setup fees on orders above 25 units.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Interactive Laser Engraver Preview */}
          <div className="lg:col-span-7 bg-[#F8F7F4] rounded-2xl border border-[#E5E1D8] p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C85A32] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Live Laser Mockup Simulator
              </span>
              <span className="text-xs text-[#676E79]">Fiber Laser 0.01mm Precision</span>
            </div>

            {/* Simulated Aluminum Plate Viewport */}
            <div className="relative h-56 sm:h-64 rounded-xl bg-gradient-to-br from-[#2D3035] via-[#202327] to-[#16181B] border border-black/30 shadow-inner flex flex-col items-center justify-center p-6 text-center overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

              <div className="relative z-10 space-y-3">
                <div className="text-[11px] font-mono tracking-widest text-[#F07A4B]/80 uppercase">
                  DAILYMATE · {selectedProduct.toUpperCase()}
                </div>

                {/* Laser Engraved Plate effect */}
                <div className="px-6 py-3 rounded border border-white/20 bg-black/40 backdrop-blur-xs shadow-md">
                  <span className="font-mono text-xl sm:text-2xl font-bold tracking-widest text-slate-200 uppercase drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
                    {engravingText || 'YOUR LOGO / NAME'}
                  </span>
                </div>

                <div className="text-[10px] font-mono text-white/50 tracking-wider">
                  SPEC: 6061-T6 ANODIZED ALLOY · SERIAL DM-B2B-{units}
                </div>
              </div>

              <div className="absolute bottom-3 right-3 text-[10px] text-white/40 font-mono">
                PRECISION LASER MARKING
              </div>
            </div>

            {/* Customizer Controls */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#16191D] mb-1">
                  Type Custom Wordmark / Name to Engrave:
                </label>
                <input
                  type="text"
                  maxLength={28}
                  value={engravingText}
                  onChange={(e) => setEngravingText(e.target.value.toUpperCase())}
                  placeholder="e.g. ACME CORP or GUNJAN PATIL"
                  className="w-full px-4 py-2.5 text-xs bg-white border border-[#E5E1D8] rounded-lg text-[#16191D] focus:outline-none focus:border-[#C85A32] font-mono"
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedProduct('stand')}
                  className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                    selectedProduct === 'stand'
                      ? 'bg-[#16191D] text-white border-[#16191D]'
                      : 'bg-white text-[#16191D] border-[#E5E1D8] hover:border-[#C85A32]/40'
                  }`}
                >
                  OmniStand Pro
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedProduct('key')}
                  className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                    selectedProduct === 'key'
                      ? 'bg-[#16191D] text-white border-[#16191D]'
                      : 'bg-white text-[#16191D] border-[#E5E1D8] hover:border-[#C85A32]/40'
                  }`}
                >
                  OrbitKey Titanium
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedProduct('tray')}
                  className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                    selectedProduct === 'tray'
                      ? 'bg-[#16191D] text-white border-[#16191D]'
                      : 'bg-white text-[#16191D] border-[#E5E1D8] hover:border-[#C85A32]/40'
                  }`}
                >
                  Horizon Desk Tray
                </button>
              </div>
            </div>
          </div>

          {/* Volume Pricing & Quick Quote Form */}
          <div className="lg:col-span-5 bg-[#F8F7F4] rounded-2xl border border-[#E5E1D8] p-6 sm:p-8 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#C85A32] uppercase tracking-wider mb-1">
                <Building2 className="w-4 h-4" />
                <span>Tiered Volume Calculator</span>
              </div>
              <h3 className="text-xl font-bold text-[#16191D]">Instant Quote Estimation</h3>
            </div>

            {/* Quantity Slider */}
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-[#16191D] mb-2">
                <span>Fleet Order Quantity:</span>
                <span className="text-base text-[#C85A32] font-extrabold tabular-nums">{units} Units</span>
              </div>
              <input
                type="range"
                min={25}
                max={500}
                step={25}
                value={units}
                onChange={(e) => setUnits(Number(e.target.value))}
                className="w-full accent-[#C85A32] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#676E79] mt-1">
                <span>25 (20% off)</span>
                <span>50 (30% off)</span>
                <span>200+ (40% off)</span>
              </div>
            </div>

            {/* Calculations Breakdown */}
            <div className="p-4 bg-white rounded-xl border border-[#E5E1D8] space-y-2 text-xs">
              <div className="flex justify-between text-[#676E79]">
                <span>Retail Unit Price:</span>
                <span className="tabular-nums">${pricingPerUnit} / unit</span>
              </div>
              <div className="flex justify-between text-[#C85A32] font-semibold">
                <span>Volume Discount Applied:</span>
                <span className="tabular-nums">-{discount}% Off</span>
              </div>
              <div className="flex justify-between text-[#676E79]">
                <span>Discounted Fleet Rate:</span>
                <span className="font-bold text-[#16191D] tabular-nums">${discountedUnitCost} / unit</span>
              </div>
              <div className="flex justify-between text-[#676E79]">
                <span>Custom Laser Engraving:</span>
                <span className="text-[#C85A32] font-bold">FREE included</span>
              </div>
              <div className="pt-2 border-t border-[#E5E1D8] flex justify-between items-baseline">
                <span className="text-sm font-bold text-[#16191D]">Estimated Total:</span>
                <span className="text-2xl font-extrabold text-[#16191D] tabular-nums">${estimatedTotal.toLocaleString()}</span>
              </div>
            </div>

            {/* Submission Form */}
            {submitted ? (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>
                  Quote proposal #{Math.floor(1000 + Math.random() * 9000)} sent! Our enterprise lead will contact you within 4 hours.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  required
                  placeholder="Official Work Email (e.g. name@company.com)"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs bg-white border border-[#E5E1D8] rounded-lg text-[#16191D] focus:outline-none focus:border-[#C85A32]"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-[#16191D] text-white hover:bg-[#C85A32] active:scale-95 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-[#F07A4B]" />
                  <span>Request Official Commercial Pro-Forma</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
