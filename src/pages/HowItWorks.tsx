import { Link } from 'react-router-dom';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';

export default function HowItWorks() {
  const flowSteps = [
    {
      centerLabel: "The Setup",
      biz: {
        title: "Post Project",
        desc: "Define your scope, budget, and project requirements.",
        icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
      },
      pro: {
        title: "Create Profile",
        desc: "Verify your skills and establish your baseline identity.",
        icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      }
    },
    {
      centerLabel: "The Match",
      biz: {
        title: "Review Professionals",
        desc: "Evaluate candidates using immutable ProSpec Trust Scores.",
        icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      },
      pro: {
        title: "Apply To Projects",
        desc: "Bid on guaranteed, high-quality enterprise opportunities.",
        icon: "M13 10V3L4 14h7v7l9-11h-7z"
      }
    },
    {
      centerLabel: "The Trust Layer",
      isHighlight: true, 
      biz: {
        title: "Hire Confidently",
        desc: "Fund the milestone escrow. Turn on Delivery Insurance.",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      },
      pro: {
        title: "Win Opportunities",
        desc: "Accept contracts knowing the funds are 100% secured.",
        icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      }
    },
    {
      centerLabel: "The Execution",
      biz: {
        title: "Track Progress",
        desc: "Monitor delivery velocity through verifiable milestones.",
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      },
      pro: {
        title: "Deliver Milestones",
        desc: "Submit work iteratively without invasive time-tracking.",
        icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      }
    },
    {
      centerLabel: "The Resolution",
      biz: {
        title: "Approve Delivery",
        desc: "Review the output and release funds with one click.",
        icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      },
      pro: {
        title: "Receive Payments",
        desc: "Escrow auto-releases. Zero invoicing delays or chasing clients.",
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      }
    },
    {
      centerLabel: "The Ecosystem",
      biz: {
        title: "Build Trusted Network",
        desc: "Save top-tier professionals for seamless future hiring.",
        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      },
      pro: {
        title: "Build Reputation",
        desc: "Your Trust Score updates, unlocking higher-tier work globally.",
        icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
      }
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] font-sans">
      <Navbar />

      <main className="flex-grow pt-32 pb-20 overflow-hidden relative animate-page-in">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px] relative z-20">
          
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-heading font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
              How ProSpec Works
            </h1>
            <p className="text-lg lg:text-xl text-slate-500 leading-relaxed">
              The complete trust lifecycle. A perfectly aligned ecosystem where businesses get certainty and professionals get security.
            </p>
          </div>

          {/* FIX: Expanded to max-w-6xl to push headers out towards the edges */}
          <div className="hidden md:flex justify-between items-center max-w-6xl mx-auto mb-12 px-8">
            {/* FIX: Added pr-12 and pl-12 to align headers with the newly padded cards below */}
            <h2 className="text-2xl font-heading font-bold text-slate-800 w-[45%] text-right pr-12 lg:pr-16">For Businesses</h2>
            <div className="w-[10%]"></div>
            <h2 className="text-2xl font-heading font-bold text-slate-800 w-[45%] pl-12 lg:pl-16">For Professionals</h2>
          </div>

          {/* FIX: Expanded wrapper to max-w-6xl to fill the dead space on the sides */}
          <div className="relative max-w-6xl mx-auto">
            
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-slate-200 to-transparent -translate-x-1/2 z-0"></div>

            <div className="space-y-12 md:space-y-0">
              {flowSteps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center w-full relative z-10 md:mb-16">
                  
                  {/* LEFT SIDE: Business */}
                  {/* FIX: Added heavy right padding (pr-10 lg:pr-16) to force the card away from the center pill */}
                  <div className="w-full md:w-[45%] flex md:justify-end mb-4 md:mb-0 md:pr-10 lg:pr-16">
                    {/* FIX: Widened card to max-w-md (from max-w-sm) to fill the horizontal space beautifully */}
                    <div className="w-full md:max-w-md group relative rounded-[2rem] p-6 lg:p-8 transition-all duration-500 bg-gradient-to-b from-white to-[#F8FAFC] border border-white shadow-[0_15px_40px_-12px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,1)] ring-1 ring-slate-200/80 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12)] md:text-right">
                      <div className="flex items-center md:flex-row-reverse gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100/50 shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_4px_8px_rgba(0,0,0,0.04)] flex items-center justify-center text-slate-400 flex-shrink-0">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.biz.icon} /></svg>
                        </div>
                        <h3 className="text-[20px] font-bold text-slate-900 tracking-tight">{step.biz.title}</h3>
                      </div>
                      <p className="text-[14px] text-slate-500 leading-relaxed">{step.biz.desc}</p>
                    </div>
                  </div>

                  {/* CENTER NODE */}
                  <div className="w-full md:w-[10%] flex justify-center py-4 md:py-0 relative z-20 my-4 md:my-0">
                    {step.isHighlight ? (
                      <div className="relative">
                        <div className="absolute inset-0 bg-indigo-500 blur-xl opacity-40 rounded-full animate-pulse"></div>
                        <div className="px-4 py-2 bg-gradient-to-b from-indigo-500 to-indigo-600 border border-indigo-400 text-white text-[11px] font-bold uppercase tracking-widest rounded-full shadow-[0_4px_12px_rgba(99,102,241,0.4),inset_0_2px_4px_rgba(255,255,255,0.4)] whitespace-nowrap relative z-10">
                          {step.centerLabel}
                        </div>
                      </div>
                    ) : (
                      <div className="px-4 py-1.5 bg-white border border-slate-200 text-slate-400 text-[10px] font-bold uppercase tracking-widest rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.04)] whitespace-nowrap">
                        {step.centerLabel}
                      </div>
                    )}
                  </div>

                  {/* RIGHT SIDE: Professional */}
                  {/* FIX: Added heavy left padding (pl-10 lg:pl-16) to force the card away from the center pill */}
                  <div className="w-full md:w-[45%] flex md:justify-start md:pl-10 lg:pl-16">
                    {/* FIX: Widened card to max-w-md */}
                    <div className="w-full md:max-w-md group relative rounded-[2rem] p-6 lg:p-8 transition-all duration-500 bg-gradient-to-b from-white to-[#F8FAFC] border border-white shadow-[0_15px_40px_-12px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,1)] ring-1 ring-slate-200/80 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12)] text-left">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100/50 shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_4px_8px_rgba(0,0,0,0.04)] flex items-center justify-center text-slate-400 flex-shrink-0">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.pro.icon} /></svg>
                        </div>
                        <h3 className="text-[20px] font-bold text-slate-900 tracking-tight">{step.pro.title}</h3>
                      </div>
                      <p className="text-[14px] text-slate-500 leading-relaxed">{step.pro.desc}</p>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Unified Dual CTA Block */}
          <div className="max-w-5xl mx-auto mt-24 text-center bg-slate-900 rounded-[2.5rem] p-10 sm:p-16 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.1)] relative overflow-hidden border border-slate-800">
            
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-screen filter blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-screen filter blur-[100px] opacity-10 translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-8 tracking-tight">Ready to enter the ecosystem?</h2>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Link to="/signup/business" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-50 transition-all shadow-[0_4px_12px_rgba(255,255,255,0.1)] hover:-translate-y-0.5 text-[15px] flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  Sign up as Business
                </Link>
                
                <Link to="/signup/professional" className="w-full sm:w-auto px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white border border-slate-700 font-bold rounded-xl hover:bg-slate-800 transition-all text-[15px] flex items-center justify-center gap-2 hover:-translate-y-0.5">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                  Apply as Professional
                </Link>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
      
    </div>
  );
}