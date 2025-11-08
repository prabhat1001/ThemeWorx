import React from 'react'
import { LogoImg } from '../data/LogoImg.js'
import InfiniteLogo from '../components/InfiniteLogo.jsx'
import WarningMarquee  from '../components/WarningMarquee.jsx'
import Jedi from '../assets/jedi.jpeg'


const BottomPage = () => {
  return (
    <div className="max-w-screen relative overflow-hidden ">
        {/* Bottom 1 */}
        <div className=" w-[100vw] lg:h-[80vh] md:h-[60vh] h-[50vh] flex flex-col justify-center mt items-center gap-10  mb-[20vh] md:mb-[20vh] lg:mb-[30vh]">
            <p className='w-full h-[10vh] flex justify-center items-center font-LaBelleAurore text-[#383838] text-2xl md:text-3xl lg:text-2xl '>Themes Inspired From:</p>
            <InfiniteLogo />
        </div>


        {/* CTA */}
              <div className=" absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 lg:h-[25vw] md:h-[35vw] h-[100vw] w-[80vw]  rounded-3xl shadow-xl/30 flex ">
                <img
                  src={Jedi}
                  className="w-full h-full object-cover rounded-3xl contrast-125 brightness-75 "
                />
                <div className='absolute flex flex-col items-end pr-[5vw] justify-center w-full h-full bg-gradient-to-l from-black from-10% to-transparent to-90% rounded-3xl'>
                  <h1 className='lg:text-5xl md:text-3xl text-white font-poppins font-semibold'>Code without limit <span className='text-green-600'>.</span></h1>
                  <p className='text-lg md:text-[1rem] w-[55%] text-[#cccccc] font-poppins text-right'>find the right theme for your project, easy apply in minutes.</p>
                </div>
              </div>
        
            


        {/* Bottom 2 */}
        <div className=" relative w-[100vw] lg:h-[120vh] md:h-[70vh] h-[70vh] border-2 border-blue-700 bg-[radial-gradient(circle_at_center,#001820,#000000)] flex flex-col justify-center items-center ">

        
          <div className=' z-11 lg:-rotate-8 md:-rotate-15 -rotate-20 mt-[15vh]'>
            <WarningMarquee direct={'right'} />
          </div>
          <div className=' z-10 rotate-12 mt-6'>
            <WarningMarquee direct={'left'}  />
          </div>
        </div>
    </div>
  )
}

export default BottomPage