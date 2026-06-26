
export default function ClientReports() {
  return (
    <div className="p-6 sm:p-8 animate-page-in max-w-7xl mx-auto w-full">
      
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-2">
          Project Reports
        </h1>
        <p className="text-[14px] text-slate-500 font-medium">
          Analytics on your spending, project velocity, and hiring efficiency.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Spend Overview */}
        <div className="bg-white rounded-[1.5rem] border border-slate-200 shadow-sm p-6">
          <h3 className="text-[14px] font-bold text-slate-900 uppercase tracking-wider mb-6">Total Spend (Last 6 Months)</h3>
          <div className="h-64 flex items-end gap-3">
             {/* Simple visual mock of a bar chart */}
             {[40, 60, 45, 80, 65, 95].map((h, i) => (
                <div key={i} className="flex-1 bg-blue-100 rounded-t-lg hover:bg-blue-600 transition-colors" style={{ height: `${h}%` }}></div>
             ))}
          </div>
          <div className="flex justify-between mt-4 text-[11px] font-bold text-slate-400">
            <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span>
          </div>
        </div>

        {/* Hiring Efficiency */}
        <div className="bg-white rounded-[1.5rem] border border-slate-200 shadow-sm p-6">
          <h3 className="text-[14px] font-bold text-slate-900 uppercase tracking-wider mb-6">Hiring Efficiency</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-[13px] font-bold mb-2">
                <span className="text-slate-600">Avg. Time to Hire</span>
                <span className="text-slate-900">4.2 Days</span>
              </div>
              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                <div className="w-[85%] h-full bg-blue-600 rounded-full"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[13px] font-bold mb-2">
                <span className="text-slate-600">Proposal Conversion Rate</span>
                <span className="text-slate-900">28%</span>
              </div>
              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                <div className="w-[28%] h-full bg-emerald-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Export Ledger */}
      <div className="mt-8 bg-white rounded-[1.5rem] border border-slate-200 shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-[14px] font-bold text-slate-900 uppercase tracking-wider">Historical Data</h3>
          <button className="px-4 py-2 bg-slate-100 text-slate-700 text-[12px] font-bold rounded-lg hover:bg-slate-200 transition-colors">
            Export CSV
          </button>
        </div>
        <table className="w-full text-left">
           <thead>
             <tr className="text-[11px] font-bold text-slate-400 uppercase border-b border-slate-100">
               <th className="pb-4">Project Name</th>
               <th className="pb-4">Date</th>
               <th className="pb-4">Freelancer</th>
               <th className="pb-4 text-right">Total Amount</th>
             </tr>
           </thead>
           <tbody className="text-[13px] font-medium text-slate-700">
             <tr className="border-b border-slate-50">
               <td className="py-4">Fintech Dashboard MVP</td>
               <td className="py-4">Jun 12, 2026</td>
               <td className="py-4">Alex M.</td>
               <td className="py-4 text-right font-bold">₹85,000</td>
             </tr>
             <tr className="border-b border-slate-50">
               <td className="py-4">Mobile App Design</td>
               <td className="py-4">May 05, 2026</td>
               <td className="py-4">Priya K.</td>
               <td className="py-4 text-right font-bold">₹1,20,000</td>
             </tr>
           </tbody>
        </table>
      </div>
    </div>
  );
}