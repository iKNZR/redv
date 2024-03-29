import React, { useEffect, useState } from "react";
import "./DiputadoPage.css";
import { Link, useParams } from "react-router-dom";
import Qr from "../../components/QR/Qr";

const DiputadoPage = () => {
  const { id } = useParams();
  const idNumber = parseInt(id);
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://vercesheetstest-goj7o2r0b-iknzrs-projects.vercel.app/data"
      );
      const data = await response.json();
      if (data[idNumber][0] == idNumber) {
        setData(data[idNumber]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <>
      <div className="diputado-page">
        <div className="contenido">
          {data ? (
            <div className="bigcard">
              <img src={data[1]} alt="" />
              <div className="cardcontent">
                <h1>{data[2]}</h1>
                <p>{data[4]}</p>
                <Link to={data[3]} target="_blank">
                  <button>CONTÁCTAME</button>
                </Link>
              </div>
            </div>
          ) : (
            <p>Cargando...</p>
          )}
        </div>
      </div>
      <Qr />
    </>
  );
};

export default DiputadoPage;
