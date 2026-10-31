import React, { useState, useEffect } from 'react';
import { Product } from '../data/products';
import { X, Check, ShieldCheck, Truck, RefreshCw, ShoppingBag, Star, Layers, Ruler } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, color: string, qty: number) => void;
  onExpressBuy: (product: Product, color: string, qty: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onExpressBuy
}) => {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]?.name || 'Standard');
  const [quantity, setQuantity] = useState<number>(1);
  const [addedAnimation, setAddedAnimation] = useState<boolean>(false);

  useEffect(() => {
    setSelectedColor(product.colors[0]?.name || 'Standard');
    setQuantity(1);
    setAddedAnimation(false);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [product, onClose]);

  const handleAdd = () => {
    onAddToCart(product, selectedColor, quantity);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
  };

  const handleBuyNow = () => {
    onExpressBuy(product, selectedColor, quantity);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-[#E5E1D8] overflow-hidden relative flex flex-col md:flex-row my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#16191D] flex items-center justify-center shadow-md border border-black/5 transition-all cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Image & Materials */}
        <div className="md:w-1/2 bg-[#F8F7F4] p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#E5E1D8]">
          <div className="space-y-4">
            <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-white shadow-sm border border-[#E5E1D8]">
              <img
                src={product.image}
                alt={product.name}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/hero_daily_workspace_1793461811757.jpg';
                }}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 px-2 py-0.5 bg-[#16191D] text-[#F07A4B] text-[10px] font-bold uppercase tracking-wider rounded">
                {product.categoryLabel}
              </div>
            </div>

            {/* Quick Specs Badges */}
            <div className="grid grid-cols-2 gap-2 text-xs text-[#16191D]/80">
              <div className="bg-white p-2.5 rounded-lg border border-[#E5E1D8] flex items-center gap-2">
                <Ruler className="w-4 h-4 text-[#C85A32] shrink-0" />
                <div className="truncate">
                  <div className="text-[10px] text-[#676E79] uppercase font-semibold">Dimensions</div>
                  <div className="font-medium text-[#16191D] text-xs truncate">{product.dimensions}</div>
                </div>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-[#E5E1D8] flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#C85A32] shrink-0" />
                <div className="truncate">
                  <div className="text-[10px] text-[#676E79] uppercase font-semibold">Weight</div>
                  <div className="font-medium text-[#16191D] text-xs tabular-nums">{product.weight}</div>
                </div>
              </div>
            </div>

            {/* Verified Materials breakdown */}
            <div className="bg-white p-3 rounded-lg border border-[#E5E1D8] space-y-1.5">
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#C85A32]">
                Verified Material Composition
              </div>
              <div className="flex flex-wrap gap-1.5">
                {product.materials.map((mat, i) => (
                  <span
                    key={i}
                    className="text-[11px] bg-[#F8F7F4] text-[#16191D] px-2 py-0.5 rounded font-medium border border-[#E5E1D8]"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-[#E5E1D8] flex items-center justify-between text-xs text-[#676E79]">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-[#C85A32]" />
              {product.warranty}
            </span>
            <span className="flex items-center gap-1">
              <RefreshCw className="w-4 h-4 text-[#C85A32]" />
              Plastic-Free Pack
            </span>
          </div>
        </div>

        {/* Right Column: Information & Actions */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            {/* Category kicker */}
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C85A32] mb-1">
              {product.categoryLabel}
            </div>

            <h2 className="text-2xl font-extrabold text-[#16191D] tracking-tight">
              {product.name}
            </h2>

            <p className="text-xs text-[#C85A32] font-medium mt-1">
              {product.tagline}
            </p>

            {/* Price & Rating */}
            <div className="flex items-center justify-between mt-3 pb-3 border-b border-[#E5E1D8]">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-extrabold text-[#16191D] tabular-nums">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-[#676E79] line-through tabular-nums">
                    ${product.originalPrice}
                  </span>
                )}
                <span className="text-xs font-medium text-[#C85A32] bg-[#FBF1EB] px-2 py-0.5 rounded border border-[#C85A32]/20">
                  Save ${(product.originalPrice || product.price) - product.price}
                </span>
              </div>

              <div className="flex items-center gap-1 text-xs">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-[#C85A32] text-[#C85A32]'
                          : 'fill-slate-200 text-slate-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-bold text-[#16191D] tabular-nums ml-1">{product.rating}</span>
                <span className="text-[#676E79]">({product.reviewsCount})</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#16191D]/80 mt-4 leading-relaxed">
              {product.description}
            </p>

            {/* Highlights bullet checklist */}
            <div className="mt-4 space-y-1.5">
              <div className="text-xs font-bold text-[#16191D]">Key Engineering Highlights:</div>
              {product.highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-[#16191D]/80">
                  <Check className="w-3.5 h-3.5 text-[#C85A32] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Color Swatches */}
            <div className="mt-5">
              <div className="flex items-center justify-between text-xs font-semibold text-[#16191D] mb-2">
                <span>Finish / Color:</span>
                <span className="text-[#C85A32] font-bold">{selectedColor}</span>
              </div>
              <div className="flex items-center gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all cursor-pointer ${
                      selectedColor === color.name
                        ? 'border-[#16191D] bg-[#16191D] text-white shadow-xs'
                        : 'border-[#E5E1D8] text-[#16191D] hover:border-[#C85A32]/40 bg-white'
                    }`}
                  >
                    <span
                      className="w-3 h-3 rounded-full border border-black/20"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span>{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Stepper */}
            <div className="mt-5 flex items-center gap-4">
              <span className="text-xs font-semibold text-[#16191D]">Quantity:</span>
              <div className="flex items-center border border-[#E5E1D8] rounded-lg overflow-hidden bg-white">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 text-sm font-bold text-[#16191D] hover:bg-[#F8F7F4] transition-colors cursor-pointer"
                >
                  -
                </button>
                <span className="px-3 py-1 text-xs font-bold text-[#16191D] tabular-nums min-w-8 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 text-sm font-bold text-[#16191D] hover:bg-[#F8F7F4] transition-colors cursor-pointer"
                >
                  +
                </button>
              </div>
              <span className="text-xs text-[#676E79]">In stock, ready to dispatch in 24h</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-6 pt-4 border-t border-[#E5E1D8] space-y-2">
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleAdd}
                className={`py-3 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  addedAnimation
                    ? 'bg-[#C85A32] text-white'
                    : 'bg-[#16191D] text-white hover:bg-[#23282E] active:scale-95 shadow-sm'
                }`}
              >
                {addedAnimation ? (
                  <>
                    <Check className="w-4 h-4 text-white" />
                    <span>Added to Bag</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-[#F07A4B]" />
                    <span>Add to Bag (${product.price * quantity})</span>
                  </>
                )}
              </button>

              <button
                onClick={handleBuyNow}
                className="py-3 px-4 bg-[#C85A32] text-white hover:bg-[#b24e27] active:scale-95 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Express Buy Now</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-4 text-[11px] text-[#676E79] pt-1">
              <span className="flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-[#C85A32]" />
                Free shipping over $50
              </span>
              <span>·</span>
              <span>Secure Encrypted Checkout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
