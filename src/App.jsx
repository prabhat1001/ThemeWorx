import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import './index.css'
import HomePage from './pages/HomePage'
import ThemesWorld from './pages/ThemesWorld'
import ThemesDetail from './pages/ThemesDetail'
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop /> 
      
      <Routes location={location} key={location.pathname}>
      <Route path='/' element={<HomePage />} />
      <Route path='/themes' element={<ThemesWorld />} />
      <Route path="/themes/:slug" element={<ThemesDetail />} />
      </Routes>
    </>
  )
}

export default App