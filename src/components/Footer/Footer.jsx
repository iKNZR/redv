import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import qr_footer from "/assets/qr_footer.png";
import logo from "/assets/Logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left-sect">
        <img src={qr_footer} alt="QR Footer" />
      </div>
      <div className="right-sect">
        <h2>NOSOTROS</h2>
        <div className="foot-nav">
          <Link to="/">Inicio</Link>
          <Link href="#diputados">Diputados</Link>
          <Link to="https://api.whatsapp.com/send?phone=5215586666977&text=hola" target="_blank">Conecta Ya!</Link>
        </div>
        <img src={logo} alt="Logo" />
        <h3>@RedVeracruzEnMovimiento</h3>
      </div>
    </div>
  );
};

export default Footer;
