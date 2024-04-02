import React from "react";
import "./Qr.css";
import qr from "/assets/qr.png";
import { Link } from "react-router-dom";

const Qr = () => {
  return (
    <div className="codqr">
      <Link
        to="https://api.whatsapp.com/send?phone=5215586666977&text=hola"
        target="_blank"
      >
        <img src={qr} alt="Código QR" />
      </Link>
    </div>
  );
};

export default Qr;
