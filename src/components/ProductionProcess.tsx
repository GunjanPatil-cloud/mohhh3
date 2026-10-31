import React, { useState } from 'react';
import { PRODUCTION_STEPS } from '../data/startupContent';
import { CheckCircle2, ChevronRight, Cpu, FileCheck } from 'lucide-react';

export const ProductionProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const current = PRODUCTION_STEPS[activeStep];

  return (
    <section id="craft" className="py-16 bg-[#F8F7F4] border-t border-[#E5E1D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#C85A32] mb-1">
            Manufacturing Precision
          </div>
          <h2 className="text-3xl font-extrabold text-[#16191D] tracking-tight">
            Our 4-Stage Production Process
          </h2>
          <p className="text-sm text-[#676E79] mt-2">
            From certified alloy billets to precision zero-plastic packaged delivery, every DailyMate accessory passes through rigorous craftsmanship benchmarks.
          </p>
        </div>

        {/* Stepper Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {PRODUCTION_STEPS.map((step, idx) => (
            <button
              key={step.step}
              onClick={() => setActiveStep(idx)}
              className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                activeStep === idx
                  ? 'bg-[#16191D] text-white border-[#16191D] shadow-sm'
                  : 'bg-white text-[#16191D] border-[#E5E1D8] hover:border-[#C85A32]/40'
              }`}
            >
              <div
                className={`text-xs font-extrabold ${
                  activeStep === idx ? 'text-[#F07A4B]' : 'text-[#C85A32]'
                }`}
              >
                STAGE {step.step}
              </div>
              <div className="text-xs sm:text-sm font-bold mt-1 line-clamp-1">{step.title}</div>
            </button>
          ))}
        </div>

        {/* Detailed Stage Card */}
        <div className="bg-white rounded-2xl border border-[#E5E1D8] p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#C85A32]">
                <Cpu className="w-4 h-4" />
                <span>Phase {current.step} Operational Benchmark</span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#16191D]">
                {current.title}
              </h3>

              <p className="text-xs font-semibold text-[#C85A32]">
                {current.tagline}
              </p>

              <p className="text-sm text-[#16191D]/80 leading-relaxed">
                {current.desc}
              </p>

              {/* Benchmark Checklist */}
              <div className="pt-2 space-y-2">
                <div className="text-xs font-bold text-[#16191D]">Protocol Specifications:</div>
                {current.details.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#16191D]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#C85A32] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#F8F7F4] rounded-xl p-6 border border-[#E5E1D8] flex flex-col justify-between space-y-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#676E79] mb-1">
                  Key Quantitative Metric
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#16191D] tabular-nums">
                  {current.metrics}
                </div>
                <div className="text-xs text-[#676E79] mt-1">
                  Continuously measured across every production batch in our assembly facilities.
                </div>
              </div>

              <div className="p-4 bg-white rounded-lg border border-[#E5E1D8] text-xs space-y-2">
                <div className="flex items-center justify-between text-[#16191D] font-bold">
                  <span>Factory Audit Status</span>
                  <span className="text-[#C85A32] flex items-center gap-1 font-semibold">
                    <FileCheck className="w-3.5 h-3.5" /> ISO 9001
                  </span>
                </div>
                <p className="text-[11px] text-[#676E79]">
                  Batches are sampled randomly with automated optical coordinate measuring machines (CMM).
                </p>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : PRODUCTION_STEPS.length - 1))}
                  className="text-xs font-semibold text-[#16191D] hover:text-[#C85A32] cursor-pointer"
                >
                  ← Previous Stage
                </button>
                <button
                  onClick={() => setActiveStep((prev) => (prev < PRODUCTION_STEPS.length - 1 ? prev + 1 : 0))}
                  className="text-xs font-semibold text-[#C85A32] flex items-center gap-1 hover:text-[#16191D] cursor-pointer"
                >
                  <span>Next Stage</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
