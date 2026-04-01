import React, { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import './index.css'
import ScrollToTop from './components/ScrollToTop';

const HomePage = lazy(() => import('./pages/HomePage'))
const ThemesWorld = lazy(() => import('./pages/ThemesWorld'))
const ThemesDetail = lazy(() => import('./pages/ThemesDetail'))
const About = lazy(() => import('./pages/About'))

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
        </Routes>
      </Suspense>
    </>
  )
}

export default App