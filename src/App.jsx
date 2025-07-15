import { useState } from 'react'
import './App.css'
import Navbar from './Component/NavBar/Navbar'
import Home from './Component/Home/Home'
import Main from './Component/Main/Main'
import Footer from './Component/Footer/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
