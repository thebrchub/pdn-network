import { useState } from 'react';

export default function Settings() {
  const [notifications, setNotifications] = useState({
    matches: true,
    milestones: true,
    inbox: true,
    trustAdjustments: true
  });

  const [tfaEnabled, setTfaEnabled] = useState(false);
  const [saveStatus, setSaveStatus] = useState(false);

  const handleToggle = (key: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaveStatus(true);
    setTimeout(() => {
      setSaveStatus(false);
    }, 2000);
  };

  return (
    <div className="w-full h-full p-6 sm:p-8 overflow-y-auto font-sans animate-page-in">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Settings</h1>
          <p className="text-slate-500 text-sm mt-1 font-medium">Manage notifications, billing bank accounts, and credentials.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Notifications & Security & Bank */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Notification Preferences */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm">
            <h3 className="text-[16px] font-extrabold text-slate-800 tracking-tight mb-4">Notification Preferences</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between py-2 border-b border-slate-100 last:border-b-0">
                <div>
                  <h4 className="text-[14px] font-bold text-slate-700">Project Matches</h4>
                  <p className="text-[11px] text-slate-400 font-medium">Get notified when a new client project fits your skill profile.</p>
                </div>
                <button 
                  onClick={() => handleToggle('matches')}
                  className={`w-11 h-6 rounded-full transition-colors relative flex items-center shrink-0 ${
                    notifications.matches ? 'bg-blue-600' : 'bg-slate-200'
                  }`}
                >
                  <span className={`w-4 h-4 bg-white rounded-full transition-transform shadow-sm absolute ${
                    notifications.matches ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-slate-100 last:border-b-0">
                <div>
                  <h4 className="text-[14px] font-bold text-slate-700">Milestone Approvals</h4>
                  <p className="text-[11px] text-slate-400 font-medium">Get immediate notification when a milestone is verified and signed off.</p>
                </div>
                <button 
                  onClick={() => handleToggle('milestones')}
                  className={`w-11 h-6 rounded-full transition-colors relative flex items-center shrink-0 ${
                    notifications.milestones ? 'bg-blue-600' : 'bg-slate-200'
                  }`}
                >
                  <span className={`w-4 h-4 bg-white rounded-full transition-transform shadow-sm absolute ${
                    notifications.milestones ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-slate-100 last:border-b-0">
                <div>
                  <h4 className="text-[14px] font-bold text-slate-700">Inbox Conversations</h4>
                  <p className="text-[11px] text-slate-400 font-medium">Get pinged when a client sends a message or direct interview invitation.</p>
                </div>
                <button 
                  onClick={() => handleToggle('inbox')}
                  className={`w-11 h-6 rounded-full transition-colors relative flex items-center shrink-0 ${
                    notifications.inbox ? 'bg-blue-600' : 'bg-slate-200'
                  }`}
                >
                  <span className={`w-4 h-4 bg-white rounded-full transition-transform shadow-sm absolute ${
                    notifications.inbox ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-slate-100 last:border-b-0">
                <div>
                  <h4 className="text-[14px] font-bold text-slate-700">Trust Score Updates</h4>
                  <p className="text-[11px] text-slate-400 font-medium">Receive logs when your trust score adjusts following deliveries or review feedback.</p>
                </div>
                <button 
                  onClick={() => handleToggle('trustAdjustments')}
                  className={`w-11 h-6 rounded-full transition-colors relative flex items-center shrink-0 ${
                    notifications.trustAdjustments ? 'bg-blue-600' : 'bg-slate-200'
                  }`}
                >
                  <span className={`w-4 h-4 bg-white rounded-full transition-transform shadow-sm absolute ${
                    notifications.trustAdjustments ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
            </div>
          </div>

          {/* Banking & Payout Credentials */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm">
            <h3 className="text-[16px] font-extrabold text-slate-800 tracking-tight mb-4">Payout Accounts</h3>
            
            <div className="p-4 bg-[#FAFAFC] border border-slate-200/50 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="bg-emerald-50 text-emerald-600 border border-emerald-100 text-[10px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider">Primary payout linked</span>
                <h4 className="text-[15px] font-extrabold text-slate-800 mt-2">HDFC Bank Limited</h4>
                <p className="text-xs font-bold text-slate-400">Account Number: •••• 4920 • Routing IFSC: HDFC0000214</p>
              </div>
              <button className="px-4 py-2 border border-slate-200 hover:bg-slate-100 text-[12px] font-bold text-slate-700 rounded-xl transition-all self-start sm:self-center shrink-0">
                Change Bank
              </button>
            </div>
          </div>

          {/* Security Credentials */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm">
            <h3 className="text-[16px] font-extrabold text-slate-800 tracking-tight mb-4">Security</h3>
            
            <form onSubmit={handleSave} className="space-y-4">
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <div>
                  <h4 className="text-[14px] font-bold text-slate-700">Two-Factor Authentication</h4>
                  <p className="text-[11px] text-slate-400 font-medium">Verify login requests via SMS code verification.</p>
                </div>
                <button 
                  type="button"
                  onClick={() => setTfaEnabled(!tfaEnabled)}
                  className={`w-11 h-6 rounded-full transition-colors relative flex items-center shrink-0 ${
                    tfaEnabled ? 'bg-blue-600' : 'bg-slate-200'
                  }`}
                >
                  <span className={`w-4 h-4 bg-white rounded-full transition-transform shadow-sm absolute ${
                    tfaEnabled ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              <div>
                <button 
                  type="submit"
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-[13px] font-bold rounded-xl shadow-sm transition-colors"
                >
                  Save Security Changes
                </button>
              </div>

              {saveStatus && (
                <p className="text-xs font-bold text-emerald-600">Preferences updated successfully!</p>
              )}
            </form>
          </div>

        </div>

        {/* Right Column: Vetting status checklist */}
        <div className="lg:col-span-4 space-y-6">
          
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm">
            <h3 className="text-[16px] font-extrabold text-slate-800 tracking-tight mb-4">Compliance Status</h3>
            <ul className="space-y-3 text-xs font-bold text-slate-500">
              <li className="flex items-center justify-between">
                <span>GST Tax Details</span>
                <span className="text-amber-500 bg-amber-50 px-2 py-0.5 rounded text-[10px]">Unlinked</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Aadhaar Identity Match</span>
                <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded text-[10px]">Verified</span>
              </li>
              <li className="flex items-center justify-between">
                <span>PAN Registration Status</span>
                <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded text-[10px]">Verified</span>
              </li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
}
