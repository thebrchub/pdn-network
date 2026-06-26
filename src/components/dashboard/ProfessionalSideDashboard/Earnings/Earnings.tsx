import { useState } from 'react';

interface Transaction {
  id: string;
  client: string;
  project: string;
  amount: string;
  date: string;
  status: 'released' | 'escrowed' | 'processing';
}

export default function Earnings() {
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [withdrawStatus, setWithdrawStatus] = useState<'idle' | 'success'>('idle');

  const balances = {
    available: "₹32,000",
    pending: "₹75,000",
    escrow: "₹1,20,000",
    lifetime: "₹9,80,000"
  };

  const chartData = [
    { month: 'Jan', amount: 85000 },
    { month: 'Feb', amount: 110000 },
    { month: 'Mar', amount: 95000 },
    { month: 'Apr', amount: 145000 },
    { month: 'May', amount: 130000 },
    { month: 'Jun', amount: 180000 }
  ];

  const transactions: Transaction[] = [
    { id: "INV-2026-004", client: "Stripe India", project: "Frontend Dashboard MVP", amount: "₹1,20,000", date: "Today", status: "escrowed" },
    { id: "INV-2026-003", client: "Zeta Inc", project: "Dashboard UI System", amount: "₹75,000", date: "Jun 24, 2026", status: "released" },
    { id: "INV-2026-002", client: "TSS Seating Solutions", project: "3D Animation Rendering", amount: "₹45,000", date: "Jun 20, 2026", status: "released" },
    { id: "INV-2026-001", client: "Alex Carter Design", project: "Portfolio Prototyping", amount: "₹35,000", date: "Jun 10, 2026", status: "processing" }
  ];

  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault();
    if (!withdrawAmount || isNaN(Number(withdrawAmount))) return;
    setWithdrawStatus('success');
    setTimeout(() => {
      setWithdrawStatus('idle');
      setWithdrawAmount('');
    }, 3000);
  };

  const maxVal = Math.max(...chartData.map(d => d.amount));

  return (
    <div className="w-full h-full p-6 sm:p-8 overflow-y-auto font-sans animate-page-in">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Earnings & Ledger</h1>
          <p className="text-slate-500 text-sm mt-1 font-medium">Track your revenue, configure payouts, and manage escrows.</p>
        </div>
        <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 px-4 py-2 rounded-2xl shadow-sm text-[13px] font-bold">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          PAN / GST Compliant
        </div>
      </div>

      {/* Balances Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        
        {/* Available */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm flex flex-col justify-between group hover:border-blue-500/50 hover:shadow-md transition-all duration-300">
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Available for Payout</span>
            <span className="text-3xl font-extrabold text-slate-800 tracking-tight block mt-2">{balances.available}</span>
          </div>
          <span className="text-xs text-blue-600 font-bold block mt-4 group-hover:translate-x-0.5 transition-transform cursor-pointer">Configure withdrawal options →</span>
        </div>

        {/* Pending */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm flex flex-col justify-between group hover:border-blue-500/50 hover:shadow-md transition-all duration-300">
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Pending Release</span>
            <span className="text-3xl font-extrabold text-slate-800 tracking-tight block mt-2">{balances.pending}</span>
          </div>
          <span className="text-xs text-slate-400 font-semibold block mt-4">Awaiting client signature</span>
        </div>

        {/* Escrow */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm flex flex-col justify-between group hover:border-blue-500/50 hover:shadow-md transition-all duration-300">
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Escrow Guaranteed</span>
            <span className="text-3xl font-extrabold text-slate-800 tracking-tight block mt-2">{balances.escrow}</span>
          </div>
          <span className="text-xs text-slate-400 font-semibold block mt-4">Funds locked in smart contract</span>
        </div>

        {/* Lifetime */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm flex flex-col justify-between group hover:border-blue-500/50 hover:shadow-md transition-all duration-300">
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Lifetime Earnings</span>
            <span className="text-3xl font-extrabold text-emerald-600 tracking-tight block mt-2">{balances.lifetime}</span>
          </div>
          <span className="text-xs text-slate-400 font-semibold block mt-4">Calculated from 18 completed milestones</span>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
        
        {/* Monthly Earnings Chart */}
        <div className="lg:col-span-8 bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-[16px] font-extrabold text-slate-800 tracking-tight">Earnings Analytics</h3>
              <p className="text-[12px] text-slate-400 font-semibold mt-0.5">Historical revenue statistics over the last 6 months.</p>
            </div>
            <span className="text-xs font-bold text-slate-400 bg-slate-50 border border-slate-100 px-3 py-1 rounded-xl">Last 30 Days: +₹1,80,000</span>
          </div>

          {/* HTML Bar Chart representation */}
          <div className="flex items-end justify-between h-64 pt-6 px-4">
            {chartData.map((data, index) => {
              const pct = (data.amount / maxVal) * 100;
              return (
                <div key={index} className="flex flex-col items-center gap-2 group w-full max-w-[60px]">
                  <div className="w-full bg-slate-50 hover:bg-slate-100/80 rounded-t-xl transition-all duration-300 relative flex items-end h-48 border border-slate-100/50 overflow-hidden">
                    <div 
                      className="w-full bg-gradient-to-t from-blue-500 to-indigo-600 rounded-t-lg group-hover:opacity-90 transition-all duration-500 shadow-md"
                      style={{ height: `${pct}%` }}
                    />
                    {/* Tooltip */}
                    <div className="absolute opacity-0 group-hover:opacity-100 bottom-full left-1/2 transform -translate-x-1/2 -translate-y-1 bg-slate-900 text-white text-[11px] font-bold py-1 px-2.5 rounded-lg pointer-events-none whitespace-nowrap shadow-lg transition-opacity duration-300">
                      ₹{(data.amount / 1000).toFixed(0)}k
                    </div>
                  </div>
                  <span className="text-[12px] font-bold text-slate-500">{data.month}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Withdrawal Panel */}
        <div className="lg:col-span-4 bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <h3 className="text-[16px] font-extrabold text-slate-800 tracking-tight">Withdraw Funds</h3>
              <p className="text-[12px] text-slate-400 font-semibold mt-0.5">Transfer your available balance to your verified bank account.</p>
            </div>

            <form onSubmit={handleWithdraw} className="space-y-4">
              <div>
                <label className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1.5">Amount (INR)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 font-bold text-[14px]">₹</span>
                  <input 
                    type="text" 
                    placeholder="Enter amount (e.g. 15,000)" 
                    value={withdrawAmount}
                    onChange={(e) => setWithdrawAmount(e.target.value)}
                    className="w-full bg-[#FAFAFC] border border-slate-200/85 focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 rounded-2xl pl-8 pr-4 py-2.5 text-[14px] font-bold text-slate-800 placeholder-slate-400 transition-all outline-none"
                  />
                </div>
              </div>

              {withdrawStatus === 'success' && (
                <div className="p-3 bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold rounded-2xl flex items-center gap-2">
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" /></svg>
                  Withdrawal initiated! Funds will arrive in 2-4 hours.
                </div>
              )}

              <button 
                type="submit"
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-[13px] font-bold rounded-xl shadow-sm transition-colors text-center"
              >
                Execute Payout
              </button>
            </form>
          </div>

          <div className="mt-6 border-t border-slate-100 pt-4 space-y-2 text-[11px] text-slate-400 font-medium">
            <div className="flex justify-between">
              <span>Primary Bank</span>
              <span className="text-slate-700 font-bold">HDFC Bank (•••• 4920)</span>
            </div>
            <div className="flex justify-between">
              <span>Routing Code</span>
              <span className="text-slate-700 font-bold">HDFC0000214</span>
            </div>
            <div className="flex justify-between">
              <span>Withdrawal Limit</span>
              <span className="text-slate-700 font-bold">₹5,00,000 Daily</span>
            </div>
          </div>
        </div>

      </div>

      {/* Transaction History Ledger */}
      <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm overflow-hidden">
        <h3 className="text-[16px] font-extrabold text-slate-800 tracking-tight mb-4">Transaction History</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="pb-3 pr-4">Invoice ID</th>
                <th className="pb-3 pr-4">Client</th>
                <th className="pb-3 pr-4">Project</th>
                <th className="pb-3 pr-4">Date</th>
                <th className="pb-3 pr-4">Status</th>
                <th className="pb-3 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-[13px] font-medium text-slate-600">
              {transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-slate-50/30 transition-colors">
                  <td className="py-4 pr-4 font-bold text-slate-800">{tx.id}</td>
                  <td className="py-4 pr-4">{tx.client}</td>
                  <td className="py-4 pr-4 font-bold text-slate-700">{tx.project}</td>
                  <td className="py-4 pr-4 text-slate-400">{tx.date}</td>
                  <td className="py-4 pr-4">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                      tx.status === 'released' ? 'bg-emerald-50 text-emerald-700' :
                      tx.status === 'escrowed' ? 'bg-blue-50 text-blue-700' : 'bg-amber-50 text-amber-700'
                    }`}>
                      {tx.status}
                    </span>
                  </td>
                  <td className="py-4 text-right font-extrabold text-slate-800">{tx.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
