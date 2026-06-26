// src/components/auth/SignupGateway.tsx
import { Link } from 'react-router-dom';

export default function SignupGateway() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAFC] p-4 font-sans relative py-20">
      
      {/* Top Left Logo Redirect */}
      <header className="absolute top-0 left-0 p-8 z-50">
        <Link to="/" className="cursor-pointer block transition-transform hover:opacity-80">
          <img src="/logo.svg" alt="ProSpec" className="h-8 w-auto" />
        </Link>
      </header>

      <div className="w-full max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-slate-900">Get Started with ProSpec</h1>
          <p className="text-slate-500 mt-3 text-lg font-medium">Choose the path that best describes you.</p>
        </div>

        {/* Choice Cards */}
        <div className="grid md:grid-cols-2 gap-8"> 
          
          {/* Business Path */}
          <Link 
            to="/signup/business" 
            className="group flex flex-col items-center text-center p-6 bg-gradient-to-b from-white to-[#F8FAFC] rounded-[2rem] border border-white shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_6px_rgba(15,23,42,0.02)] ring-1 ring-slate-200/70 hover:ring-indigo-500/50 hover:shadow-[0_20px_50px_-15px_rgba(99,102,241,0.15)] hover:-translate-y-1 transition-all duration-300"
          >
            {/* Image Container */}
            <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden bg-slate-100 shadow-inner relative">
              <div className="absolute inset-0 bg-indigo-600/10 group-hover:bg-transparent transition-colors z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1664575602276-bc050362793f?q=80&w=800&auto=format&fit=crop" 
                alt="Business Client" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">I am a Business</h3>
            <p className="text-[15px] text-slate-500 font-medium max-w-[280px]">
              Scale your team with verified experts and guaranteed delivery.
            </p>
          </Link>

          {/* Professional Path */}
          <Link 
            to="/signup/professional" 
            className="group flex flex-col items-center text-center p-6 bg-gradient-to-b from-white to-[#F8FAFC] rounded-[2rem] border border-white shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_6px_rgba(15,23,42,0.02)] ring-1 ring-slate-200/70 hover:ring-emerald-500/50 hover:shadow-[0_20px_50px_-15px_rgba(16,185,129,0.15)] hover:-translate-y-1 transition-all duration-300"
          >
            {/* Image Container */}
            <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden bg-slate-100 shadow-inner relative">
              <div className="absolute inset-0 bg-emerald-600/10 group-hover:bg-transparent transition-colors z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" 
                alt="Professional Talent" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-2">I am a Professional</h3>
            <p className="text-[15px] text-slate-500 font-medium max-w-[280px]">
              Build your reputation and unlock elite enterprise opportunities.
            </p>
          </Link>

        </div>

        <p className="text-center text-[15px] font-medium text-slate-500 mt-12">
          Already have an account? <Link to="/login" className="text-indigo-600 font-bold hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
}