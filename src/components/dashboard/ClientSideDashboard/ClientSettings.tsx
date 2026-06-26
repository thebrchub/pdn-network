import { useState, useRef, useEffect } from 'react';

const TABS = ['General', 'Billing', 'Notifications', 'Security'];

export default function ClientSettings() {
  const [activeTab, setActiveTab] = useState('General');

  // Sliding Indicator State & Refs
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const activeIndex = TABS.indexOf(activeTab);
    const activeElement = tabsRef.current[activeIndex];
    
    if (activeElement) {
      setIndicatorStyle({
        left: activeElement.offsetLeft,
        width: activeElement.offsetWidth,
      });
    }
  }, [activeTab]);

  // Toggle state
  const [toggles, setToggles] = useState({
    proposals: true,
    milestones: true,
    messages: true,
    marketing: false,
    twoFactor: true
  });

  const handleToggle = (key: keyof typeof toggles) => {
    setToggles(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="p-6 sm:p-8 animate-page-in w-full h-full flex flex-col">
      
      {/* 1. SUBTLE HEADER & SLIDING PILL NAVIGATION */}
      <div className="mb-8 flex flex-col gap-5">
        <p className="text-[15px] text-slate-500 font-medium max-w-3xl">
          Manage your workspace configurations, brand identity, billing operations, and account security preferences.
        </p>
        
        <div className="relative flex items-center gap-2 overflow-x-auto hide-scrollbar bg-slate-100/80 p-1.5 rounded-xl w-max border border-slate-200/50">
          
          {/* Sliding Background Box */}
          <div 
            className="absolute top-1.5 bottom-1.5 bg-white rounded-lg shadow-sm border border-slate-200/60 transition-all duration-300 ease-out"
            style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
          />

          {TABS.map((tab, index) => (
            <button
              key={tab}
              ref={(el) => { tabsRef.current[index] = el; }}
              onClick={() => setActiveTab(tab)}
              // Added outline-none to remove the black border, and relative z-10 to sit above the slider
              className={`relative z-10 px-6 py-2.5 text-[13px] font-bold rounded-lg transition-colors whitespace-nowrap outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 ${
                activeTab === tab 
                  ? 'text-slate-900' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* 2. FLUID SPLIT-PANEL CONTENT AREA */}
      <div className="space-y-10 flex-1">
        
        {/* --- GENERAL TAB --- */}
        {activeTab === 'General' && (
          <div className="animate-in fade-in duration-500 space-y-10">
            
            {/* Split Section: Brand Identity */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 2xl:col-span-3 sticky top-6">
                <h3 className="text-[16px] font-bold text-slate-900">Brand Identity</h3>
                <p className="text-[14px] text-slate-500 mt-2 leading-relaxed pr-4">
                  Update your company logo, name, and core contact details. This information is displayed publicly to professionals across the network.
                </p>
              </div>
              
              <div className="lg:col-span-8 2xl:col-span-9 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-heading font-extrabold text-2xl shadow-inner shrink-0">
                    AL
                  </div>
                  <div className="flex gap-3">
                    <button className="px-5 py-2.5 bg-slate-50 border border-slate-200 text-slate-700 text-[13px] font-bold rounded-xl hover:bg-slate-100 transition-colors">
                      Change Logo
                    </button>
                    <button className="px-5 py-2.5 text-rose-600 text-[13px] font-bold hover:bg-rose-50 rounded-xl transition-colors">
                      Remove
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[12px] font-bold text-slate-700 mb-2">Company Name</label>
                    <input type="text" defaultValue="Acme Labs" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[14px] font-medium text-slate-900 outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all" />
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold text-slate-700 mb-2">Website</label>
                    <input type="text" defaultValue="https://acmelabs.com" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[14px] font-medium text-slate-900 outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[12px] font-bold text-slate-700 mb-2">Contact Email</label>
                    <input type="email" defaultValue="hello@acmelabs.com" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[14px] font-medium text-slate-900 outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all" />
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-slate-100" />

            {/* Split Section: Company Bio */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 2xl:col-span-3 sticky top-6">
                <h3 className="text-[16px] font-bold text-slate-900">Company Bio</h3>
                <p className="text-[14px] text-slate-500 mt-2 leading-relaxed pr-4">
                  Write a short description of what your company does. This helps attract the right tier of talent to your open projects.
                </p>
              </div>
              
              <div className="lg:col-span-8 2xl:col-span-9 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-[12px] font-bold text-slate-700 mb-2">Industry</label>
                    <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[14px] font-medium text-slate-900 outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all cursor-pointer appearance-none">
                      <option>Software & Technology</option>
                      <option>Finance & Fintech</option>
                      <option>Healthcare</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold text-slate-700 mb-2">Company Size</label>
                    <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[14px] font-medium text-slate-900 outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all cursor-pointer appearance-none">
                      <option>1-10 Employees</option>
                      <option>11-50 Employees</option>
                      <option>51-200 Employees</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-slate-700 mb-2">About the Company</label>
                  <textarea defaultValue="Acme Labs is a forward-thinking technology firm building the next generation of financial tooling." className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[14px] font-medium text-slate-900 outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all min-h-[120px] resize-y" />
                </div>
                <div className="mt-6 flex justify-end border-t border-slate-100 pt-6">
                  <button className="px-6 py-2.5 bg-slate-900 text-white text-[13px] font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2">
                    Save General Settings
                  </button>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* --- BILLING TAB --- */}
        {activeTab === 'Billing' && (
          <div className="animate-in fade-in duration-500 space-y-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 2xl:col-span-3 sticky top-6">
                <h3 className="text-[16px] font-bold text-slate-900">Payment Methods</h3>
                <p className="text-[14px] text-slate-500 mt-2 leading-relaxed pr-4">
                  Cards and bank accounts used to fund your escrow and pay professionals on the platform.
                </p>
              </div>
              
              <div className="lg:col-span-8 2xl:col-span-9 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
                <div className="flex items-center justify-between p-5 border border-slate-200 rounded-xl mb-4 hover:border-blue-300 transition-colors bg-slate-50/50">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-10 bg-white border border-slate-200 rounded-md flex items-center justify-center shrink-0 shadow-sm">
                      <span className="text-[12px] font-black italic text-blue-900">VISA</span>
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-slate-900">Visa ending in 4242</p>
                      <p className="text-[13px] text-slate-500">Expires 12/28 <span className="mx-2">•</span> Default</p>
                    </div>
                  </div>
                  <button className="text-[13px] font-bold text-slate-500 hover:text-blue-600 transition-colors outline-none">Edit</button>
                </div>
                <button className="w-full py-3.5 bg-slate-50 border border-slate-200 border-dashed text-slate-600 text-[13px] font-bold rounded-xl hover:bg-slate-100 hover:text-slate-900 transition-colors flex items-center justify-center gap-2 outline-none">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                  Add Payment Method
                </button>
              </div>
            </div>

            <hr className="border-slate-100" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 2xl:col-span-3 sticky top-6">
                <h3 className="text-[16px] font-bold text-slate-900">Billing Information</h3>
                <p className="text-[14px] text-slate-500 mt-2 leading-relaxed pr-4">
                  This address will appear on your invoices and escrow deposit receipts.
                </p>
              </div>
              
              <div className="lg:col-span-8 2xl:col-span-9 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="sm:col-span-2">
                    <label className="block text-[12px] font-bold text-slate-700 mb-2">Street Address</label>
                    <input type="text" defaultValue="123 Startup Blvd, Suite 100" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[14px] font-medium text-slate-900 outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all" />
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold text-slate-700 mb-2">City</label>
                    <input type="text" defaultValue="San Francisco" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[14px] font-medium text-slate-900 outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all" />
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold text-slate-700 mb-2">Tax ID / VAT</label>
                    <input type="text" placeholder="Optional" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[14px] font-medium text-slate-900 outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all" />
                  </div>
                </div>
                <div className="mt-6 flex justify-end border-t border-slate-100 pt-6">
                  <button className="px-6 py-2.5 bg-slate-900 text-white text-[13px] font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2">
                    Update Billing
                  </button>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* --- NOTIFICATIONS TAB --- */}
        {activeTab === 'Notifications' && (
          <div className="animate-in fade-in duration-500 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 2xl:col-span-3 sticky top-6">
              <h3 className="text-[16px] font-bold text-slate-900">Email Preferences</h3>
              <p className="text-[14px] text-slate-500 mt-2 leading-relaxed pr-4">
                Control the exact events you want to be notified about. We strongly recommend keeping milestone alerts enabled.
              </p>
            </div>
            
            <div className="lg:col-span-8 2xl:col-span-9 bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6">
              <div className="divide-y divide-slate-100">
                {[
                  { id: 'proposals', title: 'New Proposals', desc: 'When a professional applies to your project.' },
                  { id: 'milestones', title: 'Milestone Submissions', desc: 'When work is submitted for escrow release.' },
                  { id: 'messages', title: 'Direct Messages', desc: 'When you receive a new chat message.' },
                  { id: 'marketing', title: 'Marketing & Tips', desc: 'Occasional platform updates and hiring advice.' }
                ].map((item) => (
                  <div key={item.id} className="flex items-center justify-between py-5 px-2 hover:bg-slate-50/50 transition-colors rounded-xl">
                    <div className="pr-4">
                      <h4 className="text-[15px] font-bold text-slate-900">{item.title}</h4>
                      <p className="text-[13px] text-slate-500 mt-1">{item.desc}</p>
                    </div>
                    <button 
                      onClick={() => handleToggle(item.id as keyof typeof toggles)}
                      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${toggles[item.id as keyof typeof toggles] ? 'bg-blue-600' : 'bg-slate-200'}`}
                    >
                      <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${toggles[item.id as keyof typeof toggles] ? 'translate-x-5' : 'translate-x-0'}`} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* --- SECURITY TAB --- */}
        {activeTab === 'Security' && (
          <div className="animate-in fade-in duration-500 space-y-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 2xl:col-span-3 sticky top-6">
                <h3 className="text-[16px] font-bold text-slate-900">Change Password</h3>
                <p className="text-[14px] text-slate-500 mt-2 leading-relaxed pr-4">
                  Update the password associated with this account. Make sure it's at least 8 characters long.
                </p>
              </div>
              
              <div className="lg:col-span-8 2xl:col-span-9 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[12px] font-bold text-slate-700 mb-2">Current Password</label>
                    <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[14px] font-medium text-slate-900 outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all" />
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold text-slate-700 mb-2">New Password</label>
                    <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[14px] font-medium text-slate-900 outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all" />
                  </div>
                </div>
                <div className="mt-6 flex justify-end border-t border-slate-100 pt-6">
                  <button className="px-6 py-2.5 bg-slate-900 text-white text-[13px] font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2">
                    Update Password
                  </button>
                </div>
              </div>
            </div>

            <hr className="border-slate-100" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 2xl:col-span-3 sticky top-6">
                <h3 className="text-[16px] font-bold text-slate-900">Two-Factor Authentication</h3>
                <p className="text-[14px] text-slate-500 mt-2 leading-relaxed pr-4">
                  Add an extra layer of security to your account requiring a code from your authenticator app.
                </p>
              </div>
              
              <div className="lg:col-span-8 2xl:col-span-9 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div>
                    <h4 className="text-[15px] font-bold text-slate-900">Authenticator App</h4>
                    <p className="text-[13px] text-slate-500 mt-1 max-w-lg">
                      Use an app like Google Authenticator or 1Password to generate one-time codes.
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => handleToggle('twoFactor')}
                    className={`px-5 py-2.5 text-[13px] font-bold rounded-xl transition-colors shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                      toggles.twoFactor 
                        ? 'bg-rose-50 text-rose-600 hover:bg-rose-100 focus-visible:ring-rose-500' 
                        : 'bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-500'
                    }`}
                  >
                    {toggles.twoFactor ? 'Disable 2FA' : 'Enable 2FA'}
                  </button>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}