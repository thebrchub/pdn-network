import { useState } from 'react';

// Mock Data
const mockStats = {
  averageRating: 4.8,
  receivedCount: 14,
  givenCount: 9,
  reviewLink: 'prospec.com/r/acme-labs'
};

const pendingReviews = [
  { id: 1, name: 'Priya K.', role: 'UI/UX Product Designer', project: 'E-commerce Platform Redesign', avatar: 'https://ui-avatars.com/api/?name=Priya+K&background=10B981&color=fff' },
  { id: 2, name: 'Sarah J.', role: 'Mobile App Developer', project: 'Mobile App MVP (Flutter)', avatar: 'https://ui-avatars.com/api/?name=Sarah+J&background=6366F1&color=fff' }
];

const receivedReviews = [
  { id: 1, name: 'Rahul S.', rating: 5, date: 'Mar 15, 2026', text: 'Acme Labs was fantastic to work with. Clear communication, prompt payments, and a very well-defined scope. Highly recommend!', avatar: 'https://ui-avatars.com/api/?name=Rahul+S&background=F59E0B&color=fff' },
  { id: 2, name: 'David W.', rating: 4, date: 'Jan 22, 2026', text: 'Great client. The project took a slight pivot halfway through, but they were very accommodating with timelines and budget.', avatar: 'https://ui-avatars.com/api/?name=David+W&background=slate&color=fff' }
];

const givenReviews = [
  { id: 1, name: 'Alex M.', rating: 5, date: 'Feb 10, 2026', text: 'Alex is an exceptional frontend engineer. Delivered the dashboard 2 days ahead of schedule with zero bugs. Will definitely hire again.', avatar: 'https://ui-avatars.com/api/?name=Alex+M&background=0D8ABC&color=fff' }
];

