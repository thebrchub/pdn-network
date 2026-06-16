// src/components/sections/Problem.tsx

export default function Problem() {
  return (
    <section className="py-20 lg:py-32 bg-white relative font-sans">
      
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px] relative z-20">
        
        {/* ======================================== */}
        {/* CENTERED HEADER AREA                     */}
        {/* ======================================== */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
            Hiring shouldn't feel like <span className="text-indigo-600">gambling.</span>
          </h2>
          <p className="text-lg lg:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Both businesses and professionals deserve better than blind trust. The traditional model leaves everyone exposed.
          </p>
        </div>

        {/* ======================================== */}
        {/* SKEUOMORPHIC PROBLEM CARDS               */}
        {/* ======================================== */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 mb-16">
          
          {/* CARD 1: For Businesses (Rose/Orange) */}
          {/* FIX: Deepened shadows and strengthened ring for better edge definition against white bg */}
          <div className="group relative rounded-[2rem] p-8 lg:p-10 transition-all duration-500 hover:-translate-y-1 bg-gradient-to-b from-white to-[#F8FAFC] border border-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_6px_rgba(15,23,42,0.04)] ring-1 ring-slate-200/80 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)]">
            <div className="absolute -bottom-4 inset-x-8 h-8 bg-rose-500 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full z-0 pointer-events-none"></div>
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden z-10 pointer-events-none">
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-rose-50/60 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="relative z-20 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                {/* FIX: Increased shadow depth on icon box */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-white to-slate-50 border border-slate-100/50 shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_6px_12px_rgba(0,0,0,0.06)] ring-1 ring-slate-100 flex items-center justify-center text-rose-500 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              
              <h3 className="text-[22px] font-bold text-slate-900 mb-4 tracking-tight">Delivery Uncertainty</h3>
              <p className="text-[15px] text-slate-500 leading-relaxed mb-8 flex-grow">
                You pay for talent, but assume all the risk. Projects drag on, milestones are missed, and communication fades when it matters most.
              </p>
              
              <div className="flex items-center gap-2 text-[13px] font-bold text-rose-600 transition-colors">
                Impacts Time & Capital
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>

          {/* CARD 2: For Professionals (Indigo/Purple) */}
          {/* FIX: Deepened shadows and strengthened ring */}
          <div className="group relative rounded-[2rem] p-8 lg:p-10 transition-all duration-500 hover:-translate-y-1 bg-gradient-to-b from-white to-[#F8FAFC] border border-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_6px_rgba(15,23,42,0.04)] ring-1 ring-slate-200/80 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)]">
            <div className="absolute -bottom-4 inset-x-8 h-8 bg-indigo-500 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full z-0 pointer-events-none"></div>
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden z-10 pointer-events-none">
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-indigo-50/60 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="relative z-20 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                {/* FIX: Increased shadow depth */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-white to-slate-50 border border-slate-100/50 shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_6px_12px_rgba(0,0,0,0.06)] ring-1 ring-slate-100 flex items-center justify-center text-indigo-500 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              
              <h3 className="text-[22px] font-bold text-slate-900 mb-4 tracking-tight">Payment Anxiety</h3>
              <p className="text-[15px] text-slate-500 leading-relaxed mb-8 flex-grow">
                You do the work, but assume all the financial risk. Endless scope creep, delayed invoices, and having to beg for your own money.
              </p>
              
              <div className="flex items-center gap-2 text-[13px] font-bold text-indigo-600 transition-colors">
                Impacts Your Cashflow
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>

          {/* CARD 3: The Shared Reality (Emerald/Green) */}
          {/* FIX: Deepened shadows and strengthened ring */}
          <div className="group relative rounded-[2rem] p-8 lg:p-10 transition-all duration-500 hover:-translate-y-1 bg-gradient-to-b from-white to-[#F8FAFC] border border-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_6px_rgba(15,23,42,0.04)] ring-1 ring-slate-200/80 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)]">
            <div className="absolute -bottom-4 inset-x-8 h-8 bg-emerald-500 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full z-0 pointer-events-none"></div>
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden z-10 pointer-events-none">
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-emerald-50/60 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="relative z-20 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                {/* FIX: Increased shadow depth */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-white to-slate-50 border border-slate-100/50 shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_6px_12px_rgba(0,0,0,0.06)] ring-1 ring-slate-100 flex items-center justify-center text-emerald-500 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
              </div>
              
              <h3 className="text-[22px] font-bold text-slate-900 mb-4 tracking-tight">Zero Accountability</h3>
              <p className="text-[15px] text-slate-500 leading-relaxed mb-8 flex-grow">
                When things go wrong, neither side has leverage. The traditional freelance model relies on blind trust instead of systemic guarantees.
              </p>
              
              <div className="flex items-center gap-2 text-[13px] font-bold text-emerald-600 transition-colors">
                Leads to Lost Trust
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>

        </div>

        {/* ======================================== */}
        {/* SLEEK RESOLUTION BANNER (Light Skeuomorphic) */}
        {/* ======================================== */}
        {/* FIX: Deepened shadows and strengthened ring here too to match cards and previous section system */}
        <div className="w-full relative group rounded-3xl bg-gradient-to-b from-white to-[#F8FAFC] border border-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_6px_rgba(15,23,42,0.04)] ring-1 ring-slate-200/80 p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)]">
          
          {/* Subtle Ambient Glow for the Banner */}
          <div className="absolute -bottom-4 inset-x-20 h-10 bg-indigo-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full z-0 pointer-events-none"></div>
          
          <div className="absolute inset-0 rounded-3xl overflow-hidden z-10 pointer-events-none">
            <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-indigo-50/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <div className="flex items-center gap-5 relative z-20">
            {/* FIX: Increased shadow depth on banner icon */}
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-white to-slate-50 border border-slate-100/50 shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_6px_12px_rgba(0,0,0,0.06)] flex items-center justify-center text-indigo-600">
              <svg className="w-6 h-6" fill="round" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-slate-900 tracking-tight">ProSpec fixes all three.</h4>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 md:gap-5 text-sm md:text-base font-medium relative z-20">
            <span className="text-slate-700 font-bold">Verified Pros</span>
            <span className="text-slate-400">+</span>
            <span className="text-slate-700 font-bold">Trusted Businesses</span>
            <span className="text-slate-400">+</span>
            <span className="text-slate-700 font-bold">Reputation</span>
            <span className="text-slate-400">→</span>
            {/* FIX: Match deepened skeuomorphic look for inner pill */}
            <span className="text-indigo-600 font-bold px-4 py-2 bg-indigo-50 border border-indigo-100/50 shadow-[inset_0_1px_2px_rgba(255,255,255,1)] rounded-xl">Reliable Delivery</span>
          </div>

        </div>

      </div>
    </section>
  );
}