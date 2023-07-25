import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Clients from './components/Clients'
import Consultancy from './components/Consultancy'
import Products from './components/Products'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Consultancy/>
      <Products/>
    </div>
  )
}

export default App