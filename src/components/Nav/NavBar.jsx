import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "/assets/Logo.png";

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
        <Link to="/">INICIO</Link>
        <Link to="/senadores">SENADORES</Link>
        <Link to="/diputados">DIPUTADOS</Link>
        <Link to="https://api.whatsapp.com/send?phone=5215586666977&text=hola" target="_blank">CONECTA YA!</Link>
      </div>
      <div className={menu ? "menu" : "hamburger"} onClick={handleActive}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      {menu ? (
        <div className="hamb-links">
          <Link to="/">INICIO</Link>
          <Link to="/senadores">SENADORES</Link>
          <Link to="/diputados">DIPUTADOS</Link>
          <Link to="https://api.whatsapp.com/send?phone=5215586666977&text=hola" target="_blank">CONECTA YA!</Link>
        </div>
      ) : <></>}
    </div>
  );
};

export default NavBar;
