import React from 'react'
import './index.css'
import LandingPage from './pages/LandingPage/LandingPage.jsx'
import WeProvide from './pages/WeProvide/WeProvide.jsx'
import ExploreThemes from './pages/ExploreThemes/ExploreThemes.jsx'

const App = () => {
  return (
    <div >
      <LandingPage />
      <WeProvide />
      <ExploreThemes />
    </div>
  )
}

export default App