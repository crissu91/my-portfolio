import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'

import {
  Ripple,
  Input,
  initTE,
} from "tw-elements";
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    initTE({ Ripple, Input });
  }, [])

  
  return (
    <div className='h-full w-full'>
      <NavBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    <Footer />
    </div>
  )
}

export default App