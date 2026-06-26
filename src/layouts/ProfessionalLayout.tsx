import { Link, NavLink, Outlet } from 'react-router-dom';

export default function ProfessionalLayout() {
  return (
    <div className="min-h-screen bg-[#FAFAFC] font-sans flex flex-col">
      
      {/* ========================================== */}
      {/* Universal Professional Top Navigation      */}
      {/* ========================================== */}
      <nav className="w-full bg-white border-b border-slate-200/80 px-4 sm:px-8 py-4 flex items-center justify-between sticky top-0 z-40 shadow-[0_4px_20px_-15px_rgba(37,99,235,0.05)]">
        <div className="flex items-center gap-8">
          <Link to="/" className="cursor-pointer transition-transform hover:opacity-80">
            <img src="/logo.svg" alt="ProSpec" className="h-7 w-auto" />
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex gap-6 text-[13px] font-bold text-slate-400 uppercase tracking-wider">
            <NavLink 
              to="/p/dashboard" 
              className={({ isActive }) => isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-slate-700 transition-colors pb-1"}
            >
              Find Work
            </NavLink>
            <NavLink 
              to="/p/contracts" 
              className={({ isActive }) => isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-slate-700 transition-colors pb-1"}
            >
              My Contracts
            </NavLink>
            <NavLink 
              to="/p/finances" 
              className={({ isActive }) => isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-slate-700 transition-colors pb-1"}
            >
              Finances
            </NavLink>
            <NavLink 
              to="/p/messages" 
              className={({ isActive }) => isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1 flex items-center gap-1" : "hover:text-slate-700 transition-colors pb-1 flex items-center gap-1"}
            >
              Messages <span className="bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded-full text-[10px]">3</span>
            </NavLink>
          </div>
        </div>
        
        {/* Right Side Actions & Profile */}
        <div className="flex items-center gap-4">
          <button className="text-slate-400 hover:text-slate-600 focus:outline-none hidden sm:block">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </button>
          <button className="text-slate-400 hover:text-slate-600 focus:outline-none relative">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
            <span className="absolute top-0 right-0 w-2 h-2 bg-rose-500 rounded-full border border-white"></span>
          </button>
          
          <div className="flex items-center gap-2 pl-4 border-l border-slate-200 cursor-pointer group">
            <img src="https://ui-avatars.com/api/?name=Alex+M&background=0D8ABC&color=fff" alt="Alex M." className="w-8 h-8 rounded-full border border-slate-200 shadow-sm" />
            <svg className="w-4 h-4 text-slate-400 group-hover:text-slate-600 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
        </div>
      </nav>

      {/* ========================================== */}
      {/* MAIN PAGE CONTENT INJECTED HERE            */}
      {/* ========================================== */}
      <div className="flex-1 flex flex-col h-[calc(100vh-73px)] overflow-y-auto">
        <Outlet />
      </div>
      
    </div>
  );
}