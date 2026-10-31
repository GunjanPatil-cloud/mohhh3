import React, { useState } from 'react';
import { PRODUCTS, Product } from '../data/products';
import { Check, Sparkles, ShoppingBag, ArrowRight } from 'lucide-react';

interface BundleBuilderProps {
  onAddBundleToCart: (items: { product: Product; color: string; qty: number }[]) => void;
}

export const BundleBuilder: React.FC<BundleBuilderProps> = ({ onAddBundleToCart }) => {
  const stands = PRODUCTS.filter((p) => p.category === 'stands');
  const keys = PRODUCTS.filter((p) => p.category === 'keys');
  const bags = PRODUCTS.filter((p) => p.category === 'bags');
  const organizers = PRODUCTS.filter((p) => p.category === 'organizers');

  const [selectedStand, setSelectedStand] = useState<Product>(stands[0]);
  const [selectedKey, setSelectedKey] = useState<Product>(keys[0]);
  const [selectedBag, setSelectedBag] = useState<Product>(bags[0]);
  const [selectedOrganizer, setSelectedOrganizer] = useState<Product>(organizers[0]);

  const [standColor, setStandColor] = useState<string>(stands[0].colors[0]?.name || 'Standard');
  const [keyColor, setKeyColor] = useState<string>(keys[0].colors[0]?.name || 'Standard');
  const [bagColor, setBagColor] = useState<string>(bags[0].colors[0]?.name || 'Standard');
  const [organizerColor, setOrganizerColor] = useState<string>(organizers[0].colors[0]?.name || 'Standard');

  const [bundleAdded, setBundleAdded] = useState<boolean>(false);

  const rawTotal = selectedStand.price + selectedKey.price + selectedBag.price + selectedOrganizer.price;
  const bundleDiscountRate = 0.15; // 15% discount
  const savings = Math.round(rawTotal * bundleDiscountRate);
  const bundleTotal = rawTotal - savings;

  const handleAddBundle = () => {
    const bundleItems = [
      { product: selectedStand, color: standColor, qty: 1 },
      { product: selectedKey, color: keyColor, qty: 1 },
      { product: selectedBag, color: bagColor, qty: 1 },
      { product: selectedOrganizer, color: organizerColor, qty: 1 }
    ];
    onAddBundleToCart(bundleItems);
    setBundleAdded(true);
    setTimeout(() => setBundleAdded(false), 2000);
  };

  return (
    <section id="bundle-builder" className="py-16 bg-white border-t border-[#E5E1D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FBF1EB] rounded-full text-xs font-semibold text-[#C85A32] mb-2 border border-[#C85A32]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>Curate Your Workspace &amp; Carry</span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#16191D] tracking-tight">
            Build Your Everyday Setup
          </h2>
          <p className="text-sm text-[#676E79] mt-2">
            Combine all 4 essentials—Stand, Key Holder, Daily Bag, and Desk Organizer—and receive an automatic 15% startup bundle discount.
          </p>
        </div>

        {/* 4-Step Selection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {/* Step 1: Stand */}
          <div className="p-5 rounded-xl border border-[#E5E1D8] bg-[#F8F7F4] flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#C85A32] mb-2">
                01 · Mobile Stand
              </div>

              {/* Selected Visual Preview */}
              <div className="relative aspect-4/3 rounded-lg overflow-hidden border border-[#E5E1D8] mb-3 bg-white">
                <img
                  src={selectedStand.image}
                  alt={selectedStand.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/70 backdrop-blur-xs rounded text-[10px] font-mono text-white">
                  {selectedStand.name}
                </div>
              </div>

              <div className="space-y-2">
                {stands.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelectedStand(item);
                      setStandColor(item.colors[0]?.name || 'Standard');
                    }}
                    className={`w-full text-left p-2.5 rounded-lg border transition-all cursor-pointer flex items-center gap-2.5 ${
                      selectedStand.id === item.id
                        ? 'bg-white border-[#C85A32] shadow-xs'
                        : 'bg-white/60 border-transparent hover:bg-white text-[#16191D]/70'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10 rounded object-cover shrink-0 border border-black/10"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between text-xs font-bold text-[#16191D]">
                        <span className="truncate">{item.name}</span>
                        <span className="tabular-nums ml-1">${item.price}</span>
                      </div>
                      <div className="text-[11px] text-[#676E79] line-clamp-1">{item.tagline}</div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Color picker */}
              <div className="mt-4 pt-3 border-t border-[#E5E1D8]">
                <div className="text-[11px] font-semibold text-[#16191D] mb-1.5 flex justify-between">
                  <span>Color:</span>
                  <span className="text-[#C85A32]">{standColor}</span>
                </div>
                <div className="flex gap-1.5">
                  {selectedStand.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setStandColor(c.name)}
                      className={`w-5 h-5 rounded-full border transition-transform ${
                        standColor === c.name ? 'scale-110 ring-2 ring-[#C85A32]' : 'border-black/20'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Key Holder */}
          <div className="p-5 rounded-xl border border-[#E5E1D8] bg-[#F8F7F4] flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#C85A32] mb-2">
                02 · Key Holder
              </div>

              {/* Selected Visual Preview */}
              <div className="relative aspect-4/3 rounded-lg overflow-hidden border border-[#E5E1D8] mb-3 bg-white">
                <img
                  src={selectedKey.image}
                  alt={selectedKey.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/70 backdrop-blur-xs rounded text-[10px] font-mono text-white">
                  {selectedKey.name}
                </div>
              </div>

              <div className="space-y-2">
                {keys.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelectedKey(item);
                      setKeyColor(item.colors[0]?.name || 'Standard');
                    }}
                    className={`w-full text-left p-2.5 rounded-lg border transition-all cursor-pointer flex items-center gap-2.5 ${
                      selectedKey.id === item.id
                        ? 'bg-white border-[#C85A32] shadow-xs'
                        : 'bg-white/60 border-transparent hover:bg-white text-[#16191D]/70'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10 rounded object-cover shrink-0 border border-black/10"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between text-xs font-bold text-[#16191D]">
                        <span className="truncate">{item.name}</span>
                        <span className="tabular-nums ml-1">${item.price}</span>
                      </div>
                      <div className="text-[11px] text-[#676E79] line-clamp-1">{item.tagline}</div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Color picker */}
              <div className="mt-4 pt-3 border-t border-[#E5E1D8]">
                <div className="text-[11px] font-semibold text-[#16191D] mb-1.5 flex justify-between">
                  <span>Color:</span>
                  <span className="text-[#C85A32]">{keyColor}</span>
                </div>
                <div className="flex gap-1.5">
                  {selectedKey.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setKeyColor(c.name)}
                      className={`w-5 h-5 rounded-full border transition-transform ${
                        keyColor === c.name ? 'scale-110 ring-2 ring-[#C85A32]' : 'border-black/20'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Everyday Bag */}
          <div className="p-5 rounded-xl border border-[#E5E1D8] bg-[#F8F7F4] flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#C85A32] mb-2">
                03 · Everyday Bag
              </div>

              {/* Selected Visual Preview */}
              <div className="relative aspect-4/3 rounded-lg overflow-hidden border border-[#E5E1D8] mb-3 bg-white">
                <img
                  src={selectedBag.image}
                  alt={selectedBag.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/70 backdrop-blur-xs rounded text-[10px] font-mono text-white">
                  {selectedBag.name}
                </div>
              </div>

              <div className="space-y-2">
                {bags.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelectedBag(item);
                      setBagColor(item.colors[0]?.name || 'Standard');
                    }}
                    className={`w-full text-left p-2.5 rounded-lg border transition-all cursor-pointer flex items-center gap-2.5 ${
                      selectedBag.id === item.id
                        ? 'bg-white border-[#C85A32] shadow-xs'
                        : 'bg-white/60 border-transparent hover:bg-white text-[#16191D]/70'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10 rounded object-cover shrink-0 border border-black/10"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between text-xs font-bold text-[#16191D]">
                        <span className="truncate">{item.name}</span>
                        <span className="tabular-nums ml-1">${item.price}</span>
                      </div>
                      <div className="text-[11px] text-[#676E79] line-clamp-1">{item.tagline}</div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Color picker */}
              <div className="mt-4 pt-3 border-t border-[#E5E1D8]">
                <div className="text-[11px] font-semibold text-[#16191D] mb-1.5 flex justify-between">
                  <span>Color:</span>
                  <span className="text-[#C85A32]">{bagColor}</span>
                </div>
                <div className="flex gap-1.5">
                  {selectedBag.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setBagColor(c.name)}
                      className={`w-5 h-5 rounded-full border transition-transform ${
                        bagColor === c.name ? 'scale-110 ring-2 ring-[#C85A32]' : 'border-black/20'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Step 4: Desk Organizer */}
          <div className="p-5 rounded-xl border border-[#E5E1D8] bg-[#F8F7F4] flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#C85A32] mb-2">
                04 · Desk Organizer
              </div>

              {/* Selected Visual Preview */}
              <div className="relative aspect-4/3 rounded-lg overflow-hidden border border-[#E5E1D8] mb-3 bg-white">
                <img
                  src={selectedOrganizer.image}
                  alt={selectedOrganizer.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/70 backdrop-blur-xs rounded text-[10px] font-mono text-white">
                  {selectedOrganizer.name}
                </div>
              </div>

              <div className="space-y-2">
                {organizers.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelectedOrganizer(item);
                      setOrganizerColor(item.colors[0]?.name || 'Standard');
                    }}
                    className={`w-full text-left p-2.5 rounded-lg border transition-all cursor-pointer flex items-center gap-2.5 ${
                      selectedOrganizer.id === item.id
                        ? 'bg-white border-[#C85A32] shadow-xs'
                        : 'bg-white/60 border-transparent hover:bg-white text-[#16191D]/70'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10 rounded object-cover shrink-0 border border-black/10"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between text-xs font-bold text-[#16191D]">
                        <span className="truncate">{item.name}</span>
                        <span className="tabular-nums ml-1">${item.price}</span>
                      </div>
                      <div className="text-[11px] text-[#676E79] line-clamp-1">{item.tagline}</div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Color picker */}
              <div className="mt-4 pt-3 border-t border-[#E5E1D8]">
                <div className="text-[11px] font-semibold text-[#16191D] mb-1.5 flex justify-between">
                  <span>Color:</span>
                  <span className="text-[#C85A32]">{organizerColor}</span>
                </div>
                <div className="flex gap-1.5">
                  {selectedOrganizer.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setOrganizerColor(c.name)}
                      className={`w-5 h-5 rounded-full border transition-transform ${
                        organizerColor === c.name ? 'scale-110 ring-2 ring-[#C85A32]' : 'border-black/20'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bundle Summary Card & 1-Click Purchase */}
        <div className="bg-[#16191D] text-white rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F07A4B]">
              <span>Startup Setup Special</span>
              <span aria-hidden="true">·</span>
              <span>15% Bundle Discount</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Your Custom DailyMate 4-Piece Suite
            </h3>
            <p className="text-xs text-white/75 max-w-xl">
              Includes {selectedStand.name} ({standColor}), {selectedKey.name} ({keyColor}), {selectedBag.name} ({bagColor}), and {selectedOrganizer.name} ({organizerColor}).
            </p>

            {/* Live 4-item visual suite preview */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              {[
                { product: selectedStand, color: standColor, step: '01' },
                { product: selectedKey, color: keyColor, step: '02' },
                { product: selectedBag, color: bagColor, step: '03' },
                { product: selectedOrganizer, color: organizerColor, step: '04' }
              ].map(({ product, color, step }) => (
                <div key={step} className="flex items-center gap-2 bg-white/10 rounded-lg p-1.5 pr-2.5 border border-white/10">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-8 h-8 rounded object-cover shrink-0"
                  />
                  <div className="text-[11px] leading-tight text-left">
                    <div className="text-white font-bold truncate max-w-[110px]">{product.name}</div>
                    <div className="text-[#F07A4B] text-[10px]">{color}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 shrink-0 w-full lg:w-auto">
            <div className="text-center sm:text-right">
              <div className="text-xs text-white/60">
                Regular: <span className="line-through tabular-nums">${rawTotal}</span>
              </div>
              <div className="text-3xl font-extrabold text-[#F07A4B] tabular-nums">
                ${bundleTotal}
              </div>
              <div className="text-xs text-orange-200 font-semibold">
                You save ${savings} (15% off)
              </div>
            </div>

            <button
              onClick={handleAddBundle}
              className={`w-full sm:w-auto px-6 py-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                bundleAdded
                  ? 'bg-[#C85A32] text-white'
                  : 'bg-[#C85A32] text-white hover:bg-[#b24e27] active:scale-95 shadow-lg'
              }`}
            >
              {bundleAdded ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>4 Items Added to Bag</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4 text-white" />
                  <span>Add Complete Setup to Bag</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
