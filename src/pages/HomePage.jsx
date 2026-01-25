import React from 'react'
import '../index.css'
import LandingPage from './LandingPage.jsx'
import WeProvide from './WeProvide.jsx'
import ExploreThemes from './ExploreThemes.jsx'
import AnotherWorld from './AnotherWorld.jsx'
import BottomPage from './BottomPage.jsx'
import FtBanner from './FtBanner.jsx'
import Footer from './Footer.jsx'

const HomePage = () => {
  return (
    <div >
      <LandingPage />
      <WeProvide />
      <ExploreThemes />
      <AnotherWorld />
      <BottomPage />
      <FtBanner />
      <Footer/>
    </div>
  )
}

export default HomePage