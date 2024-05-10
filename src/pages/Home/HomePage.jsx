import React from "react";
import "./HomePage.css";
import Hero from "../../components/Hero/Hero";
import Diputados from "../../components/Diputados/Diputados";
import Qr from "../../components/QR/Qr";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import AboveHero from "../../components/AboveHero/AboveHero";

const HomePage = () => {
  return (
    <div className="homepage">
      <AboveHero />
      <Hero />
      <Button text="CONTÁCTANOS" />
      <Diputados />
      <Qr />
    </div>
  );
};

export default HomePage;
