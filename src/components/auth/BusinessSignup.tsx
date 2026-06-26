import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomDropdown from '../ui/CustomDropdown';

export default function BusinessSignup() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    // Step 1: Contact
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    // Step 2: Company
    companyName: '',
    website: '',
    industry: '',
    teamSize: '',
    // Step 3: Verification
    gst: '',
    linkedin: '',
    agreeTerms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const industryOptions = [
  { value: 'software', label: 'Software / IT' },
  { value: 'ecommerce', label: 'E-Commerce' },
  { value: 'finance', label: 'Finance / Fintech' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'other', label: 'Other' },
];

const teamSizeOptions = [
  { value: '1-10', label: '1 - 10 employees' },
  { value: '11-50', label: '11 - 50 employees' },
  { value: '51-200', label: '51 - 200 employees' },
  { value: '201+', label: '201+ employees' },
];

  const validateStep = () => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'Required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Required';
      if (!formData.email.trim()) newErrors.email = 'Required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
      if (!formData.phone.trim()) newErrors.phone = 'Required';
      if (!formData.password) newErrors.password = 'Required';
      else if (formData.password.length < 8) newErrors.password = 'Min 8 characters';
    }

    if (step === 2) {
      if (!formData.companyName.trim()) newErrors.companyName = 'Required';
      if (!formData.website.trim()) newErrors.website = 'Required';
      if (!formData.industry) newErrors.industry = 'Required';
      if (!formData.teamSize) newErrors.teamSize = 'Required';
    }

    if (step === 3) {
      if (!formData.linkedin.trim()) newErrors.linkedin = 'Required';
      if (!formData.agreeTerms) newErrors.agreeTerms = 'Must agree to terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep()) {
      setIsSubmitting(true);
      // Simulate API call & Document Upload
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1500);
    }
  };

  const getInputClass = (fieldName: string) => `
    w-full p-3.5 bg-slate-50/50 rounded-xl border transition-all text-slate-800 font-medium focus:outline-none focus:ring-4
    ${errors[fieldName] 
      ? 'border-red-300 focus:border-red-500 focus:ring-red-500/10 bg-red-50/20' 
      : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500/10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]'
    }
  `;

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAFC] p-4 font-sans relative py-20 animate-page-in">
        <header className="absolute top-0 left-0 p-8 z-50">
          <Link to="/" className="cursor-pointer block transition-transform hover:opacity-80">
            <img src="/logo.svg" alt="ProSpec" className="h-8 w-auto" />
          </Link>
        </header>
        <div className="w-full max-w-xl p-8 sm:p-12 bg-white rounded-[2rem] border border-slate-200/80 shadow-xl text-center">
           <div className="w-20 h-20 mx-auto bg-amber-50 border border-amber-200 rounded-2xl flex items-center justify-center text-amber-500 mb-6 shadow-sm">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
           </div>
           <h2 className="text-3xl font-heading font-extrabold text-slate-900 mb-3">Pending Verification</h2>
           <p className="text-slate-500 mb-8 leading-relaxed">
             We have received your registration details. Our trust and safety team will verify your company credentials within 24 hours. Keep an eye on your inbox.
           </p>
           <button onClick={() => navigate('/')} className="px-8 py-3.5 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-colors">
             Return to Home
           </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAFC] p-4 font-sans relative py-20 animate-page-in">
      
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      {/* Top Left Logo */}
      <header className="absolute top-0 left-0 p-8 z-50">
        <Link to="/" className="cursor-pointer block transition-transform hover:opacity-80">
          <img src="/logo.svg" alt="ProSpec" className="h-8 w-auto" />
        </Link>
      </header>

      {/* Main Skeuomorphic Card */}
      <div className="w-full max-w-xl p-8 sm:p-12 bg-gradient-to-b from-white to-[#F8FAFC] rounded-[2rem] border border-white shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_6px_rgba(15,23,42,0.02)] ring-1 ring-slate-200/70 relative z-10">
        
        {/* Progress Bar */}
        <div className="mb-10">
           <div className="flex justify-between items-end mb-2">
              <h1 className="text-2xl font-heading font-bold text-slate-900">
                {step === 1 && "Create your account"}
                {step === 2 && "Business Details"}
                {step === 3 && "Company Verification"}
              </h1>
              <span className="text-sm font-bold text-blue-600">Step {step} of 3</span>
           </div>
           <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
             <div className="h-full bg-blue-600 transition-all duration-500 ease-out rounded-full" style={{ width: `${(step / 3) * 100}%` }}></div>
           </div>
        </div>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); step === 3 ? handleSubmit(e) : handleNext(); }} noValidate>
          
          {/* ========================================== */}
          {/* STEP 1: CONTACT PERSON                     */}
          {/* ========================================== */}
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-2">First name</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className={getInputClass('firstName')} />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.firstName}</p>}
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-2">Last name</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className={getInputClass('lastName')} />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.lastName}</p>}
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-2">Work email address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className={getInputClass('email')} placeholder="name@company.com" />
                {errors.email && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-2">Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={getInputClass('phone')} placeholder="+91 98765 43210" />
                {errors.phone && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-2">Password</label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    name="password" 
                    value={formData.password} 
                    onChange={handleChange} 
                    className={`${getInputClass('password')} pr-12`} 
                    placeholder="8 or more characters" 
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                    {showPassword ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>}
                  </button>
                </div>
                {errors.password && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.password}</p>}
              </div>
            </div>
          )}

          {/* ========================================== */}
          {/* STEP 2: BUSINESS DETAILS                   */}
          {/* ========================================== */}
          {step === 2 && (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-5">
    <div>
      <label className="block text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-2">Company Name</label>
      <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} className={getInputClass('companyName')} placeholder="e.g. Acme Corp" />
      {errors.companyName && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.companyName}</p>}
    </div>

    <div>
      <label className="block text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-2">Company Website</label>
      <div className="relative">
         <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
         </div>
         <input type="url" name="website" value={formData.website} onChange={handleChange} className={`${getInputClass('website')} pl-12`} placeholder="https://acme.com" />
      </div>
      {errors.website && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.website}</p>}
    </div>

    {/* EXCHANGED NATIVE DROPDOWNS WITH THE PREMIUM CUSTOM DROPDOWN COMPONENT */}
    <div className="grid grid-cols-2 gap-5">
      <div>
        <CustomDropdown
          label="Industry"
          options={industryOptions}
          value={formData.industry}
          onChange={(value) => setFormData(prev => ({ ...prev, industry: value }))}
          error={errors.industry}
          placeholder="Select..."
        />
        {errors.industry && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.industry}</p>}
      </div>
      <div>
        <CustomDropdown
          label="Team Size"
          options={teamSizeOptions}
          value={formData.teamSize}
          onChange={(value) => setFormData(prev => ({ ...prev, teamSize: value }))}
          error={errors.teamSize}
          placeholder="Select..."
        />
        {errors.teamSize && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.teamSize}</p>}
      </div>
    </div>
  </div>
)}

          {/* ========================================== */}
          {/* STEP 3: VERIFICATION                       */}
          {/* ========================================== */}
          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-5">
              
              <div className="p-4 bg-blue-50/50 border border-blue-100/80 rounded-xl mb-6">
                <p className="text-[13px] text-blue-800 font-medium">
                  To protect our professional network, all businesses must be verified. Your details are secure.
                </p>
              </div>

              <div>
                <label className="block text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-2">Company Registration Document</label>
                <div className="w-full border-2 border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors cursor-pointer bg-white">
                  <svg className="w-8 h-8 text-slate-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                  <p className="text-sm font-bold text-blue-600 mb-1">Click to upload document</p>
                  <p className="text-xs text-slate-500">PDF, JPG, or PNG (Max 5MB)</p>
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                  <span>GST Number</span>
                  <span className="text-slate-300 font-medium">(Optional)</span>
                </label>
                <input type="text" name="gst" value={formData.gst} onChange={handleChange} className={getInputClass('gst')} placeholder="22AAAAA0000A1Z5" />
              </div>

              <div>
                <label className="block text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-2">Company LinkedIn URL</label>
                <div className="relative">
                   <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0A66C2]">
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                   </div>
                   <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} className={`${getInputClass('linkedin')} pl-12`} placeholder="linkedin.com/company/acme" />
                </div>
                {errors.linkedin && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.linkedin}</p>}
              </div>

              <div>
                <div className="flex items-start gap-3 pt-2">
                  <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600/20 cursor-pointer" />
                  <p className="text-[13px] text-slate-500 leading-relaxed">
                    Yes, I agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and confirm I am authorized to register this company.
                  </p>
                </div>
                {errors.agreeTerms && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.agreeTerms}</p>}
              </div>
            </div>
          )}

          {/* Action Footer */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
            {step > 1 ? (
              <button type="button" onClick={handleBack} className="px-6 py-3.5 bg-white text-slate-600 font-bold rounded-xl border border-slate-200 hover:bg-slate-50 transition-all focus:outline-none">
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
                'Submit for Verification'
              ) : (
                'Continue'
              )}
            </button>
          </div>

        </form>

        {step === 1 && (
          <div className="text-center mt-6">
            <p className="text-[14px] text-slate-500">
              Already have an account? <Link to="/login" className="text-blue-600 font-bold hover:underline">Log in</Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}