import React from "react";
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
          <a href="/">Inicio</a>
          <a href="/senadores">Senadores</a>
          <a href="/diputados">Diputados</a>
          <a href="/conecta">Conecta Ya!</a>
        </div>
        <img src={logo} alt="Logo" />
        <h3>@RedVeracruzEnMovimiento</h3>
      </div>
    </div>
  );
};

export default Footer;
