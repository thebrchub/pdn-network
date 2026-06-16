// src/components/sections/Trust.tsx

export default function Trust() {
  const trustPillars = [
    {
      title: "Behavior-Based Reputation",
      description: "We don't rely on easily faked 5-star ratings. Our scores are calculated automatically based on on-time delivery, scope adherence, and real dispute rates.",
      badge: "Data-Driven",
      glowClass: "bg-indigo-500",
      washClass: "from-indigo-50/60",
      iconColor: "text-indigo-600",
      // Micro-UI: A Trust Score Dial
      visual: (
        <div className="w-16 h-16 relative flex items-center justify-center">
           <svg className="absolute inset-0 w-full h-full text-slate-100" viewBox="0 0 36 36">
              <path className="stroke-current" strokeWidth="3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
           </svg>
           <svg className="absolute inset-0 w-full h-full text-indigo-500" viewBox="0 0 36 36">
              <path className="stroke-current" strokeWidth="3" strokeDasharray="85, 100" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
           </svg>
           <span className="text-sm font-black text-slate-900 tracking-tighter">842</span>
        </div>
      )
    },
    {
      title: "Delivery Assurance",
      description: "If a project derails, you aren't left stranded. We provide structured project recovery support and SLA-backed interventions to get things back on track.",
      badge: "Protected",
      glowClass: "bg-emerald-500",
      washClass: "from-emerald-50/60",
      iconColor: "text-emerald-600",
      // Micro-UI: Shield with a check
      visual: (
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-100 shadow-[inset_0_2px_4px_rgba(255,255,255,1)] flex items-center justify-center relative">
           <div className="absolute inset-2 bg-emerald-500 rounded-xl blur-sm opacity-20"></div>
           <svg className="w-8 h-8 text-emerald-500 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
           </svg>
        </div>
      )
    },
    {
      title: "Milestone Payments",
      description: "Never pay upfront for incomplete work. Funds are held in a secure escrow and only released when specific, pre-agreed milestones are successfully delivered.",
      badge: "Escrow Secured",
      glowClass: "bg-purple-500",
      washClass: "from-purple-50/60",
      iconColor: "text-purple-600",
      // Micro-UI: Milestone progress bar
      visual: (
        <div className="w-20 h-16 flex flex-col justify-center gap-2.5">
           <div className="flex items-center gap-2">
             <div className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.6)]"></div>
             <div className="h-1.5 flex-grow bg-purple-500 rounded-full"></div>
           </div>
           <div className="flex items-center gap-2 opacity-40">
             <div className="w-3 h-3 rounded-full bg-slate-300"></div>
             <div className="h-1.5 flex-grow bg-slate-200 rounded-full"></div>
           </div>
           <div className="flex items-center gap-2 opacity-40">
             <div className="w-3 h-3 rounded-full bg-slate-300"></div>
             <div className="h-1.5 flex-grow bg-slate-200 rounded-full"></div>
           </div>
        </div>
      )
    },
    {
      title: "Verified Professionals",
      description: "Every professional undergoes strict identity and skill verification. We gatekeep quality aggressively so you only deal with serious, accountable talent.",
      badge: "Vetted",
      glowClass: "bg-blue-500",
      washClass: "from-blue-50/60",
      iconColor: "text-blue-600",
      // Micro-UI: Abstract ID Card
      visual: (
        <div className="w-14 h-16 rounded-xl bg-white border-2 border-slate-100 shadow-[0_4px_10px_rgba(0,0,0,0.05)] flex flex-col p-2 relative transform rotate-3">
           <div className="w-4 h-1.5 bg-slate-200 rounded-full mx-auto mb-2"></div>
           <div className="flex gap-2 items-center mb-2">
             <div className="w-5 h-5 rounded bg-blue-100 flex-shrink-0"></div>
             <div className="space-y-1 w-full">
               <div className="h-1 w-full bg-slate-200 rounded-full"></div>
               <div className="h-1 w-2/3 bg-slate-200 rounded-full"></div>
             </div>
           </div>
           <div className="mt-auto flex justify-end">
              <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
           </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#FAFAFC] relative font-sans">
      
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px] relative z-20">
        
        {/* ======================================== */}
        {/* HEADER AREA                              */}
        {/* ======================================== */}
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-[4rem] font-heading font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6 drop-shadow-sm">
            Engineered for <span className="text-indigo-600">Certainty.</span>
          </h2>
          <p className="text-lg lg:text-xl text-slate-500 leading-relaxed">
            We don't just match you with professionals. We provide the institutional guarantee that your project will cross the finish line.
          </p>
        </div>

        {/* ======================================== */}
        {/* SKEUOMORPHIC CARDS GRID                  */}
        {/* ======================================== */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {trustPillars.map((pillar, index) => (
            <div 
              key={index} 
              className="group relative rounded-[2rem] p-8 lg:p-10 transition-all duration-500 hover:-translate-y-1 bg-gradient-to-b from-white to-[#F8FAFC] border border-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_6px_rgba(15,23,42,0.04)] ring-1 ring-slate-200/80 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)]"
            >
              
              {/* Ambient Glow */}
              <div className={`absolute -bottom-4 inset-x-12 h-8 ${pillar.glowClass} blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full z-0 pointer-events-none`}></div>
              
              {/* Internal Wash */}
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden z-10 pointer-events-none">
                <div className={`absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t ${pillar.washClass} to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>

              <div className="relative z-20 flex flex-col h-full">
                
                {/* Top Row: Visual & Badge */}
                <div className="flex items-start justify-between mb-10">
                  {/* Micro-UI Visual Container */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-b from-white to-slate-50 border border-slate-100/50 shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_6px_12px_rgba(0,0,0,0.06)] ring-1 ring-slate-100 flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-105">
                    {pillar.visual}
                  </div>
                  
                  {/* Skeuomorphic Badge */}
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-100 shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_2px_4px_rgba(0,0,0,0.02)] text-[10px] font-bold ${pillar.iconColor} uppercase tracking-wider`}>
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 font-sans mb-4 tracking-tight">
                  {pillar.title}
                </h3>
                
                <p className="text-[16px] text-slate-500 font-sans leading-relaxed">
                  {pillar.description}
                </p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}