import React from 'react'
import './Hero.css'
import angelica from '/assets/angelica1.png'
import angelica_name from '/assets/Angelica_name.png'
import dante from '/assets/Dante.png'
import dante_name from '/assets/Dante_name.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="left">
            <img className='name' src={dante_name} alt="dante_name" />
            <img className='character' src={dante} alt="dante" />
        </div>
        <div className="right">
            <img className='character' src={angelica} alt="angelica" />
            <img className='name' src={angelica_name} alt="angelica_name" />
        </div>
    </div>
  )
}

export default Hero