import { useState } from 'react';
import { createPortal } from 'react-dom'; // <-- ADD THIS
// import { Link } from 'react-router-dom'; // (Assuming you have Link here)

interface Opportunity {
  id: number;
  title: string;
  client: string;
  clientRating: number;
  budget: string;
  escrowReady: boolean;
  trustReq: number;
  matchPct: number;
  timeline: string;
  postedTime: string;
  description: string;
  skills: string[];
}

export default function Opportunities() {
  const [activeTab, setActiveTab] = useState<'recommended' | 'trending' | 'invitations' | 'saved' | 'applied'>('recommended');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOpportunity, setSelectedOpportunity] = useState<Opportunity | null>(null);
  const [appliedJobs, setAppliedJobs] = useState<number[]>([]);
  const [savedJobs, setSavedJobs] = useState<number[]>([3]);

  const allOpportunities: Opportunity[] = [
    {
      id: 1,
      title: "Senior React Developer for Fintech Escrow Dashboard",
      client: "Stripe India Pvt Ltd",
      clientRating: 4.9,
      budget: "₹1,20,000",
      escrowReady: true,
      trustReq: 750,
      matchPct: 98,
      timeline: "4 Weeks",
      postedTime: "2 hours ago",
      description: "We are looking for an experienced React developer to build out the frontend of our new milestone-based escrow platform. You will be working directly with our backend team to integrate OAuth and Stripe APIs. Must have experience with Tailwind CSS, Redux, and high-fidelity dashboard layouts.",
      skills: ["React.js", "TypeScript", "Tailwind CSS", "Stripe API"]
    },
    {
      id: 2,
      title: "UI/UX Designer for B2B Dashboard Redesign",
      client: "DataSync Corp",
      clientRating: 4.8,
      budget: "₹65,000",
      escrowReady: true,
      trustReq: 600,
      matchPct: 92,
      timeline: "2 Weeks",
      postedTime: "5 hours ago",
      description: "Need a clean, modern, and skeuomorphic-lite redesign of our internal reporting dashboard. We have the wireframes ready, just need high-fidelity Figma files and a clickable prototype. Experience in Fintech or SaaS layouts is highly preferred.",
      skills: ["Figma", "UI/UX Design", "Prototyping", "SaaS UI"]
    },
    {
      id: 3,
      title: "3D Modeler for Conference Seating Animation",
      client: "TSS Seating Solutions",
      clientRating: 4.7,
      budget: "₹45,000",
      escrowReady: false,
      trustReq: 500,
      matchPct: 85,
      timeline: "10 Days",
      postedTime: "Yesterday",
      description: "Looking for an artist to create realistic Blender renderings of office and conference hall chairs. The models should be optimized for a web-based 3D configuration tool. High-quality lighting setups are key.",
      skills: ["Blender", "3D Modeling", "Texturing", "Lighting"]
    },
    {
      id: 4,
      title: "Next.js Web Developer for Web3 Trust Platform",
      client: "TrustBlock Inc",
      clientRating: 5.0,
      budget: "₹1,80,000",
      escrowReady: true,
      trustReq: 800,
      matchPct: 95,
      timeline: "6 Weeks",
      postedTime: "1 day ago",
      description: "Build an interactive platform visualizing organizational credibility metrics. You will consume GraphQL endpoints and render real-time reputation change streams. Requires high performance and solid clean architecture practices.",
      skills: ["Next.js", "GraphQL", "Tailwind CSS", "TypeScript"]
    }
  ];

  // Filters based on tabs
  const getFilteredOpportunities = () => {
    let list = allOpportunities;

    // Search filter
    if (searchQuery.trim()) {
      list = list.filter(o =>
        o.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        o.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        o.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    switch (activeTab) {
      case 'trending':
        return list.filter(o => o.matchPct >= 90);
      case 'invitations':
        return [list[0]]; // Mocked invite
      case 'saved':
        return list.filter(o => savedJobs.includes(o.id));
      case 'applied':
        return list.filter(o => appliedJobs.includes(o.id));
      case 'recommended':
      default:
        return list;
    }
  };

  const handleApply = (id: number) => {
    if (!appliedJobs.includes(id)) {
      setAppliedJobs([...appliedJobs, id]);
    }
    setSelectedOpportunity(null);
  };

  const toggleSave = (id: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (savedJobs.includes(id)) {
      setSavedJobs(savedJobs.filter(item => item !== id));
    } else {
      setSavedJobs([...savedJobs, id]);
    }
  };

  const filteredList = getFilteredOpportunities();

  return (
    // Removed max-width to allow fluid edge-to-edge layout
    <div className="w-full h-full p-6 sm:p-8 animate-page-in font-sans">

      {/* Page Header & Stats */}
      <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-2">
            Opportunities
          </h1>
          <p className="text-[14px] text-slate-500 font-medium">
            Discover projects curated for your skills and verified trust history.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 sm:gap-4 text-xs font-bold text-slate-400 shrink-0">
          <div className="bg-white border border-slate-200 px-4 py-2.5 rounded-xl shadow-sm text-center min-w-[120px]">
            <span className="block text-[10px] uppercase tracking-wider text-slate-400">Total Matches</span>
            <span className="text-[16px] text-slate-900 font-extrabold mt-0.5 block">14 Active</span>
          </div>
          <div className="bg-white border border-slate-200 px-4 py-2.5 rounded-xl shadow-sm text-center min-w-[120px]">
            <span className="block text-[10px] uppercase tracking-wider text-slate-400">Invitations</span>
            <span className="text-[16px] text-blue-600 font-extrabold mt-0.5 block">1 Pending</span>
          </div>
        </div>
      </div>

      {/* Controls: Pill Tabs & Search */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-8">

        {/* Pill Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar bg-slate-100/80 p-1.5 rounded-xl w-max border border-slate-200/50">
          {[
            { id: 'recommended', label: 'Recommended' },
            { id: 'trending', label: 'High Match' },
            { id: 'invitations', label: 'Invitations' },
            { id: 'saved', label: 'Saved' },
            { id: 'applied', label: 'Applied' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2 text-[13px] font-bold rounded-lg transition-all whitespace-nowrap outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${activeTab === tab.id
                ? 'bg-white text-slate-900 shadow-sm border border-slate-200/60'
                : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/50 border border-transparent'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-white border border-slate-200 rounded-xl px-4 py-2 focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-500/10 transition-all w-full xl:w-80 shadow-sm">
          <svg className="w-5 h-5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <input
            type="text"
            placeholder="Search projects or skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent border-none focus:outline-none focus:ring-0 text-[13px] font-bold text-slate-800 placeholder-slate-400 px-3 py-1"
          />
        </div>

      </div>

      {/* Main List: Changed to a 2-Column Grid on large screens to fill the void */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {filteredList.length > 0 ? (
          filteredList.map((op) => (
            <div
              key={op.id}
              onClick={() => setSelectedOpportunity(op)}
              className="group bg-white border border-slate-200 hover:border-blue-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-2xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between gap-6 h-full"
            >

              {/* Top: Info */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider border border-blue-100">
                    {op.matchPct}% Match
                  </span>
                  {op.escrowReady && (
                    <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider border border-emerald-100">
                      Escrow Ready
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider border border-slate-200">
                    Trust: {op.trustReq}+
                  </span>
                </div>

                <div>
                  <h3 className="text-[16px] font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">{op.title}</h3>
                  <p className="text-[13px] text-slate-500 mt-1.5 font-medium">Posted by <span className="font-bold text-slate-700">{op.client}</span> • ★ {op.clientRating.toFixed(1)}</p>
                </div>

                <p className="text-[13px] text-slate-600 leading-relaxed font-medium line-clamp-2">{op.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {op.skills.map((skill, i) => (
                    <span key={i} className="px-2.5 py-1 bg-slate-50 border border-slate-100 text-slate-600 text-[11px] font-bold rounded-lg">{skill}</span>
                  ))}
                </div>
              </div>

              {/* Bottom: Action & Budget */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-100 pt-5 mt-auto">
                <div>
                  <span className="text-[18px] font-black text-slate-900 block">{op.budget}</span>
                  <span className="text-slate-400 text-[11px] font-bold uppercase tracking-wider">{op.timeline} • {op.postedTime}</span>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={(e) => toggleSave(op.id, e)}
                    className={`w-11 h-11 shrink-0 rounded-xl border flex items-center justify-center transition-all outline-none focus-visible:ring-2 focus-visible:ring-slate-400 ${savedJobs.includes(op.id)
                      ? 'bg-rose-50 text-rose-500 border-rose-200 hover:bg-white'
                      : 'bg-white text-slate-400 border-slate-200 hover:text-rose-500 hover:border-rose-200 hover:bg-rose-50'
                      }`}
                  >
                    <svg className="w-5 h-5" fill={savedJobs.includes(op.id) ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                  </button>
                  <button className="flex-1 sm:flex-none px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-[13px] font-bold rounded-xl shadow-sm transition-colors text-center outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900">
                    {appliedJobs.includes(op.id) ? 'Applied' : 'Apply Now'}
                  </button>
                </div>
              </div>

            </div>
          ))
        ) : (
          <div className="col-span-full bg-slate-50 border border-slate-200 border-dashed rounded-2xl p-12 text-center flex flex-col items-center justify-center min-h-[300px]">
            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <p className="text-[14px] font-bold text-slate-700">No opportunities found</p>
            <p className="text-[13px] text-slate-500 mt-1">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </div>

      {/* Opportunity Details Slideover/Modal Panel */}
      {selectedOpportunity && createPortal(
        <div className="fixed inset-0 z-[60] overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
          <div className="absolute inset-0 overflow-hidden">
            {/* Backdrop */}
            <div
              onClick={() => setSelectedOpportunity(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity animate-in fade-in"
            />

            {/* Slideover Container */}
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <div className="pointer-events-auto w-screen max-w-2xl transform transition-all duration-300 ease-in-out animate-in slide-in-from-right">

                {/* Changed to remove overflow from parent, isolating it to the body */}
                <div className="flex h-full flex-col bg-white shadow-2xl">

                  {/* Slideover Header (Pinned Top) */}
                  <div className="bg-slate-50 px-6 sm:px-8 py-6 border-b border-slate-200 flex items-center justify-between shrink-0">
                    <div>
                      <h2 className="text-[18px] font-extrabold text-slate-900" id="slide-over-title">Opportunity Details</h2>
                      <p className="mt-1 text-[13px] text-slate-500 font-medium">Review requirement profile before submitting proposal.</p>
                    </div>
                    <button
                      onClick={() => setSelectedOpportunity(null)}
                      className="rounded-lg p-2 text-slate-400 hover:bg-slate-200 hover:text-slate-700 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                  </div>

                  {/* Slideover Body (Scrollable Middle) */}
                  <div className="flex-1 overflow-y-auto py-8 px-6 sm:px-8 space-y-8">
                    <div>
                      <span className="bg-blue-50 border border-blue-100 text-blue-700 px-3 py-1 rounded-md text-[11px] font-extrabold uppercase tracking-wider">
                        {selectedOpportunity.matchPct}% Match Profile
                      </span>
                      <h2 className="text-[24px] font-extrabold text-slate-900 mt-4 leading-tight">{selectedOpportunity.title}</h2>
                      <p className="text-slate-500 text-[14px] mt-2 font-medium">Posted by <span className="text-slate-900 font-bold">{selectedOpportunity.client}</span> • ★ {selectedOpportunity.clientRating}</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center">
                      <div>
                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Budget</span>
                        <span className="text-[16px] font-black text-slate-900 block mt-1">{selectedOpportunity.budget}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Timeline</span>
                        <span className="text-[16px] font-black text-slate-900 block mt-1">{selectedOpportunity.timeline}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Trust Level</span>
                        <span className="text-[16px] font-black text-blue-600 block mt-1">{selectedOpportunity.trustReq}+</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Guarantee</span>
                        <span className="text-[16px] font-black text-emerald-600 block mt-1">{selectedOpportunity.escrowReady ? 'Ready' : 'Vetted'}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-[13px] font-bold text-slate-400 uppercase tracking-wider">Scope of Work</h4>
                      <p className="text-[14px] text-slate-700 leading-relaxed font-medium whitespace-pre-line">{selectedOpportunity.description}</p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-[13px] font-bold text-slate-400 uppercase tracking-wider">Required Competencies</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedOpportunity.skills.map((skill, i) => (
                          <span key={i} className="px-4 py-2 bg-slate-100 text-slate-700 text-[12px] font-bold rounded-xl">{skill}</span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4 pt-6 border-t border-slate-100">
                      <h4 className="text-[13px] font-bold text-slate-400 uppercase tracking-wider">Trust Metrics Agreement</h4>
                      <ul className="text-[13px] font-bold text-slate-600 space-y-3">
                        <li className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                          </div>
                          Success yields <span className="text-emerald-600">+12 Trust Score</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                          </div>
                          Funds deposited in secure escrow prior to start
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                          </div>
                          Late delivery reduces score by <span className="text-rose-500">-5 Trust Score</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Slideover Footer (Pinned Bottom) */}
                  <div className="bg-slate-50 border-t border-slate-200 px-6 sm:px-8 py-5 flex items-center justify-end gap-3 shrink-0">
                    <button
                      onClick={() => setSelectedOpportunity(null)}
                      className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 text-[13px] font-bold rounded-xl hover:bg-slate-100 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleApply(selectedOpportunity.id)}
                      className="px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-[13px] font-bold rounded-xl shadow-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
                    >
                      {appliedJobs.includes(selectedOpportunity.id) ? 'Already Applied' : 'Submit Proposal'}
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body // <-- This is what "teleports" it!
      )}

    </div>
  );
}