import React, { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import './index.css'
import ScrollToTop from './components/ScrollToTop';

const HomePage = lazy(() => import('./pages/HomePage'))
const ThemesWorld = lazy(() => import('./pages/ThemesWorld'))
const ThemesDetail = lazy(() => import('./pages/ThemesDetail'))
const About = lazy(() => import('./pages/About'))
const Disclaimer = lazy(() => import('./pages/Disclaimer'))
const Credits = lazy(() => import('./pages/Credits'))

const App = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<HomePage />} />
          <Route path='/themes' element={<ThemesWorld />} />
          <Route path="/themes/:slug" element={<ThemesDetail />} />
          <Route path='/about' element={<About />} />
          <Route path='/credits' element={<Credits />} />
          <Route path='/disclaimer' element={<Disclaimer />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App