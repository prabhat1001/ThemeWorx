import React from 'react'
import Forest from '../assets/AutForest.jpg'


const creditsData = [
  {
    category: "VISUAL MEDIA",
    items: [
      {
        title: "Dungeon Background",
        creator: "Alex Alexandrov",
        source: "https://www.artstation.com/artwork/Gm4WW",
      },
      {
        title: "Mr. Skelly",
        creator: "Christian Watson (1924us)",
        source: "https://www.instagram.com/p/DRnO4IBk4ux/?img_index=17",
      },
      {
        title: "Harry Potter Card",
        creator: "Skye",
        source: "https://in.pinterest.com/pin/4151824649814442/",
      },
      {
        title: "Totoro Card",
        creator: "Hayao Miyazaki (Studio Ghibli)",
        source: "https://giphy.com/gifs/3MrvkizmiGbkuO6JD0",
      },
      {
        title: "Darth Vader Card",
        creator: "Mahmud Asrar",
        source: "https://www.instagram.com/p/B5Ie4PghSxY/",
      },
      {
        title: "Pixelated Kitchen Scene",
        creator: "Unknown",
        source: "https://www.reddit.com/r/wallpaper/comments/1l0qqxz/new_batch_7680x2160_ultrawide_wallpapers_0601/",
      },
      {
        title: "Spacecraft",
        creator: "AI Generated",
        source: "https://ultrawidewallpapers.net/gallery?lang=en&tags=Spaceships&lightbox=aishot-1421.jpg",
      },
      {
        title: "Marvel Vision",
        creator: "AI Generated",
        source: "https://in.pinterest.com/pin/11470174046527617/",
      },
      {
        title: "StarWars cover",
        creator: "vashperado. ",
        source: "https://www.reddit.com/r/StarWars/comments/13bncpr/kylo_ren_vs_rey_art_by_vashperado/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",
      },
      {
        title: "Nosferatu cover",
        creator: "Unknown ",
        source: "https://in.pinterest.com/pin/76139049947621091/",
      },
      {
        title: "My Neighbor Totoro cover",
        creator: "Hayao Miyazaki (Studio Ghibli) ",
        source: "https://characterdesignreferences.com/art-of-animation-7/art-of-my-neighbor-totoro",
      },
      {
        title: "Jurrasic Park cover",
        creator: "Anthony Petrie",
        source: "https://www.behance.net/gallery/141823507/Jurassic-Park-Franchise-CP-Style-Guide-2021?tracking_source=search_projects|tyrannosaurus+rex",
      },
      {
        title: "Dark Vader Hero Image",
        creator: "Unknown",
        source: "https://wallpapers-clan.com/desktop-wallpapers/darth-vader-force-choke-foggy-forest/",
      },
      {
        title: "Dark Castle Hero Image",
        creator: "Zsofia Dankova",
        source: "https://www.artstation.com/artwork/v1DAND",
      },
      {
        title: "Stranger Things Hero Image",
        creator: "Kyle Lambert",
        source: "https://www.instagram.com/p/CuKau1WxD-L/?img_index=4",
      },
      {
        title: "Credits Page Background",
        creator: "Wojciech Wilk",
        source: "https://www.artstation.com/artwork/rGEL6",
      },
      {
        title: "Disclaimer Page Background",
        creator: "Yami Yami",
        source: "https://www.artstation.com/artwork/g0xV2E?utm_source=Pinterest&utm_medium=organic",
      },
    ],
  },
  {
    category: "THEME INSPIRATIONS",
    items: [
      {
        title: "Wizarding World Inspired",
        creator: "JK Rowling (Warner Bros.)",
        source: "https://www.harrypotter.com/discover/films",
      },
      {
        title: "Space Saga Inspired",
        creator: "George Lucas (Lucasfilm)",
        source: "https://www.lucasfilm.com/",
      },
      {
        title: "Anime Inspired (Ghibli Style)",
        creator: "Hayao Miyazaki (Studio Ghibli)",
        source: "https://www.ghibli.jp/",
      },
      {
        title: "Dark Gothic (Nosferatu Inspired)",
        creator: "Robert Eggers (Eggers Films)",
        source: "https://www.universalpictures.co.uk/micro/nosferatu",
      },
      {
        title: "Strange Things Inspired",
        creator: "Duffer Brothers",
        source: "https://www.imdb.com/title/tt4574334/",
      },
    ],
  },
];

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