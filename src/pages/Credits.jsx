import React from 'react'
import Forest from '../assets/AutForest.jpg'
import { creditsData } from "../data/creditsData";

const Credits = () => {
  return (
    <div className='relative w-full h-screen overflow-hidden'>
    
          {/* Scrollbar style */}
          <style>{`
            .credit-scroll::-webkit-scrollbar { width: 4px; }
            .credit-scroll::-webkit-scrollbar-track { background: transparent; }
            .credit-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.25); border-radius: 999px; }
            .credit-scroll::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.45); }
          `}</style>
    
          {/* Background Image */}
          <img src={Forest} alt="tavern" className='absolute inset-0 w-full h-full object-cover' />
    
          {/* Center wrapper */}
          <div className='relative z-10 flex items-center justify-center h-full px-4'>
    
            {/* Glass Box */}
            <div
              className='w-full max-w-2xl h-[75vh] rounded-2xl border-2 border-white/20 shadow-2xl flex flex-col'
              style={{
                background: 'rgba(0, 0, 0, 0.616)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}
            >
              {/* Header — pinned */}
              <div className='flex-shrink-0 px-8 md:px-10 pt-8 pb-5 border-b border-white/15'>
                <h1 className='text-2xl md:text-3xl font-playfair text-white tracking-tight'>
                  Credits .
                </h1>
              </div>
    
              {/* Scrollable body — only this div scrolls */}
              <div
                className='credit-scroll flex-1 overflow-y-auto px-8 md:px-10 py-6 font-poppins space-y-5 text-white/75 text-sm leading-relaxed'
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: 'rgba(255,255,255,0.25) transparent',
                }}
              >
      
            
            {creditsData.map((section, index) => (
            <div key={index} className="mb-16">
            <h2 className="text-lg md:text-xl font-playfair mb-8 tracking-wider text-gray-300">
              {section.category}
            </h2>

            {section.items.map((item, i) => (
              <div key={i} className="mb-4">
                <p className="text-lg md:text-lg font-playfair">
                  {item.title}
                </p>
                <p className="text-sm text-gray-400 font-playfair italic">
                  Creator: {item.creator}
                </p>
                <a
                  href={item.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#f88d4e] hover:underline font-playfair"
                >
                  Source Link
                </a>
              </div>
            ))}
          </div>
        ))}

        <div className='font-playfair mb-16'>
            <p className=' uppercase tracking-wider text-lg md:text-xl mb-8'>Attribution Note</p>
            <p className='italic  text-gray-400 mb-4'>In some cases, original creators could not be identified due to the nature of content sharing across the internet. These assets are used strictly for inspirational and transformative purposes within a development environment.
            </p>
            <p className='italic  text-gray-400'>If you are the rightful creator of any media listed here and would like proper credit, modification, or removal, please contact us. We will take immediate action.
            </p>
        </div>

        <div className='font-playfair mb-8'>
            <p className=' uppercase tracking-wider text-lg md:text-xl mb-8'>With respect</p>
            <p className='italic  mb-4'>To every creator whose work contributed to this platform,
              <br />
              thank you for shaping the visual experience of ThemeWorx.
            </p>
            <p className='italic text-[#f88d4e]'> - Team ThemeWorx
            </p>
        </div>
              
              
              </div>
    
            </div>
          </div>
        </div>
  )
}

export default Credits