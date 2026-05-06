import React from 'react';
import { CircleUser, PhoneCall } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white px-6 md:px-12 py-5 border-b border-gray-100 shadow-sm">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        
        {/* Left: Logo and Nav Links Grouped */}
        <div className="flex items-center gap-24">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-8 h-8 text-black"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <circle cx="12" cy="13" r="3.5"></circle>
                <line x1="14.5" y1="15.5" x2="16.5" y2="17.5"></line>
              </svg>
            </div>
            <span className="text-[22px] font-extrabold text-black tracking-tight leading-none">
              Real Estate
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-10">
            <a 
              href="#" 
              className="text-black font-bold text-[16px] relative after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-[2.5px] after:bg-black"
            >
              Home
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-black font-medium text-[16px] transition-colors"
            >
              Property
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-black font-medium text-[16px] transition-colors"
            >
              About us
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-black font-medium text-[16px] transition-colors"
            >
              Contact us
            </a>
          </div>
        </div>

        {/* Right Section: Login and Phone */}
        <div className="flex items-center gap-10">
          {/* Login Button */}
          <button className="flex items-center gap-2.5 group">
            <div className="p-1 rounded-full group-hover:bg-gray-50 transition-colors">
              <CircleUser size={32} strokeWidth={1.5} className="text-black" />
            </div>
            <span className="text-[17px] font-bold text-black border-transparent border-b-2 hover:border-black transition-all">
              Login
            </span>
          </button>

          {/* Phone Information */}
          <div className="flex items-center gap-3">
             <div className="w-11 h-11 bg-gray-50 rounded-full flex items-center justify-center -scale-x-100">
                <PhoneCall size={22} className="text-black fill-black/10" />
             </div>
             <span className="text-[18px] font-bold text-black tracking-tight">
               (257) 388-6895
             </span>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
