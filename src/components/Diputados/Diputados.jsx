import React, { useState, useEffect } from "react";
import "./Diputados.css";
import { Link } from "react-router-dom";

const Diputados = () => {
  const [data, setData] = useState(null);
  const [hoverStatus, setHoverStatus] = useState({});

  const enterHover = (i) => {
    setHoverStatus({ ...hoverStatus, [i]: true });
  };

  const outHover = (i) => {
    setHoverStatus({ ...hoverStatus, [i]: false });
  };
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://vercesheetstest-goj7o2r0b-iknzrs-projects.vercel.app/data"
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="diputados">
      <h1>CONOCE A TUS DIPUTADOS</h1>
      <div className="diputados-container">
        {data ?
          data.map((row, _) => (
            <div
              key={row[0]}
              className="card"
              style={{ animationDelay: `${row[0] * 0.3}s` }}
              onMouseEnter={() => enterHover(row[0])}
              onMouseLeave={() => outHover(row[0])}
            >
              <img src={row[1]} alt={`Diputado ${row[2]}`} />
              <div className={hoverStatus[row[0]] ? "desc" : "descn"}>
                <p>{row[2]}</p>
                <Link to={`/diputados/${row[0]}`}>
                  <button className="contactame">Conóceme</button>
                </Link>
              </div>
            </div>
          )):
          <p>Cargando...</p>
          }
      </div>
    </div>
  );
};

export default Diputados;