// Helper component for Star Ratings
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} className={`w-4 h-4 ${star <= rating ? 'text-amber-400' : 'text-slate-200'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export default function ClientReviews() {
  const [activeTab, setActiveTab] = useState('Pending');
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(mockStats.reviewLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-6 sm:p-8 animate-page-in max-w-[1440px] mx-auto w-full flex flex-col h-full">
      
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-2">
          Reviews & Reputation
        </h1>
        <p className="text-[14px] text-slate-500 font-medium">
          Manage your feedback, review your active freelancers, and build your trust profile.
        </p>
      </div>

      {/* Top Overview Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        
        {/* Rating Card */}
        <div className="bg-white p-6 rounded-[1.5rem] border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[13px] font-bold text-slate-500 uppercase tracking-wider mb-1">Company Rating</p>
            <div className="flex items-end gap-2">
              <h2 className="text-3xl font-black text-slate-900 leading-none">{mockStats.averageRating}</h2>
              <span className="text-slate-400 font-bold mb-1">/ 5.0</span>
            </div>
          </div>
          <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center">
            <svg className="w-7 h-7 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
          </div>
        </div>

        {/* Counts Card */}
        <div className="bg-white p-6 rounded-[1.5rem] border border-slate-200 shadow-sm flex justify-around items-center">
          <div className="text-center">
            <p className="text-[12px] font-bold text-slate-500 uppercase tracking-wider mb-1">Received</p>
            <p className="text-2xl font-black text-slate-900">{mockStats.receivedCount}</p>
          </div>
          <div className="w-px h-12 bg-slate-200"></div>
          <div className="text-center">
            <p className="text-[12px] font-bold text-slate-500 uppercase tracking-wider mb-1">Given</p>
            <p className="text-2xl font-black text-slate-900">{mockStats.givenCount}</p>
          </div>
        </div>

        {/* Share Link Card */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-[1.5rem] shadow-sm flex flex-col justify-center">
          <p className="text-[13px] font-bold text-blue-100 mb-2">Request a Review</p>
          <div className="flex items-center gap-2 bg-white/10 p-1.5 rounded-xl border border-white/20">
            <input 
              type="text" 
              readOnly 
              value={mockStats.reviewLink} 
              className="bg-transparent text-white text-[13px] font-medium px-2 w-full focus:outline-none"
            />
            <button 
              onClick={handleCopyLink}
              className="px-4 py-2 bg-white text-blue-700 text-[12px] font-bold rounded-lg hover:bg-blue-50 transition-colors shrink-0"
            >
              {copied ? 'Copied!' : 'Copy Link'}
            </button>
          </div>
        </div>

      </div>

      {/* Main Content Area */}
      <div className="bg-white border border-slate-200 rounded-[1.5rem] shadow-sm flex-1 flex flex-col overflow-hidden">
        
        {/* Tabs */}
        <div className="flex border-b border-slate-200 px-6 pt-4 gap-6 bg-slate-50/50">
          {['Pending', 'Received', 'Given'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-[14px] font-bold transition-all relative ${
                activeTab === tab ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-t-full"></span>
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto">
          
          {/* --- PENDING TAB --- */}
          {activeTab === 'Pending' && (
            <div className="space-y-4">
              {pendingReviews.length > 0 ? pendingReviews.map((pro) => (
                <div key={pro.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 border border-slate-200 rounded-2xl hover:border-blue-300 transition-colors bg-white">
                  <div className="flex items-center gap-4">
                    <img src={pro.avatar} alt={pro.name} className="w-12 h-12 rounded-full border border-slate-100" />
                    <div>
                      <h4 className="text-[15px] font-bold text-slate-900">{pro.name}</h4>
                      <p className="text-[13px] text-slate-500">{pro.role} &bull; <span className="font-medium text-slate-700">{pro.project}</span></p>
                    </div>
                  </div>
                  <button className="w-full sm:w-auto px-5 py-2.5 bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white text-[13px] font-bold rounded-xl transition-colors border border-blue-100 hover:border-blue-600">
                    Write Review
                  </button>
                </div>
              )) : (
                <p className="text-slate-500 text-[14px] py-8 text-center">No pending reviews at the moment.</p>
              )}
            </div>
          )}

          {/* --- RECEIVED TAB --- */}
          {activeTab === 'Received' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {receivedReviews.length > 0 ? receivedReviews.map((review) => (
                <div key={review.id} className="p-5 border border-slate-200 rounded-2xl bg-white shadow-sm flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full border border-slate-100" />
                      <div>
                        <h4 className="text-[14px] font-bold text-slate-900 leading-none mb-1">{review.name}</h4>
                        <p className="text-[11px] text-slate-400 font-medium">{review.date}</p>
                      </div>
                    </div>
                    <StarRating rating={review.rating} />
                  </div>
                  <p className="text-[14px] text-slate-600 leading-relaxed">"{review.text}"</p>
                </div>
              )) : (
                <p className="text-slate-500 text-[14px] py-8 text-center col-span-full">You haven't received any reviews yet.</p>
              )}
            </div>
          )}

          {/* --- GIVEN TAB --- */}
          {activeTab === 'Given' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {givenReviews.length > 0 ? givenReviews.map((review) => (
                <div key={review.id} className="p-5 border border-slate-200 rounded-2xl bg-slate-50 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-[12px] font-bold text-slate-400 uppercase tracking-wider">To:</div>
                      <img src={review.avatar} alt={review.name} className="w-8 h-8 rounded-full border border-slate-200" />
                      <h4 className="text-[14px] font-bold text-slate-900">{review.name}</h4>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <StarRating rating={review.rating} />
                      <p className="text-[11px] text-slate-400 font-medium">{review.date}</p>
                    </div>
                  </div>
                  <p className="text-[14px] text-slate-600 leading-relaxed bg-white p-3 rounded-xl border border-slate-100">"{review.text}"</p>
                </div>
              )) : (
                <p className="text-slate-500 text-[14px] py-8 text-center col-span-full">You haven't written any reviews yet.</p>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}