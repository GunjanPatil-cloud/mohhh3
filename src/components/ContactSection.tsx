import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formType, setFormType] = useState<string>('bulk');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setCompany('');
      setMessage('');
    }, 4500);
  };

  return (
    <section id="contact" className="py-16 bg-white border-t border-[#E5E1D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info & Hub Locations */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#C85A32] mb-1">
                Official Communication Desk
              </div>
              <h2 className="text-3xl font-extrabold text-[#16191D] tracking-tight">
                Connect with DailyMate
              </h2>
              <p className="text-sm text-[#676E79] mt-2">
                Whether you need sample evaluation units, volume fleet quotes, or custom collaborative manufacturing, our operations team is ready to assist.
              </p>
            </div>

            {/* Channels */}
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-[#F8F7F4] border border-[#E5E1D8] flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#16191D] text-[#F07A4B] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#16191D]">Business &amp; Sample Inquiries</div>
                  <div className="text-xs text-[#C85A32] font-mono mt-0.5">operations@dailymate-startup.com</div>
                  <div className="text-[11px] text-[#676E79] mt-0.5">Typical response within 2 business hours</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#F8F7F4] border border-[#E5E1D8] flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#16191D] text-[#F07A4B] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#16191D]">Commercial Support Desk</div>
                  <div className="text-xs text-[#16191D] font-mono mt-0.5">+1 (800) 412-MATE (6283)</div>
                  <div className="text-[11px] text-[#676E79] mt-0.5">Mon–Fri: 09:00 – 18:00 EST</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#F8F7F4] border border-[#E5E1D8] flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#16191D] text-[#F07A4B] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#16191D]">Design Studio &amp; Prototyping Lab</div>
                  <div className="text-xs text-[#16191D]/80 mt-0.5">DailyMate Innovation Lab · 450 Industrial Parkway</div>
                  <div className="text-[11px] text-[#676E79] mt-0.5">Advanced Prototyping &amp; Quality Facility</div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-[#C85A32]/20 bg-[#FBF1EB] text-xs text-[#16191D] flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C85A32] shrink-0" />
              <span>Institutional orders dispatched in 48h with certified inspection certificates.</span>
            </div>
          </div>

          {/* Right: Direct Enquiry Form */}
          <div className="lg:col-span-7 bg-[#F8F7F4] rounded-2xl border border-[#E5E1D8] p-6 sm:p-8">
            <div className="text-xs font-bold uppercase tracking-wider text-[#C85A32] mb-1">
              Direct Transmission Form
            </div>
            <h3 className="text-xl font-bold text-[#16191D] mb-6">
              Request Samples or Custom Catalog
            </h3>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-emerald-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Enquiry Transmitted Successfully</span>
                </div>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  Thank you, <span className="font-semibold">{name}</span>. Your ticket has been logged into our operations queue. Our hardware specialist will review your specifications and email you a tailored catalog pack.
                </p>
                <div className="text-[11px] text-emerald-700 font-mono">
                  Ticket Ref: #DM-{Math.floor(100000 + Math.random() * 900000)}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#16191D] mb-1">
                    Nature of Inquiry:
                  </label>
                  <select
                    value={formType}
                    onChange={(e) => setFormType(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#E5E1D8] rounded-lg text-[#16191D] focus:outline-none focus:border-[#C85A32] cursor-pointer"
                  >
                    <option value="bulk">Bulk Wholesale / Fleet Procurement (25+ units)</option>
                    <option value="samples">Sample Unit Evaluation for Review/Media</option>
                    <option value="laser">Custom Laser Engraving Partnership</option>
                    <option value="distribution">Retail &amp; Boutique Distribution</option>
                    <option value="specs">Material &amp; Technical Specifications Question</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#16191D] mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Gunjan Patil"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-[#E5E1D8] rounded-lg text-[#16191D] focus:outline-none focus:border-[#C85A32]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#16191D] mb-1">Official Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-[#E5E1D8] rounded-lg text-[#16191D] focus:outline-none focus:border-[#C85A32]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#16191D] mb-1">Company / Studio (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Acme Design Studio"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#E5E1D8] rounded-lg text-[#16191D] focus:outline-none focus:border-[#C85A32]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#16191D] mb-1">Project Requirements or Message</label>
                  <textarea
                    rows={4}
                    placeholder="Specify accessories of interest (e.g. 50 OmniStand Pros + 50 OrbitKeys), desired finishes, or delivery target date..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#E5E1D8] rounded-lg text-[#16191D] focus:outline-none focus:border-[#C85A32] resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#16191D] text-white hover:bg-[#C85A32] active:scale-95 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 text-[#F07A4B]" />
                    <span>Submit Inquiry to Operations Desk</span>
                  </button>
                  <p className="text-[11px] text-[#676E79] text-center mt-2">
                    We honor non-disclosure agreements (NDAs) for pre-launch corporate branding.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
