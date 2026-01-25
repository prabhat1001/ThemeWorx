import React from 'react'
import Land from '../assets/ground.jpg'
import Bar from '../assets/westworld.jpg'
import SpaceShip from '../assets/space-shuttle.jpg'

const FtBanner = () => {
  return (
    <div className='w-full h-screen lg:h-[60vh] border-3 border-green-800 '>
        <img src={SpaceShip} alt="Ground" className='w-full h-full object-cover' />
        <div className='w-full h-[3rem] bg-black bottom-vignette z-20 relative'></div>
    </div>
  )
}

export default FtBanner