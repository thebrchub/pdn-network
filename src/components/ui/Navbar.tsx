"use client";

import  { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for dynamic navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  // Added new navigation items to fill out the menu
  const navLinks = [
    { name: "How it Works", href: "#how-it-works" },
    { name: "Delivery Assurance", href: "#delivery" },
    { name: "Reputation", href: "#reputation" },
    
    { name: "For Professionals", href: "#professionals" },
  ];

  return (
    <>
      <nav 
        // Removed border completely to fix the black flash rendering glitch
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-sans ${
          isScrolled 
            ? "bg-white/90 backdrop-blur-md shadow-[0_4px_20px_-10px_rgba(0,0,0,0.08)] py-2" 
            : "bg-transparent py-4"
        }`}
      >
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 max-w-[1440px]">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div className="flex-shrink-0 cursor-pointer flex items-center gap-2 transition-transform duration-300 hover:scale-105">
              <img
                src="/logo.svg"
                alt="ProSpec"
                className="h-9 w-auto"
              />
            </div>

            {/* Desktop Navigation - Reduced gap slightly to accommodate new items */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="text-[14px] font-bold text-slate-500 hover:text-indigo-600 transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-indigo-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
                </a>
              ))}
            </div>

            {/* Authentication & CTA */}
            <div className="hidden md:flex items-center gap-6">
              <button className="text-[14px] font-bold text-slate-700 hover:text-indigo-600 transition-colors focus:outline-none">
                Log In
              </button>
              <button className="px-6 py-2.5 bg-indigo-600 text-white text-[14px] font-bold rounded-xl hover:bg-indigo-700 transition-all shadow-[0_4px_12px_rgba(99,102,241,0.25)] hover:shadow-[0_6px_16px_rgba(99,102,241,0.35)] hover:-translate-y-0.5 focus:outline-none">
                Post a Project
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 -mr-2 text-slate-600 hover:text-indigo-600 transition-colors focus:outline-none"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-5 relative flex flex-col justify-between">
                  <span className={`w-full h-[2px] bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`}></span>
                  <span className={`w-full h-[2px] bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`w-full h-[2px] bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}></span>
                </div>
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-[85vw] sm:w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 flex-grow flex flex-col pt-24">
          <div className="flex flex-col gap-6 mb-10">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-bold text-slate-800 hover:text-indigo-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-4">
            <button className="w-full py-3.5 border-2 border-slate-200 text-slate-800 text-[15px] font-bold rounded-xl hover:bg-slate-50 transition-colors focus:outline-none">
              Log In
            </button>
            <button className="w-full py-3.5 bg-indigo-600 text-white text-[15px] font-bold rounded-xl hover:bg-indigo-700 transition-all shadow-[0_4px_12px_rgba(99,102,241,0.25)] focus:outline-none">
              Post a Project
            </button>
          </div>
        </div>
      </div>
    </>
  );
}