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
      const response = await fetch('/data/data.json');
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
    <div className="diputados" id="diputados">
      <h1>CONOCE A TUS DIPUTADOS</h1>
      <div className="diputados-container">
        {data ?
          data.map((row, _) => (
            <div
              key={row.id}
              className="card"
              style={{ animationDelay: `${row.id * 0.3}s` }}
              onMouseEnter={() => enterHover(row.id)}D
              onMouseLeave={() => outHover(row.id)}
            >
              <img src={row.foto} alt={`Diputado ${row.foto}`} />
              <div className={hoverStatus[row.id] ? "desc" : "descn"}>
                <p>{row.nombre}</p>
                <Link to={`/diputados/${row.id}`}  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
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
