import React from 'react'
import { LogoImg } from '../data/LogoImg.js'
import InfiniteLogo from '../components/InfiniteLogo.jsx'

const BottomPage = () => {
  return (
    <div className="max-w-screen relative overflow-hidden ">
        {/* Bottom 1 */}
        <div className=" w-[100vw] lg:h-[80vh] h-screen  border-red-700 flex flex-col justify-center py-10 items-center gap-10 ">
            <p className='w-full h-[10vh] flex justify-center items-center font-LaBelleAurore text-[#383838] text-2xl'>Themes Inspired From:</p>
            <InfiniteLogo />
        </div>
        {/* Bottom 2 */}
        <div className=" w-[100vw] lg:h-[100vh] h-screen border-2 border-blue-700">
            bottom2
        </div>
    </div>
  )
}

export default BottomPage