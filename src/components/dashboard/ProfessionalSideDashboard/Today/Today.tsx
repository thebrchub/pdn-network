import { Link } from 'react-router-dom';

export default function ProfessionalDashboard() {
  return (
    // Removed max-w constraints to let it fluidly fill the workspace
    <div className="p-6 sm:p-8 animate-page-in w-full h-full font-sans">

      {/* 1. Header Banner */}
      <div className="bg-gradient-to-r from-blue-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-md relative overflow-hidden mb-8">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-indigo-500/20 rounded-full blur-2xl"></div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-2xl sm:text-3xl text-white font-heading font-extrabold tracking-tight">Good Morning, Alex 👋</h1>
            <p className="text-blue-100 mt-2 text-sm sm:text-[15px] font-medium max-w-2xl">
              Ready to grow your professional status today? You have some high-value matches and milestones waiting.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-5 py-3 text-center min-w-[100px] transition-transform hover:-translate-y-0.5">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-blue-200">Trust Score</span>
              <span className="text-xl sm:text-2xl font-bold tracking-tight mt-0.5 block">842 <span className="text-xs text-emerald-300 font-semibold ml-1">↑+12</span></span>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-5 py-3 text-center min-w-[100px] transition-transform hover:-translate-y-0.5">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-blue-200">Awaiting Release</span>
              <span className="text-xl sm:text-2xl font-bold tracking-tight mt-0.5 block">₹75,000</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-5 py-3 text-center min-w-[100px] transition-transform hover:-translate-y-0.5">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-blue-200">Matches</span>
              <span className="text-xl sm:text-2xl font-bold tracking-tight mt-0.5 block">2 New</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Layout: Main Feed (8 cols) and Sidebar (4 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">

        {/* ========================================== */}
        {/* LEFT COLUMN: Priorities & Feed (Spans 8)   */}
        {/* ========================================== */}
        <div className="lg:col-span-8 space-y-8">

          {/* Section 2: Today's Priorities */}
          <div>
            <h2 className="text-[18px] font-extrabold text-slate-900 mb-5 tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-5 bg-blue-600 rounded-full"></span>
              Today's Priorities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

              {/* Card 1: Submit Proposal */}
              <Link to="/p/opportunities" className="group bg-white border border-slate-200 hover:border-blue-300 hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.05)] rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                  </div>
                  <h3 className="text-[14px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Submit Proposal</h3>
                  <p className="text-[12px] text-slate-500 mt-1 font-medium leading-relaxed">3 New High-Match Opportunities</p>
                </div>
                <div className="mt-5 text-[12px] font-bold text-blue-600 flex items-center gap-1">
                  View Matches
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                </div>
              </Link>

              {/* Card 2: Deliver Milestone */}
              <Link to="/p/projects" className="group bg-white border border-slate-200 hover:border-blue-300 hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.05)] rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                  </div>
                  <h3 className="text-[14px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Deliver Milestone</h3>
                  <p className="text-[12px] text-slate-500 mt-1 font-medium leading-relaxed">Fintech Dashboard MVP due today</p>
                </div>
                <div className="mt-5 text-[12px] font-bold text-blue-600 flex items-center gap-1">
                  Go to Projects
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                </div>
              </Link>

              {/* Card 3: Release Payment */}
              <Link to="/p/earnings" className="group bg-white border border-slate-200 hover:border-blue-300 hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.05)] rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0-2.08.402-2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h3 className="text-[14px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Payment Ready</h3>
                  <p className="text-[12px] text-slate-500 mt-1 font-medium leading-relaxed">₹75,000 pending client release</p>
                </div>
                <div className="mt-5 text-[12px] font-bold text-blue-600 flex items-center gap-1">
                  View Earnings
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                </div>
              </Link>

              {/* Card 4: Trust Opportunity */}
              <Link to="/p/profile" className="group bg-white border border-slate-200 hover:border-blue-300 hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.05)] rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <h3 className="text-[14px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Trust Opportunity</h3>
                  <p className="text-[12px] text-slate-500 mt-1 font-medium leading-relaxed">Verify PAN / Aadhaar for +20 Trust</p>
                </div>
                <div className="mt-5 text-[12px] font-bold text-blue-600 flex items-center gap-1">
                  Complete Profile
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                </div>
              </Link>

            </div>
          </div>

          {/* Section 4: Opportunity Feed */}
          <div>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-[18px] font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                <span className="w-1.5 h-5 bg-blue-600 rounded-full"></span>
                Opportunity Feed
              </h2>
              <span className="text-[11px] font-extrabold text-slate-400 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider hidden sm:block">Unified Intelligence</span>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100">

              {/* Item 1: Best Match Project */}
              <div className="p-6 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-5 group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-1 border border-blue-100">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-[10px] font-extrabold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded uppercase tracking-wider border border-blue-100">Best Match</span>
                      <span className="text-slate-400 text-[11px] font-bold">• Posted 1h ago</span>
                    </div>
                    <h3 className="text-[15px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Stripe India • Frontend Dashboard MVP</h3>
                    <p className="text-[13px] text-slate-500 mt-1 font-medium">Build a beautiful analytics console. React & Tailwind. Escrow Ready.</p>
                    <div className="flex items-center gap-4 mt-3 text-[12px] font-bold text-slate-500">
                      <span className="text-slate-900 bg-slate-50 px-2 py-1 rounded border border-slate-100">₹1,20,000</span>
                      <span>Fixed Price</span>
                      <span className="flex items-center gap-1 text-blue-600 bg-blue-50 px-2 py-1 rounded border border-blue-100">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 11.37h1.568a9.778 9.778 0 007.13 7.13v-1.568a8.21 8.21 0 01-5.562-5.562zM9.778 3.734V2.166a9.778 9.778 0 00-7.13 7.13h1.568a8.21 8.21 0 015.562-5.562zm6.488 2.074a8.21 8.21 0 010 11.124l1.11 1.11a9.778 9.778 0 000-13.344l-1.11 1.11zm-5.562 2.07a4.444 4.444 0 000 6.244l1.11 1.11a6.002 6.002 0 000-8.464l-1.11 1.11z" clipRule="evenodd" /></svg>
                        98% Match
                      </span>
                    </div>
                  </div>
                </div>
                <Link to="/p/opportunities" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-[13px] font-bold rounded-xl shadow-sm transition-colors text-center shrink-0 self-start sm:self-center">
                  Apply Now
                </Link>
              </div>

              {/* Item 2: Previous Client Request */}
              <div className="p-6 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-5 group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 mt-1 border border-purple-100">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-[10px] font-extrabold text-purple-600 bg-purple-50 px-2.5 py-0.5 rounded uppercase tracking-wider border border-purple-100">Previous Client</span>
                      <span className="text-slate-400 text-[11px] font-bold">• Active Contract</span>
                    </div>
                    <h3 className="text-[15px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Acme Co. • New Feature Request</h3>
                    <p className="text-[13px] text-slate-500 mt-1 font-medium">Marc Fletcher requested a quote on adding dark mode to the landing site.</p>
                    <div className="flex items-center gap-4 mt-3 text-[12px] font-bold text-slate-500">
                      <span className="text-slate-900 bg-slate-50 px-2 py-1 rounded border border-slate-100">₹25,000 Est.</span>
                      <span className="text-purple-600 bg-purple-50 px-2 py-1 rounded border border-purple-100">Reputation Multiplier 1.2x</span>
                    </div>
                  </div>
                </div>
                <Link to="/p/messages" className="px-5 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-[13px] font-bold rounded-xl shadow-sm transition-colors text-center shrink-0 self-start sm:self-center">
                  Reply
                </Link>
              </div>

              {/* Item 3: Milestone Approved */}
              <div className="p-6 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-5 group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-1 border border-emerald-100">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-[10px] font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded uppercase tracking-wider border border-emerald-100">Milestone Approved</span>
                      <span className="text-slate-400 text-[11px] font-bold">• Escrow Released</span>
                    </div>
                    <h3 className="text-[15px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Zeta Fintech LLC • Payment Initiated</h3>
                    <p className="text-[13px] text-slate-500 mt-1 font-medium">Your milestone "V1 UI Delivery" was signed off. Transferring to Available balance.</p>
                    <div className="flex items-center gap-4 mt-3 text-[12px] font-bold text-slate-500">
                      <span className="text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-100">₹75,000 Awaiting Release</span>
                      <span className="text-emerald-600 flex items-center gap-1 font-bold">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                        +8 Trust
                      </span>
                    </div>
                  </div>
                </div>
                <Link to="/p/earnings" className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-[13px] font-bold rounded-xl shadow-sm transition-colors text-center shrink-0 self-start sm:self-center">
                  View Earnings
                </Link>
              </div>

              {/* Item 4: Direct Invitation */}
              <div className="p-6 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-5 group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-1 border border-indigo-100">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-[10px] font-extrabold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded uppercase tracking-wider border border-indigo-100">Invitation</span>
                      <span className="text-slate-400 text-[11px] font-bold">• Exclusively for you</span>
                    </div>
                    <h3 className="text-[15px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Design Studio X • Dashboard Redesign</h3>
                    <p className="text-[13px] text-slate-500 mt-1 font-medium">Looking for a designer to redesign our core client management tools. 3 weeks.</p>
                    <div className="flex items-center gap-4 mt-3 text-[12px] font-bold text-slate-500">
                      <span className="text-slate-900 bg-slate-50 px-2 py-1 rounded border border-slate-100">₹80,000 Budget</span>
                      <span>Requires 800+ Trust</span>
                    </div>
                  </div>
                </div>
                <Link to="/p/opportunities" className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-[13px] font-bold rounded-xl shadow-sm transition-colors text-center shrink-0 self-start sm:self-center">
                  Review Invite
                </Link>
              </div>

            </div>
          </div>

        </div>

        {/* ========================================== */}
        {/* RIGHT COLUMN: Widgets (Spans 4)            */}
        {/* ========================================== */}
        <div className="lg:col-span-4 space-y-6">

          {/* Section 3: Trust Score Widget */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm relative overflow-hidden">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-[12px] font-bold uppercase tracking-wider text-slate-400">Trust Score</h3>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl font-extrabold text-slate-900 tracking-tight">842</span>
                  <span className="text-[12px] text-emerald-500 font-bold flex items-center bg-emerald-50 px-1.5 py-0.5 rounded">
                    <svg className="w-3 h-3 mr-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                    +18 this month
                  </span>
                </div>
              </div>

              {/* SVG Ring visual */}
              <div className="w-14 h-14 relative flex items-center justify-center shrink-0">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="28" cy="28" r="24" className="stroke-slate-100 fill-none" strokeWidth="5" />
                  <circle cx="28" cy="28" r="24" className="stroke-blue-600 fill-none" strokeWidth="5" strokeDasharray="150" strokeDashoffset="24" strokeLinecap="round" />
                </svg>
                <span className="absolute text-[11px] font-bold text-slate-700">Top 5%</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-y-5 gap-x-4 border-t border-slate-100 pt-5">
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Projects</span>
                <span className="text-[15px] font-extrabold text-slate-900 block flex items-center gap-1">
                  18 <span className="text-amber-400 text-[10px]">★★★★★</span>
                </span>
              </div>
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">On-Time Delivery</span>
                <span className="text-[15px] font-extrabold text-emerald-600 block">96%</span>
              </div>
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Repeat Clients</span>
                <span className="text-[15px] font-extrabold text-slate-900 block">42%</span>
              </div>
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Disputes</span>
                <span className="text-[15px] font-extrabold text-slate-400 block">0</span>
              </div>
            </div>

            <Link to="/p/reputation" className="mt-6 w-full py-2.5 bg-slate-50 border border-slate-200 hover:bg-white hover:border-slate-300 text-[13px] font-bold text-slate-700 rounded-xl transition-all block text-center shadow-sm">
              View Trust Breakdown
            </Link>
          </div>

          {/* Section 5: Current Projects Timeline */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-[12px] font-bold uppercase tracking-wider text-slate-400 mb-5">Active Kanban</h3>

            <div className="space-y-5">
              {/* Project 1 */}
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="text-[13px] font-bold text-slate-900">Fintech Dashboard MVP</h4>
                  <span className="text-[11px] font-bold text-slate-500">Due Friday</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-600 h-full rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <span className="text-[12px] font-extrabold text-slate-700 w-8 text-right">65%</span>
                </div>
              </div>

              {/* Project 2 */}
              <div className="border-t border-slate-100 pt-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-[13px] font-bold text-slate-900">Portfolio Website</h4>
                  <span className="px-2 py-1 bg-amber-50 border border-amber-100 text-amber-600 text-[10px] font-extrabold rounded-md uppercase tracking-wider">Waiting Review</span>
                </div>
              </div>

              {/* Project 3 */}
              <div className="border-t border-slate-100 pt-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-[13px] font-bold text-slate-900">Dashboard UI Kit</h4>
                  <span className="px-2 py-1 bg-emerald-50 border border-emerald-100 text-emerald-600 text-[10px] font-extrabold rounded-md uppercase tracking-wider">Payment Pending</span>
                </div>
              </div>
            </div>

            <Link to="/p/projects" className="mt-6 w-full py-2.5 bg-slate-50 border border-slate-200 hover:bg-white hover:border-slate-300 text-[13px] font-bold text-slate-700 rounded-xl transition-all block text-center shadow-sm">
              Go to Workspace
            </Link>
          </div>

          {/* Section 6: Money Summary */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-[12px] font-bold uppercase tracking-wider text-slate-400 mb-5">Earnings Overview</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Available</span>
                <span className="text-[16px] font-extrabold text-slate-900 mt-1 block">₹32,000</span>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Pending</span>
                <span className="text-[16px] font-extrabold text-slate-900 mt-1 block">₹75,000</span>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">In Escrow</span>
                <span className="text-[16px] font-extrabold text-slate-900 mt-1 block">₹1,20,000</span>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Lifetime</span>
                <span className="text-[16px] font-extrabold text-emerald-600 mt-1 block">₹9.8L</span>
              </div>
            </div>
            <Link to="/p/earnings" className="mt-5 w-full py-2.5 bg-slate-50 border border-slate-200 hover:bg-white hover:border-slate-300 text-[13px] font-bold text-slate-700 rounded-xl transition-all block text-center shadow-sm">
              View Ledger & Invoices
            </Link>
          </div>

          {/* Section 7: Identity Strength */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-[12px] font-bold uppercase tracking-wider text-slate-400 mb-4">Identity Strength</h3>

            <div className="flex justify-between items-baseline mb-2">
              <span className="text-[13px] font-bold text-slate-700">Completeness</span>
              <span className="text-[14px] font-extrabold text-slate-900">92%</span>
            </div>

            <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden mb-6">
              <div className="bg-blue-600 h-full rounded-full" style={{ width: '92%' }}></div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center text-[13px] font-medium text-slate-600">
                <span>Github Connected</span>
                <span className="text-emerald-600 font-bold flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  Verified
                </span>
              </div>
              <div className="flex justify-between items-center text-[13px] font-medium text-slate-600">
                <span>Aadhaar Vetting</span>
                <span className="text-emerald-600 font-bold flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  Verified
                </span>
              </div>
              <div className="flex justify-between items-center text-[13px] font-medium text-slate-600">
                <span>PAN Vetting</span>
                <span className="text-emerald-600 font-bold flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  Verified
                </span>
              </div>
              <div className="flex justify-between items-center text-[13px] font-medium text-slate-600 pt-1 border-t border-slate-100 mt-2">
                <span>GST Registration</span>
                <Link to="/p/profile" className="text-blue-600 hover:text-blue-700 font-bold">+ Add GST</Link>
              </div>
            </div>
          </div>

          {/* Section 8: Recent Messages */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-[12px] font-bold uppercase tracking-wider text-slate-400 mb-5">Recent Conversations</h3>

            <div className="space-y-5">
              {[
                { name: 'Marc Fletcher', text: 'u can have a look at my profile...', time: '11:01 PM', initial: 'MF', color: 'bg-slate-800' },
                { name: 'Katrina Kan', text: 'You: Just wanted to add that I\'ve pr...', time: 'Jan 20', initial: 'KK', color: 'bg-indigo-600' },
                { name: 'Stripe India', text: 'Contract activated. Funds secured.', time: 'Jan 18', img: 'https://ui-avatars.com/api/?name=Stripe+India&background=f8fafc&color=334155' }
              ].map((msg, i) => (
                <Link key={i} to="/p/messages" className="flex items-start gap-3 group">
                  {msg.img ? (
                    <img src={msg.img} alt={msg.name} className="w-9 h-9 rounded-full border border-slate-200" />
                  ) : (
                    <div className={`w-9 h-9 rounded-full ${msg.color} text-white flex items-center justify-center font-bold text-[12px] shadow-sm`}>
                      {msg.initial}
                    </div>
                  )}
                  <div className="flex-1 min-w-0 pt-0.5">
                    <div className="flex justify-between items-baseline">
                      <h4 className="text-[13px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate">{msg.name}</h4>
                      <span className="text-[11px] text-slate-400 font-medium whitespace-nowrap">{msg.time}</span>
                    </div>
                    <p className="text-[12px] text-slate-500 truncate mt-0.5">{msg.text}</p>
                  </div>
                </Link>
              ))}
            </div>

            <Link to="/p/messages" className="mt-6 w-full py-2.5 bg-slate-50 border border-slate-200 hover:bg-white hover:border-slate-300 text-[13px] font-bold text-slate-700 rounded-xl transition-all block text-center shadow-sm">
              Open Full Inbox
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}