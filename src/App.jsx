import React from 'react'
import './index.css'
import LandingPage from './pages/LandingPage.jsx'
import WeProvide from './pages/WeProvide.jsx'
import ExploreThemes from './pages/ExploreThemes.jsx'
import AnotherWorld from './pages/AnotherWorld.jsx'
import BottomPage from './pages/BottomPage.jsx'

const App = () => {
  return (
    <div >
      <LandingPage />
      <WeProvide />
      <ExploreThemes />
      <AnotherWorld />
      <BottomPage />
    </div>
  )
}

export default App