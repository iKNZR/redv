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
        "/data/data.json"
      );
      const data = await response.json();
      if (data[idNumber].id == idNumber) {
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
              <img src={data.foto} alt="" />
              <div className="cardcontent">
                <h1>{data.nombre}</h1>
                <p>{data.descripcion}</p>
                <Link to={data.link} target="_blank">
                  <button>CONTACTA YA</button>
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
