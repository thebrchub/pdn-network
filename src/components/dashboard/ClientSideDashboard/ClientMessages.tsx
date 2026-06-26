import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ClientMessages() {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    // Fills the exact height of the layout container
    <div className="h-[calc(100vh-73px)] w-full bg-white flex overflow-hidden animate-page-in">
      
      {/* ========================================== */}
      {/* 1. LEFT PANEL: Inbox List                  */}
      {/* ========================================== */}
      <aside className="w-full sm:w-80 lg:w-[340px] flex-shrink-0 border-r border-slate-200 flex flex-col bg-[#FAFAFC] h-full z-20">
        
        {/* Inbox Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 bg-white shrink-0">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">Messages</h1>
            <button className="p-1.5 hover:bg-slate-100 text-slate-400 hover:text-slate-600 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
            </button>
          </div>
          
          {/* Filters */}
          <div className="flex items-center gap-2">
            {['All', 'Unread', 'Active Contracts'].map(filter => (
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
              <div className="relative shrink-0">
                <img src="https://ui-avatars.com/api/?name=Alex+M&background=0D8ABC&color=fff" alt="Alex" className="w-10 h-10 rounded-full shadow-sm" />
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-0.5">
                  <h3 className="text-[14px] font-bold text-slate-900 truncate pr-2">Alex M.</h3>
                  <span className="text-[11px] font-bold text-blue-600 shrink-0">11:01 PM</span>
                </div>
                <p className="text-[12px] font-bold text-slate-700 truncate mb-1">Fintech Dashboard MVP</p>
                <p className="text-[13px] text-slate-600 truncate">Alex: I just pushed the final OAuth updates.</p>
              </div>
            </div>
          </div>

          {/* Read Thread 1 */}
          <div className="p-4 border-b border-slate-100 hover:bg-white transition-colors cursor-pointer group">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[12px] shrink-0">
                KD
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-0.5">
                  <h3 className="text-[14px] font-bold text-slate-700 group-hover:text-slate-900 truncate pr-2">Karen D.</h3>
                  <span className="text-[11px] text-slate-400 shrink-0">Yesterday</span>
                </div>
                <p className="text-[12px] font-medium text-slate-500 truncate mb-1">Website Redesign (Proposal)</p>
                <p className="text-[13px] text-slate-500 truncate">You: Let's jump on a quick call tomorrow.</p>
              </div>
            </div>
          </div>
          
          {/* Read Thread 2 */}
          <div className="p-4 border-b border-slate-100 hover:bg-white transition-colors cursor-pointer group">
            <div className="flex items-start gap-3">
               <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-[12px] shrink-0">
                 RS
               </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-0.5">
                  <h3 className="text-[14px] font-bold text-slate-700 group-hover:text-slate-900 truncate pr-2">Rahul S.</h3>
                  <span className="text-[11px] text-slate-400 shrink-0">Mon</span>
                </div>
                <p className="text-[12px] font-medium text-slate-500 truncate mb-1">Mobile App Development</p>
                <p className="text-[13px] text-slate-500 truncate">Rahul: Yes, I can adjust the timeline.</p>
              </div>
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
              Alex M.
              <span className="text-slate-300">•</span>
              <span className="text-[14px] font-medium text-slate-500 truncate">Fintech Dashboard MVP</span>
            </h2>
            <div className="flex items-center gap-4 text-[12px] text-slate-500 mt-1">
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8"/></svg>
                Online
              </span>
              <span className="px-2 py-0.5 bg-blue-50 text-blue-600 font-bold rounded-md border border-blue-100">
                Active Contract
              </span>
            </div>
          </div>
          
          <div className="hidden sm:flex items-center gap-2 shrink-0 ml-4">
             <button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 font-bold rounded-lg hover:bg-slate-50 transition-colors text-[13px] shadow-sm">
                Schedule Meeting
             </button>
          </div>
        </header>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          <div className="flex items-center gap-4 py-4">
            <div className="flex-1 h-px bg-slate-100"></div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Today</span>
            <div className="flex-1 h-px bg-slate-100"></div>
          </div>

          {/* User (Client) Message */}
          <div className="flex gap-4 flex-row-reverse">
            <div className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-[12px] shrink-0">AL</div>
            <div className="text-right">
              <div className="flex items-baseline justify-end gap-2 mb-1">
                <span className="text-[11px] text-slate-400">10:54 PM</span>
                <span className="text-[14px] font-bold text-slate-900">You</span>
              </div>
              <div className="text-[14px] text-slate-700 bg-slate-50 border border-slate-100 p-3 rounded-2xl rounded-tr-none leading-relaxed inline-block text-left">
                <p>Hey Alex, how is the OAuth integration coming along? We need to review it before the end of the day.</p>
              </div>
            </div>
          </div>

          {/* Freelancer Message */}
          <div className="flex gap-4">
            <img src="https://ui-avatars.com/api/?name=Alex+M&background=0D8ABC&color=fff" alt="Alex" className="w-10 h-10 rounded-full shrink-0" />
            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-[14px] font-bold text-slate-900">Alex M.</span>
                <span className="text-[11px] text-slate-400">10:59 PM</span>
              </div>
              <div className="text-[14px] text-slate-700 leading-relaxed">
                <p>Hi! Yes, I just finished testing the Google and Apple providers. Everything is routing perfectly to the backend.</p>
              </div>
            </div>
          </div>

          {/* Freelancer System Message (Milestone Submission) */}
          <div className="flex gap-4 my-8">
             <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
             </div>
             <div className="flex-1 bg-white border border-blue-100 shadow-[0_4px_15px_-5px_rgba(37,99,235,0.1)] rounded-2xl p-5">
                <div className="flex justify-between items-start mb-2">
                   <div>
                      <h4 className="text-[14px] font-bold text-slate-900">Milestone 2 Submitted for Review</h4>
                      <p className="text-[13px] text-slate-500 mt-0.5">Auth Integration (OAuth 2.0)</p>
                   </div>
                   <span className="text-[14px] font-bold text-blue-600">₹25,000</span>
                </div>
                <p className="text-[13px] text-slate-600 mb-4 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  "I just pushed the final OAuth updates to the staging branch. You can review the live preview at the link provided in the repo."
                </p>
                <div className="flex gap-3">
                   <button className="px-4 py-2 bg-blue-600 text-white text-[13px] font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
                      Review & Release Payment
                   </button>
                   <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 text-[13px] font-bold rounded-lg hover:bg-slate-50 transition-colors">
                      Request Changes
                   </button>
                </div>
             </div>
          </div>

        </div>

        {/* Message Input Area */}
        <div className="p-4 sm:p-6 pt-0 bg-white shrink-0">
          <div className="border border-slate-200 rounded-2xl bg-[#FAFAFC] shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] focus-within:bg-white focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-500/10 transition-all overflow-hidden flex flex-col">
            
            <textarea 
              placeholder="Send a message to Alex..." 
              className="w-full bg-transparent border-none focus:ring-0 resize-none p-4 text-[14px] text-slate-800 placeholder-slate-400 min-h-[80px]"
            ></textarea>
            
            <div className="flex items-center justify-between px-4 pb-3">
              <div className="flex items-center gap-1 text-slate-400">
                <button className="p-1.5 hover:bg-slate-200 hover:text-slate-600 rounded-lg transition-colors"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg></button>
                <button className="p-1.5 hover:bg-slate-200 hover:text-slate-600 rounded-lg transition-colors"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></button>
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
      {/* 3. RIGHT PANEL: Freelancer Context         */}
      {/* ========================================== */}
      <aside className="w-80 border-l border-slate-200 bg-[#FAFAFC] h-full hidden xl:flex flex-col shrink-0">
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Freelancer Profile Snippet */}
          <div className="text-center">
            <img src="https://ui-avatars.com/api/?name=Alex+M&background=0D8ABC&color=fff" alt="Alex" className="w-20 h-20 rounded-full mx-auto shadow-md border-2 border-white mb-3" />
            <h3 className="text-[16px] font-bold text-slate-900">Alex M.</h3>
            <p className="text-[13px] text-slate-500 mb-4">Senior Frontend Engineer</p>
            
            <div className="flex justify-center mb-4">
               <div className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-100 rounded-lg">
                 <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
                 <span className="text-[12px] font-bold text-blue-700">Trust Score: 98/100</span>
               </div>
            </div>

            <Link to="#" className="text-[13px] font-bold text-blue-600 hover:underline">View Full Profile</Link>
          </div>

          <div className="h-px bg-slate-200 w-full"></div>

          {/* Active Contract Details */}
          <div>
             <h4 className="text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-4">Current Contract</h4>
             
             <div className="space-y-4">
                <div>
                   <p className="text-[12px] text-slate-500 mb-1">Project Name</p>
                   <p className="text-[14px] font-bold text-slate-900 leading-tight">Fintech Dashboard MVP</p>
                </div>
                
                <div className="flex justify-between items-center">
                   <div>
                      <p className="text-[12px] text-slate-500 mb-1">Escrow Funded</p>
                      <p className="text-[14px] font-bold text-slate-900">₹85,000</p>
                   </div>
                   <div className="text-right">
                      <p className="text-[12px] text-slate-500 mb-1">Hourly Rate</p>
                      <p className="text-[14px] font-bold text-slate-900">₹1,500/hr</p>
                   </div>
                </div>

                <div className="pt-2">
                   <p className="text-[12px] font-bold text-slate-900 mb-2">Milestone Progress (2/4)</p>
                   <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: '50%' }}></div>
                   </div>
                </div>
             </div>
          </div>

          {/* Quick Actions */}
          <div className="pt-2">
             <button className="w-full py-2.5 bg-white border border-slate-200 text-[13px] font-bold text-slate-700 rounded-xl hover:bg-slate-50 transition-colors shadow-sm mb-3">
               Add Bonus
             </button>
             <button className="w-full py-2.5 bg-white border border-slate-200 text-[13px] font-bold text-slate-700 rounded-xl hover:bg-slate-50 transition-colors shadow-sm text-rose-600">
               End Contract
             </button>
          </div>

        </div>
      </aside>

    </div>
  );
}