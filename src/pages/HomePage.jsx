import React, { lazy, Suspense } from 'react'
import '../index.css'
import LandingPage from './LandingPage.jsx' // keep eager — it's above the fold

const WeProvide = lazy(() => import('./WeProvide.jsx'))
const ExploreThemes = lazy(() => import('./ExploreThemes.jsx'))
const AnotherWorld = lazy(() => import('./AnotherWorld.jsx'))
const BottomPage = lazy(() => import('./BottomPage.jsx'))
const FtBanner = lazy(() => import('./FtBanner.jsx'))
const Footer = lazy(() => import('./Footer.jsx'))

const HomePage = () => {
  return (
    <div>
      <LandingPage />
      <main>  
        <Suspense fallback={null}>
          <WeProvide />
          <ExploreThemes />
          <AnotherWorld />
          <BottomPage />
          <FtBanner />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default HomePage