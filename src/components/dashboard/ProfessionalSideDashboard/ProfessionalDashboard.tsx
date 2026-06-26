import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProfessionalDashboard() {
  const [activeTab, setActiveTab] = useState('best-matches');

  return (
    <main className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px] pt-8 pb-24 font-sans relative z-20 animate-page-in">
      
      {/* Grid Layout: 8-col Main (Feed), 4-col Sidebar (Profile) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        
        {/* ======================================== */}
        {/* LEFT COLUMN: The Job Feed (Spans 8)      */}
        {/* ======================================== */}
        <div className="lg:col-span-8 space-y-6">

          {/* Search & Filter Bar */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-2 flex items-center">
            <div className="pl-4 pr-2 text-slate-400">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
            <input 
              type="text" 
              placeholder="Search for projects, skills, or clients..." 
              className="w-full bg-transparent border-none focus:outline-none text-[15px] font-medium text-slate-800 placeholder-slate-400 py-2"
            />
            <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-[13px] font-bold text-slate-600 hover:bg-slate-100 transition-colors shrink-0">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
              Filters
            </button>
          </div>

          {/* Feed Container */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            
            {/* Feed Tabs */}
            <div className="flex items-center gap-8 px-6 border-b border-slate-100 bg-slate-50/50 pt-2 overflow-x-auto hide-scrollbar">
              {[
                { id: 'best-matches', label: 'Best Matches' },
                { id: 'most-recent', label: 'Most Recent' },
                { id: 'saved-jobs', label: 'Saved Jobs' },
                { id: 'invites', label: 'Invites (2)' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-4 text-[14px] font-bold whitespace-nowrap transition-colors relative ${
                    activeTab === tab.id ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600 rounded-t-full"></span>
                  )}
                </button>
              ))}
            </div>

            <div className="p-6 bg-slate-50/30 border-b border-slate-100 text-[13px] text-slate-500 font-medium">
              Showing projects that match your expertise and Trust Score requirements.
            </div>

            {/* Job Listings */}
            <div className="divide-y divide-slate-100">
              
              {/* Job Card 1 */}
              <div className="p-6 hover:bg-slate-50 transition-colors group">
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="text-[18px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors cursor-pointer leading-tight">
                    Senior React Developer for Fintech Escrow Dashboard
                  </h3>
                  <div className="flex items-center gap-2 shrink-0">
                    <button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-rose-500 hover:border-rose-200 hover:bg-rose-50 transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] font-medium text-slate-500 mb-4">
                  <span className="flex items-center gap-1.5 text-slate-700 font-bold">
                    <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    ₹1,20,000 (Escrow Ready)
                  </span>
                  <span>Fixed Price</span>
                  <span>Est. Time: 4 Weeks</span>
                  <span>Posted 2 hours ago</span>
                </div>

                <p className="text-[14px] text-slate-600 leading-relaxed mb-4 line-clamp-2">
                  We are looking for an experienced React developer to build out the frontend of our new milestone-based escrow platform. You will be working directly with our backend team to integrate OAuth and Stripe APIs. Must have experience with Tailwind CSS and Redux.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[12px] font-bold rounded-lg">React.js</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[12px] font-bold rounded-lg">TypeScript</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[12px] font-bold rounded-lg">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[12px] font-bold rounded-lg">Stripe API</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-[12px] font-bold text-slate-500">
                    <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </div>
                    Client Verified <span className="mx-1 font-normal">•</span> Stripe India Pvt Ltd
                  </div>
                  <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-[13px] font-bold rounded-xl transition-all shadow-sm">
                    Submit Proposal
                  </button>
                </div>
              </div>

              {/* Job Card 2 */}
              <div className="p-6 hover:bg-slate-50 transition-colors group">
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="text-[18px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors cursor-pointer leading-tight">
                    UI/UX Designer for B2B Dashboard Redesign
                  </h3>
                  <div className="flex items-center gap-2 shrink-0">
                    <button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-rose-500 hover:border-rose-200 hover:bg-rose-50 transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] font-medium text-slate-500 mb-4">
                  <span className="flex items-center gap-1.5 text-slate-700 font-bold">
                    <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    ₹65,000 (Escrow Ready)
                  </span>
                  <span>Fixed Price</span>
                  <span>Est. Time: 2 Weeks</span>
                  <span>Posted 5 hours ago</span>
                </div>

                <p className="text-[14px] text-slate-600 leading-relaxed mb-4 line-clamp-2">
                  Need a clean, modern, and skeuomorphic-lite redesign of our internal reporting dashboard. We have the wireframes ready, just need high-fidelity Figma files and a clickable prototype.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[12px] font-bold rounded-lg">Figma</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[12px] font-bold rounded-lg">UI/UX Design</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[12px] font-bold rounded-lg">Prototyping</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-[12px] font-bold text-slate-500">
                    <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </div>
                    Client Verified <span className="mx-1 font-normal">•</span> DataSync Corp
                  </div>
                  <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-[13px] font-bold rounded-xl transition-all shadow-sm">
                    Submit Proposal
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ======================================== */}
        {/* RIGHT COLUMN: Profile & Identity (Spans 4)*/}
        {/* ======================================== */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Profile Snapshot Card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <div className="flex items-center gap-4 mb-6">
              <img src="https://ui-avatars.com/api/?name=Alex+M&background=0D8ABC&color=fff" alt="Alex M." className="w-14 h-14 rounded-full border-2 border-white shadow-md" />
              <div>
                <h2 className="text-[18px] font-bold text-slate-900 leading-tight">Alex M.</h2>
                <Link to="/p/profile" className="text-[13px] font-bold text-blue-600 hover:underline">Senior Frontend Engineer</Link>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[12px] font-bold text-slate-500 mb-2">
                <span>Profile Completeness</span>
                <span className="text-slate-900">90%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden mb-3">
                <div className="h-full bg-blue-600 rounded-full" style={{ width: '90%' }}></div>
              </div>
              <Link to="#" className="text-[12px] font-bold text-blue-600 hover:underline">Add GitHub link to reach 100%</Link>
            </div>
          </div>

          {/* ProSpec Trust Score Widget */}
          <div className="bg-gradient-to-b from-blue-600 to-blue-800 rounded-2xl p-6 shadow-[0_10px_30px_-10px_rgba(37,99,235,0.4)] relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
              </div>
              <h3 className="text-[14px] font-bold uppercase tracking-wider text-blue-100">ProSpec Trust Score</h3>
            </div>
            
            <div className="flex items-end gap-2 mb-6 relative z-10">
              <span className="text-5xl font-heading font-extrabold tracking-tight leading-none">842</span>
              <span className="text-[14px] text-blue-200 font-bold mb-1">/ 1000</span>
            </div>

            <div className="space-y-3 mb-6 relative z-10">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-[13px] font-medium text-blue-100">Projects Completed</span>
                <span className="text-[14px] font-bold text-white">14</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-[13px] font-medium text-blue-100">On-Time Delivery</span>
                <span className="text-[14px] font-bold text-emerald-300">96%</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-[13px] font-medium text-blue-100">Disputes</span>
                <span className="text-[14px] font-bold text-white">0</span>
              </div>
            </div>

            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 border border-white/20 rounded-lg text-[12px] font-bold text-white">
                <svg className="w-3.5 h-3.5 text-amber-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                Top 5% of Engineers
              </span>
            </div>
          </div>

          {/* Quick Status / Financials Widget */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
             <div className="p-5 border-b border-slate-100 flex items-center justify-between">
                <h3 className="text-[14px] font-bold text-slate-900">Current Status</h3>
             </div>
             <div className="divide-y divide-slate-100">
               <Link to="/p/contracts" className="flex items-center justify-between p-5 hover:bg-slate-50 transition-colors group">
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                     <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                   </div>
                   <span className="text-[13px] font-bold text-slate-700">Active Contracts</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <span className="text-[13px] font-bold text-slate-900">1</span>
                   <svg className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                 </div>
               </Link>
               <Link to="/p/finances" className="flex items-center justify-between p-5 hover:bg-slate-50 transition-colors group">
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                     <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0-2.08.402-2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                   </div>
                   <span className="text-[13px] font-bold text-slate-700">Next Payout</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <span className="text-[13px] font-bold text-emerald-600">₹25,000</span>
                   <svg className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                 </div>
               </Link>
             </div>
          </div>

        </div>

      </div>
    </main>
  );
}