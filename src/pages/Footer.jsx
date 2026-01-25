import React from 'react'
import Branding from '../assets/EndBranding.png'

const Footer = () => {
  return (
    <div className='relative w-full h-[100vh] text-white bg-black border-3 border-green-800'>
        <div className='absolute w-full h-auto border-amber-400 border-2 flex justify-center items-center bottom-0 overflow-hidden '>
          {/* <div className=" relative text-8xl md:text-9xl lg:text-[13rem] font-inter font-bold 
      bg-gradient-to-b from-[#0e0e0e] from-20% to-transparent to-90% bg-clip-text text-transparent">
        ThemeWorx
      </div> */}
          <img src={Branding} alt="Branding" className='w-full px-5 mt-[2rem] object-contain' />
        </div>
    </div>
  )
}

export default Footer
