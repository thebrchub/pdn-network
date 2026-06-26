import { Link } from 'react-router-dom';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';

export default function ForBusinesses() {
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
                  For Businesses
                </span>
                
                <h1 className="text-[3.2rem] sm:text-[3.5rem] lg:text-[4rem] font-black text-white leading-[1.05] tracking-tight mb-6">
                  Trusted Professionals. <br />
                  <span className="text-blue-500">Reliable Outcomes.</span>
                </h1>
                
                <p className="text-[16px] xl:text-lg text-slate-400 mb-10 leading-relaxed">
                  Professional work, backed by accountability. Scale your engineering and design with milestone-based payments and behavior-driven Trust Scores.
                </p>

                <div className="flex">
                  <Link to="/signup/business" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center justify-center gap-2 text-[15px]">
                    Join the Founding Companies
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
                      {/* Left Curve: Starts at node center (116,70), ends at bottom node top-center (256,310) */}
                      <path d="M 116 70 C 116 220, 256 160, 256 310" fill="none" stroke="currentColor" strokeWidth="2" className="animate-pulse" style={{ animationDuration: '3s' }} />
                      {/* Right Curve: Starts at node center (396,70), ends at bottom node top-center (256,310) */}
                      <path d="M 396 70 C 396 220, 256 160, 256 310" fill="none" stroke="currentColor" strokeWidth="2" className="animate-pulse" style={{ animationDuration: '3s', animationDelay: '1.5s' }} />
                    </svg>

                    {/* Top Left Node: Business */}
                    <div className="absolute top-8 left-4 z-20 w-[200px] bg-[#1A1D27] rounded-2xl p-4 border border-slate-700/50 shadow-xl transition-transform hover:-translate-y-1">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-600/50 flex items-center justify-center text-slate-300 flex-shrink-0">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                          </div>
                          <div>
                            <div className="text-[13px] font-bold text-white">Your Business</div>
                            <div className="text-[11px] text-slate-400 font-medium">Project Funded</div>
                          </div>
                       </div>
                    </div>

                    {/* Top Right Node: Professional */}
                    <div className="absolute top-8 right-4 z-20 w-[200px] bg-[#1A1D27] rounded-2xl p-4 border border-slate-700/50 shadow-xl transition-transform hover:-translate-y-1">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-inner">
                            AM
                          </div>
                          <div>
                            <div className="text-[13px] font-bold text-white">Alex M.</div>
                            <div className="text-[11px] text-emerald-400 font-bold">Trust Score: 842</div>
                          </div>
                       </div>
                    </div>

                    {/* Bottom Center Node: Trust Layer */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 w-[280px] bg-blue-600 rounded-2xl p-5 shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4),inset_0_2px_4px_rgba(255,255,255,0.2)] transition-transform hover:-translate-y-1">
                       <div className="text-center text-white">
                          <svg className="w-8 h-8 mx-auto mb-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                          <div className="text-[14px] font-bold tracking-wide mb-1">PROSPEC TRUST LAYER</div>
                          <div className="text-[11px] text-blue-200 font-medium">Escrow Secured • Milestones Active</div>
                       </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ========================================== */}
        {/* 2. THE PROBLEM (Light Theme Resumes)       */}
        {/* ========================================== */}
        <section className="py-20">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px]">
            <div className="text-center mb-16">
              <h2 className="text-[2.5rem] font-heading font-extrabold text-slate-900 mb-4 tracking-tight">Both businesses and professionals lose in the current model.</h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">Without a verified trust layer, outsourcing becomes an unpredictable liability rather than a growth engine.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              
              <div className="group relative rounded-[2rem] p-8 lg:p-10 bg-gradient-to-b from-rose-50/50 to-white border border-rose-100/50 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05),inset_0_2px_4px_rgba(255,255,255,1)] ring-1 ring-slate-200/50 transition-transform hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-rose-100/50 flex items-center justify-center text-rose-600 mb-8 border border-rose-200/50">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Delivery Risk</h3>
                <p className="text-[15px] text-slate-500 leading-relaxed">Projects start fast, but progress quickly becomes invisible. Timelines slip without accountability.</p>
              </div>

              <div className="group relative rounded-[2rem] p-8 lg:p-10 bg-gradient-to-b from-orange-50/50 to-white border border-orange-100/50 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05),inset_0_2px_4px_rgba(255,255,255,1)] ring-1 ring-slate-200/50 transition-transform hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-orange-100/50 flex items-center justify-center text-orange-600 mb-8 border border-orange-200/50">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0-2.08.402-2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Payment Risk</h3>
                <p className="text-[15px] text-slate-500 leading-relaxed">Work is delivered out of scope, or upfront payments are wasted. Disputes drag on with no clear resolution.</p>
              </div>

              <div className="group relative rounded-[2rem] p-8 lg:p-10 bg-gradient-to-b from-slate-100/50 to-white border border-slate-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05),inset_0_2px_4px_rgba(255,255,255,1)] ring-1 ring-slate-200/50 transition-transform hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-slate-200/50 flex items-center justify-center text-slate-600 mb-8 border border-slate-300/50">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Reputation Blindness</h3>
                <p className="text-[15px] text-slate-500 leading-relaxed">Past behavior remains hidden behind 5-star marketplace averages. True capability is impossible to verify.</p>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 3. THE STAR SECTION: Behavior-Based Rep    */}
        {/* ========================================== */}
        <section className="py-24 relative">
           <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px] relative z-20 space-y-32">
              
              {/* Trust Scores */}
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="order-2 lg:order-1 flex justify-center w-full">
                  
                  <div className="relative group w-full max-w-lg bg-gradient-to-b from-white to-[#F8FAFC] rounded-[2.5rem] border border-white p-10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_6px_rgba(15,23,42,0.04)] ring-1 ring-slate-200/80 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] transition-all duration-500">
                    <div className="absolute -bottom-4 inset-x-8 h-8 bg-blue-500 blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full z-0 pointer-events-none"></div>

                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-8 border-b border-slate-100 pb-8">
                        <div>
                          <h3 className="text-[13px] font-bold text-slate-500 uppercase tracking-widest mb-2">Behavior-Based Score</h3>
                          <div className="flex items-end gap-2">
                            <span className="text-[4.5rem] font-heading font-extrabold tracking-tight leading-none text-slate-900">842</span>
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
                          <span className="text-[14px] text-slate-600 font-medium">Repeat Clients</span>
                          <span className="text-[16px] font-bold text-slate-900">7</span>
                        </div>
                        <div className="flex items-center justify-between bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-[inset_0_2px_4px_rgba(255,255,255,1)]">
                          <span className="text-[14px] text-slate-600 font-medium">Platform Disputes</span>
                          <span className="text-[16px] font-bold text-emerald-600">0</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                
                <div className="order-1 lg:order-2">
                  <h2 className="text-[2.5rem] font-heading font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">Behavior-Based Reputation.</h2>
                  <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-[480px]">
                    Every milestone, delivery, payment, review, and dispute contributes to a professional's score mathematically. It is a live reflection of their actual track record, completely un-gameable.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-4 text-slate-700 font-bold"><svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> Historical on-time delivery rates.</li>
                    <li className="flex items-center gap-4 text-slate-700 font-bold"><svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> Verified Skill and Portfolio reviews.</li>
                  </ul>
                </div>
              </div>

              {/* Feature 4 & 5: Milestone-Based Payments */}
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div>
                  <h2 className="text-[2.5rem] font-heading font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">Milestone-Based Payments.</h2>
                  <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-[480px]">
                    Pay for output, not desk time. Escrow ensures funds are fully secured, but only released to the professional when you approve the specific milestone delivery.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-4 text-slate-700 font-bold"><svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> Zero upfront sunk costs.</li>
                    <li className="flex items-center gap-4 text-slate-700 font-bold"><svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> Absolute leverage over output quality.</li>
                  </ul>
                </div>
                
                <div className="flex justify-center">
                  <div className="relative group w-full max-w-lg bg-gradient-to-b from-white to-[#F8FAFC] rounded-[2rem] border border-white p-10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_6px_rgba(15,23,42,0.04)] ring-1 ring-slate-200/80">
                    <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-8">
                      <div>
                        <div className="text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-2">Escrow Status</div>
                        <div className="text-3xl font-heading font-extrabold text-slate-900">₹85,000 <span className="text-base text-slate-400 font-medium">secured</span></div>
                      </div>
                      <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500 shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_2px_4px_rgba(0,0,0,0.05)]">
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                         <div className="w-6 h-6 rounded-full bg-emerald-500 border-2 border-white shadow-sm flex items-center justify-center text-white"><svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></div>
                         <div className="flex-1 bg-white p-3 rounded-xl border border-slate-100 shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_2px_4px_rgba(0,0,0,0.02)] flex justify-between">
                            <span className="text-sm font-bold text-slate-700">Design Approved</span>
                            <span className="text-sm font-bold text-emerald-600">Paid</span>
                         </div>
                      </div>
                      <div className="flex items-center gap-4 relative">
                         <div className="absolute left-3 -top-6 bottom-6 w-0.5 bg-slate-200 -z-10"></div>
                         <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white shadow-sm flex items-center justify-center text-white"><div className="w-2 h-2 rounded-full bg-white animate-pulse"></div></div>
                         <div className="flex-1 bg-white p-3 rounded-xl border border-blue-200 ring-1 ring-blue-50 flex justify-between shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_4px_8px_rgba(37,99,235,0.05)]">
                            <span className="text-sm font-bold text-blue-700">Development Complete</span>
                            <span className="text-sm font-bold text-slate-400">Pending</span>
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
        <section className="bg-white py-24">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px]">
            
            <div className="text-center mb-16">
              <h2 className="text-[2.5rem] font-heading font-extrabold text-slate-900 mb-4 tracking-tight">Predictable Execution Workflow</h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">Watch how a real project moves from scoping to successful delivery.</p>
            </div>

            <div className="max-w-5xl mx-auto bg-gradient-to-b from-white to-[#F8FAFC] rounded-[2.5rem] p-10 md:p-16 border border-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_6px_rgba(15,23,42,0.04)] ring-1 ring-slate-200/80 relative overflow-hidden mb-24">
              
              <div className="relative z-10">
                <div className="flex justify-between items-end mb-10 border-b border-slate-100 pb-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">Website Redesign</h3>
                    <p className="text-slate-500 text-sm mt-1 font-medium">Total Budget: ₹75,000</p>
                  </div>
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-wider rounded-md border border-emerald-100 shadow-[inset_0_1px_2px_rgba(255,255,255,1)]">Completed</span>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative z-10">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Milestone 1</div>
                    <div className="text-sm font-bold text-slate-900 mb-1">Design Approved</div>
                    <div className="text-xs text-emerald-600 font-medium flex items-center gap-1"><svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> ₹25,000 Released</div>
                    <div className="hidden md:block absolute top-1/2 -right-6 w-6 h-0.5 bg-slate-200 -z-10"></div>
                  </div>
                  
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative z-10">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Milestone 2</div>
                    <div className="text-sm font-bold text-slate-900 mb-1">Development Done</div>
                    <div className="text-xs text-emerald-600 font-medium flex items-center gap-1"><svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> ₹30,000 Released</div>
                    <div className="hidden md:block absolute top-1/2 -right-6 w-6 h-0.5 bg-slate-200 -z-10"></div>
                  </div>
                  
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative z-10">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Milestone 3</div>
                    <div className="text-sm font-bold text-slate-900 mb-1">Final Delivery</div>
                    <div className="text-xs text-emerald-600 font-medium flex items-center gap-1"><svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> ₹20,000 Released</div>
                    <div className="hidden md:block absolute top-1/2 -right-6 w-6 h-0.5 bg-slate-200 -z-10"></div>
                  </div>
                  
                  <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100 shadow-[inset_0_1px_2px_rgba(255,255,255,1)] relative z-10">
                    <div className="text-[11px] font-bold text-blue-600 uppercase tracking-wider mb-2">Result</div>
                    <div className="text-sm font-bold text-blue-900 mb-1">Trust Score Updated</div>
                    <div className="text-xs text-blue-700 font-medium">Both parties verified</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================== */}
            {/* 5. CTA SECTION                             */}
            {/* ========================================== */}
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-b from-white to-[#F8FAFC] rounded-[2.5rem] p-12 sm:p-20 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,1)] ring-1 ring-slate-200/80">
              <h2 className="text-4xl font-heading font-extrabold text-slate-900 mb-4 tracking-tight">Join the founding companies program.</h2>
              <p className="text-lg text-slate-500 mb-10 max-w-xl mx-auto font-medium">
                Get early access to India's first reputation-driven professional network.
              </p>
              <Link to="/signup/business" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-[0_4px_12px_rgba(37,99,235,0.25)] hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(37,99,235,0.35)] text-[16px]">
                Apply for Early Access
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