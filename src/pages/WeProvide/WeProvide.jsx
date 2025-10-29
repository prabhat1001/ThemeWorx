import React from 'react'
import Skelly from '../../assets/skelly.gif';

const WeProvide = () => {
  return (
    <div className='w-full h-[160vh] border-2 border-blue-600 pt-8 px-10'>
        <div className=' '>
            <h1 className='text-5xl font-poppins font-bold mt-4'>We Provide</h1>
            <p className='mt-2 text-md font-poppins text-[#626262]'>Experience the magic of coding with customized themes <br/> that match your passions.</p>
        </div>
        <div className='w-full bg-amber-400 mt-8 md:h-[70vh] lg:h-[120vh]  lg:flex-row md:flex-row gap-5 flex flex-col items-center'>
            <div className='w-full lg:w-[65%] h-full flex flex-col md:gap-2 lg:gap-5'>
                <div className=' w-full h-[50%] gap-5 flex'>
                    <div className='w-1/2 border-4 border-[#e6e5e5]  rounded-2xl font-poppins bg-[#f4f4f4] hover:bg-white md:p-3 lg:p-6 flex flex-col  lg:gap-4 hover:shadow-lg '>
                        <h1 className='md:text-2xl lg:text-5xl font-medium text-[#6579C1]'>01</h1>
                        <h2 className=' md:text-xl lg:text-3xl font-medium '>Immersive<br/>Experience</h2>
                        <p className='text-[#393939] text-sm'>Dive into your favorite movies or anime through beautifully crafted themes that enhance your coding environment and creativity.</p>
                    </div>
                    <div className='w-1/2 border-4 border-[#e6e5e5] rounded-2xl font-poppins bg-[#f4f4f4] hover:bg-white md:p-3 lg:p-6 flex flex-col lg:gap-4 hover:shadow-lg'>
                        <h1 className='md:text-2xl lg:text-5xl font-medium text-[#6579C1]'>02</h1>
                        <h2 className='md:text-xl lg:text-3xl font-medium '>Tailored<br/>Environment</h2>
                        <p className='text-[#393939] text-sm'>Customize your VSCode setup to match your personal style and mood, making coding enjoyable and inspiring every day.</p>
                    </div>
                </div>
                <div className=' w-full h-[50%] gap-5 flex'>
                    <div className='w-1/2 border-4 border-[#e6e5e5]  rounded-2xl font-poppins bg-[#f4f4f4] hover:bg-white md:p-3 lg:p-6 flex flex-col lg:gap-4 hover:shadow-lg'>
                        <h1 className='md:text-2xl lg:text-5xl font-medium text-[#6579C1]'>03</h1>
                        <h2 className='md:text-xl lg:text-3xl font-medium '>Boost in<br/>Productivity</h2>
                        <p className='text-[#393939] text-sm'>Stay motivated and focused by working in creative environments designed to energize and enhance your coding workflow.</p>
                    </div>
                    <div className='w-1/2 border-4 border-[#e6e5e5]  rounded-2xl font-poppins bg-[#f4f4f4] hover:bg-white p-6 flex flex-col gap-4 hover:shadow-lg'>
                        <h1 className='text-5xl font-medium text-[#6579C1]'>04</h1>
                        <h2 className='text-3xl font-medium '>Easy<br/>Integration</h2>
                        <p className='text-[#393939]'>Switch seamlessly between various themes with hassle-free installation and smooth configuration, all in one place.</p>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-[35%] h-full border-4 rounded-3xl  '>
                <img src={Skelly} alt="skelly gif" className='w-full h-full p-2 object-cover rounded-3xl  ' />
            </div>
        </div>
    </div>
  )
}

export default WeProvide