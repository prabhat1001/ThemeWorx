import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import './index.css'
import HomePage from './pages/HomePage'
import ThemesWorld from './pages/ThemesWorld'

const App = () => {
  const location = useLocation();

  return (
      <Routes location={location} key={location.pathname}>
      <Route path='/' element={<HomePage />} />
      <Route path='/themes' element={<ThemesWorld />} />
      </Routes>
  )
}

export default App