import React from 'react'
import Marquee from "react-fast-marquee";
import { LogoImg } from '../data/LogoImg.js'

const InfiniteLogo = () => {
  return (
    <div className=' w-[90vw] h-[30vh] flex justify-center items-center'>
    <Marquee 
    speed={50}
    gradient={true}
    >
        {LogoImg.map((logo) => (
            <div key={logo.id} className=" mx-15 flex items-center justify-center ">
                <img
                    src={logo.src}
                    alt={logo.alt}
                    className=" h-[20vh] aspect-3/2 object-contain mix-blend-color-burn"
                    loading="lazy"
                />
            </div>
        ))}
    </Marquee>
    </div>
  )
}

export default InfiniteLogo