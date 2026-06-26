import { useState } from 'react';
import { Link } from 'react-router-dom';

// Mock data for the applicants
const applicants = [
  {
    id: 1,
    name: 'Alex M.',
    title: 'Senior Frontend Engineer',
    trustScore: 842,
    tier: 'Top 5%',
    bid: 120000,
    time: '4 Weeks',
    avatar: 'https://ui-avatars.com/api/?name=Alex+M&background=0D8ABC&color=fff',
    proposal: "Hi there, I've built three milestone-based escrow dashboards in the past year alone. I am intimately familiar with Stripe Connect and OAuth 2.0 flows. Based on your description, I can deliver the MVP within 4 weeks. I have broken down my approach into 4 distinct milestones to ensure we stay aligned on velocity.",
    completedProjects: 14,
    onTimeDelivery: '96%',
  },
  {
    id: 2,
    name: 'Rahul S.',
    title: 'Full Stack React Developer',
    trustScore: 715,
    tier: 'Top 15%',
    bid: 95000,
    time: '3 Weeks',
    avatar: 'https://ui-avatars.com/api/?name=Rahul+S&background=10B981&color=fff',
    proposal: "I have 5 years of experience with React and Tailwind CSS. I reviewed your requirements and I can definitely build this frontend for you quickly. I usually work on a fixed-price basis and have a 100% completion rate on my last 5 projects here.",
    completedProjects: 8,
    onTimeDelivery: '100%',
  },
  {
    id: 3,
    name: 'Elena K.',
    title: 'Frontend Developer',
    trustScore: 610,
    tier: 'Top 30%',
    bid: 80000,
    time: '5 Weeks',
    avatar: 'https://ui-avatars.com/api/?name=Elena+K&background=6366F1&color=fff',
    proposal: "Hello! I am a frontend developer specializing in responsive dashboards. I am very interested in your Fintech project. While I haven't worked with Stripe explicitly, I am a fast learner and have integrated several other payment gateways.",
    completedProjects: 3,
    onTimeDelivery: '85%',
  }
];

