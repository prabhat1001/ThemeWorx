import React from "react";
import background from "../assets/ForestBG.jpg";
import CentreImg from "../assets/mystical.jpeg";
import Navbar from "../components/Navbar";
// import LogoImg from '../../assets/logo.png';



const LandingPage = () => {
  return (
    <div className="max-w-[100vw] relative overflow-hidden ">

      {/* Landing 1 */}
      <div className=" w-[100vw] lg:h-[130vh] h-screen">

        <div className="absolute z-20 w-full"><Navbar /></div>

        {/* Hero title Section */}
        <div>
          <div className="  absolute z-10 mt-[30vh] w-full flex flex-col items-center px-4">
            <h1 className="text-white font-poppins font-semibold lg:text-7xl md:text-5xl text-5xl text-center leading-tight drop-shadow-lg"> Craft Your <br /> Coding <span className="text-[#a6fa7f] font-semibold">Realm.</span></h1>
            <p className="text-white font-poppins lg:text-lg md:text-md text-sm text-center mt-4 max-w-2xl drop-shadow-md">
              Bring your favorite worlds to life with themes inspired by<br/>
              movies, anime, and games. <br/><span className="text-[#a6fa7f] font-semibold"> Code your way!</span></p>
          </div>
        </div>

        {/* background blur */}
        {/* <div
          className="
        z-5
        w-full lg:h-[130vh] h-screen
        absolute left-0 top-0  
        brightness-80 xl:backdrop-blur-[2px] md:backdrop-blur-[px] backdrop-blur-[2px]"
        ></div> */}

        {/* background image */}
        <img src={background} className="w-full h-full object-cover" />
      </div>

      {/* Middle Img */}
      <div className=" absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 lg:w-[70vw] md:w-[70vw] w-[90vw] aspect-video  rounded-3xl shadow-xl/20 ">
        <img
          src={CentreImg}
          className="w-full h-full object-cover rounded-3xl contrast-125 brightness-75 "
        />
      </div>

      {/* Landing 2 */}
      <div className=" w-[100vw] h-[80vh] lg:h-[110vh]  ">
    
    {/* Why? heading */}
    <div className="  absolute z-20 mt-[30vh] lg:mt-[60vh] w-full flex flex-col items-center px-4 ">
      <div className=" relative  uppercase text-8xl md:text-9xl lg:text-9xl font-inter font-bold 
      bg-gradient-to-b from-black from-30% to-transparent to-80% bg-clip-text text-transparent">
        WHY?
      </div>
      <div className=" font-LaBelleAurore lg:text-4xl md:text-4xl text-3xl text-center">
        " Because it's Cool "
      </div>
      <div className=" mt-6 font-poppins text-md text-center max-w-3xl text-[#929292]">
        Turn your coding hours into an adventure. <br/> Escape the boring. Build magic.
      </div>
    </div>
      </div>
    </div>
  );
};

export default LandingPage;
