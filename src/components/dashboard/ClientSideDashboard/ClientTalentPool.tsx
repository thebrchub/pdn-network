import { useState } from 'react';
import { Link } from 'react-router-dom';

// Mock data for the talent pool
const talentPool = [
  {
    id: 1,
    name: 'Alex M.',
    title: 'Senior Frontend Engineer',
    trustScore: 842,
    tier: 'Top 5%',
    rate: 1500,
    availability: '30 hrs/wk',
    avatar: 'https://ui-avatars.com/api/?name=Alex+M&background=0D8ABC&color=fff',
    skills: ['React.js', 'TypeScript', 'Next.js'],
    completed: 14,
  },
  {
    id: 2,
    name: 'Priya K.',
    title: 'UI/UX Product Designer',
    trustScore: 910,
    tier: 'Top 1%',
    rate: 2000,
    availability: '20 hrs/wk',
    avatar: 'https://ui-avatars.com/api/?name=Priya+K&background=10B981&color=fff',
    skills: ['Figma', 'Prototyping', 'Design Systems'],
    completed: 28,
  },
  {
    id: 3,
    name: 'Rahul S.',
    title: 'Full Stack Node.js Developer',
    trustScore: 715,
    tier: 'Top 15%',
    rate: 1200,
    availability: '40 hrs/wk',
    avatar: 'https://ui-avatars.com/api/?name=Rahul+S&background=F59E0B&color=fff',
    skills: ['Node.js', 'Express', 'MongoDB'],
    completed: 8,
  },
  {
    id: 4,
    name: 'Sarah J.',
    title: 'Mobile App Developer (Flutter)',
    trustScore: 885,
    tier: 'Top 5%',
    rate: 1800,
    availability: '15 hrs/wk',
    avatar: 'https://ui-avatars.com/api/?name=Sarah+J&background=6366F1&color=fff',
    skills: ['Flutter', 'Dart', 'Firebase'],
    completed: 19,
  }
];

export default function ClientTalentPool() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="p-6 sm:p-8 animate-page-in max-w-[1440px] mx-auto w-full">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-2">
            ProSpec Talent Pool
          </h1>
          <p className="text-[14px] text-slate-500 font-medium">
            Discover and invite verified, top-tier professionals to your projects.
          </p>
        </div>
        <div className="flex items-center gap-3 bg-white border border-slate-200 p-1.5 rounded-xl shadow-sm">
           <span className="px-3 py-1.5 bg-slate-50 text-slate-600 text-[13px] font-bold rounded-lg">All Talent</span>
           <span className="px-3 py-1.5 hover:bg-slate-50 text-slate-500 text-[13px] font-medium rounded-lg cursor-pointer transition-colors">Saved Profiles</span>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 mb-8 flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          <input 
            type="text" 
            placeholder="Search by skill, title, or keywords..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[14px] font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
        </div>
        
        <div className="flex gap-3">
          <select className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[13px] font-bold text-slate-700 focus:outline-none focus:border-blue-500 cursor-pointer">
            <option>Any Trust Tier</option>
            <option>Top 1% (900+)</option>
            <option>Top 5% (800+)</option>
            <option>Top 15% (700+)</option>
          </select>
          <select className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[13px] font-bold text-slate-700 focus:outline-none focus:border-blue-500 cursor-pointer">
            <option>Hourly Rate</option>
            <option>Under ₹1,000</option>
            <option>₹1,000 - ₹2,000</option>
            <option>₹2,000+</option>
          </select>
        </div>
      </div>

      {/* Talent Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {talentPool.map((pro) => (
          <div key={pro.id} className="bg-white rounded-[1.5rem] border border-slate-200 shadow-sm hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden group">
            
            {/* Card Header & Avatar */}
            <div className="p-6 pb-0 relative">
              <div className="absolute top-4 right-4">
                 <button className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-rose-500 hover:bg-rose-50 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                 </button>
              </div>
              <img src={pro.avatar} alt={pro.name} className="w-16 h-16 rounded-full border-2 border-slate-100 shadow-sm mb-4" />
              <Link to="/b/profile" className="text-[16px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                {pro.name}
              </Link>
              <p className="text-[13px] font-medium text-slate-500 line-clamp-1 mb-4">{pro.title}</p>
            </div>

            {/* Metrics */}
            <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[12px] font-bold text-slate-400 uppercase tracking-wider">Trust Score</span>
                <div className="flex items-center gap-1.5 px-2 py-0.5 bg-white border border-slate-200 rounded text-[12px] font-bold text-blue-700 shadow-sm">
                  <svg className="w-3.5 h-3.5 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
                  {pro.trustScore}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-[12px]">
                <div className="bg-white border border-slate-200 rounded-lg p-2 text-center">
                   <p className="font-bold text-slate-900">₹{pro.rate.toLocaleString('en-IN')}</p>
                   <p className="text-slate-500 text-[10px] uppercase tracking-wider">Hourly</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-2 text-center">
                   <p className="font-bold text-slate-900">{pro.completed}</p>
                   <p className="text-slate-500 text-[10px] uppercase tracking-wider">Projects</p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="px-6 py-4 border-t border-slate-100 flex-1">
              <div className="flex flex-wrap gap-1.5">
                {pro.skills.map(skill => (
                  <span key={skill} className="px-2 py-1 bg-slate-100 text-slate-600 text-[11px] font-bold rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Action */}
            <div className="p-4 border-t border-slate-100">
              <button className="w-full py-2.5 bg-white border border-blue-200 text-blue-600 text-[13px] font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-sm">
                Invite to Project
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}