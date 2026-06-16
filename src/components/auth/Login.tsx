// src/components/auth/Login.tsx
export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAFC] p-4 font-sans relative">
      
      {/* Top Right Logo Redirect */}
      <header className="absolute top-0 left-0 p-8">
        <a href="/" className="cursor-pointer block transition-transform hover:opacity-80">
          <img src="/logo.svg" alt="ProSpec" className="h-8 w-auto" />
        </a>
      </header>
      <div className="w-full max-w-md bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)]">
        
        {/* Centering container added here */}
        <div className="flex flex-col items-center">
          <img src="/logo.svg" alt="ProSpec" className="h-8 mb-8" />
          <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6">Login to ProSpec</h2>
        </div>
        
        <form className="space-y-4">
          <div>
            <label className="block text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-2">Work Email</label>
            <input type="email" className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-600 transition-colors" placeholder="name@company.com" />
          </div>
          <div>
            <label className="block text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-2">Password</label>
            <input type="password" className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-600 transition-colors" />
          </div>
          <button className="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors">
            Sign In
          </button>
        </form>

        <div className="mt-8 space-y-3 text-center">
          <div className="text-sm">
            <span className="text-slate-500">Don't have an account? </span>
            <a href="/signup" className="text-indigo-600 font-bold hover:underline">Sign up</a>
          </div>
          
          <div>
            <a href="/forgot-password" className="text-sm text-slate-500 hover:text-indigo-600 font-medium">Forgot password?</a>
          </div>
        </div>
      </div>
    </div>
  );
}