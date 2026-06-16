"use client";

import { useState } from 'react';

export default function FAQ() {
  const [activeTab, setActiveTab] = useState<'businesses' | 'professionals'>('businesses');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleTabChange = (tab: 'businesses' | 'professionals') => {
    setActiveTab(tab);
    setOpenIndex(0); // Reset accordion to the first item when switching tabs
  };

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Tailored FAQ Data
  const faqsData = {
    businesses: [
      {
        question: "How do payments work?",
        answer: "We use a milestone-based escrow system. You fund the project upfront, but the money is held securely by our licensed payment aggregator. Funds are only released to the professional when you approve the delivered milestone."
      },
      {
        question: "What if the professional disappears?",
        answer: "Our SafeDeliver protocol protects you. If a professional misses a final delivery by more than 5 days or becomes unresponsive for 72 hours, it triggers an automatic review. We provide project recovery, work transfer, or a replacement professional."
      },
      {
        question: "How are professionals verified?",
        answer: "We do not accept everyone. Every professional undergoes manual identity verification (Aadhaar/PAN) and a rigorous skill assessment or portfolio review by our internal team before they are allowed to pitch for projects."
      },
      {
        question: "What if the project quality is poor?",
        answer: "Our guided brief builder ensures expectations are mathematically clear before work begins. If the delivered work fails to meet the documented brief, our dispute team steps in. The professional's Quality Score is heavily penalized for poor delivery."
      },
      {
        question: "How are disputes resolved?",
        answer: "Disputes trigger an immediate freeze on escrow funds. Our operations team reviews the original brief, the submitted deliverables, and all on-platform communication to issue a fair resolution (partial/full refund or release) within 72 hours."
      }
    ],
    professionals: [
      {
        question: "How do I ensure I get paid?",
        answer: "You never start work without secured funds. The client must deposit the milestone amount into escrow before you begin. Once you submit the work and the client approves, the funds are automatically released to your linked bank account."
      },
      {
        question: "How is my Trust Score calculated?",
        answer: "We don't use subjective 5-star ratings. Your Trust Score is calculated programmatically based on your on-time delivery rate, scope adherence, and your dispute history. Deliver great work on time, and your score will naturally rise."
      },
      {
        question: "What if a client keeps changing the scope?",
        answer: "Our platform locks the project scope before work begins. If a client requests additional features that fall outside the original documented brief, they must create and fund a new milestone. No free extra work."
      },
      {
        question: "What happens if a client ghost me?",
        answer: "If you submit a completed milestone and the client does not review or respond within 5 business days, the system automatically approves the milestone and releases the funds from escrow directly to you."
      },
      {
        question: "How do I qualify to join?",
        answer: "You must pass a mandatory identity verification check and submit a portfolio of past work. Our internal team reviews every application to ensure you meet the platform's quality and reliability standards before granting access."
      }
    ]
  };

  const currentFaqs = faqsData[activeTab];

  return (
    <section className="relative bg-[#FAFAFC] pt-24 pb-24 lg:pb-32 font-sans overflow-hidden">
      
      {/* Subtle Ambient Glow */}
      <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-indigo-50/60 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px] relative z-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* ======================================== */}
          {/* LEFT COLUMN: STICKY CONTEXT & TOGGLE     */}
          {/* ======================================== */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            
            <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6 drop-shadow-sm">
              Frequently Asked <span className="text-indigo-600">Questions.</span>
            </h2>
            
            <p className="text-lg text-slate-500 font-sans leading-relaxed mb-10 max-w-md">
              Clear answers to how we protect your project, secure your money, and hold both sides accountable.
            </p>

            {/* SMOOTH SLIDING UI TOGGLE SWITCH */}
            <div className="p-1.5 bg-slate-100 rounded-2xl w-full max-w-md mb-12 shadow-[inset_0_2px_4px_rgba(0,0,0,0.03)] border border-slate-200/60">
              <div className="relative flex w-full">
                
                {/* The Sliding Background Pill */}
                <div 
                  className={`absolute top-0 bottom-0 w-1/2 bg-white rounded-xl shadow-sm border border-slate-200/50 transition-transform duration-300 ease-out z-0 ${
                    activeTab === 'businesses' ? 'translate-x-0' : 'translate-x-full'
                  }`}
                ></div>

                {/* Buttons (Transparent background, text changes color on active) */}
                <button
                  onClick={() => handleTabChange('businesses')}
                  className={`flex-1 relative z-10 py-3 px-6 rounded-xl font-bold text-sm transition-colors duration-300 focus:outline-none ${
                    activeTab === 'businesses' ? 'text-slate-900' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  For Businesses
                </button>
                <button
                  onClick={() => handleTabChange('professionals')}
                  className={`flex-1 relative z-10 py-3 px-6 rounded-xl font-bold text-sm transition-colors duration-300 focus:outline-none ${
                    activeTab === 'professionals' ? 'text-slate-900' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  For Professionals
                </button>
              </div>
            </div>

            {/* Skeuomorphic Contact Box (Desktop only) */}
            <div className="hidden lg:flex group relative rounded-[1.5rem] p-6 bg-gradient-to-b from-white to-[#F8FAFC] border border-white shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_6px_rgba(15,23,42,0.02)] ring-1 ring-slate-200/70 transition-transform duration-500 hover:-translate-y-1 items-start gap-4 max-w-md">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 flex-shrink-0 shadow-inner">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-slate-900 tracking-tight mb-1">Still have questions?</h4>
                <p className="text-[13px] text-slate-500 mb-3">Our support team is ready to help you navigate the platform.</p>
                <a href="mailto:support@prospec.com" className="text-[13px] font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 transition-colors focus:outline-none">
                  Contact Support 
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* ======================================== */}
          {/* RIGHT COLUMN: INTERACTIVE ACCORDION      */}
          {/* ======================================== */}
          <div className="lg:col-span-7 space-y-4">
            {currentFaqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div 
                  key={index}
                  className="group relative bg-white rounded-2xl border border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-300 overflow-hidden hover:shadow-[0_8px_20px_rgba(0,0,0,0.04)]"
                >
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left flex items-center justify-between p-6 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className={`text-[16px] lg:text-[17px] font-semibold font-sans tracking-tight pr-8 transition-colors duration-300 ${isOpen ? 'text-indigo-600' : 'text-slate-800 group-hover:text-indigo-600'}`}>
                      {faq.question}
                    </span>
                    
                    {/* The + / x Icon */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'bg-indigo-100 text-indigo-600 rotate-45' : 'bg-slate-50 text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-500'}`}>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                  </button>

                  {/* Smooth Transition Trick */}
                  <div 
                    className={`grid transition-all duration-300 ease-in-out px-6 ${
                      isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0 pb-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[15px] text-slate-500 leading-relaxed font-sans pr-10">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}