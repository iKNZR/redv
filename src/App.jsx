import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/Nav/NavBar'
import HomePage from './pages/Home/HomePage'
import Footer from './components/Footer/Footer'
import DiputadoPage from './pages/DiputadoPage/DiputadoPage'
import FormPage from './pages/FormPage/FormPage'
function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/diputados/:id" element={<DiputadoPage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
