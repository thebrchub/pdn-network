// src/components/sections/ReputationEconomy.tsx

export default function ReputationEconomy() {
  const proMetrics = [
    { label: "Delivery Score", value: "4.8", max: "5.0" },
    { label: "Communication Score", value: "4.9", max: "5.0" },
    { label: "Repeat Client Rate", value: "82%" },
    { label: "Reliability Score", value: "98%" }
  ];

  const clientMetrics = [
    { label: "Payment Reliability", value: "100%" },
    { label: "Scope Stability", value: "4.7", max: "5.0" },
    { label: "Hiring Rate", value: "65%" },
    { label: "Dispute Rate", value: "< 1%", alert: true }
  ];

  return (
    <section className="relative bg-[#FAFAFC] pt-20 pb-32 font-sans">
      
      {/* SVG Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-[99%] z-10">
        <svg viewBox="0 0 1440 120" className="block w-full h-[50px] md:h-[90px]" preserveAspectRatio="none">
          <path fill="#FAFAFC" d="M0,120 C240,60 480,0 720,0 C960,0 1200,60 1440,120 L1440,0 L0,0 Z"></path>
        </svg>
      </div>

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px] relative z-20">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-[3.5rem] font-heading font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
            The Reputation Economy.
          </h2>
          <p className="text-lg lg:text-xl text-slate-500 leading-relaxed">
            Star ratings are dead. We track behavioral data—what people actually do, not what they say—to build professional identities that cannot be faked.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Pro Metrics Card */}
          <div className="bg-white rounded-[2rem] border border-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_6px_rgba(15,23,42,0.04)] ring-1 ring-slate-200/80 overflow-hidden">
            {/* Visual Hero Area */}
            <div className="h-40 bg-gradient-to-br from-indigo-50 to-indigo-100/50 flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-200 to-transparent"></div>
               {/* Abstract Performance Graphic */}
               <div className="relative z-10 flex gap-1 items-end h-16 w-32">
                 <div className="w-4 h-8 bg-indigo-400 rounded-sm"></div>
                 <div className="w-4 h-12 bg-indigo-500 rounded-sm"></div>
                 <div className="w-4 h-16 bg-indigo-600 rounded-sm"></div>
                 <div className="w-4 h-14 bg-indigo-500 rounded-sm"></div>
               </div>
            </div>
            
            <div className="p-8 lg:p-10">
              <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-black text-sm">P</span>
                Professional Metrics
              </h3>
              <div className="space-y-4">
                {proMetrics.map((m, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <span className="font-semibold text-slate-600">{m.label}</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-black text-slate-900">{m.value}</span>
                      {m.max && <span className="text-xs font-bold text-slate-400">/{m.max}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Client Metrics Card */}
          <div className="bg-white rounded-[2rem] border border-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_6px_rgba(15,23,42,0.04)] ring-1 ring-slate-200/80 overflow-hidden">
            {/* Visual Hero Area */}
            <div className="h-40 bg-gradient-to-br from-slate-50 to-slate-100/50 flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-200 to-transparent"></div>
               {/* Abstract Shield Graphic */}
               <svg className="w-16 h-16 text-slate-900 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
               </svg>
            </div>

            <div className="p-8 lg:p-10">
              <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-black text-sm">B</span>
                Business Metrics
              </h3>
              <div className="space-y-4">
                {clientMetrics.map((m, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <span className="font-semibold text-slate-600">{m.label}</span>
                    <div className="flex items-baseline gap-1">
                      <span className={`text-xl font-black ${m.alert ? 'text-emerald-600' : 'text-slate-900'}`}>
                        {m.value}
                      </span>
                      {m.max && <span className="text-xs font-bold text-slate-400">/{m.max}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}