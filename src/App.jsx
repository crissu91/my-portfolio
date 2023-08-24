import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div>
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