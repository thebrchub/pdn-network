// src/components/ui/Footer.tsx

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Responsive Wrapper: Edge-to-edge on mobile, contained on md+ screens
    <div className="w-full mx-auto md:px-6 lg:px-8 max-w-[1440px] md:pb-8 font-sans">
      
      <footer className="relative bg-[#0B1120] pt-16 pb-8 md:rounded-[2.5rem] border-t md:border border-slate-800/80 overflow-hidden shadow-2xl">
        
        {/* Ambient Top Glow & Highlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-16">
            
            {/* Brand Column */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                {/* Logo */}
                <div className="flex-shrink-0 cursor-pointer">
                  <img
                    src="/logo2.svg"
                    alt="ProSpec"
                    className="h-10 w-auto drop-shadow-md"
                  />
                </div>
              </div>
              <p className="text-slate-400 text-[15px] leading-relaxed mb-8 max-w-sm">
                India's most reliable project delivery network. We don't just match talent; we guarantee outcomes.
              </p>
              <div className="flex gap-3">
                {/* Social placeholders */}
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:bg-slate-800 hover:border-indigo-500/30 transition-all duration-300">
                  <span className="text-sm font-bold">in</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:bg-slate-800 hover:border-indigo-500/30 transition-all duration-300">
                  <span className="text-sm font-bold">𝕏</span>
                </a>
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide text-[15px]">Platform</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-400 hover:text-indigo-400 text-[14px] font-medium transition-colors">Post a Project</a></li>
                <li><a href="#" className="text-slate-400 hover:text-indigo-400 text-[14px] font-medium transition-colors">How it Works</a></li>
                <li><a href="#" className="text-slate-400 hover:text-indigo-400 text-[14px] font-medium transition-colors">Delivery Assurance</a></li>
                <li><a href="#" className="text-slate-400 hover:text-indigo-400 text-[14px] font-medium transition-colors">Pricing & Escrow</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide text-[15px]">Professionals</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-400 hover:text-indigo-400 text-[14px] font-medium transition-colors">Apply to Join</a></li>
                <li><a href="#" className="text-slate-400 hover:text-indigo-400 text-[14px] font-medium transition-colors">Reputation Tiers</a></li>
                <li><a href="#" className="text-slate-400 hover:text-indigo-400 text-[14px] font-medium transition-colors">Verified Earnings</a></li>
                <li><a href="#" className="text-slate-400 hover:text-indigo-400 text-[14px] font-medium transition-colors">Freelancer FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide text-[15px]">Company & Legal</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-400 hover:text-indigo-400 text-[14px] font-medium transition-colors">About BRC HUB LLP</a></li>
                <li><a href="#" className="text-slate-400 hover:text-indigo-400 text-[14px] font-medium transition-colors">Contact Support</a></li>
                <li><a href="#" className="text-slate-400 hover:text-indigo-400 text-[14px] font-medium transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-slate-400 hover:text-indigo-400 text-[14px] font-medium transition-colors">Terms of Service</a></li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-[13px] font-medium">
              &copy; {currentYear} BRC HUB LLP. All rights reserved.
            </p>
            <div className="flex items-center gap-1.5 text-slate-500 text-[13px] font-medium bg-slate-800/30 px-3 py-1.5 rounded-full border border-slate-700/50">
              Made with <span className="text-indigo-500">♥</span> in India
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}