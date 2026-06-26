// src/components/sections/Hero.tsx
import HeroNetwork from '../ui/HeroNetwork';

export default function Hero() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#FAFAFC] font-sans pb-16 lg:pb-20">

        {/* Subtle dot pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

        {/* Main layout container */}
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px] relative z-20">

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[640px]">

            {/* ======================================== */}
            {/* LEFT COLUMN: COPY, CTA & TRUST POINTS   */}
            {/* ======================================== */}
            {/* Reduced top padding here to shift the content up */}
            <div className="w-full pt-6 pb-12 lg:pt-10 lg:pb-16 xl:pt-12 xl:pb-20 z-20 pr-4 flex flex-col justify-center">

              {/* Headline */}
              <h1 className="text-[3.2rem] sm:text-[3.5rem] lg:text-[3.5rem] xl:text-[3rem] font-black text-slate-900 leading-[1.05] tracking-tight mb-6">
                Where Great Businesses <br />
                <span className="text-indigo-600">Meet Trusted Professionals</span>
              </h1>

              {/* Body Copy */}
              <p className="text-[16px] xl:text-lg text-slate-500 mb-8 leading-relaxed max-w-[480px]">
                We connect businesses with vetted professionals, track milestones, protect payments, and deliver projects with confidence.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-2">
                <button className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2 text-[15px] cursor-pointer">
                  Start a Project
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <button className="px-8 py-4 bg-white text-slate-700 border-[1.5px] border-slate-200 font-bold rounded-xl hover:bg-slate-50 transition-colors text-[15px] cursor-pointer">
                  Join as a Professional
                </button>
              </div>

              {/* RE-IMAGINED TRUST POINTS (Line divider removed, margin tightened) */}
              <div className="mt-6 w-full max-w-[500px]">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                  Built for Indian Businesses
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-y-3 gap-x-6">
                  {[
                    "Designed for Reliable Delivery",
                    "Reputation-Driven Matching",
                    "Your Project. Our Commitment.",
                  ].map((text) => (
                    <div key={text} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm flex-shrink-0">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-[13px] font-medium text-slate-600">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* ======================================== */}
            {/* RIGHT COLUMN: FLOATING CARD NETWORK     */}
            {/* ======================================== */}
            <div className="hidden lg:block w-full h-full relative">
              <div className="absolute inset-0 flex items-center justify-center xl:translate-x-[5%]">
                <HeroNetwork />
              </div>
            </div>

          </div>
        </div>

        {/* ======================================== */}
        {/* DOUBLE CURVED SVG DIVIDER (BOTTOM)       */}
        {/* ======================================== */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-[2px]">
          <svg
            viewBox="0 0 1440 120"
            className="block w-full h-[50px] md:h-[90px]"
            preserveAspectRatio="none"
          >
            <path fill="#F1F5F9" d="M0,60L48,64C96,68,192,76,288,78.7C384,81,480,76,576,64C672,52,768,33,864,29.3C960,25,1056,36,1152,44C1248,52,1344,57,1392,59.3L1440,61.3L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
            <path fill="#ffffff" d="M0,96L48,85.3C96,75,192,53,288,48C384,43,480,53,576,64C672,75,768,85,864,80C960,75,1056,53,1152,42.7C1248,32,1344,32,1392,32L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>

      </section>
    </>
  );
}