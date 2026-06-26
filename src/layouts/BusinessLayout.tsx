import { useState, useRef, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function BusinessLayout() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname.includes(path);

  // --- DROPDOWN STATES ---
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
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

  const sidebarLinks = [
    { name: 'Dashboard', path: '/b/dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { name: 'Projects', path: '/b/projects', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
    { name: 'Professionals', path: '/b/professionals', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
    { name: 'Messages', path: '/b/messages', icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z', badge: '8' },
    { name: 'Payments & Escrow', path: '/b/escrow', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    { name: 'Reviews', path: '/b/reviews', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' },
    { name: 'Reports', path: '/b/reports', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
    { name: 'Settings', path: '/b/settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM12 15a3 3 0 100-6 3 3 0 000 6z' },
  ];

  return (
    <div className="min-h-screen flex bg-[#F8FAFC] font-sans">
      
      {/* 1. SIDEBAR NAVIGATION */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden lg:flex flex-col h-screen sticky top-0 shrink-0">
        <div className="h-16 flex items-center px-6 border-b border-slate-100 shrink-0">
          <Link to="/">
            <img src="/logo.svg" alt="ProSpec" className="h-7 w-auto" />
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          {sidebarLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors ${
                isActive(link.path)
                  ? 'bg-blue-50 text-blue-700 font-bold' 
                  : 'text-slate-600 hover:bg-slate-50 font-medium'
              }`}
            >
              <div className="flex items-center gap-3">
                <svg className={`w-5 h-5 ${isActive(link.path) ? 'text-blue-600' : 'text-slate-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={isActive(link.path) ? 2.5 : 2} d={link.icon} />
                </svg>
                <span className="text-[14px]">{link.name}</span>
              </div>
              {link.badge && (
                <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[11px] font-bold">
                  {link.badge}
                </span>
              )}
            </Link>
          ))}
        </div>

        <div className="p-4 mb-4 shrink-0">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <h4 className="text-[13px] font-bold text-slate-900 mb-1">Need Help?</h4>
            <p className="text-[12px] text-slate-500 mb-3 leading-relaxed">Our support team is always here to help.</p>
            <button className="w-full py-2 bg-white border border-slate-200 rounded-lg text-[13px] font-bold text-blue-600 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 shadow-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              Contact Support
            </button>
          </div>
        </div>
      </aside>

      {/* 2. MAIN CONTENT WRAPPER */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* TOP HEADER */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 sm:px-8 shrink-0 sticky top-0 z-30">
          <h2 className="text-[15px] font-bold text-slate-900 capitalize">
            {location.pathname.split('/').pop() || 'Dashboard'}
          </h2>
          
          <div className="flex items-center gap-5" ref={headerRef}>
            
           
            
            {/* NOTIFICATIONS DROPDOWN */}
            <div className="relative">
              <button 
                onClick={() => {
                  setShowNotifications(!showNotifications);
                  setShowProfile(false);
                }}
                className={`transition-colors ${showNotifications ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              </button>
              <span className="absolute top-0 right-0 w-2 h-2 bg-rose-500 rounded-full border border-white"></span>

              {showNotifications && (
                <div className="absolute right-0 mt-4 w-80 sm:w-96 bg-white border border-slate-200 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                    <h3 className="text-[14px] font-bold text-slate-900">Notifications</h3>
                    <button className="text-[12px] font-bold text-blue-600 hover:text-blue-700">Mark all read</button>
                  </div>
                  <div className="max-h-[350px] overflow-y-auto divide-y divide-slate-100">
                    {/* Notification Item 1 */}
                    <div className="p-4 hover:bg-slate-50 transition-colors cursor-pointer flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" /></svg>
                      </div>
                      <div>
                        <p className="text-[13px] text-slate-900"><span className="font-bold">Alex M.</span> sent you a new message regarding Fintech Dashboard.</p>
                        <p className="text-[11px] text-slate-400 mt-1">10 minutes ago</p>
                      </div>
                      <div className="w-2 h-2 bg-blue-600 rounded-full shrink-0 mt-1.5"></div>
                    </div>
                    {/* Notification Item 2 */}
                    <div className="p-4 hover:bg-slate-50 transition-colors cursor-pointer flex gap-4 opacity-75">
                      <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <div>
                        <p className="text-[13px] text-slate-900"><span className="font-bold">Payment Released</span> of ₹25,000 to Karen D.</p>
                        <p className="text-[11px] text-slate-400 mt-1">2 hours ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 border-t border-slate-100 text-center bg-slate-50">
                    <Link to="/b/dashboard" className="text-[12px] font-bold text-slate-600 hover:text-blue-600">View All Activity</Link>
                  </div>
                </div>
              )}
            </div>

            <div className="h-6 w-px bg-slate-200 mx-1"></div>

            {/* PROFILE DROPDOWN */}
            <div className="relative">
              <button 
                onClick={() => {
                  setShowProfile(!showProfile);
                  setShowNotifications(false);
                }}
                className={`flex items-center gap-3 transition-opacity ${showProfile ? 'opacity-70' : 'hover:opacity-80'}`}
              >
                <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center text-[11px] font-bold">
                  BR
                </div>
                <div className="text-left hidden sm:block">
                  <div className="text-[13px] font-bold text-slate-900 leading-none">Blazing Render Studios</div>
                  <div className="text-[11px] text-slate-500 mt-1">Company</div>
                </div>
                <svg className={`w-4 h-4 text-slate-400 hidden sm:block transition-transform duration-200 ${showProfile ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>

              {showProfile && (
                <div className="absolute right-0 mt-4 w-64 bg-white border border-slate-200 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="p-4 border-b border-slate-100 bg-slate-50/50">
                    <p className="text-[14px] font-bold text-slate-900">Srikanth</p>
                    <p className="text-[12px] text-slate-500 truncate mt-0.5">srikanth@blazingrender.com</p>
                  </div>
                  <div className="p-2">
                    <Link to="/b/profile" className="flex items-center gap-3 px-3 py-2.5 text-[13px] font-bold text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                      Public Company Profile
                    </Link>
                    <Link to="/b/settings" className="flex items-center gap-3 px-3 py-2.5 text-[13px] font-bold text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
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

        {/* 3. SCROLLABLE PAGE CONTENT (Outlet) */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>

      </div>
    </div>
  );
}