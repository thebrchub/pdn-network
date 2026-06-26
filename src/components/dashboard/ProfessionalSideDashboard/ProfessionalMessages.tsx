import { useState } from 'react';

export default function ProfessionalMessages() {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    // Fills the exact height of the layout's Outlet container
    <div className="h-full w-full bg-white flex overflow-hidden animate-page-in">
      
      {/* ========================================== */}
      {/* 1. LEFT PANEL: Inbox List                  */}
      {/* ========================================== */}
      <aside className="w-full sm:w-80 lg:w-[340px] flex-shrink-0 border-r border-slate-200 flex flex-col bg-[#FAFAFC] h-full z-20">
        
        {/* Inbox Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 bg-white shrink-0">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">Messages</h1>
            <div className="flex gap-2 text-slate-400">
              <button className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
              <button className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
              </button>
            </div>
          </div>
          
          {/* Filters */}
          <div className="flex items-center gap-2">
            {['All', 'Unread', 'Starred'].map(filter => (
              <button 
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 rounded-lg text-[13px] font-bold transition-colors ${
                  activeFilter === filter 
                    ? 'bg-white border border-slate-200 shadow-sm text-slate-900' 
                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100 border border-transparent'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Thread List */}
        <div className="flex-1 overflow-y-auto">
          {/* Active Thread */}
          <div className="p-4 border-b border-slate-100 bg-blue-50/50 relative cursor-pointer group">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600"></div>
            <div className="flex items-start gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-[12px] shadow-sm">
                  MF
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-0.5">
                  <h3 className="text-[14px] font-bold text-slate-900 truncate pr-2">Marc Fletcher</h3>
                  <span className="text-[11px] font-bold text-blue-600 shrink-0">11:01 PM</span>
                </div>
                <p className="text-[12px] font-bold text-slate-700 truncate mb-1">3D Animator for Conference...</p>
                <p className="text-[13px] text-slate-600 truncate">Satish: u can have a look at my profile...</p>
              </div>
            </div>
          </div>

          {/* Read Thread */}
          <div className="p-4 border-b border-slate-100 hover:bg-white transition-colors cursor-pointer group">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[12px]">
                KK
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-0.5">
                  <h3 className="text-[14px] font-bold text-slate-700 group-hover:text-slate-900 truncate pr-2">Katrina Kan</h3>
                  <span className="text-[11px] text-slate-400 shrink-0">1/20/25</span>
                </div>
                <p className="text-[12px] font-medium text-slate-500 truncate mb-1">3D Animator Needed for Edu...</p>
                <p className="text-[13px] text-slate-500 truncate">You: Just wanted to add that I've pr...</p>
              </div>
            </div>
          </div>
          
          {/* Read Thread 2 */}
          <div className="p-4 border-b border-slate-100 hover:bg-white transition-colors cursor-pointer group">
            <img src="https://ui-avatars.com/api/?name=Stripe+India&background=f8fafc&color=334155" alt="Stripe" className="w-10 h-10 rounded-full float-left mr-3 border border-slate-200" />
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline mb-0.5">
                <h3 className="text-[14px] font-bold text-slate-700 group-hover:text-slate-900 truncate pr-2">Stripe India Pvt Ltd</h3>
                <span className="text-[11px] text-slate-400 shrink-0">1/18/25</span>
              </div>
              <p className="text-[12px] font-medium text-slate-500 truncate mb-1">Fintech Dashboard MVP</p>
              <p className="text-[13px] text-slate-500 truncate">Contract activated. Funds secured.</p>
            </div>
          </div>
        </div>
      </aside>

      {/* ========================================== */}
      {/* 2. CENTER PANEL: Chat Interface            */}
      {/* ========================================== */}
      <div className="flex-1 flex flex-col min-w-0 bg-white z-10">
        
        {/* Chat Header */}
        <header className="h-[88px] px-6 border-b border-slate-200 flex items-center justify-between shrink-0 bg-white">
          <div className="min-w-0">
            <h2 className="text-[18px] font-bold text-slate-900 flex items-center gap-2 truncate">
              Marc Fletcher, Tss Seating
              <span className="text-slate-300">•</span>
              <span className="text-[14px] font-medium text-slate-500 truncate">3D Animator for Conference Seating</span>
            </h2>
            <div className="flex items-center gap-4 text-[12px] text-slate-500 mt-1">
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                5:04 AM local time
              </span>
              <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 font-bold rounded-md border border-emerald-100">
                Interviewing
              </span>
            </div>
          </div>
          
          <div className="hidden sm:flex items-center gap-1 text-slate-400 shrink-0 ml-4">
            <button className="p-2 hover:bg-slate-100 hover:text-blue-600 rounded-lg transition-colors"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg></button>
            <button className="p-2 hover:bg-slate-100 hover:text-blue-600 rounded-lg transition-colors"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg></button>
            <div className="w-px h-6 bg-slate-200 mx-1"></div>
            <button className="p-2 hover:bg-slate-100 text-slate-600 rounded-lg transition-colors"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg></button>
          </div>
        </header>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          <div className="flex items-center gap-4 py-4">
            <div className="flex-1 h-px bg-slate-100"></div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Today</span>
            <div className="flex-1 h-px bg-slate-100"></div>
          </div>

          {/* Client Message */}
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-[12px] shrink-0">MF</div>
            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-[14px] font-bold text-slate-900">Marc Fletcher</span>
                <span className="text-[11px] text-slate-400">10:54 PM</span>
              </div>
              <div className="text-[14px] text-slate-700 leading-relaxed space-y-2">
                <p>What is your experience with making 3D models</p>
                <p>And what programs would you like to use?</p>
              </div>
            </div>
          </div>

          {/* User Message */}
          <div className="flex gap-4">
            <img src="https://ui-avatars.com/api/?name=Satish+C&background=0D8ABC&color=fff" alt="User" className="w-10 h-10 rounded-full shrink-0" />
            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-[14px] font-bold text-slate-900">Satish Chauhan</span>
                <span className="text-[11px] text-slate-400">10:59 PM</span>
              </div>
              <div className="text-[14px] text-slate-700 leading-relaxed">
                <p>I have been making 3d models since a year and i use blender to create the 3d models !!</p>
              </div>
            </div>
          </div>

          {/* Client Message */}
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-[12px] shrink-0">MF</div>
            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-[14px] font-bold text-slate-900">Marc Fletcher</span>
                <span className="text-[11px] text-slate-400">10:59 PM</span>
              </div>
              <div className="text-[14px] text-slate-700 leading-relaxed">
                <p>Alright thank you</p>
              </div>
            </div>
          </div>

          {/* User Message */}
          <div className="flex gap-4">
            <img src="https://ui-avatars.com/api/?name=Satish+C&background=0D8ABC&color=fff" alt="User" className="w-10 h-10 rounded-full shrink-0" />
            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-[14px] font-bold text-slate-900">Satish Chauhan</span>
                <span className="text-[11px] text-slate-400">11:00 PM</span>
              </div>
              <div className="text-[14px] text-slate-700 leading-relaxed">
                <p>u can have a look at my profile for some of my work !!</p>
              </div>
            </div>
          </div>

          {/* Client Message */}
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-[12px] shrink-0">MF</div>
            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-[14px] font-bold text-slate-900">Marc Fletcher</span>
                <span className="text-[11px] text-slate-400">11:00 PM</span>
              </div>
              <div className="text-[14px] text-slate-700 leading-relaxed">
                <p>Alright thank you.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Message Input Area */}
        <div className="p-4 sm:p-6 pt-0 bg-white shrink-0">
          <div className="border border-slate-200 rounded-2xl bg-[#FAFAFC] shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] focus-within:bg-white focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-500/10 transition-all overflow-hidden flex flex-col">
            
            <textarea 
              placeholder="Send a message..." 
              className="w-full bg-transparent border-none focus:ring-0 resize-none p-4 text-[14px] text-slate-800 placeholder-slate-400 min-h-[80px]"
            ></textarea>
            
            <div className="flex items-center justify-between px-4 pb-3">
              <div className="flex items-center gap-1 text-slate-400">
                <button className="p-1.5 hover:bg-slate-200 hover:text-slate-600 rounded-lg transition-colors"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg></button>
                <button className="p-1.5 hover:bg-slate-200 hover:text-slate-600 rounded-lg transition-colors"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></button>
                <button className="p-1.5 hover:bg-slate-200 hover:text-slate-600 rounded-lg transition-colors hidden sm:block"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg></button>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white text-[13px] font-bold rounded-lg shadow-sm hover:bg-blue-700 transition-colors flex items-center gap-2">
                Send
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 3. RIGHT PANEL: Contract/Client Context    */}
      {/* ========================================== */}
      <aside className="w-80 border-l border-slate-200 bg-[#FAFAFC] h-full hidden xl:flex flex-col shrink-0">
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* ProSpec Verification Widget */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm text-center">
             <div className="w-12 h-12 mx-auto bg-blue-50 border border-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
             </div>
             <h3 className="text-[14px] font-bold text-slate-900 mb-1">Verified Client</h3>
             <p className="text-[12px] text-slate-500 mb-4">Payment method and identity verified by ProSpec.</p>
             <button className="w-full py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-[12px] font-bold text-slate-700 rounded-lg transition-colors">
               View Company Profile
             </button>
          </div>

          {/* Accordion List */}
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            
            {/* Search */}
            <button className="w-full py-4 flex items-center justify-between text-[14px] font-bold text-slate-900 hover:text-blue-600 group">
              Search Messages
              <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>

            {/* Contract Status (ProSpec Custom) */}
            <div className="py-4">
              <button className="w-full flex items-center justify-between text-[14px] font-bold text-slate-900 mb-3">
                Contract Status
                <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
              </button>
              <div className="space-y-3">
                <div className="p-3 bg-white border border-slate-200 rounded-lg shadow-sm">
                  <div className="flex justify-between text-[12px] mb-1">
                    <span className="font-bold text-slate-700">Proposal</span>
                    <span className="font-bold text-amber-600">Pending</span>
                  </div>
                  <div className="text-[11px] text-slate-500">Submitted 2 days ago</div>
                </div>
                <button className="w-full py-2 bg-white border border-slate-200 text-[12px] font-bold text-blue-600 rounded-lg hover:bg-slate-50 transition-colors">
                  View Original Job Post
                </button>
              </div>
            </div>

            <button className="w-full py-4 flex items-center justify-between text-[14px] font-bold text-slate-900 hover:text-blue-600 group">
              Files and Links
              <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>

            <button className="w-full py-4 flex items-center justify-between text-[14px] font-bold text-slate-900 hover:text-blue-600 group">
              Personal Notepad
              <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
          </div>

        </div>
      </aside>

    </div>
  );
}