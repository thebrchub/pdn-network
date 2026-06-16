// src/components/sections/Freelancers.tsx

export default function Freelancers() {
  const benefits = [
    {
      title: "Trust Score",
      description: "Your behavior is your resume. Build a verified rating based on on-time deliveries and zero disputes, not fake 5-star reviews.",
      colorClass: "text-emerald-600",
      glowClass: "bg-emerald-500",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Better Projects",
      description: "Highly-rated professionals get exclusive access to premium enterprise clients who value certainty over the lowest price.",
      colorClass: "text-indigo-600",
      glowClass: "bg-indigo-500",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Faster Payments",
      description: "Stop begging for your own money. When the milestone is approved, the escrow automatically releases your funds.",
      colorClass: "text-purple-600",
      glowClass: "bg-purple-500",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Verified Earnings",
      description: "We automatically generate proof of income and reliable earning histories, making it easier to scale your independent business.",
      colorClass: "text-blue-600",
      glowClass: "bg-blue-500",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative bg-white pt-8 pb-24 lg:pb-32 font-sans overflow-hidden">
      
      {/* Curved SVG Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-[99%] z-10">
        <svg viewBox="0 0 1440 120" className="block w-full h-[50px] md:h-[90px]" preserveAspectRatio="none">
          <path fill="#FAFAFC" d="M0,120 C480,0 960,0 1440,120 L1440,0 L0,0 Z"></path>
        </svg>
      </div>

      {/* Ambient Background Glows */}
      <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-indigo-50/60 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-emerald-50/60 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px] relative z-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* ======================================== */}
          {/* LEFT COLUMN: COPY & BENEFITS             */}
          {/* ======================================== */}
          <div className="lg:col-span-7 flex flex-col">
            
            
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-heading font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6 drop-shadow-sm">
              Build a Reputation <br className="hidden sm:block" />
              <span className="text-indigo-600">That Works For You.</span>
            </h2>
            
            <p className="text-lg text-slate-500 font-sans leading-relaxed mb-12 max-w-2xl">
              Stop competing on price with unverified freelancers. Build an undeniable track record of reliability and let the system bring premium clients to you.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 flex-grow">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="group relative rounded-[1.5rem] p-6 bg-gradient-to-b from-white to-[#F8FAFC] border border-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_6px_rgba(15,23,42,0.02)] ring-1 ring-slate-200/70 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)]"
                >
                  <div className={`absolute -bottom-3 inset-x-8 h-6 ${benefit.glowClass} blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-0 pointer-events-none`}></div>
                  
                  <div className="relative z-20">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-b from-white to-slate-50 border border-slate-100/50 shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_4px_8px_rgba(0,0,0,0.04)] ring-1 ring-slate-100 flex items-center justify-center mb-4 flex-shrink-0 ${benefit.colorClass}`}>
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 font-sans mb-2 tracking-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-[13px] text-slate-500 font-sans leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <button className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2 text-[15px] self-start">
                Apply to Join ProSpec
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* ======================================== */}
          {/* RIGHT COLUMN: LIGHT SKEUOMORPHIC UI      */}
          {/* ======================================== */}
          <div className="lg:col-span-5 relative w-full max-w-md mx-auto lg:mx-0 lg:ml-auto flex flex-col">
            
            <div className="relative h-full flex flex-col bg-gradient-to-b from-white to-[#F8FAFC] rounded-[2rem] p-8 border border-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_6px_rgba(15,23,42,0.04)] ring-1 ring-slate-200/80 font-sans group">
              
              <div className="absolute -bottom-6 inset-x-12 h-12 bg-indigo-500 blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500 rounded-full z-0 pointer-events-none"></div>

              <div className="relative z-20 flex flex-col h-full">
                
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-b from-indigo-500 to-indigo-600 shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_4px_8px_rgba(99,102,241,0.3)] flex items-center justify-center text-white font-black text-lg">
                      JD
                    </div>
                    <div>
                      <h3 className="text-[17px] font-bold text-slate-900 tracking-tight">Your Dashboard</h3>
                      <p className="text-[11px] font-bold text-emerald-500 uppercase tracking-wider">Platinum Status</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-5 flex-grow">
                  
                  {/* Earnings Module with added internal content */}
                  <div className="p-6 flex flex-col flex-grow bg-white rounded-[1.5rem] border border-slate-100 shadow-[0_4px_12px_rgba(0,0,0,0.03),inset_0_1px_2px_rgba(255,255,255,1)]">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Verified Earnings (30d)</p>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100/50">+12%</span>
                    </div>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-black text-slate-900 tracking-tight">₹1,42,500</span>
                    </div>

                    {/* NEW: Funds Breakdown & Activity List to fill space beautifully */}
                    <div className="flex flex-col gap-6 mb-8 flex-grow">
                      
                      {/* Sub-metrics */}
                      <div className="flex gap-4 p-4 bg-slate-50 rounded-[1rem] border border-slate-100/60">
                        <div className="flex-1">
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">In Escrow</p>
                          <p className="text-[15px] font-black text-slate-700">₹45,000</p>
                        </div>
                        <div className="w-px bg-slate-200/60 my-1"></div>
                        <div className="flex-1">
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Cleared</p>
                          <p className="text-[15px] font-black text-slate-700">₹97,500</p>
                        </div>
                      </div>

                      {/* Recent Activity */}
                      <div className="space-y-3.5">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Recent Milestones</p>
                        
                        <div className="flex justify-between items-center text-sm">
                          <div className="flex items-center gap-2.5">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                            <span className="font-semibold text-slate-700">Fintech Web App</span>
                          </div>
                          <span className="font-bold text-emerald-600">+₹40,000</span>
                        </div>
                        
                        <div className="flex justify-between items-center text-sm">
                          <div className="flex items-center gap-2.5">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                            <span className="font-semibold text-slate-700">Brand Identity</span>
                          </div>
                          <span className="font-bold text-emerald-600">+₹15,000</span>
                        </div>

                        <div className="flex justify-between items-center text-sm opacity-60">
                          <div className="flex items-center gap-2.5">
                            <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                            <span className="font-medium text-slate-500">API Integration</span>
                          </div>
                          <span className="font-bold text-slate-400">Pending</span>
                        </div>

                      </div>
                    </div>
                    
                    {/* Subtle Skeuomorphic Graph */}
                    <div className="flex items-end gap-2 mt-auto h-20 w-full px-1">
                      {[40, 55, 35, 70, 60, 85, 100].map((height, i) => (
                        <div key={i} className="w-full flex flex-col justify-end h-full">
                          <div 
                            className={`w-full rounded-t border-t border-white/40 shadow-sm transition-all duration-500 ${i === 6 ? 'bg-gradient-to-t from-indigo-600 to-indigo-400' : 'bg-gradient-to-t from-slate-200 to-slate-100'}`} 
                            style={{ height: `${height}%` }}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Trust Score Module */}
                  <div className="flex items-center justify-between p-5 bg-white rounded-[1.5rem] border border-slate-100 shadow-[0_4px_12px_rgba(0,0,0,0.03),inset_0_1px_2px_rgba(255,255,255,1)] flex-shrink-0">
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">ProSpec Trust Score</p>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-black text-slate-900 leading-none">4.9</span>
                        <span className="text-[9px] font-bold text-indigo-600 uppercase bg-indigo-50 border border-indigo-100 px-1.5 py-0.5 rounded">✦ Elite</span>
                      </div>
                    </div>
                    <div className="text-right border-l border-slate-100 pl-4">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Next Payout</p>
                      <p className="text-sm font-bold text-slate-900">Tomorrow</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}