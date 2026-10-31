import React from 'react';
import { X, Copy, Check, Palette, Type, LayoutTemplate } from 'lucide-react';

interface BlueprintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GoogleSitesBlueprintModal: React.FC<BlueprintModalProps> = ({ isOpen, onClose }) => {
  const [copiedHex, setCopiedHex] = React.useState<string | null>(null);

  if (!isOpen) return null;

  const colorPalette = [
    { name: 'Obsidian Basalt', hex: '#16191D', role: 'Primary text, dark headers, structural buttons' },
    { name: 'Terracotta Copper', hex: '#C85A32', role: 'Signature brand accent, highlights, active states' },
    { name: 'Warm Amber', hex: '#F07A4B', role: 'High-contrast tag highlights and action accents' },
    { name: 'Architectural Linen', hex: '#F8F7F4', role: 'Main canvas, light section backgrounds' },
    { name: 'Pure White', hex: '#FFFFFF', role: 'Product cards, modal panels, high-contrast surfaces' }
  ];

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 max-h-[88vh] overflow-y-auto border border-[#E5E1D8] shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#F8F7F4] text-[#16191D] cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-bold text-[#C85A32] uppercase tracking-wider mb-2">
          <LayoutTemplate className="w-4 h-4" />
          <span>Implementation Blueprint</span>
        </div>

        <h2 className="text-2xl font-extrabold text-[#16191D]">
          Google Sites &amp; Web Reproduction Guide
        </h2>
        <p className="text-xs text-[#676E79] mt-1">
          Exact color tokens, typography, and page structure to rebuild or mirror DailyMate on Google Sites or any modular CMS.
        </p>

        {/* Brand Color Specifications */}
        <div className="mt-6 pt-6 border-t border-[#E5E1D8]">
          <div className="flex items-center gap-2 text-xs font-bold text-[#16191D] mb-3">
            <Palette className="w-4 h-4 text-[#C85A32]" />
            <span>DailyMate Terracotta &amp; Basalt Color System</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {colorPalette.map((color) => (
              <div
                key={color.name}
                className="p-3 rounded-xl border border-[#E5E1D8] bg-[#F8F7F4] flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg border border-black/15 shadow-2xs shrink-0"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div>
                    <div className="text-xs font-bold text-[#16191D]">{color.name}</div>
                    <div className="text-[11px] font-mono text-[#676E79]">{color.hex}</div>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(color.hex)}
                  className="p-1.5 rounded hover:bg-white text-[#676E79] hover:text-[#16191D] cursor-pointer"
                  title="Copy Hex"
                >
                  {copiedHex === color.hex ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div className="mt-6 pt-6 border-t border-[#E5E1D8]">
          <div className="flex items-center gap-2 text-xs font-bold text-[#16191D] mb-2">
            <Type className="w-4 h-4 text-[#C85A32]" />
            <span>Typography System</span>
          </div>
          <div className="p-4 rounded-xl bg-[#F8F7F4] border border-[#E5E1D8] text-xs space-y-1.5">
            <div>
              <span className="font-semibold text-[#16191D]">Primary Web Font:</span>{' '}
              <span className="font-mono text-[#C85A32] font-bold">Plus Jakarta Sans</span>
            </div>
            <div>
              <span className="font-semibold text-[#16191D]">Fallbacks:</span>{' '}
              <span className="text-[#676E79]">DM Sans, Outfit, system-ui</span>
            </div>
            <div>
              <span className="font-semibold text-[#16191D]">Recommended Weights:</span>{' '}
              <span className="text-[#676E79]">Regular 400, Medium 500, SemiBold 600, Bold 700</span>
            </div>
          </div>
        </div>

        {/* Google Sites Step-by-Step Instructions */}
        <div className="mt-6 pt-6 border-t border-[#E5E1D8] space-y-3">
          <div className="text-xs font-bold text-[#16191D]">
            How to reproduce in Google Sites:
          </div>
          <div className="space-y-2 text-xs text-[#16191D]/80">
            <div className="p-3 bg-[#F8F7F4] rounded-lg">
              <span className="font-bold text-[#16191D]">1. Create Custom Theme:</span> In Google Sites, open <span className="font-semibold">Themes &gt; Custom Theme</span>. Set primary color to <span className="font-mono font-bold text-[#16191D]">#16191D</span>, secondary to <span className="font-mono font-bold text-[#C85A32]">#C85A32</span>, and background to <span className="font-mono font-bold">#F8F7F4</span>.
            </div>
            <div className="p-3 bg-[#F8F7F4] rounded-lg">
              <span className="font-bold text-[#16191D]">2. Configure Navigation:</span> Select "Top Navigation" linking to Sections: Catalog, Setup Builder, Craft, Sustainability, Studies, Corporate, and Contact.
            </div>
            <div className="p-3 bg-[#F8F7F4] rounded-lg">
              <span className="font-bold text-[#16191D]">3. Layout Content Blocks:</span> Use native 4-column blocks for the product showcase, inserting buttons styled with dark basalt and warm terracotta text for maximum visual contrast.
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#E5E1D8] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#16191D] text-white rounded-xl text-xs font-semibold cursor-pointer"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
