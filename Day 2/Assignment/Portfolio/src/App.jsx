import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import Projects from './Components/Projects/Projects'

function App() {

  return (
    <div className="content">
      <Navbar />
      <br />
      <div className="about">
          <Profile />
          <Projects />
      </div>
    </div>
  )
}

export default App
