import React from 'react'
import Branding from '../assets/EndBranding.png'
import Logo from "../assets/themeworxLogo.png"
import { Link } from 'react-router-dom';


// icons
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { GoLightBulb } from "react-icons/go";





const Footer = () => {
  return (
    <div className='relative w-full h-auto text-white bg-black'>

      <div className='relative w-full z-20 h-auto  md:flex lg:flex  justify-between'>

        {/* left container */}
          <div className=' w-full md:w-[40%] lg:w-[40%] flex md:flex-col lg:flex-col'>

            {/* Logo */}
            <div className=' p-3 w-[30%] md:w-full lg:w-full md:p-10 lg:p-10'>
              <img src={Logo} alt="" className=' w-[4rem] md:w-[5rem] lg:w-[5rem]' />
            </div>

            {/* Description */}
            <div className=' md:px-10 px-10 py-4 hidden md:block lg:block'>
              <p className='font-poppins text-l text-[#929292]'>
                We craft immersive VS Code themes that turn everyday coding into a focused, magical experience — designed for developers who care about aesthetics, clarity, and flow.
              </p>
            </div>

            {/* Icons */}
            <div className=' w-[70%] md:w-full lg:w-full md:px-10 lg:px-10 p-3 flex  justify-end md:justify-start items-start md:items-center  space-x-4 text-[#929292]'>
              <div className='flex justify-center items-center'>
                <a href='' target="_blank" rel="noopener noreferrer" className=''>
                  <IoLogoLinkedin size="2rem" />
                </a>
              </div>
              <div className=''>
                <a href='' target="_blank" rel="noopener noreferrer">
                  <FaSquareXTwitter size="2rem" />
                </a>
              </div>
              <div className=''>
                <a href='' target="_blank" rel="noopener noreferrer">
                  <FaGithub size="2rem" />
                </a>
              </div>
              <div className=''>
                <a href='' target="_blank" rel="noopener noreferrer">
                  <FaDiscord size="2rem" />
                </a>
              </div>
            </div>
          </div>

          {/* right container */}
          <div className=' w-full md:w-[60%] lg:w-[40%]'>

            {/* btn container */}
            <div className='my-10 md:my-0 md:px-8 w-full h-[40%] flex justify-around  items-center  '>

              <button className=' p-4 lg:px-6 md:px-4 border-3 border-[#393939] bg-[#141414] cursor-pointer hover:bg-[#1d1d1d] hover:border-[#575757] rounded-2xl text-sm md:text-lg font-poppins flex '>
                Explore Worlds <span className='text-[#ffeb36] pl-2'><BsStars size="1.3rem"/></span>
              </button>

              <button className=' p-4 lg:px-6 md:px-4 border-3 border-[#393939] bg-[#141414] cursor-pointer hover:bg-[#1d1d1d] hover:border-[#575757] rounded-2xl text-sm md:text-lg font-poppins'>
                Suggestions ?
              </button>
              

              {/* <div className=''>
                <Link to='/feedback'>
                  <button className='px-8 py-4 bg-[#141414] border-3 border-[#393939] rounded-2xl text-white text-lg hover:border-gray-400 transition-colors'>
                    Suggestions ?
                  </button>
                </Link>
      
                <Link to='/themes'>
                  <button className='px-8 py-4 bg-[#141414] border-3 border-[#393939] rounded-2xl text-white text-lg hover:border-gray-400 transition-colors'>
                    Explore Worlds ✨
                  </button>
                </Link>
              </div> */}
            </div>

            {/* Links Container */}
            <div className=' h-[60%] flex justify-around md:justify-around px-0 md:px-10 font-poppins'>
              <div className='  md:w-[30%] w-[25%] text-sm md:text-lg text-[#929292] '>
                <ul>
                  <li className='pb-4 text-[#c7c4c4]'>Quick Links</li>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/about'>About</Link></li>
                  <li><Link to='/faq'>FAQ</Link></li>
                  <li><Link to='/contact'>Contact</Link></li>
                </ul>
              </div>
              <div className='  md:w-[30%] w-[25%] text-sm md:text-lg text-[#929292] '>
                <ul>
                  <li className='pb-4 text-[#c7c4c4]'>Social</li>
                  <li><a href='' target="_blank" rel="noopener noreferrer">Github</a></li>
                  <li><a href='' target="_blank" rel="noopener noreferrer">Twitter</a></li>
                  <li><a href='' target="_blank" rel="noopener noreferrer">Linked In</a></li>
                </ul>
              </div>
              <div className=' md:w-[30%] w-[25%] text-sm md:text-lg text-[#929292] '>
                <ul>
                  <li className='pb-4 text-[#c7c4c4]'>Legal</li>
                  <li><Link to='/credits'>Credits</Link></li>
                  <li><Link to='/desclaimer'>Desclaimer</Link></li>
                </ul>
              </div>
            </div>
            
          </div>
      </div>


      <div className=' h-[10vh] md:h-[10vh] lg:h-[20vh] flex flex-col justify-center items-center mb-10'>
          <hr className="w-full h-[2px] border-0 bg-gradient-to-r from-black from-0% via-[#bdbdbd] via-50% to-black to-100%"></hr>
          <p className='pt-4 w-[70%] text-center text-[#4f4f4f] font-poppins text-xs md:text-[1rem] lg:text-sm '>© 2026 ThemeWorx - No muggles were harmed in this build.</p>
</div>
    

        {/* Bottom Naming */}
        <div className='w-full h-auto flex justify-center items-center overflow-hidden '>
          <img src={Branding} alt="Branding" className='w-full px-5 mt-[2rem] object-contain' />
        </div>
    </div>
  )
}

export default Footer
