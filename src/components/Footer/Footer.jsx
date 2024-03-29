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
          <Link to="/senadores">Senadores</Link>
          <Link to="/diputados">Diputados</Link>
          <Link to="/conecta">Conecta Ya!</Link>
        </div>
        <img src={logo} alt="Logo" />
        <h3>@RedVeracruzEnMovimiento</h3>
      </div>
    </div>
  );
};

export default Footer;
