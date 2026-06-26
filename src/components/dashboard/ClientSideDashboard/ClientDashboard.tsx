import { Link } from 'react-router-dom';

export default function ClientDashboard() {
  return (
    // Removed max-w-6xl to let the grid fluidly fill the entire workspace
    <div className="p-6 sm:p-8 animate-page-in w-full h-full">
      <div className="space-y-8">
        
        {/* Welcome Banner */}
        <div className="mb-2">
          <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 tracking-tight leading-[1.1] flex items-center gap-3 mb-2">
            Welcome! BRC HUB <span className="text-3xl">👋</span>
          </h1>
          <p className="text-[14px] text-slate-500 font-medium">Here's what's happening with your projects today.</p>
        </div>

        {/* 4-COLUMN STAT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
              </div>
              <div>
                <h3 className="text-[13px] font-bold text-slate-500">Active Projects</h3>
                <p className="text-2xl font-black text-slate-900 leading-tight mt-0.5">3</p>
              </div>
            </div>
            <p className="text-[12px] text-slate-500 mt-4 font-medium">2 on track, <span className="text-rose-600 font-bold">1 delayed</span></p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <h3 className="text-[13px] font-bold text-slate-500">Completed Projects</h3>
                <p className="text-2xl font-black text-slate-900 leading-tight mt-0.5">12</p>
              </div>
            </div>
            <p className="text-[12px] text-slate-500 mt-4 font-medium"><span className="text-emerald-600 font-bold">+3</span> this month</p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="flex items-start gap-4 justify-between w-full">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <div>
                  <h3 className="text-[13px] font-bold text-slate-500">Trust Score</h3>
                  <p className="text-2xl font-black text-slate-900 leading-tight mt-0.5">812</p>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-between mt-4">
              <p className="text-[12px] text-emerald-600 font-bold">Excellent</p>
              <svg className="w-16 h-4 text-emerald-400" fill="none" viewBox="0 0 64 16" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 14l12-8 10 4 14-8 12 4 12-6" /></svg>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0-2.08.402-2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <h3 className="text-[13px] font-bold text-slate-500">Total Spend</h3>
                <p className="text-2xl font-black text-slate-900 leading-tight mt-0.5">₹3.20L</p>
              </div>
            </div>
            <p className="text-[12px] text-slate-500 mt-4 font-medium">+₹85,000 this month</p>
          </div>
        </div>

        {/* MAIN WORKSPACE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          
          {/* LEFT COLUMN (Spans 2) */}
          <div className="lg:col-span-2 space-y-5 sm:space-y-6">
            
            {/* ATTENTION REQUIRED */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-[16px] font-bold text-slate-900 flex items-center gap-2">
                  Attention Required <span className="w-5 h-5 rounded-full bg-rose-500 text-white flex items-center justify-center text-[11px]">2</span>
                </h2>
                <Link to="/b/messages" className="text-[13px] font-bold text-blue-600 hover:text-blue-700">View All</Link>
              </div>

              <div className="space-y-3">
                {/* Alert 1 */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-rose-50/50 border border-rose-100 rounded-xl gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-rose-100 flex items-center justify-center text-rose-600 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    </div>
                    <div>
                      <h3 className="text-[14px] font-bold text-slate-900">Review Milestone Submission</h3>
                      <p className="text-[13px] text-slate-500 mt-0.5">IndieByll Invoice Builder <span className="mx-1">•</span> Alex M.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[12px] text-slate-400 hidden sm:block">Submitted 2h ago</span>
                    <Link to="/b/escrow" className="w-full sm:w-auto px-5 py-2 bg-blue-600 text-white text-[13px] font-bold rounded-lg hover:bg-blue-700 transition-colors text-center inline-block">
                      Review Now
                    </Link>
                  </div>
                </div>

                {/* Alert 2 */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-amber-50/50 border border-amber-100 rounded-xl gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <h3 className="text-[14px] font-bold text-slate-900">Approve Payment Release</h3>
                      <p className="text-[13px] text-slate-500 mt-0.5">Powerbird Elevators Platform <span className="mx-1">•</span> Karen D.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[12px] font-bold text-amber-600 hidden sm:block">Due Today</span>
                    <Link to="/b/escrow" className="w-full sm:w-auto px-5 py-2 bg-white border border-slate-200 text-blue-600 text-[13px] font-bold rounded-lg hover:bg-slate-50 transition-colors shadow-sm text-center inline-block">
                      Approve
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* ACTIVE PROJECTS LIST */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col">
              <div className="flex justify-between items-center p-6 border-b border-slate-100">
                <h2 className="text-[16px] font-bold text-slate-900">Active Projects</h2>
                <Link to="/b/projects" className="text-[13px] font-bold text-blue-600 hover:text-blue-700">View All Projects</Link>
              </div>
              
              <div className="divide-y divide-slate-100">
                {/* Project 1 */}
                <div className="p-6 flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <Link to="/b/projects" className="text-[14px] font-bold text-slate-900 hover:text-blue-600 transition-colors">IndieByll Invoice Builder</Link>
                      <p className="text-[13px] text-slate-500 mt-0.5">Alex M. <span className="mx-1">•</span> Frontend Engineer</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6 flex-1 justify-between md:justify-end">
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[11px] font-bold uppercase tracking-wider rounded-md border border-emerald-100 whitespace-nowrap">On Track</span>
                    
                    <div className="w-32 hidden sm:block">
                      <div className="flex justify-between text-[11px] font-bold text-slate-500 mb-1.5">
                        <span>Milestone 2 of 4</span>
                        <span className="text-slate-900">50%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 rounded-full" style={{ width: '50%' }}></div>
                      </div>
                    </div>

                    <div className="text-[12px] text-slate-500 font-medium whitespace-nowrap">Due: 25 Jun 2026</div>
                    <button className="text-slate-400 hover:text-slate-600"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" /></svg></button>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="p-6 flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-amber-600 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                    </div>
                    <div>
                      <Link to="/b/projects" className="text-[14px] font-bold text-slate-900 hover:text-blue-600 transition-colors">Powerbird Elevators Platform</Link>
                      <p className="text-[13px] text-slate-500 mt-0.5">Karen D. <span className="mx-1">•</span> UI/UX Designer</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6 flex-1 justify-between md:justify-end">
                    <span className="px-3 py-1 bg-amber-50 text-amber-600 text-[11px] font-bold uppercase tracking-wider rounded-md border border-amber-100 whitespace-nowrap">Awaiting Approval</span>
                    
                    <div className="w-32 hidden sm:block">
                      <div className="flex justify-between text-[11px] font-bold text-slate-500 mb-1.5">
                        <span>Milestone 3 of 5</span>
                        <span className="text-slate-900">60%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>

                    <div className="text-[12px] text-slate-500 font-medium whitespace-nowrap">Due: 30 Jun 2026</div>
                    <button className="text-slate-400 hover:text-slate-600"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" /></svg></button>
                  </div>
                </div>

                {/* Project 3 */}
                <div className="p-6 flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-rose-500 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <Link to="/b/projects" className="text-[14px] font-bold text-slate-900 hover:text-blue-600 transition-colors">zQuab Platform Launch</Link>
                      <p className="text-[13px] text-slate-500 mt-0.5">Rahul S. <span className="mx-1">•</span> Full Stack Developer</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6 flex-1 justify-between md:justify-end">
                    <span className="px-3 py-1 bg-rose-50 text-rose-600 text-[11px] font-bold uppercase tracking-wider rounded-md border border-rose-100 whitespace-nowrap">Delayed</span>
                    
                    <div className="w-32 hidden sm:block">
                      <div className="flex justify-between text-[11px] font-bold text-slate-500 mb-1.5">
                        <span>Milestone 1 of 4</span>
                        <span className="text-slate-900">25%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-rose-500 rounded-full" style={{ width: '25%' }}></div>
                      </div>
                    </div>

                    <div className="text-[12px] text-rose-600 font-bold whitespace-nowrap">Due: 20 Jun 2026</div>
                    <button className="text-slate-400 hover:text-slate-600"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" /></svg></button>
                  </div>
                </div>

              </div>
              
              <div className="p-4 border-t border-slate-100 text-center bg-slate-50/50 mt-auto rounded-b-2xl">
                <Link to="/b/project/new" className="text-[13px] font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                  + New Project
                </Link>
              </div>
            </div>

            {/* BOTTOM BANNER */}
            <div className="bg-indigo-50/80 border border-indigo-100 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-[0_4px_12px_rgba(37,99,235,0.3)]">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                 </div>
                 <div>
                   <h3 className="text-[15px] font-bold text-slate-900">Your projects are protected</h3>
                   <p className="text-[13px] text-slate-600 mt-0.5">All payments are secured in escrow and released only when milestones are approved.</p>
                 </div>
              </div>
              <Link to="/b/escrow" className="px-5 py-2.5 bg-white border border-indigo-200 text-blue-600 text-[13px] font-bold rounded-lg shadow-sm hover:bg-slate-50 transition-colors whitespace-nowrap w-full sm:w-auto text-center inline-block">
                Learn More
              </Link>
            </div>

          </div>

          {/* RIGHT COLUMN (Spans 1) */}
          <div className="space-y-5 sm:space-y-6">
            
            {/* ESCROW OVERVIEW WIDGET */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-[16px] font-bold text-slate-900">Escrow Overview</h2>
                <Link to="/b/escrow" className="text-[13px] font-bold text-blue-600 hover:text-blue-700">View Details</Link>
              </div>
              
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                    </div>
                    <span className="text-[13px] font-medium text-slate-700">Escrow Funded</span>
                  </div>
                  <span className="text-[14px] font-bold text-slate-900">₹85,000</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <span className="text-[13px] font-medium text-slate-700">Released</span>
                  </div>
                  <span className="text-[14px] font-bold text-slate-900">₹25,000</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 text-slate-400 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full border-2 border-slate-300"></div>
                    </div>
                    <span className="text-[13px] font-medium text-slate-700">Remaining in Escrow</span>
                  </div>
                  <span className="text-[14px] font-bold text-slate-900">₹60,000</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden flex">
                  <div className="bg-blue-600 h-full rounded-l-full" style={{ width: '28%' }}></div>
                </div>
                <div className="text-right mt-2">
                  <span className="text-[11px] font-bold text-blue-600 px-2 py-0.5 bg-blue-50 rounded-md border border-blue-100">28%</span>
                </div>
              </div>
            </div>

            {/* RECENT ACTIVITY WIDGET */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-[16px] font-bold text-slate-900">Recent Activity</h2>
                <Link to="/b/reports" className="text-[13px] font-bold text-blue-600 hover:text-blue-700">View All</Link>
              </div>
              
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px before:h-full before:w-0.5 before:bg-slate-100">
                
                {/* Item 1 */}
                <div className="relative flex items-start gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-500 border-2 border-white flex items-center justify-center flex-shrink-0 z-10 shadow-sm">
                     <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" /></svg>
                  </div>
                  <div className="flex-1 min-w-0 pt-1">
                    <p className="text-[13px] font-bold text-slate-900 leading-tight">Alex M. submitted Milestone 2</p>
                    <p className="text-[12px] text-slate-500 truncate mt-0.5">IndieByll Invoice Builder</p>
                  </div>
                  <span className="text-[11px] font-medium text-slate-400 pt-1 whitespace-nowrap">2h ago</span>
                </div>

                {/* Item 2 */}
                <div className="relative flex items-start gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-500 border-2 border-white flex items-center justify-center flex-shrink-0 z-10 shadow-sm">
                     <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div className="flex-1 min-w-0 pt-1">
                    <p className="text-[13px] font-bold text-slate-900 leading-tight">Payment of ₹25,000 released</p>
                    <p className="text-[12px] text-slate-500 truncate mt-0.5">Powerbird Elevators Platform</p>
                  </div>
                  <span className="text-[11px] font-medium text-slate-400 pt-1 whitespace-nowrap">Yesterday</span>
                </div>

                {/* Item 3 */}
                <div className="relative flex items-start gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-500 border-2 border-white flex items-center justify-center flex-shrink-0 z-10 shadow-sm">
                     <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                  </div>
                  <div className="flex-1 min-w-0 pt-1">
                    <p className="text-[13px] font-bold text-slate-900 leading-tight">New proposal received from Karen D.</p>
                    <p className="text-[12px] text-slate-500 truncate mt-0.5">Powerbird Elevators Platform</p>
                  </div>
                  <span className="text-[11px] font-medium text-slate-400 pt-1 whitespace-nowrap">2 days ago</span>
                </div>

                {/* Item 4 */}
                <div className="relative flex items-start gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-500 border-2 border-white flex items-center justify-center flex-shrink-0 z-10 shadow-sm">
                     <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" /></svg>
                  </div>
                  <div className="flex-1 min-w-0 pt-1">
                    <p className="text-[13px] font-bold text-slate-900 leading-tight">Project created</p>
                    <p className="text-[12px] text-slate-500 truncate mt-0.5">zQuab Platform Launch</p>
                  </div>
                  <span className="text-[11px] font-medium text-slate-400 pt-1 whitespace-nowrap">3 days ago</span>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}