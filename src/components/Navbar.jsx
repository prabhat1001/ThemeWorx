import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/themeworxLogo.png"
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent px-6 lg:px-12  w-full relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo - Left */}
        <div className="flex-1 flex items-center ">
          {/* <div className="text-white font-caesar text-3xl tracking-widest">
            themeWorx.
          </div> */}
          <img src={Logo} alt="" className=" h-[4rem] lg:h-[5rem]" />
        </div>
        {/* Center Nav Links - Large screens */}
        <div className="hidden md:flex flex-1 justify-center space-x-8 items-center font-poppins  ">
            <Link to='/' className="relative text-white text-lg px-3 py-1 hover:underline">Home</Link>
            <Link to='/about' className='relative text-white text-lg px-3 py-1 hover:underline'>About</Link>
            <Link to='/about/#faq' className="relative text-white text-lg px-3 py-1 hover:underline ">FAQs</Link>
        </div>
        {/* Contact Button - Right */}
        <div className="flex-1 flex justify-end items-center font-poppins">
          <div className="hidden md:block">
            <a href="#contact">
              <button className="bg-[#294f44] text-white px-4 py-2 rounded-lg hover:bg-[#73a37b]">
                Contact
              </button>
            </a>
          </div>
          {/* Hamburger - Small screens */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              {/* Hamburger icon */}
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-[#0c1618] bg-opacity-90 flex flex-col items-center py-10 space-y-6 md:hidden z-50">
          {/* Close button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <a href="#home" className="text-white text-xl" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" className="text-white text-xl" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#faqs" className="text-white text-xl" onClick={() => setMenuOpen(false)}>FAQs</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            <button className="bg-[#294f44] text-white px-4 py-2 rounded-4xl hover:bg-[#73a37b]">
              Contact
            </button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
