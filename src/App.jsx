import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Clients from './components/Clients'
import Consultancy from './components/Consultancy'
import Products from './components/Products'
import SparksLabs from './components/SparksLabs'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Consultancy/>
      <SparksLabs/>
      <Products/>
    </div>
  )
}

export default App