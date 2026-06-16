// src/components/auth/SignupGateway.tsx

export default function SignupGateway() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAFC] p-4 font-sans relative">
      
      {/* Top Left Logo Redirect */}
      <header className="absolute top-0 left-0 p-8">
        <a href="/" className="cursor-pointer block transition-transform hover:opacity-80">
          <img src="/logo.svg" alt="ProSpec" className="h-8 w-auto" />
        </a>
      </header>

      <div className="w-full max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-slate-900">Get Started with ProSpec</h1>
          <p className="text-slate-500 mt-3 text-lg">Choose the path that best describes you.</p>
        </div>

        {/* Choice Cards */}
        <div className="grid md:grid-cols-2 gap-6"> 
          
          {/* Business Path */}
          <a href="/signup/business" className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-indigo-600 transition-all shadow-sm hover:shadow-lg hover:-translate-y-1 flex flex-col items-center text-center">
            <div className="w-24 h-24 mb-6 bg-indigo-50 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
               {/* Business Illustration */}
               <svg className="w-12 h-12 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
               </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">I am a Business</h3>
            <p className="text-sm text-slate-500 mt-2 leading-relaxed max-w-[250px]">
              Hire verified professionals for high-stakes projects with delivery guarantees.
            </p>
          </a>

          {/* Professional Path */}
          <a href="/signup/professional" className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-emerald-600 transition-all shadow-sm hover:shadow-lg hover:-translate-y-1 flex flex-col items-center text-center">
            <div className="w-24 h-24 mb-6 bg-emerald-50 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
               {/* Professional Illustration */}
               <svg className="w-12 h-12 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
               </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">I am a Professional</h3>
            <p className="text-sm text-slate-500 mt-2 leading-relaxed max-w-[250px]">
              Showcase your reputation, get verified, and access premium enterprise projects.
            </p>
          </a>
        </div>

        <p className="text-center text-sm text-slate-400 mt-12">
          Already have an account? <a href="/login" className="text-indigo-600 font-bold hover:underline">Log in</a>
        </p>
      </div>
    </div>
  );
}