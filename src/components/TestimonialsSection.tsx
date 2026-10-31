import React from 'react';
import { TESTIMONIALS } from '../data/startupContent';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#F8F7F4] border-t border-[#E5E1D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#C85A32] mb-1">
            Community &amp; Verified Feedback
          </div>
          <h2 className="text-3xl font-extrabold text-[#16191D] tracking-tight">
            Built for Knowledge Workers &amp; Commuters
          </h2>
          <p className="text-sm text-[#676E79] mt-2">
            Trusted by architects, engineers, and distributed product teams across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-[#E5E1D8] p-6 flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-[#C85A32] text-[#C85A32]" />
                    ))}
                  </div>
                  <Quote className="w-4 h-4 text-[#16191D]/20" />
                </div>

                <p className="text-xs text-[#16191D]/80 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5E1D8]">
                <div className="text-xs font-bold text-[#16191D]">{t.name}</div>
                <div className="text-[11px] text-[#676E79] truncate">
                  {t.role} · {t.company}
                </div>
                <div className="text-[10px] text-[#C85A32] font-semibold mt-1">
                  Verified Buyer · {t.product}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
