// src/components/sections/FinalCTA.tsx

export default function FinalCTA() {
  return (
    <section className="relative bg-white pt-32 pb-32 lg:pb-40 overflow-hidden font-sans">
      
      {/* Ambient Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-50/50 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px] relative z-20">
        
        {/* Massive Centered Headline */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-heading font-black text-slate-900 tracking-tight leading-[1.05] mb-8">
            The standard for <br />
            <span className="text-indigo-600">professional delivery.</span>
          </h2>
          <p className="text-xl text-slate-500 font-sans leading-relaxed max-w-2xl mx-auto">
            Join the network where reputation is earned, delivery is guaranteed, and trust is built into the code.
          </p>
        </div>

        {/* Dual CTA Pathways */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          
          {/* Pathway 1: For Businesses */}
          <div className="group relative rounded-[2rem] p-8 lg:p-10 bg-gradient-to-b from-white to-[#F8FAFC] border border-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_6px_rgba(15,23,42,0.04)] ring-1 ring-slate-200/80 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] flex flex-col items-center text-center">
            
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 shadow-inner border border-indigo-100/50 group-hover:scale-110 transition-transform duration-500">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Hire with Certainty</h3>
            <p className="text-[15px] text-slate-500 mb-8 max-w-xs mx-auto">
              Post your project and match with verified professionals backed by our delivery guarantee.
            </p>
            
            <button className="mt-auto w-full px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-indigo-600 transition-colors duration-300 shadow-lg flex items-center justify-center gap-2">
              Post a Project
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          {/* Pathway 2: For Professionals */}
          <div className="group relative rounded-[2rem] p-8 lg:p-10 bg-gradient-to-b from-white to-[#F8FAFC] border border-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_6px_rgba(15,23,42,0.04)] ring-1 ring-slate-200/80 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] flex flex-col items-center text-center">
            
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 shadow-inner border border-emerald-100/50 group-hover:scale-110 transition-transform duration-500">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Work with Security</h3>
            <p className="text-[15px] text-slate-500 mb-8 max-w-xs mx-auto">
              Build a verified reputation and never chase a payment again. Apply to join the network.
            </p>
            
            <button className="mt-auto w-full px-8 py-4 bg-white text-slate-900 border border-slate-200 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-colors duration-300 shadow-sm flex items-center justify-center gap-2">
              Apply as Professional
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}