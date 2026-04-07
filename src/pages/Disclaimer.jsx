import React from 'react'
import ForestBG from '../assets/forestYami.jpg'

const Disclaimer = () => {
  return (
    <div className='relative w-full h-screen overflow-hidden'>

      {/* Scrollbar style */}
      <style>{`
        .disclaimer-scroll::-webkit-scrollbar { width: 4px; }
        .disclaimer-scroll::-webkit-scrollbar-track { background: transparent; }
        .disclaimer-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.25); border-radius: 999px; }
        .disclaimer-scroll::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.45); }
      `}</style>

      {/* Background Image */}
      <img src={ForestBG} alt="guild" className='absolute inset-0 w-full h-full object-cover' />

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
              Disclaimer .
            </h1>
          </div>

          {/* Scrollable body — only this div scrolls */}
          <div
            className='disclaimer-scroll flex-1 overflow-y-auto px-8 md:px-10 py-6 font-playfair italic tracking-wide space-y-5 text-gray-300 text-sm leading-relaxed'
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(255,255,255,0.25) transparent',
            }}
          >
            <p>
              The content, themes, and visual elements provided on ThemeWorx are intended solely for enhancing the development experience, particularly by offering customized and aesthetically inspired themes for code editors such as Visual Studio Code.
            </p>
            <p>
              ThemeWorx is an independent platform created to help developers build a more engaging, comfortable, and creative coding environment. The themes available on this platform are designed to improve visual appeal and productivity, and are not intended to replicate, replace, or commercially compete with any original work.
            </p>
            <p>
              Some themes, color palettes, or stylistic inspirations may be influenced by popular studios, brands, movies, games, or artistic works. However, ThemeWorx does not claim ownership of any such copyrighted material, and all intellectual property rights remain with their respective owners.
            </p>
            <p>
              These themes are purely transformative in nature, focusing on color schemes, UI aesthetics, and developer experience. They do not include, distribute, or reproduce original proprietary assets such as official images, logos, soundtracks, or licensed content.
            </p>
            <p>
              ThemeWorx does not use or intend to use any third-party intellectual property for commercial or monetary gain without proper authorization. The platform exists solely to:
            </p>
            <ul>
                <li>- Enhance coding environments for developers</li>
                <li>- Encourage creativity and personalization in development tools</li>
                <li>- Provide inspiration for design and user interface aesthetics</li>
            </ul>
            
            <p>Wherever applicable, proper credit has been given to original creators in the Credits section of the website. We strive to acknowledge all sources of inspiration respectfully and transparently.
            </p>
            <p>
                If you are a rightful owner of any intellectual property and believe that any content on ThemeWorx unintentionally conflicts with your rights, please contact us. We are committed to resolving such matters promptly, including providing attribution, modification, or removal where necessary.
            </p>
            <p>
                ThemeWorx and its creator(s) shall not be held liable for any misuse of themes or interpretations by users.
            </p>
            <p>
                We sincerely respect the work and rights of all creators. Any resemblance or inspiration is unintentional and meant only to appreciate creative excellence while helping developers create a better coding experience.
            </p>
            <p className='font-playfair italic text-[#a9edf1]'>
                — Team ThemeWorx
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Disclaimer