import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProfessionalOnboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock form state
  const [formData, setFormData] = useState({
    title: '',
    bio: '',
    primarySkill: '',
    hourlyRate: '',
    githubUrl: '',
    linkedinUrl: ''
  });

  const handleNext = () => setStep(prev => Math.min(prev + 1, 3));
  const handleBack = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call to save profile and generate initial Trust Score framework
    setTimeout(() => {
      // Route them directly to the AI Vetting session next
      navigate('/p/vetting');
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#FAFAFC] font-sans flex flex-col relative">
      
      {/* Minimal Header */}
      <header className="w-full bg-white/80 backdrop-blur-md border-b border-slate-200/80 px-8 py-5 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <img src="/logo.svg" alt="ProSpec" className="h-7 w-auto" />
          <div className="text-[13px] font-bold text-slate-400">
            Step {step} of 3
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 w-full max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-20 relative z-20">
        
        {/* Progress Bar */}
        <div className="mb-12 relative">
          <div className="h-1.5 w-full bg-slate-100 rounded-full shadow-inner overflow-hidden">
            <div 
              className="h-full bg-indigo-500 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Dynamic Form Content */}
        <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }}>
          
          {/* STEP 1: Core Identity */}
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="mb-10 text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-3">
                  Build your Trust Identity.
                </h1>
                <p className="text-lg text-slate-500">
                  This data forms the foundation of your portable reputation.
                </p>
              </div>

              <div className="group relative rounded-[2rem] p-8 sm:p-10 bg-gradient-to-b from-white to-[#F8FAFC] border border-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_6px_rgba(15,23,42,0.04)] ring-1 ring-slate-200/80 space-y-6">
                
                <div>
                  <label className="block text-[13px] font-bold text-slate-700 uppercase tracking-wider mb-2">Professional Title</label>
                  <input 
                    type="text" 
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="w-full p-4 bg-slate-50/50 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all text-slate-900 font-bold shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] focus:outline-none" 
                    placeholder="e.g., Senior Frontend Engineer" 
                    required
                  />
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-slate-700 uppercase tracking-wider mb-2">Professional Bio</label>
                  <textarea 
                    value={formData.bio}
                    onChange={(e) => setFormData({...formData, bio: e.target.value})}
                    className="w-full p-4 bg-slate-50/50 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all text-slate-900 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] focus:outline-none min-h-[120px] resize-none" 
                    placeholder="Briefly describe your expertise and delivery style..." 
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Expertise & Links */}
          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="mb-10 text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-3">
                  Verify your expertise.
                </h1>
                <p className="text-lg text-slate-500">
                  Connect your professional profiles for instant trust signals.
                </p>
              </div>

              <div className="group relative rounded-[2rem] p-8 sm:p-10 bg-gradient-to-b from-white to-[#F8FAFC] border border-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_6px_rgba(15,23,42,0.04)] ring-1 ring-slate-200/80 space-y-6">
                
                <div>
                  <label className="block text-[13px] font-bold text-slate-700 uppercase tracking-wider mb-2">Primary Skill / Stack</label>
                  <input 
                    type="text" 
                    value={formData.primarySkill}
                    onChange={(e) => setFormData({...formData, primarySkill: e.target.value})}
                    className="w-full p-4 bg-slate-50/50 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all text-slate-900 font-bold shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] focus:outline-none" 
                    placeholder="e.g., React & TypeScript" 
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[13px] font-bold text-slate-700 uppercase tracking-wider mb-2">GitHub Profile</label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                      </div>
                      <input 
                        type="url" 
                        value={formData.githubUrl}
                        onChange={(e) => setFormData({...formData, githubUrl: e.target.value})}
                        className="w-full p-4 pl-12 bg-slate-50/50 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all text-slate-900 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] focus:outline-none" 
                        placeholder="github.com/username" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-slate-700 uppercase tracking-wider mb-2">LinkedIn Profile</label>
                    <div className="relative">
                       <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0A66C2]">
                         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      </div>
                      <input 
                        type="url" 
                        value={formData.linkedinUrl}
                        onChange={(e) => setFormData({...formData, linkedinUrl: e.target.value})}
                        className="w-full p-4 pl-12 bg-slate-50/50 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all text-slate-900 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] focus:outline-none" 
                        placeholder="linkedin.com/in/username" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Pricing & Launch */}
          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="mb-10 text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-3">
                  Set your value.
                </h1>
                <p className="text-lg text-slate-500">
                  Establish your baseline rate. You can always negotiate per project.
                </p>
              </div>

              <div className="group relative rounded-[2rem] p-8 sm:p-10 bg-gradient-to-b from-white to-[#F8FAFC] border border-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_6px_rgba(15,23,42,0.04)] ring-1 ring-slate-200/80 space-y-6">
                
                <div>
                  <label className="block text-[13px] font-bold text-slate-700 uppercase tracking-wider mb-2">Hourly Rate (₹)</label>
                  <div className="relative max-w-xs">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                    <input 
                      type="number" 
                      value={formData.hourlyRate}
                      onChange={(e) => setFormData({...formData, hourlyRate: e.target.value})}
                      className="w-full p-4 pl-8 pr-12 bg-slate-50/50 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all text-slate-900 font-bold text-lg shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] focus:outline-none" 
                      placeholder="0" 
                      required
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">/hr</span>
                  </div>
                </div>

                <div className="p-5 bg-indigo-50/50 border border-indigo-100/80 rounded-xl shadow-[inset_0_1px_2px_rgba(255,255,255,1)]">
                   <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-indigo-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                      <p className="text-[13px] text-slate-600 leading-relaxed">
                        <strong className="text-indigo-700">Next Step: AI Vetting.</strong> After saving your profile, you will be redirected to a brief, dynamic scenario test. This verifies your technical problem-solving ability and generates your initial ProSpec Trust Score.
                      </p>
                   </div>
                </div>

              </div>
            </div>
          )}

          {/* Action Footer */}
          <div className="mt-10 flex items-center justify-between">
            {step > 1 ? (
              <button 
                type="button" 
                onClick={handleBack}
                className="px-6 py-3 bg-white text-slate-600 font-bold rounded-xl border border-slate-200 hover:bg-slate-50 hover:text-slate-900 transition-all shadow-sm focus:outline-none"
              >
                Back
              </button>
            ) : <div></div>}
            
            <button 
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl transition-all shadow-[0_4px_12px_rgba(99,102,241,0.25)] focus:outline-none flex items-center gap-2
                ${isSubmitting ? 'opacity-80 cursor-not-allowed' : 'hover:bg-indigo-700 hover:shadow-[0_6px_16px_rgba(99,102,241,0.35)] hover:-translate-y-0.5'}`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  Processing...
                </>
              ) : step === 3 ? (
                'Start AI Vetting'
              ) : (
                'Continue'
              )}
            </button>
          </div>

        </form>
      </div>
    </main>
  );
}