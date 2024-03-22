import React from 'react'
import "./NavBar.css"
import logo from '../../../public/assets/Logo.png'

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className="logo"><img src={logo} alt="logo" /></div>
        <div className="nav-links">
            <a href="/">INICIO</a>
            <a href="/senadores">SENADORES</a>
            <a href="/diputados">DIPUTADOS</a>
            <a href="/conecta">CONECTA YA!</a>
        </div>
    </div>
  )
}

export default NavBar