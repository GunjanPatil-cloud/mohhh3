import React, { useState } from 'react';
import { CartItem } from '../types/cart';
import { X, Trash2, ShoppingBag, ArrowRight, Tag, Check, Truck } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, color: string, delta: number) => void;
  onRemoveItem: (productId: string, color: string) => void;
  onCheckout: (appliedDiscount: number, discountCode: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}) => {
  const [promoInput, setPromoInput] = useState<string>('');
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [appliedPromo, setAppliedPromo] = useState<string>('');
  const [promoError, setPromoError] = useState<string>('');

  if (!isOpen) return null;

  const rawSubtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = Math.round(rawSubtotal * (discountPercent / 100));
  const freeShippingThreshold = 50;
  const isFreeShipping = rawSubtotal >= freeShippingThreshold || rawSubtotal === 0;
  const shippingFee = isFreeShipping ? 0 : 8;
  const grandTotal = Math.max(0, rawSubtotal - discountAmount + shippingFee);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const code = promoInput.trim().toUpperCase();
    if (code === 'DAILY10' || code === 'STARTUP10') {
      setDiscountPercent(10);
      setAppliedPromo(code);
      setPromoError('');
    } else if (code === 'FREESHIP') {
      setDiscountPercent(5);
      setAppliedPromo(code);
      setPromoError('');
    } else {
      setPromoError('Invalid coupon. Try DAILY10 for 10% off.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex justify-end">
      <div
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#E5E1D8] flex items-center justify-between bg-[#F8F7F4]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#16191D]" />
            <h2 className="text-base font-bold text-[#16191D]">Your Shopping Bag</h2>
            <span className="text-xs bg-[#16191D] text-[#F07A4B] font-bold px-2 py-0.5 rounded-full">
              {items.reduce((acc, it) => acc + it.quantity, 0)}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white text-[#16191D] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Meter */}
        <div className="p-4 bg-white border-b border-[#E5E1D8] text-xs">
          <div className="flex items-center justify-between text-[#16191D] font-medium mb-1.5">
            <span className="flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-[#C85A32]" />
              {isFreeShipping ? (
                <span className="text-[#C85A32] font-bold">You qualify for FREE Standard Delivery!</span>
              ) : (
                <span>
                  Add <strong className="text-[#16191D]">${freeShippingThreshold - rawSubtotal}</strong> more for Free Shipping
                </span>
              )}
            </span>
            <span className="tabular-nums font-bold">
              {Math.min(100, Math.round((rawSubtotal / freeShippingThreshold) * 100))}%
            </span>
          </div>
          <div className="w-full h-1.5 bg-[#F8F7F4] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#C85A32] rounded-full transition-all duration-300"
              style={{ width: `${Math.min(100, (rawSubtotal / freeShippingThreshold) * 100)}%` }}
            />
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#676E79] space-y-3">
              <ShoppingBag className="w-12 h-12 text-[#16191D]/20" />
              <p className="text-sm font-semibold text-[#16191D]">Your bag is currently empty.</p>
              <p className="text-xs max-w-xs">
                Explore our precision mobile stands, titanium key holders, everyday slings, and desk trays.
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-4 py-2 bg-[#16191D] text-white rounded-lg text-xs font-semibold cursor-pointer"
              >
                Browse Catalog
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={`${item.product.id}-${item.selectedColor}`}
                className="p-3 bg-[#F8F7F4] rounded-xl border border-[#E5E1D8] flex gap-3 relative"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-18 h-18 object-cover rounded-lg bg-white shrink-0"
                  referrerPolicy="no-referrer"
                />

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between">
                      <h4 className="text-xs font-bold text-[#16191D] line-clamp-1">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.product.id, item.selectedColor)}
                        className="text-[#676E79] hover:text-red-600 p-1 cursor-pointer"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-[11px] text-[#676E79] mt-0.5">
                      Finish: <span className="font-semibold text-[#16191D]">{item.selectedColor}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-[#E5E1D8] rounded-md bg-white">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.selectedColor, -1)}
                        className="px-2 py-0.5 text-xs font-bold text-[#16191D] hover:bg-[#F8F7F4] cursor-pointer"
                      >
                        -
                      </button>
                      <span className="px-2 text-xs font-bold text-[#16191D] tabular-nums min-w-5 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.selectedColor, 1)}
                        className="px-2 py-0.5 text-xs font-bold text-[#16191D] hover:bg-[#F8F7F4] cursor-pointer"
                      >
                        +
                      </button>
                    </div>

                    <span className="text-xs font-extrabold text-[#16191D] tabular-nums">
                      ${item.product.price * item.quantity}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Promo Code & Order Summary Footer */}
        {items.length > 0 && (
          <div className="p-5 border-t border-[#E5E1D8] bg-[#F8F7F4] space-y-4">
            {/* Promo Code Input */}
            <form onSubmit={handleApplyPromo} className="space-y-1">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 text-[#676E79]/60 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Coupon (try DAILY10)"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    className="w-full pl-8 pr-2 py-1.5 text-xs bg-white border border-[#E5E1D8] rounded-lg text-[#16191D] uppercase placeholder-[#676E79]/60 focus:outline-none focus:border-[#C85A32]"
                  />
                </div>
                <button
                  type="submit"
                  className="px-3 py-1.5 bg-[#16191D] text-white rounded-lg text-xs font-semibold cursor-pointer"
                >
                  Apply
                </button>
              </div>
              {appliedPromo && (
                <div className="text-[11px] text-[#C85A32] font-semibold flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  <span>Promo {appliedPromo} applied (-{discountPercent}%)</span>
                </div>
              )}
              {promoError && (
                <div className="text-[11px] text-red-600 font-medium">{promoError}</div>
              )}
            </form>

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-[#16191D]/80">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold text-[#16191D] tabular-nums">${rawSubtotal}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-[#C85A32] font-semibold">
                  <span>Discount ({discountPercent}%)</span>
                  <span className="tabular-nums">-${discountAmount}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-semibold tabular-nums">
                  {shippingFee === 0 ? (
                    <span className="text-[#C85A32] font-bold">FREE</span>
                  ) : (
                    `$${shippingFee}`
                  )}
                </span>
              </div>
              <div className="pt-2 border-t border-[#E5E1D8] flex justify-between items-baseline">
                <span className="text-sm font-bold text-[#16191D]">Total</span>
                <span className="text-xl font-extrabold text-[#16191D] tabular-nums">
                  ${grandTotal}
                </span>
              </div>
            </div>

            {/* Action CTA */}
            <button
              onClick={() => onCheckout(discountAmount, appliedPromo)}
              className="w-full py-3.5 bg-[#16191D] hover:bg-[#23282E] active:scale-95 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4 text-[#F07A4B]" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
