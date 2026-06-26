import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';

export default function Waitlist() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    role: 'business' // Defaults to business
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call to save lead
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FAFAFC]">
      <Navbar />

      <main className="flex-grow flex items-center justify-center pt-32 pb-24 px-4 sm:px-6 animate-page-in relative">
        
        {/* Background Dots */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

        <div className="w-full max-w-xl relative z-10">
          
          {/* Form Container */}
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12),inset_0_2px_4px_rgba(255,255,255,1)] ring-1 ring-slate-200/80 overflow-hidden relative">
            
            {/* Subtle glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

            {isSuccess ? (
              /* ========================================== */
              /* SUCCESS STATE                              */
              /* ========================================== */
              <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 mx-auto bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center text-emerald-500 shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_4px_12px_rgba(0,0,0,0.05)] mb-6">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-heading font-extrabold text-slate-900 mb-3 tracking-tight">You're on the list.</h2>
                <p className="text-slate-500 mb-8 leading-relaxed">
                  Thank you for applying. We are rolling out invites in batches to maintain network quality. Keep an eye on your inbox.
                </p>
                <Link to="/" className="inline-flex px-8 py-3.5 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-colors shadow-sm">
                  Return to Home
                </Link>
              </div>
            ) : (
              /* ========================================== */
              /* WAITLIST FORM                              */
              /* ========================================== */
              <>
                <div className="text-center mb-10">
                  <h1 className="text-3xl font-heading font-extrabold text-slate-900 tracking-tight mb-3">
                    Join the Waitlist
                  </h1>
                  <p className="text-slate-500 font-medium">
                    Secure your spot in the founding cohort.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Custom Segmented Control for Role */}
                  <div>
                    <label className="block text-[13px] font-bold text-slate-500 uppercase tracking-wider mb-3 text-center">
                      I am joining as a
                    </label>
                    <div className="flex p-1.5 bg-slate-50 border border-slate-200/80 rounded-2xl shadow-inner relative">
                      <button
                        type="button"
                        onClick={() => setFormData({...formData, role: 'business'})}
                        className={`flex-1 py-3 text-[14px] font-bold rounded-xl transition-all duration-300 z-10 ${
                          formData.role === 'business' 
                            ? 'bg-white text-blue-600 shadow-[0_2px_8px_rgba(0,0,0,0.08),inset_0_1px_2px_rgba(255,255,255,1)] ring-1 ring-slate-200/50' 
                            : 'text-slate-500 hover:text-slate-700'
                        }`}
                      >
                        Business
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({...formData, role: 'professional'})}
                        className={`flex-1 py-3 text-[14px] font-bold rounded-xl transition-all duration-300 z-10 ${
                          formData.role === 'professional' 
                            ? 'bg-white text-blue-600 shadow-[0_2px_8px_rgba(0,0,0,0.08),inset_0_1px_2px_rgba(255,255,255,1)] ring-1 ring-slate-200/50' 
                            : 'text-slate-500 hover:text-slate-700'
                        }`}
                      >
                        Professional
                      </button>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[13px] font-bold text-slate-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full p-3.5 bg-slate-50/50 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-slate-900 font-medium shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] focus:outline-none" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] font-bold text-slate-700 mb-2">
                        {formData.role === 'business' ? 'Company Name' : 'Company / Portfolio (Optional)'}
                      </label>
                      <input 
                        type="text" 
                        required={formData.role === 'business'}
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="w-full p-3.5 bg-slate-50/50 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-slate-900 font-medium shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] focus:outline-none" 
                        placeholder={formData.role === 'business' ? 'Acme Corp' : 'github.com/johndoe'} 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-slate-700 mb-2">Work Email</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full p-3.5 bg-slate-50/50 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-slate-900 font-medium shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] focus:outline-none" 
                      placeholder="john@example.com" 
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-slate-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full p-3.5 bg-slate-50/50 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-slate-900 font-medium shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] focus:outline-none" 
                      placeholder="+91 98765 43210" 
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 mt-2 bg-blue-600 text-white text-[15px] font-bold rounded-xl transition-all shadow-[0_4px_12px_rgba(37,99,235,0.25)] focus:outline-none flex items-center justify-center gap-2
                      ${isSubmitting ? 'opacity-80 cursor-not-allowed' : 'hover:bg-blue-700 hover:shadow-[0_6px_16px_rgba(37,99,235,0.35)] hover:-translate-y-0.5'}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                        Securing Spot...
                      </>
                    ) : (
                      'Request Access'
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-400 mt-4 font-medium">
                    By joining, you agree to our <a href="#" className="underline hover:text-slate-600">Privacy Policy</a>.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}