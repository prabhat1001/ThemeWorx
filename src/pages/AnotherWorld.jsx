import React from 'react'
import AnotherWorldImg from '../assets/space.jpg'

const AnotherWorld = () => {
  return (
    <div className='w-full h-[80vh] bg-green-200'>
        <img src={AnotherWorldImg} alt="" className='w-full h-full object-cover'/>
    </div>
  )
}

export default AnotherWorld