import React from 'react'
import { Link } from 'react-router-dom'

import HarryPotter from '../assets/hp.jfif'
import StarWars from '../assets/starwars.jfif'
import Ghibili from '../assets/ghibili.jfif'

const ExploreThemes = () => {
  return (
    <section className="  w-full min-h-screen  text-center flex flex-col items-center px-6 md:px-10 py-16 bg-white font-poppins">
        {/* Header */}
      <div className=" mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1f1f1f]">
          Explore Themes
        </h1>
        <p className="mt-3 text-md text-[#626262]">
          Explore a range of themes designed to enhance your coding experience.<br/> Find your style and boost creativity.
        </p>
      </div>

      {/* cards grid */}
        <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 w-[80vw] lg:h-[60vh] md:h-[120vh] h-[150vh]  ">
            {/* Theme cards go here */}
            <div className=' border-4 bg-[#f4f4f4] hover:bg-white border-[#e6e5e5] rounded-3xl overflow-hidden hover:shadow-lg transition-transform duration-300 hover:-translate-y-2'>
                
                <Link to="/themes/harry-potter">
                <div className='w-full h-[85%]'>
                    <img src={HarryPotter} alt="" className='w-full h-full object-cover'/>
                </div>
                <div className='w-full h-[15%] flex justify-center items-center text-2xl font-medium'>Harry Potter</div>
                </Link>
            </div>

            
            <div className=' border-4 bg-[#f4f4f4] hover:bg-white border-[#e6e5e5] rounded-3xl overflow-hidden hover:shadow-lg transition-transform duration-300 hover:-translate-y-2'>
                <Link to="/themes/star-wars">
                <div className='w-full h-[85%]'>
                    <img src={StarWars} alt="" className='w-full h-full object-cover'/>
                </div>
                <div className='w-full h-[15%] flex justify-center items-center text-2xl font-medium'>Star Wars</div>
                </Link>
            </div>

            <div className='  border-4 bg-[#f4f4f4] hover:bg-white border-[#e6e5e5] rounded-3xl overflow-hidden hover:shadow-lg transition-transform duration-300 hover:-translate-y-2'>
                
                <Link to="/themes/ghibili">
                <div className='w-full h-[85%]'>
                    <img src={Ghibili} alt="" className='w-full h-full object-cover'/>
                </div>
                <div className='w-full h-[15%] flex justify-center items-center text-2xl font-medium '>Ghibili</div>
                </Link>
            </div>
        </div>
        


        {/* Button that links to theme page */}
          <div className='w-full mt-[10vh]'>  
            <Link to="/themes">
              <button className="mt-auto bg-[#f4f4f4] self-start px-4 py-2 text-[#6579C1] border-2 border-[#5568a8] rounded-[2rem] hover:bg-[#5568a8] hover:text-white transition-colors duration-300 cursor-pointer">
                More Themes
              </button>
            </Link>
          </div>
       

    </section>
  )
}

export default ExploreThemes