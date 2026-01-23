import React from 'react'
// import AnotherWorldImg from '../assets/space.jpg'
// import Fox from '../assets/fox.png'
import PixelWorld from '../assets/pixelworld.jpg'

const AnotherWorld = () => {
  return (
    <div className='mt-8 w-full h-screen lg:h-[60vh]'>
        <img src={PixelWorld} alt="" className='w-full h-full object-cover'/>
    </div>
  )
}

export default AnotherWorld