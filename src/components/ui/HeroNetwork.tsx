// src/components/ui/HeroNetwork.tsx
export default function HeroNetwork() {
  return (
    <div className="relative w-full aspect-square max-w-[800px] mx-auto z-20">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-indigo-50/80 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

      {/* SVG Connecting Lines */}
      <svg viewBox="0 0 1000 1000" className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <g stroke="#818cf8" strokeWidth="2" strokeDasharray="6 6" fill="none" className="opacity-60">
          <path d="M 500 500 Q 350 500 250 600" className="animate-[dash_20s_linear_infinite]" />
          <path d="M 500 500 Q 400 400 300 250" className="animate-[dash_20s_linear_infinite]" />
          <path d="M 500 500 Q 500 350 480 250" className="animate-[dash_20s_linear_infinite]" />
          <path d="M 500 500 Q 650 400 750 200" className="animate-[dash_20s_linear_infinite]" />
          <path d="M 500 500 Q 700 500 800 450" className="animate-[dash_20s_linear_infinite]" />
          <path d="M 500 500 Q 600 650 650 750" className="animate-[dash_20s_linear_infinite]" />
          <path d="M 500 500 Q 500 650 450 800" className="animate-[dash_20s_linear_infinite]" />
        </g>
        
        <g fill="#6366f1">
          <circle cx="250" cy="600" r="5" />
          <circle cx="300" cy="250" r="5" />
          <circle cx="480" cy="250" r="5" />
          <circle cx="750" cy="200" r="5" />
          <circle cx="800" cy="450" r="5" />
          <circle cx="650" cy="750" r="5" />
          <circle cx="450" cy="800" r="5" />
        </g>
      </svg>

      {/* ========================================== */}
      {/* HTML NODES                                 */}
      {/* ========================================== */}

      {/* CENTER HUB */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
        <div className="w-20 h-20 bg-white/40 rounded-full flex items-center justify-center backdrop-blur-md shadow-[0_0_40px_rgba(99,102,241,0.2)]">
          <div className="w-16 h-16 bg-gradient-to-b from-white to-[#F8FAFC] rounded-full shadow-[0_10px_20px_-5px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,1)] ring-1 ring-slate-100 flex items-center justify-center">
            <div className="w-10 h-10  rounded-xl flex items-center justify-center shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]">
                       {/* Logo */}
<div className="flex-shrink-0 cursor-pointer">
  <img
    src="/logo1.svg"
    alt="ProSpec"
    className="h-10 w-auto"
  />
</div>
            </div>
          </div>
        </div>
      </div>

      {/* 1. ACTIVE PROJECT (Middle Left) */}
      <div className="absolute top-[60%] left-[15%] -translate-x-1/2 -translate-y-1/2 w-[280px] z-20">
        <div className="group relative rounded-[1.5rem] p-5 transition-all duration-500 hover:-translate-y-2 bg-gradient-to-b from-white to-[#F8FAFC] border border-white shadow-[0_15px_30px_-10px_rgba(0,0,0,0.06),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_6px_rgba(15,23,42,0.02)] ring-1 ring-slate-100/50 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)]">
          
          <div className="absolute -bottom-3 inset-x-6 h-6 bg-indigo-500 blur-xl opacity-0 group-hover:opacity-25 transition-opacity duration-500 rounded-full z-0 pointer-events-none"></div>
          <div className="absolute inset-0 rounded-[1.5rem] overflow-hidden z-10 pointer-events-none">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-indigo-50/50 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <div className="relative z-20">
            <div className="flex justify-between items-center mb-1">
              <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">Active Project</p>
              <span className="bg-emerald-50 text-emerald-600 border border-emerald-100 px-2 py-0.5 rounded-full text-[10px] font-bold shadow-sm">On Track</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-5 tracking-tight">Website Redesign</h3>
            
            <div className="space-y-3 mb-5">
              <div className="flex justify-between items-center text-xs">
                <div className="flex items-center gap-2 text-slate-500 font-medium">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                  Budget
                </div>
                <span className="font-bold text-slate-900">₹75,000</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <div className="flex items-center gap-2 text-slate-500 font-medium">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                  Milestone
                </div>
                <span className="font-bold text-slate-900">2 of 4</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <div className="flex items-center gap-2 text-slate-500 font-medium">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  Due Date
                </div>
                <span className="font-bold text-slate-900">Jul 28, 2025</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100/80">
              <div className="flex justify-between items-end mb-2">
                <span className="text-[11px] text-slate-500 font-medium tracking-wide">Delivery Score</span>
                <span className="text-sm font-bold text-slate-900">4.8 / 5</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
                <div className="h-full bg-gradient-to-r from-indigo-400 to-purple-500 w-[96%] rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. VERIFIED PROFESSIONAL (Top Left) */}
      <div className="absolute top-[20%] left-[25%] -translate-x-1/2 -translate-y-1/2 w-[230px] z-30">
        <div className="group relative rounded-2xl p-4 transition-all duration-500 hover:-translate-y-2 bg-gradient-to-b from-white to-[#F8FAFC] border border-white shadow-[0_15px_30px_-10px_rgba(0,0,0,0.06),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_6px_rgba(15,23,42,0.02)] ring-1 ring-slate-100/50 hover:shadow-[0_25px_40px_-10px_rgba(0,0,0,0.1)]">
          <div className="absolute -bottom-3 inset-x-6 h-6 bg-emerald-500 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-0 pointer-events-none"></div>
          <div className="absolute inset-0 rounded-2xl overflow-hidden z-10 pointer-events-none">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-emerald-50/50 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          <div className="relative z-20 flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-white to-slate-50 border border-slate-100/50 shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_4px_8px_rgba(0,0,0,0.04)] flex items-center justify-center text-emerald-500 flex-shrink-0">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 tracking-tight">Verified Professional</p>
              <p className="text-[10px] text-slate-500 mb-1 font-medium">Full Stack Developer</p>
              <span className="inline-flex items-center gap-1 bg-emerald-50 border border-emerald-100/50 text-emerald-600 px-1.5 py-0.5 rounded text-[9px] font-bold shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Available
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. MAN IMAGE (Top Center) */}
      <div className="absolute top-[20%] left-[48%] -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="w-[140px] h-[160px] bg-slate-200 rounded-[2rem] overflow-hidden shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,0.5)] border-4 border-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_40px_-10px_rgba(0,0,0,0.15)]">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop" alt="Professional" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* 4. TRUST SCORE (Top Right) */}
      <div className="absolute top-[15%] left-[80%] -translate-x-1/2 -translate-y-1/2 w-[210px] z-20">
        <div className="group relative rounded-2xl p-4 transition-all duration-500 hover:-translate-y-2 bg-gradient-to-b from-white to-[#F8FAFC] border border-white shadow-[0_15px_30px_-10px_rgba(0,0,0,0.06),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_6px_rgba(15,23,42,0.02)] ring-1 ring-slate-100/50 hover:shadow-[0_25px_40px_-10px_rgba(0,0,0,0.1)]">
          <div className="absolute -bottom-3 inset-x-6 h-6 bg-indigo-500 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-0 pointer-events-none"></div>
          <div className="absolute inset-0 rounded-2xl overflow-hidden z-10 pointer-events-none">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-indigo-50/50 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <div className="relative z-20 flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-indigo-500 to-indigo-600 shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_4px_8px_rgba(99,102,241,0.2)] flex items-center justify-center text-white flex-shrink-0">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-500 mb-0.5 tracking-wide">Trust Score</p>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[26px] font-black text-slate-900 leading-none">842</span>
                <span className="text-[8px] font-bold text-indigo-600 uppercase bg-indigo-50 border border-indigo-100/50 px-1.5 py-0.5 rounded shadow-sm">✦ ELITE</span>
              </div>
              <p className="text-[9px] text-slate-500 font-medium">Top 5% of professionals</p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. TRUSTED EMPLOYER (Mid Right) */}
      <div className="absolute top-[45%] left-[85%] -translate-x-1/2 -translate-y-1/2 w-[220px] z-20">
        <div className="group relative rounded-2xl p-4 transition-all duration-500 hover:-translate-y-2 bg-gradient-to-b from-white to-[#F8FAFC] border border-white shadow-[0_15px_30px_-10px_rgba(0,0,0,0.06),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_6px_rgba(15,23,42,0.02)] ring-1 ring-slate-100/50 hover:shadow-[0_25px_40px_-10px_rgba(0,0,0,0.1)]">
          <div className="absolute -bottom-3 inset-x-6 h-6 bg-emerald-500 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-0 pointer-events-none"></div>
          <div className="absolute inset-0 rounded-2xl overflow-hidden z-10 pointer-events-none">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-emerald-50/50 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <div className="relative z-20 flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-white to-slate-50 border border-slate-100/50 shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_4px_8px_rgba(0,0,0,0.04)] flex items-center justify-center text-emerald-500 flex-shrink-0">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
            <div className="w-full">
              <p className="text-xs font-bold text-slate-900 mb-1 tracking-tight">Trusted Employer</p>
              <p className="text-[10px] text-slate-500 font-medium mb-1.5">Payment Reliability</p>
              <p className="text-2xl font-black text-emerald-500 leading-none mb-2">98%</p>
            </div>
          </div>
        </div>
      </div>

      {/* 6. WOMAN IMAGE (Bottom Right) */}
      <div className="absolute top-[75%] left-[65%] -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-[140px] h-[140px] bg-slate-200 rounded-full overflow-hidden shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,0.5)] border-4 border-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_40px_-10px_rgba(0,0,0,0.15)]">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop" alt="Professional" className="w-full h-full object-cover object-top" />
        </div>
      </div>

      {/* 7. PRODUCT DESIGNER CARD (Overlapping Image) */}
      <div className="absolute top-[80%] left-[80%] -translate-x-1/2 -translate-y-1/2 w-[180px] z-30">
        <div className="group relative rounded-2xl p-3.5 transition-all duration-500 hover:-translate-y-2 bg-gradient-to-b from-white to-[#F8FAFC] border border-white shadow-[0_15px_30px_-10px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_6px_rgba(15,23,42,0.02)] ring-1 ring-slate-100/50 hover:shadow-[0_25px_40px_-10px_rgba(0,0,0,0.12)]">
          <div className="absolute -bottom-3 inset-x-4 h-6 bg-emerald-500 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-0 pointer-events-none"></div>
          <div className="absolute inset-0 rounded-2xl overflow-hidden z-10 pointer-events-none">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-emerald-50/50 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          <div className="relative z-20">
            <p className="text-xs font-bold text-slate-900 mb-1 tracking-tight">Product Designer</p>
            <span className="inline-flex items-center gap-1 bg-emerald-50 border border-emerald-100/50 text-emerald-600 px-1.5 py-0.5 rounded text-[9px] font-bold mb-2 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Available
            </span>
            <div className="flex items-center gap-1 text-[10px] text-indigo-600 font-medium">
              ★★★★★ <span className="text-slate-500 ml-1">4.8 (96)</span>
            </div>
          </div>
        </div>
      </div>

      {/* 8. PROJECT POSTED (Bottom Center) */}
      <div className="absolute top-[88%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[220px] z-20">
        <div className="group relative rounded-2xl p-4 transition-all duration-500 hover:-translate-y-2 bg-gradient-to-b from-white to-[#F8FAFC] border border-white shadow-[0_15px_30px_-10px_rgba(0,0,0,0.06),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_6px_rgba(15,23,42,0.02)] ring-1 ring-slate-100/50 hover:shadow-[0_25px_40px_-10px_rgba(0,0,0,0.1)]">
          <div className="absolute -bottom-3 inset-x-6 h-6 bg-indigo-500 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-0 pointer-events-none"></div>
          <div className="absolute inset-0 rounded-2xl overflow-hidden z-10 pointer-events-none">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-indigo-50/50 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <div className="relative z-20 flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-white to-slate-50 border border-slate-100/50 shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_4px_8px_rgba(0,0,0,0.04)] flex items-center justify-center text-indigo-600 flex-shrink-0">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-500 mb-0.5 tracking-wide uppercase">Project Posted</p>
              <p className="text-lg font-black text-slate-900 leading-none mb-1">2m ago</p>
              <p className="text-[10px] text-slate-500 font-medium">UI/UX Design • ₹50,000</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}