import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AiVettingSession() {
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes
  const [code, setCode] = useState(`function optimizeDataFetcher(urls) {\n  // Implement your solution here\n  // Remember to handle promise rejection\n\n}`);
  const [isRecording, setIsRecording] = useState(true);

  // Simple countdown timer
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timerId = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(timerId);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <main className="min-h-screen bg-slate-950 font-sans text-slate-300 relative flex flex-col">
      
      {/* Vetting Header Bar (Sticky & Secure feeling) */}
      <header className="w-full bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <img src="/logo.svg" alt="ProSpec" className="h-6 w-auto opacity-70 filter brightness-200" />
          <span className="px-2 py-0.5 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-[10px] font-bold uppercase tracking-wider rounded">Live Session</span>
        </div>
        
        {/* Anti-Cheat Indicators */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-[12px] font-bold">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 uppercase tracking-wider">Screen Focused</span>
          </div>
          
          <div className="flex items-center gap-1">
            <div className={`h-3 w-1 bg-red-500 rounded-full animate-pulse`} style={{ animationDuration: '0.4s' }}></div>
            <div className={`h-4 w-1 bg-red-500 rounded-full animate-pulse`} style={{ animationDuration: '0.7s' }}></div>
            <div className={`h-2 w-1 bg-red-500 rounded-full animate-pulse`} style={{ animationDuration: '0.5s' }}></div>
            <div className={`h-5 w-1 bg-red-500 rounded-full animate-pulse`} style={{ animationDuration: '0.8s' }}></div>
            <span className="ml-2 text-[12px] font-bold text-red-400 uppercase tracking-wider">Audio Active</span>
          </div>

          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border font-mono font-bold text-sm ${timeLeft < 30 ? 'bg-red-500/10 border-red-500/50 text-red-400' : 'bg-slate-800 border-slate-700 text-slate-100'}`}>
            <svg className="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            {minutes}:{seconds.toString().padStart(2, '0')}
          </div>
        </div>
      </header>

      {/* Main Workspace Layout */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        
        {/* LEFT PANEL: The Scenario (1/3 width) */}
        <div className="w-full lg:w-1/3 bg-slate-900/50 border-r border-slate-800 p-6 sm:p-8 overflow-y-auto">
          <div className="mb-6">
            <h2 className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider mb-2">Scenario 1 of 3</h2>
            <h1 className="text-2xl font-bold text-white tracking-tight">Concurrent API Resolution</h1>
          </div>
          
          <div className="prose prose-invert prose-sm">
            <p className="text-slate-400 leading-relaxed">
              We have a legacy function that processes an array of URLs sequentially. This is causing significant bottlenecks on the frontend dashboard.
            </p>
            <p className="text-slate-400 leading-relaxed mt-4">
              <strong>Your Task:</strong> Rewrite the <code className="bg-slate-800 text-indigo-300 px-1.5 py-0.5 rounded text-xs">optimizeDataFetcher</code> function to handle the requests concurrently using <code className="bg-slate-800 text-indigo-300 px-1.5 py-0.5 rounded text-xs">Promise.allSettled</code>. Ensure that if one URL fails, the entire batch does not reject, and return a clean array of the successful responses.
            </p>
          </div>

          <div className="mt-8 p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl">
            <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">AI Instructions</h3>
            <p className="text-[13px] text-slate-400 leading-relaxed">
              While you type, please explain your thought process aloud. The AI is listening for your approach to error handling and promise resolution strategy.
            </p>
          </div>
        </div>

        {/* RIGHT PANEL: The Editor (2/3 width) */}
        <div className="w-full lg:w-2/3 flex flex-col bg-[#0F111A]">
          {/* Mock Editor Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800 text-[12px] font-mono text-slate-500">
            <div className="flex gap-4">
              <span className="text-indigo-400 border-b border-indigo-400 pb-2 -mb-2">index.js</span>
              <span className="hover:text-slate-300 cursor-pointer">tests.js</span>
            </div>
            <span>JavaScript (ES6+)</span>
          </div>
          
          {/* Mock Editor Area */}
          <textarea 
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck="false"
            className="flex-1 w-full bg-transparent p-6 text-[14px] font-mono leading-relaxed text-slate-300 focus:outline-none resize-none selection:bg-indigo-500/30"
            style={{ 
              tabSize: 2 
            }}
          />

          {/* Action Footer */}
          <div className="p-4 bg-slate-900 border-t border-slate-800 flex justify-between items-center">
            <button className="px-4 py-2 bg-slate-800 text-slate-300 font-bold rounded-lg hover:bg-slate-700 transition-colors text-[13px] focus:outline-none border border-slate-700">
              Run Tests
            </button>
            <button className="px-6 py-2.5 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-all shadow-[0_0_15px_rgba(79,70,229,0.3)] text-[14px] focus:outline-none flex items-center gap-2">
              Submit Solution
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}