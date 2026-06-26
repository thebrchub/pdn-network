import { useState } from 'react';

export default function Profile() {
  const [hourlyRate, setHourlyRate] = useState('₹1,500');
  const [isEditingRate, setIsEditingRate] = useState(false);
  const [availability, setAvailability] = useState<'available' | 'busy' | 'offline'>('available');

  const profileData = {
    name: "Alex Miller",
    title: "Senior Frontend Engineer & UI Architect",
    location: "Bangalore, India",
    trustScore: 842,
    completionRate: "96%",
    averageRating: "4.95",
    verifications: [
      { name: "Aadhaar Vetted", status: true, desc: "Government identity match" },
      { name: "PAN Card Vetted", status: true, desc: "Tax database registration record" },
      { name: "Github Developer link", status: true, desc: "40+ public contributions" },
      { name: "GST registration", status: false, desc: "Corporate business registration" }
    ],
    verifiedSkills: ["React.js", "TypeScript", "Tailwind CSS", "Next.js", "GraphQL", "Vite"],
    portfolio: [
      { title: "Fintech Escrow Console", desc: "A dashboard featuring milestone lock mechanisms and Stripe API integration.", tag: "React.js", bg: "from-blue-500 to-cyan-600" },
      { title: "SaaS Analytics Dashboard", desc: "B2B internal data visualization console for reporting active performance metrics.", tag: "TypeScript", bg: "from-indigo-500 to-purple-600" },
      { title: "Web3 Identity Vetting System", desc: "Decentralized verification dashboard showing on-chain reputation stats.", tag: "GraphQL", bg: "from-teal-500 to-emerald-600" }
    ],
    workHistory: [
      { client: "Stripe India", role: "Frontend Lead", period: "May 2026 - Present", rating: 5.0, comment: "Exceptional delivery. Very communicative and proactive." },
      { client: "Zeta Inc", role: "React Architect", period: "Jan 2026 - Apr 2026", rating: 4.9, comment: "High quality engineering. Delivered fully tested dashboard panels." }
    ]
  };

  const handleSaveRate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditingRate(false);
  };

  return (
    <div className="w-full h-full p-6 sm:p-8 overflow-y-auto font-sans animate-page-in">
      
      {/* Header Profile Identity */}
      <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-5 flex-wrap sm:flex-nowrap">
            <img src="https://ui-avatars.com/api/?name=Alex+M&background=0D8ABC&color=fff" alt="Alex M." className="w-20 h-20 rounded-full border-4 border-slate-50 shadow-md" />
            <div>
              <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">{profileData.name}</h1>
              <p className="text-slate-500 text-sm font-bold mt-1">{profileData.title} • {profileData.location}</p>
              <div className="flex items-center gap-3 mt-3 flex-wrap">
                <span className="bg-blue-50 text-blue-600 text-[11px] font-extrabold px-2.5 py-0.5 rounded uppercase tracking-wider">★ {profileData.averageRating} Rating</span>
                <span className="bg-emerald-50 text-emerald-600 text-[11px] font-extrabold px-2.5 py-0.5 rounded uppercase tracking-wider">{profileData.completionRate} On-Time</span>
                <span className="bg-indigo-50 text-indigo-600 text-[11px] font-extrabold px-2.5 py-0.5 rounded uppercase tracking-wider">Trust Score: {profileData.trustScore}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            {/* Availability Selection */}
            <div className="bg-[#FAFAFC] border border-slate-200/80 rounded-2xl p-2 flex items-center gap-1.5 self-start">
              <button 
                onClick={() => setAvailability('available')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  availability === 'available' ? 'bg-white text-slate-800 shadow-sm border border-slate-200/50' : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-1.5"></span>
                Active
              </button>
              <button 
                onClick={() => setAvailability('busy')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  availability === 'busy' ? 'bg-white text-slate-800 shadow-sm border border-slate-200/50' : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                <span className="inline-block w-2 h-2 rounded-full bg-amber-500 mr-1.5"></span>
                Busy
              </button>
              <button 
                onClick={() => setAvailability('offline')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  availability === 'offline' ? 'bg-white text-slate-800 shadow-sm border border-slate-200/50' : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                <span className="inline-block w-2 h-2 rounded-full bg-slate-400 mr-1.5"></span>
                Offline
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Rates, Skills, Portfolio, Work History */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Rates Settings */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm">
            <h3 className="text-[16px] font-extrabold text-slate-800 tracking-tight mb-4">Financial Settings & Rates</h3>
            
            <div className="flex items-center justify-between p-4 bg-[#FAFAFC] rounded-2xl border border-slate-100">
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Target Rate (Hourly)</span>
                {isEditingRate ? (
                  <form onSubmit={handleSaveRate} className="flex items-center gap-2 mt-1">
                    <input 
                      type="text" 
                      value={hourlyRate}
                      onChange={(e) => setHourlyRate(e.target.value)}
                      className="bg-white border border-slate-200 rounded-lg px-2.5 py-1 text-[15px] font-bold text-slate-800 w-28 focus:outline-none"
                    />
                    <button type="submit" className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-lg hover:bg-blue-700">Save</button>
                  </form>
                ) : (
                  <span className="text-[20px] font-extrabold text-slate-800 block mt-0.5">{hourlyRate}/hr</span>
                )}
              </div>
              
              {!isEditingRate && (
                <button 
                  onClick={() => setIsEditingRate(true)}
                  className="px-4 py-2 border border-slate-200 hover:bg-slate-50 text-[12px] font-bold text-slate-700 rounded-xl transition-all"
                >
                  Adjust Rate
                </button>
              )}
            </div>
          </div>

          {/* Portfolio Showcase */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[16px] font-extrabold text-slate-800 tracking-tight">Portfolio & Delivery Logs</h3>
              <button className="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-600 text-[12px] font-bold rounded-xl transition-all">+ Add Project</button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {profileData.portfolio.map((item, index) => (
                <div key={index} className="border border-slate-100 rounded-2xl overflow-hidden hover:shadow-md transition-all group cursor-pointer flex flex-col justify-between h-full bg-white">
                  <div className={`h-24 bg-gradient-to-r ${item.bg} p-4 flex items-end justify-between relative`}>
                    <span className="px-2 py-0.5 bg-white/20 backdrop-blur-md border border-white/10 rounded text-[9px] font-extrabold uppercase text-white tracking-wide">{item.tag}</span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                    <h4 className="text-[14px] font-extrabold text-slate-800 leading-tight group-hover:text-blue-600 transition-colors">{item.title}</h4>
                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Skills */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm">
            <h3 className="text-[16px] font-extrabold text-slate-800 tracking-tight mb-4">Competency & Verified Skills</h3>
            <div className="flex flex-wrap gap-2">
              {profileData.verifiedSkills.map((skill, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-50 text-emerald-700 text-[12px] font-bold rounded-xl border border-emerald-100/60"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  {skill}
                </span>
              ))}
              <span className="px-3.5 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-500 text-[12px] font-bold rounded-xl cursor-pointer transition-colors">+ Request Verification</span>
            </div>
          </div>

          {/* Work History */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm">
            <h3 className="text-[16px] font-extrabold text-slate-800 tracking-tight mb-4">Verified Work History</h3>
            
            <div className="divide-y divide-slate-100">
              {profileData.workHistory.map((item, index) => (
                <div key={index} className="py-4 first:pt-0 last:pb-0 space-y-2">
                  <div className="flex justify-between items-baseline gap-4">
                    <h4 className="text-[14px] font-extrabold text-slate-800">{item.client} • <span className="font-medium text-slate-500">{item.role}</span></h4>
                    <span className="text-[11px] text-slate-400 font-bold whitespace-nowrap">{item.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400 text-xs font-bold">★★★★★</span>
                    <span className="text-slate-800 text-xs font-bold">({item.rating.toFixed(1)})</span>
                  </div>
                  <p className="text-[13px] text-slate-500 font-medium italic">"{item.comment}"</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Verifications & Trust Badges */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Identity Verifications list */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm">
            <h3 className="text-[16px] font-extrabold text-slate-800 tracking-tight mb-4">Verification Checklists</h3>
            
            <div className="space-y-4">
              {profileData.verifications.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center mt-0.5 shrink-0 ${
                    item.status 
                      ? 'bg-emerald-50 text-emerald-600 border-emerald-200' 
                      : 'bg-white text-slate-300 border-slate-200'
                  }`}>
                    {item.status ? (
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    ) : (
                      <span className="w-1.5 h-1.5 bg-slate-200 rounded-full" />
                    )}
                  </div>
                  <div>
                    <h4 className={`text-[13px] font-bold ${item.status ? 'text-slate-800' : 'text-slate-400'}`}>{item.name}</h4>
                    <p className="text-[11px] text-slate-400 font-medium mt-0.5">{item.desc}</p>
                    {!item.status && (
                      <button className="text-[11px] font-bold text-blue-600 hover:underline mt-1.5 block">Initiate Verification</button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
