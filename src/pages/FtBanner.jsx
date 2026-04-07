import React from 'react'
import SpaceShip from '../assets/space-shuttle.webp'

const FtBanner = () => {
  return (
    <div className='w-full h-screen lg:h-[60vh]'>
        <img src={SpaceShip} alt="Space Shuttle" className='w-full h-full object-cover' />
        <div className='w-full h-[3rem] bg-black bottom-vignette z-20 relative'></div>
    </div>
  )
}

export default FtBanner