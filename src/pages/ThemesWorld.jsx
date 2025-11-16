import React from 'react'

import Castle from '../assets/castle.jpeg'
const ThemesWorld = () => {
  return (
    <div className="w-full min-h-screen flex justify-center border-2 border-red-500 bg-black">
        <div className=' relative border-2 w-[96vw] h-[90vh] mt-8 rounded-tl-[2rem] rounded-tr-[2rem] flex flex-col overflow-hidden'>
          <img src={Castle} alt="" className='w-full h-full object-cover' />
          <div className=' absolute bottom-0 w-full h-[40vh]  bg-gradient-to-t from-black from-30% to-transparent to-80%'></div>
          <h1 className='absolute leading-tight bottom-0 right-0 pb-10 pr-10 text-right font-poppins text-6xl text-white  font-semibold'>Explore&nbsp; <br/> Your World<span className='text-[#2AAB64]'>.</span></h1>
        </div>
    </div>
  )
}

export default ThemesWorld