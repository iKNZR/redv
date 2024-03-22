import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/Nav/NavBar'
import HomePage from './pages/Home/HomePage'

function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
