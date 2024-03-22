import React from 'react'
import './Diputados.css'
import diputado from '/assets/diputado.jpg'

const Diputados = () => {
  return (
    <div className='diputados'>
        <h1>CONOCE A TUS DIPUTADOS</h1>
        <div className="diputados-container">
            {Array(20).fill().map((_, i) => (
                <img key={i} src={diputado} alt={`Diputado ${i+1}`} />
            ))}
        </div>
    </div>
  )
}

export default Diputados