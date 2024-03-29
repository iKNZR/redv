import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/Nav/NavBar'
import HomePage from './pages/Home/HomePage'
import Footer from './components/Footer/Footer'
import DiputadosPage from './pages/DiputadosPage/DiputadosPage'
import DiputadoPage from './pages/DiputadoPage/DiputadoPage'

function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/diputados" element={<DiputadosPage />} />
        <Route path="/diputados/:id" element={<DiputadoPage />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
