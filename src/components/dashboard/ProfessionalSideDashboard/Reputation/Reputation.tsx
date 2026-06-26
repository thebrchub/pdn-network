import { useState } from 'react';

interface TrustEvent {
  id: number;
  type: 'milestone' | 'payment' | 'repeat' | 'verification' | 'on_time';
  message: string;
  points: number;
  date: string;
}

export default function Reputation() {
  const [trustEvents] = useState<TrustEvent[]>([
    { id: 1, type: 'milestone', message: "Milestone V1 UI Delivery approved for Stripe India", points: 15, date: "Today, 11:00 AM" },
    { id: 2, type: 'payment', message: "Milestone payment released by TSS Seating Solutions", points: 5, date: "Yesterday, 4:30 PM" },
    { id: 3, type: 'on_time', message: "Completed contract B2B Redesign before original deadline", points: 12, date: "Jun 20, 2026" },
    { id: 4, type: 'repeat', message: "Hired again by previous client Marc Fletcher", points: 15, date: "Jun 18, 2026" },
    { id: 5, type: 'verification', message: "Connected Aadhaar card credentials to professional profile", points: 20, date: "Jun 12, 2026" },
    { id: 6, type: 'verification', message: "Github profile verified with 40+ public contributions", points: 10, date: "Jun 08, 2026" }
  ]);

  // Mock a contribution grid representing the past 24 weeks (168 days)
  const generateMockGrid = () => {
    const grid = [];
    const values = [0, 0, 0, 3, 5, 8, 12, 15, 0, 0, 3, 5, 0, 8, 12, 0, 0, 0, 5, 0, 0, 0, 0, 3, 8, 12, 15, 20];
    for (let i = 0; i < 24 * 7; i++) {
      const idx = Math.floor(Math.random() * values.length);
      grid.push(values[idx]);
    }
    return grid;
  };

  const [heatmapGrid] = useState<number[]>(generateMockGrid());

  const getHeatmapColor = (points: number) => {
    if (points === 0) return 'bg-slate-100 hover:bg-slate-200';
    if (points <= 5) return 'bg-blue-100 hover:bg-blue-200';
    if (points <= 10) return 'bg-blue-300 hover:bg-blue-400';
    if (points <= 15) return 'bg-blue-500 hover:bg-blue-600';
    return 'bg-blue-700 hover:bg-blue-800';
  };

  return (
    <div className="w-full h-full p-6 sm:p-8 flex flex-col overflow-y-auto animate-page-in font-sans">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Reputation Ledger</h1>
          <p className="text-slate-500 text-sm mt-1 font-medium">ProSpec measures professional reliability through verified delivery, not credentials.</p>
        </div>
        <div className="flex gap-2">
          <span className="px-3.5 py-1.5 bg-blue-50 text-blue-700 border border-blue-100 rounded-xl text-[12px] font-bold">Top 5% of Engineers</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* Left Section: Scores, Grid & Metrics */}
        <div className="lg:col-span-8 space-y-8">

          {/* Trust Score Apple Fitness Visual */}
          <div className="bg-gradient-to-b from-blue-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">

              <div className="md:col-span-8 space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-200">Current Standing</span>
                <div className="flex items-baseline gap-2">
                  <h2 className="text-5xl text-blue-200 font-extrabold tracking-tight">842</h2>
                  <span className="text-blue-200 text-sm font-semibold"></span>
                </div>
                <p className="text-blue-100 text-[14px] font-medium leading-relaxed max-w-lg">
                  Excellent reputation status! You unlock the <span className="font-extrabold text-white">Verified Badge</span>, zero-wait escrows, and a 1.2x multiplier on discoverability feeds.
                </p>
              </div>

              {/* Progress Ring */}
              <div className="md:col-span-4 flex justify-center md:justify-end">
                <div className="w-28 h-28 relative flex items-center justify-center bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-inner">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="56" cy="56" r="48" className="stroke-white/10 fill-none" strokeWidth="8" />
                    <circle cx="56" cy="56" r="48" className="stroke-white fill-none" strokeWidth="8" strokeDasharray="300" strokeDashoffset="47" strokeLinecap="round" />
                  </svg>
                  <div className="absolute text-center">
                    <span className="text-xl font-extrabold leading-none block">84.2%</span>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-blue-200 mt-0.5 block">Reliability</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* GitHub Style Trust Grid */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-[16px] font-extrabold text-slate-800 tracking-tight">Consistency Heatmap</h3>
                <p className="text-[12px] text-slate-400 font-semibold mt-0.5">Visual representation of daily Trust Score gains from operations.</p>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
                <span>Less</span>
                <span className="w-2.5 h-2.5 bg-slate-100 rounded-sm"></span>
                <span className="w-2.5 h-2.5 bg-blue-100 rounded-sm"></span>
                <span className="w-2.5 h-2.5 bg-blue-300 rounded-sm"></span>
                <span className="w-2.5 h-2.5 bg-blue-500 rounded-sm"></span>
                <span className="w-2.5 h-2.5 bg-blue-700 rounded-sm"></span>
                <span>More</span>
              </div>
            </div>

            {/* Grid Container */}
            <div className="overflow-x-auto hide-scrollbar">
              <div className="min-w-[640px]">
                <div className="grid grid-flow-col grid-rows-7 gap-1.5">
                  {heatmapGrid.map((points, i) => (
                    <div
                      key={i}
                      title={`${points} Trust points earned`}
                      className={`w-3.5 h-3.5 rounded-sm transition-all cursor-pointer ${getHeatmapColor(points)}`}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-3 px-1">
                  <span>6 Months Ago</span>
                  <span>3 Months Ago</span>
                  <span>Today</span>
                </div>
              </div>
            </div>
          </div>

          {/* Fine Metrics Cards */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm">
            <h3 className="text-[16px] font-extrabold text-slate-800 tracking-tight mb-4">Reputation Dimensions</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">

              <div className="border border-slate-100 p-4 rounded-2xl bg-[#FAFAFC]/50">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Finished Contracts</span>
                <span className="text-xl font-extrabold text-slate-800 mt-1 block">18 Total</span>
                <span className="text-xs text-slate-400 font-semibold block mt-0.5">14 active milestones</span>
              </div>

              <div className="border border-slate-100 p-4 rounded-2xl bg-[#FAFAFC]/50">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Client Satisfaction</span>
                <span className="text-xl font-extrabold text-slate-800 mt-1 block">4.95 / 5.00</span>
                <span className="text-xs text-yellow-500 font-bold block mt-0.5">★★★★★ Rating</span>
              </div>

              <div className="border border-slate-100 p-4 rounded-2xl bg-[#FAFAFC]/50">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">On-Time Delivery</span>
                <span className="text-xl font-extrabold text-emerald-600 mt-1 block">96% Status</span>
                <span className="text-xs text-slate-400 font-semibold block mt-0.5">17 milestones delivered</span>
              </div>

              <div className="border border-slate-100 p-4 rounded-2xl bg-[#FAFAFC]/50">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Repeat Clients</span>
                <span className="text-xl font-extrabold text-slate-800 mt-1 block">42% Ratio</span>
                <span className="text-xs text-slate-400 font-semibold block mt-0.5">7 clients hired again</span>
              </div>

              <div className="border border-slate-100 p-4 rounded-2xl bg-[#FAFAFC]/50">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Communication Rating</span>
                <span className="text-xl font-extrabold text-slate-800 mt-1 block">4.92 / 5.00</span>
                <span className="text-xs text-slate-400 font-semibold block mt-0.5">Avg response: 18 mins</span>
              </div>

              <div className="border border-slate-100 p-4 rounded-2xl bg-[#FAFAFC]/50">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Contract Disputes</span>
                <span className="text-xl font-extrabold text-emerald-600 mt-1 block">0 Opened</span>
                <span className="text-xs text-slate-400 font-semibold block mt-0.5">Clean dispute record</span>
              </div>

            </div>
          </div>

        </div>

        {/* Right Section: Daily reputation Feed & Trust Opps */}
        <div className="lg:col-span-4 space-y-6">

          {/* Section 11: Daily Reputation Feed */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm">
            <h3 className="text-[16px] font-extrabold text-slate-800 tracking-tight mb-4">Reputation Activity Feed</h3>

            <div className="relative border-l-2 border-slate-100 pl-4 ml-2 space-y-6">
              {trustEvents.map((event) => (
                <div key={event.id} className="relative">
                  {/* Dot */}
                  <span className={`absolute -left-[23px] top-1 w-3 h-3 rounded-full border-2 border-white ${event.type === 'verification' ? 'bg-indigo-500' :
                    event.type === 'milestone' || event.type === 'on_time' ? 'bg-blue-500' : 'bg-emerald-500'
                    }`} />

                  <div className="flex justify-between items-baseline gap-2">
                    <span className="text-xs text-slate-400 font-bold">{event.date}</span>
                    <span className={`text-[12px] font-extrabold text-emerald-600 shrink-0`}>+{event.points} Trust</span>
                  </div>
                  <p className="text-[13px] font-medium text-slate-700 mt-1">{event.message}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Opportunities */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm">
            <h3 className="text-[16px] font-extrabold text-slate-800 tracking-tight mb-4">Reputation Boosters</h3>
            <div className="space-y-3">

              <div className="p-3 border border-slate-100 hover:border-blue-200 rounded-2xl flex items-center justify-between gap-3 group transition-all">
                <div>
                  <h4 className="text-[13px] font-bold text-slate-700">Link GST Registration</h4>
                  <p className="text-[11px] text-slate-400 font-medium">Verify your corporate tax credentials.</p>
                </div>
                <span className="bg-blue-50 text-blue-600 text-xs font-bold px-2 py-1 rounded-xl shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">+25 Trust</span>
              </div>

              <div className="p-3 border border-slate-100 hover:border-blue-200 rounded-2xl flex items-center justify-between gap-3 group transition-all">
                <div>
                  <h4 className="text-[13px] font-bold text-slate-700">Onboarding Vetting Exam</h4>
                  <p className="text-[11px] text-slate-400 font-medium">Pass AI-driven domain validation.</p>
                </div>
                <span className="bg-blue-50 text-blue-600 text-xs font-bold px-2 py-1 rounded-xl shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">+30 Trust</span>
              </div>

              <div className="p-3 border border-slate-100 hover:border-blue-200 rounded-2xl flex items-center justify-between gap-3 group transition-all">
                <div>
                  <h4 className="text-[13px] font-bold text-slate-700">Acquire Repeat Client</h4>
                  <p className="text-[11px] text-slate-400 font-medium">Work on a 2nd contract with same buyer.</p>
                </div>
                <span className="bg-blue-50 text-blue-600 text-xs font-bold px-2 py-1 rounded-xl shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">+15 Trust</span>
              </div>

            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
