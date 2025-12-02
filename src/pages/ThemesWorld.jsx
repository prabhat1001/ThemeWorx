import React from 'react'
import {Link} from 'react-router-dom'
import {ThemesData} from '../data/themesData.js'
import Castle from '../assets/castle.jpeg'

const ThemesWorld = () => {
  return (
    <div className=' bg-black w-full h-auto'>
      {/* castle hero sec */}
      <div className="w-full min-h-screen flex justify-center  bg-black">
          <div className=' relative border-2 lg:w-[94vw] md:w-[90vw] w-[90vw] h-[90vh] mt-8 rounded-tl-[2rem] rounded-tr-[2rem] flex flex-col overflow-hidden'>
            <img src={Castle} alt="" className='w-full h-full object-cover' />
            <div className=' absolute bottom-0 w-full h-[40vh]  bg-gradient-to-t from-black from-30% to-transparent to-80%'></div>
            <h1 className='absolute leading-tight bottom-0 right-0 pb-10 pr-10 text-right font-poppins lg:text-6xl md:text-7xl text-4xl text-white font-semibold'>Explore&nbsp; <br/> Your World<span className='text-[#2AAB64]'>.</span></h1>
          </div>
      </div>

      {/* card grid in grid of 3 cards with big square image, dynamically responsive */}
      
        <div className=" w-full min-h-screen flex justify-center items-center p-10 ">
          <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-[1200px]'>
            {ThemesData.map((card) => (
              <Link to={`${card.slug}`} key={card.id} className=" w-full lg:h-[60vh] md:h-[30vh] h-[50vh]  rounded-[2rem] overflow-hidden shadow-lg">
                <img src={card.src} alt={card.alt} className=' w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out'/>
              </Link>
            ))}
          </div>
        </div>

          {/* bottom Line */}
          <div className=' w-full h-[40vh]'>
            <h1 className='text-white font-pixelify text-4xl flex justify-center items-center h-full'>
              <span className='text-red-700'>404:</span> &nbsp;
              Boring Theme Not Found!
            </h1>
          </div>
      
    </div>
  )
}

export default ThemesWorld