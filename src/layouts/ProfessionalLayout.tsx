import { useState, useRef, useEffect } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

export default function ProfessionalLayout() {
  // --- STATES ---
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile Menu State
  const headerRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
        setShowProfile(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  // --- NAVIGATION CONFIG ---
  const navLinks = [
    { name: 'Today', path: '/p/dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { name: 'Opportunities', path: '/p/opportunities', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { name: 'Projects', path: '/p/projects', icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z' },
    { name: 'Reputation', path: '/p/reputation', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
    { name: 'Earnings', path: '/p/earnings', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0-2.08.402-2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { name: 'Inbox', path: '/p/messages', badge: '3', icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' },
  ];

  return (
    <div className="h-screen bg-slate-50 font-sans flex flex-col overflow-hidden">

      {/* ========================================== */}
      {/* MOBILE: Slide-Out Drawer Overlay           */}
      {/* ========================================== */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Dark Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Sliding Drawer */}
          <div className="relative w-64 max-w-[80vw] bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-left duration-300">
            <div className="h-16 flex items-center justify-between px-5 border-b border-slate-100 shrink-0">
              <img src="/logo.svg" alt="ProSpec" className="h-6 w-auto" />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 -mr-2 text-slate-400 hover:bg-slate-100 rounded-lg transition-colors outline-none"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto py-5 px-3 space-y-1.5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3 py-3 rounded-xl text-[14px] font-bold transition-colors ${isActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <div className="flex items-center gap-3">
                        <svg className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={isActive ? 2.5 : 2} d={link.icon} />
                        </svg>
                        {link.name}
                      </div>
                      {link.badge && (
                        <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-[11px] font-bold">
                          {link.badge}
                        </span>
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Drawer Footer */}
            <div className="p-4 border-t border-slate-100">
              <Link to="/p/settings" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-3 py-2.5 text-[14px] font-bold text-slate-600 hover:bg-slate-50 rounded-xl transition-colors">
                <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM12 15a3 3 0 100-6 3 3 0 000 6z" /></svg>
                Settings
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ========================================== */}
      {/* HEADER: Universal Top Navigation           */}
      {/* ========================================== */}
      <header className="w-full bg-white border-b border-slate-200 px-4 sm:px-8 h-16 flex items-center justify-between shrink-0 z-40 relative" ref={headerRef}>

        {/* Left: Hamburger, Logo & Desktop Links */}
        <div className="flex items-center gap-3 sm:gap-8">

          {/* Hamburger Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 -ml-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <Link to="/" className="cursor-pointer transition-transform hover:opacity-80 shrink-0">
            <img src="/logo.svg" alt="ProSpec" className="h-6 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-xl text-[13px] font-bold transition-colors ${isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                  }`
                }
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
                </svg>
                {link.name}
                {link.badge && (
                  <span className="bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded-full text-[10px] leading-none ml-1">
                    {link.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Right: Actions & Profile */}
        <div className="flex items-center gap-3 sm:gap-5">

          {/* Notifications Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowProfile(false);
              }}
              className={`transition-colors relative p-1 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg ${showNotifications ? 'text-blue-600 bg-blue-50' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'}`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              <span className="absolute top-1 right-1.5 w-2 h-2 bg-rose-500 rounded-full border border-white"></span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-3 w-80 sm:w-96 bg-white border border-slate-200 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden z-50 animate-in fade-in slide-in-from-top-2">
                <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                  <h3 className="text-[14px] font-bold text-slate-900">Notifications</h3>
                  <button className="text-[12px] font-bold text-blue-600 hover:text-blue-700">Mark all read</button>
                </div>
                <div className="max-h-[350px] overflow-y-auto divide-y divide-slate-100">
                  <div className="p-4 hover:bg-slate-50 transition-colors cursor-pointer flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" /></svg>
                    </div>
                    <div>
                      <p className="text-[13px] text-slate-900"><span className="font-bold">Acme Labs</span> sent you a new message regarding Fintech Dashboard.</p>
                      <p className="text-[11px] text-slate-400 mt-1">10 minutes ago</p>
                    </div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full shrink-0 mt-1.5"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="h-6 w-px bg-slate-200 mx-0.5 hidden sm:block"></div>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setShowProfile(!showProfile);
                setShowNotifications(false);
              }}
              className="flex items-center gap-2 transition-opacity hover:opacity-80 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-full"
            >
              <img src="https://ui-avatars.com/api/?name=Alex+M&background=0D8ABC&color=fff" alt="Alex M." className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-slate-200 shadow-sm" />
              <svg className={`w-4 h-4 text-slate-400 hidden sm:block transition-transform duration-200 ${showProfile ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>

            {showProfile && (
              <div className="absolute right-0 mt-3 w-64 bg-white border border-slate-200 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden z-50 animate-in fade-in slide-in-from-top-2">
                <div className="p-4 border-b border-slate-100 bg-slate-50/50">
                  <p className="text-[14px] font-bold text-slate-900">Alex M.</p>
                  <p className="text-[12px] text-slate-500 truncate mt-0.5">Frontend Engineer</p>
                </div>
                <div className="p-2">
                  <Link to="/p/profile" className="flex items-center gap-3 px-3 py-2.5 text-[13px] font-bold text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    Public Trust Profile
                  </Link>
                  <Link to="/p/settings" className="flex items-center gap-3 px-3 py-2.5 text-[13px] font-bold text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM12 15a3 3 0 100-6 3 3 0 000 6z" /></svg>
                    Account Settings
                  </Link>
                </div>
                <div className="p-2 border-t border-slate-100">
                  <Link to="/login" className="flex items-center gap-3 px-3 py-2.5 text-[13px] font-bold text-rose-600 hover:bg-rose-50 rounded-lg transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                    Sign Out
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* ========================================== */}
      {/* MAIN: Fluid Content Area                   */}
      {/* ========================================== */}
      <main className="flex-1 overflow-y-auto w-full">
        <Outlet />
      </main>

    </div>
  );
}