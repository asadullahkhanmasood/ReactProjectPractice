import { useState } from 'react'
// import './App.css'
import React from 'react'
import Navbar from './components/navbar/navbar'
// import "react-router" from 'react-router-dom'
import {BrowserRouter, Routes , Route } from 'react-router-dom'
import Home from "./pages/home/home"
import Projects from './pages/projects/projects'
function App() {

  return (
    <>
      <Navbar />

    <Routes>
      <Route  path='/' element={<Home/>} />



    </Routes>
    <Projects/>





    </>
  )
}

export default App
