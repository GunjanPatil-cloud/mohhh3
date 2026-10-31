import React, { useState } from 'react';
import { CartItem, OrderDetails } from '../types/cart';
import { X, CheckCircle2, ShieldCheck, CreditCard, Banknote, QrCode, Printer, ArrowRight } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  discountAmount: number;
  promoCode: string;
  onOrderSuccess: (order: OrderDetails) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  discountAmount,
  promoCode,
  onOrderSuccess
}) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [postalCode, setPostalCode] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | 'cod'>('card');
  const [confirmedOrder, setConfirmedOrder] = useState<OrderDetails | null>(null);

  if (!isOpen) return null;

  const rawSubtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shippingFee = rawSubtotal >= 50 || rawSubtotal === 0 ? 0 : 8;
  const grandTotal = Math.max(0, rawSubtotal - discountAmount + shippingFee);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !address) return;

    const newOrder: OrderDetails = {
      orderId: `DM-${Math.floor(10000 + Math.random() * 90000)}`,
      customerName: name,
      email,
      phone: phone || '+1 (555) 019-2834',
      address,
      city: city || 'San Francisco',
      postalCode: postalCode || '94107',
      paymentMethod,
      items: [...items],
      subtotal: rawSubtotal,
      discount: discountAmount,
      shipping: shippingFee,
      total: grandTotal,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      status: 'Confirmed',
      trackingNumber: `TRK-DM-${Math.floor(1000000 + Math.random() * 9000000)}`
    };

    setConfirmedOrder(newOrder);
    onOrderSuccess(newOrder);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto border border-[#E5E1D8] shadow-2xl relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#F8F7F4] text-[#16191D] cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmedOrder ? (
          /* Order Confirmation View */
          <div className="text-center py-6 space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <div className="text-xs font-bold uppercase tracking-wider text-[#C85A32]">
                Order Confirmed · Preparing Shipment
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16191D]">
                Thank you, {confirmedOrder.customerName}!
              </h2>
              <p className="text-xs text-[#676E79] max-w-md mx-auto">
                Your order <strong className="font-mono text-[#16191D]">#{confirmedOrder.orderId}</strong> is registered. We have dispatched a confirmation receipt to <strong className="text-[#16191D]">{confirmedOrder.email}</strong>.
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="bg-[#F8F7F4] rounded-xl p-5 border border-[#E5E1D8] text-left text-xs space-y-3">
              <div className="flex justify-between border-b border-[#E5E1D8] pb-2">
                <span className="text-[#676E79]">Order Reference:</span>
                <span className="font-mono font-bold text-[#16191D]">{confirmedOrder.orderId}</span>
              </div>
              <div className="flex justify-between border-b border-[#E5E1D8] pb-2">
                <span className="text-[#676E79]">Dispatch Tracking Number:</span>
                <span className="font-mono font-bold text-[#C85A32]">{confirmedOrder.trackingNumber}</span>
              </div>
              <div className="flex justify-between border-b border-[#E5E1D8] pb-2">
                <span className="text-[#676E79]">Delivery Address:</span>
                <span className="font-medium text-[#16191D] text-right">
                  {confirmedOrder.address}, {confirmedOrder.city} {confirmedOrder.postalCode}
                </span>
              </div>
              <div className="flex justify-between border-b border-[#E5E1D8] pb-2">
                <span className="text-[#676E79]">Payment Method:</span>
                <span className="font-semibold text-[#16191D] uppercase">
                  {confirmedOrder.paymentMethod === 'cod' ? 'Cash on Delivery (Verified)' : confirmedOrder.paymentMethod}
                </span>
              </div>

              {/* Items Purchased */}
              <div className="pt-1 space-y-1">
                <span className="text-[#676E79] font-semibold">Items in shipment:</span>
                {confirmedOrder.items.map((it, idx) => (
                  <div key={idx} className="flex justify-between text-[#16191D]">
                    <span>
                      {it.quantity}× {it.product.name} ({it.selectedColor})
                    </span>
                    <span className="font-mono">${it.product.price * it.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-[#E5E1D8] flex justify-between font-extrabold text-sm text-[#16191D]">
                <span>Total Amount Paid:</span>
                <span className="text-base text-[#16191D] tabular-nums">${confirmedOrder.total}</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={handlePrint}
                className="px-4 py-2 border border-[#E5E1D8] text-[#16191D] hover:bg-[#F8F7F4] rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Official Receipt</span>
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-[#16191D] text-white hover:bg-[#23282E] rounded-lg text-xs font-bold cursor-pointer"
              >
                Return to Storefront
              </button>
            </div>
          </div>
        ) : (
          /* Checkout Form */
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C85A32] mb-1">
              Secure Checkout · Encrypted TLS 256-Bit
            </div>
            <h2 className="text-2xl font-extrabold text-[#16191D]">Complete Your Order</h2>

            <form onSubmit={handleSubmitOrder} className="mt-6 space-y-5">
              {/* Customer Contact */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-[#16191D] uppercase tracking-wider">
                  1. Contact Information
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#16191D] mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Gunjan Patil"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-[#F8F7F4] border border-[#E5E1D8] rounded-lg text-[#16191D] focus:outline-none focus:border-[#C85A32]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-[#16191D] mb-1">Email for Receipt *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. gunjanpatilk@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-[#F8F7F4] border border-[#E5E1D8] rounded-lg text-[#16191D] focus:outline-none focus:border-[#C85A32]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#16191D] mb-1">Phone Number (For Delivery SMS)</label>
                  <input
                    type="tel"
                    placeholder="e.g. +1 (555) 234-5678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-[#F8F7F4] border border-[#E5E1D8] rounded-lg text-[#16191D] focus:outline-none focus:border-[#C85A32]"
                  />
                </div>
              </div>

              {/* Shipping Address */}
              <div className="space-y-3 pt-3 border-t border-[#E5E1D8]">
                <div className="text-xs font-bold text-[#16191D] uppercase tracking-wider">
                  2. Shipping Address
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#16191D] mb-1">Street Address *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 742 Evergreen Terrace, Suite 4B"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-[#F8F7F4] border border-[#E5E1D8] rounded-lg text-[#16191D] focus:outline-none focus:border-[#C85A32]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#16191D] mb-1">City / Region *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. San Francisco"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-[#F8F7F4] border border-[#E5E1D8] rounded-lg text-[#16191D] focus:outline-none focus:border-[#C85A32]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-[#16191D] mb-1">Postal / ZIP Code *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 94107"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-[#F8F7F4] border border-[#E5E1D8] rounded-lg text-[#16191D] focus:outline-none focus:border-[#C85A32]"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="space-y-3 pt-3 border-t border-[#E5E1D8]">
                <div className="text-xs font-bold text-[#16191D] uppercase tracking-wider">
                  3. Payment Method
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'border-[#16191D] bg-[#16191D] text-white shadow-xs'
                        : 'border-[#E5E1D8] bg-white text-[#16191D] hover:border-[#C85A32]/40'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 mb-2" />
                    <div>
                      <div className="text-xs font-bold">Credit/Debit</div>
                      <div className="text-[10px] opacity-75">Instant</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                      paymentMethod === 'upi'
                        ? 'border-[#16191D] bg-[#16191D] text-white shadow-xs'
                        : 'border-[#E5E1D8] bg-white text-[#16191D] hover:border-[#C85A32]/40'
                    }`}
                  >
                    <QrCode className="w-4 h-4 mb-2" />
                    <div>
                      <div className="text-xs font-bold">UPI / QR</div>
                      <div className="text-[10px] opacity-75">Fast App Pay</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                      paymentMethod === 'cod'
                        ? 'border-[#16191D] bg-[#16191D] text-white shadow-xs'
                        : 'border-[#E5E1D8] bg-white text-[#16191D] hover:border-[#C85A32]/40'
                    }`}
                  >
                    <Banknote className="w-4 h-4 mb-2" />
                    <div>
                      <div className="text-xs font-bold">Cash on Delivery</div>
                      <div className="text-[10px] opacity-75">Pay on arrival</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Order Breakdown Summary */}
              <div className="p-4 rounded-xl bg-[#F8F7F4] border border-[#E5E1D8] space-y-1.5 text-xs text-[#16191D]">
                <div className="flex justify-between">
                  <span>Subtotal ({items.reduce((acc, it) => acc + it.quantity, 0)} items):</span>
                  <span className="font-bold tabular-nums">${rawSubtotal}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#C85A32] font-semibold">
                    <span>Discount {promoCode ? `(${promoCode})` : ''}:</span>
                    <span className="tabular-nums">-${discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span className="font-semibold">{shippingFee === 0 ? 'FREE' : `$${shippingFee}`}</span>
                </div>
                <div className="pt-2 border-t border-[#E5E1D8] flex justify-between items-baseline font-extrabold text-base">
                  <span>Total Due:</span>
                  <span className="text-xl tabular-nums text-[#16191D]">${grandTotal}</span>
                </div>
              </div>

              {/* Place Order CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#16191D] hover:bg-[#23282E] active:scale-95 text-white font-extrabold rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4 text-[#F07A4B]" />
                  <span>Confirm Order (${grandTotal})</span>
                  <ArrowRight className="w-4 h-4 text-[#F07A4B]" />
                </button>
                <p className="text-[11px] text-[#676E79] text-center mt-2">
                  Protected by 10-Year Mechanical Warranty and 30-Day Hassle-Free Returns.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
