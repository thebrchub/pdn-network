import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsAuthenticating(true);
      
      // Simulate a brief network request
      setTimeout(() => {
        const email = formData.email.toLowerCase().trim();
        
        // MOCK AUTHENTICATION ROUTING
        if (email === 'client@stripe.com' && formData.password === 'password123') {
          navigate('/b/dashboard');
        } else if (email === 'alex@dev.com' && formData.password === 'password123') {
          navigate('/p/dashboard');
        } else {
          setErrors({ 
            email: 'Invalid credentials. Please use the test accounts provided below.',
            password: 'Check your password.'
          });
          setIsAuthenticating(false);
        }
      }, 800);
    }
  };

  const getInputClass = (fieldName: string) => `
    w-full p-3.5 bg-slate-50/50 rounded-xl border transition-all text-slate-800 font-medium focus:outline-none focus:ring-4
    ${errors[fieldName] 
      ? 'border-red-300 focus:border-red-500 focus:ring-red-500/10 bg-red-50/20' 
      : 'border-slate-200 focus:border-indigo-500 focus:ring-indigo-500/10'
    }
  `;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAFC] p-4 font-sans relative py-20">
      
      {/* Top Left Logo Redirect */}
      <header className="absolute top-0 left-0 p-8 z-50">
        <Link to="/" className="cursor-pointer block transition-transform hover:opacity-80">
          <img src="/logo.svg" alt="ProSpec" className="h-8 w-auto" />
        </Link>
      </header>

      {/* Main Skeuomorphic Card */}
      <div className="w-full max-w-md p-8 sm:p-10 bg-gradient-to-b from-white to-[#F8FAFC] rounded-[2rem] border border-white shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_6px_rgba(15,23,42,0.02)] ring-1 ring-slate-200/70">
        
        <div className="flex flex-col items-center mb-8">
          <img src="/logo.svg" alt="ProSpec" className="h-10 mb-6" />
          <h2 className="text-2xl font-heading font-bold text-slate-900">Welcome back</h2>
          <p className="text-slate-500 mt-2 text-sm">Login to your ProSpec account.</p>
        </div>

        {/* Social Auth */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <button type="button" className="flex items-center justify-center gap-2 py-3 bg-white border border-slate-200 rounded-xl font-bold text-[13px] text-slate-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-slate-300 transition-all focus:outline-none">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.78.78-.04 1.94-.8 3.32-.66 1.4.08 2.53.64 3.2 1.6-2.69 1.63-2.26 5.37.34 6.44-.6 1.54-1.37 3.01-2.04 3.93l.1.88zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            Apple
          </button>
          <button type="button" className="flex items-center justify-center gap-2 py-3 bg-white border border-slate-200 rounded-xl font-bold text-[13px] text-slate-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-slate-300 transition-all focus:outline-none">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Google
          </button>
        </div>

        <div className="relative mb-8 text-center">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200/80"></div></div>
          <span className="relative bg-[#FAFBFC] px-4 text-[12px] font-bold uppercase tracking-wider text-slate-400">or sign in with email</span>
        </div>
        
        <form className="space-y-5" onSubmit={handleSubmit} noValidate>
          <div>
            <label className="block text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-2">Work Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={getInputClass('email')} 
              placeholder="name@company.com" 
              disabled={isAuthenticating}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.email}</p>}
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-[12px] font-bold text-slate-400 uppercase tracking-wider">Password</label>
              <Link to="/forgot-password" className="text-[13px] text-indigo-600 font-bold hover:underline">Forgot password?</Link>
            </div>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`${getInputClass('password')} pr-12`} 
                placeholder="Enter your password"
                disabled={isAuthenticating}
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                )}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.password}</p>}
          </div>

          <button 
            type="submit"
            disabled={isAuthenticating}
            className={`w-full mt-2 py-3.5 bg-indigo-600 text-white font-bold rounded-xl transition-all shadow-[0_4px_12px_rgba(99,102,241,0.25)] text-[15px] focus:outline-none flex justify-center items-center gap-2
              ${isAuthenticating ? 'opacity-80 cursor-not-allowed' : 'hover:bg-indigo-700 hover:shadow-[0_6px_16px_rgba(99,102,241,0.35)] hover:-translate-y-0.5'}`}
          >
            {isAuthenticating ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                Authenticating...
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-slate-100 text-center">
          <p className="text-[14px] text-slate-500">
            Don't have an account? <Link to="/signup" className="text-indigo-600 font-bold hover:underline">Sign up</Link>
          </p>
        </div>
      </div>

      {/* DEV MODE HINT BOX - Remove in production */}
      <div className="absolute bottom-8 right-8 p-4 bg-slate-900 rounded-xl border border-slate-700 shadow-2xl text-left max-w-sm z-50">
        <div className="flex items-center gap-2 mb-3 border-b border-slate-700 pb-2">
          <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A12.014 12.014 0 0010.3 1C5.167 1 1 5.167 1 10.3c0 5.133 4.167 9.3 9.3 9.3 5.133 0 9.3-4.167 9.3-9.3 0-.915-.133-1.803-.383-2.646-.145-.494-.658-.764-1.144-.616l-1.045.318a7.214 7.214 0 11-7.794-7.794l.318-1.045c.148-.486-.122-1-.616-1.144z" clipRule="evenodd"></path></svg>
          <span className="text-xs font-bold text-white uppercase tracking-wider">Dev Test Accounts</span>
        </div>
        <div className="space-y-3">
          <div>
            <div className="text-[11px] text-slate-400 uppercase font-bold mb-1">Business Dashboard</div>
            <code className="block bg-slate-800 text-emerald-300 px-2 py-1 rounded text-xs">client@stripe.com / password123</code>
          </div>
          <div>
            <div className="text-[11px] text-slate-400 uppercase font-bold mb-1">Professional Dashboard</div>
            <code className="block bg-slate-800 text-indigo-300 px-2 py-1 rounded text-xs">alex@dev.com / password123</code>
          </div>
        </div>
      </div>

    </div>
  );
}