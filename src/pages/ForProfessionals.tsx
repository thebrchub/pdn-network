import { Link } from 'react-router-dom';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';

export default function ForProfessionals() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FAFAFC]">
      <Navbar />

      <main className="flex-grow pb-24 animate-page-in">
        
        {/* ========================================== */}
        {/* 1. CONTAINED HERO SECTION (Dark Mode)      */}
        {/* ========================================== */}
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px] pt-28 pb-12">
          
          {/* The Dark Hero Container */}
          <div className="relative w-full rounded-[2.5rem] overflow-hidden border border-slate-800 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] bg-[#0F111A]">
            
            {/* Background Texture: Image + Dark Wash + Dot Grid */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
            <div className="absolute inset-0 bg-[#0F111A]/80 backdrop-blur-sm"></div>
            <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

            {/* Hero Content Grid */}
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center p-8 sm:p-12 lg:p-16 xl:p-20 min-h-[600px]">

              {/* LEFT COLUMN: COPY & CTA */}
              <div className="w-full flex flex-col justify-center max-w-xl">
                <span className="inline-block py-1.5 px-4 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-[12px] font-bold text-blue-400 uppercase tracking-wider w-max shadow-sm">
                  For Professionals
                </span>
                
                <h1 className="text-[3.2rem] sm:text-[3.5rem] lg:text-[4rem] font-black text-white leading-[1.05] tracking-tight mb-6">
                  Build a reputation <br />
                  <span className="text-blue-500">that actually pays.</span>
                </h1>
                
                <p className="text-[16px] xl:text-lg text-slate-400 mb-10 leading-relaxed">
                  Escape the race to the bottom. Get paid for your expertise with milestone-based escrow, guaranteed payouts, and an immutable Trust Score that attracts serious companies.
                </p>

                <div className="flex">
                  <Link to="/signup/professional" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center justify-center gap-2 text-[15px]">
                    Apply for the Talent Network
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* RIGHT COLUMN: PERFECTLY ALIGNED DIAGRAM */}
              <div className="w-full relative hidden lg:block h-full min-h-[400px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  
                  {/* Fixed Dimension Wrapper for Perfect SVG Math */}
                  <div className="relative w-[512px] h-[400px]">
                    
                    {/* Subtle Glow behind the nodes */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
                    
                    {/* PERFECTLY ALIGNED SVG CURVES */}
                    <svg className="absolute inset-0 w-full h-full -z-10 text-slate-600" viewBox="0 0 512 400" style={{ strokeDasharray: '6,6' }}>
                      {/* Left Curve */}
                      <path d="M 116 70 C 116 220, 256 160, 256 310" fill="none" stroke="currentColor" strokeWidth="2" className="animate-pulse" style={{ animationDuration: '3s' }} />
                      {/* Right Curve */}
                      <path d="M 396 70 C 396 220, 256 160, 256 310" fill="none" stroke="currentColor" strokeWidth="2" className="animate-pulse" style={{ animationDuration: '3s', animationDelay: '1.5s' }} />
                    </svg>

                    {/* Top Left Node: Escrow */}
                    <div className="absolute top-8 left-4 z-20 w-[200px] bg-[#1A1D27] rounded-2xl p-4 border border-slate-700/50 shadow-xl transition-transform hover:-translate-y-1">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-600/50 flex items-center justify-center text-emerald-400 flex-shrink-0">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                          </div>
                          <div>
                            <div className="text-[13px] font-bold text-white">Funds Secured</div>
                            <div className="text-[11px] text-slate-400 font-medium">₹1,20,000 Escrow</div>
                          </div>
                       </div>
                    </div>

                    {/* Top Right Node: Payout */}
                    <div className="absolute top-8 right-4 z-20 w-[200px] bg-[#1A1D27] rounded-2xl p-4 border border-slate-700/50 shadow-xl transition-transform hover:-translate-y-1">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-inner">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          </div>
                          <div>
                            <div className="text-[13px] font-bold text-white">Payout Sent</div>
                            <div className="text-[11px] text-emerald-400 font-bold">Milestone Approved</div>
                          </div>
                       </div>
                    </div>

                    {/* Bottom Center Node: Trust Layer */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 w-[280px] bg-blue-600 rounded-2xl p-5 shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4),inset_0_2px_4px_rgba(255,255,255,0.2)] transition-transform hover:-translate-y-1">
                       <div className="text-center text-white">
                          <div className="text-[10px] font-bold text-blue-200 uppercase tracking-widest mb-1">Your Trust Score</div>
                          <div className="text-3xl font-heading font-extrabold text-white flex items-center justify-center gap-2">
                             842 <span className="text-sm text-emerald-300 flex items-center"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" /></svg> 12</span>
                          </div>
                       </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ========================================== */}
        {/* 2. THE PROBLEM                             */}
        {/* ========================================== */}
        <section className="py-20">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px]">
            <div className="text-center mb-16">
              <h2 className="text-[2.5rem] font-heading font-extrabold text-slate-900 mb-4 tracking-tight">The traditional freelance model is broken.</h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">Standard marketplaces force you to compete on price, not quality, and leave you entirely unprotected.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              
              <div className="group relative rounded-[2rem] p-8 lg:p-10 bg-gradient-to-b from-rose-50/50 to-white border border-rose-100/50 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05),inset_0_2px_4px_rgba(255,255,255,1)] ring-1 ring-slate-200/50 transition-transform hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-rose-100/50 flex items-center justify-center text-rose-600 mb-8 border border-rose-200/50">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">The Race to the Bottom</h3>
                <p className="text-[15px] text-slate-500 leading-relaxed">Competing against cheap global labor and AI scripts. Your expertise is drowned out by low-bid volume.</p>
              </div>

              <div className="group relative rounded-[2rem] p-8 lg:p-10 bg-gradient-to-b from-orange-50/50 to-white border border-orange-100/50 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05),inset_0_2px_4px_rgba(255,255,255,1)] ring-1 ring-slate-200/50 transition-transform hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-orange-100/50 flex items-center justify-center text-orange-600 mb-8 border border-orange-200/50">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Scope Creep</h3>
                <p className="text-[15px] text-slate-500 leading-relaxed">Clients constantly moving the goalposts. You end up doing 2x the work for the same fixed budget because there is no structured accountability.</p>
              </div>

              <div className="group relative rounded-[2rem] p-8 lg:p-10 bg-gradient-to-b from-slate-100/50 to-white border border-slate-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05),inset_0_2px_4px_rgba(255,255,255,1)] ring-1 ring-slate-200/50 transition-transform hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-slate-200/50 flex items-center justify-center text-slate-600 mb-8 border border-slate-300/50">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Payment Anxiety</h3>
                <p className="text-[15px] text-slate-500 leading-relaxed">Chasing invoices 30 days past due. The constant anxiety of submitting work and hoping the client actually pays.</p>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 3. THE SOLUTION                            */}
        {/* ========================================== */}
        <section className="bg-white py-24 relative">
           
           <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px] relative z-20 space-y-32">
              
              {/* Feature 1: Milestone Escrow */}
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="order-2 lg:order-1 flex justify-center w-full">
                  <div className="relative group w-full max-w-lg bg-gradient-to-b from-white to-[#F8FAFC] rounded-[2.5rem] border border-white p-10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_6px_rgba(15,23,42,0.04)] ring-1 ring-slate-200/80 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] transition-all duration-500">
                    <div className="absolute -bottom-4 inset-x-8 h-8 bg-emerald-500 blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full z-0 pointer-events-none"></div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-8">
                        <div>
                          <div className="text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-2">Escrow Status</div>
                          <div className="text-3xl font-heading font-extrabold text-slate-900">₹85,000 <span className="text-base text-emerald-500 font-bold ml-2">Guaranteed</span></div>
                        </div>
                        <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100/50 flex items-center justify-center shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_2px_4px_rgba(0,0,0,0.02)]">
                          <svg className="w-7 h-7 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-[inset_0_2px_4px_rgba(255,255,255,1)]">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                            <span className="text-[14px] text-slate-700 font-bold">Design Approved</span>
                          </div>
                          <span className="text-[14px] font-bold text-emerald-600">Auto-Paid</span>
                        </div>
                        <div className="flex items-center justify-between bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-[inset_0_2px_4px_rgba(255,255,255,1)]">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                            <span className="text-[14px] text-slate-700 font-bold">Development Complete</span>
                          </div>
                          <span className="text-[14px] font-bold text-slate-400">Locked in Escrow</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-8 shadow-[inset_0_2px_4px_rgba(255,255,255,1)]">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  </div>
                  <h2 className="text-[2.5rem] font-heading font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">Never chase an invoice again.</h2>
                  <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-[480px]">
                    Before you write a single line of code, the client's funds are secured in a ProSpec escrow account. When you deliver the agreed-upon milestone, the system automatically releases your payment.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-4 text-slate-700 font-bold"><svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> Absolute payment security.</li>
                    <li className="flex items-center gap-4 text-slate-700 font-bold"><svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> Strict milestone tracking prevents scope creep.</li>
                  </ul>
                </div>
              </div>

              {/* Feature 2: Trust Score */}
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-8 shadow-[inset_0_2px_4px_rgba(255,255,255,1)]">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <h2 className="text-[2.5rem] font-heading font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">Build a portable, highly-valued reputation.</h2>
                  <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-[480px]">
                    Stop starting from scratch. Every successful milestone delivery on ProSpec mathematically increases your Trust Score. High scores unlock enterprise clients who pay for certainty, not cheap labor.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-4 text-slate-700 font-bold"><svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> Stand out from unverified amateurs.</li>
                    <li className="flex items-center gap-4 text-slate-700 font-bold"><svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> Win projects based on your historical reliability.</li>
                  </ul>
                </div>
                
                <div className="flex justify-center w-full">
                  <div className="relative group w-full max-w-lg bg-gradient-to-b from-white to-[#F8FAFC] rounded-[2.5rem] border border-white p-10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_6px_rgba(15,23,42,0.04)] ring-1 ring-slate-200/80 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] transition-all duration-500">
                    <div className="absolute -bottom-4 inset-x-8 h-8 bg-blue-500 blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full z-0 pointer-events-none"></div>

                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-8 border-b border-slate-100 pb-8">
                        <div>
                          <h3 className="text-[13px] font-bold text-slate-500 uppercase tracking-widest mb-2">Your ProSpec Identity</h3>
                          <div className="flex items-end gap-2">
                            <span className="text-[4.5rem] font-heading font-extrabold tracking-tight leading-none text-slate-900">842</span>
                            <span className="text-lg text-slate-400 font-bold mb-2">/ 1000</span>
                          </div>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100/50 flex items-center justify-center shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_2px_4px_rgba(0,0,0,0.02)]">
                          <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-[inset_0_2px_4px_rgba(255,255,255,1)]">
                          <span className="text-[14px] text-slate-600 font-medium">Projects Completed</span>
                          <span className="text-[16px] font-bold text-slate-900">14</span>
                        </div>
                        <div className="flex items-center justify-between bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-[inset_0_2px_4px_rgba(255,255,255,1)]">
                          <span className="text-[14px] text-slate-600 font-medium">On-Time Delivery Rate</span>
                          <span className="text-[16px] font-bold text-emerald-600">96%</span>
                        </div>
                        <div className="flex items-center justify-between bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-[inset_0_2px_4px_rgba(255,255,255,1)]">
                          <span className="text-[14px] text-slate-600 font-medium">Platform Disputes</span>
                          <span className="text-[16px] font-bold text-emerald-600">0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

           </div>
        </section>

        {/* ========================================== */}
        {/* 4. WORKFLOW PIPELINE                       */}
        {/* ========================================== */}
        <section className="bg-[#FAFAFC] py-24 relative">
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
          
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px] relative z-20">
            
            <div className="text-center mb-16">
              <h2 className="text-[2.5rem] font-heading font-extrabold text-slate-900 mb-4 tracking-tight">How you get paid</h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">A transparent, predictable pipeline designed to protect your time.</p>
            </div>

            <div className="max-w-5xl mx-auto bg-gradient-to-b from-white to-[#F8FAFC] rounded-[2.5rem] p-10 md:p-16 border border-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_6px_rgba(15,23,42,0.04)] ring-1 ring-slate-200/80 relative overflow-hidden mb-24">
              
              <div className="relative z-10">
                <div className="grid md:grid-cols-4 gap-6">
                  
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative z-10">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xs mb-4">1</div>
                    <div className="text-sm font-bold text-slate-900 mb-2">Accept Contract</div>
                    <div className="text-xs text-slate-500 leading-relaxed">Client deposits 100% of milestone funds into secure escrow before you begin.</div>
                    <div className="hidden md:block absolute top-1/2 -right-6 w-6 h-0.5 bg-slate-200 -z-10"></div>
                  </div>
                  
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative z-10">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xs mb-4">2</div>
                    <div className="text-sm font-bold text-slate-900 mb-2">Deliver Code</div>
                    <div className="text-xs text-slate-500 leading-relaxed">Submit your work through the platform. No invasive time-tracking spyware.</div>
                    <div className="hidden md:block absolute top-1/2 -right-6 w-6 h-0.5 bg-slate-200 -z-10"></div>
                  </div>
                  
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative z-10">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center font-bold text-xs mb-4">3</div>
                    <div className="text-sm font-bold text-slate-900 mb-2">Auto-Payment</div>
                    <div className="text-xs text-emerald-600 font-medium">Upon approval, funds are instantly released to your linked bank account.</div>
                    <div className="hidden md:block absolute top-1/2 -right-6 w-6 h-0.5 bg-slate-200 -z-10"></div>
                  </div>
                  
                  <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100 shadow-[inset_0_1px_2px_rgba(255,255,255,1)] relative z-10">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs mb-4"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg></div>
                    <div className="text-sm font-bold text-blue-900 mb-2">Reputation Grows</div>
                    <div className="text-xs text-blue-600 font-medium">Your public Trust Score increases, unlocking higher-tier clients.</div>
                  </div>

                </div>
              </div>
            </div>

            {/* ========================================== */}
            {/* 5. CTA SECTION                             */}
            {/* ========================================== */}
            <div className="max-w-4xl mx-auto text-center bg-white rounded-[2.5rem] p-12 sm:p-20 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,1)] ring-1 ring-slate-200/80">
              <h2 className="text-4xl font-heading font-extrabold text-slate-900 mb-4 tracking-tight">Stop competing on price.</h2>
              <p className="text-lg text-slate-500 mb-10 max-w-xl mx-auto font-medium">
                Join the platform where elite professionals build verified reputations and execute guaranteed contracts.
              </p>
              <Link to="/signup/professional" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-[0_4px_12px_rgba(37,99,235,0.25)] hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(37,99,235,0.35)] text-[16px]">
                Apply for the Talent Network
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}