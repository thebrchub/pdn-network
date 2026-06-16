// src/components/sections/Comparison.tsx
import React from 'react';

/* ─── Data ─── */
const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    name: "Reputation Tracking",
    whatsapp: { icon: "cross" as const, label: "No visibility" },
    fiverr:   { icon: "triangle" as const, label: "Basic ratings" },
    agencies: { icon: "cross" as const, label: "Not available" },
    ProSpec: "Behavior-based",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    name: "Delivery Assurance",
    whatsapp: { icon: "cross" as const, label: "No protection" },
    fiverr:   { icon: "cross" as const, label: "Buyer protection only" },
    agencies: { icon: "triangle" as const, label: "Limited" },
    ProSpec: "Built-in protection",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
      </svg>
    ),
    name: "Milestone Tracking",
    whatsapp: { icon: "cross" as const, label: "Manual updates" },
    fiverr:   { icon: "triangle" as const, label: "Limited visibility" },
    agencies: { icon: "triangle" as const, label: "Varies" },
    ProSpec: "Real-time tracking",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    name: "Transparent Reputation",
    whatsapp: { icon: "cross" as const, label: "No system" },
    fiverr:   { icon: "triangle" as const, label: "Biased reviews" },
    agencies: { icon: "cross" as const, label: "Not standardized" },
    ProSpec: "Transparent & verifiable",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    name: "India-Focused",
    whatsapp: { icon: "cross" as const, label: "Not built for scale" },
    fiverr:   { icon: "cross" as const, label: "Global-first" },
    agencies: { icon: "triangle" as const, label: "Limited focus" },
    ProSpec: "Built for India",
  },
];

