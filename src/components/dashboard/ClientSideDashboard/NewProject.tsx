import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomDropdown from '../../ui/CustomDropdown';

const categoryOptions = [
  { value: 'web', label: 'Web Development' },
  { value: 'mobile', label: 'Mobile App Development' },
  { value: 'design', label: 'UI/UX Design' },
  { value: 'backend', label: 'Backend & APIs' },
  { value: 'other', label: 'Other' },
];

const timelineOptions = [
  { value: '1-2', label: '1 - 2 Weeks' },
  { value: '3-4', label: '3 - 4 Weeks' },
  { value: '1-3m', label: '1 - 3 Months' },
  { value: '3m+', label: '3+ Months' },
];

export default function NewProject() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    budget: '',
    timeline: '',
    insuranceActive: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateStep = () => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.title.trim()) newErrors.title = 'Required';
      if (!formData.category) newErrors.category = 'Required';
      if (!formData.description.trim()) newErrors.description = 'Required';
      else if (formData.description.length < 50) newErrors.description = 'Please provide more detail (min 50 chars)';
    }

    if (step === 2) {
      if (!formData.budget) newErrors.budget = 'Required';
      if (!formData.timeline) newErrors.timeline = 'Required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) setStep((prev) => prev + 1);
  };

  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep()) {
      setIsSubmitting(true);
      // Simulate API call and Escrow Funding
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1500);
    }
  };

  const getInputClass = (fieldName: string) => `
    w-full p-4 bg-slate-50/50 rounded-xl border transition-all text-slate-800 font-medium focus:outline-none focus:ring-4
    ${errors[fieldName] 
      ? 'border-red-300 focus:border-red-500 focus:ring-red-500/10 bg-red-50/20' 
      : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500/10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]'
    }
  `;

  const numericBudget = parseInt(formData.budget) || 0;
  const insurancePremium = formData.insuranceActive ? numericBudget * 0.10 : 0;
  const totalEscrow = numericBudget + insurancePremium;

  if (isSuccess) {
    return (
      <div className="p-6 sm:p-8 animate-page-in h-[calc(100vh-73px)] flex flex-col items-center justify-center">
        <div className="w-full max-w-xl p-8 sm:p-12 bg-white rounded-[2.5rem] border border-slate-200/80 shadow-sm text-center">
           <div className="w-20 h-20 mx-auto bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center text-emerald-500 mb-6 shadow-sm">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
           </div>
           <h2 className="text-3xl font-heading font-extrabold text-slate-900 mb-3 tracking-tight">Project Posted!</h2>
           <p className="text-slate-500 mb-8 leading-relaxed">
             Your escrow deposit of <span className="font-bold text-slate-700">₹{totalEscrow.toLocaleString('en-IN')}</span> has been secured. Your project is now live and being matched with top-tier professionals.
           </p>
           <button onClick={() => navigate('/b/dashboard')} className="px-8 py-3.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-sm">
             Go to Dashboard
           </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 sm:p-8 animate-page-in max-w-7xl mx-auto w-full">
      
      {/* TWO-COLUMN LAYOUT TO UTILIZE WIDESCREEN SPACE PERFECTLY */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* ========================================== */}
        {/* LEFT COLUMN: THE FORM (Spans 8 cols)       */}
        {/* ========================================== */}
        <div className="lg:col-span-8 w-full p-8 sm:p-10 bg-white rounded-[2rem] border border-slate-200/80 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)]">
          
          {/* Integrated Header & Progress Bar */}
          <div className="mb-10">
             <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8">
               Post a New Project
             </h1>
             
             <div className="flex justify-between items-end mb-3">
                <h2 className="text-[16px] font-bold text-slate-900">
                  {step === 1 && "Step 1: Project Scope"}
                  {step === 2 && "Step 2: Budget & Timeline"}
                  {step === 3 && "Step 3: Protection & Funding"}
                </h2>
                <span className="text-[13px] font-bold text-blue-600">{step} of 3</span>
             </div>
             <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
               <div className="h-full bg-blue-600 transition-all duration-500 ease-out rounded-full" style={{ width: `${(step / 3) * 100}%` }}></div>
             </div>
          </div>

          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); step === 3 ? handleSubmit(e) : handleNext(); }} noValidate>
            
            {/* STEP 1: SCOPE */}
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-6">
                <div>
                  <label className="block text-[13px] font-bold text-slate-500 uppercase tracking-wider mb-2">Project Title</label>
                  <input 
                    type="text" 
                    name="title" 
                    value={formData.title} 
                    onChange={handleChange} 
                    className={getInputClass('title')} 
                    placeholder="e.g., E-Commerce Website Redesign" 
                  />
                  {errors.title && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.title}</p>}
                </div>

                <div>
                  <CustomDropdown
                    label="Project Category"
                    options={categoryOptions}
                    value={formData.category}
                    onChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
                    error={errors.category}
                    placeholder="Select a category..."
                  />
                  {errors.category && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.category}</p>}
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-slate-500 uppercase tracking-wider mb-2">Project Description</label>
                  <textarea 
                    name="description" 
                    value={formData.description} 
                    onChange={handleChange} 
                    className={`${getInputClass('description')} min-h-[180px] resize-y`} 
                    placeholder="Describe the deliverables, tech stack required, and exactly what success looks like..." 
                  />
                  {errors.description && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.description}</p>}
                </div>
              </div>
            )}

            {/* STEP 2: BUDGET */}
            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-6">
                
                <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-xl mb-2 flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <p className="text-[13px] text-blue-800 leading-relaxed">
                    ProSpec operates on milestone-based escrow. The total budget you enter here will be secured upfront, but you only release funds as the professional delivers approved work.
                  </p>
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-slate-500 uppercase tracking-wider mb-2">Total Project Budget (₹)</label>
                  <div className="relative">
                     <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</div>
                     <input 
                       type="number" 
                       name="budget" 
                       value={formData.budget} 
                       onChange={handleChange} 
                       className={`${getInputClass('budget')} pl-9 text-lg`} 
                       placeholder="100000" 
                     />
                  </div>
                  {errors.budget && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.budget}</p>}
                </div>

                <div>
                  <CustomDropdown
                    label="Expected Timeline"
                    options={timelineOptions}
                    value={formData.timeline}
                    onChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}
                    error={errors.timeline}
                    placeholder="Select estimated duration..."
                  />
                  {errors.timeline && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.timeline}</p>}
                </div>
              </div>
            )}

            {/* STEP 3: PROTECTION & FUNDING */}
            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-8">
                
                {/* Delivery Insurance Toggle */}
                <div className={`relative rounded-2xl border transition-all duration-300 p-1 ${formData.insuranceActive ? 'bg-blue-50/50 border-blue-200 shadow-sm' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="relative z-10 bg-white rounded-xl p-6 shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_2px_4px_rgba(0,0,0,0.02)] border border-slate-100">
                    <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6">
                      
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 transition-colors ${formData.insuranceActive ? 'bg-blue-600 border-blue-500 text-white shadow-inner' : 'bg-slate-50 border-slate-200 text-slate-400'}`}>
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        </div>
                        <div>
                          <h3 className="text-[15px] font-bold text-slate-900 tracking-tight flex items-center gap-2">
                            Project Delivery Insurance 
                            {formData.insuranceActive && <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] uppercase tracking-wider font-bold rounded-md">Recommended</span>}
                          </h3>
                          <p className="text-[13px] text-slate-500 mt-1 leading-relaxed max-w-[320px]">
                            If the professional fails or quits, ProSpec instantly replaces them and subsidizes the handover cost.
                          </p>
                        </div>
                      </div>

                      {/* Toggle Switch */}
                      <button 
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, insuranceActive: !prev.insuranceActive }))}
                        className={`relative inline-flex h-8 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-300 ease-in-out focus:outline-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.15)] ${formData.insuranceActive ? 'bg-blue-600' : 'bg-slate-300'}`}
                      >
                        <span className={`pointer-events-none inline-block h-7 w-7 transform rounded-full bg-white shadow-sm ring-1 ring-slate-900/5 transition duration-300 ease-in-out ${formData.insuranceActive ? 'translate-x-6' : 'translate-x-0'}`} />
                      </button>

                    </div>
                  </div>
                </div>

                {/* Final Escrow Info Box */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                   <h3 className="text-[14px] font-bold text-slate-900 mb-2">You're about to fund Escrow</h3>
                   <p className="text-[13px] text-slate-600">Your total calculated deposit is reflected in the summary panel on the right. Once funded, your project will be matched with verified ProSpec talent immediately.</p>
                </div>
              </div>
            )}

            {/* Action Footer */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              {step > 1 ? (
                <button type="button" onClick={handleBack} className="px-6 py-3.5 bg-white text-slate-600 font-bold rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors focus:outline-none">
                  Back
                </button>
              ) : <div></div>}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`px-8 py-3.5 bg-blue-600 text-white font-bold rounded-xl transition-all shadow-[0_4px_12px_rgba(37,99,235,0.25)] focus:outline-none flex items-center gap-2
                  ${isSubmitting ? 'opacity-80 cursor-not-allowed' : 'hover:bg-blue-700 hover:shadow-[0_6px_16px_rgba(37,99,235,0.35)] hover:-translate-y-0.5'}`}
              >
                {isSubmitting ? (
                   <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Processing...
                   </>
                ) : step === 3 ? (
                  <>
                    <svg className="w-5 h-5 text-emerald-300" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                    Fund Escrow & Post
                  </>
                ) : (
                  'Continue'
                )}
              </button>
            </div>

          </form>
        </div>

        {/* ========================================== */}
        {/* RIGHT COLUMN: DYNAMIC SUMMARY (Spans 4)    */}
        {/* ========================================== */}
        {/* Pinned directly to the top padding to perfectly align with the left form */}
        <div className="lg:col-span-4 sticky top-6 space-y-6">
          
          {/* Dynamic Project Summary Card */}
          <div className="bg-white rounded-[1.5rem] border border-slate-200/80 shadow-sm p-6">
             <h3 className="text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-4">Project Summary</h3>
             
             <div className="space-y-4">
               <div>
                 <p className="text-[11px] font-bold text-slate-400 mb-1">Title</p>
                 <p className="text-[14px] font-bold text-slate-900 truncate">
                   {formData.title || <span className="text-slate-300 font-normal italic">Not specified</span>}
                 </p>
               </div>
               
               <div className="flex justify-between items-center">
                 <div>
                   <p className="text-[11px] font-bold text-slate-400 mb-1">Timeline</p>
                   <p className="text-[13px] font-medium text-slate-700">
                     {timelineOptions.find(t => t.value === formData.timeline)?.label || <span className="text-slate-300 italic">Not set</span>}
                   </p>
                 </div>
               </div>

               <div className="pt-4 border-t border-slate-100">
                  <p className="text-[11px] font-bold text-slate-400 mb-2">Escrow Calculation</p>
                  
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between text-[13px]">
                      <span className="text-slate-600">Base Budget</span>
                      <span className="font-medium text-slate-900">₹{numericBudget.toLocaleString('en-IN')}</span>
                    </div>
                    {formData.insuranceActive && (
                      <div className="flex justify-between text-[13px]">
                        <span className="text-blue-600 flex items-center gap-1">
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                          Insurance (10%)
                        </span>
                        <span className="font-bold text-blue-600">₹{insurancePremium.toLocaleString('en-IN')}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center pt-3 border-t border-slate-100">
                    <span className="text-[14px] font-bold text-slate-900">Total Deposit</span>
                    <span className="text-xl font-black text-slate-900">₹{totalEscrow.toLocaleString('en-IN')}</span>
                  </div>
               </div>
             </div>
          </div>

          {/* Trust Value Prop Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-[1.5rem] p-6 text-center">
            <div className="w-10 h-10 mx-auto bg-white border border-slate-200 shadow-sm rounded-xl flex items-center justify-center text-slate-700 mb-3">
               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>
            <h4 className="text-[14px] font-bold text-slate-900 mb-1">100% Escrow Protected</h4>
            <p className="text-[12px] text-slate-500 leading-relaxed">
              Your funds are securely held and only released when you explicitly approve the submitted milestones. You are in total control.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}