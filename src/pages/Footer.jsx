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






const Footer = () => {
  return (
    <div className='relative w-full h-auto text-white bg-black'>

      <div className='relative w-full z-20 h-auto  min-[500px]:flex lg:flex  justify-between'>

        {/* left container */}
          <div className=' w-full min-[500px]:w-[45%] md:w-[40%] lg:w-[40%] flex min-[500px]:flex-col lg:flex-col '>

            {/* Logo */}
            <div className=' p-3 w-[30%] min-[500px]:w-full lg:w-full md:p-10 lg:p-10'>
              <img src={Logo} alt="Logo" className=' w-[4rem] min-[500px]:w-[5rem] lg:w-[5rem]' />
            </div>

            {/* Description */}
            <div className=' md:px-10 px-4 py-4 hidden min-[500px]:block lg:block'>
              <p className='font-poppins text-l text-[#929292]'>
                We craft immersive VS Code themes that turn everyday coding into a focused, magical experience — designed for developers who care about aesthetics, clarity, and flow.
              </p>
            </div>

            {/* Icons */}
            <div className=' w-[70%] min-[500px]:w-full lg:w-full md:px-10 lg:px-10 p-3 flex  justify-end min-[500px]:justify-start items-start min-[500px]:items-center  space-x-4 text-[#929292]'>
              <div className='flex justify-center items-center'>
                <a href='https://www.linkedin.com/in/prabhatkumarsaraswat' target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <IoLogoLinkedin size="2rem" />
                </a>
              </div>
              <div className=''>
                <a href='https://twitter.com/PrabhatSar10' target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                  <FaSquareXTwitter size="2rem" />
                </a>
              </div>
              <div className=''>
                <a href='https://github.com/prabhat1001' target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub size="2rem" />
                </a>
              </div>
            </div>
          </div>

          {/* right container */}
          <div className=' w-full min-[500px]:w-[55%] md:w-[60%] lg:w-[40%]'>

            {/* btn container */}
            <div className='my-5 min-[500px]:my-0 min-[500px]:px-0 w-full h-[40%] flex min-[500px]:flex-col md:flex-row lg:flex-row justify-center gap-4  items-center '>

            <Link to='/themes'>
              <button className=' py-4 px-4 min-[425px]:px-3 lg:px-8 min-[500px]:px-10 md:px-4  border-3 border-[#393939] bg-[#141414] cursor-pointer hover:bg-[#1d1d1d] hover:border-[#575757] rounded-2xl text-sm min-[500px]:text-lg font-poppins flex '>
                Explore Worlds <span className='text-[#ffeb36] pl-2'><BsStars size="1.3rem"/></span>
              </button>
            </Link>

              <Link
                to="/about#feedback" 
                className=' py-4 px-8 lg:px-10 min-[500px]:px-14 md:px-4 border-3 border-[#393939] bg-[#141414] cursor-pointer hover:bg-[#1d1d1d] hover:border-[#575757] rounded-2xl text-sm min-[500px]:text-lg font-poppins'>
                Suggestions ?
              </Link>
            </div>

            {/* Links Container */}
            <div className=' h-[60%] flex justify-around min-[500px]:justify-around min-[500px]:py-8 min-[500px]:px-4 md:px-10 lg:px-10 font-poppins space-x-4'>
              <div className='  min-[500px]:w-[30%] w-[25%] text-sm min-[500px]:text-md md:text-lg text-[#929292] '>
                <ul>
                  <li className='pb-4 text-[#c7c4c4]'>Quick Links</li>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/about'>About</Link></li>
                  <li><Link to="/about#faq">FAQ</Link></li>
                </ul>
              </div>
              <div className='  min-[500px]:w-[30%] w-[25%] text-sm min-[500px]:text-md md:text-lg text-[#929292] '>
                <ul>
                  <li className='pb-4 text-[#c7c4c4]'>Social</li>
                  <li><a href='https://github.com/prabhat1001' target="_blank" rel="noopener noreferrer">Github</a></li>
                  <li><a href='https://twitter.com/PrabhatSar10' target="_blank" rel="noopener noreferrer">Twitter</a></li>
                  <li><a href='https://www.linkedin.com/in/prabhatkumarsaraswat' target="_blank" rel="noopener noreferrer">Linked In</a></li>
                </ul>
              </div>
              <div className=' min-[500px]:w-[30%] w-[25%] text-sm min-[500px]:text-md md:text-lg text-[#929292] '>
                <ul>
                  <li className='pb-4 text-[#c7c4c4]'>Legal</li>
                  <li><Link to='/credits'>Credits</Link></li>
                  <li><Link to='/disclaimer'>Disclaimer</Link></li>
                </ul>
              </div>
            </div>
            
          </div>
      </div>


      <div className=' h-[10vh] min-[500px]:h-[10vh] lg:h-[20vh] flex flex-col justify-center items-center mb-10'>
          <hr className="w-full h-[2px] border-0 bg-gradient-to-r from-black from-0% via-[#bdbdbd] via-50% to-black to-100%"></hr>
          <p className='pt-4 w-[70%] text-center text-[#d8d8d8] font-poppins text-xs min-[500px]:text-[1rem] lg:text-sm '>© 2026 ThemeWorx - No muggles were harmed in this build.</p>
</div>
    

        {/* Bottom Naming */}
        <div className='w-full h-auto flex justify-center items-center overflow-hidden '>
          <img src={Branding} alt="Branding" className='w-full px-5 mt-[2rem] object-contain' />
        </div>
    </div>
  )
}

export default Footer
