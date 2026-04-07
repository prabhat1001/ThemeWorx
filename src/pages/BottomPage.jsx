import React from 'react'
import InfiniteLogo from '../components/InfiniteLogo.jsx'



const BottomPage = () => {
  return (
    <div className="max-w-screen relative overflow-hidden">

        {/* Bottom 1 */}
        <div className=" w-[100vw] lg:h-[80vh] md:h-[60vh] h-[50vh] flex flex-col justify-center items-center gap-10  mb-[10vh]">
            <p className='w-full h-[10vh] flex justify-center items-center font-LaBelleAurore text-[#383838] text-2xl md:text-3xl lg:text-2xl '>Themes Inspired From:</p>
            <InfiniteLogo />
        </div>
    </div>
  )
}

export default BottomPage
