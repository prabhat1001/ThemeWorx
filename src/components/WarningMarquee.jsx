import React from 'react'
import Marquee from "react-fast-marquee";
import { IoIosWarning } from "react-icons/io";


const WarningMarquee = ({direct}) => {
  return (
    <div className=' w-[120vw] h-auto flex justify-center items-center 
    bg-[#fff000] shadow-xl/30 '>
    <Marquee 
    speed={100}
    direction={direct}
    >
        <div className='lg:h-[8vh] md:h-[6vh] h-[5vh] flex justify-center items-center '>
            <p className='font-bebas lg:text-2xl md:text-3xl text-xl flex gap-4 uppercase tracking-wider mr-10 '>
                <span><IoIosWarning /></span>
                Warning: May cause extreme productivity and spontaneous theme-hopping.
                {/* <span className=''><IoIosWarning size={28}/></span> */}
            </p>     
        </div>
    </Marquee>
    </div>
  )
}

export default WarningMarquee