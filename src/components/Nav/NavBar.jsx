import React, { useState } from "react";
import "./NavBar.css";
import logo from "../../../public/assets/Logo.png";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  const handleActive = () => {
    setMenu(!menu);
  };
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-links">
        <a href="/">INICIO</a>
        <a href="/senadores">SENADORES</a>
        <a href="/diputados">DIPUTADOS</a>
        <a href="https://api.whatsapp.com/send?phone=5215586666977&text=hola" target="_blank">CONECTA YA!</a>
      </div>
      <div className={menu ? "menu" : "hamburger"} onClick={handleActive}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      {menu ? (
        <div className="hamb-links">
          <a href="/">INICIO</a>
          <a href="/senadores">SENADORES</a>
          <a href="/diputados">DIPUTADOS</a>
          <a href="https://api.whatsapp.com/send?phone=5215586666977&text=hola" target="_blank">CONECTA YA!</a>
        </div>
      ) : <></>}
    </div>
  );
};

export default NavBar;
