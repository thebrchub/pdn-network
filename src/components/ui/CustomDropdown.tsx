import { useState, useEffect, useRef } from 'react';

interface DropdownOption {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
}

export default function CustomDropdown({
  options,
  value,
  onChange,
  placeholder = 'Select...',
  label,
  error
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className="relative w-full text-left font-sans" ref={dropdownRef}>
      {label && (
        <label className="block text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-2">
          {label}
        </label>
      )}

      {/* Dropdown Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full p-3.5 bg-gradient-to-b from-white to-[#F8FAFC] border rounded-xl text-left text-[14px] font-medium transition-all flex items-center justify-between cursor-pointer focus:outline-none focus:ring-4
          ${error 
            ? 'border-red-300 focus:border-red-500 focus:ring-red-500/10 bg-red-50/20 text-red-900 shadow-sm' 
            : isOpen
              ? 'border-blue-500 ring-4 ring-blue-500/10 text-slate-900 shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_4px_12px_rgba(37,99,235,0.05)]'
              : 'border-slate-200 text-slate-800 hover:border-slate-300 shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_2px_4px_rgba(0,0,0,0.02)]'
          }`}
      >
        <span className={!selectedOption ? 'text-slate-400 font-normal' : 'text-slate-800'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        
        {/* Smooth Custom Rotating Chevron Arrow */}
        <svg 
          className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-500' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu Options Panel */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-full bg-white rounded-xl border border-slate-100 shadow-[0_12px_30px_-6px_rgba(15,23,42,0.08),0_4px_12px_-2px_rgba(15,23,42,0.03)] overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200 max-h-60 overflow-y-auto ring-1 ring-slate-200/50">
          <div className="py-1">
            {options.map((option) => {
              const isSelected = option.value === value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 text-[14px] font-medium transition-colors cursor-pointer flex items-center justify-between
                    ${isSelected 
                      ? 'bg-blue-50/60 text-blue-600 font-bold border-l-[3px] border-blue-600' 
                      : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600'
                    }`}
                >
                  <span>{option.label}</span>
                  {isSelected && (
                    <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}