import { Link } from 'react-router-dom';

export default function PublicTrustProfile() {
  return (
    <div className="min-h-screen bg-[#FAFAFC] w-full font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-page-in">
        
        {/* Navigation / Header */}
        <div className="flex justify-between items-center mb-8">
          <Link to="/b/dashboard" className="inline-flex items-center gap-2 text-[13px] font-bold text-slate-400 hover:text-blue-600 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back to Applicants
          </Link>
          <div className="flex gap-3">
            <button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 text-[13px] font-bold rounded-xl hover:bg-slate-50 transition-colors shadow-sm">
              Save Profile
            </button>
            <button className="px-6 py-2.5 bg-blue-600 text-white text-[13px] font-bold rounded-xl hover:bg-blue-700 transition-all shadow-[0_4px_12px_rgba(37,99,235,0.25)] flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" /></svg>
              Message Alex
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ========================================== */}
          {/* LEFT COLUMN: Identity & Trust (Spans 4)    */}
          {/* ========================================== */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Main Identity Card */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 text-center relative overflow-hidden">
              {/* Background Accent */}
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-blue-50 to-white pointer-events-none border-b border-slate-100/50"></div>
              
              <div className="relative z-10">
                <img 
                  src="https://ui-avatars.com/api/?name=Alex+M&background=0D8ABC&color=fff&size=128" 
                  alt="Alex M." 
                  className="w-24 h-24 rounded-full mx-auto border-4 border-white shadow-md mb-4" 
                />
                <h1 className="text-2xl font-bold text-slate-900 mb-1">Alex M.</h1>
                <p className="text-[14px] font-medium text-slate-500 mb-4">Senior Frontend Engineer</p>
                
                <div className="flex items-center justify-center gap-2 text-[13px] font-bold text-slate-700 mb-6">
                  <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  Bengaluru, India
                  <span className="mx-1 text-slate-300">•</span>
                  ₹1,500 / hr
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                <div className="text-center">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Earned</p>
                  <p className="text-[15px] font-bold text-slate-900">₹8.5L+</p>
                </div>
                <div className="text-center border-l border-slate-100">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Availability</p>
                  <p className="text-[15px] font-bold text-emerald-600">30 hrs/wk</p>
                </div>
              </div>
            </div>

            {/* The ProSpec Trust Credential */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 shadow-[0_10px_20px_-10px_rgba(37,99,235,0.5)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
              
              <div className="flex items-center justify-between mb-6 relative z-10">
                <h3 className="text-[13px] font-bold uppercase tracking-wider text-blue-100">ProSpec Trust Score</h3>
                <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
                </div>
              </div>
              
              <div className="flex items-baseline gap-1 relative z-10 mb-6">
                <p className="text-5xl font-heading font-extrabold text-white">842</p>
                <p className="text-[14px] text-blue-200 font-bold mb-1">/ 1000</p>
              </div>

              <div className="space-y-3 mb-6 relative z-10">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-[13px] font-medium text-blue-100">Verified Contracts</span>
                  <span className="text-[14px] font-bold text-white">14</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-[13px] font-medium text-blue-100">On-Time Delivery</span>
                  <span className="text-[14px] font-bold text-emerald-300">96%</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-[13px] font-medium text-blue-100">Repeat Clients</span>
                  <span className="text-[14px] font-bold text-white">7</span>
                </div>
              </div>

              <div className="relative z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 border border-white/20 rounded-lg text-[12px] font-bold text-white">
                  <svg className="w-4 h-4 text-amber-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  Top 5% of Network
                </span>
              </div>
            </div>

            {/* Verification Checklist */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <h3 className="text-[14px] font-bold text-slate-900 mb-4">Verification Status</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  <span className="text-[13px] font-medium text-slate-700">Government ID Verified</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  <span className="text-[13px] font-medium text-slate-700">Bank Account Linked</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  <span className="text-[13px] font-medium text-slate-700 flex items-center gap-1.5">
                    GitHub Connected <a href="#" className="text-blue-600 hover:underline">(@alexm-dev)</a>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  <span className="text-[13px] font-medium text-slate-700 flex items-center gap-1.5">
                    LinkedIn Connected <a href="#" className="text-blue-600 hover:underline">(in/alexm)</a>
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* ========================================== */}
          {/* RIGHT COLUMN: The Proof Ledger (Spans 8)   */}
          {/* ========================================== */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Bio / About */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
              <h2 className="text-[16px] font-bold text-slate-900 mb-4">About</h2>
              <p className="text-[14px] text-slate-600 leading-relaxed whitespace-pre-wrap">
                I am a Senior Frontend Engineer with over 6 years of experience specializing in React, TypeScript, and modern state management. I build scalable, high-performance web applications with a focus on clean architecture and pixel-perfect UI.
                <br /><br />
                Over the past year on ProSpec, I have successfully delivered multiple B2B dashboards, integrating complex APIs (Stripe Connect, OAuth, GraphQL) while maintaining a 100% milestone completion rate. I prefer fixed-price contracts with clear, milestone-driven scopes.
              </p>
              
              <h3 className="text-[13px] font-bold text-slate-900 mt-8 mb-3 uppercase tracking-wider">Verified Skill Stack</h3>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux Toolkit', 'Stripe API', 'GraphQL', 'Figma'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-[13px] font-bold rounded-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Verified Work History Ledger */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <h2 className="text-[16px] font-bold text-slate-900">Verified ProSpec History</h2>
                <span className="text-[12px] font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded">14 Jobs</span>
              </div>
              
              <div className="divide-y divide-slate-100">
                
                {/* Ledger Item 1 */}
                <div className="p-6 hover:bg-slate-50 transition-colors">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4 mb-3">
                    <div>
                      <h3 className="text-[16px] font-bold text-blue-600 hover:underline cursor-pointer mb-1">
                        SaaS Analytics Dashboard Refactor
                      </h3>
                      <div className="flex items-center gap-2 text-[12px] font-bold text-slate-500 mb-3">
                        <span>May 2026 - Jun 2026</span>
                        <span className="text-slate-300">•</span>
                        <span>Fixed Price</span>
                      </div>
                    </div>
                    
                    <div className="text-left sm:text-right shrink-0">
                      <p className="text-[16px] font-bold text-slate-900 mb-1">₹85,000</p>
                      <div className="flex items-center sm:justify-end gap-1 text-emerald-500">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <span className="text-[13px] font-bold">5.0</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-[13px] text-slate-600 italic leading-relaxed border-l-2 border-slate-200 pl-3 mb-4">
                    "Alex is phenomenal. Hit every milestone ahead of schedule and the code quality was top-tier. Highly recommended for complex React architectures."
                  </p>
                  
                  <div className="flex items-center gap-4 text-[12px] font-bold text-slate-500">
                    <span className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-2 py-1 rounded">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      4/4 Milestones Met
                    </span>
                  </div>
                </div>

                {/* Ledger Item 2 */}
                <div className="p-6 hover:bg-slate-50 transition-colors">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4 mb-3">
                    <div>
                      <h3 className="text-[16px] font-bold text-blue-600 hover:underline cursor-pointer mb-1">
                        E-Commerce Checkout Flow (Stripe Connect)
                      </h3>
                      <div className="flex items-center gap-2 text-[12px] font-bold text-slate-500 mb-3">
                        <span>Mar 2026 - Apr 2026</span>
                        <span className="text-slate-300">•</span>
                        <span>Fixed Price</span>
                      </div>
                    </div>
                    
                    <div className="text-left sm:text-right shrink-0">
                      <p className="text-[16px] font-bold text-slate-900 mb-1">₹1,15,000</p>
                      <div className="flex items-center sm:justify-end gap-1 text-emerald-500">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        <span className="text-[13px] font-bold">5.0</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-[13px] text-slate-600 italic leading-relaxed border-l-2 border-slate-200 pl-3 mb-4">
                    "Integrated Stripe perfectly into our Next.js stack. Communication was clear throughout the entire escrow process."
                  </p>
                  
                  <div className="flex items-center gap-4 text-[12px] font-bold text-slate-500">
                    <span className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-2 py-1 rounded">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      3/3 Milestones Met
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-slate-50/50 text-center">
                  <button className="text-[13px] font-bold text-blue-600 hover:underline">
                    Load 12 more verified contracts
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}