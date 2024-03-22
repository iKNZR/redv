import React from 'react'
import './Qr.css'
import qr from '/assets/qr.png'

const Qr = () => {
  return (
    <div className='codqr'>
        <img src={qr} alt="Código QR" />
    </div>
  )
}

export default Qr