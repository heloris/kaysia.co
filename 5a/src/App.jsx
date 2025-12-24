import React from 'react'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import EKGLine from './components/EKGLine'
import Quote from './components/Quote'
import Slogan from './components/Slogan'
import About from './components/About'
import Categories from './components/Categories'
import UpperFooter from './components/UpperFooter'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <EKGLine />
      <Quote />
      <Slogan />
      <About />
      <EKGLine />
      <Categories />
      <UpperFooter />
      <Footer />
    </div>
  )
}

export default App