const CrossIcon = () => (
  <svg className="w-4 h-4 mx-auto text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const TriangleIcon = () => (
  <svg className="w-4 h-4 mx-auto text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

function CellIcon({ icon }: { icon: "cross" | "triangle" }) {
  return icon === "cross" ? <CrossIcon /> : <TriangleIcon />;
}

export default function Comparison() {
  return (
    <section className="relative bg-white pt-20 pb-24 lg:pb-32 font-sans">
      <div className="w-full mx-auto px-4 sm:px-8 lg:px-8 xl:px-16 max-w-[1440px] relative">

        {/* ── Header (Widened max-w to keep text on one line) ── */}
        <div className="text-center max-w-5xl mx-auto mb-20">
          <h2 className="font-heading font-extrabold tracking-tight leading-[1.08] text-slate-900 mb-5 text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] drop-shadow-sm">
            Built for <span className="text-indigo-600">trust.</span> Designed for <span className="text-indigo-600">delivery.</span>
          </h2>
          <p className="text-lg text-slate-500 font-sans leading-relaxed max-w-xl mx-auto">
            Most platforms focus on matching. We focus on what actually matters. Here's how ProSpec stacks up.
          </p>
        </div>

        {/* Added top padding (pt-2) so the top borders/shadows don't clip inside the overflow container */}
        <div className="w-full overflow-x-auto pt-2 pb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="relative min-w-[1000px]">
            
            {/* ── BACKGROUND SKEUOMORPHIC LAYER ── */}
            <div 
              className="absolute inset-0 grid pointer-events-none"
              style={{ gridTemplateColumns: "minmax(240px, 1.5fr) repeat(3, minmax(0, 1fr)) 1.5rem minmax(0, 1fr)" }}
            >
              {/* Left Table: Switched back to a physical border instead of a ring to prevent top clipping */}
              <div
                className="bg-gradient-to-b from-white to-[#F8FAFC] rounded-[2rem] z-0 border border-slate-200 shadow-[0_8px_16px_-6px_rgba(0,0,0,0.05)]"
                style={{ gridColumn: '1 / 5' }}
              />

              {/* ProSpec: Highlight Frame */}
              <div className="relative" style={{ gridColumn: '6 / 7' }}>
                <div className="absolute inset-0 rounded-[2rem] border-[1.5px] border-indigo-600 bg-gradient-to-b from-indigo-50/80 via-white to-white shadow-[0_8px_16px_-6px_rgba(99,102,241,0.15),inset_0_2px_4px_rgba(255,255,255,1)]"></div>
              </div>
            </div>

            {/* ── FOREGROUND CONTENT ── */}
            <div 
              className="relative z-10 grid"
              style={{ gridTemplateColumns: "minmax(240px, 1.5fr) repeat(3, minmax(0, 1fr)) 1.5rem minmax(0, 1fr)" }}
            >
              {/* Header Row */}
              <div className="relative z-10 flex items-end px-8 pb-5 pt-10 border-b border-slate-100">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">What Matters</span>
              </div>
              <div className="relative z-10 flex flex-col items-center justify-end gap-1.5 px-3 pb-5 pt-10 text-center border-b border-slate-100">
                <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center shadow-sm"><svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></div>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">WhatsApp</span>
              </div>
              <div className="relative z-10 flex flex-col items-center justify-end gap-1.5 px-3 pb-5 pt-10 text-center border-b border-slate-100">
                <div className="w-10 h-10 rounded-full bg-[#1DBF73] flex items-center justify-center shadow-sm text-white font-extrabold text-sm">fi</div>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Fiverr</span>
              </div>
              <div className="relative z-10 flex flex-col items-center justify-end gap-1.5 px-3 pb-5 pt-10 text-center border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg></div>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Agencies</span>
              </div>
              <div /> {/* Gap Column */}
              <div className="relative z-10 flex flex-col items-center justify-end gap-1.5 px-4 pb-4 pt-6 text-center border-b border-indigo-600/10 rounded-t-[1.5rem]">
                <img src="/logo1.svg" alt="ProSpec Logo" className="h-8 w-auto object-contain mb-1" />
                <span className="text-[11px] font-extrabold text-indigo-600 uppercase tracking-wider">ProSpec</span>
              </div>

              {features.map((row, i) => {
                const isLast = i === features.length - 1;
                const divider = isLast ? "border-transparent" : "border-slate-100";
                return (
                  <React.Fragment key={i}>
                    <div className={`relative z-10 flex items-center gap-3 px-8 py-6 border-b ${divider}`}>
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-white to-slate-50 border border-slate-100/50 shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_4px_8px_rgba(0,0,0,0.04)] ring-1 ring-slate-100 flex items-center justify-center text-indigo-600 flex-shrink-0">
                        {row.icon}
                      </div>
                      <span className="text-[15px] font-bold text-slate-900 tracking-tight">{row.name}</span>
                    </div>
                    <div className={`relative z-10 flex flex-col items-center justify-center gap-1 px-3 py-6 text-center border-b ${divider}`}>
                      <CellIcon icon={row.whatsapp.icon} />
                      <span className="text-[11px] text-slate-400 font-medium mt-1">{row.whatsapp.label}</span>
                    </div>
                    <div className={`relative z-10 flex flex-col items-center justify-center gap-1 px-3 py-6 text-center border-b ${divider}`}>
                      <CellIcon icon={row.fiverr.icon} />
                      <span className="text-[11px] text-slate-400 font-medium mt-1">{row.fiverr.label}</span>
                    </div>
                    <div className={`relative z-10 flex flex-col items-center justify-center gap-1 px-3 py-6 text-center border-b ${divider}`}>
                      <CellIcon icon={row.agencies.icon} />
                      <span className="text-[11px] text-slate-400 font-medium mt-1">{row.agencies.label}</span>
                    </div>
                    <div /> {/* Gap Column */}
                    <div className={`relative z-10 flex flex-col items-center justify-center gap-2 px-4 py-6 text-center ${isLast ? "" : "border-b border-indigo-600/10"}`}>
                      <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center shadow-[0_4px_12px_rgba(99,102,241,0.3)]">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-[12px] font-bold text-indigo-700">{row.ProSpec}</span>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          <span className="flex items-center gap-2.5 text-[13px] font-bold text-slate-600">
            <div className="w-5 h-5 rounded-full bg-indigo-600 flex items-center justify-center"><svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></div>
            Fully built-in
          </span>
          <span className="flex items-center gap-2.5 text-[13px] font-medium text-slate-400"><TriangleIcon />Partial Focus</span>
          <span className="flex items-center gap-2.5 text-[13px] font-medium text-slate-400"><CrossIcon />Not available</span>
        </div>
      </div>
    </section>
  );
}