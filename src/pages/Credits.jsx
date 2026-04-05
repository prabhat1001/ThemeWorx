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
        creator: "AI generated",
        source: "#",
      },
      {
        title: "Pixelated Kitchen Scene",
        creator: "Unknown",
        source: "#",
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
    ],
  },
  {
    category: "THEME INSPIRATIONS",
    items: [
      {
        title: "Wizarding World Inspired",
        creator: "Various Creators",
        source: "#",
      },
      {
        title: "Space Saga Inspired",
        creator: "Various Creators",
        source: "#",
      },
      {
        title: "Anime Inspired (Ghibli Style)",
        creator: "Various Creators",
        source: "#",
      },
      {
        title: "Dark Gothic (Nosferatu Inspired)",
        creator: "Various Creators",
        source: "#",
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

              </div>
    
            </div>
          </div>
        </div>
  )
}

export default Credits