import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/themeworxLogo.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent px-6 lg:px-12 w-full relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo - Left */}
        <div className="flex-1 flex items-center">
          <img src={Logo} alt="ThemeWorx home" className="h-[4rem] lg:h-[5rem]" />
        </div>

        {/* Center Nav Links - Large screens */}
        <div className="hidden md:flex flex-1 justify-center space-x-8 items-center font-poppins">
          <Link to='/' className="text-white text-lg px-3 py-2 min-h-[44px] flex items-center">Home</Link>
          <Link to='/about' className='relative text-white text-lg px-3 py-2 min-h-[44px] flex items-center'>About</Link>
          <Link to='/about/#faq' className="relative text-white text-lg px-3 py-2 min-h-[44px] flex items-center">FAQs</Link>
        </div>

        {/* Contact Button - Right */}
        <div className="flex-1 flex justify-end items-center font-poppins">
          <div className="hidden md:block">
            <Link to="/about/#feedback">
              <button className="relative text-white px-4 py-2 rounded-3xl border-2 border-white/20 backdrop-blur-xs bg-white/10 shadow-lg hover:bg-white/20 transition-all duration-100 focus-visible:ring-2 focus-visible:ring-white">
                Contact
              </button>
            </Link>
          </div>

          {/* ✅ Hamburger - aria-label added, focus-outline fixed */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              className="text-white focus-visible:ring-2 focus-visible:ring-white rounded"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-[#0c1618] bg-opacity-90 flex flex-col items-center py-10 space-y-6 md:hidden z-50">
          
          {/* ✅ Close button - aria-label already there, focus fixed */}
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
            className="absolute top-6 right-6 text-white focus-visible:ring-2 focus-visible:ring-white rounded"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <Link to='/' className="text-white text-xl" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to='/about' className="text-white text-xl" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to='/about/#faq' className="text-white text-xl" onClick={() => setMenuOpen(false)}>FAQs</Link>
          <Link to='/about/#feedback' onClick={() => setMenuOpen(false)}>
            <button className="bg-[#294f44] text-white px-4 py-2 rounded-4xl hover:bg-[#73a37b] focus-visible:ring-2 focus-visible:ring-white">
              Contact
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;