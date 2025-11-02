import React from 'react'
import AnotherWorldImg from '../assets/space.jpg'

const AnotherWorld = () => {
  return (
    <div className='mt-8 w-full h-screen lg:h-[60vh] bg-green-200'>
        <img src={AnotherWorldImg} alt="" className='w-full h-full object-cover'/>
    </div>
  )
}

export default AnotherWorld