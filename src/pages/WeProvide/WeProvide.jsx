import React from 'react'
import Skelly from '../../assets/skelly.gif';

const WeProvide = () => {
  return (
    <div className='w-full h-[160vh] border-2 border-blue-600 pt-8 px-10'>
        <div className=' '>
            <h1 className='text-5xl font-poppins font-bold mt-4'>We Provide</h1>
            <p className='mt-2 text-md font-poppins text-[#626262]'>Experience the magic of coding with customized themes <br/> that match your passions.</p>
        </div>
        <div className='w-full mt-8 h-[120vh] border-2 border-amber-600 lg:flex-row md:flex-row gap-5 flex flex-col items-center'>
            <div className='w-full lg:w-[65%] h-full border-2 bg-amber-200 flex flex-col gap-5'>
                <div className='border-2 border-red-600 w-full h-[50%] gap-5 flex'>
                    <div className='w-1/2 border-2 rounded-2xl '>card1</div>
                    <div className='w-1/2 border-2 rounded-2xl'>card2</div>
                </div>
                <div className='border-2 border-red-600 w-full h-[50%] gap-5 flex'>
                    <div className='w-1/2 border-2 rounded-2xl'>card3</div>
                    <div className='w-1/2 border-2 rounded-2xl'>card4</div>
                </div>
            </div>
            <div className='w-full lg:w-[35%] h-full border-4 rounded-3xl'>
                <img src={Skelly} alt="skelly gif" className='w-full h-full object-cover rounded-3xl p-2 ' />
            </div>
        </div>
    </div>
  )
}

export default WeProvide