export default function ProjectProposals() {
  const [selectedApplicant, setSelectedApplicant] = useState(applicants[0]);

  return (
    <div className="p-6 sm:p-8 animate-page-in max-w-[1440px] mx-auto w-full h-[calc(100vh-73px)] flex flex-col">
      
      {/* Page Header */}
      <div className="mb-6 shrink-0">
        <Link to="/b/dashboard" className="inline-flex items-center gap-2 text-[13px] font-bold text-slate-400 hover:text-blue-600 transition-colors mb-4">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Back to Dashboard
        </Link>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-2">
              Review Proposals
            </h1>
            <p className="text-[14px] text-slate-500 font-medium">
              Project: <span className="text-slate-800 font-bold">Fintech Dashboard MVP</span>
            </p>
          </div>
          <div className="flex items-center gap-4 text-[13px] font-bold">
            <span className="px-3 py-1.5 bg-emerald-50 text-emerald-600 rounded-lg border border-emerald-100">
              Escrow Funded: ₹1,20,000
            </span>
            <span className="text-slate-500">
              12 Total Applicants
            </span>
          </div>
        </div>
      </div>

      {/* Main Dual-Pane Workspace */}
      <div className="flex-1 min-h-0 flex gap-6 lg:gap-8">
        
        {/* ========================================== */}
        {/* LEFT PANE: Applicant List (35% width)      */}
        {/* ========================================== */}
        <div className="w-full lg:w-[400px] xl:w-[450px] flex flex-col bg-white rounded-[1.5rem] border border-slate-200 shadow-sm shrink-0 overflow-hidden">
          
          <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center shrink-0">
             <h2 className="text-[14px] font-bold text-slate-900">Shortlisted (3)</h2>
             <button className="text-[13px] font-bold text-blue-600 flex items-center gap-1">
                Filter
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
             </button>
          </div>

          <div className="flex-1 overflow-y-auto divide-y divide-slate-100 p-2">
            {applicants.map((app) => (
              <button
                key={app.id}
                onClick={() => setSelectedApplicant(app)}
                className={`w-full text-left p-4 rounded-xl transition-all mb-1 ${
                  selectedApplicant.id === app.id 
                    ? 'bg-blue-50 border border-blue-200 shadow-sm' 
                    : 'bg-white border border-transparent hover:bg-slate-50'
                }`}
              >
                <div className="flex items-start gap-4">
                  <img src={app.avatar} alt={app.name} className="w-12 h-12 rounded-full shadow-sm shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className={`text-[15px] font-bold truncate ${selectedApplicant.id === app.id ? 'text-blue-900' : 'text-slate-900'}`}>
                        {app.name}
                      </h3>
                      <span className="text-[13px] font-bold text-slate-900 shrink-0">
                        ₹{app.bid.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <p className="text-[12px] text-slate-500 mb-2 truncate">{app.title}</p>
                    
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 px-2 py-0.5 bg-white border border-slate-200 rounded text-[11px] font-bold text-slate-700">
                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
                        {app.trustScore}
                      </div>
                      <span className="text-[11px] font-bold text-amber-600">{app.tier}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ========================================== */}
        {/* RIGHT PANE: Proposal Details               */}
        {/* ========================================== */}
        <div className="flex-1 bg-white rounded-[1.5rem] border border-slate-200 shadow-sm overflow-hidden flex flex-col min-w-0">
          
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
            
            {/* Header / Applicant Summary */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-b border-slate-100 pb-6">
              <div className="flex items-center gap-5">
                <img src={selectedApplicant.avatar} alt={selectedApplicant.name} className="w-16 h-16 rounded-full border-2 border-slate-100 shadow-sm" />
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-1">{selectedApplicant.name}</h2>
                  <p className="text-[14px] text-slate-500 font-medium">{selectedApplicant.title}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="px-5 py-2 bg-white border border-slate-200 text-slate-700 text-[13px] font-bold rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
                  View Full Profile
                </button>
                <button className="px-5 py-2 bg-blue-50 text-blue-700 text-[13px] font-bold rounded-lg hover:bg-blue-100 transition-colors border border-blue-100">
                  Message
                </button>
              </div>
            </div>

            {/* Core Proposal Data Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Proposed Bid</p>
                <p className="text-xl font-bold text-slate-900">₹{selectedApplicant.bid.toLocaleString('en-IN')}</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Estimated Time</p>
                <p className="text-xl font-bold text-slate-900">{selectedApplicant.time}</p>
              </div>
              <div className="p-4 bg-blue-600 rounded-xl shadow-sm col-span-2 flex items-center justify-between text-white">
                <div>
                  <p className="text-[11px] font-bold text-blue-200 uppercase tracking-wider mb-1">ProSpec Trust Score</p>
                  <div className="flex items-baseline gap-1">
                    <p className="text-2xl font-bold">{selectedApplicant.trustScore}</p>
                    <p className="text-[12px] font-medium text-blue-200">/ 1000</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[12px] font-bold text-emerald-300 mb-1">{selectedApplicant.onTimeDelivery} On-Time Rate</p>
                  <p className="text-[12px] font-medium text-blue-100">{selectedApplicant.completedProjects} Completed Projects</p>
                </div>
              </div>
            </div>

            {/* Cover Letter */}
            <div>
              <h3 className="text-[14px] font-bold text-slate-900 mb-4 uppercase tracking-wider">Cover Letter</h3>
              <p className="text-[15px] text-slate-700 leading-relaxed whitespace-pre-wrap bg-white border border-slate-100 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] p-6 rounded-2xl">
                {selectedApplicant.proposal}
              </p>
            </div>

            {/* Milestone Breakdown (Mocked) */}
            <div>
              <h3 className="text-[14px] font-bold text-slate-900 mb-4 uppercase tracking-wider">Proposed Milestones</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-4 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                  <div>
                    <p className="text-[13px] font-bold text-slate-900">1. UI Architecture & Setup</p>
                    <p className="text-[12px] text-slate-500">Week 1</p>
                  </div>
                  <span className="text-[14px] font-bold text-slate-700">₹30,000</span>
                </div>
                <div className="flex justify-between items-center p-4 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                  <div>
                    <p className="text-[13px] font-bold text-slate-900">2. Auth Integration (OAuth)</p>
                    <p className="text-[12px] text-slate-500">Week 2</p>
                  </div>
                  <span className="text-[14px] font-bold text-slate-700">₹25,000</span>
                </div>
                <div className="flex justify-between items-center p-4 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                  <div>
                    <p className="text-[13px] font-bold text-slate-900">3. Escrow Dashboard Views</p>
                    <p className="text-[12px] text-slate-500">Week 3</p>
                  </div>
                  <span className="text-[14px] font-bold text-slate-700">₹40,000</span>
                </div>
                <div className="flex justify-between items-center p-4 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                  <div>
                    <p className="text-[13px] font-bold text-slate-900">4. Final Handoff & Testing</p>
                    <p className="text-[12px] text-slate-500">Week 4</p>
                  </div>
                  <span className="text-[14px] font-bold text-slate-700">₹25,000</span>
                </div>
              </div>
            </div>

          </div>
          
          {/* Fixed Action Footer */}
          <div className="p-6 border-t border-slate-200 bg-slate-50 shrink-0 flex items-center justify-between">
            <button className="px-6 py-3 bg-white border border-slate-200 text-rose-600 text-[13px] font-bold rounded-xl hover:bg-rose-50 transition-colors shadow-sm">
              Decline Proposal
            </button>
            <button className="px-8 py-3 bg-blue-600 text-white text-[14px] font-bold rounded-xl hover:bg-blue-700 transition-all shadow-[0_4px_12px_rgba(37,99,235,0.25)] hover:shadow-[0_6px_16px_rgba(37,99,235,0.35)] hover:-translate-y-0.5 flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" /></svg>
              Hire {selectedApplicant.name.split(' ')[0]}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}