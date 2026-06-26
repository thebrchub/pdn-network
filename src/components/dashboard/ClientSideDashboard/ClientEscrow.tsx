import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ClientEscrow() {
  const [activeTab, setActiveTab] = useState('active');

  return (
    <div className="p-6 sm:p-8 animate-page-in max-w-7xl mx-auto w-full">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-2">
            Escrow & Billing
          </h1>
          <p className="text-[14px] text-slate-500 font-medium">
            Manage your secured funds, active milestones, and payment history.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 text-[13px] font-bold rounded-xl hover:bg-slate-50 transition-colors shadow-sm flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Download Statements
          </button>
          <button className="px-5 py-2.5 bg-blue-600 text-white text-[13px] font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-sm flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
            Add Funds
          </button>
        </div>
      </div>

      {/* Financial Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
             <svg className="w-16 h-16 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          </div>
          <p className="text-[13px] font-bold text-slate-400 uppercase tracking-wider mb-2 relative z-10">Total in Escrow</p>
          <p className="text-3xl font-heading font-extrabold text-slate-900 relative z-10">₹1,85,000</p>
          <p className="text-[13px] font-medium text-slate-500 mt-2 relative z-10">Across 3 active contracts</p>
        </div>
        
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
             <svg className="w-16 h-16 text-emerald-900" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <p className="text-[13px] font-bold text-slate-400 uppercase tracking-wider mb-2 relative z-10">Released This Month</p>
          <p className="text-3xl font-heading font-extrabold text-emerald-600 relative z-10">₹45,000</p>
          <p className="text-[13px] font-medium text-slate-500 mt-2 relative z-10">2 milestones approved</p>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 shadow-md relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
          <p className="text-[13px] font-bold text-slate-400 uppercase tracking-wider mb-2 relative z-10">Next Action Required</p>
          <p className="text-3xl font-heading font-extrabold relative z-10">₹25,000</p>
          <div className="mt-2 relative z-10 flex items-center justify-between">
            <span className="text-[13px] font-medium text-slate-300">Milestone pending review</span>
            <Link to="/b/messages" className="text-[12px] font-bold text-blue-400 hover:text-blue-300">Review Now</Link>
          </div>
        </div>
      </div>

      {/* Main Ledger Area */}
      <div className="bg-white rounded-[1.5rem] border border-slate-200 shadow-sm overflow-hidden">
        
        {/* Tabs */}
        <div className="flex items-center gap-8 px-6 border-b border-slate-100 bg-slate-50/50 pt-2">
          {[
            { id: 'active', label: 'Active Escrow (3)' },
            { id: 'released', label: 'Released Payments' },
            { id: 'invoices', label: 'Invoices & Receipts' },
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

        {/* Tab Content: Active Escrow */}
        {activeTab === 'active' && (
          <div className="divide-y divide-slate-100">
            
            {/* Escrow Item 1 */}
            <div className="p-6 hover:bg-slate-50/50 transition-colors">
              <div className="flex flex-col lg:flex-row justify-between gap-6">
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-wider rounded border border-blue-100">
                      Funded
                    </span>
                    <span className="text-[13px] font-bold text-slate-500">Milestone 2 of 4</span>
                  </div>
                  <h3 className="text-[16px] font-bold text-slate-900 mb-1">Auth Integration (OAuth 2.0)</h3>
                  <p className="text-[13px] text-slate-500 mb-3">Project: <Link to="#" className="font-bold text-slate-700 hover:text-blue-600">Fintech Dashboard MVP</Link></p>
                  
                  <div className="flex items-center gap-2">
                    <img src="https://ui-avatars.com/api/?name=Alex+M&background=0D8ABC&color=fff" alt="Alex" className="w-6 h-6 rounded-full" />
                    <span className="text-[13px] font-medium text-slate-700">Alex M.</span>
                  </div>
                </div>

                <div className="lg:w-64 flex flex-col justify-between shrink-0">
                  <div className="text-left lg:text-right mb-4 lg:mb-0">
                    <p className="text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-1">Escrow Amount</p>
                    <p className="text-2xl font-black text-slate-900">₹25,000</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 py-2 bg-white border border-slate-200 text-slate-700 text-[13px] font-bold rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
                      Dispute
                    </button>
                    <button className="flex-1 py-2 bg-blue-600 text-white text-[13px] font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-sm relative">
                      <span className="absolute -top-1 -right-1 w-3 h-3 bg-rose-500 border-2 border-white rounded-full"></span>
                      Review
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Escrow Item 2 */}
            <div className="p-6 hover:bg-slate-50/50 transition-colors">
              <div className="flex flex-col lg:flex-row justify-between gap-6">
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-wider rounded border border-blue-100">
                      Funded
                    </span>
                    <span className="text-[13px] font-bold text-slate-500">Milestone 3 of 4</span>
                  </div>
                  <h3 className="text-[16px] font-bold text-slate-900 mb-1">Escrow Dashboard Views</h3>
                  <p className="text-[13px] text-slate-500 mb-3">Project: <Link to="#" className="font-bold text-slate-700 hover:text-blue-600">Fintech Dashboard MVP</Link></p>
                  
                  <div className="flex items-center gap-2">
                    <img src="https://ui-avatars.com/api/?name=Alex+M&background=0D8ABC&color=fff" alt="Alex" className="w-6 h-6 rounded-full" />
                    <span className="text-[13px] font-medium text-slate-700">Alex M.</span>
                  </div>
                </div>

                <div className="lg:w-64 flex flex-col justify-between shrink-0">
                  <div className="text-left lg:text-right mb-4 lg:mb-0">
                    <p className="text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-1">Escrow Amount</p>
                    <p className="text-2xl font-black text-slate-900">₹40,000</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="w-full py-2 bg-slate-100 text-slate-400 text-[13px] font-bold rounded-lg cursor-not-allowed">
                      Awaiting Submission
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Escrow Item 3 */}
            <div className="p-6 hover:bg-slate-50/50 transition-colors">
              <div className="flex flex-col lg:flex-row justify-between gap-6">
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-[11px] font-bold uppercase tracking-wider rounded border border-emerald-100">
                      Verified & Funded
                    </span>
                    <span className="text-[13px] font-bold text-slate-500">Fixed Project</span>
                  </div>
                  <h3 className="text-[16px] font-bold text-slate-900 mb-1">B2B Dashboard Redesign</h3>
                  <p className="text-[13px] text-slate-500 mb-3">Project: <Link to="#" className="font-bold text-slate-700 hover:text-blue-600">Website Redesign</Link></p>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-[10px]">
                      KD
                    </div>
                    <span className="text-[13px] font-medium text-slate-700">Karen D.</span>
                  </div>
                </div>

                <div className="lg:w-64 flex flex-col justify-between shrink-0">
                  <div className="text-left lg:text-right mb-4 lg:mb-0">
                    <p className="text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-1">Escrow Amount</p>
                    <p className="text-2xl font-black text-slate-900">₹65,000</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="w-full py-2 bg-slate-100 text-slate-400 text-[13px] font-bold rounded-lg cursor-not-allowed">
                      Awaiting Submission
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
          )}

          {activeTab === 'released' && (
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="pb-3 text-[12px] font-bold text-slate-400 uppercase tracking-wider">Date</th>
                    <th className="pb-3 text-[12px] font-bold text-slate-400 uppercase tracking-wider">Project / Milestone</th>
                    <th className="pb-3 text-[12px] font-bold text-slate-400 uppercase tracking-wider">Professional</th>
                    <th className="pb-3 text-[12px] font-bold text-slate-400 uppercase tracking-wider text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-4 text-[13px] font-medium text-slate-900">Oct 12, 2026</td>
                    <td className="py-4 text-[13px] font-medium text-slate-900">Auth Integration <span className="text-slate-500 block text-[11px]">Milestone 1</span></td>
                    <td className="py-4 text-[13px] font-medium text-slate-700">Alex M.</td>
                    <td className="py-4 text-[14px] font-bold text-slate-900 text-right">₹15,000</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-[13px] font-medium text-slate-900">Sep 28, 2026</td>
                    <td className="py-4 text-[13px] font-medium text-slate-900">Backend API Migration <span className="text-slate-500 block text-[11px]">Final Payment</span></td>
                    <td className="py-4 text-[13px] font-medium text-slate-700">Rahul S.</td>
                    <td className="py-4 text-[14px] font-bold text-slate-900 text-right">₹12,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab Content: Invoices & Receipts */}
        {activeTab === 'invoices' && (
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { id: 'INV-2026-042', date: 'Oct 12, 2026', amount: '₹15,000', status: 'Paid' },
                { id: 'INV-2026-038', date: 'Sep 28, 2026', amount: '₹12,000', status: 'Paid' },
                { id: 'INV-2026-031', date: 'Sep 01, 2026', amount: '₹25,000', status: 'Paid' },
              ].map((invoice) => (
                <div key={invoice.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-xl hover:border-blue-300 transition-colors bg-slate-50/50">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-slate-900 mb-0.5">{invoice.id}</p>
                      <p className="text-[12px] text-slate-500">{invoice.date} &bull; <span className="text-emerald-600 font-medium">{invoice.status}</span></p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[14px] font-bold text-slate-900">{invoice.amount}</span>
                    <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}


      </div>
    </div>
  );
}