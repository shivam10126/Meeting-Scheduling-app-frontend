import React, { useState } from 'react'
import DemoModal from '../components/DemoModal'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const Home = () => {
  const[showDemo,setShowDemo] = useState(false)
  return (
    <div>
      <Navbar setShowDemo={setShowDemo}  />
      <Hero />
      <DemoModal setShowDemo={setShowDemo} showDemo={showDemo} />
    </div>
  )
}

export default Home
