import React from 'react'
import './HomePage.css'
import Hero from '../../components/Hero/Hero'
import Banner from '../../components/Banner/Banner'

const HomePage = () => {
  return (
    <div>
        <Hero />
        <Banner endDate="2024-03-31" displayText="PARA LA CAMPAÑA A GOBERNADOR"/>
    </div>
  )
}

export default HomePage