import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  client: string;
  progress: number;
  dueDate: string;
  nextMilestone: string;
  budget: string;
  column: 'active' | 'submitted' | 'review' | 'completed';
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: "Fintech Dashboard MVP",
      client: "Stripe India",
      progress: 65,
      dueDate: "Friday",
      nextMilestone: "Milestone 2: Chart & Analytics view",
      budget: "₹1,20,000",
      column: 'active'
    },
    {
      id: 2,
      title: "Portfolio Website Design",
      client: "Alex Carter Design",
      progress: 90,
      dueDate: "Completed",
      nextMilestone: "Milestone 3: Interactive prototypes",
      budget: "₹35,000",
      column: 'review'
    },
    {
      id: 3,
      title: "Dashboard UI System",
      client: "Zeta Inc",
      progress: 100,
      dueDate: "Completed",
      nextMilestone: "All milestones approved",
      budget: "₹75,000",
      column: 'completed'
    },
    {
      id: 4,
      title: "Next.js Authentication Integration",
      client: "DevFlow Studio",
      progress: 25,
      dueDate: "In 2 weeks",
      nextMilestone: "Milestone 1: Google OAuth setup",
      budget: "₹40,000",
      column: 'active'
    },
    {
      id: 5,
      title: "Blender Asset Optimization",
      client: "TSS Seating Solutions",
      progress: 50,
      dueDate: "Due Monday",
      nextMilestone: "Milestone 2: High-poly exports",
      budget: "₹45,000",
      column: 'submitted'
    }
  ]);

  const moveProject = (id: number, newColumn: Project['column']) => {
    setProjects(projects.map(p => p.id === id ? { ...p, column: newColumn } : p));
  };

  const getColProjects = (col: Project['column']) => {
    return projects.filter(p => p.column === col);
  };

  return (
    // Fluid width, flex layout to allow Kanban columns to stretch vertically
    <div className="w-full flex-1 p-6 sm:p-8 flex flex-col overflow-y-auto animate-page-in font-sans">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 shrink-0">
        <div>
          <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-2">
            Workspace & Projects
          </h1>
          <p className="text-[14px] text-slate-500 font-medium">
            Manage and track your active milestones and deliverables visually.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2.5 rounded-xl shadow-sm">
          <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
          <span className="text-[13px] font-bold text-slate-700">1 Milestone Due Today</span>
        </div>
      </div>

      {/* Kanban Board Grid - Fills remaining height on large screens */}
      <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 overflow-y-auto pb-4 xl:pb-0">

        {/* ================= COLUMN 1: ACTIVE ================= */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl flex flex-col h-full max-h-[800px] xl:max-h-full">
          <div className="flex justify-between items-center p-4 border-b border-slate-100 shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
              <h2 className="text-[13px] font-extrabold text-slate-800 uppercase tracking-wider">Active</h2>
            </div>
            <span className="bg-blue-100/60 text-blue-700 text-[11px] font-bold px-2 py-0.5 rounded-md">{getColProjects('active').length}</span>
          </div>

          <div className="flex-1 overflow-y-auto space-y-4 p-4 hide-scrollbar">
            {getColProjects('active').map(project => (
              <div key={project.id} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-blue-300 transition-all duration-300 group">
                <div className="mb-1">
                  <h3 className="text-[15px] font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">{project.title}</h3>
                </div>
                <p className="text-[12px] font-bold text-slate-400">Client: <span className="text-slate-600">{project.client}</span></p>

                <div className="mt-4">
                  <div className="flex justify-between text-[11px] font-bold text-slate-500 mb-1.5">
                    <span>Progress</span>
                    <span className="text-slate-700">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-blue-600 h-full rounded-full transition-all duration-500" style={{ width: `${project.progress}%` }}></div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 text-[12px]">
                  <span className="block font-bold text-slate-400 uppercase tracking-wider text-[10px] mb-1">Next Up</span>
                  <span className="text-slate-700 font-bold block truncate">{project.nextMilestone}</span>
                </div>

                <div className="mt-4 flex items-center justify-between text-[12px]">
                  <span className="text-slate-500 font-bold">{project.dueDate}</span>
                  <span className="text-slate-900 font-black">{project.budget}</span>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => moveProject(project.id, 'submitted')}
                    className="w-full py-2 bg-white hover:bg-blue-50 hover:text-blue-700 border border-slate-200 hover:border-blue-200 text-[12px] font-bold text-slate-700 rounded-lg transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    Submit Work
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= COLUMN 2: SUBMITTED ================= */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl flex flex-col h-full max-h-[800px] xl:max-h-full">
          <div className="flex justify-between items-center p-4 border-b border-slate-100 shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-amber-500 rounded-full"></span>
              <h2 className="text-[13px] font-extrabold text-slate-800 uppercase tracking-wider">Submitted</h2>
            </div>
            <span className="bg-amber-100/60 text-amber-700 text-[11px] font-bold px-2 py-0.5 rounded-md">{getColProjects('submitted').length}</span>
          </div>

          <div className="flex-1 overflow-y-auto space-y-4 p-4 hide-scrollbar">
            {getColProjects('submitted').map(project => (
              <div key={project.id} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-amber-300 transition-all duration-300 group">
                <div className="mb-1">
                  <h3 className="text-[15px] font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors leading-snug">{project.title}</h3>
                </div>
                <p className="text-[12px] font-bold text-slate-400">Client: <span className="text-slate-600">{project.client}</span></p>

                <div className="mt-4">
                  <div className="flex justify-between text-[11px] font-bold text-slate-500 mb-1.5">
                    <span>Progress</span>
                    <span className="text-slate-700">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-full rounded-full transition-all duration-500" style={{ width: `${project.progress}%` }}></div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 text-[12px]">
                  <span className="block font-bold text-slate-400 uppercase tracking-wider text-[10px] mb-1">Under Review</span>
                  <span className="text-slate-700 font-bold block truncate">{project.nextMilestone}</span>
                </div>

                <div className="mt-4 flex items-center justify-between text-[12px]">
                  <span className="text-slate-500 font-bold">{project.dueDate}</span>
                  <span className="text-slate-900 font-black">{project.budget}</span>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 flex gap-2">
                  <button
                    onClick={() => moveProject(project.id, 'active')}
                    className="w-1/2 py-2 bg-white hover:bg-slate-100 border border-slate-200 text-[12px] font-bold text-slate-600 rounded-lg transition-colors outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                  >
                    Edit Work
                  </button>
                  <button
                    onClick={() => moveProject(project.id, 'review')}
                    className="w-1/2 py-2 bg-amber-500 hover:bg-amber-600 text-white text-[12px] font-bold rounded-lg shadow-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-1"
                  >
                    To Review
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= COLUMN 3: IN REVIEW ================= */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl flex flex-col h-full max-h-[800px] xl:max-h-full">
          <div className="flex justify-between items-center p-4 border-b border-slate-100 shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full"></span>
              <h2 className="text-[13px] font-extrabold text-slate-800 uppercase tracking-wider">In Review</h2>
            </div>
            <span className="bg-indigo-100/60 text-indigo-700 text-[11px] font-bold px-2 py-0.5 rounded-md">{getColProjects('review').length}</span>
          </div>

          <div className="flex-1 overflow-y-auto space-y-4 p-4 hide-scrollbar">
            {getColProjects('review').map(project => (
              <div key={project.id} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-indigo-300 transition-all duration-300 group">
                <div className="mb-1">
                  <h3 className="text-[15px] font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">{project.title}</h3>
                </div>
                <p className="text-[12px] font-bold text-slate-400">Client: <span className="text-slate-600">{project.client}</span></p>

                <div className="mt-4">
                  <div className="flex justify-between text-[11px] font-bold text-slate-500 mb-1.5">
                    <span>Progress</span>
                    <span className="text-slate-700">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-indigo-600 h-full rounded-full transition-all duration-500" style={{ width: `${project.progress}%` }}></div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 text-[12px]">
                  <span className="block font-bold text-slate-400 uppercase tracking-wider text-[10px] mb-1">Awaiting Client</span>
                  <span className="text-slate-700 font-bold block truncate">{project.nextMilestone}</span>
                </div>

                <div className="mt-4 flex items-center justify-between text-[12px]">
                  <span className="text-slate-500 font-bold">{project.dueDate}</span>
                  <span className="text-slate-900 font-black">{project.budget}</span>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => moveProject(project.id, 'completed')}
                    className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-[12px] font-bold rounded-lg shadow-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-1"
                  >
                    Mark Completed
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= COLUMN 4: COMPLETED ================= */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl flex flex-col h-full max-h-[800px] xl:max-h-full">
          <div className="flex justify-between items-center p-4 border-b border-slate-100 shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></span>
              <h2 className="text-[13px] font-extrabold text-slate-800 uppercase tracking-wider">Completed</h2>
            </div>
            <span className="bg-emerald-100/60 text-emerald-700 text-[11px] font-bold px-2 py-0.5 rounded-md">{getColProjects('completed').length}</span>
          </div>

          <div className="flex-1 overflow-y-auto space-y-4 p-4 hide-scrollbar">
            {getColProjects('completed').map(project => (
              <div key={project.id} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm opacity-75 hover:opacity-100 transition-all duration-300 group">
                <div className="mb-1 flex items-start justify-between gap-2">
                  <h3 className="text-[15px] font-extrabold text-slate-700 leading-snug line-through">{project.title}</h3>
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                </div>
                <p className="text-[12px] font-bold text-slate-400">Client: <span className="text-slate-500">{project.client}</span></p>

                <div className="mt-4">
                  <div className="flex justify-between text-[11px] font-bold text-emerald-600 mb-1.5">
                    <span>Approved & Settled</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full bg-emerald-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center text-[12px]">
                  <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">Trust Earned</span>
                  <span className="text-emerald-600 font-extrabold flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                    +15 Trust
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between text-[12px] pt-4 border-t border-slate-100">
                  <span className="text-slate-400 font-bold">Settled</span>
                  <span className="text-slate-900 font-black">{project.budget}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}