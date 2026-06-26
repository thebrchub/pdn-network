import { useState } from 'react';
import { Link } from 'react-router-dom';

// Mock data for client projects
const mockProjects = [
  {
    id: 1,
    title: 'E-commerce Platform Redesign',
    description: 'Complete overhaul of the user dashboard and checkout flow.',
    status: 'Ongoing',
    budget: 15000,
    spent: 4500,
    deadline: 'Oct 15, 2026',
    progress: 35,
    team: [
      { name: 'Priya K.', avatar: 'https://ui-avatars.com/api/?name=Priya+K&background=10B981&color=fff' },
      { name: 'Alex M.', avatar: 'https://ui-avatars.com/api/?name=Alex+M&background=0D8ABC&color=fff' }
    ]
  },
  {
    id: 2,
    title: 'Mobile App MVP (Flutter)',
    description: 'Initial build of the iOS and Android applications including auth.',
    status: 'Ongoing',
    budget: 25000,
    spent: 20000,
    deadline: 'Aug 01, 2026',
    progress: 80,
    team: [
      { name: 'Sarah J.', avatar: 'https://ui-avatars.com/api/?name=Sarah+J&background=6366F1&color=fff' }
    ]
  },
  {
    id: 3,
    title: 'Backend API Migration',
    description: 'Migrating legacy PHP backend to Node.js microservices.',
    status: 'Completed',
    budget: 12000,
    spent: 12000,
    deadline: 'May 10, 2026',
    progress: 100,
    team: [
      { name: 'Rahul S.', avatar: 'https://ui-avatars.com/api/?name=Rahul+S&background=F59E0B&color=fff' }
    ]
  }
];

export default function ClientProjects() {
  const [filter, setFilter] = useState('All');

  // Filter logic
  const filteredProjects = mockProjects.filter(project => {
    if (filter === 'All') return true;
    return project.status === filter;
  });

  return (
    <div className="p-6 sm:p-8 animate-page-in max-w-[1440px] mx-auto w-full">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-2">
            My Projects
          </h1>
          <p className="text-[14px] text-slate-500 font-medium">
            Manage your ongoing work, review completed projects, or start something new.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link 
            to="/b/project/new" 
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-[14px] font-bold rounded-xl transition-colors shadow-sm flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            New Project
          </Link>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex items-center gap-2 bg-white border border-slate-200 p-1.5 rounded-xl shadow-sm w-fit min-w-max">
          {['All', 'Ongoing', 'Completed'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 text-[13px] font-bold rounded-lg transition-colors ${
                filter === status 
                  ? 'bg-slate-50 text-slate-800 shadow-sm border border-slate-200/60' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700 border border-transparent'
              }`}
            >
              {status} Projects
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-[1.5rem] border border-slate-200 shadow-sm hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col overflow-hidden">
            
            <div className="p-6">
              {/* Card Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-[18px] font-bold text-slate-900 mb-1">{project.title}</h3>
                  <p className="text-[13px] text-slate-500 line-clamp-2">{project.description}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider shrink-0 ${
                  project.status === 'Ongoing' 
                    ? 'bg-blue-50 text-blue-700 border border-blue-200/50' 
                    : 'bg-emerald-50 text-emerald-700 border border-emerald-200/50'
                }`}>
                  {project.status}
                </span>
              </div>

              {/* Progress Bar (Only show if ongoing) */}
              {project.status === 'Ongoing' && (
                <div className="mb-6">
                  <div className="flex justify-between text-[12px] font-bold mb-2">
                    <span className="text-slate-500">Project Progress</span>
                    <span className="text-slate-900">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-500" 
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-4 border-y border-slate-100">
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Budget</p>
                  <p className="text-[14px] font-bold text-slate-900">₹{project.budget.toLocaleString('en-IN')}</p>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Amount Spent</p>
                  <p className="text-[14px] font-bold text-slate-900">₹{project.spent.toLocaleString('en-IN')}</p>
                </div>
                <div className="hidden sm:block">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Deadline</p>
                  <p className="text-[14px] font-bold text-slate-900">{project.deadline}</p>
                </div>
              </div>

              {/* Footer: Team & Actions */}
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-2">
                  <span className="text-[12px] font-bold text-slate-500">Team:</span>
                  <div className="flex -space-x-2 overflow-hidden">
                    {project.team.map((member, idx) => (
                      <img 
                        key={idx} 
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white" 
                        src={member.avatar} 
                        alt={member.name} 
                        title={member.name}
                      />
                    ))}
                  </div>
                </div>
                
                <button className="px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 text-[13px] font-bold rounded-lg border border-slate-200 transition-colors">
                  View Workspace
                </button>
              </div>
            </div>

          </div>
        ))}

        {filteredProjects.length === 0 && (
          <div className="col-span-full py-12 text-center bg-slate-50 border border-slate-200 border-dashed rounded-[1.5rem]">
            <p className="text-slate-500 font-medium">No projects found in this category.</p>
          </div>
        )}
      </div>

    </div>
  );
}