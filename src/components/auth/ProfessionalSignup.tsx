import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomDropdown from '../ui/CustomDropdown';

const roleOptions = [
  { value: 'frontend', label: 'Frontend Engineer' },
  { value: 'backend', label: 'Backend Engineer' },
  { value: 'fullstack', label: 'Full Stack Engineer' },
  { value: 'mobile', label: 'Mobile Developer' },
  { value: 'design', label: 'UI/UX Designer' },
  { value: 'product', label: 'Product Manager' },
];

const experienceOptions = [
  { value: '1-3', label: '1 - 3 years' },
  { value: '4-6', label: '4 - 6 years' },
  { value: '7-9', label: '7 - 9 years' },
  { value: '10+', label: '10+ years' },
];

export default function ProfessionalSignup() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    // Step 1: Identity
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    // Step 2: Expertise
    primaryRole: '',
    experience: '',
    hourlyRate: '',
    portfolio: '',
    // Step 3: Verification
    linkedin: '',
    github: '',
    agreeTerms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateStep = () => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'Required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Required';
      if (!formData.email.trim()) newErrors.email = 'Required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
      if (!formData.password) newErrors.password = 'Required';
      else if (formData.password.length < 8) newErrors.password = 'Min 8 characters';
    }

    if (step === 2) {
      if (!formData.primaryRole) newErrors.primaryRole = 'Required';
      if (!formData.experience) newErrors.experience = 'Required';
      if (!formData.hourlyRate.trim()) newErrors.hourlyRate = 'Required';
    }

    if (step === 3) {
      if (!formData.linkedin.trim()) newErrors.linkedin = 'Required';
      if (!formData.agreeTerms) newErrors.agreeTerms = 'Must agree to terms';
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
      // Simulate API call to save profile and trigger the AI Vetting pipeline
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
           <div className="w-20 h-20 mx-auto bg-blue-50 border border-blue-200 rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-sm">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
           </div>
           <h2 className="text-3xl font-heading font-extrabold text-slate-900 mb-3">Application Received</h2>
           <p className="text-slate-500 mb-8 leading-relaxed">
             Your profile is currently under review by our vetting system. Once verified, you will be invited to complete your technical assessment to establish your baseline Trust Score.
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
      
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <header className="absolute top-0 left-0 p-8 z-50">
        <Link to="/" className="cursor-pointer block transition-transform hover:opacity-80">
          <img src="/logo.svg" alt="ProSpec" className="h-8 w-auto" />
        </Link>
      </header>

      <div className="w-full max-w-xl p-8 sm:p-12 bg-gradient-to-b from-white to-[#F8FAFC] rounded-[2rem] border border-white shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_6px_rgba(15,23,42,0.02)] ring-1 ring-slate-200/70 relative z-10">
        
        {/* Progress Bar */}
        <div className="mb-10">
           <div className="flex justify-between items-end mb-2">
              <h1 className="text-2xl font-heading font-bold text-slate-900">
                {step === 1 && "Create your profile"}
                {step === 2 && "Your Expertise"}
                {step === 3 && "Identity Verification"}
              </h1>
              <span className="text-sm font-bold text-blue-600">Step {step} of 3</span>
           </div>
           <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
             <div className="h-full bg-blue-600 transition-all duration-500 ease-out rounded-full" style={{ width: `${(step / 3) * 100}%` }}></div>
           </div>
        </div>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); step === 3 ? handleSubmit(e) : handleNext(); }} noValidate>
          
          {/* ========================================== */}
          {/* STEP 1: IDENTITY                           */}
          {/* ========================================== */}
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-5">
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <button type="button" className="flex items-center justify-center gap-2 py-3 bg-white border border-slate-200 rounded-xl font-bold text-[13px] text-slate-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all focus:outline-none">
                  <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                  Google
                </button>
                <button type="button" className="flex items-center justify-center gap-2 py-3 bg-white border border-slate-200 rounded-xl font-bold text-[13px] text-slate-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all focus:outline-none">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                  GitHub
                </button>
              </div>

              <div className="relative mb-6 text-center">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200/80"></div></div>
                <span className="relative bg-[#FAFBFC] px-4 text-[11px] font-bold uppercase tracking-wider text-slate-400">or sign up with email</span>
              </div>

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
                <label className="block text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-2">Email address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className={getInputClass('email')} placeholder="you@example.com" />
                {errors.email && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.email}</p>}
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
                    placeholder="8+ characters" 
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
          {/* STEP 2: EXPERTISE                          */}
          {/* ========================================== */}
          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-5">
              
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <CustomDropdown
                    label="Primary Role"
                    options={roleOptions}
                    value={formData.primaryRole}
                    onChange={(value) => setFormData(prev => ({ ...prev, primaryRole: value }))}
                    error={errors.primaryRole}
                    placeholder="Select role..."
                  />
                  {errors.primaryRole && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.primaryRole}</p>}
                </div>
                <div>
                  <CustomDropdown
                    label="Experience"
                    options={experienceOptions}
                    value={formData.experience}
                    onChange={(value) => setFormData(prev => ({ ...prev, experience: value }))}
                    error={errors.experience}
                    placeholder="Select years..."
                  />
                  {errors.experience && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.experience}</p>}
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-2">Hourly Rate (₹)</label>
                <div className="relative">
                   <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</div>
                   <input type="number" name="hourlyRate" value={formData.hourlyRate} onChange={handleChange} className={`${getInputClass('hourlyRate')} pl-9`} placeholder="0" />
                   <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">/hr</div>
                </div>
                {errors.hourlyRate && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.hourlyRate}</p>}
              </div>

              <div>
                <label className="block text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                  <span>Portfolio / Personal Site</span>
                  <span className="text-slate-300 font-medium">(Optional)</span>
                </label>
                <div className="relative">
                   <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                   </div>
                   <input type="url" name="portfolio" value={formData.portfolio} onChange={handleChange} className={`${getInputClass('portfolio')} pl-12`} placeholder="https://yourwork.com" />
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
                  ProSpec is an invite-only network. Your social links help us verify your professional history before technical vetting.
                </p>
              </div>

              <div>
                <label className="block text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-2">LinkedIn Profile</label>
                <div className="relative">
                   <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0A66C2]">
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                   </div>
                   <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} className={`${getInputClass('linkedin')} pl-12`} placeholder="linkedin.com/in/username" />
                </div>
                {errors.linkedin && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.linkedin}</p>}
              </div>

              <div>
                <label className="block text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                  <span>GitHub Profile</span>
                  <span className="text-slate-300 font-medium">(Optional for Designers)</span>
                </label>
                <div className="relative">
                   <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-700">
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                   </div>
                   <input type="url" name="github" value={formData.github} onChange={handleChange} className={`${getInputClass('github')} pl-12`} placeholder="github.com/username" />
                </div>
              </div>

              <div>
                <div className="flex items-start gap-3 pt-2">
                  <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600/20 cursor-pointer" />
                  <p className="text-[13px] text-slate-500 leading-relaxed">
                    Yes, I agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
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
                'Submit Application'
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