import React from 'react'
import './Hero.css'
import angelica from '../../../public/assets/angelica1.png'
import angelica_name from '../../../public/assets/Angelica_name.png'
import dante from '../../../public/assets/Dante.png'
import dante_name from '../../../public/assets/Dante_name.png'

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