// src/components/sections/HowItWorks.tsx

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Post & Match",
      description: "Clients use our guided brief builder to define exact requirements. Verified professionals review the scope and submit structured proposals. No vague expectations.",
      benefitClient: "Clear scopes",
      benefitPro: "No guessing",
      glowClass: "bg-indigo-500",
      washClass: "from-indigo-50/60",
      iconColor: "text-indigo-600",
      uiIndicator: (
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50/50 border border-indigo-100/50 shadow-[inset_0_1px_2px_rgba(255,255,255,1)] rounded-lg">
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_5px_rgba(99,102,241,0.8)]"></div>
          <span className="text-[10px] font-bold text-indigo-700 uppercase tracking-wider">Scope Locked</span>
        </div>
      )
    },
    {
      number: "02",
      title: "Track Milestones",
      description: "Projects are broken down into measurable deliverables. Both sides have real-time visibility into progress, deadlines, and active tasks. No ghosting.",
      benefitClient: "Total visibility",
      benefitPro: "Structured work",
      glowClass: "bg-emerald-500",
      washClass: "from-emerald-50/60",
      iconColor: "text-emerald-600",
      uiIndicator: (
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50/50 border border-emerald-100/50 shadow-[inset_0_1px_2px_rgba(255,255,255,1)] rounded-lg">
          <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">Milestone 2 Active</span>
        </div>
      )
    },
    {
      number: "03",
      title: "Secure Delivery",
      description: "Funds are held safely in escrow. The client releases payment only when the milestone is met. The professional works knowing the money is guaranteed.",
      benefitClient: "Work guaranteed",
      benefitPro: "Payment protected",
      glowClass: "bg-purple-500",
      washClass: "from-purple-50/60",
      iconColor: "text-purple-600",
      uiIndicator: (
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-50/50 border border-purple-100/50 shadow-[inset_0_1px_2px_rgba(255,255,255,1)] rounded-lg">
          <svg className="w-3.5 h-3.5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span className="text-[10px] font-bold text-purple-700 uppercase tracking-wider">Escrow Funded</span>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white relative pb-32 lg:pb-40">
      
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px] relative z-20">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-12">
          
          {/* ======================================== */}
          {/* LEFT COLUMN: STICKY CONTEXT              */}
          {/* ======================================== */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:h-fit">
            
            <h2 className="text-4xl sm:text-5xl lg:text-[4rem] font-heading font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.05] drop-shadow-sm">
              The Delivery <br />
              <span className="text-indigo-600">Protocol.</span>
            </h2>
            
            <p className="text-lg lg:text-xl text-slate-500 font-sans leading-relaxed mb-10 max-w-md">
              A structured, transparent pipeline designed to protect both the project outcome and the financial transaction.
            </p>
            
            {/* Skeuomorphic Feature Pill - Deepened Shadows */}
            <div className="group flex items-center gap-5 p-5 rounded-[1.5rem] bg-gradient-to-b from-white to-[#F8FAFC] border border-white shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_6px_rgba(15,23,42,0.03)] ring-1 ring-slate-200/70 max-w-sm transition-transform duration-500 hover:-translate-y-1">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-b from-white to-slate-50 border border-slate-100/50 shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_6px_12px_rgba(0,0,0,0.06)] flex items-center justify-center text-indigo-500">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-[15px] font-bold text-slate-900 tracking-tight">Built for Outcomes</p>
                <p className="text-xs text-slate-500 mt-0.5">Every step enforces accountability.</p>
              </div>
            </div>
          </div>

          {/* ======================================== */}
          {/* RIGHT COLUMN: THE SKEUOMORPHIC TIMELINE  */}
          {/* ======================================== */}
          <div className="lg:col-span-7 relative">
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="relative sm:pl-20 group">
                  
                  {/* Step Number Badge (Desktop) */}
                  <div className="hidden sm:flex absolute left-0 top-6 w-12 h-12 rounded-xl bg-gradient-to-b from-white to-[#F8FAFC] shadow-[0_10px_20px_-5px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,1)] ring-1 ring-slate-200/80 items-center justify-center z-20 transition-transform duration-500 group-hover:-translate-y-1">
                    <span className={`text-[15px] font-black ${step.iconColor} font-sans`}>
                      {step.number}
                    </span>
                  </div>

                  {/* Dynamic Connecting Line - Hides on the very last step! */}
                  {index !== steps.length - 1 && (
                    <div className="hidden sm:block absolute left-[22px] top-[70px] -bottom-[30px] w-[3px] bg-gradient-to-b from-slate-200/80 to-slate-100/40 z-0 rounded-full"></div>
                  )}

                  {/* Main Step Card - Deepened Shadows for better edge definition */}
                  <div className="relative rounded-[2rem] p-8 lg:p-10 transition-all duration-500 hover:-translate-y-1 bg-gradient-to-b from-white to-[#F8FAFC] border border-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_6px_rgba(15,23,42,0.04)] ring-1 ring-slate-200/80 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)]">
                    
                    {/* Ambient Glow */}
                    <div className={`absolute -bottom-4 inset-x-12 h-8 ${step.glowClass} blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full z-0 pointer-events-none`}></div>
                    
                    {/* Internal Wash */}
                    <div className="absolute inset-0 rounded-[2rem] overflow-hidden z-10 pointer-events-none">
                      <div className={`absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t ${step.washClass} to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    </div>

                    <div className="relative z-20">
                      {/* Top Row: Mobile Number & UI Indicator */}
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                        <span className={`sm:hidden text-lg font-extrabold ${step.iconColor} font-sans`}>
                          {step.number}
                        </span>
                        {step.uiIndicator}
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900 font-sans mb-3 tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-[15px] text-slate-500 font-sans leading-relaxed mb-8">
                        {step.description}
                      </p>

                      {/* Dual Benefits Grid */}
                      <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-200/80">
                        <div>
                          <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2">Client Wins</p>
                          <p className="text-sm font-bold text-slate-800 flex items-center gap-2">
                            <svg className={`w-4 h-4 ${step.iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                            {step.benefitClient}
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2">Pro Wins</p>
                          <p className="text-sm font-bold text-slate-800 flex items-center gap-2">
                            <svg className={`w-4 h-4 ${step.iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                            {step.benefitPro}
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
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
          {/* Back Wave (Depth) */}
          <path 
            fill="#F1F5F9" 
            d="M0,60L48,64C96,68,192,76,288,78.7C384,81,480,76,576,64C672,52,768,33,864,29.3C960,25,1056,36,1152,44C1248,52,1344,57,1392,59.3L1440,61.3L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
          {/* Front Wave (Assuming next section is the #FAFAFC background) */}
          <path 
            fill="#FAFAFC" 
            d="M0,96L48,85.3C96,75,192,53,288,48C384,43,480,53,576,64C672,75,768,85,864,80C960,75,1056,53,1152,42.7C1248,32,1344,32,1392,32L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}