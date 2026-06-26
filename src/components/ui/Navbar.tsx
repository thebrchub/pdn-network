import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    
    // FIX 1: Evaluate scroll position immediately on mount and route change
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Handle route changes
  useEffect(() => {
    // Close mobile menu
    setIsMobileMenuOpen(false);
    // FIX 2: Automatically scroll to the top of the page when changing routes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // FIX 3: Dynamically add 'Home' link if we are not on the root path
  const navLinks = [
    ...(location.pathname !== '/' ? [{ name: "Home", to: "/" }] : []),
    { name: "How It Works", to: "/how-it-works" },
    { name: "For Businesses", to: "/for-businesses" },
    { name: "For Professionals", to: "/for-professionals" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-sans ${
          isScrolled 
            ? "bg-white/90 backdrop-blur-md shadow-[0_4px_20px_-10px_rgba(0,0,0,0.08)] py-2" 
            : "bg-transparent py-4"
        }`}
      >
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 max-w-[1440px]">
          <div className="flex items-center justify-between h-16">
            
            <div 
              className="flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => navigate('/')}
            >
              <img src="/logo.svg" alt="ProSpec" className="h-9 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.to} 
                  className={`text-[14px] font-bold transition-colors relative group ${
                    location.pathname === link.to ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1.5 left-0 h-[2px] bg-blue-600 transition-all duration-300 rounded-full ${
                    location.pathname === link.to ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => navigate('/login')} 
                className="text-[14px] font-bold text-slate-700 hover:text-blue-600 transition-colors focus:outline-none cursor-pointer"
              >
                Log In
              </button>
              <button 
                onClick={() => navigate('/signup')} 
                className="px-6 py-2.5 bg-blue-600 text-white text-[14px] font-bold rounded-xl hover:bg-blue-700 transition-all shadow-[0_4px_12px_rgba(37,99,235,0.25)] hover:shadow-[0_6px_16px_rgba(37,99,235,0.35)] hover:-translate-y-0.5 focus:outline-none cursor-pointer"
              >
                Sign Up
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 -mr-2 text-slate-600 hover:text-blue-600 transition-colors focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu Panel */}
      <div className={`fixed top-0 right-0 h-full w-[85vw] sm:w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 lg:hidden flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex-grow flex flex-col pt-24">
          
          {/* Mobile Links */}
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.to}
                className={`text-lg font-bold transition-colors ${
                  location.pathname === link.to ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Actions */}
          <div className="mt-auto flex flex-col gap-4">
            <button 
              onClick={() => navigate('/login')}
              className="w-full py-3.5 border-2 border-slate-200 text-slate-800 text-[15px] font-bold rounded-xl hover:bg-slate-50 transition-colors"
            >
              Log In
            </button>
            <button 
              onClick={() => navigate('/signup')}
              className="w-full py-3.5 bg-blue-600 text-white text-[15px] font-bold rounded-xl hover:bg-blue-700 transition-all"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}