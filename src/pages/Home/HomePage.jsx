import React from 'react'
import './HomePage.css'
import Hero from '../../components/Hero/Hero'
import Banner from '../../components/Banner/Banner'
import Diputados from '../../components/Diputados/Diputados'
import Qr from '../../components/QR/Qr'
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Button/Button'

const HomePage = () => {
  return (
    <div>
        <Hero />
        <Button text="CONECTA YA"/>
        <Banner endDate="2024-03-31" displayText="PARA LA CAMPAÑA A GOBERNADOR"/>
        <Qr />
        <Banner endDate="2024-04-31" displayText="PROXIMAMENTE"/>
        <Footer />
    </div>
  )
}

export default HomePage