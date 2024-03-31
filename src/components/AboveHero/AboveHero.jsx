import React from 'react'
import './AboveHero.css'
import polo from '/assets/polocandidato.png'
import poster  from '/assets/posterpolo1.png'

const AboveHero = () => {
  return (
    <div className='avobe'>
        <div className="images">
            <img src={poster} alt="" />
            <img src={polo} alt="" />
        </div>
    </div>
  )
}

export default AboveHero