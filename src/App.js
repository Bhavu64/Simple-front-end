import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Awards from './pages/Awards'
import Education from './pages/Education'

import Interest from './pages/Interest'
import Skills from './pages/skills'

const App = () => {
  return  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home  />} /> 
    <Route path="/Awards" element={<Awards  />} /> 
    <Route path="/Education" element={<Education   />} /> 
    
    <Route path="/Interest" element={<Interest  />} /> 
    <Route path="/Skills" element={<Skills  />} /> 

    
  </Routes>
  </BrowserRouter>
  </>
  
}

export default App